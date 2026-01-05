// Types for the Aurine Academy course system

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  modules: Module[];
  totalLessons: number;
  estimatedHours: number;
  isIntro?: boolean; // True if this is an introduction, not a regular course
}

export interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  // Naturalne wprowadzenie do lekcji (1-2 zdania)
  intro?: string;
  // Legacy - do usunięcia po migracji
  objectives?: string[];
  sections: LessonSection[];
  tasks: Task[];
  checklist: ChecklistItem[];
  keyTakeaways: string[];
  // New: Next lesson pointer
  nextLessonTitle?: string;
}

export interface LessonSection {
  id: string;
  type: LessonSectionType;
  content: string;
  mockupData?: MockupData;
  // New: For step type
  stepNumber?: number;
  // New: For comparison type
  comparison?: ComparisonData;
  // New: For quiz type
  quiz?: QuizData;
  // New: For interactive type
  actionLabel?: string;
}

export type LessonSectionType = 
  | 'intro'        // Wprowadzenie z celami - automatycznie generowane
  | 'text'         // Treść
  | 'heading'      // Nagłówek
  | 'step'         // Krok z numerem i instrukcją
  | 'mockup'       // Realistyczny mockup FB/IG
  | 'tip'          // Pro tip
  | 'warning'      // Ostrzeżenie
  | 'example'      // Przykład
  | 'interactive'  // "Sprawdź teraz w swojej aplikacji"
  | 'comparison'   // Dobrze vs Źle
  | 'quiz'         // Szybkie pytanie weryfikujące
  | 'summary';     // Podsumowanie lekcji - automatycznie generowane

export interface MockupData {
  platform: 'instagram' | 'facebook';
  variant?: MockupVariant;
  // Legacy support - maps to variant
  type?: 'post' | 'story' | 'reel';
  // Legacy fields
  imagePrompt?: string;
  caption?: string;
  likes?: string;
  comments?: string;
  // Profile data - uses client's salon name from localStorage if not provided
  profileName?: string;
  username?: string;
  avatarType?: 'initials' | 'photo' | 'logo';
  bio?: string;
  followers?: string;
  following?: string;
  posts?: string;
  // Cover/background
  coverType?: 'salon-interior' | 'nails-art' | 'beauty-treatment' | 'gradient';
  // For post variants
  postCaption?: string;
  postLikes?: string;
  postComments?: string;
  postImage?: 'nails' | 'salon' | 'treatment' | 'before-after' | 'product';
  // For story variants
  storyType?: 'photo' | 'text' | 'poll' | 'question';
  // Highlight specific UI element
  highlightElement?: string;
  // Description shown below mockup
  description?: string;
}

export type MockupVariant = 
  | 'profile'        // Full profile view
  | 'profile-header' // Just header section
  | 'post'           // Single post in feed
  | 'post-creation'  // Creating a new post
  | 'story'          // Story view
  | 'reel'           // Reel view
  | 'settings'       // Settings screen
  | 'feed'           // Feed with multiple posts
  | 'insights'       // Analytics/insights
  | 'message';       // DM/Messenger

export interface ComparisonData {
  good: {
    title: string;
    description: string;
    example?: string;
  };
  bad: {
    title: string;
    description: string;
    example?: string;
  };
}

export interface QuizData {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
}

export interface UserProgress {
  lessonId: string;
  completed: boolean;
  completedTasks: string[];
  completedChecklist: string[];
  completedAt?: Date;
}
