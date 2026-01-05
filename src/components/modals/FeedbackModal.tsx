import { useState } from "react";
import { X, Send, Star, MessageSquare } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const cardBg = isDark ? "bg-card" : "bg-white";
  const cardBorder = isDark ? "border-border" : "border-gray-100";
  const textPrimary = isDark ? "text-foreground" : "text-gray-900";
  const textSecondary = isDark ? "text-muted-foreground" : "text-gray-600";
  const textMuted = isDark ? "text-muted-foreground" : "text-gray-400";
  const borderColor = isDark ? "border-border" : "border-gray-100";
  const bgOverlay = isDark ? "bg-black/80" : "bg-black/50";

  const categories = [
    { id: "ui", label: "Wygląd aplikacji" },
    { id: "features", label: "Funkcjonalności" },
    { id: "content", label: "Treści edukacyjne" },
    { id: "support", label: "Wsparcie" },
    { id: "other", label: "Inne" }
  ];

  const handleSubmit = () => {
    if (rating > 0 && feedback.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        onClose();
        setSubmitted(false);
        setRating(0);
        setFeedback("");
        setCategory("");
      }, 2000);
    }
  };

  if (submitted) {
    return (
      <div 
        className={`fixed inset-0 z-50 ${bgOverlay} flex items-end sm:items-center justify-center`}
        onClick={onClose}
      >
        <div 
          className={`w-full max-w-lg ${cardBg} rounded-t-3xl sm:rounded-2xl p-8`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="text-center">
            <div className={`w-16 h-16 rounded-full ${isDark ? 'bg-emerald-500/15' : 'bg-emerald-50'} flex items-center justify-center mx-auto mb-4`}>
              <Send className="w-8 h-8 text-emerald-500" />
            </div>
            <h2 className={`text-xl font-semibold ${textPrimary} mb-2`}>Dziękujemy!</h2>
            <p className={`text-sm ${textSecondary}`}>
              Twoja opinia jest dla nas bardzo ważna i pomoże nam ulepszać aplikację.
            </p>
          </div>
        </div>
      </div>
    );
  }

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
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Wyślij opinię</h2>
              <p className={`text-xs ${textMuted}`}>Pomóż nam się rozwijać</p>
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
        <div className="p-5 space-y-5 overflow-y-auto max-h-[70vh]">
          {/* Rating */}
          <div>
            <p className={`text-sm font-medium ${textPrimary} mb-3`}>Jak oceniasz aplikację?</p>
            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="p-1 transition-transform hover:scale-110"
                >
                  <Star 
                    className={`w-10 h-10 transition-colors ${
                      star <= (hoverRating || rating)
                        ? 'text-amber-400 fill-amber-400'
                        : isDark ? 'text-neutral-600' : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className={`text-center text-xs ${textMuted} mt-2`}>
                {rating === 1 && "Bardzo słabo"}
                {rating === 2 && "Słabo"}
                {rating === 3 && "Średnio"}
                {rating === 4 && "Dobrze"}
                {rating === 5 && "Świetnie!"}
              </p>
            )}
          </div>

          {/* Category */}
          <div>
            <p className={`text-sm font-medium ${textPrimary} mb-3`}>Czego dotyczy Twoja opinia?</p>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    category === cat.id
                      ? 'bg-pink-500 text-white'
                      : isDark 
                        ? 'bg-muted text-foreground hover:bg-muted/80' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Feedback text */}
          <div>
            <p className={`text-sm font-medium ${textPrimary} mb-3`}>Twoja opinia</p>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Opisz co Ci się podoba lub co możemy poprawić..."
              rows={4}
              className={`w-full px-4 py-3 rounded-xl text-sm ${
                isDark 
                  ? 'bg-neutral-800 border-neutral-700 text-white placeholder:text-neutral-500' 
                  : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400'
              } border focus:border-pink-500 focus:outline-none resize-none`}
            />
          </div>
        </div>

        {/* Footer */}
        <div className={`px-5 py-4 border-t ${borderColor}`}>
          <button 
            onClick={handleSubmit}
            disabled={rating === 0 || !feedback.trim()}
            className="w-full py-3 rounded-xl text-sm font-semibold bg-pink-500 hover:bg-pink-600 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <Send className="w-4 h-4" />
            Wyślij opinię
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
