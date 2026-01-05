import { X, FileText, Download, Check, Clock } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface InvoicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvoicesModal = ({ isOpen, onClose }: InvoicesModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!isOpen) return null;

  const cardBg = isDark ? "bg-card" : "bg-white";
  const cardBorder = isDark ? "border-border" : "border-gray-100";
  const textPrimary = isDark ? "text-foreground" : "text-gray-900";
  const textSecondary = isDark ? "text-muted-foreground" : "text-gray-600";
  const textMuted = isDark ? "text-muted-foreground" : "text-gray-400";
  const bgOverlay = isDark ? "bg-black/80" : "bg-black/50";
  const hoverBg = isDark ? "hover:bg-muted/50" : "hover:bg-gray-50";

  const invoices = [
    { 
      number: "FV/2025/01/0847", 
      date: "01.01.2025", 
      amount: "1 500,00 zł", 
      status: "paid",
      period: "Styczeń 2025"
    },
    { 
      number: "FV/2024/12/0847", 
      date: "01.12.2024", 
      amount: "1 500,00 zł", 
      status: "paid",
      period: "Grudzień 2024"
    },
    { 
      number: "FV/2024/11/0847", 
      date: "01.11.2024", 
      amount: "1 500,00 zł", 
      status: "paid",
      period: "Listopad 2024"
    },
    { 
      number: "FV/2024/10/0847", 
      date: "01.10.2024", 
      amount: "1 500,00 zł", 
      status: "paid",
      period: "Październik 2024"
    },
    { 
      number: "FV/2024/09/0847", 
      date: "01.09.2024", 
      amount: "1 500,00 zł", 
      status: "paid",
      period: "Wrzesień 2024"
    },
    { 
      number: "FV/2024/08/0847", 
      date: "01.08.2024", 
      amount: "1 500,00 zł", 
      status: "paid",
      period: "Sierpień 2024"
    },
    { 
      number: "FV/2024/07/0847", 
      date: "01.07.2024", 
      amount: "1 500,00 zł", 
      status: "paid",
      period: "Lipiec 2024"
    },
    { 
      number: "FV/2024/06/0847", 
      date: "15.06.2024", 
      amount: "750,00 zł", 
      status: "paid",
      period: "Czerwiec 2024 (proporcjonalnie)"
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
        <div className={`px-5 py-4 border-b ${cardBorder} flex items-center justify-between sticky top-0 ${cardBg} z-10`}>
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-blue-500/15' : 'bg-blue-50'} flex items-center justify-center`}>
              <FileText className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Faktury</h2>
              <p className={`text-xs ${textMuted}`}>{invoices.length} dokumentów</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className={`p-2 rounded-xl ${isDark ? 'hover:bg-muted/50' : 'hover:bg-gray-100'} transition-colors`}
          >
            <X className={`w-5 h-5 ${textMuted}`} />
          </button>
        </div>

        {/* Summary */}
        <div className={`px-5 py-4 border-b ${cardBorder}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className={`text-xs ${textMuted}`}>Suma opłaconych faktur</p>
              <p className={`text-lg font-bold ${textPrimary}`}>11 250,00 zł</p>
            </div>
            <div className={`px-3 py-1.5 rounded-full text-xs font-medium ${isDark ? 'bg-emerald-500/15 text-emerald-300' : 'bg-emerald-50 text-emerald-700'}`}>
              Wszystkie opłacone
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[60vh] p-4 space-y-2">
          {invoices.map((invoice, index) => (
            <div 
              key={index}
              className={`p-4 rounded-xl border ${cardBorder} ${hoverBg} transition-colors`}
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className={`text-sm font-medium ${textPrimary}`}>{invoice.number}</p>
                  <p className={`text-xs ${textMuted}`}>{invoice.period}</p>
                </div>
                <div className="flex items-center gap-1.5">
                  {invoice.status === "paid" ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-500" />
                      <span className={`text-xs ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>Opłacona</span>
                    </>
                  ) : (
                    <>
                      <Clock className="w-4 h-4 text-amber-500" />
                      <span className={`text-xs ${isDark ? 'text-amber-400' : 'text-amber-600'}`}>Oczekuje</span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className={`text-xs ${textSecondary}`}>{invoice.date}</span>
                  <span className={`text-sm font-semibold ${textPrimary}`}>{invoice.amount}</span>
                </div>
                <button className={`p-2 rounded-lg ${isDark ? 'bg-muted hover:bg-muted/80' : 'bg-gray-100 hover:bg-gray-200'} transition-colors`}>
                  <Download className={`w-4 h-4 ${textMuted}`} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvoicesModal;
