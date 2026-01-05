import { 
  CheckCircle, ArrowLeft, ChevronRight,
  Users, TrendingUp, Camera, BarChart3, Play, Sparkles, Clock, Target, Zap
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

interface OsiagnieciaTabProps {
  onBack: () => void;
}

// Mock data - later integrate with Supabase
const mockCategoryStats = [
  { name: "Marketing", lessons: 15, total: 20, icon: TrendingUp, color: "#ec4899", bgLight: "bg-pink-50", bgDark: "bg-pink-500/10" },
  { name: "Analityka", lessons: 12, total: 20, icon: BarChart3, color: "#3b82f6", bgLight: "bg-blue-50", bgDark: "bg-blue-500/10" },
  { name: "Fotografia", lessons: 8, total: 20, icon: Camera, color: "#f59e0b", bgLight: "bg-amber-50", bgDark: "bg-amber-500/10" },
  { name: "Obsługa klienta", lessons: 7, total: 20, icon: Users, color: "#10b981", bgLight: "bg-emerald-50", bgDark: "bg-emerald-500/10" },
  { name: "Video", lessons: 5, total: 20, icon: Play, color: "#8b5cf6", bgLight: "bg-violet-50", bgDark: "bg-violet-500/10" },
];

const mockRecommendations = [
  { 
    id: 1, 
    title: "Dokończ Marketing", 
    subtitle: "Zostało 5 lekcji",
    icon: TrendingUp,
    color: "#ec4899",
    bgLight: "bg-pink-50",
    bgDark: "bg-pink-500/10",
    priority: "high"
  },
  { 
    id: 2, 
    title: "Zacznij Video", 
    subtitle: "Reels to przyszłość",
    icon: Play,
    color: "#8b5cf6",
    bgLight: "bg-violet-50",
    bgDark: "bg-violet-500/10",
    priority: "medium"
  },
  { 
    id: 3, 
    title: "Powtórz hashtagi", 
    subtitle: "Minęło 30 dni",
    icon: Sparkles,
    color: "#f59e0b",
    bgLight: "bg-amber-50",
    bgDark: "bg-amber-500/10",
    priority: "low"
  },
];

// Circular progress component
const CircularProgress = ({ progress, size = 80, strokeWidth = 6, color }: { 
  progress: number; 
  size?: number; 
  strokeWidth?: number;
  color: string;
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="currentColor"
        strokeWidth={strokeWidth}
        fill="none"
        className="text-muted/30"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={color}
        strokeWidth={strokeWidth}
        fill="none"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
      />
    </svg>
  );
};

const OsiagnieciaTab = ({ onBack }: OsiagnieciaTabProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const textPrimary = "text-foreground";
  const textSecondary = "text-muted-foreground";
  const cardBg = isDark ? "bg-neutral-900/80" : "bg-white";
  const cardBorder = isDark ? "border-neutral-800" : "border-border/50";

  // Calculate totals
  const totalLessons = mockCategoryStats.reduce((sum, cat) => sum + cat.lessons, 0);
  const totalAll = mockCategoryStats.reduce((sum, cat) => sum + cat.total, 0);
  const overallProgress = Math.round((totalLessons / totalAll) * 100);

  return (
    <div className="min-h-screen pb-14">
      {/* Header */}
      <div className={`sticky top-0 z-10 ${isDark ? 'bg-neutral-950/95' : 'bg-background/95'} backdrop-blur-sm border-b ${cardBorder} px-4 py-3`}>
        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className={`p-2 rounded-lg ${isDark ? 'hover:bg-neutral-800' : 'hover:bg-muted'} transition-colors`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className={`text-lg font-semibold ${textPrimary}`}>Twój Postęp</h1>
        </div>
      </div>

      <div className="px-4 py-5 space-y-6">
        
        {/* Main Progress Card */}
        <div className={`${cardBg} border ${cardBorder} rounded-2xl p-5 shadow-sm`}>
          <div className="flex items-center gap-5">
            <div className="relative">
              <CircularProgress progress={overallProgress} size={90} strokeWidth={8} color="#ec4899" />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className={`text-xl font-bold ${textPrimary}`}>{overallProgress}%</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className={`text-base font-semibold ${textPrimary} mb-1`}>Ogólny postęp</h2>
              <p className={`text-sm ${textSecondary} mb-2`}>{totalLessons} z {totalAll} lekcji</p>
              <div className="flex items-center gap-4 text-xs">
                <div className="flex items-center gap-1.5">
                  <Clock className={`w-3.5 h-3.5 ${textSecondary}`} />
                  <span className={textSecondary}>12h 30min</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Target className={`w-3.5 h-3.5 ${textSecondary}`} />
                  <span className={textSecondary}>5 kursów</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Co dalej - Recommendations */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-primary" />
            <h2 className={`text-sm font-semibold ${textPrimary}`}>Co dalej?</h2>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
            {mockRecommendations.map((rec) => (
              <div
                key={rec.id}
                className={`${cardBg} border ${cardBorder} rounded-xl p-4 min-w-[140px] flex-shrink-0 shadow-sm hover:shadow-md transition-shadow cursor-pointer`}
              >
                <div 
                  className={`w-10 h-10 rounded-xl ${isDark ? rec.bgDark : rec.bgLight} flex items-center justify-center mb-3`}
                >
                  <rec.icon className="w-5 h-5" style={{ color: rec.color }} />
                </div>
                <p className={`text-xs font-medium ${textPrimary} mb-0.5`}>{rec.title}</p>
                <p className={`text-[10px] ${textSecondary}`}>{rec.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category Progress Grid */}
        <div>
          <h2 className={`text-sm font-semibold ${textPrimary} mb-3`}>Postęp w kategoriach</h2>
          <div className="grid grid-cols-2 gap-3">
            {mockCategoryStats.map((stat) => {
              const progress = Math.round((stat.lessons / stat.total) * 100);
              return (
                <div
                  key={stat.name}
                  className={`${cardBg} border ${cardBorder} rounded-xl p-4 shadow-sm`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div 
                      className={`w-9 h-9 rounded-lg ${isDark ? stat.bgDark : stat.bgLight} flex items-center justify-center`}
                    >
                      <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                    </div>
                    <span 
                      className="text-xs font-semibold"
                      style={{ color: stat.color }}
                    >
                      {progress}%
                    </span>
                  </div>
                  <p className={`text-xs font-medium ${textPrimary} mb-1`}>{stat.name}</p>
                  <p className={`text-[10px] ${textSecondary} mb-2`}>{stat.lessons}/{stat.total} lekcji</p>
                  <div className="h-1.5 bg-muted/50 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${progress}%`, backgroundColor: stat.color }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h2 className={`text-sm font-semibold ${textPrimary} mb-3`}>Ostatnia aktywność</h2>
          <div className={`${cardBg} border ${cardBorder} rounded-xl overflow-hidden shadow-sm`}>
            {[
              { lesson: "Angażujące posty", course: "Marketing", time: "Wczoraj", color: "#ec4899" },
              { lesson: "Kompozycja zdjęć", course: "Fotografia", time: "2 dni temu", color: "#f59e0b" },
              { lesson: "Statystyki IG", course: "Analityka", time: "3 dni temu", color: "#3b82f6" },
            ].map((item, idx) => (
              <div 
                key={idx}
                className={`flex items-center gap-3 p-3 ${idx !== 2 ? `border-b ${cardBorder}` : ''}`}
              >
                <div 
                  className="w-1 h-8 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <div className="flex-1 min-w-0">
                  <p className={`text-xs font-medium ${textPrimary} truncate`}>{item.lesson}</p>
                  <p className={`text-[10px] ${textSecondary}`}>{item.course}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] ${textSecondary}`}>{item.time}</span>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Button
          variant="primary"
          className="w-full"
          onClick={onBack}
        >
          Kontynuuj naukę
          <ChevronRight className="w-4 h-4 ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default OsiagnieciaTab;
