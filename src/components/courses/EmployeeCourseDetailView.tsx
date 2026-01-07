import { useMemo, useState } from "react";
import { ArrowLeft, Download, Loader2, CheckCircle2, Timer, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";
import { jsPDF } from "jspdf";
import type { EmployeeCourseDefinition, EmployeeCourseSection } from "@/data/employee-courses";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

const buildPdf = (course: EmployeeCourseDefinition): jsPDF => {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 20;
  const maxWidth = pageWidth - margin * 2;
  let y = margin;

  const addText = (text: string, size: number, bold = false) => {
    doc.setFontSize(size);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    const lines = doc.splitTextToSize(text, maxWidth);
    for (const line of lines) {
      if (y > 270) {
        doc.addPage();
        y = margin;
      }
      doc.text(line, margin, y);
      y += size * 0.45;
    }
    y += 2;
  };

  addText(course.title, 18, true);
  y += 2;
  addText(course.description, 11);
  y += 4;

  const renderSection = (s: EmployeeCourseSection) => {
    if (s.type === "heading") {
      y += 4;
      addText(s.text.toUpperCase(), 12, true);
      return;
    }

    if (s.type === "paragraph") {
      addText(s.text, 11);
      return;
    }

    if (s.type === "bullets") {
      for (const item of s.items) {
        addText(`• ${item}`, 11);
      }
      return;
    }

    if (s.type === "steps") {
      for (const step of s.items) {
        y += 2;
        addText(step.title, 11, true);
        addText(step.text, 11);
      }
    }
  };

  for (const s of course.sections) renderSection(s);

  y += 10;
  doc.setFontSize(9);
  doc.setTextColor(120);
  doc.text("Wygenerowane w aplikacji Aurine", margin, y);

  return doc;
};

interface EmployeeCourseDetailViewProps {
  course: EmployeeCourseDefinition;
  onBack: () => void;
}

const EmployeeCourseDetailView = ({ course, onBack }: EmployeeCourseDetailViewProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);

    try {
      const pdf = buildPdf(course);
      pdf.save(`${slugify(course.title) || course.id}.pdf`);
      setDownloaded(true);
    } finally {
      setDownloading(false);
    }
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
          isDark ? "bg-card border-border/60" : "bg-card border-border/40"
        }`}
      >
        <div className="h-1.5 w-full bg-gradient-to-r from-primary to-secondary" />

        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className="h-14 w-14 rounded-2xl bg-muted flex items-center justify-center border border-border/60">
              <BookOpen className="h-6 w-6 text-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="text-lg font-extrabold text-foreground leading-tight">{course.title}</h1>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{course.description}</p>

              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-muted/60 text-muted-foreground border border-border/60">
                  <Timer className="h-3 w-3" />
                  ~{course.estimatedMinutes} min
                </span>
                <span className="text-[10px] px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                  Treść w aplikacji
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className={`rounded-2xl border p-4 mb-5 ${isDark ? "bg-card border-border/60" : "bg-card border-border/40"}`}>
        <h2 className="text-sm font-bold text-foreground mb-3">Treść kursu</h2>

        <div className="space-y-3">
          {course.sections.map((s, idx) => {
            if (s.type === "heading") {
              return (
                <h3 key={idx} className="text-xs font-extrabold text-foreground tracking-wide pt-2">
                  {s.text.toUpperCase()}
                </h3>
              );
            }

            if (s.type === "paragraph") {
              return (
                <p key={idx} className="text-xs text-muted-foreground leading-relaxed">
                  {s.text}
                </p>
              );
            }

            if (s.type === "bullets") {
              return (
                <ul key={idx} className="list-disc pl-5 space-y-1">
                  {s.items.map((item, i) => (
                    <li key={i} className="text-xs text-muted-foreground leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              );
            }

            return (
              <div key={idx} className="space-y-2">
                {s.items.map((step, i) => (
                  <div key={i} className="rounded-xl border border-border/60 bg-muted/30 p-3">
                    <p className="text-xs font-semibold text-foreground">{step.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mt-1">{step.text}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* Download */}
      <section
        className={`rounded-2xl border p-5 ${
          isDark ? "bg-card border-border/60" : "bg-card border-border/40"
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-2xl bg-muted flex items-center justify-center border border-border/60">
            {downloaded ? (
              <CheckCircle2 className="h-5 w-5 text-foreground" />
            ) : (
              <Download className="h-5 w-5 text-foreground" />
            )}
          </div>
          <div>
            <h3 className="text-sm font-bold text-foreground">{downloaded ? "Pobrano" : "Pobierz PDF"}</h3>
            <p className="text-[10px] text-muted-foreground">
              {downloaded ? "Możesz pobrać ponownie" : "Pobierz kurs jako dokument PDF"}
            </p>
          </div>
        </div>

        <Button onClick={handleDownload} disabled={downloading} className="w-full h-12">
          {downloading ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Generowanie PDF…
            </>
          ) : (
            <>
              <Download className="h-5 w-5 mr-2" />
              Pobierz PDF
            </>
          )}
        </Button>
      </section>
    </motion.main>
  );
};

export default EmployeeCourseDetailView;
