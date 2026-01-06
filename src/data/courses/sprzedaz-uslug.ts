import { Course } from "@/types/courses";

export const sprzedazUslugCourse: Course = {
  id: "sprzedaz-uslug-beauty",
  title: "Sztuka sprzedaży w salonie",
  description: "Naucz się naturalnie polecać usługi i produkty bez bycia nachalną.",
  icon: "TrendingUp",
  color: "#10b981",
  estimatedHours: 2.5,
  totalLessons: 4,
  
  modules: [
    {
      id: "sprzedaz-m1",
      title: "Sztuka sprzedaży w salonie beauty",
      description: "Kompleksowy przewodnik po etycznej i skutecznej sprzedaży usług",
      lessons: [
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 1 - PSYCHOLOGIA SPRZEDAŻY
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "sprzedaz-l1",
          title: "Psychologia klientki w salonie",
          description: "Zrozum jak klientki podejmują decyzje zakupowe w branży beauty.",
          estimatedMinutes: 20,
          intro: "Sprzedaż w salonie beauty to nie wciskanie produktów. To rozpoznawanie potrzeb i oferowanie rozwiązań. Klientka, która czuje się zrozumiana, sama pyta o dodatkowe usługi.",
          sections: [
            {
              id: "sprzedaz-l1-heading-1",
              type: "heading",
              content: "Dlaczego klientki nie lubią być sprzedawane"
            },
            {
              id: "sprzedaz-l1-text-1",
              type: "text",
              content: "Każdy z nas ma wbudowany \"detektor sprzedaży\". Kiedy czujemy, że ktoś próbuje nam coś wcisnąć, automatycznie się zamykamy. W salonie beauty to uczucie jest jeszcze silniejsze – klientka przyszła się zrelaksować, nie na targowisko.\n\nDlatego najskuteczniejsza sprzedaż nie wygląda jak sprzedaż. Wygląda jak **szczera troska o dobro klientki**. Kiedy mówisz \"Te paznokcie są bardzo suche, polecam oliwkę, która naprawdę pomoże\" – to nie sprzedaż, to profesjonalna porada. Różnica jest subtelna, ale fundamentalna."
            },
            {
              id: "sprzedaz-l1-tip-1",
              type: "tip",
              content: "Badania pokazują, że 74% klientek ufa rekomendacjom swojej kosmetyczki bardziej niż reklamom. Twoja opinia ma ogromną wagę – używaj jej mądrze i szczerze."
            },
            {
              id: "sprzedaz-l1-heading-2",
              type: "heading",
              content: "Trzy typy decyzji zakupowych"
            },
            {
              id: "sprzedaz-l1-text-2",
              type: "text",
              content: "Klientki podejmują decyzje na trzy sposoby, i każdy wymaga innego podejścia:\n\n**1. Decyzje impulsywne** – \"O, ładny kolor, wezmę!\" Szybkie, emocjonalne, bez analizy. Pojawiają się gdy klientka jest w dobrym nastroju i widzi coś atrakcyjnego. Nie wymagają przekonywania.\n\n**2. Decyzje przemyślane** – \"Muszę się zastanowić\". Klientka porównuje, waży opcje, może wrócić za tydzień. Potrzebuje informacji, nie presji.\n\n**3. Decyzje nawykowe** – \"Jak zawsze proszę\". Stałe klientki, które ufają Ci na tyle, że nie zastanawiają się nad każdym zakupem. To najcenniejszy typ – budowany latami."
            },
            {
              id: "sprzedaz-l1-heading-3",
              type: "heading",
              content: "Moment prawdy – kiedy proponować"
            },
            {
              id: "sprzedaz-l1-text-3",
              type: "text",
              content: "Timing jest kluczowy. Propozycja w złym momencie brzmi nachalnie. W dobrym – naturalnie.\n\n**Najlepsze momenty na propozycję:**\n• Podczas zabiegu, gdy klientka jest zrelaksowana i słucha\n• Gdy sama pyta o poradę lub problem\n• Po wyrażeniu zachwytu nad efektem\n• Podczas rozmowy o planowanych okazjach (ślub, wakacje)\n\n**Najgorsze momenty:**\n• Zaraz po wejściu – brzmi jak atak\n• Podczas płacenia – czuje się w pułapce\n• Gdy się spieszy – irytacja zamiast zainteresowania\n• Gdy jest wyraźnie zmęczona lub zestresowana"
            },
            {
              id: "sprzedaz-l1-comparison-1",
              type: "comparison",
              content: "Propozycje sprzedażowe",
              comparison: {
                good: {
                  title: "Naturalna propozycja",
                  description: "Podczas zabiegu, jako rozwiązanie problemu",
                  example: "Widzę, że skórki wokół paznokci są bardzo suche. Mam oliwkę, która naprawdę robi różnicę – klientki mówią, że już po tygodniu widać efekty. Chcesz spróbować?"
                },
                bad: {
                  title: "Nachalna propozycja",
                  description: "Na siłę, bez kontekstu",
                  example: "Mamy super promocję na oliwki! Kupisz? Jest też krem i peeling, wszystko 20% taniej!"
                }
              }
            },
            {
              id: "sprzedaz-l1-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka mówi, że jej paznokcie ciągle się łamią. Jaka jest najlepsza reakcja?",
                options: [
                  "Polecić najdroższy odżywkę ze sklepu",
                  "Zapytać o jej nawyki i dietę, potem zaproponować konkretne rozwiązanie",
                  "Powiedzieć, że to normalne i nic się nie da zrobić",
                  "Pokazać wszystkie produkty na paznokcie i niech sama wybierze"
                ],
                correctIndex: 1,
                explanation: "Najlepsza sprzedaż zaczyna się od zrozumienia problemu. Pytając o nawyki (mycie naczyń bez rękawiczek? mało wody? obgryzanie?) budujesz zaufanie i możesz zaproponować naprawdę pomocne rozwiązanie, nie przypadkowy produkt."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "sprzedaz-l1-check-1", text: "Wiem czym różni się naturalne polecanie od nachalnej sprzedaży" },
            { id: "sprzedaz-l1-check-2", text: "Rozumiem trzy typy decyzji zakupowych klientek" },
            { id: "sprzedaz-l1-check-3", text: "Znam najlepsze i najgorsze momenty na propozycje sprzedażowe" }
          ],
          keyTakeaways: [
            "Najskuteczniejsza sprzedaż wygląda jak szczera troska o dobro klientki",
            "Timing jest kluczowy – proponuj podczas zabiegu, gdy klientka jest zrelaksowana",
            "Pytaj o potrzeby zanim cokolwiek zaproponujesz"
          ]
        },
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 2 - UPSELLING I CROSS-SELLING
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "sprzedaz-l2",
          title: "Upselling i cross-selling w praktyce",
          description: "Jak naturalnie proponować dodatkowe usługi i produkty.",
          estimatedMinutes: 22,
          intro: "Upselling to proponowanie lepszej wersji usługi. Cross-selling to proponowanie usług uzupełniających. Oba robione dobrze zwiększają przychody i zadowolenie klientki.",
          sections: [
            {
              id: "sprzedaz-l2-heading-1",
              type: "heading",
              content: "Upselling – proponuj lepsze, nie droższe"
            },
            {
              id: "sprzedaz-l2-text-1",
              type: "text",
              content: "Upselling to nie \"weźmiesz droższe?\". To pokazanie klientce, że istnieje opcja, która lepiej spełni jej potrzeby.\n\n**Przykłady dobrego upsellingu:**\n• \"Przy okazji ślubu polecam przedłużanie 2D zamiast 1:1 – efekt jest bardziej dramatyczny na zdjęciach\"\n• \"Widzę, że masz dużo naturalnego odrostu – może hybrydowy gradient zamiast jednego koloru? Będzie wyglądał dobrze dłużej\"\n• \"Przy tak suchej skórze standardowy zabieg może nie wystarczyć – intensywny ma potrójne nawilżenie\"\n\nKlucz: **zawsze uzasadniaj wartość**, nie samą cenę. Klientka musi rozumieć DLACZEGO droższa opcja jest dla niej lepsza."
            },
            {
              id: "sprzedaz-l2-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Zidentyfikuj potrzebę** – słuchaj co klientka mówi o swoich planach, problemach, oczekiwaniach. Okazja (ślub, wakacje) to naturalny pretekst do upsellingu."
            },
            {
              id: "sprzedaz-l2-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Zaproponuj konkretną alternatywę** – nie \"może coś lepszego?\", ale konkretnie \"polecam X, bo...\". Im precyzyjniej, tym bardziej wiarygodnie."
            },
            {
              id: "sprzedaz-l2-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Podaj różnicę w cenie i wartości** – \"To 30 zł więcej, ale efekt trzyma 2 tygodnie dłużej\". Klientka widzi ROI, nie tylko koszt."
            },
            {
              id: "sprzedaz-l2-heading-2",
              type: "heading",
              content: "Cross-selling – naturalne uzupełnienia"
            },
            {
              id: "sprzedaz-l2-text-2",
              type: "text",
              content: "Cross-selling to proponowanie usług lub produktów, które pasują do tego, co klientka już kupuje. Najlepszy cross-selling czuje się jak pomoc, nie sprzedaż.\n\n**Naturalne pary w salonie beauty:**\n• Manicure → pedicure (\"Skoro już jesteś, może stopy też?\")\n• Przedłużanie rzęs → henna brwi (\"Przy takich rzęsach brwi wymagają wyrównania\")\n• Koloryzacja → pielęgnacja (\"Kolor będzie żywszy dłużej z tą maską\")\n• Makijaż → produkty do domu (\"Ten błyszczyk świetnie Ci pasuje, mamy go w sprzedaży\")"
            },
            {
              id: "sprzedaz-l2-tip-1",
              type: "tip",
              content: "Zasada 25%: najskuteczniejszy cross-selling to propozycje warte max 25% wartości głównej usługi. Klientka na manicure za 100 zł łatwiej doda oliwkę za 25 zł niż pedicure za 90 zł."
            },
            {
              id: "sprzedaz-l2-example-1",
              type: "example",
              content: "**Skrypt cross-sellingowy:**\n\n\"Ola, te rzęsy wyglądają pięknie! Zauważyłam tylko, że brwi są trochę jaśniejsze – przy tak ciemnych rzęsach mogłyby być bardziej wyraziste. Mam dziś wolne 15 minut, mogę zrobić szybką hennę. Co ty na to?\""
            },
            {
              id: "sprzedaz-l2-warning-1",
              type: "warning",
              content: "Nigdy nie proponuj więcej niż jednej dodatkowej usługi na raz. Lista \"może jeszcze brwi? i wąsik? i peeling?\" brzmi desperacko. Jedna trafiona propozycja > pięć przypadkowych."
            },
            {
              id: "sprzedaz-l2-heading-3",
              type: "heading",
              content: "Sprzedaż produktów do domu"
            },
            {
              id: "sprzedaz-l2-text-3",
              type: "text",
              content: "Produkty do pielęgnacji domowej to źródło dodatkowego przychodu, ale też budowania lojalności. Klientka, która używa \"Twoich\" produktów, myśli o Tobie codziennie.\n\n**Klucze do sprzedaży produktów:**\n• **Używaj ich podczas zabiegu** – \"Nakładam teraz oliwkę, którą mamy w sprzedaży. Zobacz jak szybko się wchłania\"\n• **Pokaż na sobie** – \"Sama tego używam, zobacz moje paznokcie\"\n• **Dawaj próbki** – klientka, która spróbuje w domu, wróci kupić pełną wersję\n• **Połącz z edukacją** – \"Żebyś utrzymała ten efekt, potrzebujesz nawilżać skórki codziennie. Ta oliwka jest idealna\""
            },
            {
              id: "sprzedaz-l2-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka przyszła na manicure hybrydowy. Podczas zabiegu wspomina, że za 2 tygodnie jedzie na wakacje. Co powiesz?",
                options: [
                  "Nic – niech sama poprosi o więcej",
                  "Przypomnij o terminie uzupełnienia przed wyjazdem i zaproponuj pedicure w tym samym terminie",
                  "Zaproponuj wszystkie usługi z cennika wakacyjnego",
                  "Powiedz że na wakacjach paznokcie szybciej się psują"
                ],
                correctIndex: 1,
                explanation: "Wakacje to doskonały pretekst do zaproponowania pedicure (będzie nosić sandały) i przypomnienia o terminie (nie chce chodzić z odrostem na plaży). To naturalna troska, nie nachalna sprzedaż."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "sprzedaz-l2-check-1", text: "Rozumiem różnicę między upsellingiem a cross-sellingiem" },
            { id: "sprzedaz-l2-check-2", text: "Znam zasadę 25% dla cross-sellingu" },
            { id: "sprzedaz-l2-check-3", text: "Wiem jak naturalnie proponować produkty do domu" }
          ],
          keyTakeaways: [
            "Upselling to pokazanie wartości lepszej opcji, nie samej ceny",
            "Proponuj maksymalnie jedną dodatkową usługę na raz",
            "Używaj produktów podczas zabiegu – klientka sama zapyta o kupno"
          ]
        },
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 3 - RADZENIE SOBIE Z OBIEKCJAMI
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "sprzedaz-l3",
          title: "Jak reagować na \"za drogo\"",
          description: "Profesjonalne odpowiedzi na obiekcje cenowe i wątpliwości klientek.",
          estimatedMinutes: 18,
          intro: "\"Za drogo\" rzadko znaczy, że klientka nie ma pieniędzy. Częściej oznacza, że nie widzi wartości. Twoim zadaniem jest pokazać, za co płaci.",
          sections: [
            {
              id: "sprzedaz-l3-heading-1",
              type: "heading",
              content: "Co naprawdę kryje się za \"za drogo\""
            },
            {
              id: "sprzedaz-l3-text-1",
              type: "text",
              content: "Kiedy klientka mówi \"za drogo\", w 90% przypadków nie mówi o swoim portfelu. Mówi jedno z następujących:\n\n• **\"Nie rozumiem za co płacę\"** – brak wiedzy o wartości\n• **\"Konkurencja ma taniej\"** – porównuje jabłka do gruszek\n• **\"Nie jestem przekonana, że to działa\"** – brak zaufania\n• **\"Chcę, żebyś mnie przekonała\"** – czeka na argumenty\n• **\"Potrzebuję czasu do namysłu\"** – to nie odmowa, to pauza\n\nRozpoznanie prawdziwej przyczyny jest kluczem. Nie zniżaj ceny – wyjaśniaj wartość."
            },
            {
              id: "sprzedaz-l3-heading-2",
              type: "heading",
              content: "Technika LAPA"
            },
            {
              id: "sprzedaz-l3-text-2",
              type: "text",
              content: "LAPA to prosta metoda radzenia sobie z obiekcjami:\n\n**L – Słuchaj** (Listen)\nNie przerywaj. Niech klientka skończy mówić. Często sama się przekona lub da Ci wskazówkę co ją blokuje.\n\n**A – Akceptuj** (Acknowledge)\n\"Rozumiem, że to inwestycja\" – nie neguj jej uczucia. Pokazujesz, że ją słyszysz.\n\n**P – Pytaj** (Probe)\n\"Czy chodzi o sam koszt, czy o coś jeszcze?\" – pozwala dotrzeć do prawdziwej obiekcji.\n\n**A – Odpowiedz** (Answer)\nDopiero teraz daj konkretną odpowiedź na konkretną wątpliwość."
            },
            {
              id: "sprzedaz-l3-example-1",
              type: "example",
              content: "**Klientka:** \"250 zł za przedłużanie? U koleżanki robię za 120.\"\n\n**Ty:** \"Rozumiem, różnice cenowe mogą być zaskakujące. Powiem Ci, z czego ta cena wynika. Używam kleju hypoalergicznego i rzęs z prawdziwego jedwabiu – trzymają 4-5 tygodni zamiast 2. W przeliczeniu wychodzi podobnie, a oczy są bezpieczne. Czy Twoja koleżanka używa podobnych materiałów?\"\n\n**Efekt:** Pokazujesz wartość bez negowania konkurencji. Klientka sama oceni."
            },
            {
              id: "sprzedaz-l3-heading-3",
              type: "heading",
              content: "Odpowiedzi na typowe obiekcje"
            },
            {
              id: "sprzedaz-l3-text-3",
              type: "text",
              content: "**\"Muszę się zastanowić\"**\n→ \"Jasne! Mogę Ci wysłać zdjęcia efektów, żebyś miała pełen obraz. Kiedy mam się odezwać?\"\n\n**\"Znajoma robi taniej\"**\n→ \"Rozumiem! Czy wiesz jakich materiałów używa? Bo cena często zależy od jakości produktów i doświadczenia.\"\n\n**\"Może następnym razem\"**\n→ \"Pewnie! Jeśli chcesz, mogę zarezerwować termin z wyprzedzeniem – grafik szybko się zapełnia.\"\n\n**\"Nie wiem czy to dla mnie\"**\n→ \"Wiele klientek tak mówiło na początku. Mogę pokazać zdjęcia before/after osób o podobnym typie urody?\""
            },
            {
              id: "sprzedaz-l3-warning-1",
              type: "warning",
              content: "Nigdy nie przepraszaj za cenę! \"Wiem, że drogo, ale...\" – to od razu sugeruje, że cena jest nieuzasadniona. Stój za swoją ceną z pewnością."
            },
            {
              id: "sprzedaz-l3-tip-1",
              type: "tip",
              content: "Zamień \"ale\" na \"i\". Zamiast \"To droższe, ale lepsze\" powiedz \"To jest droższe i dlatego lepsze\". Małe słowo, duża różnica w odbiorze."
            },
            {
              id: "sprzedaz-l3-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka mówi: \"Zastanowię się i dam znać\". Jak reagujesz?",
                options: [
                  "OK, to czekam na wiadomość",
                  "Może od razu ustalimy termin, grafik szybko się zapełnia?",
                  "Zapytaj co konkretnie chce przemyśleć i zaproponuj przesłanie dodatkowych informacji",
                  "Daj 20% zniżki żeby się zdecydowała teraz"
                ],
                correctIndex: 2,
                explanation: "\"Zastanowię się\" może oznaczać różne rzeczy. Pytając o konkretną wątpliwość możesz ją rozwiązać od razu. Propozycja wysłania informacji zostawia otwarte drzwi bez presji."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "sprzedaz-l3-check-1", text: "Znam metodę LAPA do radzenia sobie z obiekcjami" },
            { id: "sprzedaz-l3-check-2", text: "Wiem jak odpowiadać na \"za drogo\" bez obniżania ceny" },
            { id: "sprzedaz-l3-check-3", text: "Potrafię zamienić \"ale\" na \"i\" w prezentacji wartości" }
          ],
          keyTakeaways: [
            "\"Za drogo\" zwykle oznacza brak widocznej wartości, nie brak pieniędzy",
            "Nigdy nie przepraszaj za cenę – stój za nią z pewnością",
            "Pytaj o konkretne wątpliwości zamiast od razu obniżać cenę"
          ]
        },
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 4 - BUDOWANIE WARTOŚCI
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "sprzedaz-l4",
          title: "Jak mówić o wartości, nie o cenie",
          description: "Naucz się prezentować usługi przez pryzmat korzyści dla klientki.",
          estimatedMinutes: 15,
          intro: "Klientka nie płaci za zabieg. Płaci za efekt, emocje, oszczędność czasu, pewność siebie. Naucz się mówić jej językiem.",
          sections: [
            {
              id: "sprzedaz-l4-heading-1",
              type: "heading",
              content: "Cechy vs. korzyści"
            },
            {
              id: "sprzedaz-l4-text-1",
              type: "text",
              content: "Największy błąd w sprzedaży to mówienie o cechach zamiast o korzyściach. Klientkę nie obchodzi skład chemiczny lakieru. Obchodzi ją, że paznokcie będą piękne przez 3 tygodnie bez odprysków.\n\n**Cechy** to fakty o produkcie/usłudze:\n• \"Lakier ma formułę 5-free\"\n• \"Używam lampy 48W\"\n• \"Rzęsy są z syntetycznego jedwabiu\"\n\n**Korzyści** to co klientka z tego ma:\n• \"Paznokcie są bezpieczne nawet dla alergiczek\"\n• \"Lakier utwardza się w 30 sekund, nie w 2 minuty\"\n• \"Rzęsy są tak lekkie, że nie czujesz ich na powiekach\""
            },
            {
              id: "sprzedaz-l4-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Weź cechę swojej usługi** – np. \"używam profesjonalnych produktów\""
            },
            {
              id: "sprzedaz-l4-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Zadaj pytanie \"i co z tego?\"** – co to daje klientce?"
            },
            {
              id: "sprzedaz-l4-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Sformułuj korzyść** – \"Dzięki temu efekt trzyma dłużej i nie uszkadzasz naturalnych paznokci\""
            },
            {
              id: "sprzedaz-l4-comparison-1",
              type: "comparison",
              content: "Prezentacja usługi",
              comparison: {
                good: {
                  title: "Język korzyści",
                  description: "Skupiony na tym, co klientka zyskuje",
                  example: "Ten zabieg sprawia, że rano oszczędzasz 20 minut na makijażu – wystarczy tusz i jesteś gotowa!"
                },
                bad: {
                  title: "Język cech",
                  description: "Techniczny, abstrakcyjny",
                  example: "To lifting z keratyną i laminacją włosa, z aktywatorem pH 8.5."
                }
              }
            },
            {
              id: "sprzedaz-l4-heading-2",
              type: "heading",
              content: "Storytelling – opowiadaj historie"
            },
            {
              id: "sprzedaz-l4-text-2",
              type: "text",
              content: "Ludzie zapamiętują historie, nie fakty. Zamiast mówić \"ten zabieg jest popularny\", powiedz:\n\n\"Miałam klientkę, Annę, która przez lata nosiła sztuczne rzęsy na imprezy. Po pierwszym liftingu napisała do mnie następnego dnia, że pierwszy raz w życiu obudziła się i poczuła się piękna bez makijażu. Teraz przychodzi co 6 tygodni.\"\n\nTa historia sprzedaje lepiej niż jakikolwiek opis techniczny. Klientka wyobraża sobie siebie na miejscu Anny."
            },
            {
              id: "sprzedaz-l4-tip-1",
              type: "tip",
              content: "Zbieraj historie sukcesu! Zapisuj pozytywne reakcje klientek (oczywiście anonimowo). Używaj ich w rozmowach. \"Klientka ze ślubu pisała mi, że rzęsy przetrwały całą noc tańców i płakania ze szczęścia\" – to potężny argument."
            },
            {
              id: "sprzedaz-l4-heading-3",
              type: "heading",
              content: "Kwantyfikuj wartość"
            },
            {
              id: "sprzedaz-l4-text-3",
              type: "text",
              content: "Liczby są przekonujące. Zamiast mówić \"trzyma długo\", powiedz \"trzyma 4 tygodnie\". Zamiast \"oszczędzasz czas\", powiedz \"oszczędzasz 15 minut dziennie, czyli 7 godzin miesięcznie\".\n\n**Przykłady kwantyfikacji:**\n• \"Ten zabieg za 150 zł trzyma 5 tygodni – to 30 zł tygodniowo, czyli mniej niż kawa dziennie\"\n• \"Hybryda co 3 tygodnie to 12 wizyt rocznie. Przy naszym programie lojalnościowym 13-ta jest gratis\"\n• \"Klientki mówią, że oszczędzają średnio 20 minut rano na makijażu – to ponad 10 godzin miesięcznie!\""
            },
            {
              id: "sprzedaz-l4-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Która prezentacja usługi jest najbardziej przekonująca?",
                options: [
                  "Mamy profesjonalne produkty najwyższej jakości",
                  "Ten zabieg kosztuje 200 zł i trwa 2 godziny",
                  "Efekt utrzymuje się 5 tygodni, więc zamiast 4 wizyt miesięcznie potrzebujesz tylko jednej",
                  "To bardzo popularna usługa, wszystkie klientki ją chwalą"
                ],
                correctIndex: 2,
                explanation: "Konkretna korzyść (mniej wizyt) pokazana przez liczby (5 tygodni, 4 vs 1 wizyta) jest najbardziej przekonująca. Klientka widzi realną oszczędność czasu i pieniędzy."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "sprzedaz-l4-check-1", text: "Rozumiem różnicę między cechami a korzyściami" },
            { id: "sprzedaz-l4-check-2", text: "Potrafię opowiadać historie sukcesu klientek" },
            { id: "sprzedaz-l4-check-3", text: "Wiem jak kwantyfikować wartość usług" }
          ],
          keyTakeaways: [
            "Mów o korzyściach dla klientki, nie o cechach produktu",
            "Używaj historii sukcesu innych klientek jako dowodu",
            "Kwantyfikuj wartość – konkretne liczby są przekonujące"
          ]
        }
      ]
    }
  ]
};
