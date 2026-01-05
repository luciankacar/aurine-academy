import { useState } from "react";
import { ArrowLeft, Clock, BookOpen, ChevronDown, ChevronRight, Play, Layers, Lock, Sparkles, Star, CheckCircle } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Course, Lesson } from "@/types/courses";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { getCourseColorScheme, getCourseIcon } from "@/lib/courseColors";

interface CourseDetailViewProps {
  course: Course;
  onBack: () => void;
  onSelectLesson: (lesson: Lesson) => void;
}

const CourseDetailView = ({ course, onBack, onSelectLesson }: CourseDetailViewProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [expandedModule, setExpandedModule] = useState<string | null>(course.modules[0]?.id || null);
  const { getCourseProgress, getCompletedLessonsCount, isLessonCompleted } = useCourseProgress();

  // Use color scheme from course data
  const colors = getCourseColorScheme(course.color);
  const completedLessons = getCompletedLessonsCount(course.id);
  const progressPercentage = getCourseProgress(course.id);

  const isLessonAvailable = (moduleIndex: number, lessonIndex: number) => {
    // All lessons are available
    return true;
  };

  // Use icon from course data
  const IconComponent = getCourseIcon(course.icon);

  return (
    <div className="min-h-screen bg-background pb-14">
      {/* Header - same style as KursyTab */}
      <div className="px-4 py-5">
        {/* Back button */}
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all mb-4"
        >
          <ArrowLeft className="w-3 h-3" />
          Powrót do kursów
        </button>

        {/* Course header */}
        <div className="flex items-start gap-3 mb-3">
          <div className="relative">
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${colors.iconBg} border ${colors.borderColor} shadow-md ${colors.glowColor}`}>
              <IconComponent className={`h-5 w-5 ${colors.iconColor}`} />
            </div>
            <div className={`absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-md bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-sm`}>
              <Sparkles className="h-2.5 w-2.5 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground tracking-tight mb-0.5">
              {course.title}
            </h1>
            <p className="text-xs text-muted-foreground/80">
              Krok po kroku do sukcesu
            </p>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground leading-relaxed mb-4">
          {course.description}
        </p>
        
        {/* Stats Pills - same as KursyTab */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card border border-border/50 shadow-sm">
            <Layers className={`h-3 w-3 ${colors.iconColor}`} />
            <span className="text-[10px] font-medium text-foreground">{course.modules.length} moduły</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card border border-border/50 shadow-sm">
            <BookOpen className="h-3 w-3 text-emerald-500" />
            <span className="text-[10px] font-medium text-foreground">{course.totalLessons} lekcji</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-card border border-border/50 shadow-sm">
            <Clock className="h-3 w-3 text-violet-500" />
            <span className="text-[10px] font-medium text-foreground">~{course.estimatedHours}h</span>
          </div>
        </div>
      </div>

      {/* Progress Card - same style as KursyTab HERO */}
      <div className="px-4 mb-5">
        <div className={`relative rounded-xl border overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-card via-card to-primary/5 border-border/50' 
            : 'bg-gradient-to-br from-card via-card to-pink-50/50 border-border/30'
        } shadow-lg shadow-primary/5`}>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full pointer-events-none" />
          
          <div className="relative p-4">
            <div className="flex items-center gap-2 mb-3">
              <div className={`h-6 w-6 rounded-md bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-sm ${colors.glowColor}`}>
                <Star className="h-3 w-3 text-white" />
              </div>
              <div>
                <span className="text-xs font-semibold text-foreground">Twój postęp</span>
                <p className="text-[9px] text-muted-foreground">{completedLessons} z {course.totalLessons} lekcji ukończonych</p>
              </div>
              <span className={`ml-auto text-sm font-bold ${colors.iconColor}`}>{Math.round(progressPercentage)}%</span>
            </div>
            <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden shadow-inner">
              <div 
                className={`h-full bg-gradient-to-r ${colors.gradient} rounded-full shadow-sm`}
                style={{ width: `${Math.max(progressPercentage, 2)}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modules - same card style as KursyTab courses */}
      <div className="px-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-5 w-5 rounded-md bg-muted flex items-center justify-center">
            <Layers className="h-2.5 w-2.5 text-muted-foreground" />
          </div>
          <h2 className="text-sm font-semibold text-foreground">Program kursu</h2>
          <span className="text-[9px] font-medium px-1.5 py-0.5 rounded bg-muted text-muted-foreground ml-auto">
            {course.modules.length} moduły
          </span>
        </div>

        <div className="space-y-2.5">
          {course.modules.map((module, moduleIndex) => {
            const isExpanded = expandedModule === module.id;
            const moduleColors = colors; // Use same color as the course
            
            return (
              <div 
                key={module.id}
                className={`bg-card rounded-xl border transition-all ${
                  isExpanded 
                    ? `border-primary/30 shadow-lg` 
                    : `border-border/50 hover:border-border`
                }`}
              >
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : module.id)}
                  className="w-full p-3 flex items-center gap-3 text-left"
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${moduleColors.gradient}`}>
                    <span className="text-sm font-bold text-white">{moduleIndex + 1}</span>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-semibold text-foreground mb-0.5">
                      {module.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <BookOpen className="h-2.5 w-2.5" />
                        {module.lessons.length} lekcji
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-2.5 w-2.5" />
                        ~{module.lessons.reduce((acc, l) => acc + l.estimatedMinutes, 0)} min
                      </span>
                    </div>
                  </div>
                  
                  <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                </button>

                {isExpanded && (
                  <div className="border-t border-border bg-card rounded-b-xl overflow-hidden">
                    {module.lessons.map((lesson, lessonIndex) => {
                      const available = isLessonAvailable(moduleIndex, lessonIndex);
                      const hasContent = lesson.sections.length > 0;
                      const isClickable = available && hasContent;
                      const lessonCompleted = isLessonCompleted(course.id, lesson.id);
                      
                      return (
                        <button
                          key={lesson.id}
                          onClick={() => isClickable && onSelectLesson(lesson)}
                          disabled={!isClickable}
                          className={`w-full px-3 py-2.5 flex items-center gap-3 text-left ${
                            lessonIndex < module.lessons.length - 1 ? 'border-b border-border' : ''
                          } ${isClickable ? 'hover:bg-muted' : ''}`}
                        >
                          <div className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md ${
                            lessonCompleted 
                              ? 'bg-emerald-500/20' 
                              : isClickable 
                                ? moduleColors.accentBg 
                                : 'bg-muted'
                          }`}>
                            {lessonCompleted ? (
                              <CheckCircle className="h-3 w-3 text-emerald-500" />
                            ) : isClickable ? (
                              <Play className={`h-2.5 w-2.5 ${moduleColors.iconColor}`} />
                            ) : (
                              <Lock className="h-2.5 w-2.5 text-muted-foreground" />
                            )}
                          </div>

                          <div className="flex-1 min-w-0">
                            <span className={`text-[11px] font-medium block ${
                              lessonCompleted 
                                ? 'text-emerald-500' 
                                : isClickable 
                                  ? 'text-foreground' 
                                  : 'text-muted-foreground'
                            }`}>
                              {lesson.title}
                            </span>
                            <span className="text-[9px] text-muted-foreground">
                              {hasContent ? `${lesson.estimatedMinutes} min` : 'Wkrótce'}
                              {lessonCompleted && ' • Ukończone'}
                            </span>
                          </div>

                          {isClickable && (
                            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA - same as KursyTab */}
      {course.modules.length > 0 && course.modules[0].lessons.length > 0 && (() => {
        // Find the next uncompleted lesson
        const getNextLesson = () => {
          for (const module of course.modules) {
            for (const lesson of module.lessons) {
              if (!isLessonCompleted(course.id, lesson.id) && lesson.sections.length > 0) {
                return lesson;
              }
            }
          }
          // All completed - return first lesson
          return course.modules[0].lessons[0];
        };
        
        const nextLesson = getNextLesson();
        const hasStarted = completedLessons > 0;
        
        return (
          <div className="px-4 mt-6">
            <button 
              onClick={() => {
                if (nextLesson.sections.length > 0) {
                  onSelectLesson(nextLesson);
                }
              }}
              className={`w-full py-2.5 rounded-lg bg-gradient-to-r ${colors.gradient} text-white text-xs font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 shadow-md ${colors.glowColor} group`}
            >
              <Play className="h-3.5 w-3.5" />
              {hasStarted ? 'Kontynuuj naukę' : 'Rozpocznij naukę'}
              <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        );
      })()}

      {course.modules.length === 0 && (
        <div className="px-4 mt-6">
          <div className={`text-center py-8 rounded-xl border-2 border-dashed ${colors.borderColor} ${colors.accentBg}`}>
            <div className={`w-10 h-10 mx-auto mb-3 rounded-xl ${colors.iconBg} border ${colors.borderColor} flex items-center justify-center shadow-md`}>
              <BookOpen className={`w-4 h-4 ${colors.iconColor}`} />
            </div>
            <p className="text-xs font-semibold text-foreground mb-0.5">Treść w przygotowaniu</p>
            <p className="text-[10px] text-muted-foreground">Wkrótce pojawią się nowe materiały</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseDetailView;
