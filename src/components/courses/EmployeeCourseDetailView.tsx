import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, Download, BookOpen, FileText, Loader2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

interface EmployeeCourse {
  name: string;
  size: number;
  created_at?: string;
}

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const getBaseName = (filename: string) => filename.replace(/\.[^/.]+$/, "");

const getFileExtension = (filename: string): string => {
  return filename.split(".").pop()?.toUpperCase() || "";
};

const extractTitleFromMarkdown = (markdown: string, fallback: string) => {
  const line = markdown
    .split("\n")
    .map((l) => l.trim())
    .find((l) => l.startsWith("# "));

  return line ? line.replace(/^#\s+/, "").trim() : fallback;
};

const MarkdownContent = ({ markdown }: { markdown: string }) => {
  const blocks = useMemo(() => {
    const out: React.ReactNode[] = [];
    let listItems: string[] = [];

    const flushList = () => {
      if (!listItems.length) return;
      out.push(
        <ul key={`ul-${out.length}`} className="list-disc pl-5 space-y-1">
          {listItems.map((t, i) => (
            <li key={i} className="text-xs text-muted-foreground leading-relaxed">
              {t}
            </li>
          ))}
        </ul>
      );
      listItems = [];
    };

    const lines = markdown.split("\n");
    for (const raw of lines) {
      const line = raw.trim();

      if (!line) {
        flushList();
        continue;
      }

      if (line.startsWith("- ")) {
        listItems.push(line.slice(2));
        continue;
      }

      flushList();

      if (line.startsWith("### ")) {
        out.push(
          <h4 key={`h4-${out.length}`} className="text-xs font-semibold text-foreground mt-2">
            {line.slice(4)}
          </h4>
        );
        continue;
      }

      if (line.startsWith("## ")) {
        out.push(
          <h3 key={`h3-${out.length}`} className="text-sm font-semibold text-foreground mt-2">
            {line.slice(3)}
          </h3>
        );
        continue;
      }

      if (line.startsWith("# ")) {
        out.push(
          <h2 key={`h2-${out.length}`} className="text-base font-bold text-foreground mt-2">
            {line.slice(2)}
          </h2>
        );
        continue;
      }

      out.push(
        <p key={`p-${out.length}`} className="text-xs text-muted-foreground leading-relaxed">
          {line}
        </p>
      );
    }

    flushList();
    return out;
  }, [markdown]);

  return <div className="space-y-2">{blocks}</div>;
};

interface EmployeeCourseDetailViewProps {
  course: EmployeeCourse;
  onBack: () => void;
}

const EmployeeCourseDetailView = ({ course, onBack }: EmployeeCourseDetailViewProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const [contentLoading, setContentLoading] = useState(true);
  const [markdown, setMarkdown] = useState<string>("");

  const ext = getFileExtension(course.name);
  const base = getBaseName(course.name);

  useEffect(() => {
    let cancelled = false;

    const loadMarkdown = async () => {
      setContentLoading(true);
      setMarkdown("");

      const mdName = `${base}.md`;
      const { data, error } = await supabase.storage
        .from("employee-materials")
        .createSignedUrl(mdName, 60);

      if (cancelled) return;

      if (error || !data?.signedUrl) {
        setContentLoading(false);
        return;
      }

      try {
        const res = await fetch(data.signedUrl);
        if (!res.ok) {
          setContentLoading(false);
          return;
        }
        const text = await res.text();
        if (cancelled) return;
        setMarkdown(text);
      } finally {
        if (!cancelled) setContentLoading(false);
      }
    };

    loadMarkdown();

    return () => {
      cancelled = true;
    };
  }, [base]);

  const title = useMemo(() => extractTitleFromMarkdown(markdown, base), [markdown, base]);

  const handleDownload = async () => {
    setDownloading(true);

    const { data, error } = await supabase.storage
      .from("employee-materials")
      .createSignedUrl(course.name, 60);

    if (error || !data?.signedUrl) {
      toast.error("Nie udało się pobrać pliku");
      setDownloading(false);
      return;
    }

    const a = document.createElement("a");
    a.href = data.signedUrl;
    a.download = course.name;
    a.click();

    setDownloading(false);
    setDownloaded(true);
    toast.success("Pobieranie rozpoczęte");
  };

  return (
    <motion.main
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="px-4 py-5 pb-20"
    >
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-5"
      >
        <ArrowLeft className="h-4 w-4" />
        <span className="text-xs font-medium">Wróć do kursów dla pracowników</span>
      </button>

      {/* Header */}
      <header
        className={`relative rounded-2xl border overflow-hidden mb-5 ${
          isDark
            ? "bg-gradient-to-br from-teal-950/50 via-card to-cyan-950/30 border-teal-500/30"
            : "bg-gradient-to-br from-teal-50 via-card to-cyan-50 border-teal-200"
        }`}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-tr-full pointer-events-none" />

        <div className="relative p-5">
          <div className="flex items-start gap-4">
            <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 shadow-lg shadow-teal-500/25">
              <BookOpen className="h-7 w-7 text-white" />
              <div className="absolute -bottom-1.5 -right-1.5 px-1.5 py-0.5 rounded text-[8px] font-bold bg-background border border-teal-500/30 text-teal-600 dark:text-teal-400 shadow-sm">
                {ext}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-bold text-foreground mb-1.5 leading-tight truncate">
                {title}
              </h1>
              <p className="text-xs text-muted-foreground mb-3">Kurs dla pracowników</p>

              <div className="flex items-center gap-3 text-[11px] text-muted-foreground flex-wrap">
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50">
                  <FileText className="h-3 w-3" />
                  {formatBytes(course.size)}
                </span>
                <span className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-muted/50">Format: {ext}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className={`rounded-xl border p-4 mb-5 ${isDark ? "bg-card border-border/50" : "bg-card border-border/30"}`}>
        <h2 className="text-sm font-semibold text-foreground mb-2">Treść kursu</h2>

        {contentLoading ? (
          <div className="flex items-center gap-2 text-xs text-muted-foreground py-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            Ładowanie treści…
          </div>
        ) : markdown ? (
          <MarkdownContent markdown={markdown} />
        ) : (
          <p className="text-xs text-muted-foreground leading-relaxed">
            Treść kursu nie została jeszcze dodana.
          </p>
        )}
      </section>

      {/* Download */}
      <section
        className={`rounded-xl border p-5 ${
          isDark
            ? "bg-gradient-to-br from-teal-950/30 to-card border-teal-500/20"
            : "bg-gradient-to-br from-teal-50/50 to-card border-teal-200/50"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-lg bg-teal-500/10 flex items-center justify-center">
            {downloaded ? (
              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            ) : (
              <Download className="h-5 w-5 text-teal-500" />
            )}
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">{downloaded ? "Pobrano!" : "Pobierz materiał"}</h3>
            <p className="text-[10px] text-muted-foreground">
              {downloaded ? "Możesz pobrać ponownie w dowolnym momencie" : "Kliknij, aby pobrać plik"}
            </p>
          </div>
        </div>

        <Button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full h-12 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-teal-500/25 transition-all duration-200"
        >
          {downloading ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Pobieranie…
            </>
          ) : downloaded ? (
            <>
              <Download className="h-5 w-5 mr-2" />
              Pobierz ponownie
            </>
          ) : (
            <>
              <Download className="h-5 w-5 mr-2" />
              Pobierz ({formatBytes(course.size)})
            </>
          )}
        </Button>
      </section>
    </motion.main>
  );
};

export default EmployeeCourseDetailView;

