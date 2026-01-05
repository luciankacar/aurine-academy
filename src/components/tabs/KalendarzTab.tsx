import { useState, useEffect } from "react";
import { 
  ChevronLeft, ChevronRight, Plus, Instagram, Facebook,
  Image, FileText, Video, Clock, Check, X, Sparkles, 
  ChevronDown, ChevronUp, ExternalLink, Lightbulb
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { format, addDays, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, isSameDay } from "date-fns";
import { pl } from "date-fns/locale";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AddPostModal from "@/components/modals/AddPostModal";

interface PlannedPost {
  id: string;
  date: Date;
  time: string;
  platforms: ("instagram" | "facebook")[];
  postType: "cennik" | "przed-po" | "promocja" | "tip" | "reels" | "story" | "inspiracja" | "post";
  title: string;
  status?: "zaplanowany" | "szkic" | "opublikowany";
  imageUrl?: string;
  template?: {
    category: string;
    name: string;
  };
  instructions?: {
    title: string;
    steps: string[];
  };
  fromStrategy?: boolean;
  description?: string;
}

interface KalendarzTabProps {
  refreshKey?: number;
}

const CALENDAR_POSTS_KEY = "aurine_calendar_posts";

// Helper to serialize/deserialize posts with Date objects
const serializePosts = (posts: PlannedPost[]): string => {
  return JSON.stringify(posts.map(p => ({
    ...p,
    date: p.date.toISOString()
  })));
};

const deserializePosts = (data: string): PlannedPost[] => {
  try {
    const parsed = JSON.parse(data);
    return parsed.map((p: any) => ({
      ...p,
      date: new Date(p.date)
    }));
  } catch {
    return [];
  }
};

const KalendarzTab = ({ refreshKey }: KalendarzTabProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showFullMonth, setShowFullMonth] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  
  // Load posts from localStorage on mount or when refreshKey changes
  const [posts, setPosts] = useState<PlannedPost[]>(() => {
    const stored = localStorage.getItem(CALENDAR_POSTS_KEY);
    if (stored) {
      return deserializePosts(stored);
    }
    return [];
  });

  // Refresh posts when refreshKey changes (after adding from generator)
  useEffect(() => {
    if (refreshKey !== undefined) {
      const stored = localStorage.getItem(CALENDAR_POSTS_KEY);
      if (stored) {
        setPosts(deserializePosts(stored));
      }
    }
  }, [refreshKey]);

  // Save posts to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(CALENDAR_POSTS_KEY, serializePosts(posts));
  }, [posts]);

  const handleAddPost = (newPost: {
    title: string;
    date: Date;
    time: string;
    platforms: ("instagram" | "facebook")[];
    postType: string;
  }) => {
    const post: PlannedPost = {
      id: Date.now().toString(),
      date: newPost.date,
      time: newPost.time,
      platforms: newPost.platforms,
      postType: newPost.postType as PlannedPost["postType"],
      title: newPost.title,
      status: "zaplanowany",
    };
    setPosts(prev => [...prev, post]);
  };

  const handleDeletePost = (postId: string) => {
    // Keep the current date selected after deletion
    if (effectiveSelectedDate && selectedDate === null) {
      setSelectedDate(effectiveSelectedDate);
    }
    setPosts(prev => prev.filter(p => p.id !== postId));
  };

  // Today's date for reference
  const today = new Date();

  // 7 najbliższych dni
  const next7Days = Array.from({ length: 7 }, (_, i) => addDays(today, i));

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });
  
  const startDay = monthStart.getDay();
  const adjustedStartDay = startDay === 0 ? 6 : startDay - 1;
  
  const weekDays = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nd"];

  const getPostsForDate = (date: Date) => {
    return posts.filter(post => isSameDay(post.date, date));
  };

  // Znajdź najbliższy dzień z postem - priorytet dla dzisiaj
  const getNextPostDate = () => {
    // Najpierw sprawdź czy jest post na dziś
    const todayPosts = posts.filter(post => isSameDay(post.date, today));
    if (todayPosts.length > 0) {
      return today;
    }
    
    // Jeśli nie ma na dziś, znajdź najbliższy przyszły
    const futurePosts = posts
      .filter(post => post.date > today)
      .sort((a, b) => a.date.getTime() - b.date.getTime());
    return futurePosts.length > 0 ? futurePosts[0].date : null;
  };

  // Automatycznie wybierz dzień z najbliższym postem przy pierwszym renderze
  const nextPostDate = getNextPostDate();
  const effectiveSelectedDate = selectedDate !== null ? selectedDate : nextPostDate;
  const selectedDatePosts = effectiveSelectedDate ? getPostsForDate(effectiveSelectedDate) : [];

  // Kolorowe ikony platform
  const PlatformIcon = ({ platform, size = "md" }: { platform: "instagram" | "facebook", size?: "sm" | "md" | "xs" }) => {
    const sizeClasses = size === "xs" ? "w-4 h-4" : size === "sm" ? "w-5 h-5" : "w-7 h-7";
    const iconSize = size === "xs" ? "w-2.5 h-2.5" : size === "sm" ? "w-3 h-3" : "w-4 h-4";
    
    if (platform === "instagram") {
      return (
        <div className={`${sizeClasses} rounded-md bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-sm`}>
          <Instagram className={`${iconSize} text-white`} />
        </div>
      );
    }
    
    return (
      <div className={`${sizeClasses} rounded-md bg-blue-600 flex items-center justify-center shadow-sm`}>
        <Facebook className={`${iconSize} text-white`} />
      </div>
    );
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "cennik":
        return <FileText className="w-3.5 h-3.5" />;
      case "przed-po":
        return <Image className="w-3.5 h-3.5" />;
      case "promocja":
        return <Sparkles className="w-3.5 h-3.5" />;
      case "reels":
        return <Video className="w-3.5 h-3.5" />;
      case "story":
        return <Video className="w-3.5 h-3.5" />;
      case "tip":
        return <Lightbulb className="w-3.5 h-3.5" />;
      default:
        return <Image className="w-3.5 h-3.5" />;
    }
  };

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case "cennik": return "Cennik";
      case "przed-po": return "Przed i Po";
      case "promocja": return "Promocja";
      case "reels": return "Reels";
      case "story": return "Story";
      case "tip": return "Porada";
      case "inspiracja": return "Inspiracja";
      default: return "Post";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "zaplanowany":
        return (
          <span className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-medium">
            <Clock className="w-3 h-3" /> Zaplanowany
          </span>
        );
      case "opublikowany":
        return (
          <span className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-blue-500/20 text-blue-400 font-medium">
            <Check className="w-3 h-3" /> Opublikowany
          </span>
        );
      case "szkic":
        return (
          <span className="flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-amber-500/20 text-amber-400 font-medium">
            <FileText className="w-3 h-3" /> Szkic
          </span>
        );
    }
  };

  return (
    <div className="px-4 py-6 space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={`text-xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Kalendarz Postów
          </h1>
          <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
            Najbliższe 7 dni
          </p>
        </div>
        <button 
          onClick={() => setShowAddModal(true)}
          className="flex items-center gap-1.5 px-3 py-2 bg-pink-500 text-white text-sm font-medium rounded-lg hover:bg-pink-600 transition-colors shadow-lg shadow-pink-500/25"
        >
          <Plus className="w-4 h-4" />
          Dodaj
        </button>
      </div>

      {/* 7 dni – poziome małe kafelki */}
      <div className="grid grid-cols-7 gap-1">
        {next7Days.map((day) => {
          const dayPosts = getPostsForDate(day);
          const isSelected = effectiveSelectedDate && isSameDay(day, effectiveSelectedDate);
          const hasPost = dayPosts.length > 0;
          const isTodayDate = isToday(day);
          const firstPost = dayPosts[0];
          const isStoryType = hasPost && (firstPost.postType === "story" || firstPost.postType === "reels");
          
          return (
            <button
              key={day.toISOString()}
              onClick={() => setSelectedDate(isSelected ? null : day)}
              className={`rounded-lg px-1.5 py-2 border transition-all flex flex-col items-center justify-between min-h-[64px] ${
                isSelected 
                  ? 'bg-pink-500 border-pink-500 shadow-lg shadow-pink-500/30' 
                  : isTodayDate
                    ? isDark 
                      ? 'bg-pink-500/10 border-pink-500/30' 
                      : 'bg-pink-50 border-pink-200'
                    : isDark 
                      ? 'bg-neutral-900/80 border-neutral-800' 
                      : 'bg-white border-gray-200'
              }`}
            >
              {/* Dzień + numer */}
              <div className="flex flex-col items-center leading-tight">
                <p className={`text-[9px] font-medium uppercase ${
                  isSelected ? 'text-white/70' : isDark ? 'text-gray-500' : 'text-gray-400'
                }`}>
                  {format(day, "EE", { locale: pl })}
                </p>
                <p className={`text-sm font-semibold ${
                  isSelected ? 'text-white' : isTodayDate 
                    ? isDark ? 'text-pink-400' : 'text-pink-600'
                    : isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {format(day, "d")}
                </p>
              </div>

              {/* Info o poście */}
              {hasPost ? (
                <div className="w-full mt-1 flex flex-col items-center gap-0.5">
                  {/* Platformy */}
                  <div className="flex gap-0.5 items-center justify-center">
                    {firstPost.platforms.includes("instagram") && (
                      <PlatformIcon platform="instagram" size="xs" />
                    )}
                    {firstPost.platforms.includes("facebook") && (
                      <PlatformIcon platform="facebook" size="xs" />
                    )}
                  </div>
                  {/* Typ: Story / Post + AI */}
                  <div className="flex items-center gap-0.5 text-[9px] font-medium">
                    <span className={`${
                      isSelected ? 'text-white/90' : isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {isStoryType ? 'Story' : 'Post'}
                    </span>
                    {firstPost.fromStrategy && (
                      <Sparkles className={`w-2.5 h-2.5 ${
                        isSelected ? 'text-white/80' : 'text-purple-400'
                      }`} />
                    )}
                  </div>
                </div>
              ) : (
                <div className="mt-1">
                  <span className={`text-[9px] ${
                    isSelected ? 'text-white/40' : isDark ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    —
                  </span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* Expand to Full Month */}
      <button
        onClick={() => setShowFullMonth(!showFullMonth)}
        className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium transition-all ${
          isDark 
            ? 'bg-neutral-900/50 border-neutral-800 text-gray-400 hover:bg-neutral-800' 
            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
        }`}
      >
        {showFullMonth ? (
          <>
            <ChevronUp className="w-4 h-4" />
            Zwiń kalendarz
          </>
        ) : (
          <>
            <ChevronDown className="w-4 h-4" />
            Pokaż cały miesiąc
          </>
        )}
      </button>

      {/* Full Month Calendar (Collapsible) */}
      {showFullMonth && (
        <div className={`rounded-xl border p-4 ${isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-white border-gray-100'} shadow-lg`}>
          {/* Month Navigation */}
          <div className="flex items-center justify-between mb-4">
            <button 
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'}`}
            >
              <ChevronLeft className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
            <h2 className={`text-base font-semibold capitalize ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {format(currentMonth, "LLLL yyyy", { locale: pl })}
            </h2>
            <button 
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
              className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'}`}
            >
              <ChevronRight className={`w-5 h-5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
          </div>

          {/* Weekday Headers */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekDays.map(day => (
              <div key={day} className={`text-center text-xs font-medium py-2 ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: adjustedStartDay }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            
            {daysInMonth.map(day => {
              const dayPosts = getPostsForDate(day);
              const isSelected = effectiveSelectedDate && isSameDay(day, effectiveSelectedDate);
              const hasPost = dayPosts.length > 0;
              
              return (
                <button
                  key={day.toISOString()}
                  onClick={() => setSelectedDate(day)}
                  className={`aspect-square rounded-lg flex flex-col items-center justify-center relative transition-all ${
                    isSelected 
                      ? 'bg-pink-500 text-white shadow-lg shadow-pink-500/30' 
                      : isToday(day)
                        ? isDark 
                          ? 'bg-pink-500/20 text-pink-400' 
                          : 'bg-pink-100 text-pink-600'
                        : isDark 
                          ? 'hover:bg-neutral-800 text-gray-300' 
                          : 'hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  <span className={`text-sm font-medium ${!isSameMonth(day, currentMonth) ? 'opacity-30' : ''}`}>
                    {format(day, "d")}
                  </span>
                  {hasPost && (
                    <div className="flex gap-0.5 mt-0.5">
                      {dayPosts.some(p => p.platforms.includes("instagram")) && (
                        <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-gradient-to-r from-purple-500 to-pink-500'}`} />
                      )}
                      {dayPosts.some(p => p.platforms.includes("facebook")) && (
                        <div className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-white' : 'bg-blue-500'}`} />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Selected Date Posts */}
      {effectiveSelectedDate && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
              {format(effectiveSelectedDate, "d MMMM yyyy", { locale: pl })}
            </h3>
            {selectedDate && (
              <button 
                onClick={() => setSelectedDate(null)}
                className={`p-1 rounded-lg transition-colors ${isDark ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'}`}
              >
                <X className={`w-4 h-4 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
              </button>
            )}
          </div>

          {selectedDatePosts.length === 0 ? (
            <div className={`rounded-xl border p-6 text-center ${isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-white border-gray-100'}`}>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Brak zaplanowanych postów na ten dzień
              </p>
              <button className="mt-3 text-sm text-pink-500 font-medium hover:text-pink-400 transition-colors">
                + Dodaj post
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {selectedDatePosts.map(post => (
                <div 
                  key={post.id}
                  className={`rounded-xl border overflow-hidden ${isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-white border-gray-100'} shadow-sm`}
                >
                  {/* Image Preview */}
                  {post.imageUrl && (
                    <div className="relative aspect-square w-full max-h-48 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                  )}

                  {/* Post Header */}
                  <div className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-start gap-3 min-w-0 flex-1">
                        {/* Type Icon */}
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${isDark ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-100 text-pink-600'}`}>
                          {getTypeIcon(post.postType)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                              {post.title}
                            </h4>
                            {post.fromStrategy && (
                              <span className="flex items-center gap-0.5 text-[9px] px-1.5 py-0.5 rounded-full bg-purple-500/20 text-purple-400 font-medium">
                                <Sparkles className="w-2.5 h-2.5" /> AI
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-3 mt-1.5">
                            <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                              {post.time}
                            </span>
                            <span className={`text-xs px-1.5 py-0.5 rounded ${isDark ? 'bg-neutral-800 text-gray-400' : 'bg-gray-100 text-gray-600'}`}>
                              {getPostTypeLabel(post.postType)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 flex-shrink-0">
                        {getStatusBadge(post.status || 'zaplanowany')}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleDeletePost(post.id);
                          }}
                          className={`p-2 rounded-lg transition-colors ${isDark ? 'hover:bg-red-500/20 text-gray-400 hover:text-red-400' : 'hover:bg-red-50 text-gray-400 hover:text-red-500'}`}
                          title="Usuń post"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                    {/* Platform Icons */}
                    <div className="flex items-center gap-2 mt-4">
                      <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>Platformy:</span>
                      <div className="flex gap-2">
                        {post.platforms.map(platform => (
                          <PlatformIcon key={platform} platform={platform} size="sm" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Template Suggestion */}
                  {post.template && (
                    <div className={`px-4 py-3 border-t ${isDark ? 'border-neutral-800 bg-neutral-900/80' : 'border-gray-50 bg-gray-50/50'}`}>
                      <div className="flex items-start gap-2">
                        <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${isDark ? 'bg-pink-500/20' : 'bg-pink-100'}`}>
                          <FileText className={`w-3.5 h-3.5 ${isDark ? 'text-pink-400' : 'text-pink-600'}`} />
                        </div>
                        <div className="flex-1">
                          <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            Możesz skorzystać z gotowego szablonu Aurine:
                          </p>
                          <button className="flex items-center gap-1 text-xs text-pink-500 font-medium hover:text-pink-400 transition-colors mt-0.5">
                            {post.template.name}
                            <ExternalLink className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Instructions Accordion */}
                  {post.instructions && (
                    <Accordion type="single" collapsible className={`border-t ${isDark ? 'border-neutral-800' : 'border-gray-50'}`}>
                      <AccordionItem value="instructions" className="border-0">
                        <AccordionTrigger className={`px-4 py-3 text-xs font-medium hover:no-underline ${isDark ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'}`}>
                          <div className="flex items-center gap-2">
                            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                            {post.instructions.title}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className={`px-4 pb-4 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                          <ol className="space-y-2 pl-1">
                            {post.instructions.steps.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs">
                                <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-medium ${
                                  isDark ? 'bg-pink-500/20 text-pink-400' : 'bg-pink-100 text-pink-600'
                                }`}>
                                  {idx + 1}
                                </span>
                                <span className="pt-0.5">{step}</span>
                              </li>
                            ))}
                          </ol>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Add Post Modal */}
      <AddPostModal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={handleAddPost}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default KalendarzTab;
