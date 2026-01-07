import { jsPDF } from "jspdf";
import type { EmployeeCourseDefinition, EmployeeCourseSection } from "@/data/employee-courses";

const slugify = (str: string) =>
  str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

export const downloadEmployeeCoursePdf = (course: EmployeeCourseDefinition) => {
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
      for (const item of s.items) addText(`• ${item}`, 11);
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

  doc.save(`${slugify(course.title) || course.id}.pdf`);
};
