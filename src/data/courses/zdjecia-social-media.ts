import { Course } from "@/types/courses";

export const zdjeciaSocialMediaCourse: Course = {
  id: "zdjecia-social-media",
  title: "Zdjęcia do social mediów",
  description: "Naucz się robić profesjonalne zdjęcia telefonem, które przyciągną uwagę i zwiększą zaangażowanie na Twoich profilach.",
  icon: "Camera",
  color: "amber",
  totalLessons: 7,
  estimatedHours: 3.5,
  modules: [
    {
      id: "modul-zdjecia",
      title: "Fotografia dla salonu beauty",
      description: "Kompleksowy przewodnik po tworzeniu atrakcyjnych zdjęć do Facebooka i Instagrama",
      lessons: [
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 1 - DLACZEGO ZDJĘCIA DECYDUJĄ O SUKCESIE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-1-dlaczego-zdjecia",
          title: "Dlaczego zdjęcia decydują o sukcesie",
          description: "Zrozum, jaką rolę pełnią zdjęcia w pozyskiwaniu klientek przez social media.",
          estimatedMinutes: 18,
          intro: "W tej lekcji zobaczysz, dlaczego jakość zdjęć na Twoich profilach może decydować o tym, czy klientka umówi się na wizytę. Zrozumiesz psychologię pierwszego wrażenia i dowiesz się, co naprawdę oceniają potencjalne klientki, gdy patrzą na Twój profil.",
          sections: [
            // --- SEKCJA 1: Wprowadzenie ---
            {
              id: "L1-heading-1",
              type: "heading",
              content: "Twoje zdjęcia to Twoje portfolio"
            },
            {
              id: "L1-text-1",
              type: "text",
              content: "W branży beauty zdjęcia pełnią wyjątkową rolę. W innych branżach klient może dotknąć produktu, przymierzyć ubranie, przejechać się autem. U Ciebie? Jedyne, co ma przed wizytą – to zdjęcia Twoich poprzednich prac.\n\nPomyśl o tym jak o portfolio fotografa czy architekta. Nikt nie zatrudni architekta bez obejrzenia jego projektów. Nikt nie umówi się do salonu bez sprawdzenia zdjęć.\n\n**Twoje zdjęcia odpowiadają na pytanie:** \"Czy ta osoba potrafi zrobić to, czego szukam?\""
            },
            {
              id: "L1-tip-1",
              type: "tip",
              content: "Klientka spędza średnio 2-4 sekundy na każdym zdjęciu, przewijając Twój profil. W tym czasie jej mózg podejmuje decyzję: \"profesjonalne\" lub \"nie dla mnie\". To dzieje się podświadomie, zanim zdąży przeczytać jakikolwiek opis."
            },
            
            // --- SEKCJA 2: Zasada 3 sekund ---
            {
              id: "L1-heading-2",
              type: "heading",
              content: "Zasada 3 sekund"
            },
            {
              id: "L1-text-2",
              type: "text",
              content: "Kiedy potencjalna klientka wchodzi na Twój profil na Facebooku lub Instagramie, podejmuje decyzję w ciągu **3 sekund**. Nie czyta opisów, nie sprawdza cennika – najpierw patrzy na zdjęcia.\n\nW tym czasie jej mózg błyskawicznie ocenia:\n\n• **Czy to wygląda profesjonalnie?** (jakość zdjęć, oświetlenie, spójność)\n• **Czy efekty mi się podobają?** (styl, precyzja, estetyka)\n• **Czy mogę zaufać tej osobie?** (ogólne wrażenie profesjonalizmu)\n\nJeśli zdjęcia nie przekonują – klientka przewija dalej. Bez szansy na drugie wrażenie."
            },
            {
              id: "L1-warning-1",
              type: "warning",
              content: "Użytkownicy social mediów przeglądają treści w tempie 1-2 sekundy na post. Twoje zdjęcia muszą \"zatrzymać kciuk\" – sprawić, że ktoś przestanie przewijać i poświęci Ci więcej uwagi."
            },
            
            // --- SEKCJA 3: Co oceniają klientki ---
            {
              id: "L1-heading-3",
              type: "heading",
              content: "Co naprawdę oceniają klientki"
            },
            {
              id: "L1-text-3",
              type: "text",
              content: "Kiedy klientka patrzy na Twoje zdjęcia, jej mózg przetwarza znacznie więcej niż sam efekt zabiegu. Ocena jest wielowymiarowa i w dużej mierze podświadoma. Oto co klientka naprawdę analizuje:"
            },
            {
              id: "L1-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Jakość pracy** – Czy paznokcie są równe? Czy kolor jest jednolity? Czy skórki są zadbane? Detale widoczne na zdjęciu = detale, o które dbasz w pracy. Nieostre zdjęcie sugeruje brak dbałości o szczegóły."
            },
            {
              id: "L1-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Profesjonalizm** – Czy zdjęcie jest ostre, dobrze oświetlone, z czystym tłem? Brak dbałości o zdjęcia = brak dbałości o klientkę. Tak to działa w głowie – nawet jeśli to niesprawiedliwe."
            },
            {
              id: "L1-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Styl i estetyka** – Czy Twój styl pasuje do jej gustu? Klientka szuka salonu, który \"mówi jej językiem\" wizualnym. Eleganckie, minimalistyczne zdjęcia przyciągną inny typ klientki niż kolorowe, ekspresyjne."
            },
            {
              id: "L1-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Aktualność** – Kiedy było ostatnie zdjęcie? Profil z postami sprzed 3 miesięcy wygląda na nieaktywny. Klientka może się zastanawiać, czy ten salon w ogóle jeszcze istnieje."
            },
            {
              id: "L1-example-1",
              type: "example",
              content: "**Jak to wygląda w praktyce:**\n\nKlientka szuka salonu w Krakowie. Wchodzi na 5 profili. Na trzech widzi ciemne, nieostre zdjęcia z różnymi tłami. Na dwóch – jasne, spójne portfolio z czystym tłem.\n\nKtóry wybierze? Nawet jeśli te ciemne zdjęcia pokazują lepszą pracę – klientka tego nie zauważy. Bo **nie widzi pracy. Widzi zdjęcie.**\n\nTo brutalna prawda, ale im szybciej ją zaakceptujesz, tym szybciej zaczniesz robić zdjęcia, które sprzedają."
            },
            
            // --- SEKCJA 4: Jakość vs ilość ---
            {
              id: "L1-heading-4",
              type: "heading",
              content: "Jakość kontra ilość"
            },
            {
              id: "L1-text-4",
              type: "text",
              content: "Częsty błąd właścicielek salonów: \"Im więcej zdjęć, tym lepiej\". W rzeczywistości jest odwrotnie.\n\n**20 profesjonalnych, spójnych zdjęć buduje większe zaufanie niż 100 przypadkowych.**\n\nDlaczego? Bo spójność = profesjonalizm. Kiedy klientka widzi profil, gdzie wszystkie zdjęcia mają podobne tło, podobne światło, podobną estetykę – podświadomie czuje, że ten salon wie, co robi.\n\nKiedy widzi chaos – zdjęcie przy oknie, zdjęcie w ciemnym pokoju, zdjęcie z bałaganem w tle – pojawia się niepokój: \"Czy tu będzie porządek?\""
            },
            {
              id: "L1-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Salon A ma 50 zdjęć różnej jakości (jasne, ciemne, różne tła). Salon B ma 15 zdjęć – wszystkie profesjonalne, spójne, na białym tle. Który wybierze klientka?",
                options: [
                  "Salon A – więcej zdjęć = więcej doświadczenia",
                  "Salon B – jakość i spójność budują większe zaufanie",
                  "Zależy od ceny usług",
                  "Nie ma różnicy"
                ],
                correctIndex: 1,
                explanation: "15 spójnych, profesjonalnych zdjęć buduje większe zaufanie niż 50 niespójnych. Jakość > ilość. Klientka podświadomie zakłada, że uporządkowany profil = uporządkowana praca."
              }
            },
            {
              id: "L1-comparison-1",
              type: "comparison",
              content: "",
              comparison: {
                good: {
                  title: "Spójne portfolio",
                  description: "15-20 zdjęć w jednolitym stylu, jasne, ostre, czyste tła",
                  example: "Klientka myśli: \"Tu wiedzą co robią\""
                },
                bad: {
                  title: "Chaotyczny profil",
                  description: "50 zdjęć różnej jakości, ciemne, rozmyte, przypadkowe tła",
                  example: "Klientka myśli: \"Hmm, nie jestem pewna...\""
                }
              }
            },
            
            // --- SEKCJA 5: Zdjęcia budują zaufanie ---
            {
              id: "L1-heading-5",
              type: "heading",
              content: "Zdjęcia budują zaufanie przed wizytą"
            },
            {
              id: "L1-text-5",
              type: "text",
              content: "Zaufanie w branży beauty buduje się **przed wizytą**, nie podczas. Klientka, która Ci ufa zanim przekroczy próg, jest spokojna, otwarta na sugestie i chętna do eksperymentów.\n\nKlientka, która przychodzi z rezerwą (\"zobaczymy, czy będzie dobrze\"), jest napięta, krytyczna i trudniejsza do zadowolenia – nawet jeśli zrobisz świetną robotę."
            },
            {
              id: "L1-text-6",
              type: "text",
              content: "**Skąd bierze się to zaufanie?**\n\nGłównie z Twoich zdjęć. Kiedy klientka widzi:\n\n• Profesjonalne, spójne portfolio\n• Różnorodne prace w jednym stylu\n• Regularne publikacje\n• Pozytywne komentarze pod zdjęciami\n\n...jej mózg sygnalizuje: \"Ta osoba wie, co robi. Można jej zaufać.\"\n\nTo dzieje się automatycznie – klientka nie analizuje świadomie. Po prostu CZUJE, że może Ci zaufać. I to uczucie bierze się głównie z jakości zdjęć."
            },
            {
              id: "L1-tip-2",
              type: "tip",
              content: "Zaufanie online przekłada się na doświadczenie offline. Klientka, która przychodzi z pozytywnym nastawieniem (bo widziała świetne zdjęcia), częściej wychodzi zadowolona i zostawia dobrą opinię."
            },
            
            // --- SEKCJA 6: FB vs IG ---
            {
              id: "L1-heading-6",
              type: "heading",
              content: "Zdjęcia na Facebooku vs Instagramie"
            },
            {
              id: "L1-text-7",
              type: "text",
              content: "Choć obie platformy należą do Meta i mają podobne formaty, zachowania użytkowników różnią się:\n\n**Instagram:**\n• Bardziej wizualny – zdjęcia są głównym contentem\n• Siatka profilu ma znaczenie (jak wygląda jako całość)\n• Stories i Reelsy dominują\n• Młodsza grupa odbiorców (25-40 lat głównie)\n\n**Facebook:**\n• Zdjęcia + tekst mają równą wagę\n• Albumy ze zdjęciami są popularne\n• Grupy lokalne i polecenia mają duże znaczenie\n• Starsza, ale często bardziej decyzyjna grupa (35-55 lat)"
            },
            {
              id: "L1-text-8",
              type: "text",
              content: "**Dobra wiadomość:** Nie musisz robić osobnych zdjęć na każdą platformę! Te same zdjęcia działają na FB i IG. Różnica jest w sposobie prezentacji:\n\n• Na IG dbaj o spójność siatki (jak zdjęcia wyglądają obok siebie)\n• Na FB możesz publikować więcej zdjęć w jednym poście (album)\n\nJakość zdjęć jest taka sama na obu platformach. Skup się na robieniu dobrych zdjęć – adaptacja do platformy to detal."
            },
            
            // --- SEKCJA 7: Nie potrzebujesz drogiego sprzętu ---
            {
              id: "L1-heading-7",
              type: "heading",
              content: "Nie potrzebujesz drogiego sprzętu"
            },
            {
              id: "L1-text-9",
              type: "text",
              content: "Zanim zaczniesz myśleć \"muszę kupić aparat\" – zatrzymaj się. **Twój telefon wystarczy.** Naprawdę.\n\nWspółczesne smartfony mają aparaty lepsze niż profesjonalne aparaty sprzed 10 lat. iPhone SE, Samsung Galaxy A-series, Xiaomi, Huawei – każdy z nich jest w stanie zrobić zdjęcia jakości wystarczającej (i więcej!) na social media."
            },
            {
              id: "L1-text-10",
              type: "text",
              content: "**Co naprawdę robi różnicę:**\n\n• **Światło** – dobre światło > drogi aparat (o tym w następnych lekcjach)\n• **Kompozycja** – umiejętność kadrowania (nauczysz się tego)\n• **Stabilność** – nieporuszone zdjęcia (proste triki)\n• **Tło** – czyste, nieodrywające uwagi\n• **Konsekwencja** – spójny styl wszystkich zdjęć\n\nTo wszystko możesz osiągnąć telefonem za 1000 zł. W kolejnych lekcjach nauczysz się dokładnie jak."
            },
            {
              id: "L1-warning-2",
              type: "warning",
              content: "**Częsty błąd:** \"Moja praca jest świetna, zdjęcia nie oddają tego.\"\n\nProblem w tym, że klientka nie widzi Twojej pracy. Widzi tylko zdjęcie. Jeśli zdjęcie jest słabe – w jej oczach praca też jest słaba. To może być niesprawiedliwe, ale tak działa psychologia. Zaakceptuj to i naucz się robić dobre zdjęcia."
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-1-1", text: "Rozumiem, że zdjęcia to moje portfolio online" },
            { id: "check-1-2", text: "Wiem, że klientka ocenia profesjonalizm po zdjęciach w 3 sekundy" },
            { id: "check-1-3", text: "Rozumiem, że jakość i spójność zdjęć > ilość zdjęć" },
            { id: "check-1-4", text: "Wiem, że telefon wystarczy do profesjonalnych zdjęć" },
            { id: "check-1-5", text: "Rozumiem, że zdjęcia budują zaufanie PRZED wizytą" }
          ],
          keyTakeaways: [
            "Klientka podejmuje decyzję o wizycie głównie na podstawie zdjęć – w 3 sekundy",
            "Zdjęcia budują zaufanie PRZED wizytą – profesjonalne zdjęcia = profesjonalna praca w oczach klientki",
            "Jakość i spójność > ilość – 20 dobrych zdjęć > 50 przypadkowych",
            "Telefon wystarczy – różnicę robi światło, kompozycja i konsekwencja, nie drogi sprzęt"
          ],
          nextLessonTitle: "6 typów zdjęć, które musisz mieć"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 2 - 6 TYPÓW ZDJĘĆ
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-2-typy-zdjec",
          title: "6 typów zdjęć, które musisz mieć",
          description: "Poznaj kategorie zdjęć, które najlepiej sprawdzają się w branży beauty i jak je łączyć na profilu.",
          estimatedMinutes: 22,
          intro: "Profil składający się tylko ze zdjęć paznokci jest monotonny. Profil z samymi selfie – narcystyczny. Idealne portfolio to MIX różnych typów zdjęć, które razem opowiadają historię Twojego salonu. W tej lekcji poznasz 6 kategorii, które powinny znaleźć się na Twoim profilu.",
          sections: [
            // --- SEKCJA 1: Wprowadzenie ---
            {
              id: "L2-heading-1",
              type: "heading",
              content: "Dlaczego różnorodność ma znaczenie"
            },
            {
              id: "L2-text-1",
              type: "text",
              content: "Wyobraź sobie, że potencjalna klientka przegląda Twój profil. W 30 sekund powinna zobaczyć:\n\n• Że potrafisz robić świetne stylizacje\n• Że Twój salon jest czysty i przyjemny\n• Kim jesteś jako osoba\n• Że inne klientki są zadowolone\n\nJeden typ zdjęć nie przekaże tego wszystkiego. Dlatego potrzebujesz różnorodności – ale uporządkowanej, nie chaotycznej."
            },
            {
              id: "L2-text-2",
              type: "text",
              content: "Różnorodność treści sprawia też, że profil jest **ciekawszy do obserwowania**. Klientka, która widzi ciągle to samo (tylko paznokcie, tylko paznokcie, tylko paznokcie), szybko się nudzi i przestaje reagować. Mieszanka różnych typów treści utrzymuje zainteresowanie i buduje głębszą relację."
            },
            {
              id: "L2-tip-1",
              type: "tip",
              content: "Algorytmy Facebooka i Instagrama preferują profile z różnorodnymi treściami. Monotonia = mniej wyświetleń. Różnorodność = więcej zasięgu."
            },
            
            // --- SEKCJA 2: Typ 1 - Efekty zabiegów ---
            {
              id: "L2-heading-2",
              type: "heading",
              content: "Typ 1: Efekty zabiegów (40-50% treści)"
            },
            {
              id: "L2-text-3",
              type: "text",
              content: "To fundament Twojego portfolio – zdjęcia finalnych efektów Twojej pracy. Paznokcie, brwi, rzęsy, włosy, makijaż – cokolwiek oferujesz.\n\n**Te zdjęcia odpowiadają na najważniejsze pytanie klientki:** \"Czy ta osoba potrafi zrobić to, czego szukam?\"\n\nPowinny stanowić około **40-50% Twoich publikacji** – to Twoja główna broń, Twoje portfolio."
            },
            {
              id: "L2-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Close-up (zbliżenie)** – Detale stylizacji, precyzja pracy. Pokazuje jakość i dbałość o szczegóły. Idealny do wyeksponowania skomplikowanych wzorów."
            },
            {
              id: "L2-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Medium shot** – Cała dłoń, twarz, fryzura w kontekście. Pokazuje jak efekt wygląda \"w życiu\". Pomaga klientce wyobrazić sobie efekt na sobie."
            },
            {
              id: "L2-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Lifestyle** – Efekt w naturalnej sytuacji: dłoń trzymająca kubek kawy, włosy podczas spaceru. Pokazuje efekt \"w akcji\" i budzi emocje."
            },
            {
              id: "L2-mockup-1",
              type: "mockup",
              content: "Post z efektem zabiegu:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postImage: "nails",
                postCaption: "Klasyczna elegancja na co dzień 💅\n\nNude + french na migdałkach – ponadczasowa kombinacja, która pasuje do wszystkiego.\n\nCzy Ty też wolisz klasykę od trendów? Napisz w komentarzu! 👇",
                postLikes: "42",
                postComments: "7",
                description: "Zdjęcie efektu z pytaniem angażującym odbiorców"
              }
            },
            {
              id: "L2-tip-2",
              type: "tip",
              content: "Rób zdjęcia efektów przy KAŻDEJ udanej stylizacji. Nie musisz publikować wszystkiego od razu – ale lepiej mieć w telefonie 20 zdjęć i wybrać 5 najlepszych, niż mieć tylko 3 i publikować średnie."
            },
            
            // --- SEKCJA 3: Typ 2 - Przed i po ---
            {
              id: "L2-heading-3",
              type: "heading",
              content: "Typ 2: Zdjęcia przed i po (10-15% treści)"
            },
            {
              id: "L2-text-4",
              type: "text",
              content: "**To najbardziej angażujący typ contentu w branży beauty.** Ludzie uwielbiają transformacje – programy typu \"metamorfozy\" od lat cieszą się popularnością właśnie dlatego.\n\nZdjęcia przed i po pokazują **wartość Twojej pracy** w najbardziej wymowny sposób: \"Było tak → Zrobiłam tak → Jest tak\". To dowód na Twoje umiejętności, który jest trudny do podważenia."
            },
            {
              id: "L2-text-5",
              type: "text",
              content: "**Dlaczego przed/po działa tak dobrze:**\n\n• Pokazuje realną zmianę (nie tylko efekt końcowy)\n• Buduje zaufanie (\"to prawdziwa praca, nie Photoshop\")\n• Angażuje emocjonalnie (\"wow, jaka różnica!\")\n• Zachęca do komentowania (\"która wersja lepsza?\")\n• Jest łatwo udostępniane przez znajomych (viral potential)"
            },
            {
              id: "L2-warning-1",
              type: "warning",
              content: "**Kluczowa zasada:** Zdjęcia przed i po MUSZĄ być zrobione w tych samych warunkach! To samo światło, ten sam kąt, ta sama odległość. Inaczej transformacja wygląda niewiarygodnie i podważa zaufanie. Więcej o tym w osobnej lekcji."
            },
            {
              id: "L2-example-1",
              type: "example",
              content: "**Co pokazywać w przed/po:**\n\n• **Paznokcie:** zniszczone, odrosty → odbudowane i pomalowane\n• **Brwi:** przerzedzone, niesymetryczne → uzupełnione, wystylizowane\n• **Włosy:** przefarbowane, suche → świeży kolor, odżywione\n• **Rzęsy:** naturalne, krótkie → przedłużone, podkręcone\n• **Skóra:** zmęczona, szara → rozświetlona po zabiegu\n\nKażda transformacja to potencjalny viral – zbieraj materiał!"
            },
            
            // --- SEKCJA 4: Typ 3 - Proces pracy ---
            {
              id: "L2-heading-4",
              type: "heading",
              content: "Typ 3: Proces pracy (10-15% treści)"
            },
            {
              id: "L2-text-6",
              type: "text",
              content: "Zdjęcia i filmy \"zza kulis\" – jak wygląda Twoja praca. Ręce podczas zabiegu, narzędzia w akcji, moment aplikacji produktu.\n\n**Te treści budują zaufanie** pokazując, że:\n\n• Pracujesz higienicznie (czyste narzędzia, rękawiczki)\n• Używasz profesjonalnych produktów (markowe lakiery, serum)\n• Dbasz o detale (precyzyjne ruchy)\n• Masz doświadczenie (pewne, spokojne ruchy)"
            },
            {
              id: "L2-text-7",
              type: "text",
              content: "**Proces pracy to świetny content na Stories i Reelsy:**\n\n• Przyspieszony timelapse całego zabiegu (15-30 sekund)\n• Moment precyzyjnej pracy (np. rysowanie linii french)\n• Mieszanie kolorów lakieru na palecie\n• Aplikacja serum lub maski\n• Pakowanie sterylnych narzędzi\n• Przygotowanie stanowiska przed klientką\n\nTakie treści są hipnotyzujące – ludzie uwielbiają oglądać zręczne ręce przy pracy."
            },
            {
              id: "L2-tip-3",
              type: "tip",
              content: "Filmiki procesu często mają WIĘCEJ wyświetleń niż zdjęcia efektów końcowych. To dlatego, że są relaksujące i satysfakcjonujące do oglądania. Nagrywaj krótkie klipy przy każdej wizycie – masz gotowy content na Stories."
            },
            
            // --- SEKCJA 5: Typ 4 - Wnętrze salonu ---
            {
              id: "L2-heading-5",
              type: "heading",
              content: "Typ 4: Wnętrze salonu (5-10% treści)"
            },
            {
              id: "L2-text-8",
              type: "text",
              content: "Klientka chce wiedzieć, gdzie będzie spędzać 1-2 godziny. Czy będzie jej wygodnie? Czy miejsce jest czyste? Czy atmosfera jest przyjemna?\n\n**Zdjęcia wnętrza odpowiadają na te pytania** zanim klientka przekroczy próg. Eliminują niepewność i budują pozytywne oczekiwania."
            },
            {
              id: "L2-text-9",
              type: "text",
              content: "**Co fotografować:**\n\n• Stanowiska pracy (czyste, uporządkowane!)\n• Strefa oczekiwania (wygodna, przytulna)\n• Detale wystroju (kwiaty, świece, plakaty)\n• Produkty na półkach (profesjonalne marki)\n• Widok ogólny salonu\n• Sezonowe dekoracje (święta, wiosna, jesień)"
            },
            {
              id: "L2-example-2",
              type: "example",
              content: "**Kiedy publikować zdjęcia wnętrza:**\n\n• **Po sprzątaniu/reorganizacji:** \"Świeżo po porządkach, gotowe na Twój relaks\"\n• **Przy nowych dekoracjach:** \"Wiosna zagościła w salonie 🌸\"\n• **Rano przed klientkami:** \"Cisza przed burzą... za godzinę zaczynamy!\"\n• **Po zakupie nowego sprzętu:** \"Nowy fotel/lampa czeka na Was!\"\n• **Sezonowo:** \"Świąteczny klimat w salonie 🎄\""
            },
            
            // --- SEKCJA 6: Typ 5 - Ty i zespół ---
            {
              id: "L2-heading-6",
              type: "heading",
              content: "Typ 5: Ty i Twój zespół (5-10% treści)"
            },
            {
              id: "L2-text-10",
              type: "text",
              content: "Ludzie kupują od ludzi, nie od firm. Klientka chce wiedzieć, **kto** będzie przy niej pracować. Czy ta osoba wygląda sympatycznie? Czy mogę jej zaufać? Czy będę się dobrze czuć w jej towarzystwie przez godzinę?\n\n**Zdjęcia osobiste budują relację** zanim klientka Cię pozna osobiście. Sprawiają, że przestajesz być \"jakimś salonem\" a stajesz się konkretną osobą."
            },
            {
              id: "L2-text-11",
              type: "text",
              content: "**Nie chodzi o sesję glamour!** Chodzi o autentyczne, sympatyczne zdjęcia:\n\n• Ty przy pracy (profil, skupienie na zadaniu)\n• Ty z uśmiechem (witające, ciepłe spojrzenie)\n• Ty z zespołem (atmosfera w salonie, przyjaźń)\n• Ty na szkoleniu (rozwój, profesjonalizm)\n• Ty świętująca sukces (certyfikat, rocznica salonu)\n• Ty w życiu prywatnym (opcjonalnie – buduje głębszą relację)"
            },
            {
              id: "L2-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Dlaczego zdjęcia z Twoją twarzą mają średnio 38% więcej interakcji niż zdjęcia bez ludzi?",
                options: [
                  "Bo ludzie są ciekawscy",
                  "Bo nasz mózg jest ewolucyjnie zaprogramowany na rozpoznawanie twarzy",
                  "Bo algorytm preferuje twarze",
                  "To mit – nie ma różnicy"
                ],
                correctIndex: 1,
                explanation: "Nasz mózg ma specjalny obszar (wrzecionowaty obszar twarzy) dedykowany rozpoznawaniu twarzy. Ewolucyjnie musieliśmy szybko oceniać, czy ktoś jest przyjacielem czy wrogiem. Dlatego automatycznie zatrzymujemy wzrok na twarzach – to biologiczne, nie kulturowe."
              }
            },
            {
              id: "L2-tip-4",
              type: "tip",
              content: "Nie lubisz się fotografować? Zacznij od zdjęć \"przy pracy\" – gdzie widać Twoje ręce i profil, ale nie musisz patrzeć w obiektyw. Stopniowo przyzwyczaisz się do aparatu. Możesz też poprosić koleżankę o zrobienie zdjęć, gdy jesteś zajęta pracą."
            },
            
            // --- SEKCJA 7: Typ 6 - Zadowolone klientki ---
            {
              id: "L2-heading-7",
              type: "heading",
              content: "Typ 6: Zadowolone klientki (5-10% treści)"
            },
            {
              id: "L2-text-12",
              type: "text",
              content: "Social proof – dowód społeczny. Zdjęcia zadowolonych klientek to **najsilniejsza forma rekomendacji** w marketingu. Pokazują, że inne kobiety Ci zaufały i są szczęśliwe z efektu.\n\nKiedy klientka widzi uśmiechniętą twarz innej klientki nad świeżą stylizacją – jej mózg myśli: \"Skoro ona jest zadowolona, ja też będę\"."
            },
            {
              id: "L2-text-13",
              type: "text",
              content: "**Jak zdobyć zdjęcia z klientkami:**\n\n• **Zaproponuj po udanym zabiegu:** \"Efekt jest świetny – mogę zrobić zdjęcie?\"\n• **Zapytaj o zgodę na publikację:** \"Czy mogę wrzucić na profil salonu?\"\n• **Zaoferuj coś w zamian:** \"Za zdjęcie 10% zniżki na następną wizytę\" lub mały upominek\n• **Poproś o oznaczenie:** \"Oznacz mnie, jak wrzucisz na swoje Stories!\"\n\nWiększość klientek chętnie się zgodzi, jeśli są zadowolone z efektu."
            },
            {
              id: "L2-warning-2",
              type: "warning",
              content: "**NIGDY nie publikuj zdjęć klientek bez ich wyraźnej zgody!** To naruszenie prywatności i może skończyć się problemami prawnymi. Zgoda ustna może być kwestionowana – najlepiej mieć ją na piśmie (wiadomość, formularz). Lepiej mieć mniej zdjęć z klientkami niż jedno bez zgody."
            },
            
            // --- SEKCJA 8: Proporcje i planowanie ---
            {
              id: "L2-heading-8",
              type: "heading",
              content: "Jak planować różnorodność treści"
            },
            {
              id: "L2-text-14",
              type: "text",
              content: "**Sugerowane proporcje na 10 postów:**\n\n• 4-5 postów: Efekty zabiegów (Twoje portfolio – fundament)\n• 1-2 posty: Przed i po (transformacje – najwyższe zaangażowanie)\n• 1 post: Proces pracy / kulisy\n• 1 post: Wnętrze / atmosfera / produkty\n• 1-2 posty: Ty / zespół / klientki (human touch)\n\nTo nie jest sztywna zasada – dostosuj do swojego stylu i reakcji obserwujących. Obserwuj, które typy treści generują najwięcej interakcji u Ciebie."
            },
            {
              id: "L2-example-3",
              type: "example",
              content: "**Przykładowy tydzień publikacji (3 posty + codzienne Stories):**\n\n**Poniedziałek:** Post – efekt stylizacji z weekendu, Stories – przygotowanie salonu\n**Wtorek:** Stories – proces pracy (timelapse), Stories – kawa w salonie\n**Środa:** Post – przed/po metamorfoza, Stories – kulisy zabiegu\n**Czwartek:** Stories – nowy produkt, Stories – Q&A z klientkami\n**Piątek:** Post – efekt + Twoje selfie przy pracy, Stories – piątkowy vibe\n**Sobota:** Stories – pracowity dzień, Stories – zadowolona klientka (za zgodą)\n**Niedziela:** Stories – odpoczynek, inspiracja na nowy tydzień"
            }
          ],
          tasks: [
            {
              id: "task-2-1",
              title: "Audyt swojego profilu",
              description: "Przejrzyj ostatnie 12 postów na swoim profilu. Policz ile masz z każdej kategorii. Gdzie masz braki?"
            }
          ],
          checklist: [
            { id: "check-2-1", text: "Znam 6 typów zdjęć dla profilu salonu beauty" },
            { id: "check-2-2", text: "Rozumiem, że różnorodność treści utrzymuje zainteresowanie" },
            { id: "check-2-3", text: "Wiem, że przed/po to najbardziej angażujący content" },
            { id: "check-2-4", text: "Pamiętam o zgodzie na zdjęcia klientek" },
            { id: "check-2-5", text: "Znam sugerowane proporcje typów treści" }
          ],
          keyTakeaways: [
            "6 typów zdjęć: efekty, przed/po, proces, wnętrze, Ty i zespół, klientki",
            "Efekty zabiegów to 40-50% contentu – Twoje główne portfolio",
            "Zdjęcia przed/po generują największe zaangażowanie – to Twoje złoto",
            "Różnorodność sprawia, że profil jest ciekawy – mieszaj kategorie",
            "ZAWSZE pytaj klientki o zgodę na publikację ich zdjęć"
          ],
          nextLessonTitle: "Światło – najważniejszy element fotografii"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 3 - ŚWIATŁO
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-3-swiatlo",
          title: "Światło – najważniejszy element fotografii",
          description: "Opanuj podstawy oświetlenia, które całkowicie zmienią jakość Twoich zdjęć.",
          estimatedMinutes: 22,
          intro: "Światło to najważniejszy element fotografii – ważniejszy niż aparat, niż telefon, niż jakikolwiek sprzęt. Dobre światło sprawia, że zdjęcie z telefonu za 1000 zł wygląda lepiej niż zdjęcie z aparatu za 10 000 zł przy złym świetle. W tej lekcji nauczysz się wykorzystywać światło naturalne i sztuczne.",
          sections: [
            // --- SEKCJA 1: Dlaczego światło jest najważniejsze ---
            {
              id: "L3-heading-1",
              type: "heading",
              content: "Dlaczego światło jest tak ważne"
            },
            {
              id: "L3-text-1",
              type: "text",
              content: "Fotografia dosłownie oznacza \"rysowanie światłem\" (z greckiego: photos = światło, graphein = rysować). Bez odpowiedniego światła **nie istnieje dobre zdjęcie** – nawet najdroższy aparat tego nie zmieni.\n\nŚwiatło wpływa na wszystko:\n\n• **Kolory** – czy lakier wygląda tak jak w rzeczywistości\n• **Detale** – czy widać precyzję Twojej pracy\n• **Ostrość** – telefon lepiej ostrzy przy dobrym świetle\n• **Skóra** – czy wygląda zdrowo, bez żółtych/szarych odcieni\n• **Nastrój** – czy zdjęcie jest przyjemne dla oka"
            },
            {
              id: "L3-comparison-1",
              type: "comparison",
              content: "",
              comparison: {
                good: {
                  title: "Dobre światło (okno)",
                  description: "Kolory prawdziwe, detale widoczne, zdjęcie ostre, skóra naturalna",
                  example: "Profesjonalne portfolio"
                },
                bad: {
                  title: "Złe światło (żarówka)",
                  description: "Kolory żółte/brudne, cienie, zdjęcie rozmazane, skóra niezdrowa",
                  example: "Amatorskie zdjęcie"
                }
              }
            },
            {
              id: "L3-tip-1",
              type: "tip",
              content: "Jeśli masz tylko 5 minut na poprawę swoich zdjęć – poprawa światła da największy efekt. Zanim kupisz cokolwiek (statywy, lampy, tła), naucz się korzystać ze światła, które już masz."
            },
            
            // --- SEKCJA 2: Światło naturalne ---
            {
              id: "L3-heading-2",
              type: "heading",
              content: "Światło naturalne – darmowe i najlepsze"
            },
            {
              id: "L3-text-2",
              type: "text",
              content: "Światło naturalne z okna to **najlepsza opcja** dla zdjęć beauty. Jest darmowe, miękkie, oddaje prawdziwe kolory i schlebia skórze. Profesjonalni fotografowie płacą tysiące za sprzęt, który imituje światło z okna – Ty masz je za darmo.\n\n**Najważniejsza zasada:** NIGDY nie rób zdjęć pod światło (z oknem za plecami). Obiekt (dłoń, twarz) powinien być **obrócony PRZODEM do okna**. To jedyna zasada, którą musisz zapamiętać na start."
            },
            {
              id: "L3-text-3",
              type: "text",
              content: "**Trzy ustawienia względem okna:**\n\n**1. Frontalnie (twarzą do okna)**\nObiekt jest obrócony prosto do okna. Światło pada równomiernie, płasko. Minimalne cienie. Idealne dla: flat lay, produktów, zdjęć z góry.\n\n**2. Pod kątem 45° (bokiem do okna)**\nObiekt jest lekko obrócony. Światło modeluje, tworzy delikatne cienie, które dodają głębi. Idealne dla: paznokci, twarzy, makijażu.\n\n**3. Z boku (profilem do okna)**\nŚwiatło pada z boku. Dramatyczne oświetlenie, mocne cienie. Idealne dla: artystycznych ujęć, efektów specjalnych."
            },
            {
              id: "L3-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Znajdź najlepsze okno** – Idealne okno jest duże i wychodzi na północ (światło równomierne przez cały dzień, bez ostrych cieni). Okna na wschód/zachód są dobre rano/wieczorem. Okna na południe wymagają zasłonki rozpraszającej."
            },
            {
              id: "L3-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Unikaj bezpośredniego słońca** – Ostre słońce powoduje przepalenia (zbyt jasne plamy) i twarde cienie. Idealnie: pochmurny dzień lub cienka zasłonka/roleta rozpraszająca światło."
            },
            {
              id: "L3-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Wybierz najlepsze godziny** – Najwięcej światła: 10:00-14:00. Unikaj robienia zdjęć po 17:00 zimą (za ciemno) lub w samo południe latem przy ostrym słońcu (za jasno, twarde cienie)."
            },
            {
              id: "L3-example-1",
              type: "example",
              content: "**Jak ustawić stanowisko przy oknie:**\n\n1. Stolik/blat ustawiony RÓWNOLEGLE do okna (nie pod oknem, nie naprzeciwko)\n2. Klientka/obiekt obrócony PRZODEM do okna (twarz/dłoń w stronę światła)\n3. Ty stoisz PLECAMI do okna (światło pada na obiekt, nie na Ciebie)\n4. Odległość od okna: 50-100 cm (bliżej = mocniejsze światło)\n\nTo podstawowe ustawienie, które działa w 90% przypadków."
            },
            {
              id: "L3-warning-1",
              type: "warning",
              content: "**Najczęstszy błąd:** Robienie zdjęć pod światło (okno za obiektem). Wtedy obiekt jest ciemny (sylwetka), a tło jasne. Telefon nie potrafi tego skompensować. Zawsze obracaj obiekt PRZODEM do źródła światła!"
            },
            
            // --- SEKCJA 3: Co jeśli nie masz dobrego okna ---
            {
              id: "L3-heading-3",
              type: "heading",
              content: "Kiedy światło naturalne nie wystarczy"
            },
            {
              id: "L3-text-4",
              type: "text",
              content: "Są sytuacje, gdy światło naturalne nie wystarcza:\n\n• Pracujesz wieczorami (zima, późne godziny)\n• Nie masz dobrego okna w salonie\n• Pogoda jest bardzo pochmurna\n• Potrzebujesz stałych warunków przez cały rok\n\nW takich przypadkach potrzebujesz **sztucznego oświetlenia**. Dobra wiadomość: nie musisz wydawać fortuny."
            },
            {
              id: "L3-text-5",
              type: "text",
              content: "**Lampa pierścieniowa (ring light)** – najpopularniejsze rozwiązanie dla branży beauty.\n\n**Zalety:**\n• Równomierne, miękkie światło\n• Eliminuje cienie pod oczami i na dłoniach\n• Piękny okrągły refleks w oczach\n• Łatwa w użyciu (jedna lampa, jeden kierunek)\n\n**Na co zwrócić uwagę przy zakupie:**\n• Minimum 10\" średnicy (małe lampy są za słabe)\n• Regulacja jasności (dimmer)\n• Regulacja temperatury barwowej (ciepłe/zimne)\n• Statyw w zestawie\n• Budżet: 150-300 zł za dobrą lampę"
            },
            {
              id: "L3-tip-2",
              type: "tip",
              content: "Nie kupuj najtańszej lampy za 50 zł – szybko się psuje, ma słabe światło i trzęsący się statyw. Inwestycja 200-250 zł wystarczy na lata i zwróci się w lepszych zdjęciach."
            },
            
            // --- SEKCJA 4: Temperatura barwowa ---
            {
              id: "L3-heading-4",
              type: "heading",
              content: "Temperatura barwowa – dlaczego ma znaczenie"
            },
            {
              id: "L3-text-6",
              type: "text",
              content: "**Temperatura barwowa** określa, czy światło jest ciepłe (żółtawe) czy zimne (niebieskawe). Mierzy się ją w Kelvinach (K).\n\n• **2700-3000K** – ciepłe, żółtawe (jak świeczka, zachód słońca)\n• **4000-4500K** – neutralne (jak dzień pochmurny)\n• **5500-6500K** – zimne, niebieskawe (jak chmury, cień)\n\n**Dla zdjęć beauty najlepsza temperatura to 4500-5500K** – neutralna, oddająca prawdziwe kolory. Lakiery będą wyglądać tak, jak w rzeczywistości."
            },
            {
              id: "L3-text-7",
              type: "text",
              content: "**Dlaczego temperatura ma znaczenie?**\n\nZłe kolory na zdjęciu to jeden z najczęstszych problemów. Klientka wybiera lakier na podstawie zdjęcia, przychodzi – a lakier wygląda inaczej. To Twoja wina, nie jej.\n\nPrzy ciepłym świetle (żarówka) biały lakier wygląda żółto. Przy zimnym świetle niebieski lakier wygląda fioletowo. Neutralne światło = prawdziwe kolory."
            },
            {
              id: "L3-warning-2",
              type: "warning",
              content: "**NIE MIESZAJ różnych źródeł światła!** Lampa LED + żarówka sufitowa + światło z okna = chaos kolorystyczny, którego nie poprawisz edycją. Wybierz JEDNO źródło światła i wyłącz resztę."
            },
            {
              id: "L3-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Masz okno od południa. Słońce świeci bezpośrednio na stanowisko. Co robisz?",
                options: [
                  "Robię zdjęcia – dużo światła to zawsze dobrze",
                  "Zasłaniam okno cienką zasłonką lub roletą",
                  "Czekam na wieczór",
                  "Włączam dodatkowo lampę sufitową dla wyrównania"
                ],
                correctIndex: 1,
                explanation: "Bezpośrednie słońce = twarde cienie i przepalenia. Cienka zasłonka rozprasza światło, zachowując jego ilość, ale eliminując ostre cienie. To standardowa technika w fotografii."
              }
            },
            
            // --- SEKCJA 5: Praktyczne wskazówki ---
            {
              id: "L3-heading-5",
              type: "heading",
              content: "Praktyczne wskazówki do światła"
            },
            {
              id: "L3-step-4",
              type: "step",
              stepNumber: 1,
              content: "**Stwórz \"stację foto\"** – Jedno miejsce w salonie, zawsze te same warunki. Stolik przy oknie lub lampa pierścieniowa w kącie. Nie musisz za każdym razem szukać światła."
            },
            {
              id: "L3-step-5",
              type: "step",
              stepNumber: 2,
              content: "**Wyłącz światło sufitowe** – Żarówki sufitowe rzucają żółte światło i tworzą cienie pod obiektami. Przy zdjęciach wyłącz je i polegaj tylko na oknie lub ring light."
            },
            {
              id: "L3-step-6",
              type: "step",
              stepNumber: 3,
              content: "**Użyj białej kartki jako odbijacza** – Jeśli jedna strona obiektu jest za ciemna (cienie), ustaw białą kartkę/karton z tej strony. Odbije światło i wyrówna cienie."
            },
            {
              id: "L3-step-7",
              type: "step",
              stepNumber: 4,
              content: "**Testuj o różnych porach** – Światło zmienia się w ciągu dnia. Zrób zdjęcia tej samej dłoni rano, w południe i wieczorem. Zobacz, kiedy masz najlepsze warunki."
            },
            {
              id: "L3-example-2",
              type: "example",
              content: "**Szybki test światła:**\n\nZanim zaczniesz sesję zdjęciową, zrób szybki test:\n\n1. Ustaw dłoń w miejscu, gdzie będziesz robić zdjęcia\n2. Popatrz na cienie – czy są ostre czy miękkie?\n3. Sprawdź kolor skóry – czy wygląda naturalnie?\n4. Zrób jedno zdjęcie telefonem – czy kolory są prawdziwe?\n\nJeśli coś jest nie tak – popraw ustawienie zanim zaczniesz właściwą sesję."
            }
          ],
          tasks: [
            {
              id: "task-3-1",
              title: "Test światła w Twoim salonie",
              description: "Zrób to samo zdjęcie dłoni: 1) przy oknie, 2) pod lampą sufitową, 3) z ring light (jeśli masz). Porównaj różnice w kolorach i cieniach."
            }
          ],
          checklist: [
            { id: "check-3-1", text: "Wiem, że obiekt ma być PRZODEM do okna, nie pod światło" },
            { id: "check-3-2", text: "Znam 3 ustawienia względem okna (frontalnie, 45°, z boku)" },
            { id: "check-3-3", text: "Rozumiem, czym jest temperatura barwowa i dlaczego 4500-5500K jest idealne" },
            { id: "check-3-4", text: "Wiem, że nie wolno mieszać różnych źródeł światła" },
            { id: "check-3-5", text: "Rozważam stworzenie \"stacji foto\" w salonie" }
          ],
          keyTakeaways: [
            "Światło naturalne z okna = najlepsza, darmowa opcja dla zdjęć beauty",
            "Obiekt PRZODEM do okna, nigdy pod światło (sylwetka)",
            "Nie mieszaj różnych źródeł światła – jeden typ na raz",
            "Temperatura 4500-5500K = neutralna, prawdziwe kolory lakierów",
            "Lampa pierścieniowa (150-300 zł) to dobra inwestycja na wieczory i pochmurne dni"
          ],
          nextLessonTitle: "Kompozycja i kadrowanie"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 4 - KOMPOZYCJA I KADROWANIE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-4-kompozycja",
          title: "Kompozycja i kadrowanie",
          description: "Proste zasady układania kadru, które sprawią, że Twoje zdjęcia będą wyglądać profesjonalnie.",
          estimatedMinutes: 20,
          intro: "Nie musisz być artystą ani kończyć szkoły fotografii. Kilka prostych zasad kompozycji wystarczy, żeby Twoje zdjęcia wyglądały 10x lepiej. W tej lekcji poznasz konkretne techniki, które możesz zastosować od razu.",
          sections: [
            // --- SEKCJA 1: Czym jest kompozycja ---
            {
              id: "L4-heading-1",
              type: "heading",
              content: "Czym jest kompozycja"
            },
            {
              id: "L4-text-1",
              type: "text",
              content: "Kompozycja to sposób, w jaki układasz elementy w kadrze. Gdzie jest główny obiekt? Co jest w tle? Ile pustej przestrzeni?\n\nDobra kompozycja sprawia, że zdjęcie jest:\n\n• **Czytelne** – od razu wiadomo, co jest ważne\n• **Przyjemne dla oka** – oko naturalnie wędruje po zdjęciu\n• **Profesjonalne** – wygląda jak z sesji, nie przypadkowe\n\nZła kompozycja sprawia, że nawet świetna praca wygląda amatorsko."
            },
            {
              id: "L4-tip-1",
              type: "tip",
              content: "Różnica między zdjęciem amatorskim a profesjonalnym to często nie sprzęt, a kompozycja. Te same paznokcie, ten sam telefon – ale inne ułożenie w kadrze robi ogromną różnicę."
            },
            
            // --- SEKCJA 2: Zasada trójpodziału ---
            {
              id: "L4-heading-2",
              type: "heading",
              content: "Zasada trójpodziału"
            },
            {
              id: "L4-text-2",
              type: "text",
              content: "To najprostsza i najskuteczniejsza zasada kompozycji. Podziel kadr na 9 równych części – 3 kolumny i 3 rzędy. Powstają 4 przecięcia linii.\n\n**Główny obiekt umieść na przecięciu linii, nie na środku kadru.**\n\nDlaczego to działa? Oko naturalnie wędruje do tych punktów. Zdjęcie z obiektem na przecięciu jest bardziej dynamiczne i ciekawe niż z obiektem dokładnie na środku."
            },
            {
              id: "L4-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Włącz siatkę w aparacie telefonu:**\n• iPhone: Ustawienia → Aparat → Siatka (włącz)\n• Android: Ustawienia aparatu → Linie pomocnicze / Siatka\n\nTeraz przy robieniu zdjęć widzisz linie – umieszczaj główny element na przecięciach."
            },
            {
              id: "L4-example-1",
              type: "example",
              content: "**Jak stosować trójpodział do paznokci:**\n\n• **Zbliżenie na dłoń:** Paznokcie na prawym lub lewym przecięciu, nie na środku\n• **Flat lay (z góry):** Dłoń w dolnej części kadru, na linii dolnej\n• **Portret klientki:** Oczy na górnej linii poziomej\n\nNie każde zdjęcie musi idealnie pasować do siatki – to wskazówka, nie sztywna zasada. Ale 80% zdjęć wygląda lepiej z trójpodziałem."
            },
            
            // --- SEKCJA 3: Tło ---
            {
              id: "L4-heading-3",
              type: "heading",
              content: "Tło – niedoceniany bohater"
            },
            {
              id: "L4-text-3",
              type: "text",
              content: "Tło to wszystko, co jest za Twoim głównym obiektem. Może wspierać zdjęcie lub je rujnować.\n\n**Dobre tło:**\n• Czyste, nie odwraca uwagi od obiektu\n• Spójne kolorystycznie\n• Pasuje do estetyki profilu\n\n**Złe tło:**\n• Bałagan (nożyczki, butelki, papierki, klucze)\n• Inne osoby (klientki w tle, czyjeś ręce)\n• Kolorowy chaos (wszystko innego koloru)\n• Rozpraszające elementy (ekran komputera, telewizor, plakaty)"
            },
            {
              id: "L4-warning-1",
              type: "warning",
              content: "Klientka widzi WSZYSTKO na zdjęciu – nawet rzeczy, których Ty nie zauważasz. Bałagan w tle = nieprofesjonalizm. Nawet jeśli paznokcie są idealne, brudny stolik w tle podważa zaufanie."
            },
            {
              id: "L4-text-4",
              type: "text",
              content: "**Proste rozwiązania dla dobrego tła:**\n\n• **Biała kartka A3** (2-5 zł) – najprostsze tło do flat lay\n• **Szary/beżowy karton** – eleganckie, neutralne tło\n• **Marmurowa folia samoprzylepna** (20-30 zł) – luksusowy look\n• **Deska do krojenia** – naturalne, ciepłe tło\n• **Ściana** – wybierz jedno czyste miejsce i używaj zawsze\n• **Tkanina** – len, aksamit, tkanina w kolorze marki"
            },
            {
              id: "L4-tip-2",
              type: "tip",
              content: "Stwórz 2-3 tła i używaj ich naprzemiennie. Spójność tła = spójna estetyka profilu. Nie musisz wymyślać koła na nowo przy każdym zdjęciu."
            },
            
            // --- SEKCJA 4: Kąty fotografowania ---
            {
              id: "L4-heading-4",
              type: "heading",
              content: "Kąty fotografowania"
            },
            {
              id: "L4-text-5",
              type: "text",
              content: "Ten sam obiekt sfotografowany z różnych kątów wygląda zupełnie inaczej. Znajomość kątów daje Ci różnorodność bez zmiany tematu.\n\n**Kąty dla paznokci:**\n• **45° z góry** – najczęstszy, uniwersalny, pokazuje całość dłoni\n• **Prosto z góry (90°)** – flat lay, idealny dla wzorów i detali\n• **Z boku (0°)** – profil paznokci, pokazuje kształt i długość\n• **Lekko od dołu** – dramatyczny efekt, rzadko używany"
            },
            {
              id: "L4-text-6",
              type: "text",
              content: "**Kąty dla twarzy/makijażu:**\n• **Na wysokości oczu** – naturalne, przyjazne, buduje kontakt\n• **Lekko z góry** – wysmukla twarz, powiększa oczy\n• **Z boku (profil)** – pokazuje kontur, rzęsy, brwi z boku\n\n**Kąty dla wnętrza salonu:**\n• **Z poziomu oczu** – pokazuje przestrzeń tak jak ją widzimy\n• **Z rogu pokoju** – głębia, pokazuje całość\n• **Detale z bliska** – produkty, dekoracje, tekstury"
            },
            
            // --- SEKCJA 5: Wypełnienie kadru ---
            {
              id: "L4-heading-5",
              type: "heading",
              content: "Wypełnienie kadru – podejdź bliżej!"
            },
            {
              id: "L4-text-7",
              type: "text",
              content: "Najczęstszy błąd początkujących: za dużo pustej przestrzeni wokół obiektu. Mała dłoń gdzieś na środku, dookoła morze tła.\n\n**Zasada: główny obiekt powinien zajmować 60-80% kadru.**\n\nPodejdź bliżej! Zbliżenie pokazuje detale, jakość pracy, precyzję. Oddalone zdjęcie pokazuje... nic szczególnego."
            },
            {
              id: "L4-comparison-1",
              type: "comparison",
              content: "",
              comparison: {
                good: {
                  title: "Wypełniony kadr",
                  description: "Paznokcie zajmują 70% zdjęcia, widać detale i precyzję",
                  example: "\"Wow, jaka jakość pracy!\""
                },
                bad: {
                  title: "Pusty kadr",
                  description: "Mała dłoń na środku, dużo pustego tła",
                  example: "\"Nie widzę szczegółów...\""
                }
              }
            },
            {
              id: "L4-step-2",
              type: "step",
              stepNumber: 1,
              content: "**Przed zrobieniem zdjęcia zadaj sobie pytanie:** \"Czy mogę podejść bliżej?\" Jeśli tak – podejdź. Potem zadaj pytanie jeszcze raz. Dopiero gdy naprawdę nie możesz bliżej – rób zdjęcie."
            },
            {
              id: "L4-step-3",
              type: "step",
              stepNumber: 2,
              content: "**Jeśli nie możesz podejść bliżej** – użyj zoomu cyfrowego LUB przytnij zdjęcie w edycji. Lepiej przyciąć i stracić trochę jakości niż mieć puste zdjęcie."
            },
            
            // --- SEKCJA 6: Spójność profilu ---
            {
              id: "L4-heading-6",
              type: "heading",
              content: "Spójność profilu"
            },
            {
              id: "L4-text-8",
              type: "text",
              content: "Na Instagramie **siatka profilu** to pierwsze, co widzi klientka – miniaturki wszystkich Twoich zdjęć obok siebie. Ta siatka powinna wyglądać spójnie i profesjonalnie.\n\n**Jak osiągnąć spójność:**\n• Te same tła (lub paleta 2-3 tła)\n• Podobna kolorystyka (ciepła/zimna/neutralna)\n• Ten sam styl edycji (ten sam filtr lub preset)\n• Konsekwentne kadrowanie (podobne proporcje)"
            },
            {
              id: "L4-text-9",
              type: "text",
              content: "**Spójność NIE oznacza monotonii.** Możesz mieć różnorodne treści (efekty, kulisy, Ty), ale w ramach jednej estetyki. Wszystko powinno wyglądać, jakby pochodziło z tego samego \"świata\".\n\nPomyśl o tym jak o identyfikacji wizualnej – restauracja ma spójne menu, wizytówki, wnętrze. Ty masz spójny profil."
            },
            {
              id: "L4-tip-3",
              type: "tip",
              content: "Zanim opublikujesz nowe zdjęcie, sprawdź jak wygląda obok poprzednich. Aplikacje jak Preview (darmowa) pozwalają zobaczyć układ siatki PRZED publikacją. Możesz przestawiać zdjęcia i planować posty."
            },
            {
              id: "L4-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Masz piękne zdjęcie paznokci, ale jest na neonowo-zielonym tle, a Twój profil ma estetykę beżowo-białą. Co robisz?",
                options: [
                  "Publikuję – zdjęcie jest świetne",
                  "Nie publikuję lub zmieniam tło przed publikacją",
                  "Publikuję ale dodaję ostrzeżenie w opisie",
                  "Zmieniam całą estetykę profilu"
                ],
                correctIndex: 1,
                explanation: "Jedno niespójne zdjęcie może zburzyć estetykę całego profilu. Lepiej nie publikować lub zmienić tło (w edycji lub zrobić nowe zdjęcie). Spójność > pojedyncze dobre zdjęcie."
              }
            }
          ],
          tasks: [
            {
              id: "task-4-1",
              title: "Włącz siatkę i przetestuj",
              description: "Włącz siatkę w aparacie telefonu i zrób 5 zdjęć używając zasady trójpodziału. Porównaj z poprzednimi zdjęciami."
            }
          ],
          checklist: [
            { id: "check-4-1", text: "Mam włączoną siatkę w aparacie telefonu" },
            { id: "check-4-2", text: "Rozumiem zasadę trójpodziału – obiekt na przecięciu linii" },
            { id: "check-4-3", text: "Wiem, że tło ma ogromne znaczenie i mam plan na czyste tła" },
            { id: "check-4-4", text: "Będę wypełniać kadr – podchodzić bliżej" },
            { id: "check-4-5", text: "Rozumiem znaczenie spójności profilu" }
          ],
          keyTakeaways: [
            "Zasada trójpodziału: główny obiekt na przecięciu linii, nie na środku",
            "Czyste tło = profesjonalizm. Bałagan w tle rujnuje nawet świetne zdjęcie",
            "Podejdź bliżej – główny obiekt powinien zajmować 60-80% kadru",
            "Spójność profilu buduje rozpoznawalność i profesjonalny wizerunek"
          ],
          nextLessonTitle: "Telefon jako aparat profesjonalny"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 5 - TELEFON JAKO APARAT
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-5-telefon",
          title: "Telefon jako aparat profesjonalny",
          description: "Ustawienia i triki, które wyciągną maksimum z aparatu w Twoim telefonie.",
          estimatedMinutes: 18,
          intro: "Twój telefon ma więcej możliwości niż myślisz. Ta lekcja pokaże Ci ustawienia, które natychmiast poprawią jakość zdjęć – bez kupowania czegokolwiek, bez aplikacji, tylko wbudowane funkcje.",
          sections: [
            // --- SEKCJA 1: Czyść obiektyw ---
            {
              id: "L5-heading-1",
              type: "heading",
              content: "Zasada numer 1: Czyść obiektyw!"
            },
            {
              id: "L5-text-1",
              type: "text",
              content: "Brzmi banalnie, ale **80% rozmytych zdjęć to brudny obiektyw**. Telefon leży w kieszeni, torbie, na stole. Obiektyw zbiera tłuszcz z palców, kurz, okruszki, smugi.\n\nBrudny obiektyw = rozmyte, matowe zdjęcia z dziwną mgiełką.\n\n**Przed każdą sesją zdjęciową:** Przetrzyj obiektyw miękką ściereczką (z okularów) lub czystą koszulką (bawełna)."
            },
            {
              id: "L5-warning-1",
              type: "warning",
              content: "NIE wycieraj obiektywu papierowym ręcznikiem lub serwetką – mogą porysować szkło. Używaj miękkiej tkaniny lub specjalnej ściereczki do obiektywów."
            },
            
            // --- SEKCJA 2: Ostrość i ekspozycja ---
            {
              id: "L5-heading-2",
              type: "heading",
              content: "Kontroluj ostrość i jasność"
            },
            {
              id: "L5-text-2",
              type: "text",
              content: "Telefon domyślnie sam decyduje, co ma być ostre i jak jasne ma być zdjęcie. Ale możesz to kontrolować!\n\n**Dotknij ekranu** w miejscu, które ma być ostre – telefon ustawi ostrość dokładnie tam.\n\n**Przytrzymaj palec** na ekranie przez 2 sekundy – zablokujesz ostrość i ekspozycję (AE/AF Lock). Teraz możesz zmieniać kąt bez utraty ustawień.\n\n**Przesuń palcem w górę/dół** (po dotknięciu) – regulujesz jasność zdjęcia. W dół = ciemniej, w górę = jaśniej."
            },
            {
              id: "L5-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Przy zdjęciach paznokci:** Dotknij dokładnie paznokcia na ekranie. Telefon ustawi ostrość na paznokciach, nie na tle."
            },
            {
              id: "L5-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Jeśli zdjęcie jest za jasne (przepalone):** Przesuń palcem W DÓŁ po dotknięciu ekranu. Lekko przyciemnij, żeby zachować szczegóły w jasnych miejscach."
            },
            {
              id: "L5-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Przy zmieniających się warunkach:** Przytrzymaj palec, żeby zablokować ustawienia. Potem możesz robić kilka zdjęć z tymi samymi ustawieniami."
            },
            {
              id: "L5-example-1",
              type: "example",
              content: "**Problem:** Robisz zdjęcie paznokci przy oknie. Telefon sam ustawia ekspozycję na jasne okno w tle – paznokcie wychodzą ciemne.\n\n**Rozwiązanie:** Dotknij palcem paznokcie na ekranie. Telefon ustawi ekspozycję na nie, ignorując jasne tło. Paznokcie będą dobrze widoczne."
            },
            
            // --- SEKCJA 3: HDR ---
            {
              id: "L5-heading-3",
              type: "heading",
              content: "HDR – kiedy włączać, kiedy wyłączać"
            },
            {
              id: "L5-text-3",
              type: "text",
              content: "**HDR** (High Dynamic Range) to funkcja, która łączy kilka zdjęć w jedno. Dzięki temu zachowujesz szczegóły zarówno w ciemnych, jak i jasnych miejscach.\n\n**Włącz HDR gdy:**\n• Duży kontrast (jasne okno + ciemne wnętrze)\n• Zdjęcia na zewnątrz w słoneczny dzień\n• Scena ma bardzo jasne i bardzo ciemne elementy\n\n**Wyłącz HDR gdy:**\n• Fotografujesz ruch (może być rozmyte przez łączenie zdjęć)\n• Masz kontrolowane światło (ring light, studio)\n• Zależy Ci na szybkości (HDR jest wolniejszy)"
            },
            {
              id: "L5-tip-1",
              type: "tip",
              content: "W większości przypadków zostaw HDR na \"Auto\" – telefon sam zdecyduje. Ręcznie wyłączaj tylko przy fotografowaniu ruchu lub gdy zauważysz dziwne efekty."
            },
            
            // --- SEKCJA 4: Tryb portretowy ---
            {
              id: "L5-heading-4",
              type: "heading",
              content: "Tryb portretowy – pułapka przy zdjęciach paznokci"
            },
            {
              id: "L5-text-4",
              type: "text",
              content: "**Tryb portretowy** rozmywa tło, wyodrębniając główny obiekt. Brzmi świetnie, ale ma poważne ograniczenia.\n\n**Dobry dla:**\n• Selfie (Twoja twarz)\n• Portretów klientek\n• Produktu na tle salonu (np. lakier)\n\n**ZŁY dla:**\n• Paznokci (telefon często rozmywa końcówki paznokci!)\n• Drobnych detali (algorytm ma problem z małymi obiektami)\n• Skomplikowanych kształtów (np. rozpostarte palce)"
            },
            {
              id: "L5-warning-2",
              type: "warning",
              content: "**Częsty problem:** Tryb portretowy rozmywa końcówki paznokci, bo algorytm myśli, że to tło. Efekt: paznokcie wyglądają na rozpływające się. Do zdjęć paznokci używaj ZWYKŁEGO trybu zdjęć."
            },
            
            // --- SEKCJA 5: Który obiektyw ---
            {
              id: "L5-heading-5",
              type: "heading",
              content: "Który obiektyw wybrać"
            },
            {
              id: "L5-text-5",
              type: "text",
              content: "Nowoczesne telefony mają 2-4 obiektywy. Który wybrać?\n\n**Główny obiektyw (1x)** – najlepsza jakość, używaj domyślnie. Na iPhonie i Samsungach to środkowy przycisk.\n\n**Ultraszerokokątny (0.5x)** – zniekształca proporcje (szersze w rogach). Unikaj do zdjęć paznokci i portretów. Dobry tylko do wnętrz salonu.\n\n**Tele (2x, 3x)** – przybliżenie. Gorszy w słabym świetle, ale eliminuje zniekształcenia przy zbliżeniach. Dobry do detali przy dobrym oświetleniu."
            },
            {
              id: "L5-tip-2",
              type: "tip",
              content: "Zasada: używaj głównego obiektywu (1x) jako domyślnego. Tylko w specjalnych sytuacjach przełączaj na inne. Główny obiektyw ma najlepszy sensor i najlepszą jakość."
            },
            
            // --- SEKCJA 6: Stabilizacja ---
            {
              id: "L5-heading-6",
              type: "heading",
              content: "Stabilizacja – koniec z rozmazanymi zdjęciami"
            },
            {
              id: "L5-text-6",
              type: "text",
              content: "Trzęsące się ręce = rozmyte zdjęcia. To szczególnie widoczne przy słabym świetle, gdy telefon potrzebuje dłuższego czasu naświetlania.\n\n**Jak stabilizować telefon:**\n\n• **Oprzyj łokcie o stół** – stabilizujesz całe ramiona\n• **Trzymaj telefon oburącz** – jedna ręka trzyma, druga wspiera\n• **Użyj timera 3s** – naciskasz przycisk, odliczanie daje czas na ustabilizowanie\n• **Mini statyw** (30-60 zł) – najlepsza inwestycja, telefon stoi sam"
            },
            {
              id: "L5-step-4",
              type: "step",
              stepNumber: 1,
              content: "**Przy zdjęciach paznokci:** Ustaw dłoń klientki na stole. Oprzyj swoje łokcie o ten sam stół. Teraz oboje jesteście stabilni względem siebie."
            },
            {
              id: "L5-step-5",
              type: "step",
              stepNumber: 2,
              content: "**Użyj timera 3 sekundy:** Ustawienia aparatu → Timer → 3s. Naciskasz przycisk, masz 3 sekundy na ustabilizowanie przed zdjęciem."
            },
            {
              id: "L5-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Chcesz zrobić zdjęcie paznokci. Który tryb aparatu wybierasz?",
                options: [
                  "Tryb portretowy – ładnie rozmywa tło",
                  "Zwykły tryb zdjęć – lepiej radzi sobie z drobnymi detalami",
                  "Tryb nocny – więcej szczegółów",
                  "Tryb wideo – screen z wideo"
                ],
                correctIndex: 1,
                explanation: "Tryb portretowy ma problem z drobnymi obiektami jak paznokcie – często rozmywa końcówki. Zwykły tryb zdjęć z manualnym ustawieniem ostrości da najlepsze rezultaty."
              }
            }
          ],
          tasks: [
            {
              id: "task-5-1",
              title: "Przetestuj dotykanie ekranu",
              description: "Zrób 3 zdjęcia tej samej dłoni: 1) automatycznie, 2) dotykając tła, 3) dotykając paznokci. Zobacz różnicę w ostrości i jasności."
            }
          ],
          checklist: [
            { id: "check-5-1", text: "Będę czyścić obiektyw przed każdą sesją zdjęciową" },
            { id: "check-5-2", text: "Umiem ustawić ostrość dotknięciem ekranu" },
            { id: "check-5-3", text: "Wiem jak regulować jasność (przesunięcie góra/dół)" },
            { id: "check-5-4", text: "Nie używam trybu portretowego do zdjęć paznokci" },
            { id: "check-5-5", text: "Znam metody stabilizacji telefonu" }
          ],
          keyTakeaways: [
            "Czyść obiektyw przed każdą sesją – brudny obiektyw = rozmyte zdjęcia",
            "Dotknij ekranu = ostrość tam gdzie chcesz. Przesuń = reguluj jasność",
            "Do zdjęć paznokci używaj zwykłego trybu, NIE portretowego (rozmywa końcówki)",
            "Stabilizuj telefon – oprzyj łokcie, użyj timera lub mini statywu"
          ],
          nextLessonTitle: "Zdjęcia przed i po – szczegółowy poradnik"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 6 - PRZED I PO
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-6-przed-po",
          title: "Zdjęcia przed i po – szczegółowy poradnik",
          description: "Jak robić wiarygodne i angażujące zdjęcia transformacji, które budują zaufanie.",
          estimatedMinutes: 20,
          intro: "Zdjęcia przed/po to Twój najsilniejszy content – generują najwięcej zaangażowania i najlepiej pokazują wartość Twojej pracy. Ale muszą być zrobione PRAWIDŁOWO, żeby były wiarygodne. Ta lekcja to kompletny poradnik.",
          sections: [
            // --- SEKCJA 1: Zasada identycznych warunków ---
            {
              id: "L6-heading-1",
              type: "heading",
              content: "Zasada nr 1: Identyczne warunki"
            },
            {
              id: "L6-text-1",
              type: "text",
              content: "To najważniejsza zasada zdjęć przed/po. **PRZED i PO muszą być zrobione w dokładnie tych samych warunkach:**\n\n✓ To samo światło (to samo okno, ta sama lampa)\n✓ Ten sam kąt (45°? z góry? z boku?)\n✓ Ta sama odległość (tak samo blisko/daleko)\n✓ To samo tło (ten sam stolik, ta sama kartka)\n✓ Ten sam telefon/aparat (ta sama jakość)\n\nJeśli warunki są różne – transformacja wygląda niewiarygodnie. Klientki pomyślą, że to manipulacja."
            },
            {
              id: "L6-comparison-1",
              type: "comparison",
              content: "",
              comparison: {
                good: {
                  title: "Wiarygodne przed/po",
                  description: "Oba zdjęcia przy tym samym oknie, ten sam kąt, to samo tło",
                  example: "\"Wow, jaka różnica! To naprawdę ta sama osoba!\""
                },
                bad: {
                  title: "Niewiarygodne przed/po",
                  description: "PRZED w ciemnym pokoju, PO przy jasnym oknie z innego kąta",
                  example: "\"Hmm, czy to naprawdę ta sama osoba? Wygląda na photoshop...\""
                }
              }
            },
            {
              id: "L6-warning-1",
              type: "warning",
              content: "Zdjęcie \"przed\" w ciemnym pokoju + \"po\" przy oknie = wygląda jak oszustwo, nawet jeśli nim nie jest. Klientki są uczulone na manipulacje – daj im wiarygodne porównanie."
            },
            
            // --- SEKCJA 2: Organizacja sesji przed/po ---
            {
              id: "L6-heading-2",
              type: "heading",
              content: "Jak zorganizować sesję przed/po"
            },
            {
              id: "L6-step-1",
              type: "step",
              stepNumber: 1,
              content: "**PRZED zabiegiem:** Zrób zdjęcie w miejscu, gdzie zrobisz też zdjęcie PO. Najlepiej przy oknie lub pod ring light. Zapamiętaj ustawienia!"
            },
            {
              id: "L6-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Zapamiętaj ustawienia:** Jaki kąt? Jaka odległość? Które światło? Najlepiej zaznacz miejsce na stole (np. taśma, znak) i zawsze rób zdjęcia TAM."
            },
            {
              id: "L6-step-3",
              type: "step",
              stepNumber: 3,
              content: "**PO zabiegu:** Wróć DOKŁADNIE do tego samego miejsca. Odtwórz te same warunki. Ta sama pozycja dłoni/twarzy."
            },
            {
              id: "L6-text-2",
              type: "text",
              content: "**Stwórz \"stację foto\" dla przed/po:**\n\nWyznacz jedno miejsce w salonie dedykowane zdjęciom przed/po:\n\n• Stolik przy oknie (lub z ring light)\n• Stałe tło (kartka, mata)\n• Oznaczone miejsce na dłoń/twarz\n• Zawsze te same warunki\n\nDzięki temu nie musisz za każdym razem myśleć – wiesz dokładnie gdzie i jak robić zdjęcia."
            },
            {
              id: "L6-tip-1",
              type: "tip",
              content: "Zrób sobie \"kartę ustawień\" – zapisz lub zrób zdjęcie swoich ustawień. Przykład: \"Stolik nr 2, 50cm od okna, dłoń na białej kartce, kąt 45°, światło naturalne\". Wiesz dokładnie jak odtworzyć warunki."
            },
            
            // --- SEKCJA 3: Co pokazywać w przed/po ---
            {
              id: "L6-heading-3",
              type: "heading",
              content: "Co pokazywać w przed/po"
            },
            {
              id: "L6-text-3",
              type: "text",
              content: "**Najlepsze transformacje dla przed/po:**\n\n• **Paznokcie:** zniszczone/odpryski → odbudowane i pomalowane\n• **Paznokcie:** odrosty po 3-4 tygodniach → świeża stylizacja\n• **Brwi:** przerzedzone/niesymetryczne → pełne, wystylizowane\n• **Włosy:** suche/przefarbowane → świeży kolor, odżywione\n• **Rzęsy:** naturalne, krótkie → przedłużone, podkręcone\n• **Skóra:** zmęczona, szara → rozświetlona po zabiegu\n\nIm bardziej dramatyczna zmiana, tym większe zaangażowanie."
            },
            {
              id: "L6-text-4",
              type: "text",
              content: "**Czego UNIKAĆ w przed/po:**\n\n✗ Minimalnych zmian (\"przed\" i \"po\" wyglądają tak samo – po co pokazywać?)\n✗ Różnych klientek (to oszustwo i może być prawnie problematyczne!)\n✗ Filtrów tylko na zdjęciu PO (niewiarygodne)\n✗ Zmienionych warunków (ciemne przed, jasne po)"
            },
            
            // --- SEKCJA 4: Formaty przed/po ---
            {
              id: "L6-heading-4",
              type: "heading",
              content: "Formaty przed/po na social media"
            },
            {
              id: "L6-text-5",
              type: "text",
              content: "Masz kilka opcji prezentacji przed/po na Facebooku i Instagramie:\n\n**Karuzela (2+ zdjęcia)**\nPierwsze zdjęcie: PRZED\nDrugie zdjęcie: PO\n→ Klientka przesuwa = większe zaangażowanie (interakcja = algorytm lubi)\n→ Najlepszy format dla Instagrama\n\n**Kolaż (1 zdjęcie)**\nLewa strona: PRZED | Prawa strona: PO\n→ Wszystko widać na pierwszy rzut oka\n→ Łatwiejsze do udostępniania\n→ Dobre dla Facebooka\n\n**Wideo/Reel**\nPrzejście z PRZED do PO (transition)\n→ Najbardziej angażujące\n→ Potencjał viralowy\n→ Wymaga trochę więcej pracy"
            },
            {
              id: "L6-mockup-1",
              type: "mockup",
              content: "Post przed/po jako karuzela:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postImage: "before-after",
                postCaption: "Przesuń i zobacz różnicę 👉\n\nOdbudowa po hybrydie – 3 miesiące systematycznej pracy 💪\n\nPlastuś paznokci? Da się naprawić!\n\n#metamorfoza #odbudowapaznokci",
                postLikes: "89",
                postComments: "14",
                description: "Karuzela przed/po z wezwaniem do przesunięcia"
              }
            },
            {
              id: "L6-tip-2",
              type: "tip",
              content: "Karuzela to najlepszy format dla przed/po na Instagramie. Wymusza interakcję (przesunięcie), co algorytm traktuje jako zaangażowanie. Napisz \"Przesuń!\" w opisie – zwiększa liczbę przesunięć."
            },
            
            // --- SEKCJA 5: Zgoda klientki ---
            {
              id: "L6-heading-5",
              type: "heading",
              content: "Zgoda klientki – obowiązek prawny"
            },
            {
              id: "L6-text-6",
              type: "text",
              content: "**ZAWSZE pytaj o zgodę przed publikacją zdjęć klientki!**\n\nNajlepszy moment: po zakończonym zabiegu, gdy klientka jest zadowolona z efektu.\n\n\"Efekt jest świetny! Mogę zrobić zdjęcie przed/po na profil salonu? Będzie anonimowe – tylko dłonie/brwi/włosy.\"\n\nWiększość klientek zgodzi się, jeśli:\n• Są zadowolone z efektu\n• Pytasz uprzejmie\n• Zdjęcie jest anonimowe (bez twarzy, chyba że się zgodzą)"
            },
            {
              id: "L6-text-7",
              type: "text",
              content: "**Dokumentuj zgodę:**\n\nZgoda ustna może być później kwestionowana. Lepiej mieć ją na piśmie:\n\n• Wiadomość SMS/Messenger z pytaniem i odpowiedzią \"tak\"\n• Prosty formularz papierowy (imię, data, podpis)\n• E-mail z potwierdzeniem\n\nTo chroni Ciebie w razie problemów."
            },
            {
              id: "L6-warning-2",
              type: "warning",
              content: "Publikacja zdjęć bez zgody = naruszenie prywatności. Może to być podstawa do:\n• Skargi do salonu\n• Negatywnych opinii\n• W skrajnych przypadkach – pozwu\n\nLepiej mieć mniej zdjęć z klientkami niż jedno bez zgody."
            }
          ],
          tasks: [
            {
              id: "task-6-1",
              title: "Stwórz stację foto przed/po",
              description: "Wyznacz jedno miejsce w salonie do zdjęć przed/po. Zapisz ustawienia (światło, kąt, odległość, tło)."
            }
          ],
          checklist: [
            { id: "check-6-1", text: "Rozumiem zasadę identycznych warunków (światło, kąt, odległość, tło)" },
            { id: "check-6-2", text: "Wiem jak zorganizować sesję przed/po" },
            { id: "check-6-3", text: "Znam 3 formaty przed/po (karuzela, kolaż, wideo)" },
            { id: "check-6-4", text: "Zawsze będę pytać klientki o zgodę i dokumentować ją" }
          ],
          keyTakeaways: [
            "PRZED i PO = identyczne warunki (światło, kąt, odległość, tło) – inaczej wygląda na oszustwo",
            "Stwórz \"stację foto\" – jedno miejsce, zawsze te same warunki, zero improwizacji",
            "Karuzela (przesuń) = najlepszy format na Instagramie, wymusza interakcję",
            "Zgoda klientki = obowiązkowa i udokumentowana"
          ],
          nextLessonTitle: "Edycja zdjęć – szybko i skutecznie"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 7 - EDYCJA ZDJĘĆ
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-7-edycja",
          title: "Edycja zdjęć – szybko i skutecznie",
          description: "Proste poprawki, które zajmą 2 minuty i uczynią Twoje zdjęcia profesjonalnymi.",
          estimatedMinutes: 18,
          intro: "Nie potrzebujesz Photoshopa ani zaawansowanych umiejętności. Podstawowe poprawki w telefonie wystarczą, żeby Twoje zdjęcia wyglądały profesjonalnie. Ta lekcja pokaże Ci 5 kluczowych korekt i jak je robić szybko.",
          sections: [
            // --- SEKCJA 1: Filozofia edycji ---
            {
              id: "L7-heading-1",
              type: "heading",
              content: "Filozofia edycji: mniej = lepiej"
            },
            {
              id: "L7-text-1",
              type: "text",
              content: "**Cel edycji:** Poprawić to, czego aparat nie wychwycił prawidłowo. Rozjaśnić, wyostrzyć, poprawić kolory – NIE zmienić całkowicie wygląd.\n\n**Zasada:** Jeśli klientka nie pozna swojej dłoni/twarzy na zdjęciu – przesadziłaś z edycją.\n\nEdycja ma sprawiać, że zdjęcie wygląda jak rzeczywistość, tylko \"lepiej oświetlona\". Nie ma udawać czegoś, czym nie jest."
            },
            {
              id: "L7-warning-1",
              type: "warning",
              content: "**Przesadzona edycja = utrata zaufania.** Klientka przychodzi z oczekiwaniami opartymi na filtrowanych zdjęciach i jest rozczarowana rzeczywistością. To prowadzi do negatywnych opinii i braku powrotów. Bądź autentyczna."
            },
            
            // --- SEKCJA 2: 5 podstawowych poprawek ---
            {
              id: "L7-heading-2",
              type: "heading",
              content: "5 poprawek, które wystarczą"
            },
            {
              id: "L7-text-2",
              type: "text",
              content: "Nie musisz znać 50 suwaków i narzędzi. Te 5 poprawek rozwiązuje 90% problemów ze zdjęciami:"
            },
            {
              id: "L7-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Kadrowanie i prostowanie**\nPrzytnij niepotrzebne elementy. Wypełnij kadr obiektem. Wyprostuj horyzont (linia podłogi/stołu powinna być pozioma). To ZAWSZE pierwsza poprawka."
            },
            {
              id: "L7-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Jasność (ekspozycja)**\nLekko rozjaśnij, jeśli zdjęcie jest ciemne. Ale uwaga: nie przepalaj świateł! Jeśli jasne miejsca tracą detale – cofnij trochę."
            },
            {
              id: "L7-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Kontrast**\nDelikatnie zwiększ (+10-25). Kolory będą żywsze, zdjęcie zyska głębię. Za dużo kontrastu = nienaturalne cienie i światła."
            },
            {
              id: "L7-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Nasycenie**\nLekkie zwiększenie (+5-15) ożywia kolory lakieru i skóry. NIE przesadzaj! Przesycone zdjęcia wyglądają tanio i neonowo."
            },
            {
              id: "L7-step-5",
              type: "step",
              stepNumber: 5,
              content: "**Ostrość**\nDelikatne wyostrzenie (+10-25) wydobywa detale paznokci. Za dużo ostrości = szum i \"ziarniste\" zdjęcie. Lepiej mniej niż więcej."
            },
            {
              id: "L7-tip-1",
              type: "tip",
              content: "Złota zasada: każdy suwak przesuwaj o 10-20%, nie więcej. Efekt powinien być subtelny – jeśli zmiana rzuca się w oczy, prawdopodobnie przesadziłaś."
            },
            
            // --- SEKCJA 3: Gdzie edytować ---
            {
              id: "L7-heading-3",
              type: "heading",
              content: "Gdzie edytować zdjęcia"
            },
            {
              id: "L7-text-3",
              type: "text",
              content: "**Wbudowana edycja w telefonie:**\n\n• **iPhone:** Otwórz Zdjęcia → wybierz zdjęcie → Edycja\n• **Android:** Otwórz Galerię → wybierz zdjęcie → Edytuj\n\nWbudowane narzędzia wystarczą do 90% potrzeb. Mają kadrowanie, jasność, kontrast, nasycenie, ostrość – wszystko czego potrzebujesz."
            },
            {
              id: "L7-text-4",
              type: "text",
              content: "**Darmowe aplikacje (gdy potrzebujesz więcej):**\n\n• **Snapseed** (Google) – najprostsza, świetne narzędzia, za darmo\n• **Lightroom Mobile** – profesjonalna, presety, darmowa wersja wystarczy\n• **VSCO** – filtry i presety, spójność profilu\n\n**Rekomendacja:** Zacznij od wbudowanej edycji. Jeśli potrzebujesz więcej – Snapseed jest najłatwiejszy do nauki i kompletnie darmowy."
            },
            
            // --- SEKCJA 4: Presety ---
            {
              id: "L7-heading-4",
              type: "heading",
              content: "Presety – spójność bez wysiłku"
            },
            {
              id: "L7-text-5",
              type: "text",
              content: "**Preset** to zapisane ustawienia edycji, które możesz zastosować jednym kliknięciem.\n\n**Korzyści:**\n• Oszczędność czasu (2 sekundy zamiast 2 minut)\n• Spójność profilu (wszystkie zdjęcia w tym samym stylu)\n• Profesjonalny, rozpoznawalny wygląd"
            },
            {
              id: "L7-text-6",
              type: "text",
              content: "**Jak stworzyć własny preset (Lightroom Mobile):**\n\n1. Wyedytuj jedno zdjęcie dokładnie tak, jak chcesz\n2. Naciśnij 3 kropki (menu) → \"Utwórz ustawienie\" (Create Preset)\n3. Nazwij preset (np. \"Mój salon\")\n4. Zapisz\n\nTeraz przy każdym nowym zdjęciu: otwórz → Ustawienia → wybierz swój preset → gotowe! Drobne korekty w razie potrzeby."
            },
            {
              id: "L7-example-1",
              type: "example",
              content: "**Przykładowy preset dla zdjęć paznokci:**\n\n• Jasność: +10\n• Kontrast: +15\n• Nasycenie: +8\n• Ostrość: +12\n• Cienie: +5 (rozjaśnia ciemne miejsca)\n• Biel: -5 (zapobiega przepaleniom)\n\nTen preset można zastosować do większości zdjęć paznokci przy naturalnym świetle. Drobne korekty w zależności od zdjęcia."
            },
            
            // --- SEKCJA 5: Czego NIE robić ---
            {
              id: "L7-heading-5",
              type: "heading",
              content: "Czego NIE robić w edycji"
            },
            {
              id: "L7-text-7",
              type: "text",
              content: "**Błędy edycji, które rujnują zaufanie:**\n\n✗ **Filtry zmieniające kolor lakieru** – klientka wybiera kolor na podstawie zdjęcia!\n✗ **Mocne wygładzanie skóry** – \"plastic look\", nienaturalne\n✗ **Przesadzone nasycenie** – neonowe, nierealistyczne kolory\n✗ **Retusz usuwający naturalną fakturę skóry** – wygląda jak manekin\n✗ **Zbyt mocne wyostrzenie** – szum, ziarnistość, brzydkie krawędzie\n✗ **Rozjaśnianie do białej skóry** – nienaturalne i może być obraźliwe"
            },
            {
              id: "L7-comparison-1",
              type: "comparison",
              content: "",
              comparison: {
                good: {
                  title: "Dobra edycja",
                  description: "Rozjaśnione, lekko zwiększony kontrast, naturalne kolory",
                  example: "Wygląda profesjonalnie i autentycznie"
                },
                bad: {
                  title: "Zła edycja",
                  description: "Przesadzone nasycenie, wygładzona skóra, neonowe kolory",
                  example: "Wygląda sztucznie i budzi nieufność"
                }
              }
            },
            {
              id: "L7-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka ma lakier bordowy, ale po Twojej edycji wygląda na różowy. Co robisz?",
                options: [
                  "Publikuję – różowy jest ładniejszy",
                  "Cofam edycję kolorów – kolor musi być prawdziwy",
                  "Dodaję więcej filtrów, żeby było jeszcze ładniej",
                  "Piszę w opisie, że to bordowy"
                ],
                correctIndex: 1,
                explanation: "Kolor na zdjęciu MUSI odpowiadać rzeczywistości. Klientka może wybrać usługę na podstawie zdjęcia i będzie rozczarowana, gdy efekt będzie inny. To podważa zaufanie i prowadzi do reklamacji."
              }
            },
            
            // --- SEKCJA 6: Workflow ---
            {
              id: "L7-heading-6",
              type: "heading",
              content: "Szybki workflow edycji (2 minuty)"
            },
            {
              id: "L7-text-8",
              type: "text",
              content: "Oto szybki przepis na edycję każdego zdjęcia w 2 minuty:\n\n**1. Kadrowanie (15 sek)** – Przytnij, wyprostuj, wypełnij kadr\n**2. Jasność (15 sek)** – Rozjaśnij jeśli ciemne, ale nie przepalaj\n**3. Kontrast (15 sek)** – +10-20, nie więcej\n**4. Nasycenie (15 sek)** – +5-15, sprawdź kolory\n**5. Ostrość (15 sek)** – +10-20, patrz na detale\n**6. Ostateczne sprawdzenie (30 sek)** – Czy wygląda naturalnie? Czy kolory są prawdziwe?\n\nJeśli masz preset – kroki 2-5 to jedno kliknięcie. Całość: 30 sekund."
            },
            {
              id: "L7-tip-2",
              type: "tip",
              content: "Po edycji porównaj z oryginałem (większość aplikacji ma przycisk \"przed/po\"). Jeśli różnica jest drastyczna – prawdopodobnie przesadziłaś. Cofnij i zacznij od nowa z łagodniejszymi ustawieniami."
            }
          ],
          tasks: [
            {
              id: "task-7-1",
              title: "Stwórz swój pierwszy preset",
              description: "Wyedytuj jedno zdjęcie paznokci tak, jak lubisz. Zapisz ustawienia jako preset. Zastosuj do 3 innych zdjęć i sprawdź czy działa."
            }
          ],
          checklist: [
            { id: "check-7-1", text: "Znam 5 podstawowych poprawek (kadr, jasność, kontrast, nasycenie, ostrość)" },
            { id: "check-7-2", text: "Rozumiem filozofię \"mniej = lepiej\" w edycji" },
            { id: "check-7-3", text: "Wiem jak stworzyć i użyć preset" },
            { id: "check-7-4", text: "Nie będę zmieniać kolorów lakierów filtrowaniem" },
            { id: "check-7-5", text: "Potrafię wyedytować zdjęcie w 2 minuty" }
          ],
          keyTakeaways: [
            "5 podstawowych poprawek: kadrowanie, jasność, kontrast, nasycenie, ostrość",
            "Mniej = lepiej. Jeśli zmiana jest widoczna od razu – prawdopodobnie przesadziłaś",
            "Presety = spójność profilu + oszczędność czasu (2 sekundy zamiast 2 minut)",
            "Kolor na zdjęciu = kolor w rzeczywistości. Nie zmieniaj kolorów lakierów!"
          ]
        }
      ]
    }
  ]
};
