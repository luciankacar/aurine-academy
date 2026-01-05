import { Course } from "@/types/courses";

export const storiesKomunikacjaCourse: Course = {
  id: "stories-komunikacja",
  title: "Stories i codzienna komunikacja",
  description: "Naucz się wykorzystywać Stories do budowania relacji z klientami i codziennej komunikacji.",
  icon: "MessageCircle",
  color: "#8b5cf6",
  estimatedHours: 2,
  totalLessons: 5,
  modules: [
    {
      id: "stories-komunikacja-m1",
      title: "Stories i codzienna komunikacja",
      description: "Kompleksowy przewodnik po Stories dla salonu beauty",
      lessons: [
        {
          id: "stories-komunikacja-l1",
          title: "Funkcja stories",
          description: "Poznaj rolę Stories w strategii social media salonu beauty.",
          estimatedMinutes: 12,
          intro: "Stories to Twoje codzienne 'okno' do życia salonu. Format, który znika po 24h, ale buduje relację na lata.",
          objectives: [
            "Zrozumiesz, czym są Stories i jak działają",
            "Poznasz różnice między Stories a postami",
            "Nauczysz się, kiedy wykorzystywać Stories"
          ],
          sections: [
            { id: "stories-l1-1", type: "heading", content: "Czym są Stories i dlaczego są tak popularne?" },
            { id: "stories-l1-2", type: "text", content: "Stories to pionowe zdjęcia lub filmy (do 60 sekund), które znikają po 24 godzinach. Można je wzbogacić o naklejki, tekst, muzykę, ankiety i inne interaktywne elementy." },
            { id: "stories-l1-3", type: "tip", content: "Stories wyświetlają się na górze aplikacji Facebook i Instagram - to pierwsza rzecz, którą widzą użytkownicy po otwarciu apki. Darmowa reklama!" },
            { id: "stories-l1-4", type: "heading", content: "Stories vs posty - kluczowe różnice" },
            { 
              id: "stories-l1-5", 
              type: "comparison", 
              content: "Porównanie Stories i postów", 
              comparison: { 
                good: { 
                  title: "Stories", 
                  description: "Spontaniczne, codzienne, interaktywne",
                  example: "Kulisy, pytania, ankiety, codzienność, wolne terminy" 
                }, 
                bad: { 
                  title: "Posty", 
                  description: "Planowane, dopracowane, trwałe",
                  example: "Portfolio, efekty, edukacja, budowanie wizerunku" 
                } 
              } 
            },
            { id: "stories-l1-6", type: "heading", content: "Dlaczego Stories są ważne dla salonu?" },
            { id: "stories-l1-7", type: "text", content: "Algorytmy Facebooka i Instagrama promują konta aktywne. Stories pozwalają na codzienny kontakt bez 'zaśmiecania' feedu. Regularność = widoczność." },
            { 
              id: "stories-l1-8", 
              type: "step", 
              stepNumber: 1, 
              content: "Stories budują RELACJĘ - obserwatorki czują, że Cię znają." 
            },
            { 
              id: "stories-l1-9", 
              type: "step", 
              stepNumber: 2, 
              content: "Stories zwiększają WIDOCZNOŚĆ - algorytm Cię promuje." 
            },
            { 
              id: "stories-l1-10", 
              type: "step", 
              stepNumber: 3, 
              content: "Stories generują SPRZEDAŻ - wolne terminy, promocje, nowości." 
            },
            { 
              id: "stories-l1-11", 
              type: "mockup", 
              content: "Tak wygląda typowe Story salonu beauty:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "photo",
                description: "Story z kulisami pracy - buduje relację z obserwatorkami"
              }
            },
            {
              id: "stories-l1-quiz",
              type: "quiz",
              content: "",
              quiz: {
                question: "Masz piękne zdjęcie efektu zabiegu. Gdzie je opublikujesz?",
                options: [
                  "Tylko na Stories - zdjęcie jest idealne",
                  "Tylko jako post - niech zostanie na profilu",
                  "Jako post (trwałe portfolio) + Story z linkiem do posta",
                  "Nigdzie - czekam na więcej zdjęć do serii"
                ],
                correctIndex: 2,
                explanation: "Post buduje portfolio, Story zwiększa jego zasięg. Ta kombinacja maksymalizuje efekt - post zostaje, Story przypomina o nim obserwatorkom."
              }
            }
          ],
          tasks: [
            { id: "stories-task-1", title: "Analiza Stories konkurencji", description: "Obserwuj Stories 3 salonów beauty przez tydzień i zanotuj co robią dobrze." }
          ],
          checklist: [
            { id: "stories-check-1", text: "Wiem, czym są Stories i jak długo są widoczne" },
            { id: "stories-check-2", text: "Rozumiem różnice między Stories a postami" },
            { id: "stories-check-3", text: "Wiem, dlaczego Stories są ważne dla salonu" }
          ],
          keyTakeaways: [
            "Stories to 24-godzinne treści idealne do codziennej komunikacji",
            "Są mniej formalne niż posty i pozwalają na spontaniczność",
            "Regularne Stories zwiększają widoczność profilu"
          ],
          nextLessonTitle: "Co publikować na stories"
        },
        {
          id: "stories-komunikacja-l2",
          title: "Co publikować na stories",
          description: "Poznaj najlepsze pomysły na treści Stories dla salonu beauty.",
          estimatedMinutes: 15,
          intro: "Wielu właścicielek salonów blokuje się przed Stories bo 'nie wie co wrzucać'. Ta lekcja da Ci konkretne pomysły na każdy dzień.",
          objectives: [
            "Poznasz kategorie treści idealnych na Stories",
            "Nauczysz się planować różnorodne Stories",
            "Zrozumiesz zasadę 70-20-10"
          ],
          sections: [
            { id: "stories-l2-1", type: "heading", content: "5 kategorii treści na Stories" },
            { id: "stories-l2-2", type: "text", content: "Kluczem do skutecznych Stories jest różnorodność. Oto 5 kategorii, które powinny rotować na Twoim profilu:" },
            { 
              id: "stories-l2-3", 
              type: "step", 
              stepNumber: 1, 
              content: "KULISY PRACY - Przygotowanie stanowiska, proces zabiegu, organizacja salonu." 
            },
            { 
              id: "stories-l2-4", 
              type: "step", 
              stepNumber: 2, 
              content: "EFEKTY ZABIEGÓW - Przed i po, zbliżenia, metamorfozy." 
            },
            { 
              id: "stories-l2-5", 
              type: "step", 
              stepNumber: 3, 
              content: "EDUKACJA - Porady pielęgnacyjne, obalanie mitów, ciekawostki." 
            },
            { 
              id: "stories-l2-6", 
              type: "step", 
              stepNumber: 4, 
              content: "ŻYCIE CODZIENNE - Poranek, kawa, chwile przerwy. Ludzie kupują od ludzi." 
            },
            { 
              id: "stories-l2-7", 
              type: "step", 
              stepNumber: 5, 
              content: "INFORMACJE - Wolne terminy, promocje, nowości w ofercie." 
            },
            { id: "stories-l2-8", type: "heading", content: "Zasada 70-20-10" },
            { id: "stories-l2-9", type: "text", content: "Proporcje treści, które działają: 70% wartościowych (edukacja, kulisy), 20% budujących relację (życie, humor), 10% sprzedażowych (promocje, terminy)." },
            { id: "stories-l2-10", type: "warning", content: "Jeśli 80% Twoich Stories to promocje i wolne terminy - ludzie przestaną oglądać. Daj wartość, potem sprzedawaj." },
            { 
              id: "stories-l2-11", 
              type: "comparison", 
              content: "Dobry vs zły mix Stories", 
              comparison: { 
                good: { 
                  title: "Dobry mix Stories", 
                  description: "Różnorodność, wartość, relacja",
                  example: "Rano - kawa, W trakcie dnia - efekt zabiegu, Wieczorem - ankieta" 
                }, 
                bad: { 
                  title: "Zły mix Stories", 
                  description: "Monotonny, tylko sprzedaż",
                  example: "Rano - promocja, Południe - promocja, Wieczór - promocja" 
                } 
              } 
            },
            { 
              id: "stories-l2-12", 
              type: "mockup", 
              content: "Story z ankietą - świetny sposób na interakcję:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "poll",
                description: "Ankieta angażuje obserwatorki i pomaga poznać ich preferencje"
              }
            },
            {
              id: "stories-l2-quiz",
              type: "quiz",
              content: "",
              quiz: {
                question: "Masz dzień pełen zabiegów i mało czasu. Jakie Story wrzucisz jako minimum?",
                options: [
                  "Żadne - lepiej nic niż byle co",
                  "Szybkie zdjęcie stanowiska/kawy - 10 sekund roboty",
                  "Profesjonalną grafikę z promocją",
                  "Długi film o nowej usłudze"
                ],
                correctIndex: 1,
                explanation: "Regularnośc > perfekcja. Szybkie, autentyczne Story jest lepsze niż cisza. Obserwatorki wolą widzieć Twój 'prawdziwy' dzień niż dopracowane grafiki."
              }
            },
            { id: "stories-l2-13", type: "tip", content: "Przygotuj sobie listę 20-30 pomysłów na Stories i trzymaj ją w telefonie. Gdy braknie inspiracji - sięgnij po listę." },
            { id: "stories-l2-14", type: "example", content: "20 pomysłów na Stories:\n\n☕ Poranna kawa\n💅 Przygotowanie stanowiska\n✨ Efekt w trakcie/po zabiegu\n📚 Porada pielęgnacyjna\n🎵 Ulubiona muzyka do pracy\n📅 Wolne terminy\n💬 Pytanie do obserwatorek\n🛍️ Nowy produkt\n🎬 Za kulisami\n😊 Zadowolona klientka (za zgodą)" }
          ],
          tasks: [
            { id: "stories-content-task-1", title: "Lista pomysłów", description: "Stwórz listę minimum 20 pomysłów na Stories dla swojego salonu." }
          ],
          checklist: [
            { id: "stories-content-check-1", text: "Znam 5 głównych kategorii treści na Stories" },
            { id: "stories-content-check-2", text: "Rozumiem zasadę 70-20-10" },
            { id: "stories-content-check-3", text: "Mam listę pomysłów na Stories" }
          ],
          keyTakeaways: [
            "Różnorodność treści jest kluczem",
            "Stosuj zasadę 70-20-10",
            "Miej przygotowaną listę pomysłów"
          ],
          nextLessonTitle: "Częstotliwość relacji"
        },
        {
          id: "stories-komunikacja-l3",
          title: "Częstotliwość relacji",
          description: "Dowiedz się, jak często publikować Stories.",
          estimatedMinutes: 10,
          intro: "Za mało Stories = niewidoczność. Za dużo = irytacja. Znajdźmy złoty środek dla Twojego salonu.",
          objectives: [
            "Poznasz optymalną częstotliwość publikowania",
            "Nauczysz się planować Stories w ciągu dnia"
          ],
          sections: [
            { id: "stories-l3-1", type: "heading", content: "Ile Stories dziennie?" },
            { id: "stories-l3-2", type: "text", content: "Rekomendowana liczba to 3-7 Stories dziennie. Minimum to 1 Story dziennie, żeby utrzymać widoczność. Więcej niż 10 może przytłaczać." },
            { id: "stories-l3-3", type: "tip", content: "Jakość > ilość. Lepiej 3 angażujące Stories niż 10 przypadkowych zdjęć." },
            { id: "stories-l3-4", type: "heading", content: "Rozkład Stories w ciągu dnia" },
            { id: "stories-l3-5", type: "text", content: "Nie wrzucaj wszystkich Stories naraz! Rozłóż je w czasie, żeby być 'obecną' przez cały dzień:" },
            { 
              id: "stories-l3-6", 
              type: "step", 
              stepNumber: 1, 
              content: "RANO (7-9) - Powitanie dnia, kawa, przygotowanie salonu." 
            },
            { 
              id: "stories-l3-7", 
              type: "step", 
              stepNumber: 2, 
              content: "POŁUDNIE (12-14) - Kulisy pracy, efekty zabiegów." 
            },
            { 
              id: "stories-l3-8", 
              type: "step", 
              stepNumber: 3, 
              content: "PO POŁUDNIU (16-18) - Edukacja, porady." 
            },
            { 
              id: "stories-l3-9", 
              type: "step", 
              stepNumber: 4, 
              content: "WIECZÓR (20-22) - Podsumowanie, ankieta, pytanie." 
            },
            { 
              id: "stories-l3-10", 
              type: "comparison", 
              content: "Rozplanowanie Stories", 
              comparison: { 
                good: { 
                  title: "Dobre rozplanowanie", 
                  description: "Rozłożone w czasie, różnorodne",
                  example: "8:00 - dzień dobry, 12:00 - zabieg, 18:00 - porada, 21:00 - ankieta" 
                }, 
                bad: { 
                  title: "Złe rozplanowanie", 
                  description: "Wszystko naraz, potem cisza",
                  example: "10:00 - 8 Stories naraz, potem nic do następnego dnia" 
                } 
              } 
            },
            {
              id: "stories-l3-quiz",
              type: "quiz",
              content: "",
              quiz: {
                question: "Jest niedziela, masz wolne. Czy wrzucasz Stories?",
                options: [
                  "Nie - to mój dzień wolny",
                  "Tak, ale tylko jedno - np. niedzielna kawa lub relaks",
                  "Tak, pełen program jak w dzień roboczy",
                  "Tylko jeśli mam promocję do ogłoszenia"
                ],
                correctIndex: 1,
                explanation: "Regularność jest ważna, ale nie musisz być 'w trybie pracy'. Jedno lifestyle'owe Story pokazuje Twoją ludzką stronę i utrzymuje widoczność."
              }
            },
            { id: "stories-l3-11", type: "tip", content: "Ustaw przypomnienia w telefonie na publikowanie Stories w kluczowych godzinach." },
            { id: "stories-l3-12", type: "example", content: "Przykładowy harmonogram Stories:\n\n🌅 8:00 - Dzień dobry + kawa\n💅 11:00 - Przygotowanie do zabiegu\n✨ 14:00 - Efekt po zabiegu\n📚 17:00 - Tip pielęgnacyjny\n📅 19:00 - Wolne terminy (jeśli są)\n💬 21:00 - Pytanie/ankieta" }
          ],
          tasks: [
            { id: "frequency-task-1", title: "Plan Stories", description: "Zaplanuj harmonogram Stories na najbliższy tydzień." }
          ],
          checklist: [
            { id: "frequency-check-1", text: "Wiem, ile Stories publikować dziennie" },
            { id: "frequency-check-2", text: "Znam najlepsze godziny na Stories" },
            { id: "frequency-check-3", text: "Mam ustawione przypomnienia" }
          ],
          keyTakeaways: [
            "Publikuj 3-7 Stories dziennie",
            "Rozłóż Stories w czasie - nie wrzucaj wszystkiego naraz",
            "Regularność ważniejsza niż perfekcja"
          ],
          nextLessonTitle: "Interakcje z odbiorcami"
        },
        {
          id: "stories-komunikacja-l4",
          title: "Interakcje z odbiorcami",
          description: "Naucz się wykorzystywać interaktywne funkcje Stories.",
          estimatedMinutes: 15,
          intro: "Interaktywne naklejki to nie gadżet - to potężne narzędzie do budowania społeczności wokół Twojego salonu.",
          objectives: [
            "Poznasz interaktywne naklejki",
            "Nauczysz się zachęcać do interakcji"
          ],
          sections: [
            { id: "stories-l4-1", type: "heading", content: "Dlaczego interakcje są tak ważne?" },
            { id: "stories-l4-2", type: "text", content: "Każda interakcja (głos w ankiecie, odpowiedź, reakcja) sygnalizuje algorytmowi, że Twoje treści są wartościowe. Więcej interakcji = więcej widoczności." },
            { id: "stories-l4-3", type: "heading", content: "Interaktywne naklejki" },
            { 
              id: "stories-l4-4", 
              type: "step", 
              stepNumber: 1, 
              content: "ANKIETA - Dwa przyciski do wyboru. Idealna na szybkie pytania." 
            },
            { 
              id: "stories-l4-5", 
              type: "step", 
              stepNumber: 2, 
              content: "SUWAK - Ocena na skali z emoji. Świetna do opinii." 
            },
            { 
              id: "stories-l4-6", 
              type: "step", 
              stepNumber: 3, 
              content: "QUIZ - Pytanie z wieloma odpowiedziami. Do edukacji." 
            },
            { 
              id: "stories-l4-7", 
              type: "step", 
              stepNumber: 4, 
              content: "PYTANIE - Pole do wpisania odpowiedzi. Buduje głębszą relację." 
            },
            { id: "stories-l4-8", type: "heading", content: "Jak formułować pytania?" },
            { id: "stories-l4-9", type: "text", content: "Dobre pytanie jest proste, konkretne i łatwe do odpowiedzi. Unikaj pytań zbyt ogólnych lub wymagających długiego zastanowienia." },
            { 
              id: "stories-l4-10", 
              type: "comparison", 
              content: "Pytania w Stories", 
              comparison: { 
                good: { 
                  title: "Angażujące pytanie", 
                  description: "Konkretne, łatwe, zabawne",
                  example: "Klasyczne przedłużanie czy efekt mokrych rzęs? Głosuj!" 
                }, 
                bad: { 
                  title: "Słabe pytanie", 
                  description: "Ogólne, wymaga wysiłku",
                  example: "Co myślicie o trendach w stylizacji rzęs?" 
                } 
              } 
            },
            { 
              id: "stories-l4-11", 
              type: "mockup", 
              content: "Story z pytaniem otwartym:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "question",
                description: "Pytania otwarte budują głębszą relację z obserwatorkami"
              }
            },
            { id: "stories-l4-12", type: "warning", content: "ZAWSZE odpowiadaj na odpowiedzi! Jeśli ktoś poświęcił czas żeby napisać, zasługuje na reakcję. To buduje lojalność." },
            {
              id: "stories-l4-quiz",
              type: "quiz",
              content: "",
              quiz: {
                question: "Wrzuciłaś Story z ankietą i dostałaś 50 głosów. Co teraz?",
                options: [
                  "Nic - ankieta się skończyła",
                  "Podziękujesz w następnym Story i pokażesz wyniki",
                  "Wyślesz DM do każdej osoby, która głosowała",
                  "Wrzucisz kolejną ankietę"
                ],
                correctIndex: 1,
                explanation: "Pokazanie wyników i podziękowanie zamyka pętlę interakcji. Ludzie widzą, że ich głos miał znaczenie - to motywuje do kolejnych interakcji."
              }
            },
            { id: "stories-l4-13", type: "tip", content: "Odpowiadaj na wiadomości w ciągu 24 godzin. Szybka reakcja = więcej interakcji w przyszłości." },
            { id: "stories-l4-14", type: "example", content: "Pomysły na interaktywne Stories:\n\n📊 ANKIETA: \"Bordowy czy nude? Co na jesień?\"\n😍 SUWAK: \"Jak bardzo kochasz ten kolor?\" + emoji serca\n❓ QUIZ: \"Ile trwa hybrydowy manicure?\" (edukacja)\n💬 PYTANIE: \"O czym chciałabyś zobaczyć post?\"" }
          ],
          tasks: [
            { id: "interaction-task-1", title: "Tydzień interakcji", description: "Przez tydzień dodawaj naklejkę interaktywną do minimum jednego Story dziennie." }
          ],
          checklist: [
            { id: "interaction-check-1", text: "Znam rodzaje interaktywnych naklejek" },
            { id: "interaction-check-2", text: "Wiem, jak formułować angażujące pytania" },
            { id: "interaction-check-3", text: "Odpowiadam na wszystkie interakcje" }
          ],
          keyTakeaways: [
            "Interaktywne naklejki zwiększają zaangażowanie",
            "Zadawaj proste pytania z jasnymi opcjami",
            "Zawsze odpowiadaj na odpowiedzi"
          ],
          nextLessonTitle: "Stories sprzedażowe"
        },
        {
          id: "stories-komunikacja-l5",
          title: "Stories sprzedażowe",
          description: "Naucz się wykorzystywać Stories do promowania usług.",
          estimatedMinutes: 12,
          intro: "Stories sprzedażowe mogą być skuteczne BEZ bycia nachalnymi. Kluczem jest proporcja i sposób prezentacji.",
          objectives: [
            "Poznasz techniki sprzedaży przez Stories",
            "Nauczysz się tworzyć skuteczne Stories promocyjne"
          ],
          sections: [
            { id: "stories-l5-1", type: "heading", content: "Zasada 10%" },
            { id: "stories-l5-2", type: "text", content: "Stories sprzedażowe (promocje, wolne terminy, zachęty do rezerwacji) powinny stanowić maksymalnie 10% Twoich treści. Więcej = ludzie przestaną oglądać." },
            { id: "stories-l5-3", type: "heading", content: "Rodzaje Stories sprzedażowych" },
            { 
              id: "stories-l5-4", 
              type: "step", 
              stepNumber: 1, 
              content: "WOLNE TERMINY - 'Mam wolne jutro o 15:00. Kto chętny?'" 
            },
            { 
              id: "stories-l5-5", 
              type: "step", 
              stepNumber: 2, 
              content: "PROMOCJE - Ograniczone czasowo lub ilościowo oferty." 
            },
            { 
              id: "stories-l5-6", 
              type: "step", 
              stepNumber: 3, 
              content: "NOWOŚCI - Nowa usługa, produkt, technika." 
            },
            { 
              id: "stories-l5-7", 
              type: "step", 
              stepNumber: 4, 
              content: "EFEKTY Z CTA - Piękny efekt + 'chcesz tak samo? Pisz!'" 
            },
            { 
              id: "stories-l5-8", 
              type: "step", 
              stepNumber: 5, 
              content: "OPINIE KLIENTEK - Social proof z zachętą do rezerwacji." 
            },
            { id: "stories-l5-9", type: "heading", content: "Struktura skutecznego Story sprzedażowego" },
            { id: "stories-l5-10", type: "text", content: "1. PRZYCIĄGNIJ UWAGĘ - ciekawe zdjęcie/tekst. 2. POKAŻ WARTOŚĆ - co klientka zyska. 3. DAJ CTA - jasne wezwanie do działania." },
            { 
              id: "stories-l5-11", 
              type: "comparison", 
              content: "Stories sprzedażowe", 
              comparison: { 
                good: { 
                  title: "Skuteczne Story", 
                  description: "Pokazuje efekt, daje CTA",
                  example: "Zdjęcie efektu + 'Ostatni wolny termin o 15:00. Napisz CHCĘ!'" 
                }, 
                bad: { 
                  title: "Nieskuteczne Story", 
                  description: "Grafika bez emocji",
                  example: "Grafika 'PROMOCJA -20%' bez zdjęcia efektu" 
                } 
              } 
            },
            { id: "stories-l5-12", type: "heading", content: "Technika FOMO" },
            { id: "stories-l5-13", type: "text", content: "FOMO (Fear Of Missing Out) = strach przed przegapieniem. Ograniczenia czasowe i ilościowe motywują do działania. ALE bądź uczciwa - fałszywe ograniczenia niszczą zaufanie." },
            { id: "stories-l5-14", type: "warning", content: "Nie nadużywaj FOMO. Jeśli co tydzień masz 'ostatnią szansę', nikt nie będzie Ci wierzył." },
            {
              id: "stories-l5-quiz",
              type: "quiz",
              content: "",
              quiz: {
                question: "Masz wolny termin na jutro i chcesz go zapełnić. Jakie Story będzie najskuteczniejsze?",
                options: [
                  "Grafika z tekstem 'WOLNY TERMIN JUTRO'",
                  "Zdjęcie efektu + 'Ostatni termin na jutro! Napisz DM'",
                  "Screen z kalendarza pokazujący wolną godzinę",
                  "Ankieta 'Kto chciałby jutro na paznokcie?'"
                ],
                correctIndex: 1,
                explanation: "Zdjęcie efektu pokazuje WARTOŚĆ (co klientka dostanie), a pilność + jasne CTA motywuje do działania. To kombinacja emocji i konkretnej akcji."
              }
            },
            { id: "stories-l5-15", type: "tip", content: "Najlepsze dni na Stories sprzedażowe to niedziela wieczór i poniedziałek rano - ludzie planują tydzień." },
            { id: "stories-l5-16", type: "example", content: "Sekwencja Stories sprzedażowych:\n\n1️⃣ Story 1: Piękny efekt zabiegu\n2️⃣ Story 2: Historia/proces zabiegu\n3️⃣ Story 3: 'Chcesz tak samo? Mam wolny termin jutro o 15. Napisz DM!' + naklejka pytanie" }
          ],
          tasks: [
            { id: "sales-task-1", title: "Seria sprzedażowa", description: "Stwórz serię 3 Stories: efekt, wartość, CTA dla swojej głównej usługi." }
          ],
          checklist: [
            { id: "sales-check-1", text: "Znam rodzaje Stories sprzedażowych" },
            { id: "sales-check-2", text: "Umiem stosować strukturę: uwaga, wartość, CTA" },
            { id: "sales-check-3", text: "Nie nadużywam techniki FOMO" }
          ],
          keyTakeaways: [
            "Stories sprzedażowe to max 10% treści",
            "Stosuj strukturę: uwaga, wartość, CTA",
            "FOMO działa, ale tylko gdy jest uczciwe"
          ]
        }
      ]
    }
  ]
};
