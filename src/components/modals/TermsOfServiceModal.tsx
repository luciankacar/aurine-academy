import { X, FileText } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface TermsOfServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TermsOfServiceModal = ({ isOpen, onClose }: TermsOfServiceModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!isOpen) return null;

  const cardBg = isDark ? "bg-card" : "bg-white";
  const cardBorder = isDark ? "border-border" : "border-gray-100";
  const textPrimary = isDark ? "text-foreground" : "text-gray-900";
  const textSecondary = isDark ? "text-muted-foreground" : "text-gray-600";
  const textMuted = isDark ? "text-muted-foreground" : "text-gray-400";
  const bgOverlay = isDark ? "bg-black/80" : "bg-black/50";

  const sections = [
    {
      title: "1. Postanowienia ogólne",
      content: `Niniejszy Regulamin określa zasady korzystania z aplikacji Aurine Academy. Aplikacja jest przeznaczona wyłącznie dla klientek agencji marketingowej Aurine w ramach umowy współpracy.`
    },
    {
      title: "2. Definicje",
      content: `Użytkownik - właścicielka salonu beauty będąca klientką Aurine. Aplikacja - platforma edukacyjna Aurine Academy. Usługodawca - Agencja marketingowa Aurine. Opiekun - dedykowany specjalista Aurine przypisany do Użytkownika.`
    },
    {
      title: "3. Zakres usług",
      content: `Aplikacja zapewnia dostęp do: materiałów edukacyjnych z zakresu marketingu, generatora grafik, strategii marketingowych, kalendarza treści oraz bezpośredniego kontaktu z opiekunem konta.`
    },
    {
      title: "4. Warunki korzystania",
      content: `Dostęp do aplikacji jest możliwy wyłącznie przez okres trwania umowy współpracy z Aurine. Użytkownik zobowiązuje się do nieudostępniania danych logowania osobom trzecim.`
    },
    {
      title: "5. Prawa autorskie",
      content: `Wszystkie materiały dostępne w aplikacji są własnością Aurine i są chronione prawem autorskim. Kopiowanie, rozpowszechnianie lub komercyjne wykorzystanie bez zgody jest zabronione.`
    },
    {
      title: "6. Odpowiedzialność",
      content: `Usługodawca dokłada starań, aby aplikacja działała poprawnie, jednak nie gwarantuje nieprzerwanego dostępu. Usługodawca nie ponosi odpowiedzialności za decyzje biznesowe podjęte na podstawie materiałów edukacyjnych.`
    },
    {
      title: "7. Wsparcie techniczne",
      content: `W przypadku problemów technicznych Użytkownik może kontaktować się z opiekunem konta lub działem wsparcia poprzez aplikację. Czas reakcji na zgłoszenia wynosi do 24 godzin w dni robocze.`
    },
    {
      title: "8. Zmiany regulaminu",
      content: `Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O istotnych zmianach Użytkownik zostanie poinformowany z 14-dniowym wyprzedzeniem.`
    },
    {
      title: "9. Rozwiązywanie sporów",
      content: `Wszelkie spory wynikające z korzystania z aplikacji będą rozstrzygane polubownie. W przypadku braku porozumienia właściwym sądem będzie sąd w Warszawie.`
    },
    {
      title: "10. Postanowienia końcowe",
      content: `Regulamin wchodzi w życie z dniem akceptacji przez Użytkownika. W sprawach nieuregulowanych zastosowanie mają przepisy prawa polskiego.`
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
              <FileText className="w-5 h-5 text-pink-500" />
            </div>
            <div>
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Warunki użytkowania</h2>
              <p className={`text-xs ${textMuted}`}>Ostatnia aktualizacja: 1.01.2025</p>
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
        <div className="overflow-y-auto max-h-[75vh] px-5 py-4 space-y-5">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className={`text-sm font-semibold ${textPrimary} mb-2`}>{section.title}</h3>
              <p className={`text-sm ${textSecondary} leading-relaxed`}>{section.content}</p>
            </div>
          ))}

          <div className={`mt-6 p-4 rounded-xl ${isDark ? 'bg-muted/50' : 'bg-gray-50'}`}>
            <p className={`text-xs ${textMuted} text-center`}>
              © 2025 Agencja marketingowa Aurine. Wszelkie prawa zastrzeżone.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServiceModal;
