import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Home, User, Bell,
  FileText, MessageCircle, X, BookOpen, Gift, Calendar, GraduationCap, Loader2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "@/assets/logo.png";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/hooks/useAuth";

// Tab content components
import StartTab from "./tabs/StartTab";

import SzablonyTab from "./tabs/SzablonyTab";
import WsparcieTab from "./tabs/WsparcieTab";
import ProfilTab from "./tabs/ProfilTab";
import KursyTab from "./tabs/KursyTab";

const MainApp = () => {
  const { resolvedTheme } = useTheme();
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("start");
  const [startTabKey, setStartTabKey] = useState(0);
  const [isInSubView, setIsInSubView] = useState(false);
  const [direction, setDirection] = useState(0);
  const [showNotifications, setShowNotifications] = useState(false);
  const [initialCourseId, setInitialCourseId] = useState<string | null>(null);
  const notificationRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchStartYRef = useRef<number | null>(null);
  const hasSwipedRef = useRef(false);
  
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      icon: BookOpen,
      iconBg: "bg-pink-500",
      title: "Nowa lekcja dostępna",
      message: "Lekcja 14: Budowanie społeczności",
      time: "2 godz. temu",
      unread: true,
    },
    {
      id: 2,
      icon: Gift,
      iconBg: "bg-purple-500",
      title: "Nowy materiał w bibliotece",
      message: "Pakiet 20 szablonów stories",
      time: "5 godz. temu",
      unread: true,
    },
    {
      id: 3,
      icon: Calendar,
      iconBg: "bg-emerald-500",
      title: "Przypomnienie o konsultacji",
      message: "Jutro o 14:00 z Anną K.",
      time: "wczoraj",
      unread: false,
    },
  ]);
  
  const [swipingNotification, setSwipingNotification] = useState<number | null>(null);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const notifTouchStartX = useRef<number | null>(null);

  const isDark = resolvedTheme === "dark";
  const fullBleed = activeTab === "szablony";

  // Authentication check disabled for development
  // useEffect(() => {
  //   if (!loading && !user) {
  //     navigate('/auth');
  //   }
  // }, [user, loading, navigate]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNotificationSwipeStart = (e: React.TouchEvent, notifId: number) => {
    notifTouchStartX.current = e.touches[0].clientX;
    setSwipingNotification(notifId);
  };

  const handleNotificationSwipeMove = (e: React.TouchEvent) => {
    if (notifTouchStartX.current === null || swipingNotification === null) return;
    const diff = notifTouchStartX.current - e.touches[0].clientX;
    if (diff > 0) {
      setSwipeOffset(Math.min(diff, 100));
    }
  };

  const handleNotificationSwipeEnd = () => {
    if (swipeOffset > 60 && swipingNotification !== null) {
      setNotifications(prev => prev.filter(n => n.id !== swipingNotification));
    }
    setSwipeOffset(0);
    setSwipingNotification(null);
    notifTouchStartX.current = null;
  };

  const removeNotification = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  if (loading) {
    return (
      <div className={`w-full min-h-screen flex items-center justify-center ${isDark ? 'bg-neutral-950' : 'bg-gradient-to-br from-pink-50 via-white to-purple-50'}`}>
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-10 h-10 text-pink-500 animate-spin" />
          <p className={`text-sm ${isDark ? 'text-muted-foreground' : 'text-gray-500'}`}>Ładowanie...</p>
        </div>
      </div>
    );
  }
  // Allow access without authentication for development
  // if (!user) {
  //   return null;
  // }

  const tabs = [
    { id: "start", icon: Home, label: "Start" },
    { id: "szablony", icon: FileText, label: "Szablony" },
    { id: "kursy", icon: GraduationCap, label: "Kursy" },
    { id: "profil", icon: User, label: "Profil" },
  ];

  const tabIndex = tabs.findIndex(t => t.id === activeTab);

  const handleTabChange = (newTab: string) => {
    // Handle navigation with courseId (e.g., "kursy:course-id")
    if (newTab.startsWith("kursy:")) {
      const courseId = newTab.split(":")[1];
      setInitialCourseId(courseId);
      newTab = "kursy";
    } else {
      setInitialCourseId(null);
    }
    
    const newIndex = tabs.findIndex(t => t.id === newTab);
    setDirection(newIndex > tabIndex ? 1 : -1);
    setActiveTab(newTab);
    // Reset StartTab to dashboard when clicking Start again
    if (newTab === "start") {
      setStartTabKey(prev => prev + 1);
    }
    // Scroll to top when changing tabs
    window.scrollTo(0, 0);
  };

  // Tabs where swipe navigation should be disabled
  const swipeDisabledTabs = ["szablony", "kursy", "wsparcie", "profil"];
  const isSwipeEnabled = !swipeDisabledTabs.includes(activeTab) && !isInSubView;

  const handleSwipe = (swipeDirection: number) => {
    if (!isSwipeEnabled) return;
    const newIndex = tabIndex + swipeDirection;
    if (newIndex >= 0 && newIndex < tabs.length) {
      setDirection(swipeDirection);
      setActiveTab(tabs[newIndex].id);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "start":
        return <StartTab resetKey={startTabKey} onToolChange={setIsInSubView} onNavigateToTab={handleTabChange} />;
      case "szablony":
        return <SzablonyTab />;
      case "kursy":
        return <KursyTab initialCourseId={initialCourseId} onCourseOpened={() => setInitialCourseId(null)} />;
      case "wsparcie":
        return <WsparcieTab />;
      case "profil":
        return <ProfilTab />;
      default:
        return <StartTab />;
    }
  };

  return (
    <div className={`w-full min-h-screen relative overflow-x-hidden ${isDark ? 'bg-neutral-950' : 'bg-gradient-to-br from-pink-50 via-white to-purple-50'}`}>
      {/* Background effects - static, GPU optimized */}
      <div className="fixed inset-0 pointer-events-none will-change-transform">
        <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-2xl ${isDark ? 'bg-pink-500/20' : 'bg-pink-300/40'}`} />
        <div className={`absolute top-1/4 -left-32 w-64 h-64 rounded-full blur-2xl ${isDark ? 'bg-purple-500/15' : 'bg-purple-300/30'}`} />
        <div className={`absolute bottom-1/3 -right-16 w-72 h-72 rounded-full blur-2xl ${isDark ? 'bg-rose-500/15' : 'bg-rose-300/30'}`} />
        <div className={`absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full blur-2xl ${isDark ? 'bg-pink-500/15' : 'bg-pink-200/40'}`} />
      </div>
      <div className={`${fullBleed ? 'w-screen max-w-none mx-0' : 'max-w-md mx-auto'} min-h-screen pb-14 relative z-10`}>


        {/* Header */}
        <header className={`sticky top-0 z-50 border-b pt-[env(safe-area-inset-top)] ${isDark ? 'bg-neutral-950/85 border-pink-500/20' : 'bg-pink-50/90 border-pink-100'}`}>
          <div className="flex items-center justify-between px-4 py-2">
            <img src={logoImg} alt="Aurine Academy" className="w-8 h-8" />
            <div className="flex items-center gap-2">
              <button 
                onClick={() => handleTabChange("wsparcie")}
                className={`relative p-1.5 rounded-full transition-colors ${isDark ? 'hover:bg-gray-800' : 'hover:bg-pink-100'}`}
              >
                <MessageCircle className={`w-5 h-5 ${isDark ? 'text-gray-300' : 'text-gray-600'}`} strokeWidth={1.5} />
              </button>
              
              {/* Notifications */}
              <div className="relative" ref={notificationRef}>
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className={`relative p-1.5 rounded-full transition-colors ${showNotifications ? (isDark ? 'bg-pink-500/20' : 'bg-pink-100') : (isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100')}`}
                >
                  <Bell className={`w-5 h-5 ${showNotifications ? 'text-pink-500' : (isDark ? 'text-gray-300' : 'text-gray-600')}`} strokeWidth={1.5} />
                  {notifications.some(n => n.unread) && (
                    <span className="absolute top-0.5 right-0.5 w-2 h-2 bg-pink-500 rounded-full" />
                  )}
                </button>
                
                {/* Notifications Dropdown */}
                {showNotifications && (
                  <div
                    className={`absolute right-0 top-full mt-2 w-72 rounded-xl shadow-xl border overflow-hidden z-50 ${isDark ? 'bg-neutral-900 border-pink-500/20' : 'bg-white border-gray-100'}`}
                  >
                    <div className={`flex items-center justify-between px-4 py-3 border-b ${isDark ? 'border-neutral-800' : 'border-gray-100'}`}>
                      <h3 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Powiadomienia</h3>
                      <button 
                        onClick={() => setShowNotifications(false)}
                        className={`p-1 rounded-full transition-colors ${isDark ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'}`}
                      >
                        <X className={`w-4 h-4 ${isDark ? 'text-neutral-400' : 'text-gray-400'}`} />
                      </button>
                    </div>
                    <div className="max-h-80 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className={`px-4 py-8 text-center ${isDark ? 'text-neutral-500' : 'text-gray-400'}`}>
                          <p className="text-xs">Brak powiadomień</p>
                        </div>
                      ) : (
                        notifications.map((notif) => (
                          <div 
                            key={notif.id}
                            className="relative overflow-hidden"
                            onTouchStart={(e) => handleNotificationSwipeStart(e, notif.id)}
                            onTouchMove={handleNotificationSwipeMove}
                            onTouchEnd={handleNotificationSwipeEnd}
                          >
                            {/* Delete background */}
                            <div className={`absolute inset-y-0 right-0 w-20 bg-red-500 flex items-center justify-center ${swipingNotification === notif.id && swipeOffset > 0 ? 'opacity-100' : 'opacity-0'}`}>
                              <X className="w-5 h-5 text-white" />
                            </div>
                            
                            <div 
                              className={`flex items-start gap-3 px-4 py-3 transition-all cursor-pointer relative ${
                                isDark 
                                  ? `hover:bg-neutral-800/50 ${notif.unread ? 'bg-pink-500/10' : 'bg-neutral-900'}` 
                                  : `hover:bg-gray-50 ${notif.unread ? 'bg-pink-50/50' : 'bg-white'}`
                              }`}
                              style={{
                                transform: swipingNotification === notif.id ? `translateX(-${swipeOffset}px)` : 'translateX(0)',
                                transition: swipingNotification === notif.id ? 'none' : 'transform 0.2s ease-out'
                              }}
                            >
                              <div className={`w-8 h-8 ${notif.iconBg} rounded-full flex items-center justify-center shrink-0`}>
                                <notif.icon className="w-4 h-4 text-white" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className={`text-xs font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>{notif.title}</p>
                                <p className={`text-xs truncate ${isDark ? 'text-neutral-400' : 'text-gray-500'}`}>{notif.message}</p>
                                <p className={`text-[10px] mt-0.5 ${isDark ? 'text-neutral-500' : 'text-gray-400'}`}>{notif.time}</p>
                              </div>
                              {notif.unread && (
                                <div className="w-2 h-2 bg-pink-500 rounded-full shrink-0 mt-1" />
                              )}
                            </div>
                          </div>
                        ))
                      )}
                    </div>
                    <div className={`px-4 py-2 border-t ${isDark ? 'border-neutral-800' : 'border-gray-100'}`}>
                      <button className={`w-full text-xs font-medium transition-colors py-1 ${isDark ? 'text-pink-400 hover:text-pink-300' : 'text-pink-500 hover:text-pink-600'}`}>
                        Zobacz wszystkie
                      </button>
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                onClick={() => handleTabChange("profil")}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isDark ? 'bg-pink-500/20 hover:bg-pink-500/30' : 'bg-pink-100 hover:bg-pink-200'}`}
              >
                <User className={`w-4 h-4 ${isDark ? 'text-pink-400' : 'text-pink-600'}`} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </header>

        {/* Tab Content with Swipe */}
        <div 
          className={`relative ${fullBleed ? 'overflow-x-visible' : 'overflow-hidden'} min-h-[calc(100vh-120px)]`}
          onTouchStart={(e) => {
            touchStartXRef.current = e.touches[0].clientX;
            touchStartYRef.current = e.touches[0].clientY;
            hasSwipedRef.current = false;
          }}
          onTouchMove={(e) => {
            if (touchStartXRef.current === null || touchStartYRef.current === null || hasSwipedRef.current) return;
            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const diffX = touchStartXRef.current - currentX;
            const diffY = touchStartYRef.current - currentY;
            const threshold = 80;

            if (Math.abs(diffX) > threshold && Math.abs(diffX) > Math.abs(diffY)) {
              if (diffX > 0) {
                handleSwipe(1);
              } else {
                handleSwipe(-1);
              }
              hasSwipedRef.current = true;
            }
          }}
          onTouchEnd={() => {
            touchStartXRef.current = null;
            touchStartYRef.current = null;
            hasSwipedRef.current = false;
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {renderTabContent()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Navigation */}
        <nav className={`fixed bottom-0 left-0 right-0 border-t pb-[env(safe-area-inset-bottom)] ${isDark ? 'bg-neutral-950/95 border-pink-500/20' : 'bg-pink-50/90 border-pink-100'}`}>
          <div className={`${fullBleed ? 'w-full max-w-none mx-0' : 'max-w-md mx-auto'} h-14 flex items-center justify-around px-2`}>
            {tabs.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleTabChange(item.id)}
                className={`flex flex-col items-center gap-0.5 py-1.5 px-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.id && !(item.id === "start" && isInSubView)
                    ? (isDark ? 'bg-pink-500/10' : 'bg-pink-50')
                    : (isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50')
                }`}
              >
                <div className={`p-1 rounded-lg ${activeTab === item.id && !(item.id === "start" && isInSubView) ? 'bg-pink-500 shadow-[0_2px_8px_rgba(236,72,153,0.4)]' : ''}`}>
                  <item.icon 
                    className={`w-5 h-5 ${activeTab === item.id && !(item.id === "start" && isInSubView) ? 'text-white' : (isDark ? 'text-gray-400' : 'text-gray-400')}`} 
                    strokeWidth={activeTab === item.id && !(item.id === "start" && isInSubView) ? 2 : 1.5}
                  />
                </div>
                <span className={`text-[10px] ${activeTab === item.id && !(item.id === "start" && isInSubView) ? (isDark ? 'text-pink-400' : 'text-pink-600') + ' font-semibold' : (isDark ? 'text-gray-500' : 'text-gray-400')}`}>
                  {item.label}
                </span>
              </button>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainApp;
