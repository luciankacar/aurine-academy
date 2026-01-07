import { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { courses } from '@/data/courses';

interface LessonProgress {
  course_id: string;
  lesson_id: string;
  completed_at: string;
}

interface NextLesson {
  courseId: string;
  courseTitle: string;
  courseIcon: string;
  courseColor: string;
  moduleId: string;
  moduleTitle: string;
  lessonId: string;
  lessonTitle: string;
  lessonNumber: number;
  totalLessons: number;
  completedLessons: number;
  estimatedMinutes: number;
  progress: number;
}

export const useCourseProgress = () => {
  const { user, loading: authLoading } = useAuth();
  const [progress, setProgress] = useState<LessonProgress[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch user's progress
  const fetchProgress = useCallback(async () => {
    // Wait until auth resolves to avoid a false "no progress" state
    if (authLoading) return;

    if (!user) {
      setProgress([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase
        .from('lesson_progress')
        .select('course_id, lesson_id, completed_at')
        .eq('user_id', user.id);

      if (error) {
        console.error('Error fetching progress:', error);
      } else {
        setProgress(data || []);
      }
    } catch (err) {
      console.error('Error fetching progress:', err);
    } finally {
      setLoading(false);
    }
  }, [user, authLoading]);

  useEffect(() => {
    fetchProgress();
  }, [fetchProgress]);

  // Mark lesson as completed
  const completeLesson = async (courseId: string, lessonId: string) => {
    if (!user) {
      console.error('Cannot complete lesson: Not authenticated');
      return { error: new Error('Not authenticated') };
    }

    console.log('Completing lesson:', { userId: user.id, courseId, lessonId });

    // First check if already completed
    const existing = progress.find(p => p.course_id === courseId && p.lesson_id === lessonId);
    if (existing) {
      console.log('Lesson already completed');
      return { error: null };
    }

    const { data, error } = await supabase
      .from('lesson_progress')
      .insert({
        user_id: user.id,
        course_id: courseId,
        lesson_id: lessonId,
      })
      .select();

    if (error) {
      console.error('Error completing lesson:', error);
    } else {
      console.log('Lesson completed successfully:', data);
      await fetchProgress();
    }

    return { error };
  };

  // Check if a lesson is completed
  const isLessonCompleted = (courseId: string, lessonId: string) => {
    return progress.some(p => p.course_id === courseId && p.lesson_id === lessonId);
  };

  // Get total lessons count for a course
  const getTotalLessonsCount = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    if (!course) return 0;
    return course.modules.reduce((sum, module) => sum + module.lessons.length, 0);
  };

  // Get course progress percentage
  const getCourseProgress = (courseId: string) => {
    const totalLessons = getTotalLessonsCount(courseId);
    if (totalLessons === 0) return 0;

    const completedLessons = progress.filter(p => p.course_id === courseId).length;
    return Math.round((completedLessons / totalLessons) * 100);
  };

  // Get overall progress across all courses
  const getOverallProgress = () => {
    const totalLessons = courses.reduce((sum, course) => 
      sum + course.modules.reduce((moduleSum, module) => moduleSum + module.lessons.length, 0), 0);
    if (totalLessons === 0) return 0;

    return Math.round((progress.length / totalLessons) * 100);
  };

  // Get category progress (for dashboard)
  const getCategoryProgress = (courseIds: string[]) => {
    const categoryCourses = courses.filter(c => courseIds.includes(c.id));
    const totalLessons = categoryCourses.reduce((sum, course) => 
      sum + course.modules.reduce((moduleSum, module) => moduleSum + module.lessons.length, 0), 0);
    if (totalLessons === 0) return 0;

    const completedLessons = progress.filter(p => courseIds.includes(p.course_id)).length;
    return Math.round((completedLessons / totalLessons) * 100);
  };

  // Get number of completed lessons for a course
  const getCompletedLessonsCount = (courseId: string) => {
    return progress.filter(p => p.course_id === courseId).length;
  };

  // Find next lessons to continue - based on MOST RECENT activity
  const getNextLessons = useMemo((): NextLesson[] => {
    const nextLessons: NextLesson[] = [];
    
    // If no progress at all, suggest starting from first course
    if (progress.length === 0) {
      const firstCourse = courses.find(c => !c.isIntro && c.modules.length > 0) || courses[0];
      if (firstCourse) {
        const firstModule = firstCourse.modules[0];
        const firstLesson = firstModule?.lessons[0];
        
        if (firstLesson) {
          const totalLessons = firstCourse.modules.reduce(
            (sum, m) => sum + m.lessons.length, 0
          );
          
          nextLessons.push({
            courseId: firstCourse.id,
            courseTitle: firstCourse.title,
            courseIcon: firstCourse.icon,
            courseColor: firstCourse.color,
            moduleId: firstModule.id,
            moduleTitle: firstModule.title,
            lessonId: firstLesson.id,
            lessonTitle: firstLesson.title,
            lessonNumber: 1,
            totalLessons,
            completedLessons: 0,
            estimatedMinutes: firstLesson.estimatedMinutes,
            progress: 0,
          });
        }
      }
      return nextLessons;
    }
    
    // Get courses sorted by most recent activity
    const courseLastActivity = new Map<string, string>();
    for (const p of progress) {
      const existing = courseLastActivity.get(p.course_id);
      if (!existing || new Date(p.completed_at) > new Date(existing)) {
        courseLastActivity.set(p.course_id, p.completed_at);
      }
    }
    
    // Sort courses by last activity (most recent first)
    const sortedCourseIds = [...courseLastActivity.entries()]
      .sort((a, b) => new Date(b[1]).getTime() - new Date(a[1]).getTime())
      .map(([courseId]) => courseId);

    for (const courseId of sortedCourseIds) {
      const course = courses.find(c => c.id === courseId);
      if (!course) continue;
      
      const courseProgress = progress.filter(p => p.course_id === course.id);
      const completedLessonIds = new Set(courseProgress.map(p => p.lesson_id));
      
      let lessonNumber = 0;
      let totalLessons = 0;
      
      // Count total lessons
      for (const module of course.modules) {
        totalLessons += module.lessons.length;
      }
      
      // Skip if course is 100% complete
      if (completedLessonIds.size >= totalLessons) continue;

      // Find first incomplete lesson
      for (const module of course.modules) {
        for (const lesson of module.lessons) {
          lessonNumber++;
          
          if (!completedLessonIds.has(lesson.id)) {
            // This is the next lesson to do
            const completedCount = completedLessonIds.size;
            const progressPercent = totalLessons > 0 
              ? Math.round((completedCount / totalLessons) * 100) 
              : 0;

            nextLessons.push({
              courseId: course.id,
              courseTitle: course.title,
              courseIcon: course.icon,
              courseColor: course.color,
              moduleId: module.id,
              moduleTitle: module.title,
              lessonId: lesson.id,
              lessonTitle: lesson.title,
              lessonNumber,
              totalLessons,
              completedLessons: completedCount,
              estimatedMinutes: lesson.estimatedMinutes,
              progress: progressPercent,
            });
            break; // Move to next course
          }
        }
        
        // Check if we found a lesson in this course
        if (nextLessons.find(l => l.courseId === course.id)) {
          break;
        }
      }
      
      // Stop if we have 3 courses
      if (nextLessons.length >= 3) break;
    }

    // If still no suggestions (all courses complete), suggest first course again
    if (nextLessons.length === 0 && courses.length > 0) {
      const firstCourse = courses.find(c => !c.isIntro && c.modules.length > 0) || courses[0];
      const firstModule = firstCourse.modules[0];
      const firstLesson = firstModule?.lessons[0];
      
      if (firstLesson) {
        const totalLessons = firstCourse.modules.reduce(
          (sum, m) => sum + m.lessons.length, 0
        );
        
        nextLessons.push({
          courseId: firstCourse.id,
          courseTitle: firstCourse.title,
          courseIcon: firstCourse.icon,
          courseColor: firstCourse.color,
          moduleId: firstModule.id,
          moduleTitle: firstModule.title,
          lessonId: firstLesson.id,
          lessonTitle: firstLesson.title,
          lessonNumber: 1,
          totalLessons,
          completedLessons: 0,
          estimatedMinutes: firstLesson.estimatedMinutes,
          progress: 0,
        });
      }
    }

    return nextLessons.slice(0, 3); // Return max 3 suggestions
  }, [progress]);

  return {
    progress,
    loading,
    completeLesson,
    isLessonCompleted,
    getCourseProgress,
    getOverallProgress,
    getCategoryProgress,
    getCompletedLessonsCount,
    getNextLessons,
    refetch: fetchProgress,
  };
};