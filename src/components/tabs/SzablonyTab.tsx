import { useMemo, useState } from "react";
import { Facebook, Instagram, Search, Copy, Check } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

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
      "Przed ➡️ Po 💫\n\nKolejnja piękna metamorfoza w naszym salonie! Co sądzicie o efekcie? 😍\n\nZabiegi:\n• [NAZWA ZABIEGU]\n• [NAZWA ZABIEGU]\n\n💝 Dziękujemy za zaufanie!",
    hashtags: [
      "#metamorfoza",
      "#beforeafter",
      "#zmiana",
      "#salon",
      "#beauty",
      "#transformation",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&h=800&fit=crop",
  },
  {
    id: 3,
    title: "Inspiracja Dnia",
    category: "Inspiracja",
    platforms: ["instagram"],
    description: "Podziel się motywacją ze swoimi obserwatorami",
    caption:
      "💕 Dbaj o siebie każdego dnia 💕\n\nPamiętaj, że zasługujesz na chwilę relaksu. Zadbaj o siebie - umów się na wizytę i poczuj się wyjątkowo!\n\n✨ [NAZWA_SALONU]",
    hashtags: [
      "#motywacja",
      "#inspiracja",
      "#selfcare",
      "#beauty",
      "#relaks",
      "#pielęgnacja",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&h=800&fit=crop",
  },
  {
    id: 4,
    title: "Nowość w Ofercie",
    category: "Nowości",
    platforms: ["instagram", "facebook"],
    description: "Ogłoś nową usługę lub produkt",
    caption:
      "🆕 NOWOŚĆ W OFERCIE! 🆕\n\nZ radością przedstawiamy [NAZWA USŁUGI/PRODUKTU]!\n\n✅ Korzyść 1\n✅ Korzyść 2\n✅ Korzyść 3\n\n🗓️ Umów się już dziś i przetestuj jako pierwsza!\n\n📞 Kontakt w bio",
    hashtags: [
      "#nowość",
      "#new",
      "#beauty",
      "#salon",
      "#oferta",
      "#zapraszamy",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&h=800&fit=crop",
  },
  {
    id: 5,
    title: "Kulisy Pracy",
    category: "Kulisy",
    platforms: ["instagram"],
    description: "Pokaż swoją codzienność w salonie",
    caption:
      "Za kulisami ✨\n\nTak wygląda nasz dzień w salonie! Każda klientka to dla nas priorytet 💖\n\nZapraszamy do odwiedzin i przekonaj się sama o jakości naszych usług!\n\n📍 [ADRES]",
    hashtags: [
      "#zakulisami",
      "#behindthescenes",
      "#salon",
      "#beauty",
      "#praca",
      "#pasja",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1633681122154-1159e48f5d99?w=800&h=800&fit=crop",
  },
  {
    id: 6,
    title: "Opinia Klientki",
    category: "Opinie",
    platforms: ["instagram", "facebook"],
    description: "Pochwal się pozytywną opinią",
    caption:
      "💬 Opinia od [IMIĘ KLIENTKI]:\n\n\"[TREŚĆ OPINII]\"\n\n⭐⭐⭐⭐⭐\n\nDziękujemy za zaufanie! Takie słowa to nasza największa motywacja 💖\n\n#opinie #zadowolonaklientka",
    hashtags: [
      "#opinie",
      "#reviews",
      "#zadowolonaklientka",
      "#beauty",
      "#salon",
      "#polecam",
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&h=800&fit=crop",
  },
];

const categories = ["Wszystkie", "Promocja", "Portfolio", "Inspiracja", "Nowości", "Kulisy", "Opinie"];

const SzablonyTab = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [selectedCategory, setSelectedCategory] = useState("Wszystkie");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const filteredTemplates = useMemo(() => {
    return templates.filter((template) => {
      const matchesCategory = selectedCategory === "Wszystkie" || template.category === selectedCategory;
      const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        template.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleCopyCaption = (template: Template) => {
    const fullCaption = `${template.caption}\n\n${template.hashtags.join(" ")}`;
    navigator.clipboard.writeText(fullCaption);
    setCopiedId(template.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-neutral-400" : "text-gray-500";
  const cardBg = isDark ? "bg-neutral-900" : "bg-white";
  const cardBorder = isDark ? "border-pink-500/20" : "border-gray-100";

  return (
    <div className="px-3 py-4 space-y-4">
      {/* Header */}
      <div>
        <h1 className={`text-lg font-bold ${textPrimary}`}>Szablony Treści</h1>
        <p className={`text-xs ${textSecondary}`}>Gotowe szablony postów na social media</p>
      </div>

      {/* Search */}
      <div className={`relative ${cardBg} rounded-xl border ${cardBorder}`}>
        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${textSecondary}`} />
        <input
          type="text"
          placeholder="Szukaj szablonów..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-transparent text-sm ${textPrimary} placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50`}
        />
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground"
                : isDark
                ? "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div className="space-y-3">
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden shadow-md`}
          >
            {/* Image */}
            <div className="relative aspect-square">
              <img
                src={template.imageUrl}
                alt={template.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 right-2 flex gap-1">
                {template.platforms.includes("instagram") && (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
                    <Instagram className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
                {template.platforms.includes("facebook") && (
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <Facebook className="w-3.5 h-3.5 text-white" />
                  </div>
                )}
              </div>
              <div className="absolute bottom-2 left-2">
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${isDark ? 'bg-neutral-900/80' : 'bg-white/80'} ${textPrimary}`}>
                  {template.category}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-3 space-y-2">
              <h3 className={`font-semibold text-sm ${textPrimary}`}>{template.title}</h3>
              <p className={`text-xs ${textSecondary}`}>{template.description}</p>

              {/* Caption Preview */}
              <div className={`p-2 rounded-lg text-xs ${isDark ? 'bg-neutral-800' : 'bg-gray-50'} ${textSecondary} line-clamp-3 whitespace-pre-line`}>
                {template.caption}
              </div>

              {/* Hashtags */}
              <div className="flex flex-wrap gap-1">
                {template.hashtags.slice(0, 4).map((tag) => (
                  <span
                    key={tag}
                    className={`text-[10px] ${isDark ? 'text-pink-400' : 'text-pink-600'}`}
                  >
                    {tag}
                  </span>
                ))}
                {template.hashtags.length > 4 && (
                  <span className={`text-[10px] ${textSecondary}`}>
                    +{template.hashtags.length - 4}
                  </span>
                )}
              </div>

              {/* Copy Button */}
              <button
                onClick={() => handleCopyCaption(template)}
                className={`w-full py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1.5 transition-colors ${
                  copiedId === template.id
                    ? "bg-emerald-500 text-white"
                    : isDark
                    ? "bg-pink-500/20 text-pink-400 hover:bg-pink-500/30"
                    : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                }`}
              >
                {copiedId === template.id ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Skopiowano!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Kopiuj tekst
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className={`text-center py-8 ${textSecondary}`}>
          <p className="text-sm">Nie znaleziono szablonów</p>
        </div>
      )}
    </div>
  );
};

export default SzablonyTab;
