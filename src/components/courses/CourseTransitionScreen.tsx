import { ArrowRight, CheckCircle2, Sparkles, Trophy, BookOpen, Crown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Course } from "@/types/courses";
import { useEffect } from "react";
import { getCourseIcon, getCourseColorScheme } from "@/lib/courseColors";

interface CourseTransitionScreenProps {
  completedCourse: Course;
  nextCourse: Course;
  onContinue: () => void;
}

const CourseTransitionScreen = ({ completedCourse, nextCourse, onContinue }: CourseTransitionScreenProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Get icons and colors for courses
  const CompletedIcon = getCourseIcon(completedCourse.icon);
  const NextIcon = getCourseIcon(nextCourse.icon);
  const completedColors = getCourseColorScheme(completedCourse.color);
  const nextColors = getCourseColorScheme(nextCourse.color);

  // Scroll to top when screen is shown
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Celebration Header */}
      <div className={`relative overflow-hidden ${isDark ? 'bg-card' : 'bg-gradient-to-b from-emerald-50 to-background'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-primary/5" />
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-emerald-500/20 to-transparent rounded-bl-full" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-primary/10 to-transparent rounded-tr-full" />
        
        <div className="relative px-6 pt-12 pb-8 text-center">
          {/* Trophy Animation */}
          <div className="relative inline-block mb-6">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl shadow-emerald-500/30 animate-scale-in">
              <Trophy className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg animate-fade-in">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-2 animate-fade-in flex items-center justify-center gap-2">
            Gratulacje!
            <Crown className="w-5 h-5 text-amber-400" />
          </h1>
          <p className="text-sm text-muted-foreground animate-fade-in">
            Ukończyłaś kurs z sukcesem
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-5 py-6">
        {/* Completed Course Card */}
        <div className={`mb-6 p-4 rounded-xl border ${
          isDark 
            ? 'bg-emerald-500/10 border-emerald-500/20' 
            : 'bg-emerald-50 border-emerald-200'
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${completedColors.gradient} flex items-center justify-center shadow-md ${completedColors.glowColor}`}>
              <CompletedIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-emerald-600 dark:text-emerald-400 mb-0.5">Ukończony kurs</p>
              <h3 className="text-sm font-bold text-foreground">{completedCourse.title}</h3>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              {completedCourse.totalLessons} lekcji
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              100% ukończono
            </span>
          </div>
        </div>

        {/* Arrow Divider */}
        <div className="flex justify-center mb-6">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${nextColors.gradient} flex items-center justify-center shadow-lg ${nextColors.glowColor}`}>
            <ArrowRight className="w-5 h-5 text-white rotate-90" />
          </div>
        </div>

        {/* Next Course Card */}
        <div className={`p-4 rounded-xl border ${
          isDark 
            ? `${nextColors.accentBg} ${nextColors.borderColor}` 
            : `${nextColors.accentBg} ${nextColors.borderColor}`
        }`}>
          <div className="flex items-center gap-3 mb-3">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${nextColors.gradient} flex items-center justify-center shadow-md ${nextColors.glowColor}`}>
              <NextIcon className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <p className={`text-xs font-medium ${nextColors.iconColor} mb-0.5`}>Następny kurs</p>
              <h3 className="text-sm font-bold text-foreground">{nextCourse.title}</h3>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
            {nextCourse.description}
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5" />
              {nextCourse.totalLessons} lekcji
            </span>
            <span className="flex items-center gap-1">
              ~{nextCourse.estimatedHours}h nauki
            </span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-5 pb-14">
        <button 
          onClick={onContinue}
          className={`w-full py-4 rounded-xl bg-gradient-to-r ${nextColors.gradient} text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg ${nextColors.glowColor} group`}
        >
          Rozpocznij następny kurs
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default CourseTransitionScreen;
