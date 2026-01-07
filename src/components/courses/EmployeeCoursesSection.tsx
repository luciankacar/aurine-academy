import { useMemo } from "react";
import { BookOpen, ChevronRight, Timer } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { employeeCourses, type EmployeeCourseDefinition } from "@/data/employee-courses";

interface EmployeeCoursesSectionProps {
  onSelectCourse: (course: EmployeeCourseDefinition) => void;
}

const EmployeeCoursesSection = ({ onSelectCourse }: EmployeeCoursesSectionProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const items = useMemo(() => employeeCourses, []);

  return (
    <section className="mb-7" aria-label="Kursy dla pracowników">
      <header className="flex items-end justify-between mb-4">
        <div className="flex items-start gap-2">
          <div
            className={`h-8 w-8 rounded-xl border flex items-center justify-center ${
              isDark ? "bg-card border-border/60" : "bg-card border-border/40"
            }`}
          >
            <BookOpen className="h-4 w-4 text-foreground" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-foreground tracking-tight">Kursy dla pracowników</h2>
            <p className="text-[10px] text-muted-foreground">Wejdź, przeczytaj, a potem pobierz materiały</p>
          </div>
        </div>

        <div className="text-[10px] text-muted-foreground">
          {items.length} kurs{items.length === 1 ? "" : items.length < 5 ? "y" : "ów"}
        </div>
      </header>

      <div className="grid gap-3">
        {items.map((course, idx) => (
          <article
            key={course.id}
            onClick={() => onSelectCourse(course)}
            className={`group relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-200 ${
              isDark
                ? "bg-card border-border/60 hover:border-foreground/20 hover:shadow-lg"
                : "bg-card border-border/40 hover:border-foreground/20 hover:shadow-lg"
            }`}
          >
            {/* top stripe */}
            <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary" />

            <div className="p-4">
              <div className="flex items-start gap-3">
                {/* index badge */}
                <div className="shrink-0">
                  <div className="h-11 w-11 rounded-2xl bg-muted flex items-center justify-center border border-border/60">
                    <span className="text-sm font-extrabold text-foreground">{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                    {course.description}
                  </p>

                  <div className="mt-3 flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-muted/60 text-muted-foreground border border-border/60">
                      <Timer className="h-3 w-3" />
                      ~{course.estimatedMinutes} min
                    </span>
                    <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      Podgląd w aplikacji
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <div className="h-10 w-10 rounded-2xl bg-muted/70 group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex items-center justify-center border border-border/60">
                    <ChevronRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EmployeeCoursesSection;

