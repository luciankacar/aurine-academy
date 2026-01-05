import { Smartphone, Users, Camera, TrendingUp, Target, BookOpen, GraduationCap, Settings, Video, MessageCircle, PenLine, Palette, LayoutGrid, Heart, Calendar } from "lucide-react";

// Icon mapping for courses
export const courseIconMap: Record<string, typeof Smartphone> = {
  Smartphone,
  Users,
  Camera,
  TrendingUp,
  Target,
  target: Target,
  GraduationCap,
  Settings,
  Video,
  MessageCircle,
  PenLine,
  Palette,
  strategy: LayoutGrid,
  Heart,
  Calendar,
};

// Color scheme type
export interface CourseColorScheme {
  gradient: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
  glowColor: string;
  accentBg: string;
}

// Map course.color values to full color schemes
const colorSchemeMap: Record<string, CourseColorScheme> = {
  // Named colors - using lighter backgrounds for better visibility
  purple: {
    gradient: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-500",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/20",
    accentBg: "bg-violet-500/10",
  },
  emerald: {
    gradient: "from-emerald-500 to-teal-500",
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-500",
    borderColor: "border-emerald-500/30",
    glowColor: "shadow-emerald-500/20",
    accentBg: "bg-emerald-500/10",
  },
  blue: {
    gradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-500/15",
    iconColor: "text-blue-500",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/20",
    accentBg: "bg-blue-500/10",
  },
  amber: {
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-500",
    borderColor: "border-amber-500/30",
    glowColor: "shadow-amber-500/20",
    accentBg: "bg-amber-500/10",
  },
  red: {
    gradient: "from-red-500 to-rose-500",
    iconBg: "bg-red-500/15",
    iconColor: "text-red-500",
    borderColor: "border-red-500/30",
    glowColor: "shadow-red-500/20",
    accentBg: "bg-red-500/10",
  },
  pink: {
    gradient: "from-pink-500 to-rose-500",
    iconBg: "bg-pink-500/15",
    iconColor: "text-pink-500",
    borderColor: "border-pink-500/30",
    glowColor: "shadow-pink-500/20",
    accentBg: "bg-pink-500/10",
  },
  teal: {
    gradient: "from-teal-500 to-cyan-500",
    iconBg: "bg-teal-500/15",
    iconColor: "text-teal-500",
    borderColor: "border-teal-500/30",
    glowColor: "shadow-teal-500/20",
    accentBg: "bg-teal-500/10",
  },
  cyan: {
    gradient: "from-cyan-500 to-blue-500",
    iconBg: "bg-cyan-500/15",
    iconColor: "text-cyan-500",
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-cyan-500/20",
    accentBg: "bg-cyan-500/10",
  },
  sky: {
    gradient: "from-sky-500 to-cyan-500",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-500",
    borderColor: "border-sky-500/30",
    glowColor: "shadow-sky-500/20",
    accentBg: "bg-sky-500/10",
  },
  orange: {
    gradient: "from-orange-500 to-amber-500",
    iconBg: "bg-orange-500/15",
    iconColor: "text-orange-500",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/20",
    accentBg: "bg-orange-500/10",
  },
  // Gradient strings (from course data)
  "from-teal-500 to-cyan-500": {
    gradient: "from-teal-500 to-cyan-500",
    iconBg: "bg-teal-500/15",
    iconColor: "text-teal-500",
    borderColor: "border-teal-500/30",
    glowColor: "shadow-teal-500/20",
    accentBg: "bg-teal-500/10",
  },
  "from-amber-500 to-orange-600": {
    gradient: "from-amber-500 to-orange-600",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-500",
    borderColor: "border-amber-500/30",
    glowColor: "shadow-amber-500/20",
    accentBg: "bg-amber-500/10",
  },
  // HEX codes
  "#8b5cf6": { // violet
    gradient: "from-violet-500 to-purple-500",
    iconBg: "bg-violet-500/15",
    iconColor: "text-violet-500",
    borderColor: "border-violet-500/30",
    glowColor: "shadow-violet-500/20",
    accentBg: "bg-violet-500/10",
  },
  "#ec4899": { // pink
    gradient: "from-pink-500 to-rose-500",
    iconBg: "bg-pink-500/15",
    iconColor: "text-pink-500",
    borderColor: "border-pink-500/30",
    glowColor: "shadow-pink-500/20",
    accentBg: "bg-pink-500/10",
  },
  "#0ea5e9": { // sky
    gradient: "from-sky-500 to-cyan-500",
    iconBg: "bg-sky-500/15",
    iconColor: "text-sky-500",
    borderColor: "border-sky-500/30",
    glowColor: "shadow-sky-500/20",
    accentBg: "bg-sky-500/10",
  },
  "#f59e0b": { // amber
    gradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-500/15",
    iconColor: "text-amber-500",
    borderColor: "border-amber-500/30",
    glowColor: "shadow-amber-500/20",
    accentBg: "bg-amber-500/10",
  },
};

// Default color scheme
const defaultColorScheme: CourseColorScheme = {
  gradient: "from-pink-500 to-rose-500",
  iconBg: "bg-pink-500/15",
  iconColor: "text-pink-500",
  borderColor: "border-pink-500/30",
  glowColor: "shadow-pink-500/20",
  accentBg: "bg-pink-500/10",
};


// Get color scheme for a course based on its color property
export function getCourseColorScheme(courseColor: string): CourseColorScheme {
  // Direct mapping only - no fallback
  if (colorSchemeMap[courseColor]) {
    return colorSchemeMap[courseColor];
  }
  
  // Return default if not found
  return defaultColorScheme;
}

// Get icon component for a course
export function getCourseIcon(iconName: string): typeof BookOpen {
  return courseIconMap[iconName] || BookOpen;
}
