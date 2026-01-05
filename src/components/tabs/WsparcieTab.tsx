import { useState } from "react";
import { ChevronDown, Send, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";

const WsparcieTab = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-neutral-400" : "text-gray-500";
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
      answer: "Dostęp do kursów jest aktywny przez cały okres trwania Twojej umowy z Aurine. Po zakończeniu współpracy materiały pozostają dostępne przez 30 dni."
    },
    {
      question: "Jak skontaktować się z pomocą techniczną?",
      answer: "Możesz napisać do nas przez formularz poniżej lub zadzwonić pod numer +48 123 456 789. Odpowiadamy w ciągu 24 godzin w dni robocze."
    }
  ];

  return (
    <div className="px-3 py-4 space-y-4">
      {/* Header */}
      <div>
        <h1 className={`text-lg font-bold ${textPrimary}`}>Wsparcie</h1>
        <p className={`text-xs ${textSecondary}`}>Potrzebujesz pomocy? Jesteśmy tutaj!</p>
      </div>

      {/* Contact Card */}
      <div className={`${cardBg} rounded-xl border ${cardBorder} p-4 shadow-md`}>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
            <span className="text-lg font-bold text-white">A</span>
          </div>
          <div className="flex-1">
            <h3 className={`text-sm font-semibold ${textPrimary}`}>Anna Kowalska</h3>
            <p className={`text-xs ${textSecondary}`}>Twój opiekun</p>
          </div>
          <Button size="sm" className="bg-primary hover:bg-primary/90">
            <PhoneCall className="w-4 h-4 mr-1" />
            Zadzwoń
          </Button>
        </div>
      </div>

      {/* FAQ */}
      <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden shadow-md`}>
        <div className="p-3 border-b border-border">
          <h2 className={`text-xs font-semibold ${textPrimary}`}>Często zadawane pytania</h2>
        </div>
        <div className="divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="flex items-center justify-between w-full p-3 text-left hover:bg-accent/50 transition-colors"
              >
                <span className={`text-xs font-medium ${textPrimary} pr-4`}>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openFaq === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className={`w-4 h-4 ${textSecondary} shrink-0`} />
                </motion.div>
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
                    <div className={`px-3 pb-3`}>
                      <p className={`text-xs ${textSecondary} ${faqBg} rounded-lg p-3`}>
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className={`${cardBg} rounded-xl border ${cardBorder} p-4 shadow-md`}>
        <h2 className={`text-xs font-semibold ${textPrimary} mb-3`}>Napisz do nas</h2>
        <div className="space-y-3">
          <div>
            <label className={`text-[10px] ${textSecondary} mb-1 block`}>Temat</label>
            <select className={`w-full px-3 py-2 rounded-lg text-xs ${isDark ? 'bg-neutral-800 text-white' : 'bg-gray-100 text-gray-900'} border-0 focus:outline-none focus:ring-2 focus:ring-primary/50`}>
              <option>Pytanie ogólne</option>
              <option>Problem techniczny</option>
              <option>Rozliczenia</option>
              <option>Sugestia</option>
            </select>
          </div>
          <div>
            <label className={`text-[10px] ${textSecondary} mb-1 block`}>Wiadomość</label>
            <textarea
              rows={4}
              placeholder="Opisz swój problem lub pytanie..."
              className={`w-full px-3 py-2 rounded-lg text-xs ${isDark ? 'bg-neutral-800 text-white placeholder:text-neutral-500' : 'bg-gray-100 text-gray-900 placeholder:text-gray-400'} border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none`}
            />
          </div>
          <Button className="w-full bg-primary hover:bg-primary/90">
            <Send className="w-4 h-4 mr-2" />
            Wyślij wiadomość
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WsparcieTab;
