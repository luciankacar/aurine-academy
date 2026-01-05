import { X, FileText, Download, Calendar, Building2 } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface ContractModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContractModal = ({ isOpen, onClose }: ContractModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!isOpen) return null;

  const cardBg = isDark ? "bg-card" : "bg-white";
  const cardBorder = isDark ? "border-border" : "border-gray-100";
  const textPrimary = isDark ? "text-foreground" : "text-gray-900";
  const textSecondary = isDark ? "text-muted-foreground" : "text-gray-600";
  const textMuted = isDark ? "text-muted-foreground" : "text-gray-400";
  const bgOverlay = isDark ? "bg-black/80" : "bg-black/50";

  const contractDetails = {
    number: "AUR/2024/0847",
    startDate: "15.06.2024",
    endDate: "14.03.2025",
    type: "Umowa o współpracy marketingowej",
    services: [
      "Prowadzenie kampanii reklamowych Facebook & Instagram",
      "Dostęp do platformy Aurine Academy",
      "Dedykowany opiekun konta",
      "Miesięczne raporty efektywności",
      "Generator grafik i szablonów"
    ],
    value: "1 500 zł / miesiąc"
  };

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
            <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-blue-500/15' : 'bg-blue-50'} flex items-center justify-center`}>
              <FileText className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Umowa współpracy</h2>
              <p className={`text-xs ${textMuted}`}>Nr {contractDetails.number}</p>
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
        <div className="overflow-y-auto max-h-[70vh] p-5 space-y-5">
          {/* Status */}
          <div className={`p-4 rounded-xl ${isDark ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-emerald-50 border-emerald-100'} border`}>
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full bg-emerald-500`} />
              <span className={`text-sm font-medium ${isDark ? 'text-emerald-300' : 'text-emerald-700'}`}>
                Umowa aktywna
              </span>
            </div>
          </div>

          {/* Dates */}
          <div className={`rounded-xl border ${cardBorder} overflow-hidden`}>
            <div className={`px-4 py-3.5 flex items-center gap-4 border-b ${cardBorder}`}>
              <Calendar className={`w-5 h-5 ${textMuted}`} />
              <div className="flex-1">
                <p className={`text-xs ${textMuted}`}>Data rozpoczęcia</p>
                <p className={`text-sm font-medium ${textPrimary}`}>{contractDetails.startDate}</p>
              </div>
            </div>
            <div className="px-4 py-3.5 flex items-center gap-4">
              <Calendar className={`w-5 h-5 ${textMuted}`} />
              <div className="flex-1">
                <p className={`text-xs ${textMuted}`}>Data zakończenia</p>
                <p className={`text-sm font-medium ${textPrimary}`}>{contractDetails.endDate}</p>
              </div>
            </div>
          </div>

          {/* Type */}
          <div>
            <p className={`text-xs uppercase font-semibold ${textMuted} mb-2`}>Typ umowy</p>
            <p className={`text-sm ${textPrimary}`}>{contractDetails.type}</p>
          </div>

          {/* Services */}
          <div>
            <p className={`text-xs uppercase font-semibold ${textMuted} mb-3`}>Zakres usług</p>
            <div className="space-y-2">
              {contractDetails.services.map((service, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className={`w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0`} />
                  <p className={`text-sm ${textSecondary}`}>{service}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Value */}
          <div className={`p-4 rounded-xl ${isDark ? 'bg-muted/50' : 'bg-gray-50'}`}>
            <p className={`text-xs ${textMuted} mb-1`}>Wartość miesięczna</p>
            <p className={`text-xl font-bold ${textPrimary}`}>{contractDetails.value}</p>
          </div>
        </div>

        {/* Footer */}
        <div className={`px-5 py-4 border-t ${cardBorder}`}>
          <button className="w-full py-3 rounded-xl text-sm font-semibold bg-pink-500 hover:bg-pink-600 text-white transition-colors flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Pobierz PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContractModal;
