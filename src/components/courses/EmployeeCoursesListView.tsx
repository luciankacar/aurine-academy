import { ArrowLeft, BookOpen, ChevronRight, Clock, Users } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { employeeCourses, type EmployeeCourseDefinition } from "@/data/employee-courses";
import { getCourseColorScheme } from "@/lib/courseColors";

interface EmployeeCoursesListViewProps {
  onBack: () => void;
  onSelect: (course: EmployeeCourseDefinition) => void;
}

const EmployeeCoursesListView = ({ onBack, onSelect }: EmployeeCoursesListViewProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const colors = getCourseColorScheme("teal");

  return (
    <div className="min-h-screen bg-background pb-14">
      <div className="px-4 py-5">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all mb-4"
        >
          <ArrowLeft className="w-3 h-3" />
          Wróć do kursów
        </button>

        <div className="flex items-start gap-3 mb-3">
          <div className="relative">
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${colors.iconBg} border ${colors.borderColor} shadow-md ${colors.glowColor}`}>
              <Users className={`h-5 w-5 ${colors.iconColor}`} />
            </div>
            <div className={`absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-md bg-gradient-to-br ${colors.gradient} flex items-center justify-center shadow-sm`}>
              <BookOpen className="h-2.5 w-2.5 text-white" />
            </div>
          </div>
          <div className="flex-1">
            <h1 className="text-lg font-bold text-foreground tracking-tight mb-0.5">Kursy dla pracowników</h1>
            <p className="text-xs text-muted-foreground/80">Gotowe standardy i procedury do salonu</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground leading-relaxed">
          Wejdź w kurs, zobacz treść i jeśli pasuje do Twojego salonu — pobierz PDF.
        </p>
      </div>

      <div className="px-4 pb-6">
        <div className="space-y-2.5">
          {employeeCourses.map((c) => (
            <button
              key={c.id}
              onClick={() => onSelect(c)}
              className={`group w-full text-left bg-card rounded-lg border overflow-hidden transition-all duration-300 cursor-pointer ${colors.borderColor} hover:shadow-md hover:-translate-y-0.5`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-300`} />

              <div className="relative p-3">
                <div className="flex items-start gap-3">
                  <div className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${colors.iconBg} border ${colors.borderColor} shadow-sm group-hover:shadow-md transition-shadow duration-300`}>
                    <Users className={`h-4 w-4 ${colors.iconColor}`} />
                    <div className={`absolute -top-0.5 -right-0.5 h-3 w-3 rounded-full bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center`}>
                      <ChevronRight className="h-1.5 w-1.5 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h3 className="text-xs font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors duration-200">
                        {c.title}
                      </h3>
                      <span className={`text-[8px] px-1.5 py-0.5 rounded font-medium bg-primary/10 text-primary border border-primary/20`}>Podgląd</span>
                    </div>

                    <p className="text-[10px] text-muted-foreground line-clamp-2 mb-2 leading-relaxed">
                      {c.description}
                    </p>

                    <div className="flex items-center gap-2 text-[9px] text-muted-foreground">
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-muted/50">
                        <Clock className="h-2.5 w-2.5" />
                        ~{c.estimatedMinutes} min
                      </span>
                      <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-muted/50">
                        <BookOpen className="h-2.5 w-2.5" />
                        1 lekcja
                      </span>
                    </div>
                  </div>

                  <ChevronRight className={`h-4 w-4 ${colors.iconColor} opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200`} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Note about preview (subtle) */}
      <div className="px-4 pb-14">
        <div className={`p-3 rounded-xl border ${isDark ? "bg-card border-border/50" : "bg-pink-50/50 border-border/30"}`}>
          <p className="text-[10px] text-muted-foreground">
            To są gotowe kursy w aplikacji — właścicielka tylko je przegląda i pobiera.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCoursesListView;
