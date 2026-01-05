import { useState } from "react";
import { X, Shield, Database, MapPin, BarChart3 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";

interface PrivacySettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacySettingsModal = ({ isOpen, onClose }: PrivacySettingsModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  const [activityTracking, setActivityTracking] = useState(true);
  const [locationData, setLocationData] = useState(false);
  const [analyticsSharing, setAnalyticsSharing] = useState(true);

  if (!isOpen) return null;

  const cardBg = isDark ? "bg-card" : "bg-white";
  const cardBorder = isDark ? "border-border" : "border-gray-100";
  const textPrimary = isDark ? "text-foreground" : "text-gray-900";
  const textSecondary = isDark ? "text-muted-foreground" : "text-gray-500";
  const textMuted = isDark ? "text-muted-foreground" : "text-gray-400";
  const borderColor = isDark ? "border-border" : "border-gray-100";
  const bgOverlay = isDark ? "bg-black/80" : "bg-black/50";

  const PrivacyRow = ({ 
    icon: Icon, 
    iconColor,
    title, 
    description, 
    checked, 
    onChange,
    isLast = false
  }: {
    icon: any;
    iconColor: string;
    title: string;
    description: string;
    checked: boolean;
    onChange: (val: boolean) => void;
    isLast?: boolean;
  }) => (
    <div className={`px-4 py-4 flex items-start gap-4 ${!isLast ? `border-b ${borderColor}` : ''}`}>
      <div className={`w-9 h-9 rounded-xl ${isDark ? 'bg-pink-500/15' : 'bg-pink-50'} flex items-center justify-center shrink-0 mt-0.5`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div className="flex-1">
        <p className={`text-sm font-medium ${textPrimary}`}>{title}</p>
        <p className={`text-xs ${textMuted} mt-0.5`}>{description}</p>
      </div>
      <Switch 
        checked={checked} 
        onCheckedChange={onChange}
        className="data-[state=checked]:bg-pink-500 mt-1"
      />
    </div>
  );

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
        <div className={`px-5 py-4 border-b ${borderColor} flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-pink-500/15' : 'bg-pink-50'} flex items-center justify-center`}>
              <Shield className="w-5 h-5 text-pink-500" />
            </div>
            <div>
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Ustawienia prywatności</h2>
              <p className={`text-xs ${textSecondary}`}>Kontroluj swoje dane</p>
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
        <div className="overflow-y-auto max-h-[70vh]">
          <div className="p-4">
            <p className={`text-xs uppercase font-semibold ${textMuted} mb-3 px-1`}>Zbieranie danych</p>
            <div className={`${cardBg} rounded-2xl border ${cardBorder} overflow-hidden`}>
              <PrivacyRow
                icon={BarChart3}
                iconColor="text-emerald-500"
                title="Śledzenie aktywności"
                description="Zbieramy dane o Twojej aktywności w aplikacji"
                checked={activityTracking}
                onChange={setActivityTracking}
              />
              <PrivacyRow
                icon={MapPin}
                iconColor="text-amber-500"
                title="Dane lokalizacyjne"
                description="Używamy lokalizacji do personalizacji treści"
                checked={locationData}
                onChange={setLocationData}
              />
              <PrivacyRow
                icon={Database}
                iconColor="text-purple-500"
                title="Udostępnianie analityk"
                description="Anonimowe dane pomagają ulepszać aplikację"
                checked={analyticsSharing}
                onChange={setAnalyticsSharing}
                isLast
              />
            </div>
          </div>

          <div className="px-4 pb-6">
            <div className={`p-4 rounded-xl ${isDark ? 'bg-blue-500/10 border-blue-500/20' : 'bg-blue-50 border-blue-100'} border`}>
              <p className={`text-xs ${isDark ? 'text-blue-300' : 'text-blue-700'}`}>
                Twoje dane są bezpieczne i nigdy nie udostępniamy ich osobom trzecim bez Twojej zgody. 
                Możesz w każdej chwili zmienić te ustawienia.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`px-5 py-4 border-t ${borderColor}`}>
          <button 
            onClick={onClose}
            className="w-full py-3 rounded-xl text-sm font-semibold bg-pink-500 hover:bg-pink-600 text-white transition-colors"
          >
            Zapisz ustawienia
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacySettingsModal;
