import { useState, useEffect } from "react";
import { 
  Sparkles, ArrowRight, Calendar, Check,
  Instagram, Facebook, Video, Image, Lightbulb,
  Loader2, RefreshCw, ChevronDown, ChevronUp, Info, Target, Users, Heart
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { addDays } from "date-fns";

export interface StrategyPost {
  day: number;
  weekday: string;
  title: string;
  platform: "instagram" | "facebook" | "both";
  postType: "post" | "story" | "reels";
  description: string;
  hashtags?: string[];
  time: string;
  selected?: boolean;
}

interface GeneratedStrategy {
  title: string;
  summary: string;
  goals: string[];
  schedule: StrategyPost[];
}

export interface CalendarPost {
  id: string;
  date: Date;
  time: string;
  platforms: ("instagram" | "facebook")[];
  postType: "cennik" | "przed-po" | "promocja" | "tip" | "reels" | "story" | "inspiracja" | "post";
  title: string;
  status?: "zaplanowany" | "szkic" | "opublikowany";
  fromStrategy?: boolean;
  description?: string;
  imageUrl?: string;
  template?: {
    category: string;
    name: string;
  };
  instructions?: {
    title: string;
    steps: string[];
  };
}

interface GeneratorStrategiiTabProps {
  onAddToCalendar?: (posts: CalendarPost[]) => void;
}

const GeneratorStrategiiTab = ({ onAddToCalendar }: GeneratorStrategiiTabProps) => {
  const [step, setStep] = useState<"form" | "generating" | "result">("form");
  const [salonType, setSalonType] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [mainGoal, setMainGoal] = useState("");
  const [platforms, setPlatforms] = useState<("instagram" | "facebook")[]>(["instagram", "facebook"]);
  const [postsPerWeek, setPostsPerWeek] = useState("5");
  const [additionalInfo, setAdditionalInfo] = useState("");
  
  // Profile data from localStorage
  const [profileData, setProfileData] = useState<{salonName?: string; address?: string} | null>(null);
  
  const [strategy, setStrategy] = useState<GeneratedStrategy | null>(null);
  const [selectedPosts, setSelectedPosts] = useState<Set<number>>(new Set());
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  // Load profile data on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("aurine_profile");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (parsed && typeof parsed === "object") {
          setProfileData(parsed);
        }
      }
    } catch (error) {
      console.error("Nie udało się wczytać danych profilu", error);
    }
  }, []);

  const goals = [
    { id: "reservations", label: "Więcej rezerwacji", icon: Calendar, color: "text-emerald-500" },
    { id: "awareness", label: "Rozpoznawalność", icon: Target, color: "text-violet-500" },
    { id: "engagement", label: "Zaangażowanie", icon: Lightbulb, color: "text-amber-500" },
    { id: "loyalty", label: "Lojalność", icon: Heart, color: "text-pink-500" },
  ];

  const salonTypes = [
    "Salon fryzjerski",
    "Salon kosmetyczny", 
    "Salon manicure/pedicure",
    "Studio stylizacji rzęs i brwi",
    "Gabinet medycyny estetycznej",
    "Salon spa i wellness",
    "Studio makijażu",
    "Inny",
  ];

  const handleGenerate = async () => {
    if (!salonType || !mainGoal) {
      toast.error("Wypełnij wymagane pola");
      return;
    }

    setStep("generating");

    try {
      const { data, error } = await supabase.functions.invoke("generate-strategy", {
        body: {
          salonType,
          targetAudience,
          mainGoal,
          platforms,
          postsPerWeek: parseInt(postsPerWeek),
          additionalInfo,
          // Profile data for personalization
          salonName: profileData?.salonName,
          salonCity: profileData?.address?.split(",").pop()?.trim(),
        },
      });

      if (error) {
        console.error("Error generating strategy:", error);
        toast.error("Błąd podczas generowania strategii");
        setStep("form");
        return;
      }

      if (data?.strategy) {
        setStrategy(data.strategy);
        const allIndices = new Set<number>(data.strategy.schedule.map((_: StrategyPost, i: number) => i));
        setSelectedPosts(allIndices);
        setStep("result");
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Wystąpił błąd. Spróbuj ponownie.");
      setStep("form");
    }
  };

  const togglePlatform = (platform: "instagram" | "facebook") => {
    if (platforms.includes(platform)) {
      if (platforms.length > 1) {
        setPlatforms(platforms.filter(p => p !== platform));
      }
    } else {
      setPlatforms([...platforms, platform]);
    }
  };

  const togglePostSelection = (index: number) => {
    const newSelected = new Set(selectedPosts);
    if (newSelected.has(index)) {
      newSelected.delete(index);
    } else {
      newSelected.add(index);
    }
    setSelectedPosts(newSelected);
  };

  const selectAll = () => {
    if (strategy) {
      const allIndices = new Set(strategy.schedule.map((_, i) => i));
      setSelectedPosts(allIndices);
    }
  };

  const deselectAll = () => {
    setSelectedPosts(new Set());
  };

  // Template matching function - finds matching template from Szablony based on post content
  const getMatchingTemplate = (postTitle: string, postType: string, description: string) => {
    const titleLower = postTitle.toLowerCase();
    const descLower = description.toLowerCase();
    const combined = `${titleLower} ${descLower}`;
    
    // Template matching based on keywords - extended matching
    // Cennik / Promocja Cennika
    if (combined.includes("cennik") || combined.includes("ceny") || combined.includes("oferta cenowa") || combined.includes("price")) {
      return { category: "Promocja", name: "Promocja Cennika" };
    }
    
    // Metamorfoza Before/After
    if (combined.includes("przed") && combined.includes("po") || 
        combined.includes("metamorfoza") || 
        combined.includes("before") || combined.includes("after") || 
        combined.includes("efekt") || combined.includes("zmiana") ||
        combined.includes("transformacja") || combined.includes("rezultat")) {
      return { category: "Portfolio", name: "Metamorfoza Before/After" };
    }
    
    // Promocja
    if (combined.includes("promocja") || combined.includes("rabat") || combined.includes("zniżka") || 
        combined.includes("-%") || combined.includes("% taniej") || combined.includes("okazja") ||
        combined.includes("wyprzedaż") || combined.includes("super cena")) {
      return { category: "Promocja", name: "Promocja Cennika" };
    }
    
    // Opinie / Testimonial
    if (combined.includes("opinia") || combined.includes("recenzja") || combined.includes("klientka mówi") ||
        combined.includes("testimonial") || combined.includes("poleca") || combined.includes("zadowolona") ||
        combined.includes("rekomendacja") || combined.includes("co mówią")) {
      return { category: "Opinie", name: "Testimonial Klientki" };
    }
    
    // Nowości / Nowa usługa
    if (combined.includes("nowość") || combined.includes("nowy") || combined.includes("nowa usługa") ||
        combined.includes("nowa oferta") || combined.includes("wprowadzamy") || combined.includes("debiut") ||
        combined.includes("premiera")) {
      return { category: "Nowości", name: "Nowa Usługa" };
    }
    
    // Atmosfera / Relaks w salonie
    if (combined.includes("relaks") || combined.includes("atmosfera") || combined.includes("kulisy") ||
        combined.includes("za kulisami") || combined.includes("dzień w salonie") || combined.includes("wnętrze") ||
        combined.includes("przestrzeń") || combined.includes("klimat")) {
      return { category: "Atmosfera", name: "Relaks w Salonie" };
    }
    
    // Święta / Okolicznościowe
    if (combined.includes("święta") || combined.includes("życzenia") || combined.includes("boże narodzenie") ||
        combined.includes("wielkanoc") || combined.includes("walentynki") || combined.includes("dzień kobiet") ||
        combined.includes("urodziny") || combined.includes("rocznica")) {
      return { category: "Okolicznościowe", name: "Życzenia Świąteczne" };
    }
    
    // Default - no matching template (for reels, stories without specific content)
    return undefined;
  };

  const handleAddToCalendar = () => {
    if (selectedPosts.size === 0) {
      toast.error("Wybierz przynajmniej jeden post");
      return;
    }

    if (!strategy || !onAddToCalendar) {
      toast.error("Nie można dodać postów do kalendarza");
      return;
    }

    const today = new Date();
    const postsToAdd: CalendarPost[] = [];

    selectedPosts.forEach((index) => {
      const post = strategy.schedule[index];
      if (post) {
        const postDate = addDays(today, post.day - 1);
        const platforms: ("instagram" | "facebook")[] = 
          post.platform === "both" 
            ? ["instagram", "facebook"] 
            : [post.platform];

        // Generate instructions based on post type
        const getInstructionsForType = (type: string, title: string) => {
          const instructionsMap: Record<string, { title: string; steps: string[] }> = {
            post: {
              title: "Jak przygotować ten post",
              steps: [
                "Przejrzyj szablon w zakładce Szablony",
                "Przygotuj zdjęcie lub grafikę pasującą do tematu",
                "Napisz angażujący opis z call-to-action",
                "Dodaj odpowiednie hashtagi",
                "Zaplanuj publikację na wybraną godzinę"
              ]
            },
            reels: {
              title: "Jak nagrać tego Reelsa",
              steps: [
                "Przygotuj scenariusz lub punkty do omówienia",
                "Nagraj krótkie klipy (2-5 sek każdy)",
                "Użyj popularnego dźwięku z biblioteki Instagram",
                "Dodaj napisy dla osób oglądających bez dźwięku",
                "Zakończ call-to-action do rezerwacji"
              ]
            },
            story: {
              title: "Jak przygotować Story",
              steps: [
                "Nagraj krótkie wideo (max 15 sek) lub zrób zdjęcie",
                "Dodaj tekst z główną informacją",
                "Użyj naklejek i interaktywnych elementów (ankiety, pytania)",
                "Dodaj link do rezerwacji jeśli to możliwe"
              ]
            }
          };
          return instructionsMap[type] || instructionsMap.post;
        };

        const validPostType = (["cennik", "przed-po", "promocja", "tip", "reels", "story", "inspiracja", "post"].includes(post.postType) 
          ? post.postType 
          : "post") as CalendarPost["postType"];

        // Find matching template
        const template = getMatchingTemplate(post.title, post.postType, post.description);

        postsToAdd.push({
          id: `strategy-${Date.now()}-${index}`,
          date: postDate,
          time: post.time,
          platforms,
          postType: validPostType,
          title: post.title,
          status: "zaplanowany",
          fromStrategy: true,
          description: post.description,
          template, // Add matched template if found
          instructions: getInstructionsForType(post.postType, post.title),
        });
      }
    });

    onAddToCalendar(postsToAdd);
    toast.success(`Dodano ${postsToAdd.length} postów do kalendarza`);
  };

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case "reels": return Video;
      case "story": return Video;
      default: return Image;
    }
  };

  const PlatformBadge = ({ platform }: { platform: "instagram" | "facebook" | "both" }) => {
    if (platform === "both") {
      return (
        <div className="flex gap-1">
          <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
            <Instagram className="w-3 h-3 text-white" />
          </div>
          <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
            <Facebook className="w-3 h-3 text-white" />
          </div>
        </div>
      );
    }
    
    if (platform === "instagram") {
      return (
        <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
          <Instagram className="w-3 h-3 text-white" />
        </div>
      );
    }
    
    return (
      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center">
        <Facebook className="w-3 h-3 text-white" />
      </div>
    );
  };

  // Form Step
  if (step === "form") {
    return (
      <div className="px-4 py-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-foreground">
              Generator Strategii AI
            </h1>
            <p className="text-sm text-muted-foreground">
              Organiczna strategia marketingowa dla Twojego salonu
            </p>
          </div>
        </div>

        {/* AI Info Banner */}
        <div className="bg-card border border-border rounded-xl p-4 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Lightbulb className="w-3.5 h-3.5 text-primary" />
            </div>
            <span className="text-xs font-semibold text-foreground">Pamiętaj</span>
          </div>
          
          <p className="text-xs text-muted-foreground leading-relaxed">
            Generator to <span className="text-foreground font-medium">asystent do inspiracji</span>, nie gotowy plan do ślepego kopiowania. 
            Najlepsze treści powstają spontanicznie — reaguj na bieżące wydarzenia w salonie, 
            pokazuj autentyczne kulisy i słuchaj swoich klientek. Asystent podpowie kierunek, ale Twoja kreatywność i wyczucie są najważniejsze.
          </p>
        </div>

        {/* Form Fields */}
        <div className="space-y-4">
          {/* Typ salonu */}
          <div>
            <label className="text-xs font-medium text-foreground mb-2 flex items-center gap-1.5">
              Typ salonu <span className="text-primary">*</span>
              <Popover>
                <PopoverTrigger asChild>
                  <button type="button" className="text-amber-500 hover:text-amber-600 transition-colors">
                    <Lightbulb className="w-3.5 h-3.5" />
                  </button>
                </PopoverTrigger>
                <PopoverContent side="top" className="w-64 text-xs bg-popover border-border z-50">
                  <p className="font-medium mb-1">Wybierz rodzaj swojego salonu</p>
                  <p className="text-muted-foreground">To pomoże AI dostosować strategię do specyfiki Twojej branży — inaczej wyglądają treści dla fryzjera, a inaczej dla kosmetyczki.</p>
                </PopoverContent>
              </Popover>
            </label>
            <select
              value={salonType}
              onChange={(e) => setSalonType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl bg-card border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            >
              <option value="">Wybierz typ salonu...</option>
              {salonTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          {/* Twoje klientki */}
          <div>
            <label className="text-xs font-medium text-foreground mb-2 flex items-center gap-1.5">
              Twoje klientki
              <Popover>
                <PopoverTrigger asChild>
                  <button type="button" className="text-amber-500 hover:text-amber-600 transition-colors">
                    <Lightbulb className="w-3.5 h-3.5" />
                  </button>
                </PopoverTrigger>
                <PopoverContent side="top" className="w-64 text-xs bg-popover border-border z-50">
                  <p className="font-medium mb-1">Opisz swoją grupę docelową</p>
                  <p className="text-muted-foreground">Wiek, styl życia, zainteresowania. Np. "kobiety 30-50, zapracowane mamy" lub "młode dziewczyny dbające o paznokcie". Im dokładniej opiszesz, tym lepiej dobrane będą treści.</p>
                </PopoverContent>
              </Popover>
            </label>
            <Input
              placeholder="np. kobiety 25-45 lat, pracujące..."
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="bg-card border-border h-12 rounded-xl"
            />
          </div>

          {/* Cel główny */}
          <div>
            <label className="text-xs font-medium text-foreground mb-3 block">
              Główny cel <span className="text-primary">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {goals.map((goal) => (
                <button
                  key={goal.id}
                  onClick={() => setMainGoal(goal.id)}
                  className={`flex items-center gap-2.5 p-3 rounded-xl border text-left transition-all ${
                    mainGoal === goal.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-card hover:border-primary/50"
                  }`}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    mainGoal === goal.id ? "bg-primary/20" : "bg-muted"
                  }`}>
                    <goal.icon className={`w-4 h-4 ${mainGoal === goal.id ? goal.color : "text-muted-foreground"}`} />
                  </div>
                  <span className={`text-xs font-medium ${
                    mainGoal === goal.id ? "text-foreground" : "text-muted-foreground"
                  }`}>
                    {goal.label}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Platformy */}
          <div>
            <label className="text-xs font-medium text-foreground mb-3 block">
              Platformy
            </label>
            <div className="flex gap-3">
              <button
                onClick={() => togglePlatform("instagram")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                  platforms.includes("instagram")
                    ? "border-pink-500 bg-pink-500/10"
                    : "border-border bg-card opacity-50"
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center">
                  <Instagram className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">Instagram</span>
              </button>
              <button
                onClick={() => togglePlatform("facebook")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border transition-all ${
                  platforms.includes("facebook")
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-border bg-card opacity-50"
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center">
                  <Facebook className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground">Facebook</span>
              </button>
            </div>
          </div>

          {/* Liczba postów */}
          <div>
            <label className="text-xs font-medium text-foreground mb-3 block">
              Postów tygodniowo
            </label>
            <div className="flex gap-2">
              {["3", "5", "7"].map((num) => (
                <button
                  key={num}
                  onClick={() => setPostsPerWeek(num)}
                  className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all ${
                    postsPerWeek === num
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:bg-muted"
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Dodatkowe info */}
          <div>
            <label className="text-xs font-medium text-foreground mb-2 flex items-center gap-1.5">
              Dodatkowe informacje
              <Popover>
                <PopoverTrigger asChild>
                  <button type="button" className="text-amber-500 hover:text-amber-600 transition-colors">
                    <Lightbulb className="w-3.5 h-3.5" />
                  </button>
                </PopoverTrigger>
                <PopoverContent side="top" className="w-64 text-xs bg-popover border-border z-50">
                  <p className="font-medium mb-1">Co jeszcze AI powinno wiedzieć?</p>
                  <p className="text-muted-foreground">Wpisz swoją specjalizację, styl komunikacji, usługi premium, czy promocje które chcesz reklamować. Możesz też napisać jakiego tonu oczekujesz (formalny/luźny).</p>
                </PopoverContent>
              </Popover>
            </label>
            <Textarea
              placeholder="Specjalizacja, styl komunikacji, usługi specjalne..."
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              className="bg-card border-border min-h-[100px] rounded-xl resize-none"
            />
          </div>
        </div>

        {/* Generate Button */}
        <Button
          onClick={handleGenerate}
          disabled={!salonType || !mainGoal}
          className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all disabled:opacity-40"
        >
          <Sparkles className="w-5 h-5 mr-2" />
          Zaproponuj strategię
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    );
  }

  // Generating Step
  if (step === "generating") {
    return (
      <div className="px-4 py-12 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
            <Sparkles className="w-10 h-10 text-primary" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Loader2 className="w-4 h-4 text-primary-foreground animate-spin" />
          </div>
        </div>
        <h2 className="text-lg font-semibold mt-6 text-foreground">
          Tworzę strategię...
        </h2>
        <p className="text-sm mt-2 text-center text-muted-foreground">
          Analizuję dane i generuję<br />spersonalizowany harmonogram
        </p>
        <div className="mt-6 flex gap-1.5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-primary animate-pulse"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Result Step
  if (step === "result" && strategy) {
    return (
      <div className="px-4 py-6 space-y-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
              <Check className="w-5 h-5 text-emerald-500" />
            </div>
            <div>
              <h1 className="text-base font-bold text-foreground">
                {strategy.title}
              </h1>
              <p className="text-xs text-muted-foreground mt-0.5">
                {strategy.summary}
              </p>
            </div>
          </div>
          <button
            onClick={() => setStep("form")}
            className="p-2 rounded-lg bg-card border border-border hover:bg-muted transition-colors"
          >
            <RefreshCw className="w-4 h-4 text-muted-foreground" />
          </button>
        </div>

        {/* Goals */}
        <div className="bg-card rounded-xl border border-border p-4">
          <h3 className="text-xs font-semibold text-foreground mb-3">
            Cele strategii
          </h3>
          <div className="space-y-2">
            {strategy.goals.map((goal, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <Check className="w-3 h-3 text-emerald-500" />
                </div>
                <span className="text-sm text-muted-foreground">{goal}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Selection Controls */}
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">
            Harmonogram · {strategy.schedule.length} postów
          </h2>
          <div className="flex gap-3">
            <button
              onClick={selectAll}
              className="text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Zaznacz wszystkie
            </button>
            <button
              onClick={deselectAll}
              className="text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Odznacz
            </button>
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-2">
          {strategy.schedule.map((post, index) => {
            const isSelected = selectedPosts.has(index);
            const isExpanded = expandedPost === index;
            const TypeIcon = getPostTypeIcon(post.postType);

            return (
              <div
                key={index}
                className={`bg-card rounded-xl border transition-all ${
                  isSelected ? "border-primary" : "border-border"
                }`}
              >
                <div className="flex items-center p-3 gap-3">
                  {/* Checkbox */}
                  <button
                    onClick={() => togglePostSelection(index)}
                    className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                      isSelected
                        ? "bg-primary border-primary"
                        : "border-border bg-card"
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5 text-primary-foreground" />}
                  </button>

                  {/* Day */}
                  <div className="text-center min-w-[36px]">
                    <p className="text-base font-bold text-foreground leading-none">
                      {post.day}
                    </p>
                    <p className="text-[10px] uppercase text-muted-foreground mt-0.5">
                      {post.weekday}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        <PlatformBadge platform={post.platform} />
                      </div>
                      <span className={`text-xs font-medium text-foreground ${isExpanded ? '' : 'truncate'}`}>
                        {post.title}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <TypeIcon className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                      <span className="text-[10px] text-muted-foreground capitalize">
                        {post.postType}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        · {post.time}
                      </span>
                    </div>
                  </div>

                  {/* Expand */}
                  <button
                    onClick={() => setExpandedPost(isExpanded ? null : index)}
                    className="p-1.5 rounded-lg hover:bg-muted transition-colors"
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-3 pb-3 pt-1 border-t border-border">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {post.description}
                    </p>
                    {post.hashtags && post.hashtags.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {post.hashtags.map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Add to Calendar */}
        <div className="pt-2">
          <Button
            onClick={handleAddToCalendar}
            disabled={selectedPosts.size === 0}
            className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg shadow-primary/20 transition-all disabled:opacity-40"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Dodaj do kalendarza ({selectedPosts.size})
          </Button>
        </div>
      </div>
    );
  }

  return null;
};

export default GeneratorStrategiiTab;
