import { ArrowLeft, ChevronRight, Heart, Rocket, BookOpen, Clock, CheckCircle, Instagram, ShoppingBag, Image } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface IntroLessonViewProps {
  lessonIndex: number;
  onBack: () => void;
  onNext: () => void;
  onFinish: () => void;
  totalLessons: number;
}

const lessons = [
  {
    id: "witaj",
    title: "Witaj w Aurine Academy",
    icon: Heart,
    content: (
      <>
        <div className="flex items-center gap-2 mb-2.5">
          <Heart className="w-[18px] h-[18px] text-pink-500 fill-pink-500" />
          <p className="text-[13px] font-medium text-foreground">Cieszymy się, że tu jesteś!</p>
        </div>
        <p className="text-[13px] leading-relaxed text-muted-foreground mb-4">
          Aurine Academy powstała z myślą o właścicielkach salonów beauty, które chcą rozwijać swój biznes - przyciągać więcej klientek, budować z nimi trwałe relacje i zwiększać przychody.
        </p>
        <div className="space-y-3.5">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Instagram className="w-[18px] h-[18px] text-primary" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-foreground">Social media: Instagram i Facebook</p>
              <p className="text-xs text-muted-foreground mt-0.5">Jak budować widoczność, tworzyć Reels i przyciągać nowe klientki</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0">
              <Image className="w-[18px] h-[18px] text-pink-500" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-foreground">Tworzenie treści</p>
              <p className="text-xs text-muted-foreground mt-0.5">Zdjęcia, Stories i posty, które angażują odbiorców i sprzedają usługi</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-[18px] h-[18px] text-violet-500" />
            </div>
            <div>
              <p className="text-[13px] font-medium text-foreground">Sprzedaż i relacje z klientkami</p>
              <p className="text-xs text-muted-foreground mt-0.5">Jak budować lojalność, sprzedawać więcej i zwiększać przychody salonu</p>
            </div>
          </div>
        </div>
      </>
    )
  },
  {
    id: "jak-dzialaja",
    title: "Jak to działa?",
    icon: BookOpen,
    content: (
      <>
        <p className="text-[13px] leading-relaxed text-muted-foreground mb-4">
          Materiały są podzielone na krótkie kursy. Każdy kończy się czymś, co możesz od razu wdrożyć w swoim salonie. Nie musisz przerabiać wszystkiego po kolei - wybierasz to, czego akurat potrzebujesz.
        </p>
        <div className="space-y-3">
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-primary/5 to-pink-500/5 border border-primary/10">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-[18px] h-[18px] text-primary" />
              <span className="text-[13px] font-medium text-foreground">Uczysz się we własnym tempie</span>
            </div>
            <p className="text-xs text-muted-foreground">Rano przed otwarciem, w przerwie między klientkami albo wieczorem w domu. System pamięta, gdzie skończyłaś.</p>
          </div>
          <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-500/5 to-teal-500/5 border border-emerald-500/10">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-[18px] h-[18px] text-emerald-500" />
              <span className="text-[13px] font-medium text-foreground">Gotowe do wdrożenia</span>
            </div>
            <p className="text-xs text-muted-foreground">Każda lekcja to konkretne wskazówki: co zrobić, jak to powiedzieć klientce i dlaczego to działa.</p>
          </div>
        </div>
      </>
    )
  },
  {
    id: "zaczynamy",
    title: "Od czego zacząć?",
    icon: Rocket,
    content: (
      <>
        <p className="text-[13px] leading-relaxed text-muted-foreground mb-4">
          Najlepiej zacząć od tego, co teraz najbardziej Ci doskwiera. Pomyśl, co aktualnie sprawia Ci największą trudność.
        </p>
        <div className="p-3.5 rounded-xl bg-gradient-to-br from-primary/10 to-pink-500/10 border border-primary/20 mb-4">
          <p className="text-[13px] font-medium text-foreground mb-2.5">Kilka podpowiedzi na start:</p>
          <ul className="space-y-2 text-xs text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Chcesz więcej klientek z social media? Zacznij od kursów o Instagramie, Facebooku i Reels.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Nie wiesz, co publikować? Sprawdź kursy o tworzeniu treści i zdjęciach.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">•</span>
              <span>Chcesz zwiększyć przychody? Poczytaj o sprzedaży i budowaniu relacji z klientkami.</span>
            </li>
          </ul>
        </div>
        <p className="text-[13px] leading-relaxed text-muted-foreground">
          Kliknij poniżej i wybierz pierwszy kurs.
        </p>
      </>
    )
  }
];

const IntroLessonView = ({ lessonIndex, onBack, onNext, onFinish, totalLessons }: IntroLessonViewProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  const currentLesson = lessons[lessonIndex];
  const isLast = lessonIndex === lessons.length - 1;
  const IconComponent = currentLesson.icon;

  return (
    <div className="min-h-[calc(100vh-140px)] bg-background flex flex-col">
      {/* Hero Header - same as LessonView */}
      <div className={`relative overflow-hidden ${isDark ? 'bg-card' : 'bg-gradient-to-b from-pink-50/50 to-background'}`}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-pink-500/5" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
        
        <div className="relative px-4 pt-4 pb-3">
          <button 
            onClick={onBack} 
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-background/50 transition-all mb-3"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Wróć do kursów
          </button>
          
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-pink-500 flex items-center justify-center shadow-md shadow-primary/25">
              <IconComponent className="w-[18px] h-[18px] text-white" />
            </div>
            <div className="text-xs text-muted-foreground">
              {lessonIndex + 1} z {totalLessons}
            </div>
          </div>
          
          <h1 className="text-lg font-bold text-foreground leading-tight">
            {currentLesson.title}
          </h1>
        </div>
      </div>

      {/* Progress bar */}
      <div className="px-4 py-3">
        <div className="flex gap-1.5">
          {lessons.map((_, i) => (
            <div 
              key={i} 
              className={`h-1 flex-1 rounded-full transition-all ${
                i <= lessonIndex 
                  ? 'bg-gradient-to-r from-primary to-pink-500' 
                  : isDark ? 'bg-border' : 'bg-gray-200'
              }`} 
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-3 flex-1">
        {currentLesson.content}
      </div>

      {/* Navigation */}
      <div className="px-4 pb-4 mt-auto">
        {isLast ? (
          <button 
            onClick={onFinish}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-pink-500 text-white text-[13px] font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/25 group"
          >
            Przejdź do kursów
            <ChevronRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <button 
            onClick={onNext}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-pink-500 text-white text-[13px] font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/25 group"
          >
            Dalej
            <ChevronRight className="w-[18px] h-[18px] group-hover:translate-x-0.5 transition-transform" />
          </button>
        )}
      </div>

    </div>
  );
};

export default IntroLessonView;
