import { Course } from "@/types/courses";

export const rolkiWideoCourse: Course = {
  id: "rolki-wideo",
  title: "Rolki i wideo",
  description: "Opanuj tworzenie angażujących rolek i krótkich filmów, które przyciągną nowych klientów do Twojego salonu.",
  icon: "Video",
  color: "red",
  estimatedHours: 4,
  totalLessons: 5,
  modules: [
    {
      id: "rolki-wideo-m1",
      title: "Rolki i wideo",
      description: "Kompleksowy przewodnik po tworzeniu wideo dla salonu beauty",
      lessons: [
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 1 - ROLA WIDEO W SALONIE BEAUTY
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "rola-wideo-w-salonie",
          title: "Rola wideo w salonie beauty",
          description: "Dlaczego wideo jest kluczowe dla rozwoju Twojego salonu w social mediach",
          estimatedMinutes: 18,
          intro: "W tej lekcji odkryjesz, dlaczego wideo zdominowało social media i jak możesz to wykorzystać, nawet jeśli boisz się kamery. Zrozumiesz, dlaczego algorytm kocha rolki i jak przełamać pierwsze bariery.",
          sections: [
            // --- SEKCJA 1: Rewolucja wideo ---
            {
              id: "rola-wideo-heading-1",
              type: "heading",
              content: "Rewolucja wideo w social mediach"
            },
            {
              id: "rola-wideo-text-1",
              type: "text",
              content: "Coś fundamentalnego zmieniło się w social mediach w ostatnich latach. **Wideo przejęło kontrolę.** Facebook i Instagram całkowicie przebudowały swoje algorytmy, żeby promować format wideo kosztem zdjęć.\n\nTo nie jest chwilowy trend – to nowa rzeczywistość, w której musisz się odnaleźć, jeśli chcesz dotrzeć do nowych klientek."
            },
            {
              id: "rola-wideo-text-2",
              type: "text",
              content: "**Liczby mówią same za siebie:**\n\n• Rolki mają średnio **3x większy zasięg** niż posty ze zdjęciami\n• Czas oglądania wideo na Instagramie wzrósł o **80%** rok do roku\n• **67% użytkowników** woli obejrzeć krótkie wideo niż przeczytać tekst\n• Algorytm pokazuje rolki osobom, które **NIE obserwują** Twojego profilu"
            },
            {
              id: "rola-wideo-tip-1",
              type: "tip",
              content: "To jedyny format, który algorytm aktywnie promuje nowym odbiorcom. Post ze zdjęciem widzą głównie Twoi obserwujący. Rolkę może zobaczyć ktoś, kto nigdy o Tobie nie słyszał."
            },

            // --- SEKCJA 2: Dlaczego algorytm kocha wideo ---
            {
              id: "rola-wideo-heading-2",
              type: "heading",
              content: "Dlaczego algorytm promuje wideo"
            },
            {
              id: "rola-wideo-text-3",
              type: "text",
              content: "Algorytm Facebooka i Instagrama ma jeden cel: **zatrzymać użytkowników jak najdłużej** na platformie. Im dłużej ktoś scrolluje, tym więcej reklam zobaczy, tym więcej Meta zarabia.\n\nI tu pojawia się klucz: **wideo trzyma uwagę znacznie dłużej niż zdjęcie.**"
            },
            {
              id: "rola-wideo-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Zdjęcie** – użytkownik patrzy 1-2 sekundy, scrolluje dalej. Koniec interakcji."
            },
            {
              id: "rola-wideo-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Rolka** – użytkownik zatrzymuje się, ogląda 15-60 sekund, może obejrzeć jeszcze raz. Algorytm to nagradza."
            },
            {
              id: "rola-wideo-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Sygnał dla algorytmu** – \"Ta treść trzyma uwagę → pokażmy ją więcej osobom → większy zasięg\"."
            },
            {
              id: "rola-wideo-text-4",
              type: "text",
              content: "Dlatego nawet średniej jakości rolka często przebije świetne zdjęcie pod względem zasięgu. **Format ma znaczenie.**"
            },

            // --- SEKCJA 3: Porównanie zasięgów ---
            {
              id: "rola-wideo-heading-3",
              type: "heading",
              content: "Wideo vs zdjęcia – twarde dane"
            },
            {
              id: "rola-wideo-comparison-1",
              type: "comparison",
              content: "Porównanie rzeczywistych zasięgów dla salonu beauty:",
              comparison: {
                good: {
                  title: "Rolka z metamorfozą",
                  description: "Zasięg: 8 000 - 50 000 wyświetleń, widoczność: 48-72 godziny aktywnej promocji przez algorytm, 60% wyświetleń od osób NIEOBSERWUJĄCYCH",
                  example: "15-sekundowa rolka 'przed/po' paznokci – 23 000 wyświetleń, 47 zapisań, 12 nowych obserwujących"
                },
                bad: {
                  title: "Post ze zdjęciem metamorfozy",
                  description: "Zasięg: 200 - 800 wyświetleń, widoczność: 24 godziny, potem znika, 90% wyświetleń tylko od obserwujących",
                  example: "To samo 'przed/po' jako zdjęcie – 340 wyświetleń, 5 polubień, 0 nowych obserwujących"
                }
              }
            },
            {
              id: "rola-wideo-text-5",
              type: "text",
              content: "**Ta sama metamorfoza, różny format = różnica 70x w zasięgu.**\n\nCzy nadal uważasz, że wideo to \"opcja\"?"
            },

            // --- SEKCJA 4: Mockup interfejsu ---
            {
              id: "rola-wideo-heading-4",
              type: "heading",
              content: "Jak rolki wyglądają w aplikacji"
            },
            {
              id: "rola-wideo-mockup-1",
              type: "mockup",
              content: "Tak wygląda interfejs rolki na Instagramie:",
              mockupData: {
                platform: "instagram",
                variant: "reel",
                postCaption: "Metamorfoza tygodnia 💅✨ Od zniszczonych paznokci do perfekcyjnego nude ombre. Efekt po 2h pracy 🤍",
                postLikes: "1.2k",
                postComments: "34",
                description: "Rolki wyświetlają się w pionie (9:16) na pełnym ekranie. Klientka scrolluje palcem w górę, żeby zobaczyć kolejną."
              }
            },
            {
              id: "rola-wideo-text-6",
              type: "text",
              content: "Zwróć uwagę na **pełnoekranowy format** – nie ma rozpraszaczy. Klientka widzi TYLKO Twoją treść. To ogromna szansa na zrobienie wrażenia."
            },

            // --- SEKCJA 5: Czy muszę pokazywać twarz ---
            {
              id: "rola-wideo-heading-5",
              type: "heading",
              content: "\"Ale ja nie chcę pokazywać twarzy...\""
            },
            {
              id: "rola-wideo-text-7",
              type: "text",
              content: "To najczęstsza wymówka. I mam dla Ciebie świetną wiadomość: **NIE MUSISZ pokazywać twarzy.**\n\nWiększość najpopularniejszych rolek beauty pokazuje **tylko ręce podczas pracy**. Klientki chcą zobaczyć Twoje umiejętności, nie Twoją twarz."
            },
            {
              id: "rola-wideo-example-1",
              type: "example",
              content: "**7 typów rolek BEZ pokazywania twarzy:**\n\n1. **Timelapse zabiegu** – kamera nad stanowiskiem, ręce w kadrze\n2. **Przed/po** – dwa ujęcia, bez słowa\n3. **Close-up na detale** – zbliżenie na paznokcie, brwi, rzęsy\n4. **POV praca** – kamera z perspektywy klientki, widać tylko Twoje ręce\n5. **Reveal moment** – budowanie napięcia, odsłonięcie efektu\n6. **Pakowanie/rozpakowywanie** – produkty, narzędzia, zamówienia\n7. **Odpowiedzi tekstowe** – muzyka + tekst na ekranie, bez mówienia"
            },
            {
              id: "rola-wideo-tip-2",
              type: "tip",
              content: "Pokazywanie twarzy POMAGA budować relację, ale nie jest KONIECZNE. Zacznij od formatów bez twarzy, oswój się z nagrywaniem, a z czasem – jeśli chcesz – zaczniesz się pokazywać."
            },

            // --- SEKCJA 6: Quiz ---
            {
              id: "rola-wideo-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Dlaczego algorytm promuje rolki bardziej niż zdjęcia?",
                options: [
                  "Bo Meta chce, żebyś więcej pracowała nad contentem",
                  "Bo wideo trzyma użytkowników dłużej na platformie",
                  "Bo zdjęcia są za proste do stworzenia",
                  "Bo rolki są nowsze i modniejsze"
                ],
                correctIndex: 1,
                explanation: "Dokładnie! Algorytm promuje treści, które zatrzymują użytkowników – im dłużej oglądają, tym więcej reklam widzą. Wideo trzyma uwagę 10-30x dłużej niż zdjęcie."
              }
            },

            // --- SEKCJA 7: Przełamanie strachu ---
            {
              id: "rola-wideo-heading-6",
              type: "heading",
              content: "Przełamanie strachu przed kamerą"
            },
            {
              id: "rola-wideo-text-8",
              type: "text",
              content: "Strach przed kamerą jest **normalny i zrozumiały**. Większość osób go ma. Ale można go przełamać – krok po kroku, bez presji."
            },
            {
              id: "rola-wideo-step-4",
              type: "step",
              stepNumber: 1,
              content: "**Nagrywaj \"do szuflady\"** – Przez pierwszy tydzień nagrywaj, ale NIE publikuj. Oswój się z procesem bez presji oceny."
            },
            {
              id: "rola-wideo-step-5",
              type: "step",
              stepNumber: 2,
              content: "**Zacznij bez głosu** – Pierwsze rolki rób z muzyką i tekstem. Nie musisz od razu mówić do kamery."
            },
            {
              id: "rola-wideo-step-6",
              type: "step",
              stepNumber: 3,
              content: "**Pokazuj tylko ręce** – Skup kamerę na pracy, nie na sobie. Klientki i tak chcą widzieć efekty, nie Ciebie."
            },
            {
              id: "rola-wideo-step-7",
              type: "step",
              stepNumber: 4,
              content: "**Obejrzyj po tygodniu** – Wróć do nagrań \"do szuflady\". Zobaczysz, że nie jest tak źle, jak myślałaś."
            },
            {
              id: "rola-wideo-warning-1",
              type: "warning",
              content: "Nigdy nie porównuj swoich pierwszych rolek z kontami, które nagrywają od lat. To jak porównywanie pierwszego manicure z pracą z 10-letnim doświadczeniem. Każdy zaczynał od zera."
            },

            // --- SEKCJA 8: Co NIE robić na początku ---
            {
              id: "rola-wideo-heading-7",
              type: "heading",
              content: "Czego NIE robić na początku"
            },
            {
              id: "rola-wideo-text-9",
              type: "text",
              content: "Błędy na starcie mogą zniechęcić na długo. Oto pułapki, których warto unikać:"
            },
            {
              id: "rola-wideo-comparison-2",
              type: "comparison",
              content: "Początkujący twórcy vs doświadczeni:",
              comparison: {
                good: {
                  title: "Dobry start",
                  description: "Proste formaty bez mówienia, regularne nagrywanie (nawet niepublikowane), akceptacja niedoskonałości, focus na JEDNYM typie rolki",
                  example: "Tydzień 1: 5 rolek 'przed/po', tylko z muzyką, każda lepsza od poprzedniej"
                },
                bad: {
                  title: "Błędy początkujących",
                  description: "Próba robienia wszystkiego naraz, porównywanie się z influencerami, czekanie na 'perfekcyjny moment', rezygnacja po pierwszej 'nieudanej' rolce",
                  example: "\"Muszę mieć idealny ring light, scenariusz i makijaż, zanim zacznę\" → nigdy nie zaczyna"
                }
              }
            },
            {
              id: "rola-wideo-tip-3",
              type: "tip",
              content: "Perfekcjonizm to wróg postępu. Pierwsza rolka NIE MUSI być idealna. Ma być ZROBIONA. Druga będzie lepsza, trzecia jeszcze lepsza. Ale najpierw musisz zacząć."
            },

            // --- SEKCJA 9: Twój plan na start ---
            {
              id: "rola-wideo-heading-8",
              type: "heading",
              content: "Twój plan na pierwszy tydzień"
            },
            {
              id: "rola-wideo-text-10",
              type: "text",
              content: "Oto konkretny plan, który możesz zacząć realizować już dziś:"
            },
            {
              id: "rola-wideo-step-8",
              type: "step",
              stepNumber: 1,
              content: "**Dziś:** Nagraj jedną próbną rolkę podczas pracy. 15 sekund, tylko ręce. Nie publikuj."
            },
            {
              id: "rola-wideo-step-9",
              type: "step",
              stepNumber: 2,
              content: "**Jutro:** Nagraj kolejną. Spróbuj innego kąta lub lepszego oświetlenia."
            },
            {
              id: "rola-wideo-step-10",
              type: "step",
              stepNumber: 3,
              content: "**Dzień 3-5:** Nagrywaj codziennie po jednej rolce. Zbieraj materiał."
            },
            {
              id: "rola-wideo-step-11",
              type: "step",
              stepNumber: 4,
              content: "**Dzień 6:** Obejrzyj wszystkie nagrania. Wybierz najlepsze."
            },
            {
              id: "rola-wideo-step-12",
              type: "step",
              stepNumber: 5,
              content: "**Dzień 7:** Opublikuj swoją pierwszą rolkę. Dodaj muzykę i prosty tekst. ZROBIONE!"
            },
            {
              id: "rola-wideo-text-11",
              type: "text",
              content: "**Po tygodniu będziesz mieć:** doświadczenie z nagrywaniem, pierwszą opublikowaną rolkę i – co najważniejsze – przełamany lód.\n\nOd tego momentu będzie już tylko łatwiej."
            },

            // --- SEKCJA 10: Quiz końcowy ---
            {
              id: "rola-wideo-quiz-2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Jaki jest najlepszy sposób na przełamanie strachu przed kamerą?",
                options: [
                  "Kupić profesjonalny sprzęt i oświetlenie",
                  "Nagrywać regularnie, nawet 'do szuflady', bez presji publikacji",
                  "Poczekać, aż poczujesz się pewnie",
                  "Obejrzeć 100 tutoriali o nagrywaniu"
                ],
                correctIndex: 1,
                explanation: "Jedyny sposób na oswojenie się z kamerą to PRAKTYKA. Nagrywanie 'do szuflady' pozwala ćwiczyć bez stresu związanego z publikacją. Z czasem zobaczysz postęp i nabierzesz pewności."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-rola-1", text: "Rozumiem, dlaczego wideo ma większy zasięg niż zdjęcia" },
            { id: "check-rola-2", text: "Wiem, że nie muszę pokazywać twarzy w rolkach" },
            { id: "check-rola-3", text: "Znam sposoby na przełamanie strachu przed kamerą" },
            { id: "check-rola-4", text: "Mam plan na pierwszy tydzień nagrywania" },
            { id: "check-rola-5", text: "Nagrałam pierwszą próbną rolkę (do szuflady)" }
          ],
          keyTakeaways: [
            "Rolki mają 3x większy zasięg niż zdjęcia – algorytm je aktywnie promuje",
            "Nie musisz pokazywać twarzy – większość skutecznych rolek beauty pokazuje tylko ręce",
            "Strach przed kamerą przełamujesz PRAKTYKĄ, nie czekaniem na gotowość",
            "Zacznij od nagrywania 'do szuflady' – bez presji publikacji"
          ],
          nextLessonTitle: "Typy rolek"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 2 - TYPY ROLEK
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "typy-rolek",
          title: "Typy rolek",
          description: "Poznaj różne formaty rolek i wybierz te, które pasują do Twojego salonu",
          estimatedMinutes: 20,
          intro: "Nie wszystkie rolki są takie same – i to świetna wiadomość! W tej lekcji poznasz 12 sprawdzonych formatów rolek dla salonu beauty i dowiesz się, które z nich najlepiej pasują do Twojego stylu pracy.",
          sections: [
            // --- SEKCJA 1: Wprowadzenie ---
            {
              id: "typy-heading-1",
              type: "heading",
              content: "Mapa formatów wideo dla beauty"
            },
            {
              id: "typy-text-1",
              type: "text",
              content: "Salony beauty mają ogromną przewagę: **Twoja praca jest z natury wizualna.** Każdy zabieg to potencjalna treść. Ale nie wszystkie formaty działają tak samo.\n\nPodzielimy rolki na **3 kategorie** – każda pełni inną funkcję w Twoim marketingu."
            },
            {
              id: "typy-text-2",
              type: "text",
              content: "**3 kategorie rolek:**\n\n• **Efektowe** – pokazują Twoje umiejętności i efekty pracy\n• **Edukacyjne** – budują wizerunek eksperta, odpowiadają na pytania\n• **Relacyjne** – pokazują Ciebie, kulisy, budują więź z odbiorcami"
            },
            {
              id: "typy-tip-1",
              type: "tip",
              content: "Najlepsze konta beauty mieszają wszystkie 3 kategorie. Sama przed/po może się znudzić. Same porady mogą być nudne. Różnorodność trzyma uwagę."
            },

            // --- SEKCJA 2: Rolki efektowe ---
            {
              id: "typy-heading-2",
              type: "heading",
              content: "Kategoria 1: Rolki efektowe"
            },
            {
              id: "typy-text-3",
              type: "text",
              content: "To **fundament** contentu beauty. Pokazujesz rezultaty swojej pracy – to, po co klientki do Ciebie przychodzą."
            },
            {
              id: "typy-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Przed/po (transformacje)** – Najpopularniejszy format w beauty. Pokazujesz stan przed i efekt końcowy. Proste, skuteczne, viralowe."
            },
            {
              id: "typy-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Timelapse zabiegu** – Przyspieszone nagranie całego procesu. Hipnotyzujące do oglądania, pokazuje Twój warsztat."
            },
            {
              id: "typy-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Reveal (odsłonięcie)** – Budujesz napięcie, zasłaniasz efekt, na końcu \"wow\" moment z odsłonięciem. Świetne dla dramatycznych metamorfoz."
            },
            {
              id: "typy-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Close-up detali** – Zbliżenia na detale: precyzja manicure, perfekcyjne brwi, tekstura skóry. Pokazuje jakość Twojej pracy."
            },
            {
              id: "typy-example-1",
              type: "example",
              content: "**Scenariusz rolki \"Przed/po\" dla paznokci:**\n\n• **Sekunda 1-3:** Zbliżenie na zniszczone paznokcie, tekst: \"Przyszła z tym...\"\n• **Sekunda 4-5:** Przejście (transition) – np. zakrycie dłonią\n• **Sekunda 6-10:** Efekt końcowy z różnych kątów, tekst: \"Wyszła z tym ✨\"\n• **Muzyka:** Trendy dźwięk z gwałtownym przejściem\n\n**Czas nagrania:** 2 minuty | **Czas montażu:** 5 minut | **Potencjalny zasięg:** 10k+"
            },
            {
              id: "typy-mockup-1",
              type: "mockup",
              content: "Tak może wyglądać Twoja rolka \"przed/po\":",
              mockupData: {
                platform: "instagram",
                variant: "reel",
                postCaption: "Od tego zaczęłyśmy... ➡️ Do tego doszłyśmy 💅✨ Metamorfoza 2h pracy. Swipe left dla efektu!",
                postLikes: "2.4k",
                postComments: "67",
                description: "Rolki przed/po to fundament contentu beauty – pokazują Twoje umiejętności w najbardziej przekonujący sposób."
              }
            },

            // --- SEKCJA 3: Rolki edukacyjne ---
            {
              id: "typy-heading-3",
              type: "heading",
              content: "Kategoria 2: Rolki edukacyjne"
            },
            {
              id: "typy-text-4",
              type: "text",
              content: "Edukacyjne rolki budują **wizerunek eksperta**. Pokazujesz, że wiesz więcej niż konkurencja. Klientki ufają specjalistom."
            },
            {
              id: "typy-step-5",
              type: "step",
              stepNumber: 1,
              content: "**Porady i wskazówki** – \"3 sposoby na dłuższe utrzymanie lakieru\", \"5 błędów w pielęgnacji brwi\". Konkretna wartość dla widzów."
            },
            {
              id: "typy-step-6",
              type: "step",
              stepNumber: 2,
              content: "**Odpowiedzi na pytania** – \"Czy hybryda niszczy paznokcie?\" – odpowiadasz na najczęstsze wątpliwości klientek."
            },
            {
              id: "typy-step-7",
              type: "step",
              stepNumber: 3,
              content: "**Obalanie mitów** – \"MIT: Paznokcie muszą odpoczywać od hybryd\" – prostitujesz błędne przekonania."
            },
            {
              id: "typy-step-8",
              type: "step",
              stepNumber: 4,
              content: "**Mini-tutoriale** – Pokazujesz, jak klientka może dbać o efekt między wizytami. Buduje zaufanie i lojalność."
            },
            {
              id: "typy-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Jaki typ rolki edukacyjnej byłby najlepszy dla salonu specjalizującego się w paznokciach hybrydowych?",
                options: [
                  "Tutorial profesjonalnego manicure",
                  "Obalenie mitu o 'odpoczynku paznokci od hybryd'",
                  "Recenzja drogiego lakieru",
                  "Historia manicure na świecie"
                ],
                correctIndex: 1,
                explanation: "Obalanie mitu, który zniechęca klientki do regularnych wizyt, to świetna strategia. Pokazujesz ekspertyzę i jednocześnie usuwasz barierę zakupową."
              }
            },
            {
              id: "typy-comparison-1",
              type: "comparison",
              content: "Rolka edukacyjna – dobra vs zła:",
              comparison: {
                good: {
                  title: "Skuteczna rolka edukacyjna",
                  description: "Konkretny problem/pytanie, szybka odpowiedź (15-30 sek), praktyczna wartość, CTA na końcu (pytanie, zachęta do zapisu)",
                  example: "\"3 BŁĘDY przed wizytą, przez które manicure nie trzyma\" – konkretne, użyteczne, angażujące"
                },
                bad: {
                  title: "Nieskuteczna rolka edukacyjna",
                  description: "Ogólniki bez konkretu, za długie (2+ min), brak struktury, nudne wprowadzenie",
                  example: "\"Dzisiaj opowiem wam trochę o pielęgnacji paznokci...\" – ziewanie po 3 sekundach"
                }
              }
            },

            // --- SEKCJA 4: Rolki relacyjne ---
            {
              id: "typy-heading-4",
              type: "heading",
              content: "Kategoria 3: Rolki budujące relację"
            },
            {
              id: "typy-text-5",
              type: "text",
              content: "Te rolki pokazują **Ciebie jako osobę**, nie tylko jako specjalistkę. Klientki chcą wiedzieć, do kogo przychodzą. Kulisy, codzienność, Twoja osobowość."
            },
            {
              id: "typy-step-9",
              type: "step",
              stepNumber: 1,
              content: "**Behind the scenes** – Kulisy pracy: przygotowanie stanowiska, organizacja narzędzi, poranki w salonie."
            },
            {
              id: "typy-step-10",
              type: "step",
              stepNumber: 2,
              content: "**Dzień z życia** – \"Dzień ze mną w salonie\" – od porannej kawy do ostatniej klientki."
            },
            {
              id: "typy-step-11",
              type: "step",
              stepNumber: 3,
              content: "**Poznaj mnie** – Historia jak zaczęłaś, dlaczego kochasz swoją pracę, wartości Twojego salonu."
            },
            {
              id: "typy-step-12",
              type: "step",
              stepNumber: 4,
              content: "**Pakowanie/rozpakowywanie** – Nowe produkty, zamówienia, organizacja. Ludzie uwielbiają oglądać \"kulisy\"."
            },
            {
              id: "typy-example-2",
              type: "example",
              content: "**Scenariusz rolki \"Dzień w moim salonie\":**\n\n• **0-3 sek:** Budzik, wstawanie (lub kawa w drodze)\n• **4-8 sek:** Otwieranie salonu, włączanie światła\n• **9-15 sek:** Przygotowanie stanowiska, 2-3 szybkie ujęcia\n• **16-22 sek:** Fragment pracy z klientką (ręce w kadrze)\n• **23-28 sek:** Przerwa, lunch, kawa\n• **29-35 sek:** Ostatnia klientka, efekt końcowy\n• **36-40 sek:** Zamykanie salonu, tekst: \"Do jutra! 💕\"\n\n**Muzyka:** Spokojna, \"cozy\" vibe | **Format:** Dzień w 40 sekund"
            },
            {
              id: "typy-tip-2",
              type: "tip",
              content: "Rolki relacyjne mają często mniejszy zasięg, ale **wyższe zaangażowanie**. To one budują lojalność stałych klientek. Nie rezygnuj z nich na rzecz samych metamorfoz."
            },

            // --- SEKCJA 5: Jak wybrać formaty ---
            {
              id: "typy-heading-5",
              type: "heading",
              content: "Jak wybrać swoje formaty"
            },
            {
              id: "typy-text-6",
              type: "text",
              content: "Nie musisz robić wszystkiego. Zacznij od **2-3 formatów**, które są dla Ciebie najłatwiejsze i najbardziej naturalne."
            },
            {
              id: "typy-text-7",
              type: "text",
              content: "**Pytania, które pomogą wybrać:**\n\n• Jakie zabiegi robisz najczęściej? → Rolki efektowe z tych zabiegów\n• O co klientki pytają najczęściej? → Rolki edukacyjne z odpowiedziami\n• Co lubisz w swojej pracy? → Rolki relacyjne pokazujące to"
            },
            {
              id: "typy-warning-1",
              type: "warning",
              content: "NIE próbuj wszystkiego naraz. \"Muszę robić timelapse'y, porady, kulisy, Q&A, POV-y...\" – to przepis na wypalenie. Wybierz 2-3 formaty, opanuj je, potem rozszerzaj."
            },
            {
              id: "typy-text-8",
              type: "text",
              content: "**Proporcja na start (4 rolki tygodniowo):**\n\n• 2x rolka efektowa (przed/po, timelapse)\n• 1x rolka edukacyjna (porada, obalenie mitu)\n• 1x rolka relacyjna (kulisy, dzień z życia)\n\nTo daje różnorodność bez przytłoczenia."
            },

            // --- SEKCJA 6: Quiz końcowy ---
            {
              id: "typy-quiz-2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Która kategoria rolek jest najważniejsza dla salonu beauty?",
                options: [
                  "Tylko efektowe – klientki chcą widzieć wyniki",
                  "Tylko edukacyjne – budują wizerunek eksperta",
                  "Tylko relacyjne – ludzie kupują od ludzi",
                  "Wszystkie 3 w odpowiednich proporcjach"
                ],
                correctIndex: 3,
                explanation: "Najlepsze wyniki daje MIX wszystkich kategorii. Efektowe przyciągają nowe osoby, edukacyjne budują zaufanie, relacyjne tworzą więź. Razem tworzą pełny obraz Twojego salonu."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-typy-1", text: "Znam 3 kategorie rolek: efektowe, edukacyjne, relacyjne" },
            { id: "check-typy-2", text: "Rozumiem, jakie formaty pasują do moich usług" },
            { id: "check-typy-3", text: "Wybrałam 2-3 typy rolek na start" },
            { id: "check-typy-4", text: "Mam plan proporcji (np. 2 efektowe, 1 edukacyjna, 1 relacyjna)" },
            { id: "check-typy-5", text: "Wiem, że różnorodność jest ważna" }
          ],
          keyTakeaways: [
            "Są 3 kategorie rolek: efektowe (portfolio), edukacyjne (ekspert), relacyjne (więź)",
            "Zacznij od 2-3 formatów – nie próbuj wszystkiego naraz",
            "Różnorodność trzyma uwagę – mieszaj kategorie",
            "Rolki relacyjne mają mniejszy zasięg, ale budują lojalność"
          ],
          nextLessonTitle: "Pomysły na krótkie wideo"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 3 - POMYSŁY NA KRÓTKIE WIDEO
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "pomysly-na-krotkie-wideo",
          title: "Pomysły na krótkie wideo",
          description: "Gotowe pomysły i szablony na rolki, które możesz wykorzystać od razu",
          estimatedMinutes: 22,
          intro: "Największy problem twórców? \"Nie wiem CO nagrać.\" W tej lekcji dostaniesz gotową listę 30+ sprawdzonych pomysłów na rolki, które możesz wykorzystać od razu. Plus system, który sprawi, że nigdy nie zabraknie Ci inspiracji.",
          sections: [
            // --- SEKCJA 1: Bank pomysłów ---
            {
              id: "pomysly-heading-1",
              type: "heading",
              content: "Bank pomysłów – Twoja tajna broń"
            },
            {
              id: "pomysly-text-1",
              type: "text",
              content: "Profesjonalni twórcy mają jedno narzędzie, o którym rzadko mówią: **bank pomysłów**. To lista gotowych konceptów na treści, którą uzupełniają na bieżąco.\n\nKiedy siadasz do nagrywania, nie musisz wymyślać tematu od zera – otwierasz bank i wybierasz."
            },
            {
              id: "pomysly-tip-1",
              type: "tip",
              content: "Stwórz notatkę w telefonie o nazwie \"Pomysły na rolki\". Za każdym razem, gdy wpadnie Ci coś do głowy lub zobaczysz ciekawy format – zapisz. W ciągu miesiąca będziesz mieć dziesiątki pomysłów."
            },
            {
              id: "pomysly-text-2",
              type: "text",
              content: "Poniżej znajdziesz **30+ gotowych pomysłów** podzielonych na kategorie. Możesz je wykorzystać dosłownie lub zaadaptować do swoich usług."
            },

            // --- SEKCJA 2: Pomysły efektowe ---
            {
              id: "pomysly-heading-2",
              type: "heading",
              content: "10 pomysłów na rolki efektowe"
            },
            {
              id: "pomysly-text-3",
              type: "text",
              content: "**1. Klasyczne przed/po**\n\"Od zniszczonych do perfekcyjnych\" – każda metamorfoza to content\n\n**2. Metamorfoza tygodnia**\nCo tydzień wyróżniasz jedną najbardziej spektakularną zmianę\n\n**3. Najtrudniejsze wyzwanie**\n\"Przyszła z TAKIM problemem...\" – pokazujesz trudny przypadek i rozwiązanie\n\n**4. Timelapse pełnego zabiegu**\nPrzyspieszony film od startu do końca – hipnotyzujące\n\n**5. Close-up detali**\nEkstremalnie zbliżenie na jakość pracy – tekstura, precyzja"
            },
            {
              id: "pomysly-text-4",
              type: "text",
              content: "**6. Reveal z napięciem**\nZasłaniasz efekt, budujesz napięcie, odsłaniasz na koniec\n\n**7. Porównanie: świeże vs po 2 tygodniach**\nPokazujesz, jak trzyma się efekt – buduje zaufanie\n\n**8. \"Klientka przyniosła zdjęcie z Pinteresta\"**\nInspiiracja vs rzeczywistość – pokazujesz realizację marzeń\n\n**9. Satisfying video**\nUsuwanie lakieru, wyrównywanie płytki, nakładanie bazy – ASMR wizualne\n\n**10. Top 3 tego miesiąca**\nZestawienie najlepszych prac – podsumowanie miesiąca"
            },
            {
              id: "pomysly-example-1",
              type: "example",
              content: "**Rozbudowany scenariusz: \"Metamorfoza tygodnia\"**\n\n**Hook (0-2 sek):** Tekst \"Ta metamorfoza dostała NAJWIĘCEJ polubień w tym tygodniu 👇\"\n\n**Przed (3-5 sek):** Zbliżenie na zniszczone/odrastające paznokcie, lekkie zoom-out\n\n**Transition (5-6 sek):** Efekt z trendy dźwiękiem, zakrycie ręką lub cięcie na beat\n\n**Po (7-12 sek):** Efekt końcowy z 3 kątów – góra, profil, zbliżenie na detale\n\n**CTA (13-15 sek):** Tekst \"Która następna? 💕 Link w bio\"\n\n**Muzyka:** Trendy dźwięk z wyraźnym dropem na transition"
            },
            {
              id: "pomysly-mockup-1",
              type: "mockup",
              content: "Tak może wyglądać rolka \"Metamorfoza tygodnia\":",
              mockupData: {
                platform: "instagram",
                variant: "reel",
                postCaption: "METAMORFOZA TYGODNIA 🏆 Głosowałyście i wygrała TA! Od totalnej katastrofy do nude ombre z french 💅 Jak Wam się podoba? #metamorfoza #paznokcie #nails",
                postLikes: "3.8k",
                postComments: "124",
                description: "Cotygodniowa seria tworzy nawyk u obserwujących i zwiększa zaangażowanie."
              }
            },

            // --- SEKCJA 3: Pomysły edukacyjne ---
            {
              id: "pomysly-heading-3",
              type: "heading",
              content: "10 pomysłów na rolki edukacyjne"
            },
            {
              id: "pomysly-text-5",
              type: "text",
              content: "**1. \"X błędów, które popełniasz\"**\n\"5 błędów przed wizytą, przez które manicure nie trzyma\"\n\n**2. \"X sposobów na...\"**\n\"3 sposoby na dłuższe utrzymanie lakieru w domu\"\n\n**3. Odpowiedź na pytanie**\n\"Odpowiadam na NAJCZĘSTSZE pytanie: czy hybryda niszczy paznokcie?\"\n\n**4. Mit vs Prawda**\n\"MIT: Paznokcie muszą odpoczywać od hybryd. PRAWDA: ...\"\n\n**5. Dlaczego TO, a nie TAMTO**\n\"Dlaczego używam TEJ bazy, a nie popularnej X\""
            },
            {
              id: "pomysly-text-6",
              type: "text",
              content: "**6. \"Co zrobić, gdy...\"**\n\"Co zrobić, gdy złamiesz paznokieć między wizytami\"\n\n**7. Porównanie produktów/technik**\n\"Różnica między french a baby boomer – co dla kogo\"\n\n**8. Tutorial pielęgnacji domowej**\n\"Jak dbać o skórki między wizytami – 2 minuty dziennie\"\n\n**9. Fakty z branży**\n\"3 rzeczy, o których klientki NIE wiedzą, a powinny\"\n\n**10. \"Dlaczego to kosztuje tyle, ile kosztuje\"**\nEdukacja o wartości usługi – buduje szacunek"
            },
            {
              id: "pomysly-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Który tytuł rolki edukacyjnej najprawdopodobniej przyciągnie uwagę?",
                options: [
                  "Trochę o pielęgnacji paznokci",
                  "5 BŁĘDÓW, przez które Twój manicure nie trzyma",
                  "Informacje o hybrydzie",
                  "Porady dla klientek"
                ],
                correctIndex: 1,
                explanation: "Konkretna liczba + problem + negatywna emocja (\"błędy\") = silny hook. Ludzie chcą unikać błędów i są ciekawi, czy je popełniają."
              }
            },

            // --- SEKCJA 4: Pomysły relacyjne ---
            {
              id: "pomysly-heading-4",
              type: "heading",
              content: "10 pomysłów na rolki relacyjne"
            },
            {
              id: "pomysly-text-7",
              type: "text",
              content: "**1. Poranek w salonie**\nOtwieranie, przygotowania, kawa – cozy vibe\n\n**2. Dzień z życia**\nOd rana do wieczora, skondensowane w 30-40 sekund\n\n**3. Pakuję zamówienie/rozpakowuję dostawę**\nLudzie uwielbiają oglądać pakowanie i rozpakowywanie\n\n**4. Organizacja stanowiska**\nPokazujesz swój system, narzędzia, produkty\n\n**5. \"Rzeczy, które słyszę codziennie\"**\nHumorystyczne zestawienie komentarzy klientek"
            },
            {
              id: "pomysly-text-8",
              type: "text",
              content: "**6. Historia mojego salonu**\nJak zaczęłaś, dlaczego, Twoja droga\n\n**7. Moje ulubione narzędzia**\nCo kochasz i dlaczego – pokazuje pasję\n\n**8. Przerwa w pracy**\nLunch, kawa, scrollowanie – relatable content\n\n**9. Sprzątanie po dniu pracy**\nSatisfying video z porządkowaniem\n\n**10. \"Co jem w pracy\"**\nPosiłki w salonie – uniwersalnie angażujące"
            },
            {
              id: "pomysly-comparison-1",
              type: "comparison",
              content: "Kulisy: autentyczne vs przesadzone",
              comparison: {
                good: {
                  title: "Autentyczne kulisy",
                  description: "Prawdziwe momenty z pracy, niedoskonałości (rozlana kawa, bałagan), spontaniczne reakcje, naturalny głos/zachowanie",
                  example: "\"Dziś się spóźniłam i muszę wszystko przygotować w 10 minut 😅\" – relatable, ludzkie"
                },
                bad: {
                  title: "Przesadzone/fałszywe kulisy",
                  description: "Wyraźnie ustawione sceny, \"perfekcyjny\" bałagan, sztuczne reakcje, wszystko zbyt idealne",
                  example: "\"Taki normalny poranek w salonie ✨\" – a widać, że wszystko ustawione do zdjęcia"
                }
              }
            },
            {
              id: "pomysly-tip-2",
              type: "tip",
              content: "Autentyczność > perfekcja. Klientki widzą, gdy coś jest sztuczne. Pokaż prawdziwe kulisy, nawet jeśli nie są idealne – właśnie to buduje zaufanie."
            },

            // --- SEKCJA 5: Formaty viralowe ---
            {
              id: "pomysly-heading-5",
              type: "heading",
              content: "Formaty viralowe w beauty"
            },
            {
              id: "pomysly-text-9",
              type: "text",
              content: "Niektóre formaty mają naturalnie większy potencjał viralowy. Warto je znać i adaptować:"
            },
            {
              id: "pomysly-step-1",
              type: "step",
              stepNumber: 1,
              content: "**POV (Point of View)** – \"POV: Jesteś moją pierwszą klientką dzisiaj\" – kamera z perspektywy klientki"
            },
            {
              id: "pomysly-step-2",
              type: "step",
              stepNumber: 2,
              content: "**GRWM (Get Ready With Me)** – Przygotowujesz się do pracy, pokazujesz rutynę – intymny format"
            },
            {
              id: "pomysly-step-3",
              type: "step",
              stepNumber: 3,
              content: "**ASMR** – Dźwięki pracy: szlifowanie, nakładanie lakieru, satisfying sounds"
            },
            {
              id: "pomysly-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Satisfying** – Uspokajające wizualnie: idealne nakładanie, perfekcyjne linie, symetria"
            },
            {
              id: "pomysly-example-2",
              type: "example",
              content: "**Jak zaadaptować format POV:**\n\n**Oryginalny trend:** \"POV: Jesteś na randce z chłopakiem marzeń\"\n\n**Adaptacja beauty:** \"POV: Jesteś moją pierwszą klientką rano\"\n\n**Scenariusz:**\n• Kamera z perspektywy klientki (telefon na statywie)\n• Ty podchodzisz, uśmiechasz się, mówisz \"Dzień dobry!\"\n• Pokazujesz przygotowane stanowisko\n• Pytasz \"Kawka? Herbatka?\"\n• Tekst na końcu: \"Taki vibe u mnie w salonie 💕\"\n\n**Dlaczego działa:** Klientka może \"poczuć\" wizytę zanim przyjdzie"
            },
            {
              id: "pomysly-warning-1",
              type: "warning",
              content: "Nie kopiuj trendów 1:1 – adaptuj je do branży beauty. Bezmyślne kopiowanie może wyglądać sztucznie. Pytaj się: \"Jak mogę to przerobić, żeby pasowało do MOJEGO salonu?\""
            },

            // --- SEKCJA 6: System organizacji ---
            {
              id: "pomysly-heading-6",
              type: "heading",
              content: "System organizacji pomysłów"
            },
            {
              id: "pomysly-text-10",
              type: "text",
              content: "Mieć pomysły to jedno. Mieć je ZORGANIZOWANE to drugie. Oto prosty system:"
            },
            {
              id: "pomysly-step-5",
              type: "step",
              stepNumber: 1,
              content: "**Folder \"Zapisane\" na Instagramie** – Zapisuj rolki, które Ci się podobają. Twórz kolekcje: \"Inspiracje\", \"Do zaadaptowania\", \"Trendy\"."
            },
            {
              id: "pomysly-step-6",
              type: "step",
              stepNumber: 2,
              content: "**Notatka w telefonie** – Lista pomysłów z krótkim opisem. Dodawaj na bieżąco, przeglądaj przed nagrywaniem."
            },
            {
              id: "pomysly-step-7",
              type: "step",
              stepNumber: 3,
              content: "**Kalendarz tematów** – Planuj z góry: poniedziałek = przed/po, środa = porada, piątek = kulisy."
            },
            {
              id: "pomysly-text-11",
              type: "text",
              content: "**Kiedy zbierać pomysły:**\n\n• Scrollujesz w wolnej chwili → widzisz coś fajnego → zapisz\n• Klientka zadaje pytanie → notatka \"rolka edukacyjna o tym\"\n• Robisz ciekawy zabieg → notatka \"nagrać następnym razem\"\n• Czytasz komentarze pod cudzą rolką → inspiracja do tematu"
            },
            {
              id: "pomysly-tip-3",
              type: "tip",
              content: "Poświęć 15 minut w niedzielę na przejrzenie zapisanych pomysłów i zaplanowanie treści na tydzień. To zamienia chaos w system."
            },

            // --- SEKCJA 7: Quiz końcowy ---
            {
              id: "pomysly-quiz-2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Co jest najlepszą praktyką przy korzystaniu z trendów?",
                options: [
                  "Kopiować 1:1 jak najwierniej",
                  "Adaptować do swojej branży, zachowując format",
                  "Ignorować trendy i robić tylko swoje",
                  "Robić tylko trendy, które są popularne wśród influencerów"
                ],
                correctIndex: 1,
                explanation: "Adaptacja > kopiowanie. Używasz formatu i struktury trendu, ale wkładasz swoją treść z branży beauty. Dzięki temu korzystasz z popularności trendu, ale wyróżniasz się autentycznością."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-pomysly-1", text: "Mam listę min. 10 pomysłów na rolki dla mojego salonu" },
            { id: "check-pomysly-2", text: "Stworzyłam folder 'Zapisane' z inspiracjami na IG" },
            { id: "check-pomysly-3", text: "Mam notatkę w telefonie na nowe pomysły" },
            { id: "check-pomysly-4", text: "Wiem, jak adaptować trendy do branży beauty" },
            { id: "check-pomysly-5", text: "Zaplanowałam min. 4 rolki na najbliższy tydzień" }
          ],
          keyTakeaways: [
            "Bank pomysłów to Twoja tajna broń – zbieraj pomysły na bieżąco",
            "30+ gotowych pomysłów: efektowe, edukacyjne i relacyjne – wybierz i zaadaptuj",
            "Adaptuj trendy do branży beauty zamiast kopiować 1:1",
            "System organizacji (zapisane + notatka + kalendarz) zamienia chaos w plan"
          ],
          nextLessonTitle: "Podstawy montażu"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 4 - PODSTAWY MONTAŻU
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "podstawy-montazu",
          title: "Podstawy montażu",
          description: "Naucz się podstaw edycji wideo, które wystarczą do tworzenia profesjonalnych rolek",
          estimatedMinutes: 25,
          intro: "Dobra wiadomość: nie potrzebujesz profesjonalnego sprzętu ani lat nauki. W tej lekcji opanujesz wszystkie podstawy montażu, które wystarczą do tworzenia angażujących rolek – bezpośrednio w aplikacji Instagram.",
          sections: [
            // --- SEKCJA 1: Narzędzia ---
            {
              id: "montaz-heading-1",
              type: "heading",
              content: "Narzędzia do montażu – co wybrać"
            },
            {
              id: "montaz-text-1",
              type: "text",
              content: "Masz trzy główne opcje montażu rolek. Każda ma swoje plusy i minusy."
            },
            {
              id: "montaz-text-2",
              type: "text",
              content: "**1. Instagram (wbudowany edytor)**\n• Plusy: Wszystko w jednym miejscu, bez eksportu, szybko\n• Minusy: Mniej funkcji, ograniczone możliwości\n• Dla kogo: Początkujące, proste rolki\n\n**2. CapCut (darmowa aplikacja)**\n• Plusy: Dużo funkcji, efekty, szablony, napisy auto\n• Minusy: Wymaga eksportu do IG, krzywa uczenia\n• Dla kogo: Średniozaawansowane, chcące więcej\n\n**3. InShot (darmowa aplikacja)**\n• Plusy: Prosty interfejs, wystarczające funkcje\n• Minusy: Mniej efektów niż CapCut\n• Dla kogo: Pośrednia opcja"
            },
            {
              id: "montaz-tip-1",
              type: "tip",
              content: "Na początek: zacznij od edytora w Instagramie. Opanuj podstawy, publikuj. Dopiero gdy poczujesz ograniczenia – przejdź na CapCut."
            },
            {
              id: "montaz-comparison-1",
              type: "comparison",
              content: "Montaż w IG vs zewnętrzna aplikacja:",
              comparison: {
                good: {
                  title: "Instagram (edytor wbudowany)",
                  description: "Szybko: nagranie → edycja → publikacja w jednym miejscu. Idealne dla prostych rolek przed/po, Stories.",
                  example: "Rolka przed/po z muzyką i tekstem – 5 minut od nagrania do publikacji"
                },
                bad: {
                  title: "CapCut/InShot (zewnętrzne)",
                  description: "Więcej możliwości, ale dłuższy proces: nagranie → eksport → edycja → eksport → import do IG → publikacja.",
                  example: "Zaawansowana rolka z efektami – 20-30 minut pracy"
                }
              }
            },

            // --- SEKCJA 2: 5 podstawowych technik ---
            {
              id: "montaz-heading-2",
              type: "heading",
              content: "5 podstawowych technik montażu"
            },
            {
              id: "montaz-text-3",
              type: "text",
              content: "To jedyne techniki, których potrzebujesz na początek. Opanuj je, a Twoje rolki będą wyglądać profesjonalnie."
            },
            {
              id: "montaz-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Przycinanie (Trim)** – Usuwasz zbędne fragmenty na początku i końcu klipu. Najważniejsza technika – eliminuje \"martwe\" sekundy."
            },
            {
              id: "montaz-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Cięcie (Cut)** – Dzielisz wideo na części i usuwasz niepotrzebne fragmenty w środku. Tworzy dynamikę i usuwa błędy."
            },
            {
              id: "montaz-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Łączenie klipów** – Dodajesz kilka nagrań i układasz je w sekwencję. Podstawa dla rolek \"dzień z życia\" czy metamorfoz."
            },
            {
              id: "montaz-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Zmiana tempa** – Przyspieszenie (timelapse) lub zwolnienie (slow-mo). Timelapse świetny dla procesów, slow-mo dla \"wow\" momentów."
            },
            {
              id: "montaz-step-5",
              type: "step",
              stepNumber: 5,
              content: "**Przejścia (transitions)** – Płynne przejścia między klipami. W IG: zakrycie ręką, zoom, wipe. Dodają profesjonalizmu."
            },
            {
              id: "montaz-example-1",
              type: "example",
              content: "**Przepis na zmontowanie rolki \"Przed/po\":**\n\n1. **Nagraj 2 klipy:** stan przed (5-10 sek) i efekt końcowy (10-15 sek)\n2. **Importuj do edytora IG** lub CapCut\n3. **Przytnij:** Usuń pierwsze 1-2 sek każdego klipu (ustawianie kamery)\n4. **Połącz:** Klip \"przed\" + klip \"po\"\n5. **Dodaj przejście:** Zakrycie ręką lub efekt zoom\n6. **Dodaj muzykę:** Wybierz trendy dźwięk z dropem na przejściu\n7. **Dodaj tekst:** \"Przyszła z tym...\" + \"Wyszła z tym ✨\"\n8. **Eksportuj/publikuj**\n\n**Czas:** 5-10 minut"
            },

            // --- SEKCJA 3: Hook ---
            {
              id: "montaz-heading-3",
              type: "heading",
              content: "Hook – pierwsza sekunda decyduje"
            },
            {
              id: "montaz-text-4",
              type: "text",
              content: "**Hook** to pierwsze 1-3 sekundy rolki. To moment, w którym widz decyduje: scrolluję dalej czy oglądam.\n\n**Statystyki są brutalne:**\n• 65% widzów decyduje o obejrzeniu w PIERWSZEJ sekundzie\n• Jeśli nie złapiesz uwagi w 3 sek – straciłaś widza\n• Algorytm mierzy, ile osób przescrollowało – zły hook = mniejszy zasięg"
            },
            {
              id: "montaz-step-6",
              type: "step",
              stepNumber: 1,
              content: "**Hook pytanie** – \"Wiesz, dlaczego Twój manicure nie trzyma?\" – wciąga, bo widz chce poznać odpowiedź."
            },
            {
              id: "montaz-step-7",
              type: "step",
              stepNumber: 2,
              content: "**Hook szok** – \"NIGDY tego nie rób przed wizytą\" – budzi ciekawość, co jest tak ważne."
            },
            {
              id: "montaz-step-8",
              type: "step",
              stepNumber: 3,
              content: "**Hook efekt końcowy** – Zaczynasz od \"wow\" momentu, potem pokazujesz \"a tak wyglądało przed\"."
            },
            {
              id: "montaz-step-9",
              type: "step",
              stepNumber: 4,
              content: "**Hook tekst na ekranie** – Duży, wyraźny tekst z intrygującą obietnicą: \"Metamorfoza, która zajęła 3h ⬇️\"."
            },
            {
              id: "montaz-example-2",
              type: "example",
              content: "**5 przykładów skutecznych hooków dla beauty:**\n\n1. \"Przyszła z TAKIM problemem...\" (ciekawość: jaki problem?)\n2. \"3 błędy, przez które manicure nie trzyma\" (wartość + negatywna emocja)\n3. \"Efekt końcowy ⬇️ a zaczęłyśmy od TEGO\" (odwrócona chronologia)\n4. \"Odpowiadam na pytanie, które dostaję codziennie\" (obietnica odpowiedzi)\n5. \"Timelapse 2h pracy w 15 sekund\" (konkretna obietnica czasu)"
            },
            {
              id: "montaz-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Który hook najprawdopodobniej zatrzyma scrollującego widza?",
                options: [
                  "Cześć, dziś pokażę wam manicure",
                  "NIGDY tego nie rób przed wizytą u stylistki",
                  "Oto moja dzisiejsza praca",
                  "Manicure hybrydowy krok po kroku"
                ],
                correctIndex: 1,
                explanation: "\"NIGDY tego nie rób\" budzi natychmiastową ciekawość i lekki niepokój – widz chce wiedzieć, co robi źle. Pozostałe opcje są przewidywalne i nie wywołują emocji."
              }
            },

            // --- SEKCJA 4: Dodawanie tekstu ---
            {
              id: "montaz-heading-4",
              type: "heading",
              content: "Dodawanie tekstu"
            },
            {
              id: "montaz-text-5",
              type: "text",
              content: "Tekst na rolce pełni 3 funkcje:\n\n• **Hook** – przyciąga uwagę w pierwszej sekundzie\n• **Kontekst** – wyjaśnia, co oglądamy\n• **CTA** – zachęca do działania (\"Zapisz!\", \"Obserwuj!\")"
            },
            {
              id: "montaz-text-6",
              type: "text",
              content: "**Zasady czytelnego tekstu:**\n\n• **Rozmiar:** Wystarczająco duży, żeby przeczytać na małym ekranie\n• **Kontrast:** Jasny tekst na ciemnym tle lub odwrotnie\n• **Pozycja:** Środek kadru lub górna część (unikaj dołu – tam są ikony)\n• **Ilość:** Max 2 linie tekstu na raz\n• **Font:** Jeden prosty font, nie mieszaj stylów"
            },
            {
              id: "montaz-comparison-2",
              type: "comparison",
              content: "Tekst czytelny vs nieczytelny:",
              comparison: {
                good: {
                  title: "Czytelny tekst",
                  description: "Duży font, kontrast (biały na ciemnym lub z cieniem), 1-2 linie, pozycja centralna lub górna",
                  example: "Biały pogrubiony tekst z cieniem na tle ciemniejszego nagrania"
                },
                bad: {
                  title: "Nieczytelny tekst",
                  description: "Mały font, brak kontrastu, zbyt dużo tekstu, pozycja na dole (zakryta przez UI)",
                  example: "Żółty tekst na jasnym tle, 4 linie, na dole ekranu – niewidoczny"
                }
              }
            },
            {
              id: "montaz-warning-1",
              type: "warning",
              content: "Testuj tekst na MAŁYM ekranie! Co wygląda dobrze na laptopie, może być nieczytelne na telefonie. A rolki ogląda się głównie na telefonie."
            },

            // --- SEKCJA 5: Muzyka ---
            {
              id: "montaz-heading-5",
              type: "heading",
              content: "Muzyka i dźwięki"
            },
            {
              id: "montaz-text-7",
              type: "text",
              content: "Muzyka to **50% sukcesu rolki**. Trendy dźwięki = większy zasięg. Algorytm promuje treści z popularnymi utworami.\n\nAle nie tylko popularność się liczy – muzyka musi **pasować do treści**."
            },
            {
              id: "montaz-text-8",
              type: "text",
              content: "**Jak wybierać muzykę:**\n\n• **Trendy dźwięki:** Używaj dźwięków ze strzałką ↑ w bibliotece IG\n• **Dopasowanie tempa:** Szybka muzyka = szybkie cięcia, wolna = spokojne ujęcia\n• **Beat drop:** Synchronizuj przejście \"przed/po\" z dropem w muzyce\n• **Nastrój:** Spokojna dla relaksu, energetyczna dla metamorfoz"
            },
            {
              id: "montaz-tip-2",
              type: "tip",
              content: "Gdzie szukać trendów? Wejdź w zakładkę Reels na IG, scrolluj. Jeśli słyszysz ten sam dźwięk 3+ razy w 5 minut – to trend. Kliknij na dźwięk i sprawdź liczbę użyć."
            },
            {
              id: "montaz-text-9",
              type: "text",
              content: "**ASMR/dźwięki oryginalne:**\n\nNie zawsze potrzebujesz muzyki! Niektóre rolki świetnie działają z **oryginalnym dźwiękiem** pracy:\n\n• Dźwięk szlifowania paznokci\n• Odgłosy nakładania produktu\n• Klik zamykanych pojemników\n• \"Satisfying\" dźwięki pracy\n\nTo może być Twój unikalny styl!"
            },

            // --- SEKCJA 6: Tempo i rytm ---
            {
              id: "montaz-heading-6",
              type: "heading",
              content: "Tempo i rytm rolki"
            },
            {
              id: "montaz-text-10",
              type: "text",
              content: "**Dynamika cięć** decyduje, czy rolka trzyma uwagę. Zasada jest prosta:"
            },
            {
              id: "montaz-text-11",
              type: "text",
              content: "**Reguła 1-3 sekund:**\n\n• Każde ujęcie powinno trwać **1-3 sekundy**\n• Dłuższe ujęcia = widz się nudzi i scrolluje\n• Wyjątek: celowe slow-mo dla efektu \"wow\"\n\n**Synchronizacja z muzyką:**\n\n• Cięcia na beaty = profesjonalny wygląd\n• Przejście \"przed/po\" na drop = dramatyczny efekt\n• Bez synchronizacji = chaotyczne wrażenie"
            },
            {
              id: "montaz-example-3",
              type: "example",
              content: "**Analiza dobrze zmontowanej rolki metamorfozy:**\n\n• **0-1 sek:** Hook tekstowy na ekranie + pierwszy beat\n• **1-3 sek:** Stan \"przed\", szybkie zoom-in\n• **3-4 sek:** Transition na drop muzyki\n• **4-7 sek:** Efekt końcowy, 3 różne ujęcia po 1 sek\n• **7-10 sek:** Close-up na detale, tekst CTA\n\n**Łącznie:** 10 sekund, 6-8 cięć, synchronizacja z muzyką"
            },
            {
              id: "montaz-mockup-1",
              type: "mockup",
              content: "Tak wygląda interfejs montażu w aplikacji Instagram:",
              mockupData: {
                platform: "instagram",
                variant: "post-creation",
                description: "W edytorze IG widzisz timeline z klipami, możesz przycinać, dodawać tekst, muzykę i efekty. Wszystko w jednym miejscu."
              }
            },

            // --- SEKCJA 7: Quiz końcowy ---
            {
              id: "montaz-quiz-2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Co jest najważniejsze w pierwszych 3 sekundach rolki?",
                options: [
                  "Pokazać logo salonu",
                  "Przywitać się z widzem",
                  "Złapać uwagę silnym hookiem",
                  "Przedstawić temat szczegółowo"
                ],
                correctIndex: 2,
                explanation: "Pierwsze 3 sekundy decydują o tym, czy ktoś obejrzy resztę. Hook – pytanie, szok, efekt końcowy lub intrygujący tekst – zatrzymuje scrollującego widza."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-montaz-1", text: "Wiem, jakiego narzędzia użyję do montażu (IG/CapCut)" },
            { id: "check-montaz-2", text: "Znam 5 podstawowych technik: przycinanie, cięcie, łączenie, tempo, przejścia" },
            { id: "check-montaz-3", text: "Rozumiem znaczenie hooka w pierwszych 3 sekundach" },
            { id: "check-montaz-4", text: "Wiem, jak dodawać czytelny tekst i muzykę" },
            { id: "check-montaz-5", text: "Zmontowałam swoją pierwszą rolkę z muzyką i tekstem" }
          ],
          keyTakeaways: [
            "Na początek wystarczy edytor w Instagramie – CapCut dla zaawansowanych",
            "5 technik to wszystko, czego potrzebujesz: przycinanie, cięcie, łączenie, tempo, przejścia",
            "Hook w pierwszych 1-3 sekundach decyduje o sukcesie rolki",
            "Dynamiczne cięcia co 1-3 sekundy + synchronizacja z muzyką = profesjonalny wygląd"
          ],
          nextLessonTitle: "Korzystanie z trendów"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 5 - KORZYSTANIE Z TRENDÓW
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "korzystanie-z-trendow",
          title: "Korzystanie z trendów",
          description: "Jak wykorzystywać trendy i popularne dźwięki do zwiększenia zasięgów",
          estimatedMinutes: 20,
          intro: "Trendy to skrót do większych zasięgów – ale trzeba wiedzieć, jak ich używać. W tej lekcji nauczysz się znajdować trendy we właściwym momencie i adaptować je do branży beauty, nie tracąc swojej autentyczności.",
          sections: [
            // --- SEKCJA 1: Czym są trendy ---
            {
              id: "trendy-heading-1",
              type: "heading",
              content: "Czym są trendy i dlaczego działają"
            },
            {
              id: "trendy-text-1",
              type: "text",
              content: "**Trend** to format, dźwięk lub koncepcja, która w danym momencie jest popularna i często powielana. Algorytm Instagrama i Facebooka promuje treści z trendowymi elementami, bo wie, że użytkownicy chcą je oglądać.\n\nKiedy używasz trendowego dźwięku, Twoja rolka \"podczepia się\" pod jego popularność."
            },
            {
              id: "trendy-text-2",
              type: "text",
              content: "**Dlaczego algorytm promuje trendy:**\n\n• Trendy trzymają użytkowników na platformie dłużej\n• Rozpoznawalny dźwięk = większe zaangażowanie\n• Użytkownicy szukają konkretnych trendów\n• Więcej osób = więcej danych = lepsza personalizacja"
            },
            {
              id: "trendy-comparison-1",
              type: "comparison",
              content: "Porównanie zasięgów:",
              comparison: {
                good: {
                  title: "Rolka z trendy dźwiękiem",
                  description: "Algorytm aktywnie promuje, pojawia się w eksploracji, dźwięk jest rozpoznawalny, widzowie wiedzą, czego się spodziewać",
                  example: "Ta sama metamorfoza z trendy audio: 15 000 wyświetleń, 45 zapisań"
                },
                bad: {
                  title: "Rolka z losowym dźwiękiem",
                  description: "Mniejsza promocja przez algorytm, dźwięk nierozpoznawalny, mniejsze szanse na viralowość",
                  example: "Ta sama metamorfoza z nieznaną muzyką: 2 000 wyświetleń, 8 zapisań"
                }
              }
            },
            {
              id: "trendy-tip-1",
              type: "tip",
              content: "Trend to nie gwarancja sukcesu, ale znacząco zwiększa szanse. Dobra treść + trend = najlepsza kombinacja. Sama treść bez trendu = trudniej przebić się przez algorytm."
            },

            // --- SEKCJA 2: Gdzie szukać trendów ---
            {
              id: "trendy-heading-2",
              type: "heading",
              content: "Gdzie szukać trendów"
            },
            {
              id: "trendy-text-3",
              type: "text",
              content: "Trendy nie spadają z nieba – trzeba wiedzieć, gdzie ich szukać. Oto sprawdzone źródła:"
            },
            {
              id: "trendy-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Zakładka Reels na Instagramie** – Scrolluj i zwracaj uwagę na dźwięki, które się powtarzają. 3+ razy = prawdopodobnie trend."
            },
            {
              id: "trendy-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Strzałka przy dźwięku** – W bibliotece muzycznej IG, dźwięki ze strzałką ↑ to rosnące trendy. Kliknij i zobacz ile rolek już powstało."
            },
            {
              id: "trendy-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Konta branżowe** – Obserwuj inne salony beauty i influencerów z branży. Jak używają dźwięku – pewnie jest trendy."
            },
            {
              id: "trendy-step-4",
              type: "step",
              stepNumber: 4,
              content: "**TikTok → Instagram** – Trendy często zaczynają się na TikToku i przechodzą na IG z 2-4 tygodniowym opóźnieniem. Scrolluj TT, żeby być wcześniej."
            },
            {
              id: "trendy-step-5",
              type: "step",
              stepNumber: 5,
              content: "**Profile o trendach** – Są konta dedykowane trendoemu, np. @reelsandchill, @trendtok. Pokazują, co jest aktualne."
            },
            {
              id: "trendy-tip-2",
              type: "tip",
              content: "Stwórz folder \"Zapisane\" > \"Trendy\" na Instagramie. Kiedy widzisz ciekawy trend – od razu zapisuj. W wolnej chwili przeglądasz i wybierasz, co zaadaptować."
            },

            // --- SEKCJA 3: Timing ---
            {
              id: "trendy-heading-3",
              type: "heading",
              content: "Timing – kiedy złapać trend"
            },
            {
              id: "trendy-text-4",
              type: "text",
              content: "Nie wszystkie trendy są sobie równe. **Timing jest kluczowy** – zbyt wcześnie i zbyt późno to dwie pułapki."
            },
            {
              id: "trendy-text-5",
              type: "text",
              content: "**Fazy życia trendu:**\n\n• **Faza 1 (za wcześnie):** Kilka tysięcy użyć, mało osób rozpoznaje dźwięk\n• **Faza 2 (idealna):** 50k-500k użyć, rośnie, ludzie rozpoznają, ale nie jest jeszcze \"oklepany\"\n• **Faza 3 (szczyt):** 1M+ użyć, wszyscy znają, duża konkurencja\n• **Faza 4 (za późno):** Trend opada, ludzie już się znudzili, używanie wygląda na desperackie"
            },
            {
              id: "trendy-example-1",
              type: "example",
              content: "**Case study: Trend \"przed/po\" z dramatycznym dropem**\n\n**Tydzień 1:** Kilka rolek, mało znany → ZA WCZEŚNIE (ryzyko, że nie chwyci)\n\n**Tydzień 2-3:** 100k użyć, rośnie popularność → IDEALNY MOMENT (dużo szans na zasięg)\n\n**Tydzień 4-5:** 2M użyć, wszyscy robią → JESZCZE OK (ale większa konkurencja)\n\n**Tydzień 6+:** Trend opada, nowe dźwięki go zastępują → ZA PÓŹNO (wygląda nieświeżo)"
            },
            {
              id: "trendy-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Kiedy jest najlepszy moment na użycie trendu?",
                options: [
                  "Jak tylko pojawi się pierwsza rolka z tym dźwiękiem",
                  "Kiedy ma 50k-500k użyć i wciąż rośnie",
                  "Kiedy wszyscy go używają (1M+ użyć)",
                  "Po miesiącu, gdy konkurencja spadnie"
                ],
                correctIndex: 1,
                explanation: "Faza wzrostu (50k-500k) to sweet spot. Trend jest już rozpoznawalny, ale nie przesycony. Mniejsza konkurencja niż na szczycie, większe szanse na zasięg."
              }
            },

            // --- SEKCJA 4: Jak adaptować trendy ---
            {
              id: "trendy-heading-4",
              type: "heading",
              content: "Jak adaptować trend do beauty"
            },
            {
              id: "trendy-text-6",
              type: "text",
              content: "Nie chodzi o kopiowanie 1:1 – chodzi o **adaptację formatu** do Twojej branży. To różnica między byciem jedną z miliona a wyróżnieniem się."
            },
            {
              id: "trendy-step-6",
              type: "step",
              stepNumber: 1,
              content: "**Zrozum format** – Obejrzyj 5-10 rolek z tym trendem. Co jest wspólne? Jaka struktura? Jaki timing?"
            },
            {
              id: "trendy-step-7",
              type: "step",
              stepNumber: 2,
              content: "**Znajdź połączenie** – Jak ten format może pasować do Twojej pracy? Metamorfoza? Porównanie? Reveal?"
            },
            {
              id: "trendy-step-8",
              type: "step",
              stepNumber: 3,
              content: "**Dodaj swój twist** – Co sprawi, że TWOJA wersja będzie inna? Lepsze ujęcia? Zabawny tekst? Nieoczywiste użycie?"
            },
            {
              id: "trendy-step-9",
              type: "step",
              stepNumber: 4,
              content: "**Zachowaj autentyczność** – Nie rób trendu \"na siłę\". Jeśli nie pasuje do Twojego stylu – pomiń i poczekaj na następny."
            },
            {
              id: "trendy-example-2",
              type: "example",
              content: "**3 popularne trendy zaadaptowane do salonu beauty:**\n\n**1. Trend \"Tell me without telling me\"**\nOryginalnie: Osobiste sekrety\nAdaptacja: \"Tell me you're a nail technician without telling me\" → pokazujesz pomalowane krótko paznokcie, stos lakierów, alergię na tipy\n\n**2. Trend \"Day in my life\"**\nOryginalnie: Lifestyle influencerów\nAdaptacja: \"Day in the life of a beauty salon\" → poranna kawa, przygotowanie, klientki, sprzątanie, zamknięcie\n\n**3. Trend \"Get ready with me\"**\nOryginalnie: Makijaż/ubiór\nAdaptacja: \"Get my salon ready with me\" → otwieranie, dezynfekcja, układanie produktów, pierwsza klientka"
            },
            {
              id: "trendy-comparison-2",
              type: "comparison",
              content: "Adaptacja dobra vs zła:",
              comparison: {
                good: {
                  title: "Dobra adaptacja",
                  description: "Zachowujesz format/strukturę trendu, ale wkładasz swoją treść. Widz rozpoznaje trend, ale widzi coś świeżego.",
                  example: "Trend 'What I ordered vs what I got' → pokazujesz zdjęcie z Pinteresta vs Twoja realizacja"
                },
                bad: {
                  title: "Zła adaptacja (na siłę)",
                  description: "Trend nie pasuje do branży, ale próbujesz go użyć. Wygląda sztucznie i niezrozumiale.",
                  example: "Trend taneczny z choreografią → próba tańczenia przy stanowisku → cringe"
                }
              }
            },

            // --- SEKCJA 5: Trendy do unikania ---
            {
              id: "trendy-heading-5",
              type: "heading",
              content: "Trendy, których unikać"
            },
            {
              id: "trendy-text-7",
              type: "text",
              content: "Nie każdy trend jest dla Ciebie. Niektóre mogą zaszkodzić Twojemu wizerunkowi lub po prostu nie pasują do branży beauty."
            },
            {
              id: "trendy-text-8",
              type: "text",
              content: "**Kategorie trendów do pominięcia:**\n\n• **Kontrowersyjne** – Polityka, religia, drażliwe tematy. Nie warto ryzykować.\n• **Nieodpowiednie** – Vulgarne żarty, dorosły humor. Nie pasują do profesjonalnego wizerunku.\n• **Niezgodne z marką** – Jeśli prowadzisz elegancki salon, szalone tańce mogą być niespójne.\n• **Wymagające zbyt dużo** – Skomplikowane choreografie, efekty specjalne. Nie warto się męczyć.\n• **Martwe** – Trendy sprzed miesięcy, które już \"wygasły\"."
            },
            {
              id: "trendy-warning-1",
              type: "warning",
              content: "Lepiej pominąć trend niż zrobić go źle. Jedna cringe'owa rolka może więcej zaszkodzić niż pomóc. Jeśli czujesz, że \"nie pasuje\" – pomiń. Będą kolejne trendy."
            },

            // --- SEKCJA 6: System polowania na trendy ---
            {
              id: "trendy-heading-6",
              type: "heading",
              content: "Twój system polowania na trendy"
            },
            {
              id: "trendy-text-9",
              type: "text",
              content: "Nie musisz spędzać godzin na szukaniu trendów. Wystarczy **15-20 minut tygodniowo** z dobrym systemem."
            },
            {
              id: "trendy-text-10",
              type: "text",
              content: "**Cotygodniowa rutyna (niedziela, 15-20 min):**\n\n1. **Scrolluj Reels** przez 10 minut – zapisuj powtarzające się dźwięki\n2. **Sprawdź zapisane** – czy coś można zaadaptować w tym tygodniu?\n3. **Wybierz 1-2 trendy** na najbliższy tydzień\n4. **Zaplanuj** – kiedy nagrasz, jaki koncept\n5. **Gotowe** – w tygodniu tylko realizacja, bez myślenia"
            },
            {
              id: "trendy-tip-3",
              type: "tip",
              content: "Nie próbuj łapać WSZYSTKICH trendów. Wybieraj 1-2 tygodniowo, które naprawdę pasują. Jakość > ilość. Konsekwencja > viralowość."
            },
            {
              id: "trendy-text-11",
              type: "text",
              content: "**Kiedy NIE gonić za trendami:**\n\n• Gdy masz już zaplanowany content na tydzień\n• Gdy trend wymaga dużo pracy, a masz mało czasu\n• Gdy trend kończy się za 2-3 dni – nie zdążysz\n• Gdy czujesz presję \"muszę\" zamiast \"chcę\"\n\nMarketing organiczny to maraton, nie sprint. Jeden pominięty trend nic nie zmieni."
            },

            // --- SEKCJA 7: Quiz końcowy ---
            {
              id: "trendy-quiz-2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Jaki jest najlepszy sposób na korzystanie z trendów?",
                options: [
                  "Robić WSZYSTKIE trendy, które widzisz",
                  "Kopiować dokładnie to, co robią inni",
                  "Wybierać 1-2 tygodniowo i adaptować do swojej branży",
                  "Ignorować trendy i robić tylko oryginalne treści"
                ],
                correctIndex: 2,
                explanation: "Selektywne podejście działa najlepiej. Wybierasz trendy, które pasują do Twojej branży i stylu, adaptujesz je (nie kopiujesz), i zachowujesz spójność. To buduje autentyczny wizerunek, nie wizerunek 'kogoś, kto desperacko goni za trendami'."
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "check-trendy-1", text: "Wiem, gdzie szukać trendów (Reels, strzałka, konta branżowe)" },
            { id: "check-trendy-2", text: "Rozumiem timing – wiem, kiedy trend jest w 'sweet spot'" },
            { id: "check-trendy-3", text: "Umiem adaptować trendy do branży beauty" },
            { id: "check-trendy-4", text: "Mam folder 'Zapisane' na trendy" },
            { id: "check-trendy-5", text: "Zaplanowałam cotygodniową rutynę szukania trendów (15-20 min)" }
          ],
          keyTakeaways: [
            "Trendy to skrót do większych zasięgów – algorytm je promuje",
            "Idealny timing: 50k-500k użyć, rosnąca popularność",
            "Adaptuj, nie kopiuj – zachowaj format, wstaw swoją treść",
            "15-20 minut tygodniowo wystarczy – wybieraj 1-2 trendy, nie wszystkie"
          ],
          nextLessonTitle: null
        }
      ]
    }
  ]
};
