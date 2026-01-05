import { X, ScrollText } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal = ({ isOpen, onClose }: PrivacyPolicyModalProps) => {
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
      title: "1. Informacje ogólne",
      content: `Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych użytkowników aplikacji Aurine Academy. Administratorem danych osobowych jest Agencja marketingowa Aurine z siedzibą w Warszawie.`
    },
    {
      title: "2. Zakres zbieranych danych",
      content: `Zbieramy następujące dane osobowe: imię i nazwisko, adres e-mail, numer telefonu, dane dotyczące salonu (nazwa, adres), informacje o aktywności w aplikacji oraz preferencje użytkownika.`
    },
    {
      title: "3. Cele przetwarzania danych",
      content: `Dane osobowe przetwarzane są w celu: świadczenia usług w ramach aplikacji, personalizacji treści edukacyjnych, komunikacji z użytkownikiem, realizacji umowy współpracy oraz doskonalenia naszych usług.`
    },
    {
      title: "4. Udostępnianie danych",
      content: `Twoje dane mogą być udostępniane: opiekunowi konta przypisanemu do Twojego salonu, podmiotom przetwarzającym dane na nasze zlecenie (np. hosting) oraz organom państwowym w przypadkach przewidzianych prawem.`
    },
    {
      title: "5. Bezpieczeństwo danych",
      content: `Stosujemy odpowiednie środki techniczne i organizacyjne zapewniające bezpieczeństwo danych osobowych, w tym szyfrowanie SSL, regularne kopie zapasowe oraz kontrolę dostępu.`
    },
    {
      title: "6. Prawa użytkownika",
      content: `Przysługuje Ci prawo do: dostępu do swoich danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu wobec przetwarzania.`
    },
    {
      title: "7. Pliki cookies",
      content: `Aplikacja wykorzystuje pliki cookies do zapewnienia prawidłowego działania, analizy ruchu oraz personalizacji treści. Możesz zarządzać ustawieniami cookies w ustawieniach przeglądarki.`
    },
    {
      title: "8. Kontakt",
      content: `W sprawach związanych z ochroną danych osobowych możesz kontaktować się z nami pod adresem: prywatnosc@aurine.pl lub telefonicznie: +48 22 123 45 67.`
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
              <ScrollText className="w-5 h-5 text-pink-500" />
            </div>
            <div>
              <h2 className={`text-lg font-semibold ${textPrimary}`}>Polityka prywatności</h2>
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

export default PrivacyPolicyModal;
