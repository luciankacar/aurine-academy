import { Course } from "@/types/courses";

export const relacjeZKlientkamiCourse: Course = {
  id: "relacje-z-klientkami",
  title: "Relacje z klientkami",
  description: "Naucz się budować trwałe relacje z klientkami poprzez skuteczną komunikację online.",
  icon: "Heart",
  color: "#ec4899",
  estimatedHours: 3,
  totalLessons: 5,
  modules: [
    {
      id: "relacje-m1",
      title: "Relacje z klientkami",
      description: "Kompleksowy przewodnik po budowaniu relacji z klientkami w branży beauty",
      lessons: [
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 1 - KOMUNIKACJA PRZED WIZYTĄ
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "relacje-l1",
          title: "Komunikacja przed wizytą",
          description: "Jak przygotować klientkę do wizyty i zbudować pozytywne oczekiwania.",
          estimatedMinutes: 18,
          intro: "Pierwsze wrażenie zaczyna się jeszcze przed wizytą. Profesjonalna komunikacja sprawia, że klientka czuje się zaopiekowana od pierwszego kontaktu – a to zmniejsza liczbę nieodwołanych wizyt i buduje lojalność zanim przekroczy próg salonu.",
          sections: [
            // --- SEKCJA 1: Wprowadzenie ---
            {
              id: "relacje-l1-heading-1",
              type: "heading",
              content: "Dlaczego komunikacja przed wizytą decyduje o wszystkim"
            },
            {
              id: "relacje-l1-text-1",
              type: "text",
              content: "Wyobraź sobie dwie sytuacje. W pierwszej klientka umawia się na wizytę i do momentu przyjścia do salonu nie dostaje żadnej wiadomości. Przychodzi trochę niepewna – czy dobrze trafiła? Czy wszystko jest przygotowane? W drugiej sytuacji dostaje dzień wcześniej ciepłe przypomnienie z imieniem, dokładnym czasem, informacją co ją czeka i jak się przygotować. Wchodzi do salonu z uśmiechem, bo czuje się zaopiekowana.\n\nTa różnica to nie kwestia technologii ani nakładu pracy. To kwestia zrozumienia, że **relacja z klientką zaczyna się w momencie zapisania wizyty**, nie w momencie jej rozpoczęcia. Profesjonalne salony budują wrażenie jeszcze zanim klientka przekroczy próg."
            },
            {
              id: "relacje-l1-tip-1",
              type: "tip",
              content: "Salony, które wysyłają profesjonalne potwierdzenia wizyt, mają o 40-60% mniej nieodwołanych wizyt. Klientka, która dostaje przypomnienie, czuje się zobowiązana – albo przyjdzie, albo uprzedzi o zmianie planów."
            },

            // --- SEKCJA 2: Anatomia potwierdzenia ---
            {
              id: "relacje-l1-heading-2",
              type: "heading",
              content: "Kiedy i jak wysyłać potwierdzenie wizyty"
            },
            {
              id: "relacje-l1-text-2",
              type: "text",
              content: "Optymalny czas na wysłanie potwierdzenia to **24 godziny przed wizytą**. Dlaczego akurat tyle? Dłuższy czas (np. 2-3 dni) może zostać zapomniane – klientka przeczyta, pomyśli \"mam czas\" i wypadnie jej z głowy. Krótszy czas (np. 2 godziny) nie daje możliwości reakcji – jeśli coś jej wypadło, nie zdąży przełożyć wizyty i po prostu nie przyjdzie.\n\n24 godziny to złoty środek: wystarczająco blisko, żeby pamiętała, ale z marginesem na ewentualne zmiany. Wyjątek to weekendowe wizyty – jeśli wizyta jest w poniedziałek rano, wyślij potwierdzenie w piątek po południu, bo w weekend możesz nie dostać odpowiedzi na czas."
            },
            {
              id: "relacje-l1-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Wyślij przypomnienie 24h przed wizytą** – to optymalny czas na ewentualną zmianę terminu. Klientka ma szansę zareagować, a Ty możesz zapełnić ewentualną lukę w grafiku."
            },
            {
              id: "relacje-l1-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Zawrzyj kluczowe informacje** – datę, godzinę, rodzaj zabiegu, przewidywany czas trwania. Klientka nie musi szukać w historii wiadomości ani zgadywać. Ma wszystko w jednym miejscu."
            },
            {
              id: "relacje-l1-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Dodaj instrukcje przygotowawcze** – przy rzęsach: \"przyjdź bez makijażu oczu\", przy manicure: \"zdejmij stary lakier jeśli to możliwe\", przy masażu: \"załóż wygodne ubranie\". To eliminuje niezręczne sytuacje i oszczędza czas."
            },
            {
              id: "relacje-l1-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Personalizuj wiadomość imieniem klientki** – \"Cześć Ania!\" zamiast \"Droga Klientko\". Ta mała różnica zmienia odbiór z automatycznego na osobisty. Klientka czuje, że to wiadomość do niej, nie masowa wysyłka."
            },

            // --- SEKCJA 3: Porównanie wiadomości ---
            {
              id: "relacje-l1-heading-3",
              type: "heading",
              content: "Profesjonalna vs. amatorska wiadomość"
            },
            {
              id: "relacje-l1-text-3",
              type: "text",
              content: "Różnica między profesjonalną a amatorską wiadomością nie polega na długości ani skomplikowaniu. Profesjonalna wiadomość jest **ciepła, konkretna i pomocna**. Amatorska jest sucha, niepełna i sprawia, że klientka musi dopytywać o szczegóły. Zobacz porównanie:"
            },
            {
              id: "relacje-l1-comparison-1",
              type: "comparison",
              content: "Wiadomości potwierdzające wizytę",
              comparison: {
                good: {
                  title: "Profesjonalna wiadomość",
                  description: "Personalizowana, konkretna, ciepła, z instrukcją",
                  example: "Cześć Ania! 💕\n\nPrzypominam o jutrzejszej wizycie:\n📅 Środa, 15 stycznia o 14:00\n💅 Przedłużanie rzęs 1:1\n⏱️ Czas: ok. 2h\n\nPrzyjdź bez makijażu oczu – będzie wygodniej dla nas obu!\n\nDo zobaczenia! 🌸\nKasia"
                },
                bad: {
                  title: "Amatorska wiadomość",
                  description: "Sucha, bezosobowa, niepełna informacji",
                  example: "Wizyta jutro 14"
                }
              }
            },
            {
              id: "relacje-l1-warning-1",
              type: "warning",
              content: "Unikaj przesadnej formalności! \"Szanowna Pani\" i \"Z poważaniem\" brzmią sztywno w kontekście salonu beauty. Klientki oczekują ciepła i bezpośredniości, nie korporacyjnej korespondencji. Pisz jak do znajomej, którą lubisz i szanujesz."
            },

            // --- SEKCJA 4: Mockup story ---
            {
              id: "relacje-l1-heading-4",
              type: "heading",
              content: "Budowanie oczekiwań przez Stories"
            },
            {
              id: "relacje-l1-text-4",
              type: "text",
              content: "Oprócz bezpośrednich wiadomości możesz budować oczekiwania przed wizytami przez Stories na Instagramie. To nie zastępuje osobistego potwierdzenia, ale dodaje element ekscytacji. Klientka, która widzi Twoje Stories o przygotowaniach do pracy, nowych produktach czy inspiracjach, zaczyna się nieświadomie cieszyć na własną wizytę.\n\nMożesz też używać Stories z pytaniami do zbierania preferencji – to angażuje i pokazuje, że zależy Ci na opinii klientek."
            },
            {
              id: "relacje-l1-mockup-1",
              type: "mockup",
              content: "Story z zapytaniem o preferencje przed wizytą:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "question",
                description: "Pytanie o preferencje buduje relację jeszcze przed wizytą i pokazuje, że zależy Ci na zdaniu klientek"
              }
            },

            // --- SEKCJA 5: Emoji i ton ---
            {
              id: "relacje-l1-heading-5",
              type: "heading",
              content: "Emotikony i ton wiadomości"
            },
            {
              id: "relacje-l1-text-5",
              type: "text",
              content: "Emotikony w wiadomościach to temat, który dzieli właścicielki salonów. Jedne uważają je za nieprofesjonalne, inne używają po 10 w każdej wiadomości. Prawda jest pośrodku: **1-3 emoji dodają ciepła i osobistego charakteru**, bez wpływu na profesjonalizm. Więcej zaczyna wyglądać jak wiadomość od nastolatki.\n\nWybieraj emoji pasujące do kontekstu: 💕 🌸 ✨ 💅 dla branży beauty są naturalne. Unikaj zbyt ekspresyjnych 😂🤣🔥 – są dobre w prywatnych rozmowach, ale w komunikacji zawodowej mogą być odebrane jako mało poważne."
            },
            {
              id: "relacje-l1-tip-2",
              type: "tip",
              content: "Złota zasada emoji: używaj ich jak przypraw w kuchni. Szczypka podkreśla smak, nadmiar psuje danie. 1-2 emoji na wiadomość to optimum – dodają ciepła, nie przytłaczają."
            },

            // --- SEKCJA 6: Quiz ---
            {
              id: "relacje-l1-heading-6",
              type: "heading",
              content: "Sprawdź swoją wiedzę"
            },
            {
              id: "relacje-l1-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka umówiła się na przedłużanie rzęs na jutro o 10:00. Co powinna zawierać idealna wiadomość przypominająca?",
                options: [
                  "Tylko godzinę wizyty – reszta jest oczywista",
                  "Datę, godzinę, rodzaj zabiegu, czas trwania i instrukcję (bez makijażu oczu)",
                  "Link do płatności online i regulamin salonu",
                  "Cennik wszystkich usług i prośbę o potwierdzenie"
                ],
                correctIndex: 1,
                explanation: "Kompletna wiadomość zawiera wszystkie praktyczne informacje – klientka wie czego się spodziewać i jak się przygotować. Instrukcja o makijażu oczu pokazuje profesjonalizm i oszczędza czas na wizycie. To buduje zaufanie i redukuje stres."
              }
            },

            // --- SEKCJA 7: Nowe klientki ---
            {
              id: "relacje-l1-heading-7",
              type: "heading",
              content: "Komunikacja z nowymi klientkami"
            },
            {
              id: "relacje-l1-text-6",
              type: "text",
              content: "Przy pierwszej wizycie komunikacja przed przyjściem jest jeszcze ważniejsza. Nowa klientka nie zna Twojego salonu, może być niepewna drogi, czasu, tego czego się spodziewać. Im więcej informacji otrzyma, tym mniejszy stres.\n\nDo standardowego potwierdzenia dla nowych klientek dodaj:\n• **Dokładny adres** z informacją o parkingu lub najbliższym przystanku\n• **Jak Cię znaleźć** – \"wejście od podwórka\" lub \"drugie piętro, domofon 5\"\n• **Co zabrać** – jeśli potrzebujesz zdjęć inspiracji, poinformuj wcześniej\n• **Orientacyjny czas** – żeby mogła zaplanować resztę dnia"
            },
            {
              id: "relacje-l1-example-1",
              type: "example",
              content: "**Szablon potwierdzenia dla nowej klientki:**\n\n\"Cześć [Imię]! 💕\n\nCieszę się, że się do mnie zapisałaś! Oto szczegóły jutrzejszej wizyty:\n\n📅 [Data] o godz. [Godzina]\n💅 [Rodzaj zabiegu]\n⏱️ Czas: ok. [X] minut\n\n📍 Adres: [pełny adres]\n🚗 Parking: [informacja o parkingu]\n🚪 Wejście od [strona], [informacje jak trafić]\n\n[Instrukcje przygotowawcze]\n\nJakbyś miała pytania – pisz śmiało!\n\nDo zobaczenia! 🌸\n[Twoje imię]\""
            },

            // --- SEKCJA 8: Przypomnienia dzień wizyty ---
            {
              id: "relacje-l1-heading-8",
              type: "heading",
              content: "Czy wysyłać przypomnienie w dniu wizyty?"
            },
            {
              id: "relacje-l1-text-7",
              type: "text",
              content: "Dodatkowe przypomnienie w dniu wizyty (np. 2-3 godziny przed) to kwestia dyskusyjna. Z jednej strony redukuje ryzyko zapomnienia, z drugiej może być irytujące dla klientek, które doskonale pamiętają o wizycie i czują się \"pilnowane\".\n\n**Kiedy warto wysłać przypomnienie w dniu wizyty:**\n• Klientka rezerwowała wizytę dawno temu (ponad tydzień)\n• To nowa klientka (może być niepewna)\n• Masz historię nieodwołanych wizyt z tą osobą\n• Wizyta jest na nietypową godzinę (bardzo rano lub późno)\n\n**Kiedy lepiej nie wysyłać:**\n• Stała klientka, która przychodzi regularnie\n• Wizyta była umówiona dzień-dwa wcześniej\n• Klientka potwierdziła wiadomość z poprzedniego dnia"
            },
            {
              id: "relacje-l1-tip-3",
              type: "tip",
              content: "Jeśli wysyłasz przypomnienie w dniu wizyty, zrób to lekko i bez presji: \"Cześć! Widzimy się dziś o 14:00 😊 Czekam na Ciebie!\" – krótko, ciepło, bez \"Proszę potwierdzić obecność\"."
            },

            // --- SEKCJA 9: Automatyzacja ---
            {
              id: "relacje-l1-heading-9",
              type: "heading",
              content: "Automatyzacja vs. osobisty kontakt"
            },
            {
              id: "relacje-l1-text-8",
              type: "text",
              content: "Jeśli masz dużo wizyt, ręczne wysyłanie każdego potwierdzenia może być czasochłonne. Wiele aplikacji do rezerwacji (Booksy, Calendly, polskie systemy) oferuje automatyczne przypomnienia. To świetne rozwiązanie, ale wymaga uwagi.\n\n**Zalety automatyzacji:**\n• Oszczędność czasu – system wysyła sam\n• Niezawodność – nie zapomnisz o żadnym potwierdzeniu\n• Spójność – każda klientka dostaje tę samą jakość komunikacji\n\n**Wady automatyzacji:**\n• Mogą brzmieć sztywno i bezosobowo\n• Brak elastyczności dla wyjątkowych sytuacji\n• Klientka może czuć, że rozmawia z botem, nie z Tobą"
            },
            {
              id: "relacje-l1-text-9",
              type: "text",
              content: "**Złoty środek:** Używaj automatyzacji jako podstawy, ale personalizuj gdzie możesz. Jeśli system pozwala na zmianę treści – napisz ciepłą wiadomość zamiast domyślnej. Dodaj swoje imię na końcu. Przy VIP klientkach rozważ osobistą wiadomość oprócz automatycznej.\n\nPamiętaj: **technologia ma wspierać relację, nie ją zastępować**. Klientka powinna czuć kontakt z Tobą, nie z systemem."
            },

            // --- SEKCJA 10: Prośby o inspiracje ---
            {
              id: "relacje-l1-heading-10",
              type: "heading",
              content: "Zbieranie inspiracji przed wizytą"
            },
            {
              id: "relacje-l1-text-10",
              type: "text",
              content: "Świetnym sposobem na budowanie oczekiwań jest poproszenie klientki o przesłanie inspiracji przed wizytą. To szczególnie wartościowe przy:\n• Stylizacji paznokci (wzory, kolory)\n• Koloryzacji włosów\n• Nowych klientkach (poznanie stylu)\n\nProśba o inspiracje ma kilka zalet. Po pierwsze, klientka czuje się zaangażowana w proces. Po drugie, Ty możesz przygotować się na konkretny styl i ocenić czy jest wykonalny. Po trzecie, eliminuje sytuację \"nie wiem czego chcę\" na fotelu."
            },
            {
              id: "relacje-l1-example-2",
              type: "example",
              content: "**Prośba o inspirację:**\n\n\"Cześć Marta! Zapisuję Cię na stylizację paznokci w piątek o 11:00 💅\n\nJeśli masz już pomysł na wzór lub kolor – wyślij mi zdjęcie inspiracji, to się przygotuję! A jak jeszcze nie wiesz – wymyślimy razem na miejscu 😊\n\nDo piątku!\nKasia\""
            },
            {
              id: "relacje-l1-tip-4",
              type: "tip",
              content: "Nie wywieraj presji na wysłanie inspiracji. Niektóre klientki wiedzą dokładnie czego chcą, inne wolą się zdać na Twój gust. Daj opcję, nie wymagaj. \"Jeśli masz\" zamiast \"Wyślij koniecznie\"."
            },

            // --- SEKCJA 11: Problematyczne sytuacje ---
            {
              id: "relacje-l1-heading-11",
              type: "heading",
              content: "Jak reagować gdy klientka nie odpowiada"
            },
            {
              id: "relacje-l1-text-11",
              type: "text",
              content: "Wysłałaś potwierdzenie, a klientka nie odpowiada. Co robić? Po pierwsze – nie panikuj. Wiele osób czyta wiadomości bez odpowiadania, co nie znaczy, że nie przyjdą. Brak odpowiedzi ≠ anulowanie.\n\nJeśli chcesz się upewnić, a wizyta jest następnego dnia rano, możesz wysłać krótką wiadomość wieczorem: \"Hej, potwierdzam jutrzejszą wizytę o 10:00 – widzimy się? 😊\". To nie jest nachalne, a daje Ci jasność.\n\nJeśli klientka nadal nie odpowiada, masz dwa wyjścia: założyć że przyjdzie i być przygotowaną, lub zadzwonić. Telefon jest bardziej bezpośredni, ale niektóre osoby nienawidzą rozmów telefonicznych. Oceń indywidualnie."
            },
            {
              id: "relacje-l1-warning-2",
              type: "warning",
              content: "Nie wysyłaj wielu wiadomości z rzędu pytając \"Przyjdziesz? Potwierdzasz? Halo?\" – to brzmi desperacko i może zrazić klientkę. Jedna, maksymalnie dwie wiadomości wystarczą."
            },

            // --- SEKCJA 12: Quiz 2 ---
            {
              id: "relacje-l1-heading-12",
              type: "heading",
              content: "Sprawdź się"
            },
            {
              id: "relacje-l1-quiz-2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Nowa klientka zapisuje się na pierwszy raz. Co dodajesz do standardowego potwierdzenia?",
                options: [
                  "Nic – standardowe potwierdzenie wystarczy",
                  "Regulamin salonu i formularz zgody",
                  "Dokładny adres, instrukcję jak trafić i informację o parkingu",
                  "Prośbę o wpłatę zaliczki przed wizytą"
                ],
                correctIndex: 2,
                explanation: "Nowa klientka nie zna Twojego salonu – może być zestresowana szukaniem. Dokładne informacje jak trafić eliminują ten stres i pokazują, że dbasz o jej komfort. Pierwszy kontakt buduje całą przyszłą relację."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "relacje-check-1", text: "Rozumiem dlaczego potwierdzenie 24h przed wizytą jest optymalne" },
            { id: "relacje-check-2", text: "Wiem jakie elementy zawiera profesjonalne potwierdzenie wizyty" },
            { id: "relacje-check-3", text: "Potrafię dopasować ton i ilość emoji do wiadomości" },
            { id: "relacje-check-4", text: "Wiem jak przygotować rozszerzone potwierdzenie dla nowych klientek" },
            { id: "relacje-check-5", text: "Umiem prosić o inspiracje przed wizytą bez wywierania presji" },
            { id: "relacje-check-6", text: "Wiem jak reagować gdy klientka nie odpowiada na potwierdzenie" }
          ],
          keyTakeaways: [
            "Potwierdzaj wizyty 24h wcześniej – to optymalny czas na reakcję klientki i zmniejszenie nieodwołanych wizyt",
            "Kompletna wiadomość zawiera: datę, godzinę, usługę, czas i instrukcje przygotowawcze",
            "Personalizacja imieniem zmienia odbiór z automatycznego na osobisty",
            "Dla nowych klientek dodaj szczegółowe informacje jak trafić do salonu",
            "Technologia wspiera relację, nie zastępuje – personalizuj nawet automatyczne wiadomości"
          ],
          nextLessonTitle: "Komunikacja po wizycie"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 2 - KOMUNIKACJA PO WIZYCIE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "relacje-l2",
          title: "Komunikacja po wizycie",
          description: "Jak utrzymać kontakt po wizycie i zachęcić do powrotu.",
          estimatedMinutes: 20,
          intro: "Większość salonów kończy kontakt z klientką w momencie gdy ta wychodzi za drzwi. A to właśnie follow-up buduje lojalność, generuje polecenia i przekształca jednorazową wizytę w stałą relację. To, co robisz PO wizycie, decyduje czy klientka wróci.",
          sections: [
            // --- SEKCJA 1: Wprowadzenie ---
            {
              id: "relacje-l2-heading-1",
              type: "heading",
              content: "Dlaczego follow-up po wizycie jest tak ważny"
            },
            {
              id: "relacje-l2-text-1",
              type: "text",
              content: "Klientka wyszła z salonu z nowymi paznokciami, rzęsami czy świeżo ufarbowanymi włosami. Jest zadowolona. Co teraz? Większość właścicielek salonów w tym momencie uważa swoją pracę za skończoną. I tu popełniają błąd.\n\nFollow-up – czyli kontakt po wizycie – to jeden z najskuteczniejszych narzędzi budowania lojalności. Pokazuje, że zależy Ci na klientce nawet po jej wyjściu z salonu. Że Twoja troska nie kończy się w momencie płatności.\n\n**Badania pokazują, że salony regularnie wysyłające follow-upy mają o 25-35% wyższy wskaźnik powrotów klientek.** To nie magia – to po prostu dbałość, która się opłaca."
            },
            {
              id: "relacje-l2-tip-1",
              type: "tip",
              content: "Follow-up to także najlepszy moment na zbieranie opinii Google. Klientka zadowolona i świeżo po wizycie chętniej zostawi recenzję niż klientka, do której napiszesz po dwóch tygodniach."
            },

            // --- SEKCJA 2: Timing ---
            {
              id: "relacje-l2-heading-2",
              type: "heading",
              content: "Kiedy wysyłać follow-up – złota zasada timingu"
            },
            {
              id: "relacje-l2-text-2",
              type: "text",
              content: "Timing follow-upu zależy od rodzaju zabiegu i tego, kiedy klientka widzi pełny efekt.\n\n**Paznokcie hybrydowe/żelowe:** 24h po wizycie. Klientka zdążyła już pokazać manicure znajomym, dostała komplementy, jest w dobrym nastroju.\n\n**Przedłużanie rzęs:** 24-48h. Pierwsze godziny po zabiegu rzęsy się układają, dopiero po nocy klientka widzi pełny efekt.\n\n**Koloryzacja włosów:** 24h, ale z uwagą na pierwsze mycie. Możesz napisać przed pierwszym myciem z przypomnieniem o pielęgnacji.\n\n**Zabiegi pielęgnacyjne na twarz:** 24-48h, kiedy skóra się zregenerowała i widać efekty.\n\n**Ogólna zasada:** wyślij follow-up, gdy klientka już widzi efekt i może go ocenić, ale jeszcze pamięta pozytywne doświadczenie z wizyty."
            },
            {
              id: "relacje-l2-step-1",
              type: "step",
              stepNumber: 1,
              content: "**24-48h po zabiegu** – klientka widzi pełny efekt, pamięta pozytywne doświadczenie, jest w odpowiednim nastroju na feedback."
            },
            {
              id: "relacje-l2-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Zapytaj o samopoczucie z efektem** – \"Jak się czujesz z nowymi rzęsami?\" brzmi jak troska, nie jak ankieta. Klientka czuje, że naprawdę Ci zależy."
            },
            {
              id: "relacje-l2-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Przypomnij o pielęgnacji domowej** – to wartość dodana. Pokazujesz ekspertyzyę i troskę o trwałość efektu. Klientka doceni praktyczne wskazówki."
            },
            {
              id: "relacje-l2-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Zostaw otwartą furtkę** – \"Jakby coś – pisz!\" daje klientce poczucie, że może się odezwać z pytaniami. To buduje relację na dłużej."
            },

            // --- SEKCJA 3: Anatomia follow-upu ---
            {
              id: "relacje-l2-heading-3",
              type: "heading",
              content: "Jak brzmi dobry follow-up"
            },
            {
              id: "relacje-l2-text-3",
              type: "text",
              content: "Follow-up nie musi być długi ani skomplikowany. Ma być **ciepły, krótki i pomocny**. Nie chodzi o to, żeby napisać esej – chodzi o to, żeby klientka poczuła, że o niej myślisz.\n\nKluczowe elementy dobrego follow-upu:\n• **Imię** – personalizacja zawsze działa\n• **Pytanie o efekt** – pokazujesz zainteresowanie, nie tylko sprzedajesz\n• **Wartość dodana** – wskazówka pielęgnacyjna, rada praktyczna\n• **Otwarta furtka** – możliwość kontaktu z pytaniami\n\nUnikaj: długich elaboratów, zbyt formalnego tonu, natychmiastowych próśb o recenzję."
            },
            {
              id: "relacje-l2-example-1",
              type: "example",
              content: "**Idealny follow-up po przedłużaniu rzęs:**\n\n\"Cześć Ania! 💕\n\nJak się czujesz z nowymi rzęsami? Mam nadzieję, że się podobają!\n\nPamiętaj o delikatnym czesaniu rano i unikaj olejowych produktów przy oczach. Dzięki temu rzęsy wytrzymają dłużej!\n\nJakby coś się działo – pisz śmiało 😊\nKasia\""
            },
            {
              id: "relacje-l2-comparison-1",
              type: "comparison",
              content: "Porównanie follow-upów",
              comparison: {
                good: {
                  title: "Dobry follow-up",
                  description: "Ciepły, pomocny, bez nachalności",
                  example: "Cześć Kasia! Jak się czujesz z nowymi rzęsami? Pamiętaj o delikatnym czesaniu. Jakby coś – pisz śmiało! 💕"
                },
                bad: {
                  title: "Zły follow-up",
                  description: "Od razu prosi o coś, bez okazania troski",
                  example: "Proszę o opinię w Google. Link: [link]"
                }
              }
            },

            // --- SEKCJA 4: Zbieranie opinii ---
            {
              id: "relacje-l2-heading-4",
              type: "heading",
              content: "Zbieranie opinii – strategia dwóch kroków"
            },
            {
              id: "relacje-l2-text-4",
              type: "text",
              content: "Opinie w Google to złoto dla salonu beauty. Nowe klientki szukające salonu w okolicy zobaczą Twoje recenzje jako pierwsze. Ale jak prosić o opinie, żeby nie wyglądało to na wyłudzanie?\n\n**Nigdy nie proś o opinię w pierwszej wiadomości po wizycie.** To wygląda, jakby jedynym powodem kontaktu było zdobycie recenzji. Klientka może poczuć się użyta.\n\nZamiast tego stosuj **strategię dwóch kroków:**\n1. Pierwszy krok: Wyślij ciepły follow-up z pytaniem o zadowolenie\n2. Drugi krok: Gdy klientka odpowie pozytywnie, poproś o opinię\n\nTa sekwencja jest naturalna. Klientka sama potwierdziła, że jest zadowolona, więc prośba o opinię jest logiczna i nie wywiera presji."
            },
            {
              id: "relacje-l2-warning-1",
              type: "warning",
              content: "Nie wysyłaj prośby o opinię w tej samej wiadomości co follow-up! \"Jak się czujesz? PS. Proszę o opinię\" to najgorszy możliwy scenariusz. Klientka czuje się manipulowana, a to niszczy relację."
            },
            {
              id: "relacje-l2-step-5",
              type: "step",
              stepNumber: 1,
              content: "**Wyślij follow-up** – zapytaj o zadowolenie z efektu, dodaj wskazówkę pielęgnacyjną. Nic więcej."
            },
            {
              id: "relacje-l2-step-6",
              type: "step",
              stepNumber: 2,
              content: "**Poczekaj na odpowiedź** – klientka pisze \"Super, jestem zachwycona!\" lub podobnie."
            },
            {
              id: "relacje-l2-step-7",
              type: "step",
              stepNumber: 3,
              content: "**Podziękuj i poproś o opinię** – \"Cieszę się bardzo! Czy miałabyś chwilkę, żeby zostawić opinię w Google? To bardzo mi pomaga! [link]\""
            },
            {
              id: "relacje-l2-example-2",
              type: "example",
              content: "**Pełna sekwencja zbierania opinii:**\n\n**Wiadomość 1 (24h po wizycie):**\n\"Cześć Ania! Jak się czujesz z nowymi paznokciami? Mam nadzieję, że wytrzymają świetnie! Jakby coś – pisz 💕\"\n\n**Odpowiedź klientki:**\n\"Są idealne, dostałam mnóstwo komplementów! 😍\"\n\n**Wiadomość 2:**\n\"Super, cieszę się! ❤️ Słuchaj, czy miałabyś chwilkę, żeby podzielić się opinią w Google? To naprawdę pomaga i bardzo to doceniam! Oto link: [link]\"\n\nTa sekwencja jest naturalna, ciepła i skuteczna."
            },

            // --- SEKCJA 5: Quiz ---
            {
              id: "relacje-l2-heading-5",
              type: "heading",
              content: "Sprawdź swoją wiedzę"
            },
            {
              id: "relacje-l2-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka po wizycie napisała: \"Super, jestem zachwycona!\". Co teraz robisz?",
                options: [
                  "Nie odpowiadasz – zadowolona klientka nie wymaga reakcji",
                  "Od razu wysyłasz link do Google z prośbą o opinię",
                  "Dziękujesz za feedback i dopiero potem (w osobnej wiadomości) prosisz o opinię",
                  "Proponujesz kolejną wizytę z rabatem"
                ],
                correctIndex: 2,
                explanation: "Najpierw doceń feedback – to naturalna reakcja w rozmowie. Potem (najlepiej w osobnej wiadomości, nawet po kilku minutach) poproś o opinię. Taka sekwencja jest naturalna i nie wygląda jak wyłudzanie recenzji."
              }
            },

            // --- SEKCJA 6: Link do opinii ---
            {
              id: "relacje-l2-heading-6",
              type: "heading",
              content: "Ułatw zostawianie opinii – zasada jednego kliknięcia"
            },
            {
              id: "relacje-l2-text-5",
              type: "text",
              content: "Im łatwiej zostawić opinię, tym więcej ich zbierzesz. To prosta matematyka: każdy dodatkowy krok (szukanie w Google, znajdowanie Twojego profilu, klikanie \"Napisz recenzję\") to moment, w którym część osób rezygnuje.\n\n**Zasada jednego kliknięcia:** Klientka powinna móc zostawić opinię po jednym kliknięciu w link, który wysyłasz. Bez szukania, bez nawigacji.\n\nJak zdobyć bezpośredni link do opinii Google:\n1. Zaloguj się na Google Moja Firma\n2. Przejdź do sekcji \"Opinie\"\n3. Skopiuj link do formularza opinii (wiele poradników online pokazuje jak)\n4. Skróć link przez serwis typu bit.ly jeśli jest bardzo długi"
            },
            {
              id: "relacje-l2-tip-2",
              type: "tip",
              content: "Zapisz skrócony link do opinii Google w notatkach telefonu. Kiedy klientka wyraża zadowolenie, masz go pod ręką i możesz od razu wysłać. Nie musisz szukać za każdym razem."
            },

            // --- SEKCJA 7: Co gdy klientka nie odpowiada ---
            {
              id: "relacje-l2-heading-7",
              type: "heading",
              content: "Co gdy klientka nie odpowiada na follow-up"
            },
            {
              id: "relacje-l2-text-6",
              type: "text",
              content: "Wysłałaś ciepły follow-up, a klientka nie odpowiada. Co teraz? Po pierwsze – nie bierz tego osobiście. Wiele osób po prostu nie odpowiada na wiadomości, nawet jeśli są zadowolone. To nie znaczy, że coś jest nie tak.\n\n**Nie wysyłaj kolejnych wiadomości pytających \"Hej, jak tam?\" lub \"Czekam na odpowiedź\"** – to brzmi jak desperacja.\n\nJeśli klientka nie odpowiada na follow-up:\n• Nie proś o opinię – bez potwierdzenia zadowolenia nie masz podstawy\n• Zapisz sobie, że follow-up został wysłany\n• Przy następnej wizycie możesz zapytać osobiście \"Jak się sprawdziły rzęsy?\"\n\nCzasem brak odpowiedzi to też informacja – może klientka nie jest w pełni zadowolona, ale nie chce konfrontacji. Nie naciskaj."
            },

            // --- SEKCJA 8: Follow-up dla stałych klientek ---
            {
              id: "relacje-l2-heading-8",
              type: "heading",
              content: "Czy wysyłać follow-up stałym klientkom"
            },
            {
              id: "relacje-l2-text-7",
              type: "text",
              content: "Pytanie, które zadaje sobie wiele właścicielek salonów: czy wysyłać follow-up klientce, która przychodzi co 2-3 tygodnie od dwóch lat?\n\nKrótka odpowiedź: **tak, ale rzadziej i w innej formie.**\n\nStała klientka nie potrzebuje follow-upu po każdej wizycie – to może być przytłaczające. Ale od czasu do czasu warto napisać:\n• Po wypróbowaniu nowej usługi lub techniki\n• Po wizytach przed ważnymi okazjami (ślub, impreza)\n• Raz na jakiś czas \"tak po prostu\" z ciepłą wiadomością\n\nStałe klientki to Twoje najcenniejsze relacje. Nie traktuj ich jak oczywiste – okazjonalny follow-up pokazuje, że ich doceniasz."
            },
            {
              id: "relacje-l2-example-3",
              type: "example",
              content: "**Follow-up dla stałej klientki po ważnej okazji:**\n\n\"Cześć Magda! Jak było na weselu? 💒 Mam nadzieję, że paznokcie wytrzymały wszystkie tańce! 💃 Daj znać jak wrażenia 😊\"\n\nTo nie jest o paznokciach – to jest o relacji. Klientka czuje, że pamiętasz o jej życiu."
            },

            // --- SEKCJA 9: Pielęgnacja i wartość dodana ---
            {
              id: "relacje-l2-heading-9",
              type: "heading",
              content: "Wskazówki pielęgnacyjne jako wartość dodana"
            },
            {
              id: "relacje-l2-text-8",
              type: "text",
              content: "Follow-up to doskonały moment na dzielenie się wiedzą. Wskazówki pielęgnacyjne po zabiegu to:\n• **Wartość dla klientki** – uczy się jak dbać o efekt\n• **Pokazanie ekspertyzy** – wzmacnia Twój wizerunek profesjonalistki\n• **Powód do kontaktu** – masz \"excuse\" do napisania bez bycia nachalną\n• **Przedłużenie efektu** – zadowolona klientka to powracająca klientka\n\nPrzykłady wskazówek:\n• Rzęsy: delikatne czesanie, unikanie olejów, jak spać\n• Paznokcie: nawilżanie skórek, unikanie gorącej wody pierwszego dnia\n• Włosy: pierwszy szampon po koloryzacji, maski odżywcze\n• Twarz: unikanie makijażu przez X godzin, nawilżanie"
            },
            {
              id: "relacje-l2-tip-3",
              type: "tip",
              content: "Przygotuj sobie szablony wskazówek pielęgnacyjnych dla każdej usługi. Możesz je wysyłać jako część follow-upu lub nawet jako infografikę na Stories do zapisania. To pozycjonuje Cię jako eksperta i oszczędza czas."
            },

            // --- SEKCJA 10: Automatyzacja follow-upów ---
            {
              id: "relacje-l2-heading-10",
              type: "heading",
              content: "Automatyzacja follow-upów – za i przeciw"
            },
            {
              id: "relacje-l2-text-9",
              type: "text",
              content: "Czy można automatyzować follow-upy? Tak, ale z rozwagą.\n\n**Automatyzacja działa dobrze dla:**\n• Wysyłki przypomnienia o pielęgnacji (np. automatyczny SMS 24h po wizycie)\n• Przypomnienia o kolejnej wizycie (np. \"Minęły 3 tygodnie od przedłużania rzęs – czas na uzupełnienie!\")\n• Życzeń urodzinowych (z systemem CRM)\n\n**Automatyzacja NIE działa dobrze dla:**\n• Osobistych follow-upów z pytaniem o zadowolenie (brzmią sztucznie)\n• Zbierania opinii (wymagają naturalnej sekwencji konwersacji)\n• Reagowania na problemy (muszą być indywidualne)\n\n**Złota zasada:** Automatyzuj logistykę, personalizuj emocje. Przypomnienie o wizycie może być automatyczne. Pytanie \"Jak Ci się podobają nowe rzęsy?\" powinno być osobiste."
            },

            // --- SEKCJA 11: Quiz 2 ---
            {
              id: "relacje-l2-heading-11",
              type: "heading",
              content: "Sprawdź się"
            },
            {
              id: "relacje-l2-quiz-2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Kiedy wysłać follow-up po przedłużaniu rzęs?",
                options: [
                  "Natychmiast po wyjściu z salonu",
                  "Za tydzień, żeby klientka mogła ocenić trwałość",
                  "24-48 godzin po wizycie, gdy klientka widzi pełny efekt",
                  "Tylko gdy klientka sama napisze pierwsza"
                ],
                correctIndex: 2,
                explanation: "24-48 godzin to optymalny czas – rzęsy się już ułożyły po pierwszej nocy, klientka widzi pełny efekt i może go ocenić. Jednocześnie wciąż pamięta pozytywne wrażenia z wizyty. To idealne okno na follow-up."
              }
            },

            // --- SEKCJA 12: Śledzenie follow-upów ---
            {
              id: "relacje-l2-heading-12",
              type: "heading",
              content: "Jak śledzić wysłane follow-upy"
            },
            {
              id: "relacje-l2-text-10",
              type: "text",
              content: "Przy kilkunastu wizytach tygodniowo łatwo zgubić się w tym, komu wysłałaś follow-up, a komu nie. Prosty system śledzenia to podstawa.\n\n**Metoda notatnika:** Po każdej wizycie zapisz:\n• Imię klientki i datę wizyty\n• Co robiłyście\n• Status follow-upu: \"do wysłania\" / \"wysłany\" / \"odpowiedziała\"\n\n**Metoda kalendarza:** W kalendarzu ustaw przypomnienie 24h po każdej wizycie z nazwą klientki. Kiedy przypomnienie przyjdzie – wysyłasz follow-up.\n\n**Metoda aplikacji:** Jeśli używasz Booksy lub podobnej aplikacji, sprawdź czy ma funkcję follow-upów lub notatek przy klientkach.\n\nNieważne jaką metodę wybierzesz – ważne, żebyś miała system i się go trzymała."
            }
          ],
          tasks: [],
          checklist: [
            { id: "relacje-l2-check-1", text: "Rozumiem dlaczego follow-up po wizycie buduje lojalność" },
            { id: "relacje-l2-check-2", text: "Wiem jaki jest optymalny timing follow-upu dla różnych zabiegów" },
            { id: "relacje-l2-check-3", text: "Potrafię stworzyć ciepły follow-up z wartością dodaną" },
            { id: "relacje-l2-check-4", text: "Stosuję strategię dwóch kroków przy zbieraniu opinii" },
            { id: "relacje-l2-check-5", text: "Mam link do opinii Google pod ręką" },
            { id: "relacje-l2-check-6", text: "Wiem co automatyzować, a co personalizować" },
            { id: "relacje-l2-check-7", text: "Mam system śledzenia wysłanych follow-upów" }
          ],
          keyTakeaways: [
            "Follow-up 24-48h po wizycie pokazuje troskę i buduje lojalność – salony z follow-upami mają o 25-35% więcej powrotów",
            "Nigdy nie proś o opinię w pierwszej wiadomości – najpierw zapytaj o zadowolenie, potem proś o recenzję",
            "Wskazówki pielęgnacyjne to wartość dodana, która pozycjonuje Cię jako eksperta",
            "Automatyzuj logistykę, personalizuj emocje – przypomnienia mogą być automatyczne, pytania o zadowolenie powinny być osobiste",
            "Prowadź prosty system śledzenia follow-upów – nie możesz polepszyć tego, czego nie mierzysz"
          ],
          nextLessonTitle: "Wiadomości prywatne"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 3 - WIADOMOŚCI PRYWATNE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "relacje-l3",
          title: "Wiadomości prywatne",
          description: "Jak profesjonalnie odpowiadać na wiadomości i budować relacje.",
          estimatedMinutes: 18,
          intro: "Wiadomości prywatne (Messenger i Instagram DM) to często pierwszy kontakt potencjalnej klientki z Twoim salonem. To od jakości tej wymiany zależy, czy umówi wizytę, czy pójdzie do konkurencji. Sposób odpowiedzi decyduje o tym, czy zdobędziesz klientkę – niezależnie jak piękne masz portfolio.",
          sections: [
            // --- SEKCJA 1: Wprowadzenie ---
            {
              id: "relacje-l3-heading-1",
              type: "heading",
              content: "Złota zasada wiadomości prywatnych"
            },
            {
              id: "relacje-l3-text-1",
              type: "text",
              content: "Zapamiętaj jedno: **Szybkość + Konkret = Rezerwacja.**\n\nKlientka szukająca salonu pisze do kilku miejsc jednocześnie. Porównuje oferty, sprawdza dostępność, ocenia reakcje. Salon, który odpowie szybko, konkretnie i profesjonalnie, ma ogromną przewagę.\n\nTo nie jest tylko teoria. Badania pokazują, że **ponad 50% klientek wybiera salon, który odpowiedział jako pierwszy** – pod warunkiem, że odpowiedź była merytoryczna. Szybkość bez treści nie wystarczy, ale sama treść bez szybkości też nie."
            },
            {
              id: "relacje-l3-tip-1",
              type: "tip",
              content: "Klientka, która pisze do 5 salonów, wybierze ten, który odpowie szybko I profesjonalnie. Jeśli odpowiesz po 2 dniach – prawdopodobnie jest już umówiona gdzie indziej. Traktujesz wiadomości jak gorącą linię, nie jak skrzynkę e-mail."
            },

            // --- SEKCJA 2: Czas odpowiedzi ---
            {
              id: "relacje-l3-heading-2",
              type: "heading",
              content: "Ile czasu masz na odpowiedź"
            },
            {
              id: "relacje-l3-text-2",
              type: "text",
              content: "Idealny czas odpowiedzi to **do 2 godzin** w godzinach pracy. Akceptowalny to **do 4 godzin**. Powyżej – tracisz przewagę konkurencyjną.\n\nOczywiście nie zawsze jest to możliwe. Kiedy robisz zabieg, nie możesz jednocześnie odpisywać na wiadomości. Ale możesz:\n• Sprawdzać wiadomości między klientkami\n• Ustawić automatyczną odpowiedź o przewidywanym czasie reakcji\n• Przeznaczyć 10 minut rano i po pracy na obsługę wiadomości\n\nWieczorem i w weekendy oczekiwania są niższe, ale i tak staraj się odpowiadać w ciągu kilku godzin. Klientka, która pisze w sobotę wieczorem, może szukać wolnego terminu na poniedziałek."
            },
            {
              id: "relacje-l3-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Odpowiadaj w ciągu 2-4 godzin** – w godzinach pracy jest to standard. Im szybciej, tym lepiej, ale jakość ważniejsza niż pęd."
            },
            {
              id: "relacje-l3-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Włącz powiadomienia** – musisz wiedzieć, że ktoś napisał. Wyłączone powiadomienia = przegapione klientki."
            },
            {
              id: "relacje-l3-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Sprawdzaj oba kanały** – Messenger i Instagram DM. Klientki piszą tam, gdzie Cię znalazły. Nie możesz być obecna tylko w jednym miejscu."
            },

            // --- SEKCJA 3: Struktura odpowiedzi ---
            {
              id: "relacje-l3-heading-3",
              type: "heading",
              content: "Anatomia idealnej odpowiedzi"
            },
            {
              id: "relacje-l3-text-3",
              type: "text",
              content: "Każda odpowiedź na zapytanie klientki powinna zawierać **4 elementy**:\n\n1. **Ciepłe powitanie** – \"Cześć!\" zamiast \"Dzień dobry\". Branża beauty jest nieformalna, klientki oczekują ciepła.\n\n2. **Odpowiedź na pytanie** – konkretna, pełna informacja. Jeśli pytają o cenę – podaj cenę. Jeśli o dostępność – podaj terminy.\n\n3. **Wartość dodana** – coś ekstra, czego nie pytały. Czas zabiegu, co zawiera usługa, jak się przygotować.\n\n4. **Pytanie lub propozycja** – zawsze kończ wiadomość kierunkiem. \"Który termin Ci pasuje?\" lub \"Zarezerwować?\". Nigdy nie zostawiaj rozmowy bez następnego kroku."
            },
            {
              id: "relacje-l3-example-1",
              type: "example",
              content: "**Klientka pyta:** \"Ile kosztują paznokcie hybrydowe?\"\n\n**Idealna odpowiedź:**\n\"Cześć! 💕\n\nManicure hybrydowy to 120 zł, zabieg trwa ok. 60-90 min.\n\nMam wolne terminy:\n📅 Czwartek 14:00\n📅 Piątek 10:00 lub 16:00\n📅 Sobota 11:00\n\nKtóry Ci pasuje? 😊\"\n\n---\n\n**Dlaczego to działa:**\n• Odpowiada na pytanie (cena)\n• Dodaje wartość (czas)\n• Proponuje terminy (ułatwia decyzję)\n• Kończy pytaniem (kieruje rozmowę)"
            },

            // --- SEKCJA 4: Czego unikać ---
            {
              id: "relacje-l3-heading-4",
              type: "heading",
              content: "Czego absolutnie unikać w odpowiedziach"
            },
            {
              id: "relacje-l3-comparison-1",
              type: "comparison",
              content: "Odpowiedzi na pytanie o cenę",
              comparison: {
                good: {
                  title: "Profesjonalna odpowiedź",
                  description: "Konkretna, z propozycją terminów, ciepła",
                  example: "Cześć! Przedłużanie klasyczne to 150zł, zabieg trwa ok. 2h. Mam wolne jutro o 12 lub w piątek o 10. Który Ci pasuje? 💕"
                },
                bad: {
                  title: "Słaba odpowiedź",
                  description: "Odsyła, nie proponuje niczego konkretnego",
                  example: "Cennik mam w wyróżnionych relacjach"
                }
              }
            },
            {
              id: "relacje-l3-warning-1",
              type: "warning",
              content: "Nigdy nie odsyłaj klientki \"do cennika w wyróżnionych\" lub \"na stronę\". To dodatkowy krok, który wiele osób nie zrobi. Odpowiadaj bezpośrednio na pytanie – nawet jeśli masz cennik gdzie indziej. Każde \"sprawdź sobie\" to potencjalnie stracona klientka."
            },
            {
              id: "relacje-l3-text-4",
              type: "text",
              content: "**Inne błędy do unikania:**\n\n• **Zbyt krótkie odpowiedzi** – \"120 zł\" bez kontekstu brzmi sucho i nieprzyjemnie\n• **Zbyt długie odpowiedzi** – esej o historii salonu zniechęca do czytania\n• **Brak propozycji terminów** – zmuszasz klientkę do pytania \"a kiedy masz wolne?\"\n• **Zostawianie rozmowy otwartej** – \"proszę pisać\" zamiast konkretnej propozycji\n• **Wielokrotne pytania w jednej wiadomości** – \"Jaki kolor? Jaki kształt? Długość?\" przytłacza"
            },

            // --- SEKCJA 5: Quiz ---
            {
              id: "relacje-l3-heading-5",
              type: "heading",
              content: "Sprawdź swoją wiedzę"
            },
            {
              id: "relacje-l3-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka napisała: \"Ile kosztują paznokcie hybrydowe?\". Jak odpowiedzieć, żeby zwiększyć szansę na rezerwację?",
                options: [
                  "Napisz tylko cenę: \"120 zł\" – krótko i na temat",
                  "Odeślij do wyróżnionych relacji z cennikiem",
                  "Podaj cenę + czas + 2-3 propozycje terminów + pytanie zamykające",
                  "Zapytaj najpierw jaki kolor i kształt preferuje"
                ],
                correctIndex: 2,
                explanation: "Kompletna odpowiedź (cena + czas + terminy + pytanie) eliminuje potrzebę kolejnych wiadomości i ułatwia decyzję. Klientka może od razu wybrać termin zamiast zadawać kolejne pytania. To skraca ścieżkę do rezerwacji."
              }
            },

            // --- SEKCJA 6: Szybkie odpowiedzi ---
            {
              id: "relacje-l3-heading-6",
              type: "heading",
              content: "Szybkie odpowiedzi – oszczędzaj czas bez utraty jakości"
            },
            {
              id: "relacje-l3-text-5",
              type: "text",
              content: "Większość pytań, które dostajesz, powtarza się. Cennik, dostępność, lokalizacja, czas zabiegów. Zamiast za każdym razem pisać od nowa, przygotuj **szybkie odpowiedzi** – gotowe szablony, które możesz wysłać lub lekko edytować.\n\nZarówno Messenger jak i Instagram mają wbudowaną funkcję szybkich odpowiedzi (Saved Replies). Możesz też po prostu zapisać je w notatkach telefonu i kopiować.\n\n**Ważne:** Szybkie odpowiedzi to punkt wyjścia, nie finalna wiadomość. Zawsze personalizuj – dodaj imię, jeśli je znasz, dopasuj terminy do aktualnych. Klientka nie powinna czuć, że rozmawia z botem."
            },
            {
              id: "relacje-l3-step-4",
              type: "step",
              stepNumber: 1,
              content: "**Zapisz 5-10 najczęstszych pytań** – cennik usług, dostępne terminy, lokalizacja, czas zabiegów, przygotowanie do wizyty."
            },
            {
              id: "relacje-l3-step-5",
              type: "step",
              stepNumber: 2,
              content: "**Napisz szablon odpowiedzi dla każdego** – ciepły, kompletny, z propozycją następnego kroku."
            },
            {
              id: "relacje-l3-step-6",
              type: "step",
              stepNumber: 3,
              content: "**Ustaw jako szybkie odpowiedzi** – w Messengerze i na Instagramie lub w notatkach telefonu."
            },
            {
              id: "relacje-l3-step-7",
              type: "step",
              stepNumber: 4,
              content: "**Personalizuj przed wysłaniem** – aktualizuj terminy, dodaj imię, dostosuj do pytania."
            },
            {
              id: "relacje-l3-example-2",
              type: "example",
              content: "**5 szybkich odpowiedzi, które powinna mieć każda stylistka:**\n\n1. **Cennik głównej usługi** – cena, czas, dostępne terminy\n2. **Jak dojechać** – adres, parking, instrukcja jak trafić\n3. **Przygotowanie do wizyty** – co ze sobą zabrać, jak się przygotować\n4. **Pytanie o konkretny termin** – potwierdzenie dostępności\n5. **Podziękowanie za rezerwację** – potwierdzenie umówienia"
            },
            {
              id: "relacje-l3-tip-2",
              type: "tip",
              content: "Aktualizuj szybkie odpowiedzi z terminami co tydzień, najlepiej w poniedziałek rano. Dzięki temu masz zawsze aktualne propozycje pod ręką i nie musisz za każdym razem sprawdzać kalendarza."
            },

            // --- SEKCJA 7: Konwersja na rezerwację ---
            {
              id: "relacje-l3-heading-7",
              type: "heading",
              content: "Jak przekształcić zapytanie w rezerwację"
            },
            {
              id: "relacje-l3-text-6",
              type: "text",
              content: "Nie zostawiaj rozmowy otwartej! Każda wymiana wiadomości powinna prowadzić do konkretnego wyniku – najlepiej rezerwacji.\n\n**Zasada 2-3 terminów:** Zamiast pytać \"Kiedy Ci pasuje?\" (zbyt otwarte), proponuj 2-3 konkretne terminy. To ułatwia decyzję – klientka musi tylko wybrać, nie wymyślać.\n\n**Zasada pytania zamykającego:** Zawsze kończ wiadomość pytaniem lub propozycją. \"Który termin Ci pasuje?\", \"Zarezerwować?\", \"Potwierdzam?\". Nie \"Proszę dać znać\" czy \"W razie pytań pisz\" – to zostawia piłkę po stronie klientki bez kierunku."
            },
            {
              id: "relacje-l3-comparison-2",
              type: "comparison",
              content: "Zamykanie rozmowy",
              comparison: {
                good: {
                  title: "Kieruje do rezerwacji",
                  description: "Konkretne propozycje, jasne pytanie",
                  example: "Mam wolne czwartek 14:00 lub piątek 10:00. Który Ci pasuje? 😊"
                },
                bad: {
                  title: "Zostawia rozmowę otwartą",
                  description: "Brak kierunku, wymaga dodatkowego wysiłku",
                  example: "Daj znać jak chcesz się umówić"
                }
              }
            },

            // --- SEKCJA 8: Trudne sytuacje ---
            {
              id: "relacje-l3-heading-8",
              type: "heading",
              content: "Jak reagować na trudne sytuacje w wiadomościach"
            },
            {
              id: "relacje-l3-text-7",
              type: "text",
              content: "Nie wszystkie wiadomości są proste. Czasem klientka negocjuje cenę, czasem jest niezadowolona, czasem nie pasują jej żadne terminy. Jak reagować?\n\n**Negocjacja ceny:**\nNie obniżaj cen na żądanie – to podważa Twoją wartość. Zamiast tego:\n• Wyjaśnij co zawiera usługa\n• Wspomnij o jakości produktów\n• Jeśli chcesz dać rabat – zaoferuj przy pierwszej wizycie, nie jako ustępstwo\n\n**Brak pasujących terminów:**\nZaproponuj listę oczekujących lub poproś o preferowany dzień/godzinę:\n\"Rozumiem, że te terminy nie pasują. W jaki dzień tygodnia i o której godzinie byłoby Ci wygodnie? Jak tylko będę miała takie okienko – dam znać pierwszej!\"\n\n**Niezadowolenie z poprzedniej wizyty:**\nNie bronić się, tylko słuchać i oferować rozwiązanie:\n\"Przykro mi to słyszeć. Czy mogłabyś mi powiedzieć więcej, co było nie tak? Chętnie to naprawimy.\""
            },
            {
              id: "relacje-l3-quiz-2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka pisze: \"Nie ma terminów, które mi pasują. Macie coś w sobotę po 14:00?\". Co odpowiadasz?",
                options: [
                  "\"Niestety nie, te terminy które podałam to wszystko\"",
                  "\"Sprawdź za tydzień, może coś się zwolni\"",
                  "\"Soboty po 14:00 aktualnie nie mam wolnej, ale zapiszę Cię na listę oczekujących. Jak tylko ktoś anuluje – dam Ci znać pierwszej! A może mogłabym zaproponować piątek 17:00?\"",
                  "\"Nie pracuję w soboty po południu\""
                ],
                correctIndex: 2,
                explanation: "Pokazujesz elastyczność i chęć pomocy, oferujesz listę oczekujących (klientka czuje się priorytetowa) i proponujesz alternatywę. To profesjonalna odpowiedź, która zachowuje szansę na rezerwację."
              }
            },

            // --- SEKCJA 9: Wiadomości głosowe ---
            {
              id: "relacje-l3-heading-9",
              type: "heading",
              content: "Wiadomości głosowe – tak czy nie?"
            },
            {
              id: "relacje-l3-text-8",
              type: "text",
              content: "Wiadomości głosowe dzielą branżę beauty. Niektóre stylistki uwielbiają je za osobisty charakter, inne uważają za nieprofesjonalne.\n\n**Zalety wiadomości głosowych:**\n• Bardziej osobiste – klientka słyszy Twój głos\n• Szybsze dla Ciebie – mówisz zamiast pisać\n• Pokazują zaangażowanie\n\n**Wady wiadomości głosowych:**\n• Nie można ich przeczytać w pracy/komunikacji bez słuchawek\n• Klientka musi odsłuchać całość, żeby znaleźć informację\n• Niektóre osoby ich nie lubią\n\n**Złota zasada:** Na pierwsze zapytanie odpowiadaj pisemnie – to bardziej profesjonalne i łatwiejsze do przeczytania. Wiadomości głosowe zostaw dla dalszych rozmów ze stałymi klientkami, które już znają Twój styl komunikacji."
            },
            {
              id: "relacje-l3-tip-3",
              type: "tip",
              content: "Jeśli wysyłasz wiadomość głosową – bądź zwięzła! Maksymalnie 30-60 sekund. Nikt nie chce słuchać 3-minutowego monologu. Kluczowe informacje (cena, terminy) powtórz na końcu lub wyślij dodatkowo pisemnie."
            },

            // --- SEKCJA 10: Automatyczne odpowiedzi ---
            {
              id: "relacje-l3-heading-10",
              type: "heading",
              content: "Automatyczne odpowiedzi na Messengerze i Instagramie"
            },
            {
              id: "relacje-l3-text-9",
              type: "text",
              content: "Zarówno Messenger jak i Instagram pozwalają ustawić automatyczne odpowiedzi. Są przydatne gdy:\n• Robisz zabieg i nie możesz odpisać\n• Jest poza godzinami pracy\n• Masz przerwę urlopową\n\nAutomatyczna odpowiedź powinna:\n• Potwierdzić otrzymanie wiadomości\n• Podać przewidywany czas odpowiedzi\n• Być ciepła, nie korporacyjna\n\nNie powinna:\n• Zastępować prawdziwej odpowiedzi\n• Brzmieć jak bot lub infolinia\n• Obiecywać czegoś, czego nie dotrzymasz"
            },
            {
              id: "relacje-l3-example-3",
              type: "example",
              content: "**Dobra automatyczna odpowiedź:**\n\n\"Cześć! 💕 Dzięki za wiadomość! Właśnie jestem przy klientce, ale odpiszę jak tylko skończę – zwykle w ciągu 2-3 godzin. Jeśli sprawa pilna – możesz też zadzwonić pod [numer]. Do usłyszenia! 🌸\"\n\n---\n\n**Zła automatyczna odpowiedź:**\n\n\"Wiadomość została otrzymana. Prosimy o cierpliwość, odpowiemy w możliwie najkrótszym terminie.\""
            }
          ],
          tasks: [],
          checklist: [
            { id: "relacje-l3-check-1", text: "Rozumiem zasadę Szybkość + Konkret = Rezerwacja" },
            { id: "relacje-l3-check-2", text: "Odpowiadam na wiadomości w ciągu 2-4 godzin" },
            { id: "relacje-l3-check-3", text: "Znam 4 elementy idealnej odpowiedzi (powitanie, odpowiedź, wartość, pytanie)" },
            { id: "relacje-l3-check-4", text: "Mam przygotowane szybkie odpowiedzi na najczęstsze pytania" },
            { id: "relacje-l3-check-5", text: "Zawsze proponuję konkretne terminy zamiast otwartego 'kiedy Ci pasuje'" },
            { id: "relacje-l3-check-6", text: "Kończę wiadomości pytaniem zamykającym lub propozycją" },
            { id: "relacje-l3-check-7", text: "Ustawiłam ciepłą automatyczną odpowiedź na czas zabiegów" }
          ],
          keyTakeaways: [
            "Szybkość + Konkret = Rezerwacja – odpowiadaj w ciągu 2-4 godzin z pełną informacją",
            "Każda odpowiedź zawiera: ciepłe powitanie, odpowiedź na pytanie, wartość dodaną i pytanie zamykające",
            "Proponuj 2-3 konkretne terminy zamiast pytać 'kiedy Ci pasuje' – ułatwiasz decyzję",
            "Szybkie odpowiedzi oszczędzają czas, ale personalizuj je przed wysłaniem",
            "Nigdy nie odsyłaj do cennika – odpowiadaj bezpośrednio na pytanie klientki"
          ],
          nextLessonTitle: "Komentarze i opinie"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 4 - KOMENTARZE I OPINIE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "relacje-l4",
          title: "Komentarze i opinie",
          description: "Jak reagować na komentarze i zarządzać opiniami online.",
          estimatedMinutes: 18,
          intro: "Komentarze pod postami i opinie w Google to publiczna wizytówka Twojego salonu. Sposób, w jaki na nie reagujesz, obserwują setki potencjalnych klientek. Jedna profesjonalna odpowiedź na trudną opinię może przekonać więcej osób niż dziesięć pozytywnych recenzji.",
          sections: [
            // --- SEKCJA 1: Wprowadzenie ---
            {
              id: "relacje-l4-heading-1",
              type: "heading",
              content: "Dlaczego każdy komentarz i opinia zasługują na odpowiedź"
            },
            {
              id: "relacje-l4-text-1",
              type: "text",
              content: "Komentarz lub opinia to nie tylko interakcja z jedną osobą – to **publiczny pokaz** dla wszystkich, którzy przeglądają Twój profil lub wizytówkę Google. Kiedy odpowiadasz na komentarz, nie piszesz tylko do tej jednej osoby. Piszesz do wszystkich, którzy to zobaczą.\n\nPotencjalna klientka sprawdzająca Twój profil nie tylko patrzy na zdjęcia. Zagląda w komentarze. Czyta odpowiedzi. Ocenia czy chce mieć z Tobą do czynienia. Profesjonalne odpowiedzi budują wizerunek zaangażowanego salonu, który dba o klientki."
            },
            {
              id: "relacje-l4-tip-1",
              type: "tip",
              content: "Algorytmy Facebooka i Instagrama premiują posty z komentarzami. Odpowiadając na komentarze, nie tylko budujesz relacje – zwiększasz też zasięg posta. To podwójna korzyść za jedną czynność."
            },

            // --- SEKCJA 2: Odpowiadanie na komentarze ---
            {
              id: "relacje-l4-heading-2",
              type: "heading",
              content: "Jak odpowiadać na różne typy komentarzy"
            },
            {
              id: "relacje-l4-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Odpowiadaj na KAŻDY komentarz** – nawet proste emoji zasługują na reakcję. Lajk serduszko lub krótkie \"❤️\" wystarczy. Pokazuje, że jesteś obecna i uważna."
            },
            {
              id: "relacje-l4-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Dziękuj za komplementy konkretnie** – \"Dziękuję Aniu! Ta stylizacja to była świetna współpraca 💕\" jest lepsze niż ogólne \"Dzięki!\". Personalizacja i szczegół robią różnicę."
            },
            {
              id: "relacje-l4-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Na pytania odpowiadaj merytorycznie** – jeśli ktoś pyta o cenę lub dostępność, odpowiedz publicznie LUB zaproś do DM. \"Super pytanie! Napisz do mnie prywatnie, dopytam o szczegóły 💕\""
            },
            {
              id: "relacje-l4-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Używaj imienia osoby komentującej** – \"Dziękuję Kasia!\" zamiast \"Dzięki!\". To personalizuje odpowiedź i pokazuje, że widzisz konkretną osobę, nie tylko komentarz."
            },
            {
              id: "relacje-l4-text-2",
              type: "text",
              content: "**Typy komentarzy i jak na nie reagować:**\n\n• **Emotikony (😍❤️🔥)** – Polub serduszkiem lub odpowiedz krótkim emoji. Szybko, ciepło, bez zbędnych słów.\n\n• **Komplementy (\"Piękne!\", \"Super robota!\")** – Podziękuj z personalizacją: \"Dziękuję Magda! Cieszę się, że Ci się podoba 💕\"\n\n• **Pytania (\"Ile to kosztuje?\", \"Masz wolne terminy?\")** – Odpowiedz publicznie krótko lub zaproś do DM: \"Cześć! Napisz do mnie na priv, podam szczegóły 😊\"\n\n• **Oznaczenia znajomych** – Świetne! Odpowiedz ciepło: \"Zapraszam! 💕\" – to potencjalna nowa klientka.\n\n• **Neutralne komentarze** – Przynajmniej polub serduszkiem, żeby pokazać, że widzisz."
            },

            // --- SEKCJA 3: Spójność i ton ---
            {
              id: "relacje-l4-heading-3",
              type: "heading",
              content: "Spójność tonu w komentarzach"
            },
            {
              id: "relacje-l4-text-3",
              type: "text",
              content: "Wszystkie Twoje odpowiedzi powinny mieć spójny ton – ciepły, profesjonalny, z nutą osobowości. To buduje rozpoznawalność i pokazuje, że za profilem stoi prawdziwa osoba z charakterem, nie automat.\n\nJeśli Twój styl to emotikony i ciepło (\"Dzięki Aniu! 💕🌸\") – trzymaj się tego we wszystkich odpowiedziach. Jeśli wolisz bardziej minimalistyczny styl – też OK, ale bądź konsekwentna.\n\nUnikaj mieszania formalnego (\"Dziękujemy Państwu za miłe słowa\") z nieformalnym (\"Super że Ci się podoba!!\") – to myli odbiór."
            },
            {
              id: "relacje-l4-example-1",
              type: "example",
              content: "**Spójny ciepły styl:**\n\nKomentarz: \"Przepiękne 😍\"\nOdpowiedź: \"Dziękuję Ola! 💕\"\n\nKomentarz: \"Chcę takie same!\"\nOdpowiedź: \"Zapraszam! Napisz do mnie na priv 🌸\"\n\nKomentarz: \"Super robota!\"\nOdpowiedź: \"Cieszę się bardzo! Dziękuję Kasia! ❤️\"\n\n---\n\nWszystkie odpowiedzi są ciepłe, z emoji, personalizowane imieniem. To buduje spójny wizerunek."
            },

            // --- SEKCJA 4: Negatywne opinie ---
            {
              id: "relacje-l4-heading-4",
              type: "heading",
              content: "Negatywne opinie – szansa, nie katastrofa"
            },
            {
              id: "relacje-l4-text-4",
              type: "text",
              content: "Negatywna opinia w Google lub komentarz pod postem to moment, którego większość właścicielek salonów się boi. Ale to właśnie **profesjonalna reakcja na krytykę może przekonać więcej osób niż dziesiątki pozytywnych recenzji**.\n\nDlaczego? Bo potencjalne klientki szukają odpowiedzi na pytanie: \"Co się stanie, jeśli coś pójdzie nie tak?\". Jeśli widzą, że na negatywną opinię reagujesz spokojnie, z empatią i chęcią pomocy – czują się bezpieczniej.\n\nPamiętaj: **nie możesz kontrolować co ktoś napisze, ale możesz kontrolować jak zareagujesz**. I ta reakcja jest publiczna – obserwuje ją każda potencjalna klientka."
            },
            {
              id: "relacje-l4-warning-1",
              type: "warning",
              content: "NIGDY nie usuwaj negatywnych opinii (chyba że są obraźliwe lub spamowe) i absolutnie NIGDY nie wdawaj się w publiczne kłótnie. Nawet jeśli masz 100% racji – publiczna kłótnia zawsze wygląda źle. Odpowiedz spokojnie i przenieś rozmowę do DM."
            },

            // --- SEKCJA 5: Schemat odpowiedzi na negatywną opinię ---
            {
              id: "relacje-l4-heading-5",
              type: "heading",
              content: "5-krokowy schemat odpowiedzi na krytykę"
            },
            {
              id: "relacje-l4-step-5",
              type: "step",
              stepNumber: 1,
              content: "**Podziękuj za feedback** – nawet jeśli jest negatywny. \"Dziękuję za podzielenie się opinią\" pokazuje dojrzałość i otwartość na feedback."
            },
            {
              id: "relacje-l4-step-6",
              type: "step",
              stepNumber: 2,
              content: "**Wyraź żal lub empatię** – \"Przykro mi, że efekt nie spełnił oczekiwań\" lub \"Rozumiem Pani rozczarowanie\". Nie przepraszasz za coś, czego nie zrobiłaś – wyrażasz empatię."
            },
            {
              id: "relacje-l4-step-7",
              type: "step",
              stepNumber: 3,
              content: "**Nie tłumacz się publicznie** – szczegółowe wyjaśnienia brzmiały by jak wymówki. Zachowaj je na prywatną rozmowę."
            },
            {
              id: "relacje-l4-step-8",
              type: "step",
              stepNumber: 4,
              content: "**Zaproponuj kontakt prywatny** – \"Proszę o wiadomość prywatną, chętnie porozmawiamy o szczegółach\" lub \"Zapraszam do kontaktu bezpośredniego\"."
            },
            {
              id: "relacje-l4-step-9",
              type: "step",
              stepNumber: 5,
              content: "**Obiecaj rozwiązanie** – \"Chętnie to naprawimy\" lub \"Zrobimy wszystko, żeby znaleźć rozwiązanie\". Pokazujesz, że zależy Ci na satysfakcji."
            },
            {
              id: "relacje-l4-comparison-1",
              type: "comparison",
              content: "Reakcja na negatywną opinię",
              comparison: {
                good: {
                  title: "Profesjonalna reakcja",
                  description: "Spokojnie, z empatią, oferuje rozwiązanie",
                  example: "Dziękuję za opinię. Przykro mi, że efekt nie spełnił oczekiwań. Proszę o kontakt w wiadomości prywatnej – chętnie znajdziemy rozwiązanie. 💕"
                },
                bad: {
                  title: "Defensywna reakcja",
                  description: "Obwinia klientkę, broni się publicznie",
                  example: "To nieprawda! Sama Pani źle dbała o rzęsy i nie stosowała się do zaleceń!"
                }
              }
            },

            // --- SEKCJA 6: Quiz ---
            {
              id: "relacje-l4-heading-6",
              type: "heading",
              content: "Sprawdź swoją wiedzę"
            },
            {
              id: "relacje-l4-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka napisała negatywną opinię w Google: \"Hybryda odpadła po 3 dniach, fatalny salon, nie polecam!\". Co robisz?",
                options: [
                  "Usuwasz opinię – nie chcesz żeby inni to widzieli",
                  "Piszesz publiczną odpowiedź tłumaczącą, że to wina klientki bo nie stosowała się do zaleceń",
                  "Odpowiadasz spokojnie z podziękowaniem za feedback, wyrażeniem żalu i propozycją kontaktu prywatnego",
                  "Ignorujesz – nie warto karmić hejterów i dawać im platformy"
                ],
                correctIndex: 2,
                explanation: "Profesjonalna odpowiedź pokazuje wszystkim, że traktujesz problemy poważnie. Inne klientki widzą, że nawet w trudnej sytuacji jesteś fair i chcesz pomóc. Ignorowanie lub usuwanie wygląda jak ucieczka, publiczne tłumaczenie się jak wymówki."
              }
            },

            // --- SEKCJA 7: Przykład pełnej odpowiedzi ---
            {
              id: "relacje-l4-heading-7",
              type: "heading",
              content: "Przykład profesjonalnej odpowiedzi na negatywną opinię"
            },
            {
              id: "relacje-l4-example-2",
              type: "example",
              content: "**Opinia klientki (Google, 2 gwiazdki):**\n\"Bardzo rozczarowana wizytą. Rzęsy zaczęły odpadać już po tygodniu, a miały trzymać 3 tygodnie. Za taką cenę to skandal.\"\n\n---\n\n**Profesjonalna odpowiedź:**\n\n\"Dzień dobry,\n\nDziękuję za podzielenie się opinią – każdy feedback jest dla mnie ważny.\n\nPrzykro mi, że efekt nie spełnił Pani oczekiwań. Zależy mi na tym, żeby każda klientka była zadowolona, dlatego chętnie omówimy tę sytuację.\n\nProszę o kontakt w wiadomości prywatnej lub pod numerem [telefon] – wspólnie znajdziemy rozwiązanie.\n\nPozdrawiam serdecznie,\n[Twoje imię]\"\n\n---\n\n**Dlaczego to działa:**\n• Podziękowanie za feedback (nie za krytykę – za opinię)\n• Wyrażenie żalu bez przyznawania winy\n• Brak tłumaczeń i defensywy\n• Propozycja kontaktu prywatnego\n• Obietnica rozwiązania\n• Profesjonalne, ale ciepłe zakończenie"
            },

            // --- SEKCJA 8: Po prywatnej rozmowie ---
            {
              id: "relacje-l4-heading-8",
              type: "heading",
              content: "Co robić po prywatnej rozmowie z niezadowoloną klientką"
            },
            {
              id: "relacje-l4-text-5",
              type: "text",
              content: "Załóżmy, że klientka napisała negatywną opinię, Ty odpowiedziałaś profesjonalnie, rozmawiałyście prywatnie i znalazłyście rozwiązanie. Co dalej?\n\n**Jeśli klientka jest zadowolona z rozwiązania:**\nMożesz grzecznie zapytać, czy rozważyłaby edycję lub uzupełnienie opinii. \"Cieszę się, że udało nam się to rozwiązać. Czy miałabyś chwilkę, żeby dodać do opinii, że sytuacja została wyjaśniona? To bardzo by mi pomogło 💕\"\n\n**Nigdy nie żądaj usunięcia opinii** – to brzmi jak wymuszenie i może zepsuć odbudowaną relację.\n\n**Jeśli klientka nie chce edytować:**\nOK, to jej prawo. Twoja profesjonalna odpowiedź publiczna i tak zrobiła swoje – pokazała innym, że reagujesz na problemy z klasą."
            },
            {
              id: "relacje-l4-tip-2",
              type: "tip",
              content: "Jedna dobrze zarządzona negatywna opinia może być cenniejsza niż 10 pozytywnych. Potencjalne klientki widzą, że: 1) problemy się zdarzają, 2) reagujesz profesjonalnie, 3) zależy Ci na rozwiązaniu. To buduje zaufanie silniej niż same pochwały."
            },

            // --- SEKCJA 9: Fałszywe opinie ---
            {
              id: "relacje-l4-heading-9",
              type: "heading",
              content: "Jak radzić sobie z fałszywymi opiniami"
            },
            {
              id: "relacje-l4-text-6",
              type: "text",
              content: "Czasem zdarza się, że negatywna opinia jest fałszywa – od konkurencji, od osoby, która nigdy nie była klientką, lub po prostu pomyłka (ktoś miał na myśli inny salon).\n\n**Co robić:**\n1. Odpowiedz profesjonalnie, tak jak na prawdziwą opinię\n2. Wspomnij, że nie możesz zidentyfikować wizyty: \"Nie mogę odnaleźć wizyty pod tym imieniem w naszym systemie. Proszę o kontakt bezpośredni, żebyśmy mogli wyjaśnić sytuację.\"\n3. Zgłoś opinię do Google jako naruszającą zasady (jeśli jest fałszywa)\n\nGoogle nie zawsze usunie fałszywą opinię, ale warto spróbować. Twoja profesjonalna odpowiedź i tak zostanie – i pokaże, że reagujesz z klasą nawet na nieuzasadnione ataki."
            },

            // --- SEKCJA 10: Regularne monitorowanie ---
            {
              id: "relacje-l4-heading-10",
              type: "heading",
              content: "Regularne monitorowanie opinii i komentarzy"
            },
            {
              id: "relacje-l4-text-7",
              type: "text",
              content: "Nie możesz reagować na opinie i komentarze, o których nie wiesz. Dlatego regularne monitorowanie jest kluczowe.\n\n**Co monitorować:**\n• Komentarze pod postami na FB i IG – codziennie\n• Opinie Google – co najmniej raz w tygodniu\n• Opinie na Facebooku – raz w tygodniu\n• Wzmianki i oznaczenia – Włącz powiadomienia!\n\n**Jak ustawić powiadomienia:**\n• Na Instagramie: Ustawienia > Powiadomienia > Komentarze\n• Na Facebooku: Ustawienia strony > Powiadomienia\n• Google: Ustaw alerty email o nowych opiniach"
            },
            {
              id: "relacje-l4-step-10",
              type: "step",
              stepNumber: 1,
              content: "**Włącz powiadomienia o komentarzach** – na Instagramie i Facebooku. Musisz wiedzieć, kiedy ktoś komentuje."
            },
            {
              id: "relacje-l4-step-11",
              type: "step",
              stepNumber: 2,
              content: "**Sprawdzaj Google raz w tygodniu** – ustaw stały dzień i godzinę (np. poniedziałek rano) na przegląd opinii."
            },
            {
              id: "relacje-l4-step-12",
              type: "step",
              stepNumber: 3,
              content: "**Odpowiadaj w ciągu 24-48h** – szybka reakcja pokazuje zaangażowanie. Opinia sprzed tygodnia bez odpowiedzi wygląda źle."
            },
            {
              id: "relacje-l4-quiz-2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Ktoś zostawił pod Twoim postem komentarz z samym emoji 😍. Co robisz?",
                options: [
                  "Nic – to tylko emoji, nie wymaga reakcji",
                  "Lajkujesz serduszkiem lub odpowiadasz krótkim emoji ❤️",
                  "Odpowiadasz długim podziękowaniem",
                  "Wysyłasz wiadomość prywatną z zaproszeniem na wizytę"
                ],
                correctIndex: 1,
                explanation: "Nawet proste emoji zasługuje na reakcję – to pokazuje, że jesteś uważna i widzisz każdy komentarz. Polubienie serduszkiem lub krótka odpowiedź emoji wystarczy. Długie podziękowania czy DM byłyby przesadą."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "relacje-l4-check-1", text: "Rozumiem że odpowiedzi na komentarze są publicznym pokazem dla wszystkich" },
            { id: "relacje-l4-check-2", text: "Odpowiadam na każdy komentarz – nawet proste emoji" },
            { id: "relacje-l4-check-3", text: "Personalizuję odpowiedzi imieniem komentującej osoby" },
            { id: "relacje-l4-check-4", text: "Znam 5-krokowy schemat odpowiedzi na negatywną opinię" },
            { id: "relacje-l4-check-5", text: "Nie wdaję się w publiczne kłótnie i nie usuwam opinii" },
            { id: "relacje-l4-check-6", text: "Mam włączone powiadomienia o komentarzach i opiniach" },
            { id: "relacje-l4-check-7", text: "Regularnie monitoruję opinie w Google (min. raz w tygodniu)" }
          ],
          keyTakeaways: [
            "Każda odpowiedź na komentarz to publiczny pokaz dla potencjalnych klientek – reaguj na wszystko",
            "Negatywna opinia to szansa, nie katastrofa – profesjonalna reakcja buduje zaufanie",
            "5 kroków odpowiedzi na krytykę: podziękuj, wyraź żal, nie tłumacz się publicznie, zaproponuj kontakt, obiecaj rozwiązanie",
            "Nigdy nie usuwaj opinii i nie kłóć się publicznie – nawet jeśli masz 100% racji",
            "Regularne monitorowanie opinii pozwala reagować szybko i profesjonalnie"
          ],
          nextLessonTitle: "Budowanie lojalności"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 5 - BUDOWANIE LOJALNOŚCI
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "relacje-l5",
          title: "Budowanie lojalności",
          description: "Jak sprawić, by klientki wracały i polecały Twój salon.",
          estimatedMinutes: 20,
          intro: "Lojalna klientka to skarb – wraca regularnie, poleca znajomym i jest mniej wrażliwa na cenę. Pozyskanie nowej klientki kosztuje 5-7 razy więcej niż utrzymanie stałej. Budowanie lojalności to najlepsza inwestycja w marketing, jaką możesz zrobić.",
          sections: [
            // --- SEKCJA 1: Wprowadzenie ---
            {
              id: "relacje-l5-heading-1",
              type: "heading",
              content: "Dlaczego lojalność się opłaca – twarde liczby"
            },
            {
              id: "relacje-l5-text-1",
              type: "text",
              content: "Przyjrzyjmy się matematyce lojalności. Średnia klientka salonu paznokci przychodzi co 2-3 tygodnie i zostawia 100-150 zł. W skali roku to **1500-2500 zł** od jednej osoby.\n\nTeraz pomyśl: ile kosztuje pozyskanie nowej klientki? Reklamy, czas na odpowiadanie na zapytania, pierwsza wizyta często z rabatem. Badania branżowe pokazują, że **pozyskanie nowej klientki kosztuje 5-7 razy więcej niż utrzymanie stałej**.\n\nDodaj do tego fakt, że lojalne klientki:\n• Chętniej próbują nowych usług\n• Kupują produkty do pielęgnacji domowej\n• Polecają znajomym (darmowy marketing!)\n• Przebaczają drobne wpadki\n• Są mniej wrażliwe na cenę (przyzwyczaiły się do Ciebie)\n\nLojalność to nie sentyment – to **twarda strategia biznesowa**."
            },
            {
              id: "relacje-l5-tip-1",
              type: "tip",
              content: "Jedna lojalna klientka, która przychodzi co 2 tygodnie przez 3 lata i poleciła 5 znajomych, jest warta więcej niż 50 jednorazowych klientek. Inwestuj w relacje, nie tylko w pozyskiwanie."
            },

            // --- SEKCJA 2: 4 filary lojalności ---
            {
              id: "relacje-l5-heading-2",
              type: "heading",
              content: "4 filary budowania lojalności"
            },
            {
              id: "relacje-l5-text-2",
              type: "text",
              content: "Lojalność nie powstaje przypadkiem. Buduje się ją świadomie, krok po kroku, poprzez cztery główne elementy:"
            },
            {
              id: "relacje-l5-step-1",
              type: "step",
              stepNumber: 1,
              content: "**PERSONALIZACJA** – Pamiętasz preferencje klientki, jej ulubione kolory, czy lubi rozmawiać czy woli ciszę, jakie ma alergie. To sprawia, że czuje się wyjątkowo, nie jak kolejny numer w grafiku."
            },
            {
              id: "relacje-l5-step-2",
              type: "step",
              stepNumber: 2,
              content: "**PROGRAM LOJALNOŚCIOWY** – Nagradzasz regularność. Co piąta wizyta z rabatem, zbieranie punktów, specjalne oferty dla stałych. Klientka ma powód, żeby wracać właśnie do Ciebie."
            },
            {
              id: "relacje-l5-step-3",
              type: "step",
              stepNumber: 3,
              content: "**URODZINY I OKAZJE** – Życzenia urodzinowe z rabatem lub małym prezentem to prosty gest z ogromnym efektem. Klientka czuje się zapamiętana i doceniona."
            },
            {
              id: "relacje-l5-step-4",
              type: "step",
              stepNumber: 4,
              content: "**EKSKLUZYWNOŚĆ** – Stałe klientki mają przywileje: pierwszeństwo rezerwacji, dostęp do nowości, specjalne ceny. Czują się częścią wewnętrznego kręgu."
            },

            // --- SEKCJA 3: Personalizacja szczegółowo ---
            {
              id: "relacje-l5-heading-3",
              type: "heading",
              content: "Personalizacja – jak pamiętać o każdej klientce"
            },
            {
              id: "relacje-l5-text-3",
              type: "text",
              content: "\"Pamiętam, że ostatnio robiłyśmy burgundowe z brokatem i mówiłaś, że to ulubiony kolor. Chcesz powtórzyć czy spróbujemy czegoś nowego?\"\n\nTakie zdanie wypowiedziane na początku wizyty robi ogromne wrażenie. Klientka czuje się zapamiętana, ważna, nie jak kolejna osoba w kolejce.\n\nAle jak to zrobić przy kilkunastu wizytach dziennie? **Prowadź kartotekę klientek.** Może być w notatkach telefonu, w Excelu, w aplikacji do rezerwacji – forma nie ma znaczenia. Ważne, żebyś zapisywała:\n\n• Ulubione kolory i style\n• Preferencje dotyczące rozmowy (lubi gadać / woli ciszę)\n• Alergie i uczulenia\n• Ważne wydarzenia (ślub, urodziny dziecka)\n• Uwagi z poprzednich wizyt\n• Co robiłyście ostatnio"
            },
            {
              id: "relacje-l5-example-1",
              type: "example",
              content: "**Przykładowa notatka w kartotece:**\n\n**Anna Kowalska**\n📅 Przychodzi co 2 tyg. (paznokcie hybrydowe)\n💅 Ulubione: nude, delikatny french, czasem burgundowe\n💍 Ślub syna w czerwcu – będzie chciała coś specjalnego\n🤫 Woli ciszę podczas zabiegu\n⚠️ Uczulenie na formaldehyd – używać serii hypoalergicznej\n📝 Ostatnio: klasyczny french, bardzo zadowolona\n\n---\n\nPrzy następnej wizycie: \"Cześć Ania! Jak przygotowania do ślubu syna? Czerwiec coraz bliżej! 😊\""
            },
            {
              id: "relacje-l5-tip-2",
              type: "tip",
              content: "Zapisuj notatki od razu po wizycie – wieczorem lub między klientkami. Po tygodniu nie będziesz pamiętać szczegółów, a to one robią różnicę. 2 minuty notatek = lojalność na lata."
            },

            // --- SEKCJA 4: Program lojalnościowy ---
            {
              id: "relacje-l5-heading-4",
              type: "heading",
              content: "Program lojalnościowy – prosty i skuteczny"
            },
            {
              id: "relacje-l5-text-4",
              type: "text",
              content: "Skuteczny program lojalnościowy jest **prosty**. Klientka musi od razu rozumieć zasady i widzieć korzyść. Skomplikowane systemy punktów, które można wymienić na różne nagrody po przeliczeniu przez współczynnik – to nie działa.\n\n**Zasady skutecznego programu:**\n1. Jasne reguły – \"Co 5. wizyta -30%\" jest lepsze niż \"Zbieraj punkty i wymieniaj\"\n2. Osiągalna nagroda – klientka musi wierzyć, że ją zdobędzie\n3. Wartościowa korzyść – 5% rabatu nikogo nie zmotywuje\n4. Łatwe śledzenie – klientka wie ile jej brakuje do nagrody"
            },
            {
              id: "relacje-l5-comparison-1",
              type: "comparison",
              content: "Programy lojalnościowe",
              comparison: {
                good: {
                  title: "Skuteczny program",
                  description: "Prosty, wartościowy, uczciwy dla obu stron",
                  example: "Co 5. wizyta: -30% na usługę\nUrodziny: -15% przez cały miesiąc\nPolecenie: rabat dla Ciebie i koleżanki"
                },
                bad: {
                  title: "Nieskuteczny program",
                  description: "Skomplikowany, trudny do śledzenia",
                  example: "Zbieraj punkty (1 punkt = 10 zł), po 100 punktach wymień na voucher 50 zł lub wybierz z katalogu nagród..."
                }
              }
            },
            {
              id: "relacje-l5-example-2",
              type: "example",
              content: "**Prosty program lojalnościowy dla salonu paznokci:**\n\n🎁 **CO 5. WIZYTA:** -30% na dowolną usługę\n🎂 **URODZINY:** -15% przez cały miesiąc urodzinowy\n💕 **POLECENIE:** Ty i koleżanka -20% na następną wizytę\n⭐ **STAŁE KLIENTKI (10+ wizyt):** Pierwszeństwo rezerwacji + dostęp do nowości\n\n---\n\n**Jak śledzić?**\nProsta tabelka w telefonie lub karteczka przy kartotece klientki z zaznaczeniem wizyt."
            },

            // --- SEKCJA 5: Program poleceń ---
            {
              id: "relacje-l5-heading-5",
              type: "heading",
              content: "Program poleceń – jak zachęcać do rekomendacji"
            },
            {
              id: "relacje-l5-text-5",
              type: "text",
              content: "Polecenia to najskuteczniejszy sposób pozyskiwania nowych klientek. Osoba polecona przez znajomą ma już zaufanie – nie musisz jej przekonywać, że jesteś dobra.\n\n**Kluczowa zasada programu poleceń: NAGRADZAJ OBE STRONY.**\n\nJeśli nagrodzisz tylko polecającą, nowa klientka czuje się jak \"środek do celu\". Jeśli nagrodzisz tylko nową klientkę, polecająca nie ma motywacji. Nagradzając obie strony, tworzysz sytuację win-win-win:\n• Polecająca dostaje bonus\n• Nowa klientka czuje się mile widziana z rabatem\n• Ty zyskujesz lojalną klientkę niskim kosztem"
            },
            {
              id: "relacje-l5-step-5",
              type: "step",
              stepNumber: 1,
              content: "**Ustal jasne nagrody** – np. \"-20% dla polecającej i -20% dla nowej klientki\" lub \"Darmowy zabieg dodatkowy dla polecającej\". Obie strony muszą zyskać."
            },
            {
              id: "relacje-l5-step-6",
              type: "step",
              stepNumber: 2,
              content: "**Komunikuj program** – klientki muszą wiedzieć, że istnieje. Wspomnij podczas wizyty, napisz w Stories, umieść info na wizytówce."
            },
            {
              id: "relacje-l5-step-7",
              type: "step",
              stepNumber: 3,
              content: "**Zapytaj wprost** – gdy klientka wyraża zadowolenie: \"Cieszę się! Jak masz koleżankę, która szuka stylistki – daj znać, mam dla Was obu rabat na następną wizytę 💕\""
            },
            {
              id: "relacje-l5-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Stała klientka pyta, czy mogłaby polecić Cię koleżance. Co proponujesz?",
                options: [
                  "Dajesz jej wizytówkę i dziękujesz za chęć polecenia",
                  "Proponujesz rabat tylko dla nowej klientki, żeby ją zachęcić",
                  "Proponujesz rabat dla obu – polecającej i nowej klientki",
                  "Mówisz, że polecenia to najlepsza reklama i prosisz żeby wspomniała znajomej"
                ],
                correctIndex: 2,
                explanation: "Nagradzanie obu stron sprawia, że klientka chętniej poleci (ma w tym korzyść), a nowa klientka czuje się mile widziana z rabatem od pierwszej wizyty. To win-win-win – zyskujesz lojalność i nową klientkę przy minimalnym koszcie."
              }
            },

            // --- SEKCJA 6: Urodziny i okazje ---
            {
              id: "relacje-l5-heading-6",
              type: "heading",
              content: "Urodziny i ważne okazje – proste gesty z dużym efektem"
            },
            {
              id: "relacje-l5-text-6",
              type: "text",
              content: "Życzenia urodzinowe to jeden z najprostszych sposobów budowania lojalności. Klientka, która dostaje życzenia od swojej stylistki, czuje się zapamiętana i ważna.\n\n**Jak zbierać daty urodzin:**\n• Zapytaj przy rezerwacji (\"Podaj datę urodzin – mam dla Ciebie urodzinową niespodziankę!\")\n• Dodaj do formularza pierwszej wizyty\n• Po prostu zapytaj podczas rozmowy\n\n**Co wysłać:**\n• Proste życzenia z rabatem: \"Wszystkiego najlepszego! 🎂 Mam dla Ciebie -15% na wizytę przez cały miesiąc urodzinowy!\"\n• Lub: życzenia bez rabatu, jeśli nie chcesz dawać zniżki\n\nNie musisz dawać rabatu – same szczere życzenia robią wrażenie. Ale rabat urodzinowy to świetny sposób na zachęcenie do wizyty w konkretnym miesiącu."
            },
            {
              id: "relacje-l5-example-3",
              type: "example",
              content: "**Wiadomość urodzinowa:**\n\n\"Cześć Ola! 🎂💕\n\nWszystkiego najlepszego z okazji urodzin! Życzę Ci zdrowia, radości i samych pięknych dni!\n\nZ tej okazji mam dla Ciebie prezent: -15% na dowolną wizytę przez cały grudzień! 🎁\n\nDo zobaczenia!\nKasia ✨\"\n\n---\n\n**Prosty, ciepły, z wartością. Wysłanie zajmuje 30 sekund, a efekt jest ogromny.**"
            },
            {
              id: "relacje-l5-tip-3",
              type: "tip",
              content: "Ustaw przypomnienia w kalendarzu na urodziny stałych klientek. Na początku miesiąca sprawdź kto ma urodziny i wyślij życzenia. 5 minut miesięcznie = lojalne klientki na lata."
            },

            // --- SEKCJA 7: Ekskluzywność ---
            {
              id: "relacje-l5-heading-7",
              type: "heading",
              content: "Ekskluzywność – dlaczego stałe klientki zasługują na więcej"
            },
            {
              id: "relacje-l5-text-7",
              type: "text",
              content: "Stałe klientki powinny czuć, że są traktowane wyjątkowo. To nie faworyzowanie – to nagroda za lojalność. Przywileje dla stałych to silna motywacja do pozostania.\n\n**Przykłady ekskluzywności:**\n• **Pierwszeństwo rezerwacji** – stałe klientki mogą rezerwować wcześniej lub mają dostęp do \"tajnych\" wolnych terminów\n• **Dostęp do nowości** – nowe usługi, kolory, techniki najpierw dla stałych\n• **Specjalne ceny** – rabat stały lub lepsze warunki pakietów\n• **Elastyczność** – możliwość przełożenia wizyty w ostatniej chwili bez konsekwencji\n• **Darmowe dodatki** – np. olejek do skórek przy wizycie, maska do włosów\n\nKluczowe: klientka musi **wiedzieć**, że jest traktowana wyjątkowo. \"Mam dla Ciebie termin, który normalnie nie jest dostępny\" – to zdanie buduje poczucie ekskluzywności."
            },

            // --- SEKCJA 8: Komunikacja o programie ---
            {
              id: "relacje-l5-heading-8",
              type: "heading",
              content: "Jak komunikować program lojalnościowy"
            },
            {
              id: "relacje-l5-text-8",
              type: "text",
              content: "Najlepszy program lojalnościowy nie zadziała, jeśli klientki o nim nie wiedzą. Komunikacja to klucz.\n\n**Gdzie informować o programie:**\n• Przy rezerwacji pierwszej wizyty\n• Na wizytówce lub ulotce (daj klientce do domu)\n• W Stories regularnie (raz na 2-3 tygodnie)\n• W wyróżnionych relacjach na Instagramie\n• Podczas wizyty – wspomnij ile brakuje do nagrody\n\n**Jak informować:**\n• Naturalnie, nie nachalnie\n• Z entuzjazmem, nie jak obowiązek\n• Konkretnie – ile brakuje, co można zyskać"
            },
            {
              id: "relacje-l5-example-4",
              type: "example",
              content: "**Jak wspomnieć o programie podczas wizyty:**\n\n\"Ola, wiesz że to Twoja 4. wizyta u mnie? Następnym razem masz -30% na usługę! 💕\"\n\n\"Pamiętaj, że jak polecisz mnie koleżance – obie dostaniecie rabat 20%!\"\n\n\"Widziałam, że masz urodziny w przyszłym tygodniu – pamiętaj o -15% przez cały miesiąc!\"\n\n---\n\nNaturalne, przy okazji, z uśmiechem. Klientka czuje się zaopiekowana, nie \"marketowana\"."
            },

            // --- SEKCJA 9: Quiz ---
            {
              id: "relacje-l5-heading-9",
              type: "heading",
              content: "Sprawdź swoją wiedzę"
            },
            {
              id: "relacje-l5-quiz-2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Jak działa skuteczny program lojalnościowy?",
                options: [
                  "Skomplikowany system punktów wymienialnych na różne nagrody",
                  "Prosty, z jasną regułą (np. 'co 5. wizyta -30%') i wartościową nagrodą",
                  "Tylko dla klientek, które przychodzą od ponad 2 lat",
                  "Rabaty na wszystko przez cały czas dla wszystkich stałych"
                ],
                correctIndex: 1,
                explanation: "Skuteczny program jest prosty do zrozumienia, ma osiągalną i wartościową nagrodę, i łatwo śledzić postęp. Klientka od razu rozumie zasady i widzi korzyść. Skomplikowane systemy punktów zniechęcają."
              }
            },

            // --- SEKCJA 10: Reaktywacja uśpionych klientek ---
            {
              id: "relacje-l5-heading-10",
              type: "heading",
              content: "Reaktywacja uśpionych klientek"
            },
            {
              id: "relacje-l5-text-9",
              type: "text",
              content: "Co z klientkami, które przestały przychodzić? Nie zakładaj, że odeszły na zawsze. Często po prostu zapomniały, zmieniły priorytet lub miały intensywny okres.\n\n**Wiadomość reaktywacyjna** po 2-3 miesiącach bez wizyty może przynieść świetne efekty:\n\n\"Cześć Ania! Dawno Cię nie widziałam – mam nadzieję, że wszystko OK! 💕 Jakbyś chciała wrócić – mam dla Ciebie -20% na następną wizytę. Tęsknię! 🌸\"\n\nTaka wiadomość jest:\n• Ciepła (nie \"handlowa\")\n• Z wartością (rabat na powrót)\n• Bez presji (\"jakbyś chciała\")\n• Osobista (konkretne imię, ton znajomości)"
            },
            {
              id: "relacje-l5-warning-1",
              type: "warning",
              content: "Nie wysyłaj wiadomości reaktywacyjnych zbyt często. Jedna wiadomość po 2-3 miesiącach nieobecności wystarczy. Jeśli klientka nie odpowie – zostaw ją. Nachalne \"wróć do nas\" może zrazić na zawsze."
            },

            // --- SEKCJA 11: Długoterminowa relacja ---
            {
              id: "relacje-l5-heading-11",
              type: "heading",
              content: "Budowanie relacji na lata – podsumowanie"
            },
            {
              id: "relacje-l5-text-10",
              type: "text",
              content: "Lojalność nie buduje się jedną akcją czy jednym rabatem. To suma małych gestów, konsekwentnej troski i autentycznego zainteresowania klientką jako osobą.\n\n**Codzienna lojalność to:**\n• Pamiętanie imion i preferencji\n• Pytanie jak się czuje, nie tylko co chce zrobić\n• Małe gesty (herbata, komplement, wskazówka pielęgnacyjna)\n• Profesjonalna obsługa za każdym razem\n• Szczere zainteresowanie jej życiem\n\n**Programowa lojalność to:**\n• Jasny program lojalnościowy\n• Nagradzanie poleceń\n• Urodzinowe niespodzianki\n• Ekskluzywność dla stałych\n\n**Obie warstwy są ważne.** Programy bez codziennej troski brzmią sztucznie. Codzienna troska bez programów nie daje struktury i motywacji."
            },
            {
              id: "relacje-l5-tip-4",
              type: "tip",
              content: "Najlepsza inwestycja w lojalność to Twój czas i uwaga. Technologia i programy pomagają, ale to autentyczna relacja sprawia, że klientka czuje się wyjątkowo. Nie ma skrótu – trzeba naprawdę dbać."
            }
          ],
          tasks: [],
          checklist: [
            { id: "relacje-l5-check-1", text: "Rozumiem dlaczego lojalność się opłaca (5-7x taniej utrzymać niż pozyskać)" },
            { id: "relacje-l5-check-2", text: "Znam 4 filary lojalności: personalizacja, program, urodziny, ekskluzywność" },
            { id: "relacje-l5-check-3", text: "Prowadzę kartotekę klientek z notatkami o preferencjach" },
            { id: "relacje-l5-check-4", text: "Mam prosty i zrozumiały program lojalnościowy" },
            { id: "relacje-l5-check-5", text: "Program poleceń nagradza OBE strony" },
            { id: "relacje-l5-check-6", text: "Zbieram daty urodzin i wysyłam życzenia z rabatem" },
            { id: "relacje-l5-check-7", text: "Stałe klientki mają przywileje (pierwszeństwo, ekskluzywność)" },
            { id: "relacje-l5-check-8", text: "Regularnie komunikuję program lojalnościowy klientkom" }
          ],
          keyTakeaways: [
            "Pozyskanie nowej klientki kosztuje 5-7x więcej niż utrzymanie stałej – lojalność to strategia biznesowa",
            "4 filary lojalności: personalizacja, program lojalnościowy, urodziny i okazje, ekskluzywność dla stałych",
            "Prowadź kartotekę klientek – zapisuj preferencje, alergie, ważne wydarzenia, notatki z wizyt",
            "Skuteczny program jest prosty (np. 'co 5. wizyta -30%') z wartościową nagrodą i łatwy do śledzenia",
            "Program poleceń musi nagradzać OBE strony – polecającą i nową klientkę",
            "Życzenia urodzinowe z rabatem to prosty gest budujący głęboką lojalność"
          ]
        }
      ]
    }
  ]
};
