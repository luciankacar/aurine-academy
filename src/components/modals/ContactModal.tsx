import { X, MessageSquare, Mail, Phone, Clock } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!isOpen) return null;

  const cardBg = isDark ? "bg-card" : "bg-white";
  const cardBorder = isDark ? "border-border" : "border-gray-100";
  const textPrimary = isDark ? "text-foreground" : "text-gray-900";
  const textSecondary = isDark ? "text-muted-foreground" : "text-gray-600";
  const textMuted = isDark ? "text-muted-foreground" : "text-gray-400";
  const borderColor = isDark ? "border-border" : "border-gray-100";
  const bgOverlay = isDark ? "bg-black/80" : "bg-black/50";
  const hoverBg = isDark ? "hover:bg-muted/50" : "hover:bg-gray-50";

  const contactMethods = [
    {
      icon: MessageSquare,
      iconColor: "text-pink-500",
      iconBg: isDark ? "bg-pink-500/15" : "bg-pink-50",
      title: "Czat z opiekunem",
      description: "Napisz do swojego opiekuna",
      action: "Otwórz czat",
      primary: true
    },
    {
      icon: Mail,
      iconColor: "text-blue-500",
      iconBg: isDark ? "bg-blue-500/15" : "bg-blue-50",
      title: "Email",
      description: "kontakt@aurine.pl",
      action: "Wyślij email",
      primary: false
    },
    {
      icon: Phone,
      iconColor: "text-emerald-500",
      iconBg: isDark ? "bg-emerald-500/15" : "bg-emerald-50",
      title: "Telefon",
      description: "+48 22 123 45 67",
      action: "Zadzwoń",
      primary: false
    }
  ];

  return (
    <div 
      className={`fixed inset-0 z-50 ${bgOverlay} flex items-end sm:items-center justify-center`}
      onClick={onClose}
    >
      <div 
        className={`w-full max-w-lg ${cardBg} rounded-t-3xl sm:rounded-2xl max-h-[90vh] overflow-hidden`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`px-5 py-4 border-b ${cardBorder} flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-pink-500/15' : 'bg-pink-50'} flex items-center justify-center`}>
              <MessageSquare className="w-5 h-5 text-pink-500" />
            </div>
            <div>
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Kontakt</h2>
              <p className={`text-xs ${textMuted}`}>Skontaktuj się z nami</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 rounded-xl ${isDark ? 'hover:bg-muted/50' : 'hover:bg-gray-100'} transition-colors`}
          >
            <X className={`w-5 h-5 ${textMuted}`} />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl border ${cardBorder} ${hoverBg} transition-colors cursor-pointer`}
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-xl ${method.iconBg} flex items-center justify-center shrink-0`}>
                  <method.icon className={`w-6 h-6 ${method.iconColor}`} />
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-semibold ${textPrimary}`}>{method.title}</p>
                  <p className={`text-xs ${textSecondary} mt-0.5`}>{method.description}</p>
                </div>
                <button 
                  className={`px-4 py-2 rounded-xl text-xs font-medium transition-colors ${
                    method.primary 
                      ? 'bg-pink-500 hover:bg-pink-600 text-white' 
                      : isDark 
                        ? 'bg-muted text-foreground hover:bg-muted/80' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {method.action}
                </button>
              </div>
            </div>
          ))}

          {/* Godziny pracy */}
          <div className={`mt-4 p-4 rounded-xl ${isDark ? 'bg-muted/50' : 'bg-gray-50'}`}>
            <div className="flex items-center gap-3 mb-3">
              <Clock className={`w-5 h-5 ${textMuted}`} />
              <p className={`text-sm font-medium ${textPrimary}`}>Godziny pracy</p>
            </div>
            <div className="space-y-1.5 ml-8">
              <div className="flex justify-between">
                <span className={`text-xs ${textSecondary}`}>Poniedziałek - Piątek</span>
                <span className={`text-xs font-medium ${textPrimary}`}>9:00 - 17:00</span>
              </div>
              <div className="flex justify-between">
                <span className={`text-xs ${textSecondary}`}>Sobota - Niedziela</span>
                <span className={`text-xs font-medium ${textMuted}`}>Nieczynne</span>
              </div>
            </div>
            <p className={`text-xs ${textMuted} mt-3 ml-8`}>
              Czas odpowiedzi na wiadomości: do 24 godzin w dni robocze
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
