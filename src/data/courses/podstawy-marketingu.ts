import { Course } from "@/types/courses";

export const podstawyMarketinguCourse: Course = {
  id: "podstawy-marketingu-salonu-beauty",
  title: "Podstawy marketingu salonu beauty",
  description: "Poznaj fundamenty skutecznego marketingu w branży beauty i zrozum, jak klientki wybierają salony.",
  icon: "Target",
  color: "emerald",
  totalLessons: 7,
  estimatedHours: 3.5,
  modules: [
    {
      id: "modul-1-podstawy",
      title: "Podstawy marketingu salonu",
      description: "Zrozum, czym jest marketing organiczny i jak klientki podejmują decyzje.",
      lessons: [
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 1 - CZYM JEST MARKETING ORGANICZNY
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-1-czym-jest-marketing-organiczny",
          title: "Czym jest marketing organiczny",
          description: "Poznaj, czym jest marketing organiczny, jakie ma możliwości i ograniczenia.",
          estimatedMinutes: 15,
          intro: "W tej lekcji dowiesz się, czym jest marketing organiczny, jak działa w praktyce i dlaczego jest fundamentem sukcesu każdego salonu beauty. Zrozumiesz różnicę między płatną reklamą a organicznym budowaniem obecności online.",
          sections: [
            // --- SEKCJA 1: Wprowadzenie ---
            {
              id: "L1-heading-1",
              type: "heading",
              content: "Twój profil to witryna sklepu"
            },
            {
              id: "L1-text-1",
              type: "text",
              content: "Pomyśl o swoich profilach na Facebooku i Instagramie jak o witrynie sklepu na głównej ulicy. Witryna musi być:\n\n• **Atrakcyjna** – żeby przyciągnąć wzrok przechodniów\n• **Aktualna** – żeby pokazać, że sklep działa\n• **Zachęcająca** – żeby ktoś chciał wejść do środka\n\nRóżnica? Twoje \"witryny\" w social mediach ogląda znacznie więcej osób niż przechodzących obok fizycznego salonu."
            },
            {
              id: "L1-tip-intro",
              type: "tip",
              content: "Aż 8 na 10 klientek sprawdza profil w social mediach przed umówieniem się – nawet jeśli dostały polecenie od znajomej. To Twoja pierwsza \"rozmowa\" z potencjalną klientką."
            },
            
            // --- SEKCJA 2: Definicja marketingu organicznego ---
            {
              id: "L1-heading-2",
              type: "heading",
              content: "Czym jest marketing organiczny"
            },
            {
              id: "L1-text-2",
              type: "text",
              content: "**Marketing organiczny** to wszystkie działania w social mediach, za które nie płacisz bezpośrednio platformie. To Twoja codzienna praca nad profilami na Facebooku i Instagramie – publikowanie zdjęć, Stories, Reelsów, odpowiadanie na komentarze i wiadomości."
            },
            {
              id: "L1-text-organic-paid",
              type: "text",
              content: "**Marketing płatny (reklamy)** to płacenie Meta (Facebook i Instagram) za pokazanie treści nowym osobom. Daje szybki zasięg i może być świetnym uzupełnieniem – ale najlepiej działa w połączeniu z aktywnymi profilami organicznymi."
            },
            
            // --- SEKCJA 3: Co konkretnie robisz ---
            {
              id: "L1-heading-3",
              type: "heading",
              content: "Co konkretnie robisz w marketingu organicznym"
            },
            {
              id: "L1-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Publikujesz treści** – Posty ze zdjęciami prac, Stories z życia salonu, Reelsy pokazujące efekty zabiegów. To Twoje portfolio i wizytówka jednocześnie – zarówno na FB jak i IG."
            },
            {
              id: "L1-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Budujesz relacje** – Odpowiadasz na komentarze, wiadomości (Messenger i DM), reagujesz na Stories obserwujących. Klientka, która czuje się zauważona, wraca."
            },
            {
              id: "L1-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Pokazujesz kulisy** – Życie salonu, przygotowania, Twoja codzienność. To buduje zaufanie i poczucie znajomości, zanim klientka przekroczy próg."
            },
            {
              id: "L1-example-1",
              type: "example",
              content: "**Skuteczne Stories z kulis (FB + IG):**\n\n• \"Poranki w salonie\" – przygotowanie stanowiska, kawa, muzyka\n• \"Nowa dostawa lakierów\" – rozpakowywanie paczki, reakcja\n• \"Przed i po\" – metamorfoza, ale w formacie wideo\n• \"Odpowiadam na pytanie\" – klientka pyta, Ty odpowiadasz na Stories\n\nTe proste treści budują relację silniej niż perfekcyjne posty."
            },
            
            // --- SEKCJA 4: Prawda o zasięgach ---
            {
              id: "L1-heading-4",
              type: "heading",
              content: "Prawda o zasięgach organicznych"
            },
            {
              id: "L1-text-3",
              type: "text",
              content: "Oto coś, o czym warto wiedzieć wprost: **organiczne zasięgi w social mediach są ograniczone**. Algorytmy Facebooka i Instagrama nie pokazują Twoich postów wszystkim obserwującym."
            },
            {
              id: "L1-warning-1",
              type: "warning",
              content: "Średnio tylko **5-15% Twoich obserwujących** widzi Twój post organicznie. Jeśli masz 1000 followersów, Twój post zobaczy 50-150 osób. Resztę algorytm po prostu nie pokaże."
            },
            {
              id: "L1-text-4",
              type: "text",
              content: "To nie znaczy, że marketing organiczny nie działa – działa doskonale, ale **jego główna funkcja jest inna** niż myśli większość właścicielek salonów."
            },
            {
              id: "L1-quiz-2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka z polecenia wchodzi na Twój profil. Po co tam zagląda?",
                options: [
                  "Żeby się dowiedzieć, że w ogóle istniejesz",
                  "Żeby zweryfikować, czy polecenie koleżanki było trafione",
                  "Żeby od razu zarezerwować wizytę",
                  "Żeby porównać Twoje ceny z konkurencją"
                ],
                correctIndex: 1,
                explanation: "Profil działa jak wizytówka – potwierdza (lub podważa) to, co klientka już usłyszała. Dobre zdjęcia prac i aktywność budują zaufanie, zanim w ogóle napiszesz \"dzień dobry\"."
              }
            },
            
            // --- SEKCJA 5: Prawdziwa funkcja marketingu organicznego ---
            {
              id: "L1-heading-5",
              type: "heading",
              content: "Do czego naprawdę służy marketing organiczny"
            },
            {
              id: "L1-text-5",
              type: "text",
              content: "Skoro zasięgi są ograniczone, po co w ogóle się trudzić? Bo marketing organiczny pełni **4 kluczowe funkcje**, których nic nie zastąpi:"
            },
            {
              id: "L1-step-4",
              type: "step",
              stepNumber: 1,
              content: "**Wizytówka i portfolio** – Kiedy klientka trafia na Twój profil (z polecenia, wyszukiwania, reklamy), widzi profesjonalny, aktualny profil, który budzi zaufanie. To Twój \"test\" przed pierwszą wizytą."
            },
            {
              id: "L1-step-5",
              type: "step",
              stepNumber: 2,
              content: "**Podtrzymywanie relacji** – Przypominasz o sobie obecnym i byłym klientkom. Kiedy potrzebują wizyty, myślą o Tobie, bo widziały Twoje Stories rano."
            },
            {
              id: "L1-step-6",
              type: "step",
              stepNumber: 3,
              content: "**Budowanie wiarygodności** – Regularnie prowadzone profile na FB i IG to sygnał: ten salon działa, jest profesjonalny, można mu zaufać."
            },
            {
              id: "L1-step-7",
              type: "step",
              stepNumber: 4,
              content: "**Budowanie lojalności** – Stałe klientki widzą Twoje Stories, czują się związane z salonem, wracają regularnie i polecają znajomym."
            },
            {
              id: "L1-tip-2",
              type: "tip",
              content: "Liczba obserwujących NIE jest najważniejsza. Ważniejsze jest: czy profil wygląda profesjonalnie? Czy jest aktywny? Czy odpowiada na pytania klientek? Salon z 500 zaangażowanymi obserwującymi będzie skuteczniejszy niż salon z 5000 kupionych followersów."
            },
            
            // --- SEKCJA 6: Dlaczego to ważne dla beauty ---
            {
              id: "L1-heading-6",
              type: "heading",
              content: "Dlaczego marketing organiczny jest idealny dla branży beauty"
            },
            {
              id: "L1-text-6",
              type: "text",
              content: "Branża beauty jest **idealna** dla marketingu organicznego z trzech powodów:"
            },
            {
              id: "L1-step-8",
              type: "step",
              stepNumber: 1,
              content: "**Wizualność** – Twoje prace to gotowy content. Każda stylizacja, każdy zabieg to potencjalny post, który pokazuje umiejętności. Nie musisz wymyślać treści – robisz je codziennie."
            },
            {
              id: "L1-step-9",
              type: "step",
              stepNumber: 2,
              content: "**Weryfikacja przed wizytą** – 80% klientek sprawdza profil przed umówieniem się. To jedyna branża, gdzie klientki OCZEKUJĄ portfolio online. Profil musi być gotowy na to \"sprawdzenie\"."
            },
            {
              id: "L1-step-10",
              type: "step",
              stepNumber: 3,
              content: "**Regularność wizyt** – Klientki wracają co 2-4 tygodnie. Nie szukasz ciągle nowych osób – budujesz bazę stałych klientek, które wracają. Relacje w social mediach to wspierają."
            },
            
            // --- SEKCJA 7: Podsumowanie i Aurine ---
            {
              id: "L1-heading-7",
              type: "heading",
              content: "Dlaczego uczysz się marketingu organicznego w Aurine"
            },
            {
              id: "L1-text-7",
              type: "text",
              content: "Twój opiekun w Aurine prowadzi dla Ciebie kampanie reklamowe Meta Ads na Facebooku i Instagramie. Te reklamy przyciągają nowe klientki na Twój profil.\n\nAle co one tam zobaczą?"
            },
            {
              id: "L1-text-8",
              type: "text",
              content: "**Marketing organiczny to Twoja wizytówka** – profesjonalne profile, aktualne zdjęcia, angażujące treści. To właśnie sprawdza każda klientka, zanim zdecyduje się na wizytę.\n\nAurine Academy uczy Cię budować silne profile organiczne, które **wspierają kampanie reklamowe**. Im lepsze profile, tym skuteczniejsze reklamy."
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-org-1", text: "Rozumiem, że profile w social mediach to główna wizytówka salonu" },
            { id: "check-org-2", text: "Wiem, czym jest marketing organiczny i co obejmuje" },
            { id: "check-org-3", text: "Rozumiem, że organiczne zasięgi są ograniczone (5-15% obserwujących)" },
            { id: "check-org-4", text: "Znam 4 główne funkcje marketingu organicznego" },
            { id: "check-org-5", text: "Rozumiem, dlaczego dobre profile wspierają skuteczność reklam" }
          ],
          keyTakeaways: [
            "Profile w social mediach to Twoja główna wizytówka – 8 na 10 klientek sprawdza je przed wizytą",
            "Marketing organiczny to codzienna praca: posty, Stories, interakcje – bez płacenia za reklamy",
            "Organiczne zasięgi są ograniczone (5-15%) – główna funkcja to budowanie zaufania, nie pozyskiwanie",
            "Dobre profile organiczne na FB i IG = skuteczniejsze reklamy prowadzone przez Aurine"
          ],
          nextLessonTitle: "Jak klientki wybierają salon beauty"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 2 - JAK KLIENTKI WYBIERAJĄ SALON
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-2-jak-klientki-wybieraja",
          title: "Jak klientki wybierają salon beauty",
          description: "Poznaj proces decyzyjny klientki i zrozum, gdzie szuka informacji o salonach.",
          estimatedMinutes: 20,
          intro: "Zanim przejdziesz do konkretnych działań marketingowych, musisz zrozumieć jedną fundamentalną rzecz: **jak naprawdę myśli klientka, kiedy szuka salonu beauty**. To wiedza, która zmienia wszystko.",
          sections: [
            // --- SEKCJA 1: Wprowadzenie ---
            {
              id: "L2-heading-1",
              type: "heading",
              content: "Psychologia wyboru salonu"
            },
            {
              id: "L2-text-intro",
              type: "text",
              content: "Wybór salonu beauty to proces **emocjonalny**, nie racjonalny. Klientka nie analizuje ofert w Excelu – kieruje się intuicją, wrażeniami i zaufaniem.\n\nWiększość właścicielek salonów sądzi, że klientka \"po prostu szuka salonu i dzwoni\". W rzeczywistości proces składa się z **5 etapów** – i na każdym możesz zyskać lub stracić potencjalną klientkę."
            },
            {
              id: "L2-example-intro",
              type: "example",
              content: "**Piątkowy wieczór Ani**\n\nAnia (32 lata) siedzi na kanapie po pracy. Zauważa, że paznokcie wyglądają źle – za tydzień ma imprezę urodzinową.\n\n1. Otwiera social media i szuka inspiracji: \"jesienne paznokcie\"\n2. Zapisuje 3 style, które jej się podobają\n3. Wpisuje w wyszukiwarkę lokalizację + \"paznokcie hybrydowe\"\n4. Wchodzi na 5 profili salonów, porównuje\n5. Wybiera salon z najładniejszym portfolio i pisze wiadomość\n\n**Cały proces: 25 minut.** Decyzja: głównie wizualna i emocjonalna."
            },
            {
              id: "L2-tip-1",
              type: "tip",
              content: "Zrozumienie tych 5 etapów to klucz do całego marketingu. Kiedy wiesz, JAK klientka myśli, wiesz też CO jej pokazać i KIEDY."
            },
            
            // --- SEKCJA 2: 5 etapów ---
            {
              id: "L2-heading-2",
              type: "heading",
              content: "Etap 1: Uświadomienie potrzeby"
            },
            {
              id: "L2-text-2",
              type: "text",
              content: "Wszystko zaczyna się od momentu, gdy klientka **zauważa potrzebę**. Odrastające paznokcie, zniszczone włosy, zmęczona skóra.\n\nNa tym etapie nie szuka jeszcze konkretnego salonu – dopiero zaczyna o tym myśleć. To może być chwila przed lustrem, komentarz koleżanki, zbliżające się wydarzenie."
            },
            {
              id: "L2-heading-3",
              type: "heading",
              content: "Etap 2: Szukanie inspiracji"
            },
            {
              id: "L2-text-3",
              type: "text",
              content: "Teraz klientka przegląda Facebook, Instagram, Pinterest, TikToka. Szuka pomysłów: \"jaki kolor na jesień?\", \"modne paznokcie 2024\", \"delikatny manicure ślubny\".\n\n**Jeszcze nie szuka GDZIE, tylko CO.** Ale profile salonów, które pojawiają się na tym etapie jako źródło inspiracji, zyskują ogromną przewagę."
            },
            {
              id: "L2-mockup-1",
              type: "mockup",
              content: "Klientka szuka inspiracji – trafia na Twój post z Reelsa:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postImage: "nails",
                postCaption: "Jesienne ombre 2024 🍂 Top 3 kolory tego sezonu:\n1. Burgundowy z brokatem\n2. Dyniowa pomarańcza\n3. Ciepły karmel\n\nKtóry wybierasz? 👇",
                postLikes: "34",
                postComments: "8",
                description: "Post inspiracyjny – klientka zapisuje, a przy okazji odkrywa Twój salon"
              }
            },
            {
              id: "L2-tip-2",
              type: "tip",
              content: "Dlatego tak ważne są posty **inspiracyjne** i **edukacyjne** – nie tylko portfolio. Klientka na etapie inspiracji szuka pomysłów, nie salonu. Ale jeśli znajdzie pomysł U CIEBIE, ma już połowę drogi za sobą."
            },
            {
              id: "L2-heading-4",
              type: "heading",
              content: "Etap 3: Aktywne szukanie salonu"
            },
            {
              id: "L2-text-4",
              type: "text",
              content: "Teraz klientka szuka **konkretnych miejsc**. Wpisuje w Google \"salon paznokci Mokotów\", przegląda hashtagi na Facebooku i Instagramie, pyta znajome.\n\n**Widoczność na tym etapie jest kluczowa.** Jeśli Cię nie znajdzie – nie istniejesz."
            },
            {
              id: "L2-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Facebook i Instagram** – wyszukiwanie po lokalizacji, hashtagach (#paznokcieMokotów), przeglądanie zakładki \"Miejsca\""
            },
            {
              id: "L2-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Google Maps** – \"salon beauty blisko mnie\", opinie, godziny otwarcia"
            },
            {
              id: "L2-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Polecenia znajomych** – pytanie na grupach FB, Messenger, WhatsApp"
            },
            {
              id: "L2-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Booksy i podobne** – przeglądanie profili, sprawdzanie opinii i dostępności"
            },
            {
              id: "L2-heading-5",
              type: "heading",
              content: "Etap 4: Weryfikacja i porównanie"
            },
            {
              id: "L2-text-5",
              type: "text",
              content: "Klientka ma już 3-5 salonów na liście. Teraz wchodzi na profile i **porównuje**. To moment prawdy dla Twojego marketingu organicznego.\n\nCo sprawdza? Zdjęcia prac (jakość, styl), aktualność (ostatni post), opinie (komentarze, recenzje), bio (czy wszystko jasne), Stories (czy salon \"żyje\")."
            },
            {
              id: "L2-comparison-1",
              type: "comparison",
              content: "Co widzi klientka porównując profile?",
              comparison: {
                good: {
                  title: "Profil który wygrywa",
                  description: "Aktualne posty, różnorodne treści, aktywne Stories, profesjonalne zdjęcia, jasne bio z kontaktem, odpowiedzi na komentarze",
                  example: "Ostatni post: wczoraj. Stories: aktywne. Portfolio: wow!"
                },
                bad: {
                  title: "Profil który przegrywa",
                  description: "Ostatni post sprzed 3 tygodni, brak Stories, tylko zdjęcia bez opisów, niejasne bio, zero interakcji",
                  example: "Ostatni post: 23 dni temu. Stories: brak. Wrażenie: martwy salon"
                }
              }
            },
            {
              id: "L2-warning-1",
              type: "warning",
              content: "Klientka podejmuje decyzję w **kilka sekund** scrollowania. Nieaktualny profil = \"ten salon chyba nie działa\" = przewija dalej. Nawet najlepsze umiejętności nie pomogą, jeśli profil nie przekonuje."
            },
            {
              id: "L2-heading-6",
              type: "heading",
              content: "Etap 5: Kontakt i rezerwacja"
            },
            {
              id: "L2-text-6",
              type: "text",
              content: "Klientka wybrała salon – Twój! Teraz pisze wiadomość lub dzwoni. To moment, w którym możesz ją zyskać na lata lub stracić na zawsze.\n\n**Szybkość odpowiedzi ma ogromne znaczenie.** Klientka często pisze do 2-3 salonów jednocześnie. Pierwszy, który odpowie profesjonalnie i szybko – wygrywa."
            },
            {
              id: "L2-example-2",
              type: "example",
              content: "**Test dwóch salonów**\n\nKlientka napisała do dwóch salonów o 19:30:\n\n**Salon A:** Odpowiedź następnego dnia o 10:00 – \"tak mamy terminy\"\n\n**Salon B:** Odpowiedź o 20:15 – \"Cześć! 💕 Mamy termin w piątek o 15:00 lub w sobotę o 11:00. Który Ci pasuje?\"\n\nKtóry salon zdobył klientkę? Salon B. Szybciej, cieplej, konkretniej."
            },
            {
              id: "L2-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Na którym etapie profil organiczny ma NAJWIĘKSZY wpływ na decyzję klientki?",
                options: [
                  "Etap 1 – kiedy uświadamia sobie potrzebę",
                  "Etap 2 – kiedy szuka inspiracji",
                  "Etap 4 – kiedy porównuje profile",
                  "Etap 5 – kiedy pisze wiadomość"
                ],
                correctIndex: 2,
                explanation: "Na etapie porównywania klientka OCENIA Twój profil. To tutaj profesjonalne portfolio, aktualne treści i aktywność decydują o tym, czy dostaniesz szansę. Profil organiczny jest Twoją główną bronią na tym etapie."
              }
            },
            
            // --- SEKCJA 3: Podsumowanie ---
            {
              id: "L2-heading-7",
              type: "heading",
              content: "Jak wykorzystać tę wiedzę"
            },
            {
              id: "L2-text-7",
              type: "text",
              content: "Każdy etap wymaga innego podejścia w marketingu:\n\n• **Etap inspiracji** → publikuj trendy, pomysły, inspiracje\n• **Etap szukania** → używaj hashtagów lokalizacyjnych, bądź widoczna\n• **Etap porównania** → dbaj o portfolio, aktualność, profesjonalizm\n• **Etap kontaktu** → odpowiadaj szybko, ciepło, konkretnie\n\nCały ten kurs uczy Cię, jak być obecną i skuteczną na każdym z tych etapów."
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-L2-1", text: "Rozumiem 5 etapów procesu decyzyjnego klientki" },
            { id: "check-L2-2", text: "Wiem, że etap porównania jest kluczowy dla profilu organicznego" },
            { id: "check-L2-3", text: "Rozumiem znaczenie szybkiej odpowiedzi na wiadomości" },
            { id: "check-L2-4", text: "Wiem, jakie elementy profilu sprawdza klientka przed decyzją" }
          ],
          keyTakeaways: [
            "Klientka przechodzi przez 5 etapów: potrzeba → inspiracja → szukanie → porównanie → kontakt",
            "Etap porównania to moment prawdy – Twój profil musi być lepszy niż konkurencji",
            "Szybka, ciepła odpowiedź na wiadomość może zadecydować o wygranej z konkurencją",
            "Posty inspiracyjne przyciągają klientki już na wczesnym etapie szukania"
          ],
          nextLessonTitle: "Gdzie Twoja klientka szuka salonu"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 3 - GDZIE KLIENTKA SZUKA SALONU
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-3-gdzie-klientka-szuka",
          title: "Gdzie Twoja klientka szuka salonu",
          description: "Poznaj główne kanały, w których klientki szukają salonów beauty.",
          estimatedMinutes: 15,
          intro: "Wiesz już, JAK klientka podejmuje decyzję. Teraz zobaczmy GDZIE szuka. To pomoże Ci zdecydować, gdzie inwestować czas i energię – bo nie musisz być wszędzie.",
          sections: [
            {
              id: "L3-heading-1",
              type: "heading",
              content: "Facebook i Instagram – Twoja główna arena"
            },
            {
              id: "L3-text-1",
              type: "text",
              content: "W branży beauty **Facebook i Instagram to absolutna podstawa**. To tutaj klientki:\n\n• Szukają inspiracji (przeglądają posty, Reelsy)\n• Sprawdzają profile salonów (portfolio, aktualność)\n• Pytają o polecenia (grupy lokalne, znajomi)\n• Rezerwują wizyty (wiadomości, linki do Booksy)\n\nOkoło **70-80% klientek** trafia do salonu właśnie przez te platformy. Dlatego cały ten kurs koncentruje się na budowaniu silnej obecności na FB i IG."
            },
            {
              id: "L3-tip-1",
              type: "tip",
              content: "Facebook świetnie sprawdza się do budowania społeczności lokalnej i obsługi starszych klientek. Instagram to przede wszystkim portfolio i inspiracje dla młodszych odbiorców. Najlepiej prowadzić oba!"
            },
            {
              id: "L3-heading-2",
              type: "heading",
              content: "Google i Mapy – drugie źródło klientek"
            },
            {
              id: "L3-text-2",
              type: "text",
              content: "Google Maps i wizytówka Google Business to **drugie najważniejsze miejsce**. Klientki wpisują \"salon paznokci + dzielnica\" i widzą listę miejsc.\n\nDlaczego to ważne?\n• Klientki z polecenia często weryfikują salon w Google\n• Opinie w Google budują (lub niszczą) zaufanie\n• Lokalne SEO przyciąga klientki szukające \"blisko\""
            },
            {
              id: "L3-heading-3",
              type: "heading",
              content: "Polecenia – najcenniejsze źródło"
            },
            {
              id: "L3-text-3",
              type: "text",
              content: "**Polecenia od znajomych to złoto.** Klientka z polecenia:\n• Jest już wstępnie przekonana\n• Ma wyższe zaufanie od startu\n• Częściej zostaje stałą klientką\n• Chętniej sama poleca dalej\n\nAle uwaga: nawet klientka z polecenia **sprawdza profil w social mediach** przed umówieniem się. Polecenie otwiera drzwi, ale profil musi je \"zamknąć\" – czyli przekonać do rezerwacji."
            },
            {
              id: "L3-comparison-1",
              type: "comparison",
              content: "Skuteczność kanałów dla salonu beauty",
              comparison: {
                good: {
                  title: "Najskuteczniejsze kanały",
                  description: "Facebook + Instagram (70-80% klientek), Google Maps + opinie, polecenia + weryfikacja w social mediach",
                  example: "Focus na FB/IG + podstawy Google = sukces"
                },
                bad: {
                  title: "Mniej skuteczne dla beauty",
                  description: "TikTok (chyba że robisz content wideo), LinkedIn (B2B, nie B2C beauty), tradycyjna reklama (ulotki, billboardy)",
                  example: "Rozprasza uwagę bez realnych efektów"
                }
              }
            },
            {
              id: "L3-heading-4",
              type: "heading",
              content: "Booksy i systemy rezerwacji"
            },
            {
              id: "L3-text-4",
              type: "text",
              content: "Aplikacje jak Booksy to świetne uzupełnienie, ale **nie zastępują social mediów**. Klientka często:\n\n1. Znajduje salon na FB/IG\n2. Sprawdza opinie w Google\n3. Rezerwuje przez Booksy\n\nTo oznacza, że Booksy konwertuje klientki, które już Cię znalazły gdzie indziej. Dlatego najpierw buduj obecność w social mediach."
            },
            {
              id: "L3-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Masz ograniczony czas na marketing. Na czym skupić się w pierwszej kolejności?",
                options: [
                  "TikTok – bo ma największe zasięgi",
                  "Facebook i Instagram – bo tam jest 70-80% klientek",
                  "Booksy – bo tam można rezerwować",
                  "Ulotki w okolicy – bo są tanie"
                ],
                correctIndex: 1,
                explanation: "Facebook i Instagram to podstawa marketingu beauty. Tam klientki szukają, porównują i podejmują decyzje. Inne kanały mogą być uzupełnieniem, ale social media to fundament."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-L3-1", text: "Rozumiem, że Facebook i Instagram to podstawa marketingu beauty" },
            { id: "check-L3-2", text: "Wiem, że Google Business też jest ważny" },
            { id: "check-L3-3", text: "Rozumiem, że nawet klientka z polecenia sprawdza profil" }
          ],
          keyTakeaways: [
            "Facebook i Instagram to główna arena – 70-80% klientek trafia przez social media",
            "Google Maps i opinie to drugie najważniejsze miejsce",
            "Polecenia są najcenniejsze, ale klientki i tak weryfikują salon w social mediach",
            "Skup się na FB i IG – to fundament, reszta to dodatki"
          ],
          nextLessonTitle: "Co wyróżnia skuteczny profil salonu"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 4 - CO WYRÓŻNIA SKUTECZNY PROFIL
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-4-skuteczny-profil",
          title: "Co wyróżnia skuteczny profil salonu",
          description: "Poznaj elementy, które decydują o skuteczności profilu w social mediach.",
          estimatedMinutes: 20,
          intro: "Profil salonu to Twoja cyfrowa wizytówka. W tej lekcji zobaczysz, co odróżnia profile, które przyciągają klientki od tych, które stoją puste.",
          sections: [
            {
              id: "L4-heading-1",
              type: "heading",
              content: "7 elementów skutecznego profilu"
            },
            {
              id: "L4-text-1",
              type: "text",
              content: "Skuteczny profil w social mediach to nie przypadek. Składa się z konkretnych elementów, które razem budują zaufanie i zachęcają do kontaktu. Oto 7 kluczowych elementów:"
            },
            {
              id: "L4-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Profesjonalne zdjęcie profilowe** – Logo lub Twoje zdjęcie. Czytelne nawet w małym rozmiarze. Budzi zaufanie od pierwszej sekundy."
            },
            {
              id: "L4-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Jasne bio** – Kim jesteś, co robisz, gdzie jesteś, jak się umówić. W 150 znakach wszystko jasne."
            },
            {
              id: "L4-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Aktualne portfolio** – Zdjęcia prac w wysokiej jakości. Regularne dodawanie nowych. To Twoja główna broń."
            },
            {
              id: "L4-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Regularność** – Posty minimum 2-3x w tygodniu, Stories codziennie. Pokazuje, że salon \"żyje\"."
            },
            {
              id: "L4-step-5",
              type: "step",
              stepNumber: 5,
              content: "**Różnorodność treści** – Nie tylko zdjęcia prac. Też porady, kulisy, opinie klientek. Buduje głębszą relację."
            },
            {
              id: "L4-step-6",
              type: "step",
              stepNumber: 6,
              content: "**Zaangażowanie** – Odpowiadasz na komentarze i wiadomości. Szybko i ciepło. Pokazuje, że zależy Ci na klientkach."
            },
            {
              id: "L4-step-7",
              type: "step",
              stepNumber: 7,
              content: "**Wyróżnione relacje (IG) / Albumy (FB)** – Cennik, efekty, opinie, FAQ – wszystko uporządkowane i łatwe do znalezienia."
            },
            {
              id: "L4-mockup-1",
              type: "mockup",
              content: "Tak wygląda skuteczny profil na Instagramie:",
              mockupData: {
                platform: "instagram",
                variant: "profile",
                bio: "💅 Stylizacja paznokci | Kraków Kazimierz\n✨ Hybryda • Żel • Nail art\n📍 ul. Józefa 15\n📲 Umów się: link poniżej",
                followers: "1,847",
                following: "324",
                posts: "234",
                description: "Kompletne bio, jasna lokalizacja, CTA do rezerwacji"
              }
            },
            {
              id: "L4-heading-2",
              type: "heading",
              content: "Co NIE działa na profilach beauty"
            },
            {
              id: "L4-warning-1",
              type: "warning",
              content: "**Błędy, które zniechęcają klientki:**\n\n• Nieaktualne posty (ostatni sprzed 2+ tygodni)\n• Tylko zdjęcia prac bez żadnych opisów\n• Brak informacji o lokalizacji i kontakcie\n• Ignorowanie komentarzy i wiadomości\n• Nieczytelne zdjęcie profilowe\n• Prywatny profil zamiast biznesowego"
            },
            {
              id: "L4-comparison-1",
              type: "comparison",
              content: "Porównanie profili",
              comparison: {
                good: {
                  title: "Profil który działa",
                  description: "28 polubień, 7 komentarzy, 3 zapisy, 2 wiadomości o termin – po jednym poście",
                  example: "Aktywność buduje widoczność i zaufanie"
                },
                bad: {
                  title: "Profil który nie działa",
                  description: "15 polubień, 0 komentarzy, 0 zapisów, 0 wiadomości – post znika w ciszy",
                  example: "Brak zaangażowania = brak efektów"
                }
              }
            },
            {
              id: "L4-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka wchodzi na Twój profil i widzi ostatni post sprzed 3 tygodni. Co prawdopodobnie pomyśli?",
                options: [
                  "\"Ten salon ma dużo klientek, nie ma czasu na social media\"",
                  "\"Może salon jest zamknięty albo nie działa?\"",
                  "\"To nie ma znaczenia, ważne są zdjęcia prac\"",
                  "\"Pewnie skupiają się na jakości, nie ilości\""
                ],
                correctIndex: 1,
                explanation: "Nieaktualny profil budzi wątpliwości. Klientka nie wie, czy salon działa. W jej głowie pojawia się niepewność – a niepewność zabija rezerwacje. Nawet prosty post \"Dzień dobry w poniedziałek!\" pokazuje, że salon żyje."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-L4-1", text: "Znam 7 elementów skutecznego profilu" },
            { id: "check-L4-2", text: "Rozumiem, dlaczego regularność jest ważna" },
            { id: "check-L4-3", text: "Wiem, jakie błędy zniechęcają klientki" }
          ],
          keyTakeaways: [
            "7 elementów: zdjęcie profilowe, bio, portfolio, regularność, różnorodność, zaangażowanie, wyróżnione",
            "Nieaktualny profil budzi wątpliwości – klientka nie wie, czy salon działa",
            "Odpowiadanie na komentarze i wiadomości pokazuje, że zależy Ci na klientkach",
            "Różnorodność treści (nie tylko prace) buduje głębszą relację"
          ],
          nextLessonTitle: "Pierwsze wrażenie – 3 sekundy decydują"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 5 - PIERWSZE WRAŻENIE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-5-pierwsze-wrazenie",
          title: "Pierwsze wrażenie – 3 sekundy decydują",
          description: "Dowiedz się, jak klientka ocenia Twój profil w pierwszych sekundach.",
          estimatedMinutes: 15,
          intro: "Masz 3 sekundy. Tyle zajmuje klientce decyzja: zostać i przewijać dalej, czy wyjść i szukać gdzie indziej. Co zobaczy w te 3 sekundy?",
          sections: [
            {
              id: "L5-heading-1",
              type: "heading",
              content: "Co klientka widzi w pierwszych 3 sekundach"
            },
            {
              id: "L5-text-1",
              type: "text",
              content: "Kiedy klientka wchodzi na Twój profil, jej mózg błyskawicznie przetwarza:\n\n1. **Zdjęcie profilowe** – czy wygląda profesjonalnie?\n2. **Nazwa** – czy brzmi jak salon beauty?\n3. **Bio** – czy od razu widać, czym się zajmujesz?\n4. **Grid (siatka postów)** – czy zdjęcia wyglądają dobrze?\n5. **Aktywność** – czy profil wygląda na aktywny?\n\nTo wszystko dzieje się podświadomie w ułamku sekundy. Klientka nie analizuje – CZUJE. \"Profesjonalne\" lub \"Nie dla mnie\"."
            },
            {
              id: "L5-example-1",
              type: "example",
              content: "**Test 3 sekund**\n\nPoproś znajomą, która NIE zna Twojego salonu, żeby weszła na Twój profil. Po 3 sekundach niech zamknie oczy i odpowie:\n\n• Co robisz? (stylizacja paznokci? makijaż? fryzjer?)\n• Gdzie jesteś? (miasto? dzielnica?)\n• Czy wygląda profesjonalnie?\n• Czy chciałaby umówić wizytę?\n\nJeśli nie może odpowiedzieć – Twoje pierwsze wrażenie wymaga pracy."
            },
            {
              id: "L5-tip-1",
              type: "tip",
              content: "Zrób screenshota swojego profilu i popatrz na niego oczami klientki, która Cię NIE ZNA. Czy wszystko jest jasne? Czy wygląda zachęcająco?"
            },
            {
              id: "L5-heading-2",
              type: "heading",
              content: "Elementy pierwszego wrażenia"
            },
            {
              id: "L5-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Zdjęcie profilowe** – Najlepiej logo lub profesjonalne zdjęcie. Czytelne nawet w małym rozmiarze. Unikaj: selfie, zdjęć z wakacji, nieczytelnych obrazków."
            },
            {
              id: "L5-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Nazwa profilu** – Nazwa salonu lub Twoje imię + specjalizacja. Unikaj: nicków, skomplikowanych znaków, numerków."
            },
            {
              id: "L5-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Bio** – W pierwszej linii: CO robisz i GDZIE. Potem: jak się umówić. Unikaj: ogólników, cytatów, emoji-spamu."
            },
            {
              id: "L5-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Grid postów** – Spójna estetyka, jakościowe zdjęcia, różnorodność (nie tylko paznokcie z jednego kąta). Unikaj: ciemnych zdjęć, chaosu kolorystycznego."
            },
            {
              id: "L5-mockup-1",
              type: "mockup",
              content: "Facebook – profil który robi dobre pierwsze wrażenie:",
              mockupData: {
                platform: "facebook",
                variant: "profile-header",
                profileName: "Salon Urody Kasia",
                username: "salonurodykasia",
                followers: "1,247",
                description: "Spójna estetyka i jasne informacje od pierwszego spojrzenia"
              }
            },
            {
              id: "L5-comparison-1",
              type: "comparison",
              content: "Dobre vs słabe pierwsze wrażenie",
              comparison: {
                good: {
                  title: "Dobre pierwsze wrażenie",
                  description: "Od razu wiadomo: co robisz (stylizacja paznokci), gdzie jesteś (Kraków Kazimierz), jak się umówić (link/telefon)",
                  example: "Klientka myśli: \"O, to wygląda profesjonalnie!\""
                },
                bad: {
                  title: "Słabe pierwsze wrażenie",
                  description: "Niejasne bio (\"Kocham to co robię 💕\"), brak lokalizacji, chaotyczne zdjęcia, nieczytelne zdjęcie profilowe",
                  example: "Klientka myśli: \"Hmm, nie wiem... przewinę dalej.\""
                }
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-L5-1", text: "Rozumiem, że mam 3 sekundy na pierwsze wrażenie" },
            { id: "check-L5-2", text: "Wiem, jakie elementy klientka ocenia podświadomie" },
            { id: "check-L5-3", text: "Zrobiłam test 3 sekund ze znajomą" }
          ],
          keyTakeaways: [
            "Masz 3 sekundy na zrobienie wrażenia – decyzja jest podświadoma",
            "Klientka ocenia: zdjęcie profilowe, nazwę, bio, grid, aktywność",
            "Zrób test 3 sekund – poproś kogoś obcego o ocenę",
            "Bio musi od razu odpowiadać: CO robisz, GDZIE jesteś, JAK się umówić"
          ],
          nextLessonTitle: "Algorytm social mediów – jak działa"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 6 - ALGORYTM
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-6-algorytm",
          title: "Algorytm social mediów – jak działa",
          description: "Zrozum podstawy działania algorytmu i jak go wykorzystać.",
          estimatedMinutes: 20,
          intro: "\"Algorytm mnie nie lubi!\" – to częsta wymówka. Ale prawda jest taka, że algorytm po prostu reaguje na to, co robisz (lub czego nie robisz). Zrozum jego logikę, a przestanie być wrogiem.",
          sections: [
            {
              id: "L6-heading-1",
              type: "heading",
              content: "Czym jest algorytm Facebooka i Instagrama"
            },
            {
              id: "L6-text-1",
              type: "text",
              content: "Algorytm to system, który decyduje, KOMU pokazać Twój post. Facebook i Instagram mają miliardy postów dziennie – nie da się pokazać wszystkich. Algorytm wybiera, które są \"warte\" pokazania.\n\n**Cel algorytmu:** Zatrzymać ludzi w aplikacji jak najdłużej. Dlatego pokazuje treści, które generują zaangażowanie (komentarze, zapisy, udostępnienia)."
            },
            {
              id: "L6-tip-1",
              type: "tip",
              content: "Algorytm to nie wróg – to narzędzie. Kiedy zrozumiesz jego logikę, możesz ją wykorzystać. Treści, które ludzie lubią oglądać = treści, które algorytm promuje."
            },
            {
              id: "L6-heading-2",
              type: "heading",
              content: "Co algorytm nagradza"
            },
            {
              id: "L6-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Zaangażowanie** – Komentarze, zapisy, udostępnienia są cenniejsze niż polubienia. Im więcej interakcji, tym więcej osób zobaczy post."
            },
            {
              id: "L6-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Czas oglądania** – Jak długo ludzie zatrzymują się na poście? Dłużej = lepiej. Dlatego karuzele i Reelsy działają świetnie."
            },
            {
              id: "L6-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Regularność** – Profile publikujące regularnie są preferowane. Algorytm \"ufa\" aktywnym kontom."
            },
            {
              id: "L6-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Relacje** – Treści od kont, z którymi wchodzisz w interakcje, są pokazywane częściej. Dlatego odpowiadanie na komentarze buduje zasięg."
            },
            {
              id: "L6-heading-3",
              type: "heading",
              content: "Co algorytm karze"
            },
            {
              id: "L6-warning-1",
              type: "warning",
              content: "**Działania, które obniżają zasięgi:**\n\n• Nieregularne publikowanie (post, tydzień ciszy, post)\n• Posty bez interakcji (0 komentarzy, 0 zapisów)\n• Kupione lajki/followery (algorytm to wykrywa)\n• Linkowanie zewnętrzne w postach (FB/IG chce trzymać w aplikacji)\n• Edytowanie posta zaraz po publikacji"
            },
            {
              id: "L6-heading-4",
              type: "heading",
              content: "Hierarchia interakcji"
            },
            {
              id: "L6-text-2",
              type: "text",
              content: "Nie wszystkie interakcje są równe dla algorytmu:\n\n🥇 **Udostępnienia** – Najcenniejsze. Ktoś poleca Cię swoim znajomym.\n🥈 **Zapisy** – Bardzo cenne. Ktoś chce wrócić do treści.\n🥉 **Komentarze** – Cenne, zwłaszcza dłuższe niż 4 słowa.\n4️⃣ **Polubienia** – Najmniej cenne. Łatwe, szybkie, mało znaczące.\n\nDlatego warto tworzyć treści, które zachęcają do komentowania i zapisywania, nie tylko \"lajkowania\"."
            },
            {
              id: "L6-example-1",
              type: "example",
              content: "**Post A vs Post B**\n\n**Post A:** Zdjęcie paznokci + emoji 💅\nWynik: 24 polubień, 0 komentarzy, 0 zapisów\n\n**Post B:** To samo zdjęcie + \"Który kolor wolisz na jesień? 1 czy 2? 🍂\"\nWynik: 18 polubień, 11 komentarzy, 3 zapisy\n\n**Post B wygrywa** – mimo mniejszej liczby polubień, ma znacznie większy zasięg, bo algorytm widzi zaangażowanie (komentarze, zapisy)."
            },
            {
              id: "L6-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Który post dostanie NAJWIĘKSZY zasięg organiczny?",
                options: [
                  "100 polubień, 0 komentarzy, 0 zapisów",
                  "40 polubień, 8 komentarzy, 5 zapisów",
                  "60 polubień, 2 komentarze, 1 zapis",
                  "80 polubień, 1 komentarz, 0 zapisów"
                ],
                correctIndex: 1,
                explanation: "Post z 8 komentarzami i 5 zapisami ma znacznie większą wartość dla algorytmu niż post z samymi polubeniami. Komentarze i zapisy to sygnał: \"ta treść jest wartościowa, pokaż ją większej liczbie osób\"."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-L6-1", text: "Rozumiem, jak działa algorytm FB i IG" },
            { id: "check-L6-2", text: "Wiem, że komentarze i zapisy są cenniejsze niż polubienia" },
            { id: "check-L6-3", text: "Rozumiem, dlaczego regularność jest ważna dla zasięgów" }
          ],
          keyTakeaways: [
            "Algorytm nagradza zaangażowanie: komentarze > zapisy > polubienia",
            "Regularność publikowania buduje \"zaufanie\" algorytmu",
            "Czas oglądania ma znaczenie – dłuższe zatrzymanie = większy zasięg",
            "Edytowanie posta po publikacji może obniżyć zasięg"
          ],
          nextLessonTitle: "Plan działania – od czego zacząć"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 7 - PLAN DZIAŁANIA
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-7-plan-dzialania",
          title: "Plan działania – od czego zacząć",
          description: "Konkretny plan pierwszych kroków w budowaniu obecności online.",
          estimatedMinutes: 15,
          intro: "Teoria za nami. Teraz czas na praktykę. Oto konkretny plan działania – co zrobić w pierwszym tygodniu, żeby zacząć budować silną obecność w social mediach.",
          sections: [
            {
              id: "L7-heading-1",
              type: "heading",
              content: "Priorytet #1: Ogarnij podstawy"
            },
            {
              id: "L7-text-1",
              type: "text",
              content: "Zanim zaczniesz publikować codziennie, upewnij się, że fundamenty są na miejscu. Klientka wchodząca na Twój profil musi widzieć profesjonalizm od pierwszej sekundy."
            },
            {
              id: "L7-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Zdjęcie profilowe** – Logo lub profesjonalne zdjęcie. Czytelne, spójne na FB i IG. Jeśli nie masz logo – zrób czyste zdjęcie na jednolitym tle."
            },
            {
              id: "L7-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Bio** – Pierwsza linia: CO robisz + GDZIE. Druga: specjalizacja lub wyróżnik. Trzecia: jak się umówić. Sprawdź, czy wszystko jest jasne w 3 sekundy."
            },
            {
              id: "L7-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Wyróżnione relacje (IG) / Albumy (FB)** – Minimum: Cennik, Efekty (portfolio), Opinie. Opcjonalnie: FAQ, O mnie, Salon. Każde z nazwą i czytelną okładką."
            },
            {
              id: "L7-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Ostatnie 9 postów (IG) / Ostatnie posty (FB)** – Sprawdź, czy wyglądają spójnie i profesjonalnie. Jeśli nie – zaplanuj serię lepszych postów na start."
            },
            {
              id: "L7-heading-2",
              type: "heading",
              content: "Priorytet #2: Zacznij regularnie"
            },
            {
              id: "L7-text-2",
              type: "text",
              content: "Regularność bije perfekcję. Lepiej publikować 3x w tygodniu \"dobrze\" niż 1x w miesiącu \"perfekcyjnie\". Oto minimum do utrzymania:"
            },
            {
              id: "L7-step-5",
              type: "step",
              stepNumber: 1,
              content: "**Posty** – Minimum 2-3 w tygodniu. Mix: zdjęcia prac + porady + kulisy. Nie musisz robić karuzeli i Reelsów od razu – zacznij od podstaw."
            },
            {
              id: "L7-step-6",
              type: "step",
              stepNumber: 2,
              content: "**Stories (FB + IG)** – Codziennie, nawet 1-2 proste. Poranek w salonie, kawa, efekt pracy. Nie muszą być idealne – mają być autentyczne."
            },
            {
              id: "L7-step-7",
              type: "step",
              stepNumber: 3,
              content: "**Odpowiadaj na wiadomości** – W ciągu 2-4 godzin, maksymalnie tego samego dnia. Szybka odpowiedź = więcej rezerwacji."
            },
            {
              id: "L7-heading-3",
              type: "heading",
              content: "Twój plan na pierwszy tydzień"
            },
            {
              id: "L7-example-1",
              type: "example",
              content: "**Poniedziałek:** Ogarnij zdjęcie profilowe i bio\n**Wtorek:** Stwórz wyróżnione relacje / albumy (Cennik, Efekty, Opinie)\n**Środa:** Opublikuj pierwszy post + 2-3 Stories\n**Czwartek:** Odpowiedz na stare wiadomości, dodaj Stories\n**Piątek:** Drugi post + Stories z pracy\n**Weekend:** Stories z życia, przygotowanie treści na następny tydzień"
            },
            {
              id: "L7-tip-1",
              type: "tip",
              content: "Nie próbuj robić wszystkiego naraz. Lepiej zrobić dobrze podstawy, niż chaotycznie próbować wszystkiego. Ten kurs przeprowadzi Cię przez wszystkie tematy – krok po kroku."
            },
            {
              id: "L7-heading-4",
              type: "heading",
              content: "Co dalej – struktura kursu"
            },
            {
              id: "L7-text-3",
              type: "text",
              content: "W kolejnych modułach kursu nauczysz się:\n\n• Konfigurować profile profesjonalnie (FB, IG, Google)\n• Robić i edytować zdjęcia, które sprzedają\n• Pisać teksty, które angażują\n• Tworzyć Stories, Reelsy i karuzele\n• Planować treści i oszczędzać czas\n• Budować relacje z klientkami online\n\nKażda lekcja to konkretna wiedza + praktyczne zadania. Powodzenia!"
            }
          ],
          tasks: [
            {
              id: "task-L7-1",
              title: "Audyt profilu",
              description: "Przejdź przez swój profil na FB i IG i oceń: zdjęcie profilowe, bio, wyróżnione, ostatnie posty. Zanotuj, co wymaga poprawy."
            },
            {
              id: "task-L7-2",
              title: "Plan pierwszego tygodnia",
              description: "Zaplanuj konkretne dni i godziny na: publikację postów, dodawanie Stories, odpowiadanie na wiadomości."
            }
          ],
          checklist: [
            { id: "check-L7-1", text: "Mam plan działania na pierwszy tydzień" },
            { id: "check-L7-2", text: "Wiem, jakie elementy profilu muszę poprawić" },
            { id: "check-L7-3", text: "Rozumiem, że regularność jest ważniejsza niż perfekcja" }
          ],
          keyTakeaways: [
            "Najpierw fundamenty: zdjęcie profilowe, bio, wyróżnione, portfolio",
            "Regularność bije perfekcję – lepiej 3x \"dobrze\" niż 1x \"idealnie\"",
            "Minimum: 2-3 posty tygodniowo + codzienne Stories + szybkie odpowiedzi",
            "Ten kurs przeprowadzi Cię krok po kroku przez wszystkie tematy"
          ]
        }
      ]
    }
  ]
};
