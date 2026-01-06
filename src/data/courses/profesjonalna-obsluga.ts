import { Course } from "@/types/courses";

export const profesjonalnaObslugaCourse: Course = {
  id: "profesjonalna-obsluga-klientki",
  title: "Profesjonalna obsługa klientki",
  description: "Jak rozmawiać z klientkami i radzić sobie w trudnych sytuacjach.",
  icon: "MessageCircle",
  color: "#8b5cf6",
  estimatedHours: 2,
  totalLessons: 3,
  isStaffTraining: true,
  modules: [
    {
      id: "obsluga-m1",
      title: "Profesjonalna obsługa klientki",
      description: "Kompletny przewodnik po komunikacji z klientkami salonu",
      lessons: [
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 1 - PODSTAWY KOMUNIKACJI
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "obsluga-l1",
          title: "Fundamenty dobrej komunikacji",
          description: "Jak słuchać, rozumieć i odpowiadać na potrzeby klientek.",
          estimatedMinutes: 20,
          intro: "Komunikacja to 80% sukcesu w obsłudze klienta. Możesz być świetną technicznie, ale bez umiejętności rozmowy – stracisz klientki.",
          sections: [
            {
              id: "obsluga-l1-heading-1",
              type: "heading",
              content: "Aktywne słuchanie"
            },
            {
              id: "obsluga-l1-text-1",
              type: "text",
              content: "Większość osób słucha, żeby odpowiedzieć. Aktywne słuchanie oznacza słuchanie, żeby **zrozumieć**.\n\nCo to oznacza w praktyce?\n• Patrzysz na klientkę, gdy mówi (nie na telefon, nie na paznokcie)\n• Kiwasz głową, dajesz sygnały że słyszysz (\"mhm\", \"rozumiem\")\n• Nie przerywasz, nawet gdy wiesz co powie\n• Powtarzasz własnymi słowami to co usłyszałaś (\"Czyli chodzi Ci o...\")\n\nKlientka, która czuje się wysłuchana, jest bardziej wyrozumiała, bardziej lojalna i częściej poleca."
            },
            {
              id: "obsluga-l1-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Zadaj otwarte pytanie** – \"Powiedz mi, co Ci się marzy?\" zamiast \"Chcesz czerwony?\". Otwarte pytania dają więcej informacji."
            },
            {
              id: "obsluga-l1-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Słuchaj bez przerywania** – nawet jeśli wiesz co powiesz. Poczekaj aż skończy. Cisza jest OK."
            },
            {
              id: "obsluga-l1-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Podsumuj** – \"Czyli zależy Ci na naturalnym efekcie, który trzyma długo, tak?\" To pokazuje że zrozumiałaś i daje szansę na korektę."
            },
            {
              id: "obsluga-l1-heading-2",
              type: "heading",
              content: "Komunikacja niewerbalna"
            },
            {
              id: "obsluga-l1-text-2",
              type: "text",
              content: "Badania pokazują, że 55% komunikacji to mowa ciała, 38% to ton głosu, a tylko 7% to słowa. Co to oznacza?\n\n**Możesz powiedzieć \"wszystko w porządku\":**\n• Z uśmiechem i spokojnym tonem – brzmi szczerze\n• Z westchnieniem i wzrokiem w podłogę – brzmi jak kłamstwo\n\n**Zwróć uwagę na:**\n• **Kontakt wzrokowy** – utrzymuj, ale nie wpatruj się (to niepokojące)\n• **Postawa ciała** – otwarta (nie skrzyżowane ramiona)\n• **Ton głosu** – spokojny, ciepły, nie monotonny\n• **Mimika** – dopasowana do sytuacji (uśmiech przy powitaniu, powaga przy problemie)"
            },
            {
              id: "obsluga-l1-tip-1",
              type: "tip",
              content: "Przed otwarciem salonu sprawdź się w lustrze: Czy wyglądasz przyjaźnie? Czy uśmiech jest naturalny? Twoja energia jako pierwsza rzecz, którą klientka odbiera."
            },
            {
              id: "obsluga-l1-heading-3",
              type: "heading",
              content: "Język pozytywny vs. negatywny"
            },
            {
              id: "obsluga-l1-text-3",
              type: "text",
              content: "Ten sam przekaz można sformułować pozytywnie lub negatywnie. Pozytywny zawsze lepiej wpływa na odbiór.\n\n**Zamiast:** \"Nie mogę Cię przyjąć w sobotę\"\n**Powiedz:** \"W sobotę mam pełny grafik, ale mam wolne w piątek o 16:00 i w poniedziałek rano – który pasuje?\"\n\n**Zamiast:** \"To nie wyjdzie na Twoich paznokciach\"\n**Powiedz:** \"Na Twoim typie paznokci lepiej sprawdzi się X – efekt będzie trwalszy\"\n\n**Zamiast:** \"Muszę ściągnąć ten stary lakier\"\n**Powiedz:** \"Najpierw przygotujemy paznokcie do nowej stylizacji\"\n\nKlucz: mów co MOŻESZ, nie co NIE MOŻESZ."
            },
            {
              id: "obsluga-l1-comparison-1",
              type: "comparison",
              content: "Sposób komunikacji",
              comparison: {
                good: {
                  title: "Język pozytywny",
                  description: "Skupiony na rozwiązaniach",
                  example: "Rozumiem, że zależy Ci na szybkim terminie. Mam dla Ciebie propozycję – mogę przyjąć Cię jutro o 9 rano przed innymi klientkami. Co ty na to?"
                },
                bad: {
                  title: "Język negatywny",
                  description: "Skupiony na przeszkodach",
                  example: "Niestety nie mam wcześniej terminów. Nie da się nic zrobić, grafik jest pełny."
                }
              }
            },
            {
              id: "obsluga-l1-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka opisuje jaki efekt chce osiągnąć. Co robisz?",
                options: [
                  "Przerywasz i mówisz że wiesz, bo to często zamawiane",
                  "Słuchasz do końca, potem powtarzasz własnymi słowami żeby się upewnić",
                  "Kiwasz głową ale myślisz o następnej klientce",
                  "Od razu pokazujesz zdjęcia swoich prac"
                ],
                correctIndex: 1,
                explanation: "Aktywne słuchanie + podsumowanie to fundament. Klientka czuje się zrozumiana, Ty masz pewność że robisz to, czego ona naprawdę chce."
              }
            }
          ]
        },
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 2 - TRUDNE SYTUACJE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "obsluga-l2",
          title: "Trudne sytuacje i reklamacje",
          description: "Jak profesjonalnie radzić sobie z niezadowolonymi klientkami.",
          estimatedMinutes: 22,
          intro: "Reklamacja to nie porażka. To szansa na zamienienie niezadowolonej klientki w najbardziej lojalną ambasadorkę Twojego salonu.",
          sections: [
            {
              id: "obsluga-l2-heading-1",
              type: "heading",
              content: "Psychologia reklamacji"
            },
            {
              id: "obsluga-l2-text-1",
              type: "text",
              content: "Kiedy klientka składa reklamację, w jej głowie dzieje się wiele rzeczy:\n• Czuje się oszukana lub zawiedziona\n• Może czuć się głupio, że \"dała się nabrać\"\n• Boi się konfrontacji (większość ludzi unika konfliktów)\n• Chce być wysłuchana i potraktowana poważnie\n\n**Paradoks reklamacji:**\nBadania pokazują, że klienci, których reklamacja została dobrze rozwiązana, są BARDZIEJ lojalni niż ci, którzy nigdy nie mieli problemu. To się nazywa \"service recovery paradox\". \n\nDlatego reklamacja to nie katastrofa – to szansa."
            },
            {
              id: "obsluga-l2-heading-2",
              type: "heading",
              content: "Metoda LEARN"
            },
            {
              id: "obsluga-l2-text-2",
              type: "text",
              content: "LEARN to sprawdzony 5-etapowy schemat obsługi reklamacji:\n\n**L – Listen (Słuchaj)** \nNiech klientka powie wszystko. Nie przerywaj, nie tłumacz się od razu.\n\n**E – Empathize (Okaż empatię)**\n\"Rozumiem, że to frustrujące\" – pokaż że jej uczucia są uzasadnione.\n\n**A – Apologize (Przeproś)**\n\"Przepraszam, że tak wyszło\" – nawet jeśli to nie Twoja wina. Przepraszasz za sytuację, nie za błąd.\n\n**R – Resolve (Rozwiąż)**\nZaproponuj konkretne rozwiązanie. Zapytaj co by ją satysfakcjonowało.\n\n**N – Notify (Powiadom)**\nPoinformuj co zrobisz żeby to się nie powtórzyło. Zadzwoń za parę dni sprawdzić czy OK."
            },
            {
              id: "obsluga-l2-example-1",
              type: "example",
              content: "**Przykład metody LEARN:**\n\nKlientka: \"Te rzęsy wypadły po 3 dniach! Zapłaciłam 200 zł i nic nie zostało!\"\n\n**L:** \"Opowiedz mi dokładnie co się stało...\" [słuchasz]\n\n**E:** \"Rozumiem Twoją frustrację, to naprawdę nieprzyjemna sytuacja.\"\n\n**A:** \"Przepraszam, że tak wyszło. To nie powinno się zdarzyć.\"\n\n**R:** \"Zapraszam na bezpłatną korektę. Mogę przyjąć Cię jutro – pasuje?\"\n\n**N:** \"Sprawdzę też klej z tej partii. Zadzwonię do Ciebie za tydzień upewnić się, że tym razem wszystko OK.\""
            },
            {
              id: "obsluga-l2-heading-3",
              type: "heading",
              content: "Czego nie robić przy reklamacji"
            },
            {
              id: "obsluga-l2-text-3",
              type: "text",
              content: "Naturalne reakcje obronne często pogarszają sytuację:\n\n**Nie mów:**\n• \"To niemożliwe, żeby tak szybko wypadły\" – kwestionujesz wiarygodność klientki\n• \"Nikt inny nie miał problemu\" – sugerujesz że kłamie lub jest wybredna\n• \"Na pewno niewłaściwie dbałaś\" – obwiniasz ją\n• \"W regulaminie jest napisane że...\" – brzmi jak korporacja, nie jak człowiek\n\n**Co robić zamiast:**\n• Zakładaj dobrą wolę klientki\n• Skup się na rozwiązaniu, nie na winie\n• Traktuj to jako feedback, nie atak\n• Pamiętaj: wygrana kłótnia = stracona klientka"
            },
            {
              id: "obsluga-l2-warning-1",
              type: "warning",
              content: "Nawet jeśli klientka jest niesprawiedliwa lub kłamie – nigdy nie kłóć się publicznie (na forum, w komentarzach). Zawsze proponuj kontakt prywatny. Przyszli klienci oceniają Cię po tym, jak reagujesz na krytykę."
            },
            {
              id: "obsluga-l2-heading-4",
              type: "heading",
              content: "Kiedy powiedzieć \"nie\""
            },
            {
              id: "obsluga-l2-text-4",
              type: "text",
              content: "Nie każda reklamacja jest uzasadniona. Czasem trzeba odmówić – ale profesjonalnie.\n\n**Uzasadnione odmowy:**\n• Minęło dużo czasu (reklamacja po 3 miesiącach)\n• Wyraźne uszkodzenie mechaniczne\n• Klientka przyznaje się do nieprzestrzegania zaleceń\n• Powtarzające się reklamacje od tej samej osoby\n\n**Jak odmówić profesjonalnie:**\n\"Rozumiem sytuację i przykro mi, że efekt nie spełnił oczekiwań. Niestety po X tygodniach nie jestem w stanie ocenić co było przyczyną. Przy następnej wizycie mogę zaproponować [rabat/inny zabieg], żebyśmy zobaczyły jak się sprawdza.\"\n\nNigdy nie mów \"nie\" i koniec. Zawsze dawaj alternatywę."
            },
            {
              id: "obsluga-l2-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka pisze na Facebooku, że paznokcie \"zeszły po tygodniu\". Co robisz?",
                options: [
                  "Odpowiadasz publicznie z wyjaśnieniem dlaczego to niemożliwe",
                  "Piszesz publicznie przeprosiny i prosisz o kontakt prywatny",
                  "Ignorujesz – niech inni sami ocenią",
                  "Usuwasz komentarz"
                ],
                correctIndex: 1,
                explanation: "Publiczne przeprosiny pokazują że zależy Ci na jakości. Prośba o kontakt prywatny pozwala rozwiązać problem bez publicznej dyskusji. Inni widzą że reagujesz profesjonalnie."
              }
            }
          ]
        },
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 3 - TYPY KLIENTEK
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "obsluga-l3",
          title: "Różne typy klientek",
          description: "Jak rozpoznawać i obsługiwać różne osobowości.",
          estimatedMinutes: 18,
          intro: "Każda klientka jest inna. Rozpoznanie jej typu pozwala dostosować komunikację i zwiększyć szanse na sukces.",
          sections: [
            {
              id: "obsluga-l3-heading-1",
              type: "heading",
              content: "4 podstawowe typy osobowości"
            },
            {
              id: "obsluga-l3-text-1",
              type: "text",
              content: "Model DISC to jedno z najpopularniejszych narzędzi do rozpoznawania typów osobowości. W uproszczeniu:\n\n**D – Dominująca** \nDecyzyjna, niecierpliwa, zorientowana na cel. Mówi wprost, nie lubi owijania w bawełnę.\n→ *\"Chcę french, klasyczny, szybko\"*\n\n**I – Wpływowa** \nTowarzyska, entuzjastyczna, lubi rozmawiać. Decyzje podejmuje emocjonalnie.\n→ *\"O matko, jaki śliczny kolor! Opowiedz mi co teraz jest modne!\"*\n\n**S – Stała** \nSpokojna, lojalna, unika zmian. Lubi rutynę i przewidywalność.\n→ *\"Jak zawsze proszę, ten sam kolor co ostatnio\"*\n\n**C – Sumienna** \nAnalityczna, dokładna, zadaje dużo pytań. Potrzebuje informacji.\n→ *\"A jaki dokładnie skład ma ten lakier? Ile trzyma? Jakie są przeciwwskazania?\"*"
            },
            {
              id: "obsluga-l3-heading-2",
              type: "heading",
              content: "Jak obsługiwać każdy typ"
            },
            {
              id: "obsluga-l3-text-2",
              type: "text",
              content: "**Typ D (Dominująca):**\n• Bądź konkretna i szybka\n• Nie marnuj jej czasu na small talk\n• Daj opcje do wyboru (max 2-3)\n• Szanuj jej decyzje, nie przekonuj za dużo\n\n**Typ I (Wpływowa):**\n• Rozmawiaj, bądź entuzjastyczna\n• Pokazuj nowości, trendy\n• Komplementuj szczerze\n• Pozwól jej się poczuć wyjątkowo\n\n**Typ S (Stała):**\n• Nie wywieraj presji na zmiany\n• Dawaj poczucie bezpieczeństwa\n• Zapewniaj o jakości i trwałości\n• Buduj długoterminową relację\n\n**Typ C (Sumienna):**\n• Dawaj fakty i dane\n• Odpowiadaj cierpliwie na wszystkie pytania\n• Nie bagatelizuj jej wątpliwości\n• Pozwól jej na przemyślenie decyzji"
            },
            {
              id: "obsluga-l3-tip-1",
              type: "tip",
              content: "Rozpoznanie typu zajmuje dosłownie 2-3 minuty rozmowy. Słuchaj JAK mówi, nie tylko CO mówi. Tempo, entuzjazm, pytania – to wszystko są wskazówki."
            },
            {
              id: "obsluga-l3-heading-3",
              type: "heading",
              content: "Trudne osobowości"
            },
            {
              id: "obsluga-l3-text-3",
              type: "text",
              content: "Czasem trafiasz na klientki, które są po prostu trudne – bez względu na typ DISC.\n\n**Klientka niezdecydowana:**\n→ Ogranicz opcje do 2-3. Powiedz \"Na Twoim miejscu wybrałabym X, bo...\" Weź odpowiedzialność za decyzję.\n\n**Klientka wymagająca:**\n→ Ustal oczekiwania na początku. \"Powiedz mi dokładnie czego oczekujesz, żebym mogła to spełnić.\" Spisz je nawet.\n\n**Klientka krytyczna:**\n→ Nie bierz do siebie. Pytaj o konkrety. \"Co dokładnie nie odpowiada?\" Często krytyka to maska dla innego problemu.\n\n**Klientka milcząca:**\n→ Nie wymuszaj rozmowy. Dawaj przestrzeń. Niektórzy po prostu chcą ciszy i relaksu – szanuj to."
            },
            {
              id: "obsluga-l3-warning-1",
              type: "warning",
              content: "Są klientki, z którymi współpraca nie ma sensu – ciągle niezadowolone, obraźliwe, nieprzyjemne. Masz prawo grzecznie odmówić kolejnych wizyt: \"Wydaje mi się, że nie jestem w stanie spełnić Twoich oczekiwań. Polecam sprawdzić salon X.\""
            },
            {
              id: "obsluga-l3-heading-4",
              type: "heading",
              content: "Dopasowanie stylu do sytuacji"
            },
            {
              id: "obsluga-l3-text-4",
              type: "text",
              content: "Najlepsze kosmetyczki potrafią przełączać się między stylami w zależności od klientki i sytuacji.\n\n**Przy nerwowej klientce:** Mów spokojnie, wolniej, uspokajająco.\n**Przy zabieganej businesswoman:** Bądź konkretna, szanuj czas.\n**Przy pannie młodej przed ślubem:** Daj wsparcie emocjonalne, uspokój.\n**Przy nastolatce z mamą:** Rozmawiaj z obiema, ale decyzje konsultuj z nastolatką.\n\nElastyczność to supermoc. Im lepiej dopasowujesz styl, tym więcej klientek zatrzymujesz."
            },
            {
              id: "obsluga-l3-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka wchodzi, mówi szybko, patrzy na zegarek, i mówi \"zróbmy to co ostatnio, ale szybko bo się spieszę\". Jaki to typ?",
                options: [
                  "I – Wpływowa, bo jest energiczna",
                  "D – Dominująca, bo jest zorientowana na cel i czas",
                  "S – Stała, bo chce to samo co ostatnio",
                  "C – Sumienna, bo jest konkretna"
                ],
                correctIndex: 1,
                explanation: "Szybkie tempo, zorientowanie na czas, brak small talku, konkretne polecenie – to klasyczna Dominująca. Daj jej to szybko i dobrze, bez zbędnych rozmów."
              }
            }
          ]
        }
      ]
    }
  ]
};
