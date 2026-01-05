import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useTheme } from "@/contexts/ThemeContext";
import { Calendar, Clock, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ExtendContractModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentEndDate: string;
}

const ExtendContractModal = ({ isOpen, onClose, currentEndDate }: ExtendContractModalProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  
  const [selectedPeriod, setSelectedPeriod] = useState<string>("6");
  const [message, setMessage] = useState("");
  
  const cardBg = isDark ? "bg-neutral-800/50" : "bg-gray-50";
  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-neutral-400" : "text-gray-600";
  const borderColor = isDark ? "border-neutral-700/50" : "border-gray-200";
  
  const periods = [
    { value: "3", label: "3 miesiące" },
    { value: "6", label: "6 miesięcy" },
    { value: "12", label: "12 miesięcy" },
  ];
  
  const handleSubmit = () => {
    toast.success("Prośba o przedłużenie została wysłana do Twojego opiekuna!");
    onClose();
    setMessage("");
    setSelectedPeriod("6");
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={`${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-gray-200'} max-w-md`}>
        <DialogHeader>
          <DialogTitle className={`text-lg font-semibold ${textPrimary}`}>
            Przedłuż współpracę
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-5 pt-2">
          {/* Current end date info */}
          <div className={`${cardBg} rounded-xl p-4 border ${borderColor}`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-amber-500/15' : 'bg-amber-50'} flex items-center justify-center`}>
                <Calendar className="w-5 h-5 text-amber-500" />
              </div>
              <div>
                <p className={`text-xs ${textSecondary}`}>Aktualna umowa kończy się</p>
                <p className={`text-sm font-semibold ${textPrimary}`}>{currentEndDate}</p>
              </div>
            </div>
          </div>
          
          {/* Period selection */}
          <div>
            <label className={`text-sm font-medium ${textPrimary} mb-3 block`}>
              Na jaki okres chcesz przedłużyć?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {periods.map((period) => (
                <button
                  key={period.value}
                  onClick={() => setSelectedPeriod(period.value)}
                  className={`py-3 px-2 rounded-xl text-sm font-medium transition-all border ${
                    selectedPeriod === period.value
                      ? 'bg-pink-500 text-white border-pink-500'
                      : `${cardBg} ${textPrimary} ${borderColor} hover:border-pink-300`
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
          
          {/* Optional message */}
          <div>
            <label className={`text-sm font-medium ${textPrimary} mb-2 flex items-center gap-2`}>
              <MessageSquare className="w-4 h-4 text-pink-500" />
              Wiadomość (opcjonalnie)
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Np. chciałabym omówić szczegóły nowej umowy..."
              className={`w-full p-3 rounded-xl border ${borderColor} ${cardBg} ${textPrimary} text-sm resize-none focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-pink-500 transition-all`}
              rows={3}
            />
          </div>
          
          {/* Submit button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-xl transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Wyślij prośbę o przedłużenie
          </button>
          
          <p className={`text-xs ${textSecondary} text-center`}>
            Twój opiekun skontaktuje się z Tobą w ciągu 24h
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExtendContractModal;
