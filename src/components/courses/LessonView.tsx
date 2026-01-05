import { ArrowLeft, Clock, AlertTriangle, Lightbulb, CheckCircle2, XCircle, ChevronRight, Check, Sparkles, BookOpen } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Lesson, LessonSection } from "@/types/courses";
import MockupPreview from "./MockupPreview";
import { useState, useEffect } from "react";

interface LessonViewProps {
  lesson: Lesson;
  courseId?: string;
  onBack: () => void;
  onNext?: () => void;
  onFinishCourse?: () => void;
  hasNext?: boolean;
  isLastLesson?: boolean;
  hasNextCourse?: boolean;
}

const LessonView = ({ lesson, onBack, onNext, onFinishCourse, hasNext, isLastLesson, hasNextCourse }: LessonViewProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [selectedQuizAnswers, setSelectedQuizAnswers] = useState<Record<string, number>>({});
  const [revealedQuizzes, setRevealedQuizzes] = useState<Record<string, boolean>>({});

  // Scroll to top when lesson changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [lesson.id]);

  const handleQuizAnswer = (sectionId: string, answerIndex: number) => {
    setSelectedQuizAnswers(prev => ({ ...prev, [sectionId]: answerIndex }));
  };

  const revealQuizAnswer = (sectionId: string) => {
    setRevealedQuizzes(prev => ({ ...prev, [sectionId]: true }));
  };

  const renderSection = (section: LessonSection, index: number) => {
    switch (section.type) {
      case "heading":
        return (
          <h2 key={section.id} className="text-base font-bold text-foreground mt-8 mb-4 flex items-center gap-2">
            <div className="w-1 h-5 rounded-full bg-gradient-to-b from-primary to-pink-500" />
            {section.content}
          </h2>
        );
      
      case "text":
        return (
          <div key={section.id} className="text-sm leading-relaxed text-muted-foreground mb-5">
            {section.content.split('\n\n').map((paragraph, i) => {
              // Check if paragraph starts with ## for heading
              if (paragraph.startsWith('## ')) {
                return (
                  <h3 key={i} className="text-base font-bold text-foreground mt-6 mb-3 flex items-center gap-2">
                    <div className="w-1 h-5 rounded-full bg-gradient-to-b from-primary to-pink-500" />
                    {paragraph.replace('## ', '')}
                  </h3>
                );
              }
              return (
                <p key={i} className="mb-4 last:mb-0" dangerouslySetInnerHTML={{ 
                  __html: paragraph
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                    .replace(/\n/g, '<br />')
                    .replace(/• /g, '<span class="text-primary mr-2">•</span>')
                }} />
              );
            })}
          </div>
        );
      
      case "step":
        return (
          <div key={section.id} className="my-5 flex gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-primary/25">
              {section.stepNumber || index + 1}
            </div>
            <div className="flex-1 text-sm leading-relaxed text-muted-foreground pt-1"
              dangerouslySetInnerHTML={{ 
                __html: section.content
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                  .replace(/\n/g, '<br />')
              }} 
            />
          </div>
        );

      case "mockup":
        return (
          <figure key={section.id} className="my-6">
            {section.content && (
              <figcaption className="text-xs text-muted-foreground mb-3 font-medium">
                {section.content}
              </figcaption>
            )}
            {section.mockupData && <MockupPreview data={section.mockupData} />}
          </figure>
        );
      
      case "tip":
        return (
          <div key={section.id} className={`my-5 p-4 rounded-xl flex gap-3 ${
            isDark 
              ? 'bg-emerald-500/10 border border-emerald-500/20' 
              : 'bg-emerald-50 border border-emerald-100'
          }`}>
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-4 h-4 text-emerald-500" />
            </div>
            <div>
              <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">Wskazówka</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{section.content}</p>
            </div>
          </div>
        );
      
      case "warning":
        return (
          <div key={section.id} className={`my-5 p-4 rounded-xl ${
            isDark 
              ? 'bg-amber-500/10 border border-amber-500/20' 
              : 'bg-amber-50 border border-amber-100'
          }`}>
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
              </div>
              <div>
                <p className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">Uwaga</p>
                <p className="text-sm leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{ 
                    __html: section.content
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                      .replace(/\n/g, '<br />')
                  }} 
                />
              </div>
            </div>
          </div>
        );
      
      case "example":
        return (
          <div key={section.id} className={`my-5 p-4 rounded-xl border-l-4 border-violet-500 ${
            isDark ? 'bg-violet-500/5' : 'bg-violet-50/50'
          }`}>
            <p className="text-xs font-semibold text-violet-600 dark:text-violet-400 mb-2">Przykład</p>
            <div className="text-sm leading-relaxed text-muted-foreground" 
              dangerouslySetInnerHTML={{ 
                __html: section.content
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
                  .replace(/\n/g, '<br />')
              }} 
            />
          </div>
        );

      case "comparison":
        if (!section.comparison) return null;
        return (
          <div key={section.id} className="my-6 space-y-3">
            <p className="text-xs font-semibold text-muted-foreground mb-3">Porównanie</p>
            <div className={`p-4 rounded-xl ${
              isDark ? 'bg-red-500/10 border border-red-500/20' : 'bg-red-50 border border-red-100'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                  <XCircle className="w-3.5 h-3.5 text-red-500" />
                </div>
                <span className="text-sm font-semibold text-red-600 dark:text-red-400">{section.comparison.bad.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{section.comparison.bad.description}</p>
            </div>
            <div className={`p-4 rounded-xl ${
              isDark ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-emerald-50 border border-emerald-100'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">{section.comparison.good.title}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{section.comparison.good.description}</p>
            </div>
          </div>
        );

      case "quiz":
        if (!section.quiz) return null;
        const selectedAnswer = selectedQuizAnswers[section.id];
        const isRevealed = revealedQuizzes[section.id];
        return (
          <div key={section.id} className={`my-6 p-5 rounded-xl ${
            isDark ? 'bg-violet-500/10 border border-violet-500/20' : 'bg-violet-50 border border-violet-100'
          }`}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-violet-500" />
              </div>
              <span className="text-sm font-semibold text-violet-600 dark:text-violet-400">Sprawdź się</span>
            </div>
            <p className="text-sm font-medium text-foreground mb-4">{section.quiz.question}</p>
            <div className="space-y-2">
              {section.quiz.options.map((option, i) => {
                const isSelected = selectedAnswer === i;
                const isCorrect = section.quiz!.correctIndex === i;
                let cls = isDark 
                  ? 'bg-card border-border hover:border-violet-500/50' 
                  : 'bg-white border-violet-200 hover:border-violet-400';
                if (isRevealed && isSelected) {
                  cls = isCorrect 
                    ? (isDark ? 'bg-emerald-500/20 border-emerald-500' : 'bg-emerald-100 border-emerald-500') 
                    : (isDark ? 'bg-red-500/20 border-red-500' : 'bg-red-100 border-red-500');
                } else if (isRevealed && isCorrect) {
                  cls = isDark ? 'bg-emerald-500/20 border-emerald-500' : 'bg-emerald-100 border-emerald-500';
                }
                return (
                  <button 
                    key={i} 
                    onClick={() => !isRevealed && handleQuizAnswer(section.id, i)} 
                    disabled={isRevealed}
                    className={`w-full text-left px-4 py-3 rounded-lg border text-sm transition-all ${cls} ${
                      isSelected && !isRevealed ? 'ring-2 ring-violet-500 ring-offset-2' : ''
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {selectedAnswer !== undefined && !isRevealed && (
              <button 
                onClick={() => revealQuizAnswer(section.id)} 
                className="mt-4 px-4 py-2 rounded-lg bg-violet-500 text-white text-sm font-medium hover:bg-violet-600 transition-colors"
              >
                Sprawdź odpowiedź
              </button>
            )}
            {isRevealed && (
              <p className="mt-4 text-sm text-violet-600 dark:text-violet-300 bg-violet-500/10 p-3 rounded-lg">
                {section.quiz.explanation}
              </p>
            )}
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className={`relative overflow-hidden ${isDark ? 'bg-card' : 'bg-gradient-to-b from-pink-50/50 to-background'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
        
        <div className="relative px-5 pt-5 pb-6">
          <button 
            onClick={onBack} 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-background/50 transition-all mb-5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Wróć do kursu
          </button>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center shadow-md shadow-primary/25">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="w-3.5 h-3.5" />
              <span>{lesson.estimatedMinutes} min</span>
            </div>
          </div>
          
          <h1 className="text-xl font-bold text-foreground leading-tight mb-2">
            {lesson.title}
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {lesson.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-8">
        {lesson.sections.map((section, index) => renderSection(section, index))}
      </div>

      {/* Key Takeaways */}
      {lesson.keyTakeaways.length > 0 && (
        <div className="px-5 pb-6">
          <div className={`p-4 rounded-xl ${isDark ? 'bg-primary/5 border border-primary/20' : 'bg-pink-50 border border-pink-100'}`}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-white" />
              </div>
              <p className="text-xs font-semibold text-foreground">Zapamiętaj</p>
            </div>
            <ul className="space-y-2">
              {lesson.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Next Lesson CTA */}
      {hasNext && onNext && (
        <div className="px-5 pb-14">
          <button 
            onClick={onNext} 
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary to-pink-500 text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/25 group"
          >
            Następna lekcja
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* Finish Course CTA - Last lesson of course */}
      {isLastLesson && onFinishCourse && (
        <div className="px-5 pb-14">
          <button 
            onClick={onFinishCourse} 
            className={`w-full py-3.5 rounded-xl text-white text-sm font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg group ${
              hasNextCourse 
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 shadow-emerald-500/25' 
                : 'bg-gradient-to-r from-violet-500 to-purple-500 shadow-violet-500/25'
            }`}
          >
            {hasNextCourse ? (
              <>
                Zakończ kurs i przejdź dalej
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                Zakończ kurs
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LessonView;
