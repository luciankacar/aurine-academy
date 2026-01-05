import { useState } from "react";
import { X, HelpCircle, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface FAQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FAQModal = ({ isOpen, onClose }: FAQModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  const cardBg = isDark ? "bg-card" : "bg-white";
  const cardBorder = isDark ? "border-border" : "border-gray-100";
  const textPrimary = isDark ? "text-foreground" : "text-gray-900";
  const textSecondary = isDark ? "text-muted-foreground" : "text-gray-600";
  const textMuted = isDark ? "text-muted-foreground" : "text-gray-400";
  const borderColor = isDark ? "border-border" : "border-gray-100";
  const bgOverlay = isDark ? "bg-black/80" : "bg-black/50";

  const faqs = [
    {
      question: "Jak długo mam dostęp do aplikacji?",
      answer: "Dostęp do aplikacji Aurine Academy jest aktywny przez cały okres trwania umowy współpracy z agencją Aurine. Data zakończenia współpracy jest widoczna w Twoim profilu."
    },
    {
      question: "Jak skontaktować się z opiekunem?",
      answer: "Możesz skontaktować się z opiekunem poprzez przycisk 'Napisz' w sekcji Opiekun konta w profilu lub poprzez zakładkę Wsparcie. Możesz także umówić spotkanie online bezpośrednio w aplikacji."
    },
    {
      question: "Czy mogę pobierać materiały?",
      answer: "Materiały edukacyjne są dostępne tylko online w aplikacji. Szablony grafik możesz jednak eksportować i zapisywać na swoim urządzeniu do wykorzystania w social mediach."
    },
    {
      question: "Jak działa generator grafik?",
      answer: "Generator grafik pozwala tworzyć profesjonalne grafiki do social mediów z gotowych szablonów. Wystarczy wybrać szablon, dodać swoje zdjęcie i tekst, a następnie pobrać gotową grafikę."
    },
    {
      question: "Co zrobić gdy zapomnę hasła?",
      answer: "Na ekranie logowania kliknij 'Nie pamiętam hasła'. Otrzymasz link do zresetowania hasła na adres email powiązany z Twoim kontem."
    },
    {
      question: "Jak zmienić dane salonu?",
      answer: "Aby zmienić dane salonu (nazwa, adres, specjalizacje), skontaktuj się z opiekunem konta. Dane te są powiązane z Twoją umową współpracy."
    },
    {
      question: "Czy aplikacja działa offline?",
      answer: "Aplikacja wymaga połączenia z internetem do pełnej funkcjonalności. Niektóre materiały mogą być dostępne w trybie offline po wcześniejszym załadowaniu."
    },
    {
      question: "Jak przedłużyć współpracę?",
      answer: "Przed końcem umowy Twój opiekun skontaktuje się z Tobą w sprawie przedłużenia. Możesz też kliknąć 'Przedłuż' w sekcji Współpraca w profilu."
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
            <div className={`w-10 h-10 rounded-xl ${isDark ? 'bg-pink-500/15' : 'bg-pink-50'} flex items-center justify-center`}>
              <HelpCircle className="w-5 h-5 text-pink-500" />
            </div>
            <div>
              <h2 className={`text-lg font-semibold ${textPrimary}`}>FAQ</h2>
              <p className={`text-xs ${textMuted}`}>Często zadawane pytania</p>
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
        <div className="overflow-y-auto max-h-[75vh] p-4 space-y-2">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`rounded-xl border ${cardBorder} overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-4 py-3.5 flex items-center justify-between ${isDark ? 'hover:bg-muted/30' : 'hover:bg-gray-50'} transition-colors`}
              >
                <span className={`text-sm font-medium ${textPrimary} text-left`}>{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 ${textMuted} shrink-0 ml-2 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              {openIndex === index && (
                <div className={`px-4 pb-4 pt-0`}>
                  <p className={`text-sm ${textSecondary} leading-relaxed`}>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQModal;
