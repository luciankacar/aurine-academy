import { useState, useEffect } from "react";
import {
  Clock, Star, CheckCircle,
  Sparkles, FileText, Image, CalendarDays,
  BookOpen, Play
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface StartTabProps {
  resetKey?: number;
  onToolChange?: (inSubView: boolean) => void;
  onNavigateToTab?: (tabId: string) => void;
}

const StartTab = ({ resetKey, onToolChange, onNavigateToTab }: StartTabProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [activeTool, setActiveTool] = useState<"dashboard" | "kalendarz" | "generator-strategii" | "osiagniecia" | "generator-grafik">("dashboard");
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (resetKey !== undefined && resetKey > 0) {
      setActiveTool("dashboard");
    }
  }, [resetKey]);

  useEffect(() => {
    onToolChange?.(activeTool !== "dashboard");
  }, [activeTool, onToolChange]);

  const handleToolOpen = (toolId: string) => {
    if (toolId === "szablony-tresci") {
      onNavigateToTab?.("szablony");
    } else if (toolId === "kursy") {
      onNavigateToTab?.("kursy");
    }
  };

  const cardBg = "bg-card";
  const cardBorder = "border-border";
  const textPrimary = "text-foreground";
  const textSecondary = "text-muted-foreground";
  const textMuted = "text-muted-foreground";
  const dividerBg = isDark ? "via-primary/40" : "via-primary/30";

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const transitionConfig = { duration: 0.15, ease: "linear" as const };

  // Demo courses data
  const courses = [
    {
      id: "podstawy-marketingu",
      title: "Podstawy marketingu salonu beauty",
      lessons: 7,
      progress: 0,
      duration: "~3.5h",
      color: "text-pink-500",
      bg: "bg-pink-500/10",
    },
    {
      id: "zdjecia-social-media",
      title: "Zdjęcia do social mediów",
      lessons: 7,
      progress: 0,
      duration: "~3.5h",
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
    {
      id: "konfiguracja-profilu",
      title: "Konfiguracja profilu salonu",
      lessons: 12,
      progress: 0,
      duration: "~4h",
      color: "text-violet-500",
      bg: "bg-violet-500/10",
    },
    {
      id: "rolki-wideo",
      title: "Rolki i wideo",
      lessons: 5,
      progress: 0,
      duration: "~4h",
      color: "text-orange-500",
      bg: "bg-orange-500/10",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.main
          key="dashboard"
          initial={isTransitioning ? pageTransition.initial : false}
          animate={pageTransition.animate}
          exit={pageTransition.exit}
          transition={transitionConfig}
          className="space-y-4 pb-4"
        >

          {/* Panel Klientki */}
          <section className="-mt-4">
            <div
              className="relative overflow-hidden rounded-b-2xl border-x border-b border-border bg-card/95 px-4 pb-4 pt-8 shadow-lg"
            >
              <div className="pointer-events-none absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.15),transparent_55%)]" />

              <div className="relative flex flex-col gap-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-primary/80">
                      Panel klientki Aurine
                    </p>
                    <h1 className={`mt-1 text-base font-semibold ${textPrimary}`}>
                      Karolina
                    </h1>
                    <p className={`mt-0.5 text-[11px] ${textMuted}`}>
                      Klientka Aurine od marca 2024
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="inline-flex items-center rounded-full border border-border/70 bg-secondary/70 px-2 py-0.5 text-[10px] font-medium text-secondary-foreground">
                      Salon kosmetyczny
                    </span>
                    <span className={`text-[11px] ${textMuted}`}>
                      Warszawa
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-[10px]">
                  {[
                    { label: "Pakiet", value: "Premium" },
                    { label: "Kanały", value: "Facebook + Instagram" },
                    { label: "Cel", value: "więcej rezerwacji" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-border/70 bg-card/80 px-2 py-1.5"
                    >
                      <p className={`${textMuted} text-[10px]`}>{item.label}</p>
                      <p className={`mt-0.5 font-medium ${textPrimary}`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-border/60 pt-2.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                      <span className="text-xs font-medium text-primary-foreground">A</span>
                    </div>
                    <div>
                      <p className={`text-[10px] uppercase tracking-[0.16em] ${textMuted}`}>
                        Twój opiekun
                      </p>
                      <p className={`text-xs font-medium ${textPrimary}`}>
                        Anna
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 rounded-lg border-primary/50 bg-primary/10 px-3 text-[11px] font-medium text-primary hover:bg-primary/20"
                  >
                    Napisz
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Podsumowanie */}
          <div className="px-3">
            <div
              className={`${cardBg} flex items-center justify-between gap-2 rounded-xl border ${cardBorder} px-3 py-2 shadow-md`}
            >
              {[
                { icon: CheckCircle, value: "12", label: "Kursy", color: "text-emerald-500", bg: "bg-emerald-500/10" },
                { icon: Star, value: "47", label: "Lekcje", color: "text-amber-500", bg: "bg-amber-500/10" },
                { icon: Clock, value: "24h", label: "Nauki", color: "text-blue-500", bg: "bg-blue-500/10" },
              ].map((item, i) => (
                <div key={item.label} className="flex flex-1 items-center gap-2">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${item.bg} ${item.color}`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className={`leading-none text-sm font-semibold ${textPrimary}`}>
                      {item.value}
                    </p>
                    <p className={`mt-0.5 text-[10px] ${textSecondary}`}>
                      {item.label}
                    </p>
                  </div>
                  {i < 2 && (
                    <div className="ml-auto h-8 w-px bg-border/60" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className={`mx-8 h-px bg-gradient-to-r from-transparent ${dividerBg} to-transparent`} />

          {/* Narzędzia */}
          <div className="px-3">
            <h2 className={`mb-3 text-xs font-semibold ${textPrimary}`}>Narzędzia</h2>
            <div className="space-y-2">
              {[
                {
                  id: "generator-strategii",
                  icon: Sparkles,
                  title: "Generator Strategii AI",
                  badge: "Nowość",
                  description: "Stwórz strategię marketingową",
                  color: "text-violet-500",
                  bg: "bg-violet-500/10",
                },
                {
                  id: "szablony-tresci",
                  icon: FileText,
                  title: "Szablony Treści",
                  description: "Gotowe szablony postów i stories",
                  color: "text-cyan-500",
                  bg: "bg-cyan-500/10",
                },
                {
                  id: "generator-grafik",
                  icon: Image,
                  title: "Generator Grafik",
                  description: "Twórz grafiki z szablonów",
                  color: "text-orange-500",
                  bg: "bg-orange-500/10",
                },
                {
                  id: "kalendarz-postow",
                  icon: CalendarDays,
                  title: "Kalendarz Postów",
                  description: "Planuj i harmonogramuj posty",
                  color: "text-emerald-500",
                  bg: "bg-emerald-500/10",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  onClick={() => handleToolOpen(item.id)}
                  className={`${cardBg} flex cursor-pointer items-center gap-3 rounded-xl p-2.5 shadow-md transition-transform transition-colors duration-200 hover:-translate-y-0.5`}
                >
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${item.bg} ${item.color}`}>
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-1.5">
                      <h3 className={`truncate text-xs font-semibold ${textPrimary}`}>
                        {item.title}
                      </h3>
                      {item.badge && (
                        <span className="rounded-full bg-violet-500 px-1.5 py-0.5 text-[9px] font-medium text-white shadow-sm">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className={`mt-0.5 truncate text-[10px] ${textSecondary}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mx-8 h-px bg-gradient-to-r from-transparent ${dividerBg} to-transparent`} />

          {/* Kontynuuj Naukę */}
          <div className="px-3">
            <div className="flex items-center justify-between mb-3">
              <h2 className={`text-xs font-semibold ${textPrimary}`}>Kontynuuj Naukę</h2>
              <button
                onClick={() => onNavigateToTab?.("kursy")}
                className={`text-[11px] ${isDark ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-700'} font-semibold px-2 py-1 rounded-md ${isDark ? 'hover:bg-pink-500/10' : 'hover:bg-pink-100'} transition-colors`}
              >
                Zobacz wszystkie →
              </button>
            </div>

            <div
              className={`${cardBg} cursor-pointer rounded-xl border ${cardBorder} p-4 text-center shadow-md transition-transform hover:-translate-y-0.5`}
              onClick={() => onNavigateToTab?.("kursy")}
            >
              <BookOpen className="h-8 w-8 mx-auto text-primary/60 mb-2" />
              <p className={`text-[11px] font-medium ${textPrimary}`}>Rozpocznij swoją pierwszą lekcję!</p>
              <p className={`text-[10px] ${textMuted} mt-1`}>Kliknij, aby przejść do kursów</p>
            </div>
          </div>

          <div className={`mx-8 h-px bg-gradient-to-r from-transparent ${dividerBg} to-transparent`} />

          {/* Kategorie Kursów */}
          <div className="px-3">
            <div className="flex items-center justify-between mb-3">
              <h2 className={`text-xs font-semibold ${textPrimary}`}>Kategorie Kursów</h2>
              <button
                onClick={() => onNavigateToTab?.("kursy")}
                className={`text-[11px] ${isDark ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-700'} font-semibold px-2 py-1 rounded-md ${isDark ? 'hover:bg-pink-500/10' : 'hover:bg-pink-100'} transition-colors`}
              >
                Zobacz wszystkie →
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {courses.map((course) => (
                <div
                  key={course.id}
                  onClick={() => onNavigateToTab?.(`kursy:${course.id}`)}
                  className={`${cardBg} cursor-pointer rounded-xl border ${cardBorder} p-3 shadow-md transition-transform hover:-translate-y-0.5`}
                >
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${course.bg} ${course.color} mb-2`}>
                    <BookOpen className="h-4 w-4" />
                  </div>
                  <h3 className={`text-xs font-semibold ${textPrimary} line-clamp-2 mb-1`}>
                    {course.title}
                  </h3>
                  <p className={`text-[10px] ${textMuted}`}>
                    {course.lessons} lekcji
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-[10px] font-medium ${course.color}`}>
                      {course.progress}%
                    </span>
                    <span className={`text-[10px] ${textMuted} flex items-center gap-1`}>
                      <Clock className="h-3 w-3" />
                      {course.duration}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`mx-8 h-px bg-gradient-to-r from-transparent ${dividerBg} to-transparent`} />

          {/* Osiągnięcia */}
          <div className="px-3">
            <div className="flex items-center justify-between mb-3">
              <h2 className={`text-xs font-semibold ${textPrimary}`}>Twoje Osiągnięcia</h2>
              <button
                className={`text-[11px] ${isDark ? 'text-pink-400 hover:text-pink-300' : 'text-pink-600 hover:text-pink-700'} font-semibold px-2 py-1 rounded-md ${isDark ? 'hover:bg-pink-500/10' : 'hover:bg-pink-100'} transition-colors`}
              >
                Zobacz wszystkie
              </button>
            </div>

            <div className={`${cardBg} rounded-xl border ${cardBorder} p-4 shadow-md`}>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className={`text-lg font-bold ${textPrimary}`}>47</p>
                  <p className={`text-[10px] ${textMuted}`}>lekcji</p>
                </div>
                <div>
                  <p className={`text-lg font-bold ${textPrimary}`}>12h</p>
                  <p className={`text-[10px] ${textMuted}`}>nauki</p>
                </div>
                <div>
                  <p className={`text-lg font-bold ${textPrimary}`}>47%</p>
                  <p className={`text-[10px] ${textMuted}`}>postęp</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-3 pb-4">
            <Button
              onClick={() => onNavigateToTab?.("kursy")}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25"
            >
              <Play className="h-4 w-4 mr-2" />
              Przeglądaj Wszystkie Kursy
            </Button>
          </div>

        </motion.main>
      </AnimatePresence>
    </div>
  );
};

export default StartTab;
