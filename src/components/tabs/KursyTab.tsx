import { useState } from "react";
import { BookOpen, Clock, ChevronRight, Play, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

interface Course {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
  duration: string;
  color: string;
  bg: string;
}

const coursesData: Course[] = [
  {
    id: "podstawy-marketingu",
    title: "Podstawy marketingu salonu beauty",
    description: "Poznaj fundamenty skutecznego marketingu dla Twojego salonu",
    duration: "~3.5h",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    lessons: [
      { id: "1", title: "Czym jest marketing organiczny", duration: "15 min", completed: false },
      { id: "2", title: "Twoja grupa docelowa", duration: "20 min", completed: false },
      { id: "3", title: "Budowanie marki osobistej", duration: "25 min", completed: false },
      { id: "4", title: "Content marketing dla salonów", duration: "30 min", completed: false },
      { id: "5", title: "Planowanie treści", duration: "20 min", completed: false },
      { id: "6", title: "Analiza konkurencji", duration: "25 min", completed: false },
      { id: "7", title: "Mierzenie efektów", duration: "20 min", completed: false },
    ],
  },
  {
    id: "zdjecia-social-media",
    title: "Zdjęcia do social mediów",
    description: "Naucz się robić profesjonalne zdjęcia telefonem",
    duration: "~3.5h",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    lessons: [
      { id: "1", title: "Podstawy fotografii mobilnej", duration: "20 min", completed: false },
      { id: "2", title: "Oświetlenie naturalne", duration: "25 min", completed: false },
      { id: "3", title: "Kompozycja zdjęć", duration: "30 min", completed: false },
      { id: "4", title: "Edycja w telefonie", duration: "35 min", completed: false },
      { id: "5", title: "Zdjęcia produktowe", duration: "25 min", completed: false },
      { id: "6", title: "Zdjęcia przed/po", duration: "20 min", completed: false },
      { id: "7", title: "Stories i Reels", duration: "25 min", completed: false },
    ],
  },
  {
    id: "konfiguracja-profilu",
    title: "Konfiguracja profilu salonu",
    description: "Zoptymalizuj swój profil na Instagramie i Facebooku",
    duration: "~4h",
    color: "text-violet-500",
    bg: "bg-violet-500/10",
    lessons: [
      { id: "1", title: "Wybór nazwy profilu", duration: "15 min", completed: false },
      { id: "2", title: "Bio idealne", duration: "20 min", completed: false },
      { id: "3", title: "Zdjęcie profilowe", duration: "15 min", completed: false },
      { id: "4", title: "Highlights na Instagramie", duration: "25 min", completed: false },
      { id: "5", title: "Linktree i linki", duration: "20 min", completed: false },
      { id: "6", title: "Konfiguracja Facebook Page", duration: "25 min", completed: false },
      { id: "7", title: "Przyciski kontaktowe", duration: "15 min", completed: false },
      { id: "8", title: "Godziny otwarcia", duration: "10 min", completed: false },
      { id: "9", title: "Lokalizacja i mapa", duration: "15 min", completed: false },
      { id: "10", title: "Integracja Messenger", duration: "20 min", completed: false },
      { id: "11", title: "Automatyczne odpowiedzi", duration: "25 min", completed: false },
      { id: "12", title: "Analityka profilu", duration: "20 min", completed: false },
    ],
  },
  {
    id: "rolki-wideo",
    title: "Rolki i wideo",
    description: "Twórz angażujące treści wideo dla swojego salonu",
    duration: "~4h",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    lessons: [
      { id: "1", title: "Wprowadzenie do Reels", duration: "20 min", completed: false },
      { id: "2", title: "Pomysły na treści", duration: "30 min", completed: false },
      { id: "3", title: "Nagrywanie wideo", duration: "35 min", completed: false },
      { id: "4", title: "Edycja w aplikacji", duration: "40 min", completed: false },
      { id: "5", title: "Muzyka i trendy", duration: "25 min", completed: false },
    ],
  },
];

interface KursyTabProps {
  initialCourseId?: string | null;
  onCourseOpened?: () => void;
}

const KursyTab = ({ initialCourseId, onCourseOpened }: KursyTabProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(
    initialCourseId ? coursesData.find(c => c.id === initialCourseId) || null : null
  );
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);

  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-neutral-400" : "text-gray-500";
  const cardBg = isDark ? "bg-neutral-900" : "bg-white";
  const cardBorder = isDark ? "border-pink-500/20" : "border-gray-100";

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    onCourseOpened?.();
  };

  const handleBack = () => {
    if (selectedLesson) {
      setSelectedLesson(null);
    } else {
      setSelectedCourse(null);
    }
  };

  // Course List View
  if (!selectedCourse) {
    return (
      <div className="px-3 py-4 space-y-4">
        <div>
          <h1 className={`text-lg font-bold ${textPrimary}`}>Kursy</h1>
          <p className={`text-xs ${textSecondary}`}>Rozwijaj swoje umiejętności marketingowe</p>
        </div>

        <div className="space-y-3">
          {coursesData.map((course) => (
            <motion.div
              key={course.id}
              onClick={() => handleCourseClick(course)}
              className={`${cardBg} cursor-pointer rounded-xl border ${cardBorder} p-4 shadow-md transition-transform hover:-translate-y-0.5`}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-start gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${course.bg} ${course.color}`}>
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-sm ${textPrimary}`}>{course.title}</h3>
                  <p className={`text-xs ${textSecondary} mt-0.5 line-clamp-2`}>{course.description}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <span className={`text-[10px] ${textSecondary} flex items-center gap-1`}>
                      <BookOpen className="h-3 w-3" />
                      {course.lessons.length} lekcji
                    </span>
                    <span className={`text-[10px] ${textSecondary} flex items-center gap-1`}>
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </span>
                  </div>
                </div>
                <ChevronRight className={`h-5 w-5 ${textSecondary}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // Lesson View
  if (selectedLesson) {
    return (
      <div className="px-3 py-4 space-y-4">
        <button
          onClick={handleBack}
          className={`inline-flex items-center gap-1.5 text-[11px] ${textSecondary} hover:text-primary transition-colors`}
        >
          <span className="text-lg leading-none">←</span>
          <span>Wróć do kursu</span>
        </button>

        <div className={`${cardBg} rounded-xl border ${cardBorder} p-4 shadow-md`}>
          <h1 className={`text-lg font-bold ${textPrimary}`}>{selectedLesson.title}</h1>
          <p className={`text-xs ${textSecondary} mt-1 flex items-center gap-1`}>
            <Clock className="h-3 w-3" />
            {selectedLesson.duration}
          </p>

          {/* Video Placeholder */}
          <div className={`mt-4 aspect-video rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-gray-100'} flex items-center justify-center`}>
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-pink-500/20' : 'bg-pink-100'} flex items-center justify-center mx-auto mb-3`}>
                <Play className={`h-8 w-8 ${isDark ? 'text-pink-400' : 'text-pink-600'}`} />
              </div>
              <p className={`text-sm font-medium ${textPrimary}`}>Rozpocznij lekcję</p>
              <p className={`text-xs ${textSecondary} mt-1`}>Treść wideo wkrótce</p>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <h3 className={`text-sm font-semibold ${textPrimary} mb-2`}>Opis lekcji</h3>
            <p className={`text-xs ${textSecondary}`}>
              W tej lekcji dowiesz się wszystkiego na temat "{selectedLesson.title}". 
              Nauczysz się praktycznych technik, które możesz od razu zastosować w swoim salonie.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Course Detail View
  return (
    <div className="px-3 py-4 space-y-4">
      <button
        onClick={handleBack}
        className={`inline-flex items-center gap-1.5 text-[11px] ${textSecondary} hover:text-primary transition-colors`}
      >
        <span className="text-lg leading-none">←</span>
        <span>Wróć do kursów</span>
      </button>

      <div className={`${cardBg} rounded-xl border ${cardBorder} p-4 shadow-md`}>
        <div className="flex items-start gap-3">
          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${selectedCourse.bg} ${selectedCourse.color}`}>
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h1 className={`text-lg font-bold ${textPrimary}`}>{selectedCourse.title}</h1>
            <p className={`text-xs ${textSecondary} mt-1`}>{selectedCourse.description}</p>
            <div className="flex items-center gap-3 mt-2">
              <span className={`text-[10px] ${textSecondary} flex items-center gap-1`}>
                <BookOpen className="h-3 w-3" />
                {selectedCourse.lessons.length} lekcji
              </span>
              <span className={`text-[10px] ${textSecondary} flex items-center gap-1`}>
                <Clock className="h-3 w-3" />
                {selectedCourse.duration}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className={`text-sm font-semibold ${textPrimary} mb-3`}>Lekcje</h2>
        <div className="space-y-2">
          {selectedCourse.lessons.map((lesson, index) => (
            <motion.div
              key={lesson.id}
              onClick={() => setSelectedLesson(lesson)}
              className={`${cardBg} cursor-pointer rounded-xl border ${cardBorder} p-3 shadow-sm transition-transform hover:-translate-y-0.5`}
              whileTap={{ scale: 0.98 }}
            >
              <div className="flex items-center gap-3">
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                  lesson.completed 
                    ? 'bg-emerald-500/10 text-emerald-500' 
                    : isDark ? 'bg-neutral-800 text-neutral-400' : 'bg-gray-100 text-gray-400'
                }`}>
                  {lesson.completed ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <span className="text-xs font-medium">{index + 1}</span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`text-xs font-medium ${textPrimary}`}>{lesson.title}</h3>
                  <p className={`text-[10px] ${textSecondary} flex items-center gap-1 mt-0.5`}>
                    <Clock className="h-3 w-3" />
                    {lesson.duration}
                  </p>
                </div>
                <Play className={`h-4 w-4 ${isDark ? 'text-pink-400' : 'text-pink-500'}`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KursyTab;
