import { useEffect, useMemo, useState } from "react";
import { BookOpen, ChevronRight, FileText } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useTheme } from "@/contexts/ThemeContext";

interface EmployeeCourse {
  name: string;
  size: number;
  created_at?: string;
}

type CoursePreview = {
  title: string;
  excerpt: string;
  hasMarkdown: boolean;
};

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const getBaseName = (filename: string) => filename.replace(/\.[^/.]+$/, "");

const getFileExtension = (filename: string): string => {
  const ext = filename.split(".").pop()?.toUpperCase() || "";
  return ext;
};

const parseMarkdownPreview = (markdown: string, fallbackTitle: string): Omit<CoursePreview, "hasMarkdown"> => {
  const lines = markdown
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  let title = fallbackTitle;
  const h1 = lines.find((l) => l.startsWith("# "));
  if (h1) title = h1.replace(/^#\s+/, "").trim();

  const excerptLine = lines.find((l) => !l.startsWith("#") && !l.startsWith("-") && !l.startsWith("*") && l.length > 0);
  const excerpt = (excerptLine || "").slice(0, 140);

  return { title, excerpt };
};

interface EmployeeCoursesSectionProps {
  onSelectCourse: (course: EmployeeCourse) => void;
}

const EmployeeCoursesSection = ({ onSelectCourse }: EmployeeCoursesSectionProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [courses, setCourses] = useState<EmployeeCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [previews, setPreviews] = useState<Record<string, CoursePreview>>({});

  const fetchCourses = async () => {
    setLoading(true);

    const { data, error } = await supabase.storage
      .from("employee-materials")
      .list("", { sortBy: { column: "created_at", order: "desc" } });

    if (error) {
      console.error("Error fetching employee courses:", error);
      setCourses([]);
      setPreviews({});
      setLoading(false);
      return;
    }

    const list = (data || [])
      .filter((f) => f.name !== ".emptyFolderPlaceholder")
      .filter((f) => !f.name.toLowerCase().endsWith(".md"))
      .map((f) => ({
        name: f.name,
        size: f.metadata?.size ?? 0,
        created_at: f.created_at,
      }));

    setCourses(list);
    setLoading(false);
  };

  // Load list
  useEffect(() => {
    fetchCourses();
  }, []);

  // Load markdown previews (title + excerpt)
  useEffect(() => {
    let cancelled = false;

    const loadPreviews = async () => {
      const entries = await Promise.all(
        courses.map(async (course) => {
          const base = getBaseName(course.name);
          const mdName = `${base}.md`;

          const { data, error } = await supabase.storage
            .from("employee-materials")
            .createSignedUrl(mdName, 60);

          if (error || !data?.signedUrl) {
            return [course.name, { title: base, excerpt: "", hasMarkdown: false }] as const;
          }

          try {
            const res = await fetch(data.signedUrl);
            if (!res.ok) {
              return [course.name, { title: base, excerpt: "", hasMarkdown: false }] as const;
            }
            const text = await res.text();
            const parsed = parseMarkdownPreview(text, base);
            return [course.name, { ...parsed, hasMarkdown: true }] as const;
          } catch {
            return [course.name, { title: base, excerpt: "", hasMarkdown: false }] as const;
          }
        })
      );

      if (cancelled) return;
      setPreviews(Object.fromEntries(entries));
    };

    if (courses.length) loadPreviews();
    else setPreviews({});

    return () => {
      cancelled = true;
    };
  }, [courses]);

  const items = useMemo(() => {
    return courses.map((course, idx) => {
      const base = getBaseName(course.name);
      const ext = getFileExtension(course.name);
      const preview = previews[course.name];

      return {
        course,
        idx,
        base,
        ext,
        title: preview?.title ?? base,
        excerpt: preview?.excerpt ?? "",
        hasMarkdown: preview?.hasMarkdown ?? false,
      };
    });
  }, [courses, previews]);

  return (
    <section className="mb-7" aria-label="Kursy dla pracowników">
      <header className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center border border-teal-500/30">
            <BookOpen className="h-3 w-3 text-teal-500" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">Kursy dla pracowników</h2>
            <p className="text-[10px] text-muted-foreground">Wejdź w kurs, przeczytaj i pobierz</p>
          </div>
        </div>
      </header>

      {loading ? (
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30 border-t-muted-foreground/70 animate-spin" />
            Ładowanie kursów…
          </div>
        </div>
      ) : items.length === 0 ? (
        <div
          className={`rounded-2xl border p-5 ${
            isDark ? "bg-card border-border/50" : "bg-card border-border/30"
          }`}
        >
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-teal-500/10 flex items-center justify-center">
              <FileText className="h-5 w-5 text-teal-500" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Brak kursów dla pracowników</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                Kursy pojawią się tutaj, gdy zostaną dodane przez zespół Aurine.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid gap-3">
          {items.map(({ course, idx, ext, title, excerpt, hasMarkdown }) => (
            <article
              key={course.name}
              onClick={() => onSelectCourse(course)}
              className={`group relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-200 ${
                isDark
                  ? "bg-gradient-to-br from-teal-950/35 via-card to-cyan-950/20 border-teal-500/20 hover:border-teal-500/40 hover:shadow-md hover:shadow-teal-500/10"
                  : "bg-gradient-to-br from-teal-50/60 via-card to-cyan-50/40 border-teal-200/60 hover:border-teal-300 hover:shadow-md"
              }`}
            >
              <div className="p-4">
                <div className="flex items-start gap-3">
                  {/* Left badge */}
                  <div className="shrink-0">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-md shadow-teal-500/20 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-center">
                      <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-background/80 border border-teal-500/20 text-teal-600 dark:text-teal-400">
                        {ext}
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-foreground leading-snug truncate group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                      {title}
                    </h3>

                    {excerpt ? (
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed line-clamp-2">
                        {excerpt}
                      </p>
                    ) : (
                      <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                        {hasMarkdown ? "Otwórz, aby przeczytać treść." : "Otwórz, aby pobrać materiał."}
                      </p>
                    )}

                    <div className="mt-3 flex items-center gap-2 flex-wrap">
                      <span className="text-[10px] px-2 py-1 rounded-full bg-muted/40 text-muted-foreground">
                        {formatBytes(course.size)}
                      </span>
                      <span className={`text-[10px] px-2 py-1 rounded-full border ${
                        hasMarkdown
                          ? "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20"
                          : "bg-muted/40 text-muted-foreground border-border/50"
                      }`}>
                        {hasMarkdown ? "Treść w aplikacji" : "Brak opisu"}
                      </span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <div className="h-10 w-10 rounded-xl bg-teal-500/10 group-hover:bg-teal-500 transition-colors flex items-center justify-center">
                      <ChevronRight className="h-5 w-5 text-teal-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default EmployeeCoursesSection;

