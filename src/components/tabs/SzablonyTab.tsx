import { useMemo, useState } from "react";
import { Facebook, Instagram, Layers, Search } from "lucide-react";
import TemplateDetailModal from "@/components/modals/TemplateDetailModal";

interface Template {
  id: number;
  title: string;
  category: string;
  platforms: ("instagram" | "facebook")[];
  description: string;
  caption: string;
  hashtags: string[];
  imageUrl: string;
}

const templates: Template[] = [
  {
    id: 1,
    title: "Promocja Cennika",
    category: "Promocja",
    platforms: ["instagram", "facebook"],
    description: "Przedstaw swój cennik w atrakcyjny sposób",
    caption:
      "✨ Nowy cennik już dostępny! ✨\n\nZapraszamy do zapoznania się z naszą aktualną ofertą. Dla nowych klientek przygotowałyśmy specjalną niespodziankę! 🎁\n\n📍 [NAZWA_SALONU]\n📞 Umów wizytę już dziś!",
    hashtags: [
      "#salon",
      "#beauty",
      "#cennik",
      "#promocja",
      "#uroda",
      "#manicure",
      "#pedicure",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=800&fit=crop",
  },
  {
    id: 2,
    title: "Metamorfoza Before/After",
    category: "Portfolio",
    platforms: ["instagram", "facebook"],
    description: "Pokaż efekty swojej pracy",
    caption:
      "Przed ➡️ Po 💫\n\nKolejjna piękna metamorfoza w naszym salonie! Co sądzicie o efekcie? 😍\n\nZabiegi:\n• [NAZWA ZABIEGU]\n• [NAZWA ZABIEGU]\n\n💝 Dziękujemy za zaufanie!",
    hashtags: [
      "#metamorfoza",
      "#beforeafter",
      "#zmiana",
      "#salon",
      "#beauty",
      "#transformation",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop",
  },
  {
    id: 3,
    title: "Relaks w Salonie",
    category: "Atmosfera",
    platforms: ["instagram"],
    description: "Pokaż atmosferę Twojego salonu",
    caption:
      "Twój moment relaksu 🧘‍♀️✨\n\nW naszym salonie znajdziesz chwilę wytchnienia od codzienności. Przyjdź, zrelaksuj się i wyjdź odmieniona! 💆‍♀️\n\n🕐 Rezerwacje: link w bio",
    hashtags: ["#relaks", "#salon", "#beauty", "#odpoczynek", "#wellness", "#spa"],
    imageUrl:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=800&fit=crop",
  },
  {
    id: 4,
    title: "Nowa Usługa",
    category: "Nowości",
    platforms: ["instagram", "facebook"],
    description: "Ogłoś nową usługę w ofercie",
    caption:
      "🆕 NOWOŚĆ w ofercie! 🆕\n\nZ przyjemnością przedstawiamy nasz najnowszy zabieg: [NAZWA ZABIEGU]!\n\n✅ [KORZYŚĆ 1]\n✅ [KORZYŚĆ 2]\n✅ [KORZYŚĆ 3]\n\n🎉 Promocja na start: -20%\n\n📞 Rezerwacje już otwarte!",
    hashtags: [
      "#nowość",
      "#nowaoferta",
      "#zabieg",
      "#salon",
      "#beauty",
      "#promocja",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&h=800&fit=crop",
  },
  {
    id: 5,
    title: "Życzenia Świąteczne",
    category: "Okolicznościowe",
    platforms: ["instagram", "facebook"],
    description: "Złóż życzenia klientkom",
    caption:
      "🎄 Wesołych Świąt! 🎄\n\nŻyczymy Wam magicznych chwil w gronie najbliższych, dużo zdrowia i pięknych chwil! ✨\n\n💝 Dziękujemy za wspólny rok!\n\n[NAZWA_SALONU]",
    hashtags: ["#święta", "#życzenia", "#wesołychświąt", "#salon", "#beauty"],
    imageUrl:
      "https://images.unsplash.com/photo-1482517967863-00e15c9b44be?w=800&h=800&fit=crop",
  },
  {
    id: 6,
    title: "Testimonial Klientki",
    category: "Opinie",
    platforms: ["instagram", "facebook"],
    description: "Podziel się opinią zadowolonej klientki",
    caption:
      "💬 Co mówią nasze klientki:\n\n\"[CYTAT OPINII]\"\n\n⭐⭐⭐⭐⭐\n\nDziękujemy za tak piękne słowa! To dla nas największa motywacja 💕\n\n#opinia #klientka",
    hashtags: [
      "#opinia",
      "#testimonial",
      "#zadowolonaklientka",
      "#salon",
      "#beauty",
      "#recenzja",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop",
  },
  {
    id: 7,
    title: "Testimonial Klientki",
    category: "Opinie",
    platforms: ["instagram", "facebook"],
    description: "Podziel się opinią zadowolonej klientki",
    caption:
      "💬 Co mówią nasze klientki:\n\n\"[CYTAT OPINII]\"\n\n⭐⭐⭐⭐⭐\n\nDziękujemy za tak piękne słowa! To dla nas największa motywacja 💕\n\n#opinia #klientka",
    hashtags: [
      "#opinia",
      "#testimonial",
      "#zadowolonaklientka",
      "#salon",
      "#beauty",
      "#recenzja",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1487412947147-5cebf96a4281?w=800&h=800&fit=crop",
  },
];

const categories = [
  "Wszystko",
  "Promocja",
  "Portfolio",
  "Atmosfera",
  "Nowości",
  "Okolicznościowe",
  "Opinie",
];

const SzablonyTab = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Wszystko");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesSearch =
        template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "Wszystko" || template.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen pb-8">
      {/* Header */}
      <header className="px-2 pt-6 pb-4">
        <div className="flex items-center gap-3 mb-5">
          <div className="h-11 w-11 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25">
            <Layers className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground tracking-tight">
              Szablony postów
            </h1>
            <p className="text-xs text-muted-foreground">
              Gotowe grafiki do Twoich social media
            </p>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            placeholder="Szukaj szablonów..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-12 rounded-2xl border border-border bg-card pl-11 pr-4 text-sm font-medium text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all"
          />
        </div>
      </header>

      {/* Categories */}
      <section className="pb-5" aria-label="Kategorie szablonów">
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide px-2">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`shrink-0 px-3 py-2 rounded-full text-[11px] font-semibold transition-all ${
                  active
                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                    : "bg-card text-muted-foreground border border-border hover:bg-accent hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid - równa siatka 2x */}
      <section className="px-4" aria-label="Szablony postów">
        <div className="grid grid-cols-2 gap-3">
          {filteredTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => setSelectedTemplate(template)}
              className="group relative aspect-square rounded-3xl overflow-hidden bg-card shadow-md active:scale-[0.97] transition-transform"
            >
              {/* Image */}
              <img
                src={template.imageUrl}
                alt={template.title}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

              {/* Top badges */}
              <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                <span className="px-2.5 py-1 rounded-lg bg-white/20 text-[10px] font-bold text-white uppercase tracking-wider">
                  {template.category}
                </span>
                <div className="flex gap-1">
                  {template.platforms.includes("instagram") && (
                    <span className="h-7 w-7 rounded-lg bg-white/20 flex items-center justify-center">
                      <Instagram className="h-3.5 w-3.5 text-white" />
                    </span>
                  )}
                  {template.platforms.includes("facebook") && (
                    <span className="h-7 w-7 rounded-lg bg-white/20 flex items-center justify-center">
                      <Facebook className="h-3.5 w-3.5 text-white" />
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-sm font-bold text-white leading-snug line-clamp-2 mb-1">
                  {template.title}
                </h3>
                <p className="text-[11px] text-white/70 line-clamp-1">
                  {template.description}
                </p>
              </div>

              {/* Hover/focus ring */}
              <div className="absolute inset-0 rounded-3xl ring-2 ring-inset ring-white/10 group-hover:ring-white/20 transition-all" />
            </button>
          ))}
        </div>

        {filteredTemplates.length === 0 && (
          <div className="text-center py-20 text-muted-foreground">
            <Layers className="h-10 w-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm font-medium">Brak szablonów</p>
            <p className="text-xs mt-1">Spróbuj zmienić kryteria wyszukiwania</p>
          </div>
        )}
      </section>

      {/* Modal */}
      {selectedTemplate && (
        <TemplateDetailModal
          template={selectedTemplate}
          isOpen={!!selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
        />
      )}
    </main>
  );
};

export default SzablonyTab;
