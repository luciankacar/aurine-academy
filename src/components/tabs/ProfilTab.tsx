import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Building2, Phone, Mail, MapPin,
  Clock, Calendar as CalendarIcon, FileText, FileCheck,
  Bell, Volume2, HelpCircle, Info,
  LogOut, Shield, ScrollText, ChevronRight, Edit3, Sun, Moon, Monitor,
  MessageSquare, Send, CalendarPlus, Check, X, ChevronLeft, Loader2, Trash2, Database
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useAuth } from "@/hooks/useAuth";
import { useProfile } from "@/hooks/useProfile";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { format, addMonths, subMonths, isBefore, startOfDay } from "date-fns";
import { pl } from "date-fns/locale";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import PrivacySettingsModal from "@/components/modals/PrivacySettingsModal";
import PrivacyPolicyModal from "@/components/modals/PrivacyPolicyModal";
import TermsOfServiceModal from "@/components/modals/TermsOfServiceModal";
import FAQModal from "@/components/modals/FAQModal";
import ContactModal from "@/components/modals/ContactModal";
import FeedbackModal from "@/components/modals/FeedbackModal";
import ContractModal from "@/components/modals/ContractModal";
import ServiceTermsModal from "@/components/modals/ServiceTermsModal";
import InvoicesModal from "@/components/modals/InvoicesModal";
import EditProfileModal from "@/components/modals/EditProfileModal";
import ExtendContractModal from "@/components/modals/ExtendContractModal";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const ProfilTab = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const { user, signOut } = useAuth();
  const { profile, loading: profileLoading, updateProfile } = useProfile();
  const { refetch: refetchProgress } = useCourseProgress();
  const navigate = useNavigate();
  const { toast } = useToast();
  const isDark = resolvedTheme === "dark";
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isSavingProfile, setIsSavingProfile] = useState(false);
  const [isResettingProgress, setIsResettingProgress] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    const { error } = await signOut();
    if (error) {
      toast({
        title: "Błąd wylogowania",
        description: error.message,
        variant: "destructive",
      });
      setIsLoggingOut(false);
    } else {
      toast({
        title: "Wylogowano",
        description: "Do zobaczenia!",
      });
      navigate("/auth");
    }
  };

  const handleSaveProfile = async (data: {
    displayName: string;
    salonName: string;
    email: string;
    phone: string;
    address: string;
  }) => {
    setIsSavingProfile(true);
    const result = await updateProfile({
      displayName: data.displayName,
      salonName: data.salonName,
      email: data.email,
      phone: data.phone,
      address: data.address,
    });
    setIsSavingProfile(false);
    return { error: result.error };
  };

  // Reset all course progress
  const handleResetProgress = async () => {
    if (!user) return;
    
    setIsResettingProgress(true);
    try {
      const { error } = await supabase
        .from('lesson_progress')
        .delete()
        .eq('user_id', user.id);
      
      if (error) {
        toast({
          title: "Błąd",
          description: "Nie udało się zresetować postępów",
          variant: "destructive",
        });
      } else {
        await refetchProgress();
        toast({
          title: "Postępy zresetowane",
          description: "Wszystkie postępy w kursach zostały usunięte",
        });
      }
    } catch (err) {
      toast({
        title: "Błąd",
        description: "Wystąpił nieoczekiwany błąd",
        variant: "destructive",
      });
    } finally {
      setIsResettingProgress(false);
    }
  };

  // Get user initials
  const getInitials = () => {
    if (profile?.displayName) {
      const names = profile.displayName.trim().split(' ').filter(n => n.length > 0);
      if (names.length >= 2) {
        return `${names[0][0]}${names[1][0]}`.toUpperCase();
      }
      if (names.length === 1 && names[0].length >= 2) {
        return names[0].substring(0, 2).toUpperCase();
      }
      if (names.length === 1 && names[0].length === 1) {
        return names[0].toUpperCase();
      }
    }
    if (user?.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    return 'U';
  };
  
  // Toggle states
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(false);
  const [reminderEnabled, setReminderEnabled] = useState(true);
  
  // Modal states
  const [showPrivacySettings, setShowPrivacySettings] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTermsOfService, setShowTermsOfService] = useState(false);
  const [showFAQ, setShowFAQ] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [showContract, setShowContract] = useState(false);
  const [showServiceTerms, setShowServiceTerms] = useState(false);
  const [showInvoices, setShowInvoices] = useState(false);
  const [showEditProfile, setShowEditProfile] = useState(false);
  const [showExtendContract, setShowExtendContract] = useState(false);
  
  // Meeting scheduling state
  const [showMeetingForm, setShowMeetingForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("");
  const [meetingNote, setMeetingNote] = useState("");
  const [pendingMeeting, setPendingMeeting] = useState<{date: string; time: string; status: "pending" | "confirmed"} | null>(null);
  
  const availableTimes = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"];
  
  const wspolpracaKoniec = "14.03.2025";
  const dniDoKonca = 91;
  const wersjaAplikacji = "1.0.0";

  // Theme-aware styles
  const cardBg = isDark ? "bg-card" : "bg-white";
  const cardBorder = isDark ? "border-border" : "border-gray-100";
  const textPrimary = isDark ? "text-foreground" : "text-gray-900";
  const textSecondary = isDark ? "text-muted-foreground" : "text-gray-500";
  const textMuted = isDark ? "text-muted-foreground" : "text-gray-400";
  const hoverBg = isDark ? "hover:bg-muted/50" : "hover:bg-gray-50";
  const borderColor = isDark ? "border-border" : "border-gray-50";
  const sectionTitleColor = isDark ? "text-muted-foreground" : "text-gray-500";
  
  const getThemeLabel = () => {
    switch (theme) {
      case "dark": return "Ciemny";
      case "light": return "Jasny";
      case "system": return "Systemowy";
      default: return "Systemowy";
    }
  };
  
  const getThemeIcon = () => {
    switch (theme) {
      case "dark": return <Moon className="w-5 h-5 text-purple-400" />;
      case "light": return <Sun className="w-5 h-5 text-amber-500" />;
      case "system": return <Monitor className="w-5 h-5 text-blue-400" />;
      default: return <Monitor className="w-5 h-5 text-blue-400" />;
    }
  };
  
  const cycleTheme = () => {
    switch (theme) {
      case "system": setTheme("light"); break;
      case "light": setTheme("dark"); break;
      case "dark": setTheme("system"); break;
      default: setTheme("system");
    }
  };

  // Settings row component
  const SettingsRow = ({ 
    icon: Icon, 
    iconColor, 
    title, 
    subtitle, 
    rightElement,
    onClick,
    isLast = false
  }: {
    icon: any;
    iconColor: string;
    title: string;
    subtitle?: string;
    rightElement?: React.ReactNode;
    onClick?: () => void;
    isLast?: boolean;
  }) => (
    <button 
      onClick={onClick}
      className={`w-full px-3 py-2.5 flex items-center gap-3 ${hoverBg} transition-colors ${!isLast ? `border-b ${borderColor}` : ''}`}
    >
      <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-pink-500/15' : 'bg-pink-50'} flex items-center justify-center shrink-0`}>
        <Icon className={`w-3.5 h-3.5 ${iconColor}`} />
      </div>
      <div className="flex-1 text-left">
        <p className={`text-[13px] font-medium ${textPrimary}`}>{title}</p>
        {subtitle && <p className={`text-[11px] ${textSecondary}`}>{subtitle}</p>}
      </div>
      {rightElement}
    </button>
  );

  if (profileLoading) {
    return (
      <main className="pb-6 flex items-center justify-center min-h-[50vh]">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-8 h-8 text-pink-500 animate-spin" />
          <p className={`text-sm ${isDark ? 'text-muted-foreground' : 'text-gray-500'}`}>Ładowanie profilu...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="pb-4 space-y-4">
      
      {/* ========== GŁÓWNY PANEL PROFILU ========== */}
      <section className={`${cardBg} rounded-b-xl border-b ${cardBorder} overflow-hidden -mt-1`}>
        {/* Header z gradientem */}
        <div className={`h-12 relative ${isDark ? 'bg-gradient-to-r from-pink-600/30 via-purple-600/20 to-pink-600/30' : 'bg-gradient-to-r from-pink-200 via-pink-100 to-pink-200'}`}>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.15),transparent_70%)]" />
        </div>
        
        {/* Avatar i info */}
        <div className="px-4 pb-4">
          <div className="flex items-start gap-3 -mt-6">
            <div className="relative shrink-0">
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-white text-base font-bold ring-2 ${isDark ? 'ring-neutral-900' : 'ring-white'} shadow-lg`}>
                {getInitials()}
              </div>
              <button 
                onClick={() => setShowEditProfile(true)}
                className={`absolute -bottom-1 -right-1 w-5 h-5 ${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-200'} rounded-full shadow-md border flex items-center justify-center hover:scale-105 transition-transform`}
              >
                <Edit3 className="w-2.5 h-2.5 text-pink-500" />
              </button>
            </div>
            
            <div className="flex-1 pt-7">
              <h1 className={`text-base font-bold ${textPrimary} leading-tight`}>
                {profile?.displayName || 'Użytkownik'}
              </h1>
              <p className={`text-[11px] ${textSecondary}`}>{user?.email}</p>
            </div>
          </div>
          
          {/* Salon + kampania info */}
          {profile?.salonName && (
            <div className={`mt-3 pt-3 border-t ${borderColor}`}>
              <div className="flex items-center gap-2.5">
                <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-pink-500/15' : 'bg-pink-50'} flex items-center justify-center`}>
                  <Building2 className="w-3.5 h-3.5 text-pink-500" />
                </div>
                <div>
                  <p className={`text-[13px] font-semibold ${textPrimary}`}>{profile.salonName}</p>
                  <p className={`text-[11px] ${textSecondary}`}>Fryzjerstwo • Kosmetyka • Stylizacja</p>
                  <div className="mt-1 flex flex-wrap items-center gap-1.5 text-[10px]">
                    <span className={`font-semibold ${isDark ? 'text-pink-300' : 'text-pink-600'}`}>Kampania:</span>
                    <span className={`px-1.5 py-0.5 rounded-full text-[9px] font-medium ${isDark ? 'bg-emerald-500/20 text-emerald-300' : 'bg-emerald-100 text-emerald-700'}`}>
                      Aktywna
                    </span>
                    <span className={textMuted}>Facebook + Instagram</span>
                    <span className={textMuted}>Cel: więcej rezerwacji</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ========== SEKCJE USTAWIEŃ ========== */}
      <div className="space-y-4 px-3 pt-2">

        {/* DANE KONTAKTOWE - teraz na początku */}
        <section>
          <div className="flex items-center justify-between mb-2 px-1">
            <h2 className={`text-[11px] font-semibold uppercase tracking-wider ${sectionTitleColor}`}>Dane kontaktowe</h2>
            <button 
              onClick={() => setShowEditProfile(true)}
              className={`text-[11px] font-medium text-pink-500 hover:text-pink-600 transition-colors flex items-center gap-1`}
            >
              <Edit3 className="w-3 h-3" />
              Edytuj
            </button>
          </div>
          <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden`}>
            <div className={`px-3 py-2.5 flex items-center gap-3 border-b ${borderColor}`}>
              <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-pink-500/15' : 'bg-pink-50'} flex items-center justify-center shrink-0`}>
                <Building2 className="w-3.5 h-3.5 text-pink-500" />
              </div>
              <div className="flex-1">
                <p className={`text-[11px] ${textMuted}`}>Nazwa salonu</p>
                <p className={`text-[13px] font-medium ${textPrimary}`}>{profile?.salonName || 'Nie podano'}</p>
              </div>
            </div>
            <div className={`px-3 py-2.5 flex items-center gap-3 border-b ${borderColor}`}>
              <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-pink-500/15' : 'bg-pink-50'} flex items-center justify-center shrink-0`}>
                <Mail className="w-3.5 h-3.5 text-pink-500" />
              </div>
              <div className="flex-1">
                <p className={`text-[11px] ${textMuted}`}>Email</p>
                <p className={`text-[13px] font-medium ${textPrimary}`}>{profile?.email || user?.email || 'Nie podano'}</p>
              </div>
            </div>
            <div className={`px-3 py-2.5 flex items-center gap-3 border-b ${borderColor}`}>
              <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-pink-500/15' : 'bg-pink-50'} flex items-center justify-center shrink-0`}>
                <Phone className="w-3.5 h-3.5 text-pink-500" />
              </div>
              <div className="flex-1">
                <p className={`text-[11px] ${textMuted}`}>Telefon</p>
                <p className={`text-[13px] font-medium ${textPrimary}`}>{profile?.phone || 'Nie podano'}</p>
              </div>
            </div>
            <div className="px-3 py-2.5 flex items-center gap-3">
              <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-pink-500/15' : 'bg-pink-50'} flex items-center justify-center shrink-0`}>
                <MapPin className="w-3.5 h-3.5 text-pink-500" />
              </div>
              <div className="flex-1">
                <p className={`text-[11px] ${textMuted}`}>Adres salonu</p>
                <p className={`text-[13px] font-medium ${textPrimary}`}>{profile?.address || 'Nie podano'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* OPIEKUN */}
        <section>
          <h2 className={`text-[11px] font-semibold uppercase tracking-wider ${sectionTitleColor} mb-2 px-1`}>Twój opiekun w Aurine</h2>
          <div className={`${cardBg} rounded-xl border ${cardBorder} p-3`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-pink-500 flex items-center justify-center text-white font-semibold shrink-0 text-sm">
                A
              </div>
              <div className="flex-1">
                <p className={`text-[13px] font-semibold ${textPrimary}`}>Anna</p>
                <p className={`text-[11px] ${textSecondary}`}>Twój opiekun</p>
              </div>
              <button className="px-2.5 py-1.5 bg-pink-500 hover:bg-pink-600 text-white text-[11px] font-medium rounded-lg transition-colors">
                Napisz
              </button>
            </div>
            
            {/* Umówione lub oczekujące spotkanie */}
            {pendingMeeting && (
              <div className={`mt-2 pt-2 border-t ${borderColor}`}>
                <div className="flex items-center gap-2">
                  <div className={`w-6 h-6 rounded-md ${pendingMeeting.status === "confirmed" ? (isDark ? 'bg-emerald-500/15' : 'bg-emerald-50') : (isDark ? 'bg-amber-500/15' : 'bg-amber-50')} flex items-center justify-center`}>
                    {pendingMeeting.status === "confirmed" ? (
                      <Check className={`w-3 h-3 ${isDark ? 'text-emerald-400' : 'text-emerald-500'}`} />
                    ) : (
                      <Clock className={`w-3 h-3 ${isDark ? 'text-amber-400' : 'text-amber-500'}`} />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className={`text-[10px] ${textMuted}`}>
                      {pendingMeeting.status === "confirmed" ? "Potwierdzone spotkanie" : "Oczekuje na potwierdzenie"}
                    </p>
                    <p className={`text-xs font-medium ${textPrimary}`}>
                      {pendingMeeting.date} • {pendingMeeting.time}
                    </p>
                  </div>
                  <button 
                    onClick={() => setPendingMeeting(null)}
                    className={`p-1.5 rounded-md ${hoverBg} transition-colors`}
                  >
                    <X className={`w-3 h-3 ${textMuted}`} />
                  </button>
                </div>
              </div>
            )}
            
            {/* Formularz umawiania spotkania */}
            {showMeetingForm ? (
              <div className={`mt-2 pt-2 border-t ${borderColor}`}>
                <div className="flex items-center justify-between mb-2">
                  <p className={`text-xs font-semibold ${textPrimary}`}>Poproś o spotkanie</p>
                  <button 
                    onClick={() => {
                      setShowMeetingForm(false);
                      setSelectedDate(undefined);
                      setSelectedTime("");
                      setMeetingNote("");
                    }}
                    className={`p-1 rounded-md ${hoverBg} transition-colors`}
                  >
                    <X className={`w-3 h-3 ${textMuted}`} />
                  </button>
                </div>
                
                {/* Kalendarz */}
                <div className={`rounded-lg overflow-hidden border ${cardBorder} ${isDark ? 'bg-neutral-800/50' : 'bg-gray-50/50'}`}>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    locale={pl}
                    disabled={(date) => isBefore(date, startOfDay(new Date()))}
                    className="pointer-events-auto"
                    classNames={{
                      months: "flex flex-col",
                      month: "space-y-2",
                      caption: "flex justify-center pt-1 relative items-center px-2",
                      caption_label: `text-xs font-semibold ${textPrimary}`,
                      nav: "space-x-1 flex items-center",
                      nav_button: `h-6 w-6 bg-transparent p-0 opacity-70 hover:opacity-100 rounded-md ${hoverBg} flex items-center justify-center`,
                      nav_button_previous: "absolute left-2",
                      nav_button_next: "absolute right-2",
                      table: "w-full border-collapse",
                      head_row: "flex justify-around",
                      head_cell: `${textMuted} rounded-md w-6 font-medium text-[0.6rem] uppercase`,
                      row: "flex w-full mt-0.5 justify-around",
                      cell: "h-6 w-6 text-center text-xs p-0 relative rounded-md",
                      day: `h-6 w-6 p-0 font-normal rounded-md transition-colors text-[10px] ${isDark ? 'hover:bg-pink-500/20 text-neutral-200' : 'hover:bg-pink-50 text-gray-700'}`,
                      day_range_end: "day-range-end",
                      day_selected: "bg-pink-500 text-white hover:bg-pink-600 hover:text-white focus:bg-pink-500 focus:text-white",
                      day_today: `${isDark ? 'bg-neutral-700 text-pink-300' : 'bg-pink-100 text-pink-700'} font-semibold`,
                      day_outside: "opacity-30",
                      day_disabled: "opacity-30 cursor-not-allowed hover:bg-transparent",
                      day_hidden: "invisible",
                    }}
                  />
                </div>
                
                {/* Wybór godziny */}
                {selectedDate && (
                  <div className="mt-2">
                    <p className={`text-[10px] font-medium ${textMuted} mb-1.5`}>Wybierz godzinę</p>
                    <div className="grid grid-cols-4 gap-1.5">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          onClick={() => setSelectedTime(time)}
                          className={`py-1.5 px-2 rounded-md text-[10px] font-medium transition-colors ${
                            selectedTime === time
                              ? 'bg-pink-500 text-white'
                              : isDark 
                                ? 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700' 
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Notatka */}
                {selectedDate && selectedTime && (
                  <div className="mt-2">
                    <label className={`text-[10px] font-medium ${textMuted} block mb-1`}>Notatka (opcjonalnie)</label>
                    <textarea
                      value={meetingNote}
                      onChange={(e) => setMeetingNote(e.target.value)}
                      placeholder="O czym chcesz porozmawiać?"
                      rows={2}
                      className={`w-full px-2 py-1.5 rounded-lg text-xs ${isDark ? 'bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500' : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400'} border focus:border-pink-500 focus:outline-none resize-none`}
                    />
                  </div>
                )}
                
                {/* Podsumowanie i przycisk */}
                {selectedDate && selectedTime && (
                  <div className="mt-2 space-y-2">
                    <div className={`p-2 rounded-lg ${isDark ? 'bg-pink-500/10 border-pink-500/20' : 'bg-pink-50 border-pink-100'} border`}>
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-lg ${isDark ? 'bg-pink-500/20' : 'bg-pink-100'} flex items-center justify-center`}>
                          <CalendarIcon className="w-3.5 h-3.5 text-pink-500" />
                        </div>
                        <div>
                          <p className={`text-xs font-semibold ${textPrimary}`}>
                            {format(selectedDate, "EEEE, d MMMM", { locale: pl })}
                          </p>
                          <p className={`text-[10px] ${textSecondary}`}>Godzina: {selectedTime}</p>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => {
                        if (selectedDate && selectedTime) {
                          setPendingMeeting({ 
                            date: format(selectedDate, "d.MM.yyyy"), 
                            time: selectedTime, 
                            status: "pending" 
                          });
                          setShowMeetingForm(false);
                          setSelectedDate(undefined);
                          setSelectedTime("");
                          setMeetingNote("");
                        }
                      }}
                      className="w-full py-2 rounded-lg text-xs font-semibold bg-pink-500 hover:bg-pink-600 text-white transition-colors flex items-center justify-center gap-1.5"
                    >
                      <Send className="w-3 h-3" />
                      Wyślij prośbę o spotkanie
                    </button>
                  </div>
                )}
              </div>
            ) : !pendingMeeting && (
              <div className={`mt-2 pt-2 border-t ${borderColor}`}>
                <button
                  onClick={() => setShowMeetingForm(true)}
                  className={`w-full flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold ${isDark ? 'bg-pink-500/15 text-pink-300 hover:bg-pink-500/25' : 'bg-pink-50 text-pink-600 hover:bg-pink-100'} transition-colors`}
                >
                  <CalendarPlus className="w-3 h-3" />
                  Umów spotkanie z opiekunem
                </button>
              </div>
            )}
          </div>
        </section>

        {/* WSPÓŁPRACA */}
        <section>
          <h2 className={`text-[10px] font-semibold uppercase tracking-wider ${sectionTitleColor} mb-2 px-1`}>Współpraca z Aurine</h2>
          <div className={`${cardBg} rounded-xl border ${cardBorder} p-2.5`}>
            <div className="flex items-center gap-2.5">
              <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-amber-500/15' : 'bg-amber-50'} flex items-center justify-center shrink-0`}>
                <Clock className="w-4 h-4 text-amber-500" />
              </div>
              <div className="flex-1">
                <p className={`text-xs font-semibold ${textPrimary}`}>Umowa do {wspolpracaKoniec}</p>
                <p className={`text-[10px] ${textSecondary}`}>Pozostało {dniDoKonca} dni</p>
              </div>
              <button 
                onClick={() => setShowExtendContract(true)}
                className="text-[10px] text-pink-500 font-medium hover:text-pink-600 transition-colors"
              >
                Przedłuż →
              </button>
            </div>
          </div>
        </section>

        {/* POWIADOMIENIA */}
        <section>
          <h2 className={`text-[10px] font-semibold uppercase tracking-wider ${sectionTitleColor} mb-2 px-1`}>Powiadomienia</h2>
          <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden`}>
            <SettingsRow
              icon={Bell}
              iconColor="text-pink-500"
              title="Powiadomienia push"
              subtitle="Otrzymuj powiadomienia w aplikacji"
              rightElement={
                <Switch 
                  checked={pushEnabled} 
                  onCheckedChange={setPushEnabled}
                  className="data-[state=checked]:bg-pink-500 scale-75"
                />
              }
            />
            <SettingsRow
              icon={Mail}
              iconColor="text-pink-500"
              title="Aktualizacje e-mail"
              subtitle="Otrzymuj wiadomości o nowych kursach"
              rightElement={
                <Switch 
                  checked={emailEnabled} 
                  onCheckedChange={setEmailEnabled}
                  className="data-[state=checked]:bg-pink-500 scale-75"
                />
              }
            />
            <SettingsRow
              icon={Clock}
              iconColor="text-pink-500"
              title="Przypomnienia o nauce"
              subtitle="Codzienne przypomnienia o 18:00"
              rightElement={
                <Switch 
                  checked={reminderEnabled} 
                  onCheckedChange={setReminderEnabled}
                  className="data-[state=checked]:bg-pink-500 scale-75"
                />
              }
              isLast
            />
          </div>
        </section>

        {/* WYGLĄD */}
        <section>
          <h2 className={`text-[10px] font-semibold uppercase tracking-wider ${sectionTitleColor} mb-2 px-1`}>Wygląd</h2>
          <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden`}>
            <SettingsRow
              icon={theme === "dark" ? Moon : theme === "light" ? Sun : Monitor}
              iconColor={theme === "dark" ? "text-purple-400" : theme === "light" ? "text-amber-500" : "text-blue-400"}
              title="Motyw"
              subtitle={`Aktualny: ${getThemeLabel()}`}
              onClick={cycleTheme}
              rightElement={
                <div className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${isDark ? 'bg-muted text-foreground' : 'bg-gray-100 text-gray-700'}`}>
                  {getThemeLabel()}
                </div>
              }
              isLast
            />
          </div>
        </section>

        {/* DANE */}
        <section>
          <h2 className={`text-[10px] font-semibold uppercase tracking-wider ${sectionTitleColor} mb-2 px-1`}>Dane</h2>
          <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden`}>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button 
                  className={`w-full px-2.5 py-2 flex items-center gap-2.5 ${hoverBg} transition-colors`}
                  disabled={isResettingProgress}
                >
                  <div className={`w-6 h-6 rounded-md ${isDark ? 'bg-red-500/15' : 'bg-red-50'} flex items-center justify-center shrink-0`}>
                    <Trash2 className="w-3 h-3 text-red-500" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className={`text-xs font-medium ${textPrimary}`}>Resetuj postępy w kursach</p>
                    <p className={`text-[10px] ${textSecondary}`}>Usuń wszystkie ukończone lekcje</p>
                  </div>
                  {isResettingProgress ? (
                    <Loader2 className="w-3 h-3 animate-spin text-red-500" />
                  ) : (
                    <ChevronRight className={`w-4 h-4 ${textMuted}`} />
                  )}
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent className={isDark ? 'bg-card border-border' : ''}>
                <AlertDialogHeader>
                  <AlertDialogTitle className={textPrimary}>Resetować postępy?</AlertDialogTitle>
                  <AlertDialogDescription className={textSecondary}>
                    Czy na pewno chcesz usunąć wszystkie postępy w kursach? Ta akcja jest nieodwracalna i musisz zacząć wszystkie kursy od początku.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className={isDark ? 'bg-muted hover:bg-muted/80' : ''}>Anuluj</AlertDialogCancel>
                  <AlertDialogAction
                    onClick={handleResetProgress}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Resetuj postępy
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </section>

        {/* PRYWATNOŚĆ I BEZPIECZEŃSTWO */}
        <section>
          <h2 className={`text-[10px] font-semibold uppercase tracking-wider ${sectionTitleColor} mb-2 px-1`}>Prywatność i bezpieczeństwo</h2>
          <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden`}>
            <SettingsRow
              icon={Shield}
              iconColor="text-pink-500"
              title="Ustawienia prywatności"
              rightElement={<ChevronRight className={`w-4 h-4 ${textMuted}`} />}
              onClick={() => setShowPrivacySettings(true)}
            />
            <SettingsRow
              icon={ScrollText}
              iconColor="text-pink-500"
              title="Polityka prywatności"
              rightElement={<ChevronRight className={`w-4 h-4 ${textMuted}`} />}
              onClick={() => setShowPrivacyPolicy(true)}
            />
            <SettingsRow
              icon={FileText}
              iconColor="text-pink-500"
              title="Warunki użytkowania"
              rightElement={<ChevronRight className={`w-4 h-4 ${textMuted}`} />}
              onClick={() => setShowTermsOfService(true)}
              isLast
            />
          </div>
        </section>

        {/* WSPARCIE */}
        <section>
          <h2 className={`text-[10px] font-semibold uppercase tracking-wider ${sectionTitleColor} mb-2 px-1`}>Wsparcie</h2>
          <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden`}>
            <SettingsRow
              icon={HelpCircle}
              iconColor="text-pink-500"
              title="FAQ"
              subtitle="Często zadawane pytania"
              rightElement={<ChevronRight className={`w-4 h-4 ${textMuted}`} />}
              onClick={() => setShowFAQ(true)}
            />
            <SettingsRow
              icon={MessageSquare}
              iconColor="text-pink-500"
              title="Kontakt"
              subtitle="Skontaktuj się z nami"
              rightElement={<ChevronRight className={`w-4 h-4 ${textMuted}`} />}
              onClick={() => setShowContact(true)}
            />
            <SettingsRow
              icon={Send}
              iconColor="text-pink-500"
              title="Wyślij opinię"
              subtitle="Pomóż nam się rozwijać"
              rightElement={<ChevronRight className={`w-4 h-4 ${textMuted}`} />}
              onClick={() => setShowFeedback(true)}
              isLast
            />
          </div>
        </section>

        {/* DOKUMENTY */}
        <section>
          <h2 className={`text-[10px] font-semibold uppercase tracking-wider ${sectionTitleColor} mb-2 px-1`}>Dokumenty</h2>
          <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden`}>
            <SettingsRow
              icon={FileText}
              iconColor="text-blue-500"
              title="Umowa współpracy"
              rightElement={<ChevronRight className={`w-4 h-4 ${textMuted}`} />}
              onClick={() => setShowContract(true)}
            />
            <SettingsRow
              icon={FileCheck}
              iconColor="text-blue-500"
              title="Regulamin usług"
              rightElement={<ChevronRight className={`w-4 h-4 ${textMuted}`} />}
              onClick={() => setShowServiceTerms(true)}
            />
            <SettingsRow
              icon={FileText}
              iconColor="text-blue-500"
              title="Faktury"
              rightElement={<ChevronRight className={`w-4 h-4 ${textMuted}`} />}
              onClick={() => setShowInvoices(true)}
              isLast
            />
          </div>
        </section>

        {/* POMOC I WERSJA */}
        <section>
          <h2 className={`text-[10px] font-semibold uppercase tracking-wider ${sectionTitleColor} mb-2 px-1`}>Informacje</h2>
          <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden`}>
            <div className="px-2.5 py-2 flex items-center gap-2.5">
              <div className={`w-6 h-6 rounded-md ${isDark ? 'bg-pink-500/15' : 'bg-pink-50'} flex items-center justify-center shrink-0`}>
                <Info className="w-3 h-3 text-pink-500" />
              </div>
              <span className={`flex-1 text-left text-xs font-medium ${textPrimary}`}>Wersja aplikacji</span>
              <span className={`text-[10px] ${textMuted}`}>{wersjaAplikacji}</span>
            </div>
          </div>
        </section>

        {/* WYLOGUJ */}
        <section className="pb-2">
          <button 
            onClick={handleLogout}
            disabled={isLoggingOut}
            className={`w-full py-2.5 flex items-center justify-center gap-2 text-red-500 ${cardBg} rounded-xl border ${isDark ? 'border-red-500/20 hover:bg-red-500/10' : 'border-gray-100 hover:bg-red-50 hover:border-red-200'} transition-all disabled:opacity-50`}
          >
            <LogOut className="w-4 h-4" />
            <span className="text-xs font-semibold">{isLoggingOut ? "Wylogowywanie..." : "Wyloguj się"}</span>
          </button>
        </section>

      </div>

      {/* Modals */}
      <PrivacySettingsModal 
        isOpen={showPrivacySettings} 
        onClose={() => setShowPrivacySettings(false)} 
      />
      <PrivacyPolicyModal 
        isOpen={showPrivacyPolicy} 
        onClose={() => setShowPrivacyPolicy(false)} 
      />
      <TermsOfServiceModal 
        isOpen={showTermsOfService} 
        onClose={() => setShowTermsOfService(false)} 
      />
      <FAQModal 
        isOpen={showFAQ} 
        onClose={() => setShowFAQ(false)} 
      />
      <ContactModal 
        isOpen={showContact} 
        onClose={() => setShowContact(false)} 
      />
      <FeedbackModal 
        isOpen={showFeedback} 
        onClose={() => setShowFeedback(false)} 
      />
      <ContractModal 
        isOpen={showContract} 
        onClose={() => setShowContract(false)} 
      />
      <ServiceTermsModal 
        isOpen={showServiceTerms} 
        onClose={() => setShowServiceTerms(false)} 
      />
      <InvoicesModal 
        isOpen={showInvoices} 
        onClose={() => setShowInvoices(false)} 
      />
      {profile && (
        <EditProfileModal 
          isOpen={showEditProfile} 
          onClose={() => setShowEditProfile(false)}
          initialData={{
            displayName: profile.displayName,
            salonName: profile.salonName,
            email: profile.email,
            phone: profile.phone,
            address: profile.address,
          }}
          onSave={handleSaveProfile}
          isSaving={isSavingProfile}
        />
      )}
      <ExtendContractModal 
        isOpen={showExtendContract} 
        onClose={() => setShowExtendContract(false)}
        currentEndDate={wspolpracaKoniec}
      />
    </main>
  );
};

export default ProfilTab;