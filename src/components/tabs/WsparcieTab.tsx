import { useState } from "react";
import { ChevronDown, Send, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";

const WsparcieTab = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Theme-aware styles
  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-neutral-400" : "text-gray-500";
  const textMuted = isDark ? "text-neutral-500" : "text-gray-400";
  const cardBg = isDark ? "bg-neutral-900" : "bg-white";
  const cardBorder = isDark ? "border-pink-500/20" : "border-gray-100";
  const faqBg = isDark ? "bg-neutral-800/50" : "bg-gray-100";

  const faqs = [
    {
      question: "Jak uzyskać dostęp do nowych materiałów?",
      answer: "Nowe materiały pojawiają się automatycznie w sekcji Biblioteka. Otrzymasz również powiadomienie o każdym nowym materiale dodanym do Twojego konta."
    },
    {
      question: "Jak umówić się na konsultację?",
      answer: "Skontaktuj się ze swoim opiekunem przez wiadomość lub telefon. Wspólnie ustalacie dogodny termin spotkania online lub telefonicznego."
    },
    {
      question: "Czy mogę pobrać materiały na urządzenie?",
      answer: "Tak, większość materiałów jest dostępna do pobrania w formacie PDF. Znajdziesz przycisk pobierania przy każdym materiale w Bibliotece."
    },
    {
      question: "Jak długo mam dostęp do kursów?",
      answer: "Dostęp do wszystkich materiałów i kursów jest aktywny przez cały okres współpracy z agencją Aurine. Po zakończeniu współpracy materiały pozostają dostępne przez 30 dni."
    },
    {
      question: "Gdzie znajdę szablony do postów?",
      answer: "Wszystkie szablony znajdują się w zakładce Szablony w dolnym menu. Możesz je przeglądać, kopiować i dostosowywać do swoich potrzeb."
    },
  ];

  return (
    <div className="px-4 py-6 pb-8">
      {/* Hero */}
      <div className="text-center mb-10">
        <h1 className={`text-2xl font-bold ${textPrimary} mb-3`}>Jak możemy Ci pomóc?</h1>
        <p className={`${textSecondary} text-sm leading-relaxed max-w-[280px] mx-auto`}>
          Znajdź odpowiedzi na najczęstsze pytania lub skontaktuj się z opiekunem Twojego konta
        </p>
      </div>

      {/* FAQ */}
      <div className="mb-10">
        <p className={`text-xs font-semibold ${isDark ? 'text-pink-400' : 'text-pink-500'} uppercase tracking-wider mb-4`}>FAQ</p>
        
        <div className={`space-y-px ${faqBg} rounded-2xl overflow-hidden`}>
          {faqs.map((faq, index) => (
            <div key={index} className={cardBg}>
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className={`w-full flex items-start justify-between p-4 text-left ${isDark ? 'hover:bg-neutral-800/50' : 'hover:bg-gray-50'} transition-colors`}
              >
                <span className={`text-[13px] font-medium ${textPrimary} pr-6 leading-snug`}>{faq.question}</span>
                <ChevronDown 
                  className={`w-4 h-4 shrink-0 mt-0.5 transition-transform duration-200 ${
                    openFaq === index ? `rotate-180 ${isDark ? 'text-pink-400' : 'text-pink-500'}` : textMuted
                  }`} 
                />
              </button>
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className={`px-4 pb-4 text-[13px] ${textSecondary} leading-relaxed`}>{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="text-center mb-6">
        <p className={`text-xs font-semibold ${isDark ? 'text-pink-400' : 'text-pink-500'} uppercase tracking-wider mb-2`}>Kontakt z opiekunem</p>
        <p className={`${textSecondary} text-sm mb-6`}>
          Nie znalazłeś odpowiedzi? Twój opiekun jest do Twojej dyspozycji.
        </p>
        
        <div className="flex gap-3">
          <button className={`flex-1 flex items-center justify-center gap-2 py-3.5 ${isDark ? 'bg-pink-500 hover:bg-pink-600' : 'bg-gray-900 hover:bg-gray-800'} text-white rounded-xl transition-colors`}>
            <Send className="w-4 h-4" />
            <span className="text-sm font-medium">Wyślij wiadomość</span>
          </button>
          <button className={`w-14 h-12 flex items-center justify-center ${isDark ? 'bg-neutral-800 hover:bg-neutral-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-xl transition-colors`}>
            <PhoneCall className={`w-5 h-5 ${isDark ? 'text-neutral-300' : 'text-gray-700'}`} />
          </button>
        </div>
      </div>

      {/* Hours - subtle */}
      <p className={`text-[11px] ${textMuted} text-center`}>
        Dostępność: pon-pt 9:00-17:00
      </p>
    </div>
  );
};

export default WsparcieTab;
