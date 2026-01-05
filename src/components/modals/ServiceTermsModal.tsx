import { X, FileCheck, ChevronDown } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useState } from "react";

interface ServiceTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ServiceTermsModal = ({ isOpen, onClose }: ServiceTermsModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!isOpen) return null;

  const cardBg = isDark ? "bg-card" : "bg-white";
  const cardBorder = isDark ? "border-border" : "border-gray-100";
  const textPrimary = isDark ? "text-foreground" : "text-gray-900";
  const textSecondary = isDark ? "text-muted-foreground" : "text-gray-600";
  const textMuted = isDark ? "text-muted-foreground" : "text-gray-400";
  const bgOverlay = isDark ? "bg-black/80" : "bg-black/50";

  const sections = [
    {
      title: "1. Zakres usług marketingowych",
      content: "Agencja zobowiązuje się do prowadzenia kampanii reklamowych na platformach Facebook i Instagram, tworzenia treści reklamowych, optymalizacji kampanii oraz raportowania wyników."
    },
    {
      title: "2. Obowiązki Klienta",
      content: "Klient zobowiązuje się do terminowej zapłaty wynagrodzenia, dostarczania niezbędnych materiałów (zdjęcia, informacje o promocjach) oraz współpracy w zakresie akceptacji treści reklamowych."
    },
    {
      title: "3. Płatności",
      content: "Wynagrodzenie płatne jest z góry, do 10. dnia każdego miesiąca. Faktura wystawiana jest na początku okresu rozliczeniowego i dostępna w aplikacji."
    },
    {
      title: "4. Dostęp do Aurine Academy",
      content: "Klient otrzymuje pełny dostęp do platformy edukacyjnej Aurine Academy przez cały okres trwania umowy. Dostęp wygasa automatycznie z dniem zakończenia współpracy."
    },
    {
      title: "5. Opiekun konta",
      content: "Każdemu Klientowi przydzielany jest dedykowany opiekun odpowiedzialny za komunikację, realizację kampanii oraz wsparcie w korzystaniu z platformy."
    },
    {
      title: "6. Prawa autorskie",
      content: "Materiały stworzone przez Agencję w ramach współpracy przechodzą na własność Klienta po zakończeniu umowy. Szablony i materiały edukacyjne pozostają własnością Agencji."
    },
    {
      title: "7. Poufność",
      content: "Strony zobowiązują się do zachowania poufności informacji handlowych i marketingowych uzyskanych w trakcie współpracy."
    },
    {
      title: "8. Rozwiązanie umowy",
      content: "Umowa może zostać rozwiązana przez każdą ze stron z zachowaniem 30-dniowego okresu wypowiedzenia. W przypadku naruszenia warunków umowy, rozwiązanie może nastąpić ze skutkiem natychmiastowym."
    },
    {
      title: "9. Reklamacje",
      content: "Reklamacje należy zgłaszać opiekunowi konta w terminie 14 dni od wystąpienia nieprawidłowości. Agencja rozpatruje reklamacje w ciągu 7 dni roboczych."
    },
    {
      title: "10. Postanowienia końcowe",
      content: "W sprawach nieuregulowanych niniejszym regulaminem zastosowanie mają przepisy prawa polskiego. Wszelkie spory rozstrzygane będą przez sąd właściwy dla siedziby Agencji."
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
              <FileCheck className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Regulamin usług</h2>
              <p className={`text-xs ${textMuted}`}>Obowiązuje od: 1.01.2025</p>
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
          {sections.map((section, index) => (
            <div 
              key={index}
              className={`rounded-xl border ${cardBorder} overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full px-4 py-3.5 flex items-center justify-between ${isDark ? 'hover:bg-muted/30' : 'hover:bg-gray-50'} transition-colors`}
              >
                <span className={`text-sm font-medium ${textPrimary} text-left`}>{section.title}</span>
                <ChevronDown 
                  className={`w-5 h-5 ${textMuted} shrink-0 ml-2 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              {openIndex === index && (
                <div className={`px-4 pb-4 pt-0`}>
                  <p className={`text-sm ${textSecondary} leading-relaxed`}>{section.content}</p>
                </div>
              )}
            </div>
          ))}

          <div className={`mt-4 p-4 rounded-xl ${isDark ? 'bg-muted/50' : 'bg-gray-50'}`}>
            <p className={`text-xs ${textMuted} text-center`}>
              © 2025 Agencja marketingowa Aurine. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTermsModal;
