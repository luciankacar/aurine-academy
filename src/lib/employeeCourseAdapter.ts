import type { Course, Lesson, LessonSection } from "@/types/courses";
import type { EmployeeCourseDefinition, EmployeeCourseSection } from "@/data/employee-courses";

const toLessonSections = (course: EmployeeCourseDefinition): LessonSection[] => {
  const sections: LessonSection[] = [];

  const push = (s: LessonSection) => {
    sections.push(s);
  };

  let idx = 0;

  const addEmployeeSection = (s: EmployeeCourseSection) => {
    if (s.type === "heading") {
      push({ id: `e-${course.id}-h-${idx++}`, type: "heading", content: s.text });
      return;
    }

    if (s.type === "paragraph") {
      push({ id: `e-${course.id}-p-${idx++}`, type: "text", content: s.text });
      return;
    }

    if (s.type === "bullets") {
      push({
        id: `e-${course.id}-b-${idx++}`,
        type: "text",
        content: s.items.map((i) => `• ${i}`).join("\n"),
      });
      return;
    }

    // steps
    s.items.forEach((step, i) => {
      push({
        id: `e-${course.id}-s-${idx++}`,
        type: "step",
        stepNumber: i + 1,
        content: `**${step.title}**\n${step.text}`,
      });
    });
  };

  course.sections.forEach(addEmployeeSection);

  return sections;
};

export const employeeCourseToCourse = (employee: EmployeeCourseDefinition): Course => {
  const lesson: Lesson = {
    id: `emp-${employee.id}-lesson-1`,
    title: employee.title,
    description: employee.description,
    estimatedMinutes: employee.estimatedMinutes,
    intro: undefined,
    objectives: undefined,
    sections: toLessonSections(employee),
    tasks: [],
    checklist: [],
    keyTakeaways: [],
    nextLessonTitle: undefined,
  };

  const course: Course = {
    id: `emp-${employee.id}`,
    title: employee.title,
    description: employee.description,
    icon: "Users",
    color: "teal",
    modules: [
      {
        id: `emp-${employee.id}-module-1`,
        title: "Materiały", 
        description: "", 
        lessons: [lesson],
      },
    ],
    totalLessons: 1,
    estimatedHours: Math.max(1, Math.round(employee.estimatedMinutes / 60)),
    isIntro: false,
  };

  return course;
};
