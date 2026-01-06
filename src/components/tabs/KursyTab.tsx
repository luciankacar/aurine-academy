import { useState, useEffect, useMemo } from "react";
import { BookOpen, Clock, ChevronRight, ChevronDown, ChevronUp, Play, Sparkles, ArrowRight, Star, Layers, CheckCircle2, GraduationCap, Users, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { courses } from "@/data/courses";
import { Course, Lesson } from "@/types/courses";
import CourseDetailView from "@/components/courses/CourseDetailView";
import LessonView from "@/components/courses/LessonView";
import IntroLessonView from "@/components/courses/IntroLessonView";
import CourseTransitionScreen from "@/components/courses/CourseTransitionScreen";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { getCourseColorScheme, getCourseIcon } from "@/lib/courseColors";
import MaterialyTab from "./MaterialyTab";

const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const transitionConfig = { duration: 0.15, ease: "linear" as const };

const INTRO_COURSE_ID = "wprowadzenie-do-aurine-academy";

interface KursyTabProps {
  initialCourseId?: string | null;
  onCourseOpened?: () => void;
}

const KursyTab = ({ initialCourseId, onCourseOpened }: KursyTabProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const { progress, loading: progressLoading, completeLesson, getCourseProgress, getOverallProgress, isLessonCompleted, getCompletedLessonsCount } = useCourseProgress();
  
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const [introLessonIndex, setIntroLessonIndex] = useState<number | null>(null);
  const [isRoadmapExpanded, setIsRoadmapExpanded] = useState(false);
  const [courseTransition, setCourseTransition] = useState<{ from: Course; to: Course } | null>(null);
  const [showMaterialy, setShowMaterialy] = useState(false);
  
  // Store the calculated course index to prevent flicker
  const [currentCourseIndex, setCurrentCourseIndex] = useState(() => {
    // Try to get from localStorage on initial render
    const stored = localStorage.getItem('currentCourseIndex');
    return stored ? parseInt(stored, 10) : 0;
  });

  // Handle initial course navigation
  useEffect(() => {
    if (initialCourseId) {
      const course = courses.find(c => c.id === initialCourseId);
      if (course) {
        setSelectedCourse(course);
        onCourseOpened?.();
      }
    }
  }, [initialCourseId, onCourseOpened]);

  // Separate intro course from regular courses
  const introCourse = courses.find(c => c.isIntro);
  const mainCourses = courses.filter(c => !c.isIntro);

  // Update current course index when progress loads
  useEffect(() => {
    if (progressLoading) return;
    
    // If no progress at all, reset to first course
    if (progress.length === 0) {
      setCurrentCourseIndex(0);
      localStorage.removeItem('currentCourseIndex');
      return;
    }
    
    // Find the most recent lesson completion
    const sortedProgress = [...progress].sort((a, b) => 
      new Date(b.completed_at).getTime() - new Date(a.completed_at).getTime()
    );
    const mostRecentCourseId = sortedProgress[0]?.course_id;
    
    // Find the index of that course in mainCourses (excluding intro)
    const courseIndex = mainCourses.findIndex(c => c.id === mostRecentCourseId);
    
    if (courseIndex >= 0) {
      // Check if that course is 100% complete
      const course = mainCourses[courseIndex];
      const completed = getCompletedLessonsCount(course.id);
      const total = course.modules.reduce((sum, m) => sum + m.lessons.length, 0);
      
      // If complete, show next course in order
      if (completed >= total && courseIndex < mainCourses.length - 1) {
        // Find next course with content
        for (let i = courseIndex + 1; i < mainCourses.length; i++) {
          if (mainCourses[i].modules.length > 0) {
            setCurrentCourseIndex(i);
            localStorage.setItem('currentCourseIndex', String(i));
            return;
          }
        }
      }
      setCurrentCourseIndex(courseIndex);
      localStorage.setItem('currentCourseIndex', String(courseIndex));
    } else {
      // Progress exists but course not found - reset to 0
      setCurrentCourseIndex(0);
      localStorage.removeItem('currentCourseIndex');
    }
  }, [progress, progressLoading, getCompletedLessonsCount, mainCourses]);

  // Calculate total stats - exclude intro courses
  const regularCourses = courses.filter(c => !c.isIntro);
  const totalLessons = regularCourses.reduce((acc, c) => acc + c.totalLessons, 0);
  const totalHours = regularCourses.reduce((acc, c) => acc + c.estimatedHours, 0);
  const availableCourses = regularCourses.filter(c => c.modules.length > 0);

  // Get all lessons flat list for navigation
  const getAllLessons = (course: Course): Lesson[] => {
    return course.modules.flatMap(m => m.lessons);
  };

  // Find next lesson in SAME course only
  const getNextLessonInCourse = (): Lesson | null => {
    if (!selectedCourse || !selectedLesson) return null;
    
    const allLessons = getAllLessons(selectedCourse);
    const currentIndex = allLessons.findIndex(l => l.id === selectedLesson.id);
    
    if (currentIndex >= 0 && currentIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentIndex + 1];
      if (nextLesson.sections.length > 0) {
        return nextLesson;
      }
    }
    
    return null;
  };

  // Find next course (when current course ends)
  const getNextCourse = (): Course | null => {
    if (!selectedCourse) return null;
    
    const currentCourseIdx = courses.findIndex(c => c.id === selectedCourse.id);
    if (currentCourseIdx >= 0) {
      for (let i = currentCourseIdx + 1; i < courses.length; i++) {
        const nextCourse = courses[i];
        if (nextCourse.modules.length > 0 && nextCourse.modules[0].lessons.length > 0) {
          const firstLesson = nextCourse.modules[0].lessons[0];
          if (firstLesson.sections.length > 0) {
            return nextCourse;
          }
        }
      }
    }
    
    return null;
  };

  // Check if current lesson is last in course
  const isLastLessonInCourse = (): boolean => {
    if (!selectedCourse || !selectedLesson) return false;
    const allLessons = getAllLessons(selectedCourse);
    const currentIndex = allLessons.findIndex(l => l.id === selectedLesson.id);
    return currentIndex === allLessons.length - 1;
  };

  const nextLessonInCourse = getNextLessonInCourse();
  const nextCourse = getNextCourse();
  const isLastLesson = isLastLessonInCourse();

  // Determine current view key for animation
  const getViewKey = () => {
    if (showMaterialy) return "materialy";
    if (courseTransition) return "transition";
    if (introLessonIndex !== null) return `intro-${introLessonIndex}`;
    if (selectedLesson) return `lesson-${selectedLesson.id}`;
    if (selectedCourse) return `course-${selectedCourse.id}`;
    return "list";
  };

  // Render content based on current state
  const renderContent = () => {
    // Show materialy view
    if (showMaterialy) {
      return (
        <div>
          <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm border-b border-border px-4 py-3">
            <button
              onClick={() => setShowMaterialy(false)}
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Wróć do kursów
            </button>
          </div>
          <MaterialyTab />
        </div>
      );
    }
    // Show course transition screen
    if (courseTransition) {
      return (
        <CourseTransitionScreen
          completedCourse={courseTransition.from}
          nextCourse={courseTransition.to}
          onContinue={() => {
            setSelectedCourse(courseTransition.to);
            setCourseTransition(null);
          }}
        />
      );
    }

    // Show intro lesson view
    if (introLessonIndex !== null) {
      return (
        <IntroLessonView 
          lessonIndex={introLessonIndex}
          totalLessons={3}
          onBack={() => {
            setIntroLessonIndex(null);
            setSelectedCourse(null);
          }}
          onNext={() => setIntroLessonIndex(prev => (prev !== null ? prev + 1 : 0))}
          onFinish={() => {
            setIntroLessonIndex(null);
            const firstCourse = courses.find(c => c.id !== INTRO_COURSE_ID && c.modules.length > 0);
            setSelectedCourse(firstCourse || null);
          }}
        />
      );
    }

    // Show lesson view
    if (selectedLesson && selectedCourse) {
      const handleNext = async () => {
        // Mark current lesson as completed
        await completeLesson(selectedCourse.id, selectedLesson.id);
        if (nextLessonInCourse) {
          setSelectedLesson(nextLessonInCourse);
        }
      };

      const handleFinishCourse = async () => {
        // Mark current lesson as completed
        await completeLesson(selectedCourse.id, selectedLesson.id);
        
        if (nextCourse) {
          setCourseTransition({
            from: selectedCourse,
            to: nextCourse
          });
          setSelectedLesson(null);
        } else {
          setSelectedLesson(null);
          setSelectedCourse(null);
        }
      };

      return (
        <LessonView 
          lesson={selectedLesson}
          courseId={selectedCourse.id}
          onBack={() => setSelectedLesson(null)}
          onNext={nextLessonInCourse ? handleNext : undefined}
          onFinishCourse={isLastLesson ? handleFinishCourse : undefined}
          hasNext={!!nextLessonInCourse}
          isLastLesson={isLastLesson}
          hasNextCourse={!!nextCourse}
        />
      );
    }

    // Show course detail view
    if (selectedCourse) {
      // For intro course, go straight to intro lessons
      if (selectedCourse.id === INTRO_COURSE_ID) {
        setIntroLessonIndex(0);
        return null;
      }
      
      return (
        <CourseDetailView 
          course={selectedCourse}
          onBack={() => setSelectedCourse(null)}
          onSelectLesson={setSelectedLesson}
        />
      );
    }

    // Show course list directly without skeleton to prevent flicker
    return (
      <div className="px-4 py-5 pb-14">
      {/* Premium Header */}
      <div className="mb-7">
        <div className="flex items-start gap-3 mb-3">
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-pink-500/10 border border-primary/20 shadow-md shadow-primary/10">
              <GraduationCap className="h-5 w-5 text-primary" />
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-md bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center shadow-sm">
              <Sparkles className="h-2.5 w-2.5 text-primary-foreground" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground tracking-tight mb-0.5">
              Kursy
            </h1>
            <p className="text-xs text-muted-foreground/80">
              Twoja droga do sukcesu w social media
            </p>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          Praktyczne szkolenia krok po kroku, które przeprowadzą Cię przez wszystkie aspekty marketingu salonu beauty.
        </p>
        
        {/* Stats Pills */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card border border-border/50 shadow-sm">
            <Layers className="h-3 w-3 text-primary" />
            <span className="text-[10px] font-medium text-foreground">{regularCourses.length} kursów</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card border border-border/50 shadow-sm">
            <BookOpen className="h-3 w-3 text-emerald-500" />
            <span className="text-[10px] font-medium text-foreground">{totalLessons} lekcji</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card border border-border/50 shadow-sm">
            <Clock className="h-3 w-3 text-violet-500" />
            <span className="text-[10px] font-medium text-foreground">~{totalHours}h</span>
          </div>
        </div>
      </div>

      {/* Zacznij tutaj + Materiały section */}
      <div className="mb-5 space-y-3">
        {/* Zacznij tutaj */}
        {introCourse && (
          <div 
            onClick={() => setSelectedCourse(introCourse)}
            className={`relative rounded-xl border overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md ${
              isDark 
                ? 'bg-gradient-to-br from-violet-950/50 via-card to-purple-950/30 border-violet-500/20 hover:border-violet-500/40' 
                : 'bg-gradient-to-br from-violet-50 via-card to-purple-50 border-violet-200/50 hover:border-violet-300'
            }`}
          >
            <div className="p-4 flex items-center gap-3">
              <div className={`h-10 w-10 rounded-lg flex items-center justify-center ${
                getCourseProgress(introCourse.id) === 100
                  ? 'bg-gradient-to-br from-emerald-500 to-green-500'
                  : 'bg-gradient-to-br from-violet-500 to-purple-500'
              }`}>
                {getCourseProgress(introCourse.id) === 100 ? (
                  <CheckCircle2 className="h-5 w-5 text-white" />
                ) : (
                  <GraduationCap className="h-5 w-5 text-white" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <h3 className="text-sm font-semibold text-foreground">Zacznij tutaj</h3>
                  {getCourseProgress(introCourse.id) === 100 && (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-500 font-medium">Ukończone</span>
                  )}
                </div>
                <p className="text-[11px] text-muted-foreground line-clamp-1">{introCourse.description}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
            </div>
          </div>
        )}

        {/* Materiały dla pracowników */}
        <div 
          onClick={() => setShowMaterialy(true)}
          className={`relative rounded-xl border overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-md ${
            isDark 
              ? 'bg-gradient-to-br from-amber-950/50 via-card to-orange-950/30 border-amber-500/20 hover:border-amber-500/40' 
              : 'bg-gradient-to-br from-amber-50 via-card to-orange-50 border-amber-200/50 hover:border-amber-300'
          }`}
        >
          <div className="p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-amber-500 to-orange-500">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-foreground mb-0.5">Materiały dla pracowników</h3>
              <p className="text-[11px] text-muted-foreground line-clamp-1">Gotowe skrypty rozmów z klientkami</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
          </div>
        </div>
      </div>

      {/* HERO: Twoja Ścieżka Nauki */}
      <div className="mb-7">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center shadow-sm shadow-primary/25">
            <Star className="h-3 w-3 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">Twoja Ścieżka Nauki</h2>
            <p className="text-[10px] text-muted-foreground">Śledź swój postęp od A do Z</p>
          </div>
        </div>
        
        <div className={`relative rounded-xl border overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-card via-card to-primary/5 border-border/50' 
            : 'bg-gradient-to-br from-card via-card to-pink-50/50 border-border/30'
        } shadow-lg shadow-primary/5`}
        style={{ transform: 'translateZ(0)', backfaceVisibility: 'hidden' }}>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-pink-500/5 to-transparent rounded-tr-full pointer-events-none" />
          
          <div className="relative p-4">
            {/* Roadmap Timeline */}
            <div className="relative space-y-0">
              {(() => {
                // Show current course + 2 next ones, or all if expanded (only mainCourses, not intro)
                const visibleCourses = isRoadmapExpanded 
                  ? mainCourses 
                  : mainCourses.slice(currentCourseIndex, currentCourseIndex + 3);
                const hasMoreCourses = mainCourses.length > currentCourseIndex + 3;
                
                return (
                  <>
                    {visibleCourses.map((course, visibleIndex) => {
                      const actualIndex = isRoadmapExpanded ? visibleIndex : currentCourseIndex + visibleIndex;
                      const IconComponent = getCourseIcon(course.icon);
                      const colors = getCourseColorScheme(course.color);
                      const hasContent = course.modules.length > 0;
                      const isLastVisible = visibleIndex === visibleCourses.length - 1;
                      const isCurrent = actualIndex === currentCourseIndex;
                      
                      const courseProgress = getCourseProgress(course.id);
                      const isCompleted = courseProgress === 100;
                      const isStarted = courseProgress > 0;
                      
                      return (
                        <div key={course.id} className="flex gap-3 pb-4 last:pb-0" style={{ transform: 'translateZ(0)' }}>
                          {/* Left column with icon and line */}
                          <div className="relative flex flex-col items-center w-9 shrink-0">
                            {/* Node with Glow */}
                            <div className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-lg transition-all duration-300 ${
                              isCompleted
                                ? 'bg-gradient-to-br from-emerald-500 to-green-500 shadow-md shadow-emerald-500/20'
                                : isCurrent 
                                  ? `bg-gradient-to-br ${colors.gradient} shadow-md ${colors.glowColor}` 
                                  : `${colors.iconBg} border ${colors.borderColor}`
                            }`}>
                              {isCompleted ? (
                                <CheckCircle2 className="h-4 w-4 text-white" />
                              ) : (
                                <IconComponent className={`h-4 w-4 ${
                                  isCurrent ? 'text-white' : colors.iconColor
                                }`} />
                              )}
                              {isCurrent && !isCompleted && (
                                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded bg-card border-2 border-primary flex items-center justify-center">
                                  <div className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                                </div>
                              )}
                            </div>
                            
                            {/* Connecting Line */}
                            {(!isLastVisible || (hasMoreCourses && !isRoadmapExpanded)) && (
                              <div className={`flex-1 w-[2px] mt-1.5 rounded-full ${
                                isCompleted
                                  ? 'bg-gradient-to-b from-emerald-500 to-border'
                                  : isCurrent 
                                    ? 'bg-gradient-to-b from-primary via-primary/50 to-border' 
                                    : 'bg-border'
                              }`} />
                            )}
                          </div>
                          
                          {/* Content Card */}
                          <div 
                            onClick={() => hasContent && setSelectedCourse(course)}
                            className={`flex-1 min-w-0 overflow-hidden p-2.5 rounded-lg transition-all duration-200 ${
                              hasContent 
                                ? `cursor-pointer hover:bg-muted/50 ${isCurrent && !isCompleted ? colors.accentBg : ''} ${isCompleted ? 'bg-emerald-950/30' : ''}` 
                                : 'opacity-50'
                            }`}
                          >
                            <div className="flex items-start gap-1.5 mb-1">
                              <h3 className={`text-xs font-semibold flex-1 min-w-0 ${isCompleted ? 'text-emerald-400' : 'text-foreground'}`}>
                                {course.title}
                              </h3>
                              {isCompleted && (
                                <span className="px-1.5 py-0.5 rounded bg-gradient-to-r from-emerald-500 to-green-500 text-white text-[8px] font-bold uppercase tracking-wide shadow-sm shrink-0">
                                  Ukończony
                                </span>
                              )}
                              {isCurrent && !isCompleted && (
                                <span className={`px-1.5 py-0.5 rounded bg-gradient-to-r ${colors.gradient} text-white text-[8px] font-bold uppercase tracking-wide shadow-sm shrink-0`}>
                                  Teraz
                                </span>
                              )}
                              {!hasContent && (
                                <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground text-[8px] font-medium shrink-0">
                                  Wkrótce
                                </span>
                              )}
                            </div>
                            <p className="text-[10px] text-muted-foreground line-clamp-2 mb-1.5">
                              {course.description}
                            </p>
                            
                            {/* Progress bar for courses with content */}
                            {hasContent && (
                              <div className="mb-1.5">
                                <div className="flex items-center justify-between mb-0.5">
                                  <span className="text-[8px] text-muted-foreground">
                                    {isCompleted ? 'Ukończono' : isStarted ? 'W trakcie' : 'Do ukończenia'}
                                  </span>
                                  <span className={`text-[8px] font-bold ${isCompleted ? 'text-emerald-400' : isStarted ? 'text-primary' : 'text-muted-foreground'}`}>
                                    {courseProgress}%
                                  </span>
                                </div>
                                <div className="h-1 bg-muted/50 rounded-full overflow-hidden">
                                  <div 
                                    className={`h-full rounded-full transition-all duration-300 ${
                                      isCompleted 
                                        ? 'bg-gradient-to-r from-emerald-500 to-green-500' 
                                        : 'bg-gradient-to-r from-primary to-pink-500'
                                    }`} 
                                    style={{ width: `${Math.max(courseProgress, 0)}%` }} 
                                  />
                                </div>
                              </div>
                            )}
                            
                            <div className="flex items-center gap-1.5 text-[9px] text-muted-foreground/70">
                              <span className="inline-flex items-center gap-0.5 px-1 py-0.5 rounded bg-muted/50 shrink-0">
                                <Layers className="h-2 w-2" />
                                {course.modules.length} mod.
                              </span>
                              <span className="inline-flex items-center gap-0.5 px-1 py-0.5 rounded bg-muted/50 shrink-0">
                                <BookOpen className="h-2 w-2" />
                                {course.totalLessons} lek.
                              </span>
                              <span className="inline-flex items-center gap-0.5 px-1 py-0.5 rounded bg-muted/50 shrink-0">
                                <Clock className="h-2 w-2" />
                                ~{course.estimatedHours}h
                              </span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                    
                    {/* Expand/Collapse Button - subtle text style */}
                    {(mainCourses.length > 3 || isRoadmapExpanded) && (
                      <button
                        onClick={() => setIsRoadmapExpanded(!isRoadmapExpanded)}
                        className="flex items-center justify-center gap-1 w-full mt-2 py-1.5 text-[10px] text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ChevronDown className={`h-3 w-3 transition-transform ${isRoadmapExpanded ? 'rotate-180' : ''}`} />
                        {isRoadmapExpanded ? 'Zwiń' : `Pokaż wszystkie (${mainCourses.length - 3} więcej)`}
                      </button>
                    )}
                  </>
                );
              })()}
            </div>
            
            {/* Progress & CTA */}
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-medium text-muted-foreground">Postęp ścieżki</span>
                <span className="text-[10px] font-bold text-foreground">{getOverallProgress()}%</span>
              </div>
              <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden mb-4 shadow-inner">
                <div className="h-full bg-gradient-to-r from-primary via-pink-500 to-rose-500 rounded-full shadow-sm" style={{ width: `${Math.max(getOverallProgress(), 2)}%` }} />
              </div>
              <button 
                onClick={() => {
                  const currentCourse = mainCourses[currentCourseIndex];
                  if (currentCourse && currentCourse.modules.length > 0) {
                    setSelectedCourse(currentCourse);
                  }
                }}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-primary to-pink-500 text-primary-foreground text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 shadow-md shadow-primary/25 group"
              >
                <Play className="h-3.5 w-3.5" />
                Kontynuuj naukę
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Polecane dla Ciebie - kursy dopasowane do postępu */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-md bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/30">
              <Sparkles className="h-2.5 w-2.5 text-amber-500" />
            </div>
            <h2 className="text-sm font-semibold text-foreground">Polecane dla Ciebie</h2>
          </div>
          <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
            Na podstawie postępu
          </span>
        </div>
        
        <div className="space-y-2.5">
          {/* Show recommended courses based on progress - current, next, and one more */}
          {(() => {
            // Get recommended courses: current (if has content), next available, and one more
            const recommendedCourses: { course: Course; reason: string; index: number }[] = [];
            
            // Current course (the one user is on) - from mainCourses only
            const currentCourse = mainCourses[currentCourseIndex];
            if (currentCourse && currentCourse.modules.length > 0) {
              recommendedCourses.push({ course: currentCourse, reason: "Kontynuuj", index: currentCourseIndex });
            }
            
            // Next course with content
            for (let i = currentCourseIndex + 1; i < mainCourses.length && recommendedCourses.length < 2; i++) {
              if (mainCourses[i].modules.length > 0) {
                recommendedCourses.push({ course: mainCourses[i], reason: "Następny", index: i });
              }
            }
            
            // One more popular course (pick from later in the list)
            for (let i = currentCourseIndex + 2; i < mainCourses.length && recommendedCourses.length < 3; i++) {
              const alreadyAdded = recommendedCourses.some(r => r.course.id === mainCourses[i].id);
              if (mainCourses[i].modules.length > 0 && !alreadyAdded) {
                recommendedCourses.push({ course: mainCourses[i], reason: "Popularne", index: i });
              }
            }
            
            return recommendedCourses.map(({ course, reason, index }) => {
              const IconComponent = getCourseIcon(course.icon);
              const colors = getCourseColorScheme(course.color);
              
              return (
                <div
                  key={course.id}
                  onClick={() => setSelectedCourse(course)}
                  className={`group relative bg-card rounded-lg border overflow-hidden transition-all duration-300 cursor-pointer ${colors.borderColor} hover:shadow-md hover:-translate-y-0.5`}
                >
                  {/* Subtle gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />
                  
                  <div className="relative p-3">
                    <div className="flex items-start gap-3">
                      {/* Premium Icon Container */}
                      <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colors.iconBg} border ${colors.borderColor} shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                        <IconComponent className={`h-4 w-4 ${colors.iconColor}`} />
                        <div className={`absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                          <ChevronRight className="h-1.5 w-1.5 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-1">
                          <h3 className="text-xs font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-1.5">
                            <span className={`text-[8px] px-1.5 py-0.5 rounded font-medium ${
                              reason === "Kontynuuj" 
                                ? "bg-primary/10 text-primary border border-primary/20" 
                                : reason === "Następny"
                                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20"
                                : "bg-violet-500/10 text-violet-600 dark:text-violet-400 border border-violet-500/20"
                            }`}>
                              {reason}
                            </span>
                            <ChevronRight className={`h-3.5 w-3.5 ${colors.iconColor} opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200`} />
                          </div>
                        </div>
                        
                        <p className="text-[10px] text-muted-foreground line-clamp-2 mb-2 leading-relaxed">
                          {course.description}
                        </p>
                        
                        {/* Stats Row */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className="inline-flex items-center gap-0.5 text-[9px] text-muted-foreground/70 px-1 py-0.5 rounded bg-muted/50">
                              <Layers className="h-2 w-2" />
                              {course.modules.length}
                            </span>
                            <span className="inline-flex items-center gap-0.5 text-[9px] text-muted-foreground/70 px-1 py-0.5 rounded bg-muted/50">
                              <BookOpen className="h-2 w-2" />
                              {course.totalLessons}
                            </span>
                            <span className="inline-flex items-center gap-0.5 text-[9px] text-muted-foreground/70 px-1 py-0.5 rounded bg-muted/50">
                              <Clock className="h-2 w-2" />
                              ~{course.estimatedHours}h
                            </span>
                          </div>
                          
                          {/* Progress indicator */}
                          {(() => {
                            const courseProgressValue = getCourseProgress(course.id);
                            return (
                              <div className="flex items-center gap-1">
                                <div className="h-1 w-8 bg-muted/70 rounded-full overflow-hidden">
                                  <div className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full`} style={{ width: `${courseProgressValue}%` }} />
                                </div>
                                <span className="text-[8px] text-muted-foreground/60">{courseProgressValue}%</span>
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            });
          })()}
        </div>
      </div>
    </div>
    );
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={getViewKey()}
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
        transition={transitionConfig}
      >
        {renderContent()}
      </motion.div>
    </AnimatePresence>
  );
};

export default KursyTab;
