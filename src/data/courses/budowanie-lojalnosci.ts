import { Course } from "@/types/courses";

export const budowanieLojalosciCourse: Course = {
  id: "budowanie-lojalnosci-klientek",
  title: "Od nowej do stałej klientki",
  description: "Jak sprawić, żeby klientka wracała i polecała Twój salon.",
  icon: "Heart",
  color: "#f43f5e",
  estimatedHours: 2,
  totalLessons: 3,
  isStaffTraining: true,
  modules: [
    {
      id: "lojalnosc-m1",
      title: "Budowanie lojalności klientek",
      description: "Sprawdzone strategie zatrzymywania klientek na lata",
      lessons: [
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 1 - PIERWSZA WIZYTA
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lojalnosc-l1",
          title: "Pierwsza wizyta – moment prawdy",
          description: "Jak zrobić wrażenie, które zamienia nową klientkę w stałą.",
          estimatedMinutes: 20,
          intro: "Badania pokazują, że 60% klientek decyduje o powrocie w ciągu pierwszych 10 minut wizyty. Ten czas jest bezcenny – wykorzystaj go mądrze.",
          sections: [
            {
              id: "lojalnosc-l1-heading-1",
              type: "heading",
              content: "Reguła 10 minut"
            },
            {
              id: "lojalnosc-l1-text-1",
              type: "text",
              content: "Pierwszych 10 minut wizyty nowej klientki to okno, w którym formujesz całą przyszłą relację. To nie przesada – psychologia nazywa to \"efektem pierwszeństwa\". Pierwsze wrażenie jest trwałe i trudne do zmiany.\n\nCo się dzieje w tych 10 minutach?\n• Klientka ocenia atmosferę salonu\n• Ocenia Twoje podejście i ciepło\n• Decyduje czy czuje się komfortowo\n• Buduje (lub nie) zaufanie do Twoich umiejętności\n\nJeśli te minuty pójdą dobrze, reszta wizyty to formalność. Jeśli pójdą źle, nawet doskonały zabieg może nie uratować relacji."
            },
            {
              id: "lojalnosc-l1-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Przywitaj się z uśmiechem i imieniem** – \"Cześć! Ty jesteś Kasia? Cieszę się, że do mnie trafiłaś!\" Imię sprawia, że klientka czuje się oczekiwana, nie anonimowa."
            },
            {
              id: "lojalnosc-l1-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Zapytaj jak trafiła** – \"Jak mnie znalazłaś?\". To daje Ci informację marketingową i pokazuje zainteresowanie. Jeśli polecenie – podziękuj za zaufanie."
            },
            {
              id: "lojalnosc-l1-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Przeprowadź mini-wywiad** – \"Powiedz mi czego oczekujesz\" i \"Czy masz jakieś obawy?\". Klientka czuje się wysłuchana, Ty wiesz czego unikać."
            },
            {
              id: "lojalnosc-l1-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Wyjaśnij co będziesz robić** – nawet jeśli wydaje się oczywiste. \"Najpierw zdezynfekuję, potem opracuję skórki, potem nałożę bazę...\" Eliminuje niepewność."
            },
            {
              id: "lojalnosc-l1-tip-1",
              type: "tip",
              content: "Zapamiętaj jedno osobiste szczegóły z rozmowy – imię psa, gdzie jedzie na wakacje, czym się zajmuje. Przy następnej wizycie zapytaj \"Jak tam Burek?\" – klientka poczuje się zapamiętana i wyjątkowa."
            },
            {
              id: "lojalnosc-l1-heading-2",
              type: "heading",
              content: "Czego nowa klientka się boi"
            },
            {
              id: "lojalnosc-l1-text-2",
              type: "text",
              content: "Każda nowa klientka przychodzi z zestawem obaw. Większość ich nie wypowie na głos. Twoim zadaniem jest rozwiązać je, zanim się ujawnią:\n\n**Strach przed bólem** – \"Będę delikatna, ale powiedz mi jeśli cokolwiek będzie niewygodne\"\n\n**Strach przed oceną** – \"Każdy ma inny typ paznokci, Twoje są świetne do pracy\"\n\n**Strach przed niezadowoleniem** – \"Jeśli cokolwiek nie będzie tak jak chciałaś, poprawimy bez problemu\"\n\n**Strach przed nieznanym** – \"Pokażę Ci kolor przed nałożeniem, żebyś wiedziała jak będzie wyglądać\"\n\nWyprzedzając obawy, budujesz zaufanie. Klientka widzi, że rozumiesz ją lepiej niż poprzednie kosmetyczki."
            },
            {
              id: "lojalnosc-l1-warning-1",
              type: "warning",
              content: "Nie krytykuj pracy poprzedniej kosmetyczki! Nawet jeśli klientka sama narzeka. Powiedz \"Rozumiem, zdarza się. Skupmy się na tym, żeby teraz było idealne.\" Krytykowanie konkurencji obniża Twój profesjonalizm."
            },
            {
              id: "lojalnosc-l1-heading-3",
              type: "heading",
              content: "Pożegnanie, które zaprasza do powrotu"
            },
            {
              id: "lojalnosc-l1-text-3",
              type: "text",
              content: "Koniec wizyty jest równie ważny jak początek – to ostatnie wrażenie, które klientka zabiera ze sobą.\n\n**Idealne pożegnanie zawiera:**\n• Komplement efektu – \"Pięknie Ci w tym kolorze!\"\n• Instrukcję pielęgnacji – \"Przez 2 godziny unikaj wody, potem normalne mycie\"\n• Propozycję następnej wizyty – \"Przy hybrydzie polecam co 3 tygodnie. Wolisz w tygodniu czy weekend?\"\n• Ciepłe zakończenie – \"Cieszę się, że do mnie trafiłaś! Do zobaczenia!\"\n\nNigdy nie kończ wizyty zdaniem \"to będzie X złotych\". Zawsze po informacji o płatności dodaj coś ciepłego i osobistego."
            },
            {
              id: "lojalnosc-l1-example-1",
              type: "example",
              content: "**Skrypt pożegnania:**\n\n\"Gotowe! Zobacz jak pięknie wyszło – ten odcień bordo idealnie pasuje do Twojej karnacji. Przez pierwsze 2 godziny unikaj gorącej wody. To będzie 120 złotych.\n\n[po płatności]\n\nBardzo mi miło, że do mnie trafiłaś! Przy hybrydzie najlepiej wrócić za 3 tygodnie. Mam wolne w przyszły piątek o 14:00 lub w sobotę rano – co wolisz?\n\n[po ustaleniu terminu]\n\nSuper, zapisuję! Wyślę Ci przypomnienie dzień wcześniej. Trzymaj się ciepło i do zobaczenia!\""
            },
            {
              id: "lojalnosc-l1-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Nowa klientka mówi, że poprzednia kosmetyczka \"zrobiła jej okropne rzęsy\". Jak reagujesz?",
                options: [
                  "Zgadzasz się i mówisz, że wiele salonów nie dba o jakość",
                  "Pytasz szczegółowo co było nie tak i słuchasz uważnie, potem mówisz że zrobisz inaczej",
                  "Bronisz kosmetyczki mówiąc, że każdy ma inne oczekiwania",
                  "Ignorujesz i zmieniasz temat"
                ],
                correctIndex: 1,
                explanation: "Słuchanie pokazuje empatię i daje informacje o tym, czego klientka NIE chce. Mówienie że zrobisz inaczej buduje zaufanie. Nie krytykujesz konkurencji, ale pokazujesz że słuchasz."
              }
            }
          ]
        },
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 2 - RELACJA Z KLIENTKĄ
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lojalnosc-l2",
          title: "Budowanie głębszej relacji",
          description: "Jak przejść od \"moja kosmetyczka\" do \"moja przyjaciółka z salonu\".",
          estimatedMinutes: 18,
          intro: "Stała klientka to nie ta, która przychodzi bo jest blisko. To ta, która przychodzi bo chce widzieć właśnie Ciebie.",
          sections: [
            {
              id: "lojalnosc-l2-heading-1",
              type: "heading",
              content: "Trzy poziomy lojalności"
            },
            {
              id: "lojalnosc-l2-text-1",
              type: "text",
              content: "Nie każda powracająca klientka jest tak samo lojalna. Istnieją trzy poziomy:\n\n**Poziom 1: Lojalność wygody** – Przychodzi bo jest blisko, tani, lub nie chce szukać. Odejdzie gdy znajdzie lepszą ofertę.\n\n**Poziom 2: Lojalność zadowolenia** – Przychodzi bo efekty są dobre. Zostanie dopóki jakość nie spadnie.\n\n**Poziom 3: Lojalność emocjonalna** – Przychodzi bo Cię lubi jako osobę. Zostanie nawet jeśli konkurencja ma taniej lub bliżej. Poleca aktywnie.\n\nCelem jest budowanie poziomu 3. Tu wchodzi relacja osobista, nie tylko profesjonalna."
            },
            {
              id: "lojalnosc-l2-heading-2",
              type: "heading",
              content: "Pamiętaj o szczegółach"
            },
            {
              id: "lojalnosc-l2-text-2",
              type: "text",
              content: "Nic nie buduje relacji tak jak pamięć. Kiedy klientka wraca po 3 tygodniach, a Ty pytasz \"Jak było na tym ślubie siostry?\", czuje się wyjątkowo.\n\n**Co warto zapamiętać:**\n• Imiona bliskich (mąż, dzieci, pies)\n• Nadchodzące wydarzenia (ślub, wakacje, egzaminy)\n• Problemy, o których mówiła (trudna sytuacja w pracy, choroba w rodzinie)\n• Preferencje (nie lubi czerwieni, uwielbia błysk, ma uczulenie na X)\n\n**Jak zapamiętać:**\nProwadź prosty notes lub używaj aplikacji do zarządzania klientkami. Po wizycie zapisz 2-3 punkty. Przed następną wizytą przejrzyj."
            },
            {
              id: "lojalnosc-l2-tip-1",
              type: "tip",
              content: "Aplikacje typu Booksy pozwalają dodawać notatki do profilu klientki. Nawet proste: \"Ma córkę Olę (8 lat), jedzie do Grecji w lipcu, nie lubi jaskrawych kolorów\" – zmieni jakość następnej rozmowy."
            },
            {
              id: "lojalnosc-l2-heading-3",
              type: "heading",
              content: "Rozmowa, która buduje więź"
            },
            {
              id: "lojalnosc-l2-text-3",
              type: "text",
              content: "Zabieg to okazja do budowania relacji. Ale rozmowa musi być naturalna, nie wymuszona.\n\n**Tematy, które zbliżają:**\n• Wspólne zainteresowania (\"Też oglądałam ten serial!\")\n• Komplementy szczere i konkretne (\"Ta torba jest genialna, skąd ją masz?\")\n• Pytania o opinię (\"Myślisz, że ta zieleń pasuje do lata?\")\n• Dzielenie się historiami (\"Miałam dzisiaj zabawną sytuację...\")\n\n**Tematy do unikania:**\n• Polityka i religia\n• Plotki o innych klientkach (!)\n• Narzekanie na własne problemy\n• Zbyt osobiste pytania za szybko"
            },
            {
              id: "lojalnosc-l2-warning-1",
              type: "warning",
              content: "Nigdy, przenigdy nie rozmawiaj z jedną klientką o drugiej – nawet pozytywnie! \"Poprzednia klientka też to zamówiła\" brzmi niewinnie, ale sugeruje że mówisz o wszystkich. Klientka zacznie się zastanawiać co Ty mówisz o niej."
            },
            {
              id: "lojalnosc-l2-heading-4",
              type: "heading",
              content: "Drobne gesty, wielki efekt"
            },
            {
              id: "lojalnosc-l2-text-4",
              type: "text",
              content: "Lojalność budują małe rzeczy, nie wielkie promocje.\n\n**Gesty, które klientki pamiętają:**\n• Wiadomość urodzinowa (\"Wszystkiego najlepszego, Aniu! 🎂\")\n• Darmowa drobnostka przy 5. wizycie (\"Próbka oliwki dla Ciebie\")\n• Elastyczność gdy się spóźni (\"Nic się nie stało, zdążymy\")\n• Zapamiętanie jej ulubionej herbaty\n• Pokazanie zdjęcia efektu \"Zrobiłam Ci fotkę, zobacz jak pięknie wyszło!\"\n\nTe gesty kosztują grosze lub nic, ale tworzą emocjonalne przywiązanie, którego konkurencja nie przebije niższą ceną."
            },
            {
              id: "lojalnosc-l2-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka przychodzi trzeci raz. Ostatnio mówiła, że szuka nowej pracy. Jak zaczynasz wizytę?",
                options: [
                  "Cześć! Co dzisiaj robimy?",
                  "Cześć! Jak tam poszukiwania pracy – udało się coś?",
                  "Cześć! Mamy nową promocję na brwi, chcesz?",
                  "Cześć! Pamiętasz jaki kolor robiłyśmy ostatnio?"
                ],
                correctIndex: 1,
                explanation: "Pytanie o osobistą sprawę pokazuje, że pamiętasz i zależy Ci. Klientka czuje się ważna jako osoba, nie tylko jako źródło przychodu. To buduje lojalność emocjonalną."
              }
            }
          ]
        },
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 3 - REKOMENDACJE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lojalnosc-l3",
          title: "Jak zdobywać polecenia",
          description: "Sprawdzone metody na to, żeby klientki polecały Twój salon.",
          estimatedMinutes: 15,
          intro: "Marketing szeptany to najpotężniejsza forma reklamy. Jedna zadowolona klientka może przyprowadzić 10 następnych. Ale trzeba umieć o to poprosić.",
          sections: [
            {
              id: "lojalnosc-l3-heading-1",
              type: "heading",
              content: "Dlaczego klientki polecają (lub nie)"
            },
            {
              id: "lojalnosc-l3-text-1",
              type: "text",
              content: "Zadowolenie to nie wystarczy do polecenia. Klientka może być bardzo zadowolona i nigdy nikomu nie powiedzieć. Polecenie wymaga:\n\n**1. Wyjątkowego doświadczenia** – \"dobre\" nie wystarczy, musi być \"wow\"\n\n**2. Łatwości polecenia** – klientka musi wiedzieć JAK Cię polecić (Instagram? wizytówka?)\n\n**3. Powodu do mówienia** – musi mieć pretekst w rozmowie\n\n**4. Bezpieczeństwa** – musi być pewna, że nie zrobi z siebie głupka polecając\n\nTwoje zadanie: zapewnić wszystkie cztery elementy."
            },
            {
              id: "lojalnosc-l3-heading-2",
              type: "heading",
              content: "Jak prosić o polecenie"
            },
            {
              id: "lojalnosc-l3-text-2",
              type: "text",
              content: "Większość osób nie prosi o polecenia bo czuje się niezręcznie. To błąd. Zadowolone klientki CHCĄ polecać, ale potrzebują pretekstu.\n\n**Naturalne sposoby proszenia:**\n• \"Jeśli masz znajomą, która szuka kosmetyczki – powiedz że mam wolne terminy!\"\n• \"Jeśli komuś spodoba się Twój manicure, powiedz że to moja robota\" [uśmiech]\n• \"Buduję swoją bazę klientek – jeśli znasz kogoś, kto szuka, będę wdzięczna za polecenie!\"\n\n**Kiedy prosić:**\n• Po szczególnie udanym zabiegu\n• Gdy klientka sama wyrazi zachwyt\n• Przy 3-4 wizycie, gdy relacja już się buduje\n• Nigdy przy pierwszej wizycie – za wcześnie"
            },
            {
              id: "lojalnosc-l3-example-1",
              type: "example",
              content: "**Naturalna prośba o polecenie:**\n\nKlientka: \"Wow, te paznokcie są genialne! Idealnie jak chciałam!\"\n\nTy: \"Cieszę się ogromnie! Słuchaj, jeśli któraś koleżanka zapyta skąd masz – powiedz śmiało. Zawsze szukam nowych fajnych klientek! [uśmiech]\"\n\n[To brzmi naturalnie, nie desperacko. Klientka dostaje pretekst i \"pozwolenie\" na polecanie.]"
            },
            {
              id: "lojalnosc-l3-heading-3",
              type: "heading",
              content: "Program poleceń"
            },
            {
              id: "lojalnosc-l3-text-3",
              type: "text",
              content: "Formalny program poleceń może zwiększyć liczbę rekomendacji. Ale musi być prosty!\n\n**Prosty model:**\n\"Jeśli Twoja znajoma przyjdzie i powie, że od Ciebie – obie dostajecie 15% zniżki na następny zabieg.\"\n\n**Dlaczego działa:**\n• Obie strony wygrywają\n• Klientka ma konkretny powód, żeby polecić\n• Nowa klientka czuje się mile widziana (\"przyszłam z polecenia\")\n• Ty zyskujesz klientkę, która już ma zaufanie przez polecającą"
            },
            {
              id: "lojalnosc-l3-tip-1",
              type: "tip",
              content: "Wydrukuj małe wizytówki \"z polecenia\" do wręczania klientkom. Mogą dać je znajomym. Na wizytówce: Twój Instagram, numer i zdanie \"Powiedz że jesteś z polecenia – dostaniesz 15% rabatu na pierwszą wizytę!\""
            },
            {
              id: "lojalnosc-l3-heading-4",
              type: "heading",
              content: "Social proof – udowodnij jakość"
            },
            {
              id: "lojalnosc-l3-text-4",
              type: "text",
              content: "Klientka łatwiej poleca, gdy ma \"dowód\" jakości do pokazania.\n\n**Co ułatwia polecanie:**\n• Profesjonalny Instagram z efektami pracy\n• Dobre recenzje na Google/Facebook\n• Zdjęcia before/after\n• Certyfikaty i szkolenia widoczne w salonie\n\n**Proś o recenzje:**\nPo udanej wizycie: \"Będzie mi bardzo miło, jeśli wrzucisz opinię na Google. Pomaga mi to dotrzeć do nowych klientek.\"\n\nWiększość osób napisze, jeśli poprosisz bezpośrednio. Bez prośby – nie pomyślą."
            },
            {
              id: "lojalnosc-l3-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka jest zachwycona efektem i mówi, że poleci Cię koleżance. Co robisz?",
                options: [
                  "Mówisz \"dziękuję\" i kończysz temat",
                  "Dajesz jej wizytówkę i mówisz, że koleżanka dostanie rabat za polecenie",
                  "Prosisz o numer koleżanki, żeby sama do niej zadzwonić",
                  "Mówisz że masz pełny grafik i nie przyjmujesz nowych"
                ],
                correctIndex: 1,
                explanation: "Dając wizytówkę z rabatem zamieniasz intencję w konkretne działanie. Klientka ma co dać koleżance, koleżanka ma motywację przyjść. Win-win."
              }
            }
          ]
        }
      ]
    }
  ]
};
