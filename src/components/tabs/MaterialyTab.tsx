import { useState } from "react";
import { 
  FileText, Copy, Check, ChevronDown, ChevronUp, 
  MessageCircle, Phone, Calendar, Heart, Star, 
  Clock, Users, Sparkles, Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";

interface Script {
  id: string;
  title: string;
  category: string;
  situation: string;
  script: string;
  tips?: string[];
}

const scripts: Script[] = [
  // Powitanie i pierwsza wizyta
  {
    id: "welcome-new",
    title: "Powitanie nowej klientki",
    category: "Powitanie",
    situation: "Klientka przychodzi do salonu po raz pierwszy",
    script: `"Dzień dobry! Bardzo się cieszę, że do nas trafiłaś. Jestem [imię] i dzisiaj będę się Tobą opiekować. 

Widzę, że to Twoja pierwsza wizyta u nas — pozwól, że opowiem Ci krótko jak pracujemy i co Cię dzisiaj czeka.

Czy mogę Ci zaproponować kawę, herbatę albo wodę? U nas każda wizyta to chwila dla siebie, więc możesz się zrelaksować."`,
    tips: [
      "Uśmiechaj się i utrzymuj kontakt wzrokowy",
      "Zapamiętaj imię klientki i używaj go w rozmowie",
      "Zapytaj jak trafiła do salonu (polecenie, social media)"
    ]
  },
  {
    id: "welcome-regular",
    title: "Powitanie stałej klientki",
    category: "Powitanie",
    situation: "Klientka jest u nas regularnie",
    script: `"Cześć [imię klientki]! Jak miło Cię widzieć! Jak minął Ci czas od ostatniej wizyty?

Pamiętam, że ostatnio rozmawiałyśmy o [temat z poprzedniej wizyty]. Jak się to potoczyło?

Dzisiaj robimy [usługa]. Czy coś się zmieniło w Twoich oczekiwaniach albo chciałabyś spróbować czegoś nowego?"`,
    tips: [
      "Prowadź notatki o klientkach w systemie",
      "Pamiętaj o ważnych wydarzeniach z ich życia",
      "Personalizuj każdą wizytę"
    ]
  },
  
  // Konsultacja i rekomendacje
  {
    id: "consultation-needs",
    title: "Badanie potrzeb klientki",
    category: "Konsultacja",
    situation: "Rozpoczynasz konsultację przed zabiegiem",
    script: `"Zanim zaczniemy, chciałabym Cię lepiej poznać i zrozumieć Twoje oczekiwania.

Opowiedz mi proszę — co jest dla Ciebie najważniejsze? Jaki efekt chciałabyś osiągnąć?

A jak wygląda Twoja codzienna rutyna pielęgnacyjna? Ile czasu możesz poświęcić na [stylizację/pielęgnację] na co dzień?

Czy są jakieś rzeczy, które Ci przeszkadzają lub chciałabyś zmienić?"`,
    tips: [
      "Słuchaj uważnie — nie przerywaj",
      "Zadawaj pytania otwarte",
      "Notuj kluczowe informacje"
    ]
  },
  {
    id: "upsell-gentle",
    title: "Delikatna propozycja dodatkowej usługi",
    category: "Konsultacja",
    situation: "Chcesz zaproponować coś ekstra bez nachalności",
    script: `"Wiesz co, patrząc na [włosy/skórę/paznokcie], mam dla Ciebie pomysł...

Mogłybyśmy dzisiaj dodatkowo zrobić [usługa], która naprawdę świetnie by się sprawdziła w Twoim przypadku. 

To zajmie tylko [czas] i kosztuje [cena]. Efekt utrzyma się [okres].

Oczywiście to tylko propozycja — co o tym myślisz?"`,
    tips: [
      "Nigdy nie naciskaj",
      "Uzasadnij rekomendację korzyściami dla klientki",
      "Daj czas na przemyślenie"
    ]
  },
  {
    id: "recommendation-products",
    title: "Rekomendacja produktów do domu",
    category: "Konsultacja",
    situation: "Chcesz polecić produkty po zabiegu",
    script: `"Żeby efekt dzisiejszego zabiegu utrzymał się jak najdłużej, polecam Ci [produkt].

To co dzisiaj zrobiłyśmy jest super, ale 70% efektu zależy od pielęgnacji w domu. Ten [produkt] jest idealny, bo [korzyść].

Używaj go [instrukcja stosowania]. Zobaczysz różnicę już po [okres].

Mamy go w salonie — mogę Ci go pokazać?"`,
    tips: [
      "Pokaż produkt w działaniu",
      "Wyjaśnij jak używać",
      "Nie sprzedawaj — edukuj"
    ]
  },
  
  // Trudne sytuacje
  {
    id: "complaint-handling",
    title: "Reakcja na niezadowolenie",
    category: "Trudne sytuacje",
    situation: "Klientka wyraża niezadowolenie z usługi",
    script: `"Bardzo mi przykro, że nie jesteś zadowolona. Twoja opinia jest dla mnie naprawdę ważna.

Powiedz mi dokładnie, co Ci nie odpowiada — chcę to zrozumieć i naprawić.

[Po wysłuchaniu]

Dziękuję, że mi to powiedziałaś. Zależy mi, żebyś wyszła od nas szczęśliwa. Mogę zaproponować [rozwiązanie] — co o tym sądzisz?"`,
    tips: [
      "Nie tłumacz się — słuchaj",
      "Zachowaj spokój i profesjonalizm",
      "Zawsze zaproponuj rozwiązanie",
      "Zapisz sytuację do analizy"
    ]
  },
  {
    id: "late-client",
    title: "Klientka się spóźnia",
    category: "Trudne sytuacje",
    situation: "Klientka spóźnia się na wizytę",
    script: `[Telefon po 10 minutach spóźnienia]

"Dzień dobry [imię], dzwonię z salonu. Mieliśmy dzisiaj wizytę o [godzina]. Czy wszystko w porządku?

[Jeśli jest w drodze]
Super, czekamy na Ciebie! Tylko uprzedzam, że będziemy musiały trochę skrócić zabieg, żeby nie opóźnić kolejnych klientek.

[Jeśli zapomniała]
Rozumiem, zdarza się! Może umówimy się na inny termin? Kiedy Ci pasuje?"`,
    tips: [
      "Dzwoń po 10-15 minutach",
      "Bądź wyrozumiała, ale asertywna",
      "Ustal zasady anulowania wizyt"
    ]
  },
  {
    id: "price-objection",
    title: "Klientka uważa, że cena jest za wysoka",
    category: "Trudne sytuacje",
    situation: "Klientka kwestionuje cenę usługi",
    script: `"Rozumiem, że cena może się wydawać wysoka. Pozwól, że wytłumaczę co się na nią składa...

Ta usługa obejmuje [szczegóły], używamy produktów [marka], a cały proces trwa [czas]. Efekt utrzymuje się [okres], więc w przeliczeniu na dzień wychodzi [kwota].

U nas płacisz za jakość i doświadczenie — chcemy, żebyś była w 100% zadowolona.

Jeśli szukasz czegoś w niższej cenie, mogę Ci zaproponować [tańsza alternatywa]."`,
    tips: [
      "Wyjaśnij wartość, nie broń ceny",
      "Porównaj do kosztu dziennego/miesięcznego",
      "Zaproponuj alternatywę w niższej cenie"
    ]
  },
  
  // Rezerwacje i follow-up
  {
    id: "booking-next",
    title: "Umawianie następnej wizyty",
    category: "Rezerwacje",
    situation: "Kończysz wizytę i chcesz umówić kolejną",
    script: `"Świetnie nam dzisiaj poszło! Żeby efekt się utrzymał, następną wizytę powinnyśmy zrobić za około [okres].

Kiedy Ci bardziej pasuje — początek czy koniec [miesiąca/tygodnia]? Mam jeszcze wolne terminy [propozycje].

Jak wpiszę Cię już teraz, to wyślę Ci przypomnienie dzień przed, żebyś nie musiała pamiętać.

Który termin wolisz?"`,
    tips: [
      "Zawsze proponuj konkretne terminy",
      "Wyjaśnij dlaczego warto przyjść za X tygodni",
      "Wpisuj od razu - nie mów zadzwoń później"
    ]
  },
  {
    id: "followup-call",
    title: "Telefon kontrolny po zabiegu",
    category: "Rezerwacje",
    situation: "Dzwonisz dzień-dwa po zabiegu",
    script: `"Cześć [imię], tu [Twoje imię] z [nazwa salonu]. Dzwonię sprawdzić jak się czujesz po naszym zabiegu?

Wszystko w porządku? Jak Ci się podoba efekt?

[Jeśli wszystko OK]
Super! Cieszę się bardzo. Pamiętaj o [wskazówki pielęgnacyjne]. Gdybyś miała jakieś pytania — pisz śmiało!

[Jeśli coś nie tak]
Dziękuję, że mi mówisz. Umówmy się na korektę — kiedy możesz przyjść?"`,
    tips: [
      "Dzwoń 24-48h po zabiegu",
      "Notuj feedback w karcie klientki",
      "Buduj relację i lojalność"
    ]
  },
  {
    id: "reactivation-call",
    title: "Reaktywacja nieaktywnej klientki",
    category: "Rezerwacje",
    situation: "Klientka dawno nie była — chcesz ją odzyskać",
    script: `"Cześć [imię], tu [Twoje imię] z [nazwa salonu]. Dawno Cię nie widziałyśmy i trochę tęsknimy!

Wszystko u Ciebie w porządku? 

Dzwonię, bo mamy teraz [nowość/promocja/coś ciekawego] i od razu pomyślałam o Tobie.

Może byś wpadła? Mam fajne terminy w [dni]. Co Ty na to?"`,
    tips: [
      "Dzwoń po 2-3 miesiącach nieobecności",
      "Nie pytaj 'dlaczego nie przyszłaś'",
      "Daj powód do powrotu (nowość, promocja)"
    ]
  },
  
  // Social media i opinie
  {
    id: "ask-review",
    title: "Prośba o opinię/recenzję",
    category: "Opinie",
    situation: "Klientka jest zadowolona — proś o opinię",
    script: `"Cieszę się, że jesteś zadowolona! Twoja opinia naprawdę wiele dla mnie znaczy.

Czy mogłabyś zostawić nam kilka słów na Google lub Facebooku? To dosłownie 2 minuty, a dla nas ogromna pomoc.

Mogę Ci wysłać link na WhatsApp — wystarczy kliknąć i napisać co czujesz.

Dziękuję z góry — to naprawdę robi różnicę!"`,
    tips: [
      "Proś tylko zadowolone klientki",
      "Wyślij link — ułatw maksymalnie",
      "Podziękuj za każdą opinię"
    ]
  },
  {
    id: "photo-permission",
    title: "Prośba o zgodę na zdjęcie",
    category: "Opinie",
    situation: "Chcesz zrobić zdjęcie efektu do social media",
    script: `"Wow, wyszło naprawdę pięknie! Czy mogę Ci zrobić zdjęcie na naszego Instagrama?

Oczywiście nie musi być z twarzą — mogę pokazać tylko [dłonie/włosy/makijaż].

Oznaczę Cię jeśli chcesz, albo wstawię anonimowo — jak wolisz?

Nie musisz się zgadzać — pytam tylko bo efekt jest rewelacyjny!"`,
    tips: [
      "Nigdy nie publikuj bez zgody",
      "Daj opcję anonimowości",
      "Pokaż zdjęcie przed publikacją"
    ]
  }
];

const categories = [
  { id: "all", label: "Wszystkie", icon: FileText },
  { id: "Powitanie", label: "Powitanie", icon: Heart },
  { id: "Konsultacja", label: "Konsultacja", icon: MessageCircle },
  { id: "Trudne sytuacje", label: "Trudne sytuacje", icon: Users },
  { id: "Rezerwacje", label: "Rezerwacje", icon: Calendar },
  { id: "Opinie", label: "Opinie", icon: Star },
];

const MaterialyTab = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedScript, setExpandedScript] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredScripts = scripts.filter(script => {
    const matchesCategory = selectedCategory === "all" || script.category === selectedCategory;
    const matchesSearch = searchQuery === "" || 
      script.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.situation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      script.script.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopy = (script: Script) => {
    navigator.clipboard.writeText(script.script);
    setCopiedId(script.id);
    toast.success("Skopiowano do schowka");
    setTimeout(() => setCopiedId(null), 2000);
  };

  const toggleExpand = (id: string) => {
    setExpandedScript(expandedScript === id ? null : id);
  };

  return (
    <div className="px-4 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground">
            Materiały dla Pracowników
          </h1>
          <p className="text-sm text-muted-foreground">
            Gotowe skrypty rozmów z klientkami
          </p>
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-card border border-border rounded-xl p-4 space-y-3">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          </div>
          <span className="text-xs font-semibold text-foreground">Jak korzystać?</span>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Te skrypty to <span className="text-foreground font-medium">inspiracja i punkt wyjścia</span>. 
          Dostosuj je do swojego stylu komunikacji i osobowości. Najważniejsza jest autentyczność — 
          klientki wyczuwają sztuczność. Użyj tych tekstów jako bazy i dodaj swój osobisty akcent.
        </p>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          placeholder="Szukaj skryptów..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10 bg-card border-border h-11 rounded-xl"
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat.id
                ? "bg-primary text-primary-foreground"
                : "bg-card border border-border text-muted-foreground hover:bg-muted"
            }`}
          >
            <cat.icon className="w-3.5 h-3.5" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Scripts List */}
      <div className="space-y-3">
        {filteredScripts.length === 0 ? (
          <div className="text-center py-12">
            <MessageCircle className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">Nie znaleziono skryptów</p>
          </div>
        ) : (
          filteredScripts.map((script) => (
            <div
              key={script.id}
              className="bg-card border border-border rounded-xl overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggleExpand(script.id)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-muted/50 transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                      {script.category}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground truncate">
                    {script.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                    {script.situation}
                  </p>
                </div>
                {expandedScript === script.id ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                )}
              </button>

              {/* Expanded Content */}
              {expandedScript === script.id && (
                <div className="px-4 pb-4 space-y-4 border-t border-border pt-4">
                  {/* Situation */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-1">Sytuacja:</p>
                    <p className="text-sm text-foreground">{script.situation}</p>
                  </div>

                  {/* Script */}
                  <div>
                    <p className="text-xs font-medium text-muted-foreground mb-2">Skrypt:</p>
                    <div className="bg-muted/50 rounded-lg p-3 relative">
                      <pre className="text-sm text-foreground whitespace-pre-wrap font-sans leading-relaxed">
                        {script.script}
                      </pre>
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => handleCopy(script)}
                        className="absolute top-2 right-2 h-8 w-8 p-0"
                      >
                        {copiedId === script.id ? (
                          <Check className="w-4 h-4 text-green-500" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                  </div>

                  {/* Tips */}
                  {script.tips && script.tips.length > 0 && (
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-2">Wskazówki:</p>
                      <ul className="space-y-1.5">
                        {script.tips.map((tip, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Copy Button */}
                  <Button
                    onClick={() => handleCopy(script)}
                    className="w-full"
                    variant="outline"
                  >
                    {copiedId === script.id ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Skopiowano!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Kopiuj skrypt
                      </>
                    )}
                  </Button>
                </div>
              )}
            </div>
          ))
        )}
      </div>

      {/* Stats */}
      <div className="bg-card border border-border rounded-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">
              {scripts.length} gotowych skryptów
            </span>
          </div>
          <span className="text-xs text-primary font-medium">
            {categories.length - 1} kategorii
          </span>
        </div>
      </div>
    </div>
  );
};

export default MaterialyTab;
