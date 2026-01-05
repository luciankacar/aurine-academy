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
        {
          id: "rola-wideo-w-salonie",
          title: "Rola wideo w salonie beauty",
          description: "Dlaczego wideo jest kluczowe dla rozwoju Twojego salonu w social mediach",
          estimatedMinutes: 12,
          objectives: [
            "Zrozumienie znaczenia wideo w marketingu beauty",
            "Poznanie statystyk i trendów wideo",
            "Przełamanie strachu przed kamerą"
          ],
          sections: [
            {
              id: "rola-wideo-1",
              type: "text",
              content: "Wideo to obecnie najskuteczniejszy format w social mediach. Algorytmy Facebooka i Instagrama promują treści wideo znacznie bardziej niż zdjęcia. Dla salonu beauty to ogromna szansa na dotarcie do nowych klientów."
            },
            {
              id: "rola-wideo-heading-1",
              type: "heading",
              content: "Dlaczego wideo działa lepiej?"
            },
            {
              id: "rola-wideo-2",
              type: "text",
              content: "**1. Większy zasięg**\nAlgorytmy promują wideo – Twoje treści zobaczą osoby, które Cię nie obserwują\n\n**2. Lepsze zaangażowanie**\nWideo trzyma uwagę dłużej niż zdjęcia\n\n**3. Budowanie zaufania**\nKlienci widzą Cię 'w akcji' – łatwiej im Ci zaufać\n\n**4. Pokazanie umiejętności**\nWideo najlepiej prezentuje Twój warsztat i technikę\n\n**5. Osobisty kontakt**\nGłos i twarz budują silniejszą relację"
            },
            {
              id: "rola-wideo-3",
              type: "comparison",
              content: "Wideo vs zdjęcia w liczbach",
              comparison: {
                good: {
                  title: "Wideo/Rolki:",
                  description: "Do 3x większy zasięg organiczny, 2x więcej komentarzy i udostępnień, algorytm promuje przez 48-72h, możliwość viralowego dotarcia do tysięcy osób",
                  example: "Rolka z metamorfozą – 50 000 wyświetleń"
                },
                bad: {
                  title: "Statyczne zdjęcia:",
                  description: "Ograniczony zasięg do obserwujących, mniej interakcji i zaangażowania, szybko znika z feedu (24h), trudniej dotrzeć do nowych odbiorców",
                  example: "Zdjęcie tej samej metamorfozy – 500 wyświetleń"
                }
              }
            },
            {
              id: "rola-wideo-mockup-1",
              type: "mockup",
              content: "Tak wygląda rolka w interfejsie Instagram:",
              mockupData: {
                platform: "instagram",
                variant: "reel",
                description: "Rolki mają pionowy format 9:16 i wyświetlają się na pełnym ekranie"
              }
            },
            {
              id: "rola-wideo-heading-2",
              type: "heading",
              content: "Przełamanie strachu przed kamerą"
            },
            {
              id: "rola-wideo-4",
              type: "text",
              content: "**Nie musisz pokazywać twarzy!**\nWiele skutecznych rolek beauty pokazuje tylko ręce podczas pracy.\n\n**Zacznij od prostych formatów:**\n• Timelapse zabiegu\n• Przed i po bez mówienia\n• Pokazywanie produktów\n• Odpowiedzi na pytania (możesz użyć tekstu)\n\n**Pamiętaj:**\nNikt nie oczekuje perfekcji. Autentyczność wygrywa z idealnością."
            },
            {
              id: "rola-wideo-5",
              type: "tip",
              content: "Zacznij od nagrywania siebie 'do szuflady' – nagrywaj, ale nie publikuj. To pomoże Ci oswoić się z kamerą bez presji. Po tygodniu obejrzyj nagrania – zobaczysz, że nie jest tak źle!"
            }
          ],
          tasks: [
            {
              id: "task-rola-wideo-1",
              title: "Analiza konkurencji",
              description: "Znajdź 5 salonów beauty, które robią dobre rolki i zapisz, co Ci się w nich podoba"
            },
            {
              id: "task-rola-wideo-2",
              title: "Pierwsze nagranie",
              description: "Nagraj 15-sekundowe wideo swojej pracy – tylko do szuflady, nie musisz publikować"
            }
          ],
          checklist: [
            { id: "check-rola-1", text: "Rozumiem, dlaczego wideo jest ważne" },
            { id: "check-rola-2", text: "Wiem, że nie muszę pokazywać twarzy" },
            { id: "check-rola-3", text: "Nagrałam swoje pierwsze próbne wideo" }
          ],
          keyTakeaways: [
            "Wideo ma 3x większy zasięg niż zdjęcia",
            "Nie musisz pokazywać twarzy – możesz nagrywać tylko ręce",
            "Autentyczność jest ważniejsza niż perfekcja"
          ]
        },
        {
          id: "typy-rolek",
          title: "Typy rolek",
          description: "Poznaj różne formaty rolek i wybierz te, które pasują do Twojego salonu",
          estimatedMinutes: 15,
          objectives: [
            "Poznanie różnych typów rolek dla beauty",
            "Dopasowanie formatów do swoich umiejętności",
            "Planowanie różnorodnych treści"
          ],
          sections: [
            {
              id: "typy-1",
              type: "text",
              content: "Nie wszystkie rolki muszą wyglądać tak samo. Istnieje wiele formatów, które możesz wykorzystać – wybierz te, które najlepiej pasują do Twojego stylu i usług."
            },
            {
              id: "typy-heading-1",
              type: "heading",
              content: "Rolki pokazujące efekty"
            },
            {
              id: "typy-2",
              type: "text",
              content: "**Przed i po (transformacje)**\nNajpopularniejszy format w branży beauty. Pokazuje efekt Twojej pracy.\n\n**Timelapse zabiegu**\nPrzyspieszony film z całego zabiegu – hipnotyzujący do oglądania.\n\n**Reveal (odsłonięcie)**\nBudowanie napięcia, a na końcu 'wow' moment z efektem.\n\n**Close-up detali**\nZbliżenia na detale – idealne dla manicure, makijażu, brwi."
            },
            {
              id: "typy-heading-2",
              type: "heading",
              content: "Rolki edukacyjne"
            },
            {
              id: "typy-3",
              type: "text",
              content: "**Porady i wskazówki**\n'3 sposoby na dłuższe utrzymanie lakieru', '5 błędów w pielęgnacji brwi'\n\n**Odpowiedzi na pytania**\nOdpowiadasz na najczęstsze pytania klientek.\n\n**Obalanie mitów**\n'Mit: paznokcie muszą odpoczywać od hybryd – Prawda: to nieprawda, bo...'\n\n**Tutorial krok po kroku**\nPokazujesz jak zrobić coś samodzielnie (np. pielęgnacja w domu)."
            },
            {
              id: "typy-heading-3",
              type: "heading",
              content: "Rolki budujące relację"
            },
            {
              id: "typy-4",
              type: "text",
              content: "**Behind the scenes**\nKulisy pracy, przygotowanie stanowiska, dzień w salonie.\n\n**Poznaj mnie/zespół**\nPrzedstawienie siebie, historia salonu, wartości.\n\n**Dzień z życia**\n'Dzień ze mną w salonie' – od porannej kawy do ostatniej klientki.\n\n**Pakowanie zamówień / Przygotowanie**\nPokazanie procesu – ludzie uwielbiają oglądać 'kulisy'."
            },
            {
              id: "typy-5",
              type: "tip",
              content: "Zacznij od 2-3 typów rolek, które są dla Ciebie najłatwiejsze. Gdy je opanujesz, dodawaj kolejne formaty. Nie próbuj robić wszystkiego na raz!"
            }
          ],
          tasks: [
            {
              id: "task-typy-1",
              title: "Wybór formatów",
              description: "Wybierz 3 typy rolek, które chcesz wypróbować w pierwszej kolejności"
            },
            {
              id: "task-typy-2",
              title: "Plan treści",
              description: "Zaplanuj 4 rolki na najbliższy tydzień – po jednej z każdej kategorii"
            }
          ],
          checklist: [
            { id: "check-typy-1", text: "Znam różne typy rolek dla beauty" },
            { id: "check-typy-2", text: "Wybrałam formaty do wypróbowania" },
            { id: "check-typy-3", text: "Mam zaplanowane pierwsze rolki" }
          ],
          keyTakeaways: [
            "Różnorodność formatów utrzymuje zainteresowanie odbiorców",
            "Zacznij od 2-3 typów, które są dla Ciebie najłatwiejsze",
            "Mieszaj rolki efektowe, edukacyjne i budujące relację"
          ]
        },
        {
          id: "pomysly-na-krotkie-wideo",
          title: "Pomysły na krótkie wideo",
          description: "Gotowe pomysły i szablony na rolki, które możesz wykorzystać od razu",
          estimatedMinutes: 18,
          objectives: [
            "Zdobycie konkretnych pomysłów na rolki",
            "Nauczenie się adaptować trendy do swojej branży",
            "Stworzenie banku pomysłów na przyszłość"
          ],
          sections: [
            {
              id: "pomysly-1",
              type: "text",
              content: "Największym wyzwaniem często nie jest nagrywanie, ale wymyślenie CO nagrać. Oto gotowe pomysły, które możesz wykorzystać lub zaadaptować."
            },
            {
              id: "pomysly-heading-1",
              type: "heading",
              content: "Pomysły na rolki – efekty pracy"
            },
            {
              id: "pomysly-2",
              type: "text",
              content: "• Metamorfoza klientki (przed → po)\n• Timelapse całego zabiegu\n• 'Najbardziej zniszczone paznokcie jakie widziałam'\n• Porównanie: 2 tygodnie po vs świeży manicure\n• 'Ta klientka przyszła z Pinteresta z tym zdjęciem'\n• 'Ulubiona stylizacja tego tygodnia'\n• 'Najtrudniejszy zabieg jaki robiłam'"
            },
            {
              id: "pomysly-heading-2",
              type: "heading",
              content: "Pomysły na rolki – edukacja"
            },
            {
              id: "pomysly-3",
              type: "text",
              content: "• 'Jak przedłużyć trwałość manicure – 5 porad'\n• 'Czego NIE robić przed wizytą w salonie'\n• 'Różnica między X a Y (produkty/zabiegi)'\n• 'Jak dbać o brwi między wizytami'\n• 'Odpowiadam na Wasze pytania'\n• 'Mit vs prawda o [temat]'\n• 'Dlaczego ten zabieg kosztuje tyle, ile kosztuje'"
            },
            {
              id: "pomysly-heading-3",
              type: "heading",
              content: "Pomysły na rolki – kulisy i relacja"
            },
            {
              id: "pomysly-4",
              type: "text",
              content: "• 'Mój poranek przed otwarciem salonu'\n• 'Co jem w pracy' (relatable content)\n• 'Organizacja mojego stanowiska'\n• 'Rozpakowuję nowe produkty'\n• 'Moje ulubione narzędzia i dlaczego'\n• 'Historia jak zaczęłam pracę w beauty'\n• 'Rzeczy, które słyszę od klientek codziennie'"
            },
            {
              id: "pomysly-5",
              type: "example",
              content: "**Format 'POV' (Point of View):**\n\n'POV: Jesteś moją pierwszą klientką dzisiaj' – pokazujesz przygotowanie stanowiska, powitanie, kawę\n\n'POV: Przyszłaś do mnie z Pinteresta ze zdjęciem marzeń' – od konsultacji do efektu końcowego"
            },
            {
              id: "pomysly-6",
              type: "tip",
              content: "Stwórz notatkę w telefonie z pomysłami na rolki. Za każdym razem, gdy wpadnie Ci coś do głowy lub zobaczysz ciekawy format – zapisz. Nigdy nie zabraknie Ci inspiracji!"
            }
          ],
          tasks: [
            {
              id: "task-pomysly-1",
              title: "Bank pomysłów",
              description: "Stwórz listę 20 pomysłów na rolki dla swojego salonu"
            },
            {
              id: "task-pomysly-2",
              title: "Pierwsza rolka",
              description: "Wybierz jeden pomysł i nagraj swoją pierwszą rolkę"
            }
          ],
          checklist: [
            { id: "check-pomysly-1", text: "Mam listę pomysłów na rolki" },
            { id: "check-pomysly-2", text: "Wybrałam pomysł na pierwszą rolkę" },
            { id: "check-pomysly-3", text: "Nagrałam swoją pierwszą rolkę" }
          ],
          keyTakeaways: [
            "Prowadź bank pomysłów – zapisuj wszystko co Ci wpadnie do głowy",
            "Adaptuj popularne formaty do branży beauty",
            "Zacznij od najprostszych pomysłów"
          ]
        },
        {
          id: "podstawy-montazu",
          title: "Podstawy montażu",
          description: "Naucz się podstaw edycji wideo, które wystarczą do tworzenia profesjonalnych rolek",
          estimatedMinutes: 20,
          objectives: [
            "Poznanie podstawowych technik montażu",
            "Opanowanie narzędzi w aplikacji Instagram",
            "Nauka dodawania tekstu i muzyki"
          ],
          sections: [
            {
              id: "montaz-1",
              type: "text",
              content: "Dobra wiadomość: nie potrzebujesz profesjonalnego oprogramowania ani wieloletniego doświadczenia. Podstawy montażu opanujesz w aplikacji Instagram lub w prostych, darmowych aplikacjach."
            },
            {
              id: "montaz-heading-1",
              type: "heading",
              content: "Podstawowe techniki montażu"
            },
            {
              id: "montaz-2",
              type: "text",
              content: "**1. Przycinanie (Trim)**\nUsuń zbędne fragmenty na początku i końcu klipu.\n\n**2. Cięcie (Cut)**\nPodziel wideo na części i usuń niepotrzebne fragmenty.\n\n**3. Łączenie klipów**\nPołącz kilka nagrań w jedną spójną rolkę.\n\n**4. Zmiana tempa**\nPrzyspieszenie (timelapse) lub zwolnienie (slow motion).\n\n**5. Przejścia**\nPłynne przejścia między klipami."
            },
            {
              id: "montaz-heading-2",
              type: "heading",
              content: "Dodawanie elementów"
            },
            {
              id: "montaz-3",
              type: "text",
              content: "**Tekst:**\n• Używaj do przekazywania kluczowych informacji\n• Trzymaj się 1-2 fontów\n• Upewnij się, że jest czytelny (kontrast!)\n• Nie przesadzaj z ilością tekstu\n\n**Muzyka:**\n• Wybieraj trendy dźwięki (zwiększają zasięg)\n• Dopasuj tempo muzyki do tempa wideo\n• Używaj wbudowanej biblioteki Instagrama\n\n**Naklejki i GIFy:**\n• Dodawaj z umiarem\n• Mogą zwiększyć zaangażowanie (ankiety, pytania)"
            },
            {
              id: "montaz-4",
              type: "comparison",
              content: "Montaż: co robić, a czego unikać",
              comparison: {
                good: {
                  title: "Dobre praktyki:",
                  description: "Dynamiczne cięcia co 1-3 sekundy, czytelny tekst na kontrastowym tle, muzyka dopasowana do nastroju, spójny styl i filtry, hook w pierwszej sekundzie",
                  example: "Szybkie cięcia, jeden font, trendy muzyka"
                },
                bad: {
                  title: "Błędy w montażu:",
                  description: "Długie, nużące ujęcia bez cięć, mały nieczytelny tekst, losowa muzyka niedopasowana do treści, chaotyczne przejścia i efekty, nudny początek",
                  example: "30 sekund jednego ujęcia bez zmian"
                }
              }
            },
            {
              id: "montaz-5",
              type: "tip",
              content: "Hook w pierwszej sekundzie to klucz! Pierwsze 1-3 sekundy decydują, czy ktoś obejrzy resztę. Zacznij od efektu końcowego, zaskakującego tekstu lub intrygującego pytania."
            }
          ],
          tasks: [
            {
              id: "task-montaz-1",
              title: "Praktyka montażu",
              description: "Nagraj 3 krótkie klipy i zmontuj je w jedną rolkę z tekstem i muzyką"
            },
            {
              id: "task-montaz-2",
              title: "Analiza rolek",
              description: "Obejrzyj 10 popularnych rolek i zwróć uwagę na techniki montażu"
            }
          ],
          checklist: [
            { id: "check-montaz-1", text: "Umiem przycinać i łączyć klipy" },
            { id: "check-montaz-2", text: "Wiem jak dodać tekst i muzykę" },
            { id: "check-montaz-3", text: "Rozumiem znaczenie hooka" }
          ],
          keyTakeaways: [
            "Dynamiczne cięcia co 1-3 sekundy trzymają uwagę",
            "Hook w pierwszej sekundzie to klucz do sukcesu",
            "Nie potrzebujesz profesjonalnego oprogramowania"
          ]
        },
        {
          id: "korzystanie-z-trendow",
          title: "Korzystanie z trendów",
          description: "Jak wykorzystywać trendy i popularne dźwięki do zwiększenia zasięgów",
          estimatedMinutes: 15,
          objectives: [
            "Zrozumienie jak działają trendy na Instagramie i TikToku",
            "Nauczenie się adaptować trendy do branży beauty",
            "Znajdowanie trendów we właściwym momencie"
          ],
          sections: [
            {
              id: "trendy-1",
              type: "text",
              content: "Trendy to skróty do większych zasięgów. Gdy używasz popularnego dźwięku lub formatu, algorytm Facebooka i Instagrama częściej pokazuje Twoją rolkę nowym osobom. Ale trzeba wiedzieć, jak to robić dobrze."
            },
            {
              id: "trendy-heading-1",
              type: "heading",
              content: "Jak znaleźć trendy?"
            },
            {
              id: "trendy-2",
              type: "text",
              content: "**1. Przeglądaj zakładkę Reels/For You**\nZwracaj uwagę na powtarzające się dźwięki i formaty.\n\n**2. Sprawdzaj strzałkę przy dźwięku**\nStrzałka w górę = dźwięk zyskuje popularność.\n\n**3. Obserwuj konta branżowe**\nInni styliści/kosmetyczki często szybko łapią trendy.\n\n**4. Sprawdzaj TikToka**\nTrendy często zaczynają się tam i przechodzą na Instagram.\n\n**5. Używaj dedykowanych kont**\n@relostrending, @trendingaudios itp."
            },
            {
              id: "trendy-heading-2",
              type: "heading",
              content: "Jak adaptować trend do beauty?"
            },
            {
              id: "trendy-3",
              type: "text",
              content: "**Krok 1: Zrozum format**\nCo jest istotą tego trendu? Jaki przekaz?\n\n**Krok 2: Znajdź połączenie**\nJak ten format pasuje do Twojej pracy/usług?\n\n**Krok 3: Dodaj swój twist**\nZrób to po swojemu, nie kopiuj 1:1.\n\n**Przykład:**\nTrend 'Get Ready With Me' → 'Get My Client Ready With Me'\nTrend 'Day in my life' → 'Day in my life as a nail tech'\nTrend z zaskakującym zwrotem → Przed i po z 'reveal' na końcu"
            },
            {
              id: "trendy-4",
              type: "warning",
              content: "Nie każdy trend jest dla Ciebie! Pomijaj trendy, które nie pasują do Twojej marki lub są kontrowersyjne. Lepiej pominąć trend niż zrobić coś na siłę."
            },
            {
              id: "trendy-5",
              type: "text",
              content: "**Timing jest kluczowy:**\n\n• **Za wcześnie** – nikt nie zna trendu, mały zasięg\n• **W sam raz** – trend rośnie, maksymalny zasięg\n• **Za późno** – trend już 'wypalony', algorytm nie promuje\n\n**Złota zasada:** Gdy widzisz trend 3-5 razy, to dobry moment żeby go użyć. Gdy widzisz go wszędzie – może być za późno."
            },
            {
              id: "trendy-6",
              type: "tip",
              content: "Stwórz folder 'Zapisane' na Instagramie tylko na trendy. Gdy zobaczysz ciekawy format lub dźwięk – zapisz od razu. Wracaj do folderu gdy planujesz nagrywanie."
            }
          ],
          tasks: [
            {
              id: "task-trendy-1",
              title: "Polowanie na trendy",
              description: "Spędź 15 minut na Reels i zapisz 5 trendów, które możesz zaadaptować"
            },
            {
              id: "task-trendy-2",
              title: "Rolka z trendem",
              description: "Wybierz jeden trend i nagraj rolkę adaptując go do swojej pracy"
            }
          ],
          checklist: [
            { id: "check-trendy-1", text: "Wiem, jak znajdować trendy" },
            { id: "check-trendy-2", text: "Umiem adaptować trendy do beauty" },
            { id: "check-trendy-3", text: "Rozumiem znaczenie timingu" }
          ],
          keyTakeaways: [
            "Trendy to skrót do większych zasięgów",
            "Adaptuj trend do swojej branży, nie kopiuj 1:1",
            "Timing jest kluczowy – ani za wcześnie, ani za późno"
          ]
        }
      ]
    }
  ]
};
