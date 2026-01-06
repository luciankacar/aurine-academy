import { Course } from "@/types/courses";

export const storiesKomunikacjaCourse: Course = {
  id: "stories-komunikacja",
  title: "Stories i codzienna komunikacja",
  description: "Naucz się wykorzystywać Stories do budowania relacji z klientami i codziennej komunikacji.",
  icon: "MessageCircle",
  color: "#8b5cf6",
  estimatedHours: 2.5,
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
          estimatedMinutes: 18,
          intro: "Stories to Twoje codzienne 'okno' do życia salonu. Format, który znika po 24h, ale buduje relację na lata. W tej lekcji zrozumiesz, dlaczego Stories są niezbędne dla każdego salonu beauty.",
          sections: [
            { id: "stories-l1-1", type: "heading", content: "Czym są Stories i dlaczego zdominowały social media?" },
            { id: "stories-l1-2", type: "text", content: "Stories to pionowe zdjęcia lub filmy (do 60 sekund na Instagramie, do 20 sekund na Facebooku), które **znikają po 24 godzinach**. Można je wzbogacić o naklejki, tekst, muzykę, ankiety, quizy, odliczanie i wiele innych interaktywnych elementów.\n\nFormat Stories wprowadził Snapchat w 2013 roku, ale prawdziwą popularność zyskał gdy Instagram skopiował go w 2016 roku. Dziś **ponad 500 milionów** użytkowników Instagrama korzysta ze Stories codziennie." },
            { id: "stories-l1-3", type: "tip", content: "Stories wyświetlają się na **górze aplikacji** Instagram i Facebook - to pierwsza rzecz, którą widzą użytkownicy po otwarciu apki. Darmowa reklama w najlepszym miejscu!" },
            
            { id: "stories-l1-4", type: "heading", content: "Dlaczego algorytm kocha Stories?" },
            { id: "stories-l1-5", type: "text", content: "Algorytmy Instagrama i Facebooka mają jeden cel: **zatrzymać użytkownika w aplikacji jak najdłużej**. Stories idealnie to realizują:\n\n- Są krótkie, więc łatwo obejrzeć kolejne\n- Format pełnoekranowy = pełne zaangażowanie\n- Interaktywne naklejki zachęcają do działania\n- Automatyczne odtwarzanie = użytkownik \"wciągany\" dalej" },
            { 
              id: "stories-l1-6", 
              type: "step", 
              stepNumber: 1, 
              content: "**Algorytm premiuje aktywność** - regularne Stories sygnalizują, że Twoje konto jest aktywne i warto je pokazywać" 
            },
            { 
              id: "stories-l1-7", 
              type: "step", 
              stepNumber: 2, 
              content: "**Stories budują \"bliskość\"** - im więcej ktoś ogląda Twoje Stories, tym częściej widzi też Twoje posty" 
            },
            { 
              id: "stories-l1-8", 
              type: "step", 
              stepNumber: 3, 
              content: "**Interakcje się sumują** - każdy głos w ankiecie, odpowiedź, reakcja wzmacnia Twoją pozycję w algorytmie" 
            },

            { id: "stories-l1-9", type: "heading", content: "Stories vs posty - fundamentalne różnice" },
            { id: "stories-l1-10", type: "text", content: "Stories i posty to **dwa różne narzędzia** do dwóch różnych celów. Największy błąd? Traktowanie ich tak samo lub używanie tylko jednego formatu." },
            { 
              id: "stories-l1-11", 
              type: "comparison", 
              content: "Porównanie Stories i postów", 
              comparison: { 
                good: { 
                  title: "Stories", 
                  description: "Spontaniczne, codzienne, interaktywne, budujące relację",
                  example: "Kulisy pracy, pytania do obserwatorek, ankiety, codzienność salonu, wolne terminy, reakcje na bieżąco" 
                }, 
                bad: { 
                  title: "Posty", 
                  description: "Planowane, dopracowane, trwałe, budujące wizerunek",
                  example: "Portfolio efektów, metamorfozy przed/po, edukacyjne karuzele, budowanie profesjonalnego wizerunku" 
                } 
              } 
            },
            { id: "stories-l1-12", type: "tip", content: "Idealna strategia: **Posty budują fundament** (portfolio, profesjonalizm), **Stories budują relację** (codzienność, autentyczność). Potrzebujesz obu!" },

            { id: "stories-l1-13", type: "heading", content: "Dlaczego Stories są niezbędne dla salonu beauty?" },
            { id: "stories-l1-14", type: "text", content: "Salon beauty to biznes oparty na **zaufaniu i relacji**. Klientka oddaje Ci swój wygląd - musi Ci ufać. Stories pozwalają budować to zaufanie **codziennie**, pokazując:\n\n- Że jesteś profesjonalistką (czyste stanowisko, sterylne narzędzia)\n- Że jesteś człowiekiem (kawa, humor, kulisy)\n- Że masz zadowolone klientki (efekty, reakcje)\n- Że jesteś dostępna (wolne terminy, odpowiedzi na pytania)" },
            { 
              id: "stories-l1-15", 
              type: "step", 
              stepNumber: 1, 
              content: "**RELACJA** - obserwatorki czują, że Cię znają osobiście, nawet jeśli nigdy u Ciebie nie były" 
            },
            { 
              id: "stories-l1-16", 
              type: "step", 
              stepNumber: 2, 
              content: "**WIDOCZNOŚĆ** - algorytm pokazuje Cię częściej, bo regularnie publikujesz" 
            },
            { 
              id: "stories-l1-17", 
              type: "step", 
              stepNumber: 3, 
              content: "**ZAUFANIE** - widzą proces, kulisy, profesjonalizm - nie boją się przyjść" 
            },
            { 
              id: "stories-l1-18", 
              type: "step", 
              stepNumber: 4, 
              content: "**SPRZEDAŻ** - wolne terminy, promocje, nowości docierają do zaangażowanej publiczności" 
            },

            { 
              id: "stories-l1-19", 
              type: "mockup", 
              content: "Tak wygląda typowe Story salonu beauty:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "photo",
                description: "Story z kulisami pracy - przygotowane stanowisko, sterylne narzędzia. Buduje zaufanie i pokazuje profesjonalizm"
              }
            },

            { id: "stories-l1-20", type: "heading", content: "Strach przed kamerą - jak go pokonać?" },
            { id: "stories-l1-21", type: "text", content: "\"Nie lubię się nagrywać\", \"Nie wiem co powiedzieć\", \"Głupio się czuję\" - te obawy ma 90% początkujących. Dobra wiadomość: **nie musisz pokazywać twarzy** i nie musisz mówić, żeby mieć skuteczne Stories." },
            { id: "stories-l1-22", type: "example", content: "**5 typów Stories BEZ pokazywania twarzy:**\n\n📸 Zdjęcia efektów z tekstem\n🎬 Nagrania rąk przy pracy (timelapse)\n📝 Grafiki z poradami/cytatami\n🎵 Zdjęcia z muzyką i naklejkami\n📱 Reposty od zadowolonych klientek" },
            { id: "stories-l1-23", type: "tip", content: "**Technika \"do szuflady\"**: nagraj kilka Stories, ale ich nie publikuj. Obejrzyj po godzinie. Zobaczysz, że nie są takie złe jak Ci się wydawało. Oswajanie się z kamerą wymaga czasu." },
            { id: "stories-l1-24", type: "warning", content: "NIE czekaj na \"perfekcyjny moment\" - nigdy nie nadejdzie. Twoje pierwsze Stories będą kiepskie - i to jest OK. Każdy tak zaczynał. Liczy się **regularność**, nie perfekcja." },

            { id: "stories-l1-25", type: "heading", content: "Gdzie wyświetlają się Stories?" },
            { id: "stories-l1-26", type: "text", content: "Stories pojawiają się w kilku miejscach - i każde z nich to okazja do dotarcia do potencjalnych klientek:\n\n1. **Górny pasek** - główna lokalizacja, kółeczka z awatarami\n2. **Strona profilu** - wyróżnione Stories (Highlights) pod bio\n3. **Strona Explore** - najlepsze Stories trafiają do szerszej publiczności\n4. **Wiadomości prywatne** - możesz wysłać Story konkretnej osobie" },
            
            {
              id: "stories-l1-quiz1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Ile Stories dziennie publikuje przeciętny aktywny salon beauty?",
                options: [
                  "1 Story tygodniowo",
                  "1 Story dziennie",
                  "3-7 Stories dziennie",
                  "20+ Stories dziennie"
                ],
                correctIndex: 2,
                explanation: "Optymalna liczba to 3-7 Stories dziennie. 1 to za mało dla widoczności, 20+ może przytłoczyć. 3-7 pozwala być obecną bez irytowania obserwatorek."
              }
            },

            { id: "stories-l1-27", type: "heading", content: "Highlights - Stories na stałe" },
            { id: "stories-l1-28", type: "text", content: "Highlights (Wyróżnione) to **zapisane Stories**, które nie znikają. Wyświetlają się pod bio na profilu. To idealne miejsce na:\n\n- Cennik usług\n- Portfolio efektów\n- Opinie klientek\n- FAQ (najczęstsze pytania)\n- Informacje o salonie (lokalizacja, parking)" },
            { id: "stories-l1-29", type: "tip", content: "Traktuj Highlights jak **mini-stronę internetową** na swoim profilu. Nowe osoby często przeglądają je przed rezerwacją." },

            {
              id: "stories-l1-quiz2",
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
                explanation: "Post buduje portfolio, Story zwiększa jego zasięg. Ta kombinacja maksymalizuje efekt - post zostaje na stałe, Story przypomina o nim obserwatorkom i generuje pierwsze reakcje."
              }
            },

            { id: "stories-l1-30", type: "heading", content: "Twój pierwszy krok" },
            { id: "stories-l1-31", type: "text", content: "Nie musisz od razu robić wszystkiego idealnie. **Zacznij od jednego Story dziennie** przez tydzień. Zdjęcie kawy, stanowiska, efektu - cokolwiek. Cel: przełamać barierę i zobaczyć, że świat się nie zawali." },
            { 
              id: "stories-l1-32", 
              type: "comparison", 
              content: "Podejście do Stories", 
              comparison: { 
                good: { 
                  title: "Realistyczne podejście", 
                  description: "Zaczynam od minimum, buduję nawyk",
                  example: "Tydzień 1: 1 Story dziennie. Tydzień 2: 2-3 Stories. Tydzień 3: rozbudowuję o interakcje" 
                }, 
                bad: { 
                  title: "Nierealistyczne oczekiwania", 
                  description: "Od razu wszystko idealnie",
                  example: "Od jutra 10 Stories dziennie, wszystkie dopracowane, z muzyką, naklejkami, trendami..." 
                } 
              } 
            }
          ],
          tasks: [],
          checklist: [
            { id: "stories-check-1", text: "Wiem, czym są Stories i jak długo są widoczne (24h)" },
            { id: "stories-check-2", text: "Rozumiem różnice między Stories a postami" },
            { id: "stories-check-3", text: "Wiem, dlaczego algorytm promuje aktywne konta" },
            { id: "stories-check-4", text: "Znam sposoby na Stories bez pokazywania twarzy" },
            { id: "stories-check-5", text: "Wiem, czym są Highlights i do czego służą" },
            { id: "stories-check-6", text: "Mam plan na przełamanie bariery - 1 Story dziennie przez tydzień" }
          ],
          keyTakeaways: [
            "Stories to 24-godzinne treści idealne do codziennej, autentycznej komunikacji",
            "Algorytm nagradza regularność - aktywne konta są częściej pokazywane",
            "Nie musisz pokazywać twarzy - zdjęcia rąk, efektów, stanowiska też działają",
            "Posty budują portfolio, Stories budują relację - potrzebujesz obu",
            "Zacznij od 1 Story dziennie i stopniowo rozbudowuj"
          ],
          nextLessonTitle: "Co publikować na stories"
        },
        {
          id: "stories-komunikacja-l2",
          title: "Co publikować na stories",
          description: "Poznaj najlepsze pomysły na treści Stories dla salonu beauty.",
          estimatedMinutes: 20,
          intro: "\"Nie wiem co wrzucić\" - to najczęstsza wymówka. W tej lekcji dostaniesz gotową listę pomysłów na każdy dzień i nauczysz się zasady, która sprawi, że Twoje Stories będą angażować.",
          sections: [
            { id: "stories-l2-1", type: "heading", content: "Dlaczego różnorodność jest kluczem?" },
            { id: "stories-l2-2", type: "text", content: "Wyobraź sobie, że codziennie jesz to samo danie. Po tygodniu masz dość, prawda? Tak samo obserwatorki reagują na monotonne Stories.\n\n**Różnorodność treści** sprawia, że:\n- Obserwatorki nie wiedzą czego się spodziewać → oglądają wszystko\n- Docierasz do różnych typów odbiorców (jedni lubią kulisy, inni porady)\n- Algorytm widzi, że Twoje treści angażują różne osoby" },
            
            { id: "stories-l2-3", type: "heading", content: "5 kategorii treści na Stories" },
            { id: "stories-l2-4", type: "text", content: "Każda kategoria pełni inną funkcję. Rotacja między nimi to przepis na skuteczne Stories:" },
            { 
              id: "stories-l2-5", 
              type: "step", 
              stepNumber: 1, 
              content: "**KULISY PRACY** - Przygotowanie stanowiska, sterylizacja narzędzi, organizacja salonu, proces zabiegu. Buduje zaufanie i pokazuje profesjonalizm." 
            },
            { 
              id: "stories-l2-6", 
              type: "step", 
              stepNumber: 2, 
              content: "**EFEKTY ZABIEGÓW** - Przed i po, zbliżenia, metamorfozy, detale. Pokazuje Twoje umiejętności i inspiruje." 
            },
            { 
              id: "stories-l2-7", 
              type: "step", 
              stepNumber: 3, 
              content: "**EDUKACJA** - Porady pielęgnacyjne, obalanie mitów, ciekawostki, odpowiedzi na pytania. Buduje ekspertyzę." 
            },
            { 
              id: "stories-l2-8", 
              type: "step", 
              stepNumber: 4, 
              content: "**ŻYCIE CODZIENNE** - Poranna kawa, chwila przerwy, ulubiona muzyka, zabawne sytuacje. Buduje ludzką relację." 
            },
            { 
              id: "stories-l2-9", 
              type: "step", 
              stepNumber: 5, 
              content: "**INFORMACJE SPRZEDAŻOWE** - Wolne terminy, promocje, nowości w ofercie. Generuje rezerwacje." 
            },

            { id: "stories-l2-10", type: "heading", content: "Zasada 70-20-10" },
            { id: "stories-l2-11", type: "text", content: "To proporcje treści, które **działają**:\n\n- **70%** - Wartościowe treści (kulisy, efekty, edukacja)\n- **20%** - Budujące relację (życie codzienne, humor, za kulisami)\n- **10%** - Sprzedażowe (promocje, wolne terminy, CTA)\n\nDlaczego tak? Bo ludzie **nie chcą być bombardowani reklamami**. Daj wartość i zbuduj relację - wtedy sprzedaż przyjdzie naturalnie." },
            { id: "stories-l2-12", type: "warning", content: "Jeśli 80% Twoich Stories to promocje i wolne terminy - ludzie przestaną oglądać. Zobaczą \"reklama\" i przeskoczą. Daj wartość, potem sprzedawaj." },
            
            { 
              id: "stories-l2-13", 
              type: "comparison", 
              content: "Proporcje treści", 
              comparison: { 
                good: { 
                  title: "Dobry mix Stories", 
                  description: "Różnorodność, wartość, balans",
                  example: "Rano - kawa i dzień dobry, Południe - efekt zabiegu, Po południu - porada pielęgnacyjna, Wieczór - ankieta do obserwatorek" 
                }, 
                bad: { 
                  title: "Zły mix Stories", 
                  description: "Monotonia, tylko sprzedaż",
                  example: "Rano - wolne terminy, Południe - promocja, Po południu - wolne terminy, Wieczór - promocja weekendowa" 
                } 
              } 
            },

            { id: "stories-l2-14", type: "heading", content: "Kategoria 1: Kulisy pracy" },
            { id: "stories-l2-15", type: "text", content: "Kulisy to **złoto** dla salonu beauty. Pokazują to, czego klientka normalnie nie widzi:\n\n- Przygotowanie stanowiska przed wizytą\n- Sterylizacja narzędzi (buduje zaufanie!)\n- Organizacja produktów, kolorów, wzorników\n- Proces zabiegu z perspektywy stylistki\n- Pakowanie produktów dla klientki" },
            { id: "stories-l2-16", type: "example", content: "**5 pomysłów na Stories z kulis:**\n\n🧴 \"Sterylizuję narzędzia przed każdą klientką\" + zdjęcie sterylizatora\n💅 Timelapse układania lakierów według kolorów\n✨ \"Moje ulubione narzędzie do pracy\" + opis dlaczego\n🎬 Przygotowanie stanowiska w przyspieszeniu\n📦 Rozpakowywanie nowej dostawy produktów" },

            { id: "stories-l2-17", type: "heading", content: "Kategoria 2: Efekty zabiegów" },
            { id: "stories-l2-18", type: "text", content: "Efekty to Twoje **portfolio w ruchu**. Różnica między postem a Story z efektem:\n\n- Post = statyczne zdjęcie, dopracowane\n- Story = \"na gorąco\", autentyczne, z emocjami\n\nMożesz pokazać ten sam efekt w poście (portfolio) i Story (spontaniczna reakcja)." },
            { id: "stories-l2-19", type: "tip", content: "**Trick z reakcją klientki**: Nagraj moment, gdy klientka widzi efekt. Jej \"Wow!\" jest warte więcej niż 1000 słów. Oczywiście - za jej zgodą!" },
            
            { 
              id: "stories-l2-20", 
              type: "mockup", 
              content: "Story z efektem przed/po:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "photo",
                postImage: "before-after",
                description: "Klasyczne Story przed/po. Prosta formuła, ale wciąż jedna z najskuteczniejszych"
              }
            },

            { id: "stories-l2-21", type: "heading", content: "Kategoria 3: Edukacja" },
            { id: "stories-l2-22", type: "text", content: "Edukacyjne Stories budują Twoją **pozycję ekspertki**. Dzieląc się wiedzą, pokazujesz że wiesz co robisz.\n\nTematy edukacyjne dla salonu beauty:\n- Jak dbać o paznokcie/rzęsy/brwi między wizytami\n- Obalanie mitów (\"hybrydowy niszczy paznokcie\")\n- Wyjaśnianie różnic (klasyczne vs objętościowe rzęsy)\n- Odpowiedzi na częste pytania klientek" },
            { id: "stories-l2-23", type: "example", content: "**5 pomysłów na edukacyjne Stories:**\n\n📚 \"3 błędy, które niszczą hybrydy\" + lista\n❓ \"Mity o rzęsach, część 1\" + prawda vs fałsz\n💡 \"Dlaczego NIE polecam...\" + wyjaśnienie\n🔍 \"Czym różni się X od Y?\" + porównanie\n⏰ \"Jak często powinnaś...\" + harmonogram" },

            { id: "stories-l2-24", type: "heading", content: "Kategoria 4: Życie codzienne" },
            { id: "stories-l2-25", type: "text", content: "To kategoria, która **buduje ludzką relację**. Ludzie kupują od ludzi - chcą wiedzieć, kim jesteś poza pracą.\n\n**NIE MUSISZ** pokazywać całego życia prywatnego. Wystarczy odrobina autentyczności:\n- Poranna kawa i nastrój na dzień\n- Ulubiona muzyka do pracy\n- Śmieszna sytuacja z salonu\n- Twój sposób na relaks po pracy" },
            { id: "stories-l2-26", type: "warning", content: "Granica prywatności jest TWOJA. Nie musisz pokazywać rodziny, domu, dzieci. Możesz budować relację pokazując tylko \"zawodową\" część siebie + trochę osobowości." },

            {
              id: "stories-l2-quiz1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Która z tych treści należy do kategorii \"budującej relację\" (20%)?",
                options: [
                  "Zdjęcie efektu manicure",
                  "Promocja -20% na zabiegi",
                  "Poranna kawa z komentarzem o pogodzie",
                  "Porada o pielęgnacji paznokci"
                ],
                correctIndex: 2,
                explanation: "Kawa i komentarz o pogodzie to treść lifestyle'owa - pokazuje Twoją ludzką stronę. Efekty to wartość, promocja to sprzedaż, porada to edukacja (też wartość)."
              }
            },

            { id: "stories-l2-27", type: "heading", content: "Kategoria 5: Informacje sprzedażowe" },
            { id: "stories-l2-28", type: "text", content: "To **maksymalnie 10%** Twoich Stories. Ale te 10% jest ważne - to tutaj zarabiasz pieniądze.\n\nTypy sprzedażowych Stories:\n- Wolne terminy (\"Jutro mam jeszcze godzinę o 14:00\")\n- Promocje ograniczone czasowo\n- Nowości w ofercie\n- Efekt + CTA (\"Chcesz tak samo? Pisz!\")" },
            { id: "stories-l2-29", type: "tip", content: "Sprzedażowe Story działa lepiej **po serii wartościowych**. Najpierw pokaż kulisy, efekt, poradę - potem możesz wspomnieć o wolnym terminie." },

            { id: "stories-l2-30", type: "heading", content: "Bank pomysłów - Twoja tajna broń" },
            { id: "stories-l2-31", type: "text", content: "Profesjonaliści **nie wymyślają** treści na bieżąco. Mają gotową listę pomysłów i sięgają po nią, gdy brakuje inspiracji.\n\nGdzie trzymać bank pomysłów?\n- Notatka w telefonie\n- Dokument Google\n- Zapisane Stories innych (inspiracja)\n- Folder zdjęć \"do wykorzystania\"" },
            
            { id: "stories-l2-32", type: "example", content: "**30 gotowych pomysłów na Stories dla salonu beauty:**\n\n☕ Poranna kawa w salonie\n💅 Przygotowanie stanowiska\n✨ Efekt w trakcie zabiegu (zbliżenie)\n🎬 Timelapse całego zabiegu\n📸 Przed i po\n💬 Pytanie do obserwatorek (ankieta)\n📚 Porada pielęgnacyjna\n❓ Odpowiedź na częste pytanie\n🎵 Jaka muzyka gra dzisiaj w salonie?\n🛍️ Nowy produkt/kolor/narzędzie\n📅 Wolne terminy na ten tydzień\n😊 Reakcja zadowolonej klientki\n🔍 Zoom na detale pracy\n💭 Cytat motywacyjny\n📊 Ankieta: A czy B?\n🎁 Zapowiedź promocji\n🗓️ Plan na dzień\n✅ Zrobione dziś w salonie\n💡 Obalenie mitu\n🔥 Trending - popularny format\n📱 Repost Story klientki\n🎉 Mały sukces do świętowania\n🌟 Ulubiony efekt tygodnia\n📝 Za kulisami - sterylizacja\n🧴 Moje ulubione produkty\n⏰ Przypomnienie o rezerwacji\n💕 Podziękowanie dla klientek\n🎬 Za kulisami nagrywania contentu\n🏆 Przed i po - metamorfoza\n👋 Pożegnanie dnia" },

            { 
              id: "stories-l2-33", 
              type: "mockup", 
              content: "Story z ankietą - idealne do angażowania:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "poll",
                description: "Ankieta 'Klasyczne czy efekt mokrych?' - angażuje obserwatorki i pomaga poznać ich preferencje"
              }
            },

            {
              id: "stories-l2-quiz2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Masz dzień pełen zabiegów i mało czasu na Stories. Co wrzucisz jako minimum?",
                options: [
                  "Nic - lepiej nic niż byle co",
                  "Szybkie zdjęcie kawy lub stanowiska - 10 sekund roboty",
                  "Profesjonalną grafikę z promocją (trzeba zaprojektować)",
                  "Długi film o nowej usłudze (wymaga montażu)"
                ],
                correctIndex: 1,
                explanation: "Regularność > perfekcja. Szybkie, autentyczne Story jest lepsze niż cisza. Obserwatorki wolą widzieć Twój 'prawdziwy' dzień niż dopracowane grafiki raz na tydzień."
              }
            },

            { id: "stories-l2-34", type: "heading", content: "Planowanie vs spontaniczność" },
            { id: "stories-l2-35", type: "text", content: "Czy Stories powinny być zaplanowane czy spontaniczne? **Odpowiedź: oba!**\n\n- **Zaplanowane**: grafiki, porady, promocje - możesz przygotować wcześniej\n- **Spontaniczne**: kulisy, reakcje, codzienność - robisz na bieżąco\n\nIdealny mix to około 30% zaplanowanych + 70% spontanicznych." },
            { 
              id: "stories-l2-36", 
              type: "comparison", 
              content: "Zaplanowane vs spontaniczne Stories", 
              comparison: { 
                good: { 
                  title: "Balans", 
                  description: "Mix planowanych i spontanicznych",
                  example: "Rano - zaplanowana porada, Dzień - spontaniczne kulisy, Wieczór - zaplanowana ankieta" 
                }, 
                bad: { 
                  title: "Skrajności", 
                  description: "Tylko jeden typ",
                  example: "Same dopracowane grafiki (brak autentyczności) LUB same chaotyczne zdjęcia (brak wartości)" 
                } 
              } 
            }
          ],
          tasks: [],
          checklist: [
            { id: "stories-content-check-1", text: "Znam 5 głównych kategorii treści na Stories" },
            { id: "stories-content-check-2", text: "Rozumiem zasadę 70-20-10" },
            { id: "stories-content-check-3", text: "Mam zapisaną listę minimum 20 pomysłów" },
            { id: "stories-content-check-4", text: "Wiem, gdzie trzymać bank pomysłów" },
            { id: "stories-content-check-5", text: "Rozumiem różnicę między planowanymi a spontanicznymi Stories" }
          ],
          keyTakeaways: [
            "Różnorodność treści jest kluczem - rotuj między kategoriami",
            "Stosuj zasadę 70-20-10: wartość, relacja, sprzedaż",
            "Miej gotowy bank pomysłów - nie wymyślaj na bieżąco",
            "Regularność jest ważniejsza niż perfekcja",
            "Mix zaplanowanych (30%) i spontanicznych (70%) Stories działa najlepiej"
          ],
          nextLessonTitle: "Częstotliwość relacji"
        },
        {
          id: "stories-komunikacja-l3",
          title: "Częstotliwość relacji",
          description: "Dowiedz się, jak często publikować Stories i o jakich godzinach.",
          estimatedMinutes: 15,
          intro: "Za mało Stories = niewidoczność. Za dużo = irytacja. W tej lekcji znajdziesz złoty środek dla Twojego salonu i nauczysz się planować Stories tak, żeby być \"obecna\" przez cały dzień.",
          sections: [
            { id: "stories-l3-1", type: "heading", content: "Ile Stories dziennie publikować?" },
            { id: "stories-l3-2", type: "text", content: "Pytanie, które zadaje każda właścicielka salonu. Odpowiedź oparta na danych i doświadczeniu:\n\n- **Minimum**: 1 Story dziennie (utrzymanie widoczności)\n- **Optymum**: 3-7 Stories dziennie (regularność bez przytłaczania)\n- **Maksimum**: 10-12 Stories dziennie (więcej może irytować)\n\nDla **większości salonów beauty** idealna liczba to **4-6 Stories dziennie**." },
            { id: "stories-l3-3", type: "tip", content: "**Jakość > ilość**. Lepiej 4 angażujące Stories niż 10 przypadkowych zdjęć. Obserwatorki szybko nauczą się, że Twoje Stories warto oglądać - lub że można je pominąć." },

            { id: "stories-l3-4", type: "heading", content: "Dlaczego regularność jest ważniejsza niż liczba?" },
            { id: "stories-l3-5", type: "text", content: "Algorytm Instagram i Facebook ocenia **regularność**, nie tylko ilość. Konto które publikuje:\n\n- 5 Stories codziennie → świetne dla algorytmu\n- 20 Stories w poniedziałek, 0 do piątku → słabe dla algorytmu\n\n**Konsekwencja buduje nawyk** u obserwatorek. Jeśli codziennie o podobnych porach widzą Twoje Stories, zaczynają ich szukać." },
            
            { 
              id: "stories-l3-6", 
              type: "comparison", 
              content: "Regularność publikacji", 
              comparison: { 
                good: { 
                  title: "Regularna obecność", 
                  description: "Codziennie podobna liczba, rozłożona w czasie",
                  example: "Pon: 5 Stories, Wt: 4 Stories, Śr: 5 Stories, Czw: 6 Stories, Pt: 5 Stories" 
                }, 
                bad: { 
                  title: "Nieregularna obecność", 
                  description: "Duże wahania, nieprzewidywalne",
                  example: "Pon: 15 Stories, Wt: 0, Śr: 2, Czw: 0, Pt: 20 Stories" 
                } 
              } 
            },

            { id: "stories-l3-7", type: "heading", content: "Najlepsze godziny na Stories" },
            { id: "stories-l3-8", type: "text", content: "Kiedy Twoje potencjalne klientki scrollują Instagram? Oto **złote godziny** dla branży beauty:\n\n**Rano (7:00-9:00)**: Ludzie sprawdzają telefon zaraz po przebudzeniu\n**Przerwa obiadowa (12:00-14:00)**: Chwila relaksu w pracy\n**Po południu (16:00-18:00)**: Koniec pracy, powrót do domu\n**Wieczór (20:00-22:00)**: Relaks przed snem - NAJWYŻSZE ZAANGAŻOWANIE" },
            { id: "stories-l3-9", type: "warning", content: "Te godziny to **punkt wyjścia**. Sprawdź statystyki swojego konta (Insights) - Twoja publiczność może mieć inne nawyki!" },

            { id: "stories-l3-10", type: "heading", content: "Rozkład Stories w ciągu dnia" },
            { id: "stories-l3-11", type: "text", content: "**Nie wrzucaj wszystkich Stories naraz!** Rozłożenie w czasie ma dwa cele:\n\n1. **Jesteś \"obecna\" cały dzień** - obserwatorki widzą Cię wielokrotnie\n2. **Algorytm to docenia** - rozłożona aktywność > jednorazowy spike" },
            
            { 
              id: "stories-l3-12", 
              type: "step", 
              stepNumber: 1, 
              content: "**RANO (7:00-9:00)** - Powitanie dnia, kawa, przygotowanie salonu. Ton: optymistyczny, energiczny." 
            },
            { 
              id: "stories-l3-13", 
              type: "step", 
              stepNumber: 2, 
              content: "**PRZEDPOŁUDNIE (10:00-12:00)** - Kulisy pracy, przygotowanie do zabiegów. Ton: profesjonalny, za kulisami." 
            },
            { 
              id: "stories-l3-14", 
              type: "step", 
              stepNumber: 3, 
              content: "**POŁUDNIE (12:00-14:00)** - Efekty zabiegów, metamorfozy, praca w toku. Ton: pokazowy, dumny." 
            },
            { 
              id: "stories-l3-15", 
              type: "step", 
              stepNumber: 4, 
              content: "**PO POŁUDNIU (16:00-18:00)** - Edukacja, porady, tipy. Ton: ekspercki, pomocny." 
            },
            { 
              id: "stories-l3-16", 
              type: "step", 
              stepNumber: 5, 
              content: "**WIECZÓR (20:00-22:00)** - Podsumowanie, ankieta, pytanie, relaks. Ton: luźny, interaktywny." 
            },

            { id: "stories-l3-17", type: "example", content: "**Przykładowy harmonogram Stories (dzień roboczy):**\n\n☀️ 8:00 - Dzień dobry + kawa w salonie\n💅 11:00 - Przygotowanie stanowiska przed klientką\n✨ 13:00 - Efekt po zabiegu (przed/po)\n🎬 15:00 - Timelapse pracy (opcjonalnie)\n📚 17:00 - Porada pielęgnacyjna\n📅 19:00 - Wolne terminy (jeśli są)\n💬 21:00 - Pytanie lub ankieta do obserwatorek" },

            { 
              id: "stories-l3-18", 
              type: "mockup", 
              content: "Story wieczorne z ankietą:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "poll",
                description: "Wieczorne Story z ankietą - idealny moment na interakcję, obserwatorki są zrelaksowane i chętnie głosują"
              }
            },

            { id: "stories-l3-19", type: "heading", content: "Co jeśli mam mało czasu?" },
            { id: "stories-l3-20", type: "text", content: "Realność: nie każdego dnia masz czas na 5-7 Stories. I to OK! Oto **minimum przetrwania**:\n\n- **1 Story rano** (15 sekund) - dzień dobry/kawa\n- **1 Story w ciągu dnia** (15 sekund) - cokolwiek z pracy\n\nTo **30 sekund dziennie**. Każda może tyle znaleźć." },
            { id: "stories-l3-21", type: "tip", content: "**Batch content**: W wolniejsze dni nagraj więcej materiału. Masz zapas na gorsze dni. Np. w poniedziałek nagraj 3 efekty - możesz je publikować przez kolejne dni." },

            {
              id: "stories-l3-quiz1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Jest niedziela, masz wolne. Czy wrzucasz Stories?",
                options: [
                  "Nie - to mój dzień wolny, nie pracuję",
                  "Tak, ale tylko 1-2 lifestyle'owe (kawa, relaks)",
                  "Tak, pełen program jak w dzień roboczy",
                  "Tylko jeśli mam promocję do ogłoszenia"
                ],
                correctIndex: 1,
                explanation: "Regularność jest ważna, ale nie musisz być 'w trybie pracy'. 1-2 lifestyle'owe Stories pokazują Twoją ludzką stronę i utrzymują widoczność. Nie musisz pracować, żeby być obecna."
              }
            },

            { id: "stories-l3-22", type: "heading", content: "Narzędzia do planowania Stories" },
            { id: "stories-l3-23", type: "text", content: "Jak pamiętać o publikowaniu? Oto sprawdzone metody:\n\n**1. Przypomnienia w telefonie** - ustaw alarmy na kluczowe godziny\n**2. Planer treści** - zaplanuj tydzień z góry (co i kiedy)\n**3. Creator Studio / Meta Business Suite** - planowanie Stories z wyprzedzeniem\n**4. Aplikacje zewnętrzne** - Later, Planoly, Buffer" },
            { id: "stories-l3-24", type: "warning", content: "Zaplanowane Stories **nie zastąpią** spontanicznych. Używaj planowania do grafik i porad, ale kulisy i reakcje rób na bieżąco." },

            { id: "stories-l3-25", type: "heading", content: "Weekendy i święta" },
            { id: "stories-l3-26", type: "text", content: "**Weekendy**: Możesz zmniejszyć liczbę Stories (2-3 zamiast 5-6), ale **nie znikaj całkowicie**. Niedzielny wieczór to często dobry moment na zapowiedź tygodnia.\n\n**Święta i urlopy**: Daj znać obserwatorkom! \"Jestem na urlopie do...\" lub \"Wesołych Świąt! Wracam...\" - ludzie doceniają transparentność." },
            
            { 
              id: "stories-l3-27", 
              type: "comparison", 
              content: "Rozplanowanie Stories w czasie", 
              comparison: { 
                good: { 
                  title: "Rozłożone w czasie", 
                  description: "Kilka Stories na przestrzeni dnia",
                  example: "8:00 - Story, 12:00 - Story, 17:00 - Story, 21:00 - Story" 
                }, 
                bad: { 
                  title: "Wszystko naraz", 
                  description: "Seria Stories, potem cisza",
                  example: "10:00 - 8 Stories pod rząd, potem nic do następnego dnia" 
                } 
              } 
            },

            {
              id: "stories-l3-quiz2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Masz bardzo intensywny dzień - 8 klientek pod rząd. Ile Stories minimum wrzucisz?",
                options: [
                  "0 - nie mam czasu, klientki są ważniejsze",
                  "1 - szybkie zdjęcie czegokolwiek między klientkami",
                  "5 - muszę utrzymać regularność za wszelką cenę",
                  "10 - skoro mam dużo pracy, to dużo treści"
                ],
                correctIndex: 1,
                explanation: "1 Story to lepiej niż 0. Szybkie zdjęcie między klientkami zajmuje 10 sekund. Regularność jest ważna, ale Twoja praca z klientkami jest priorytetem - nie przesadzaj w drugą stronę."
              }
            },

            { id: "stories-l3-28", type: "heading", content: "Monitoring i optymalizacja" },
            { id: "stories-l3-29", type: "text", content: "Po 2-3 tygodniach regularnego publikowania, **sprawdź statystyki**:\n\n- Które godziny mają najwyższe wyświetlenia?\n- Które Stories mają najwięcej interakcji?\n- Kiedy obserwatorki \"odpadają\" (wychodzą)?\n\nDostosuj harmonogram do swojej publiczności - każde konto jest inne." },
            { id: "stories-l3-30", type: "tip", content: "W Instagram przejdź do: Profil → Menu → Statystyki → Treści → Stories. Zobaczysz dokładne dane o zasięgach i interakcjach każdego Story." }
          ],
          tasks: [],
          checklist: [
            { id: "frequency-check-1", text: "Wiem, ile Stories publikować dziennie (optymum: 4-6)" },
            { id: "frequency-check-2", text: "Znam najlepsze godziny na Stories dla branży beauty" },
            { id: "frequency-check-3", text: "Mam plan rozkładu Stories w ciągu dnia" },
            { id: "frequency-check-4", text: "Ustawiłam przypomnienia o publikowaniu" },
            { id: "frequency-check-5", text: "Wiem jak radzić sobie w dni gdy mam mało czasu" },
            { id: "frequency-check-6", text: "Rozumiem, że regularność jest ważniejsza niż liczba" }
          ],
          keyTakeaways: [
            "Publikuj 4-6 Stories dziennie (minimum 1, maksimum 10-12)",
            "Rozłóż Stories w czasie - nie wrzucaj wszystkiego naraz",
            "Najlepsze godziny: rano (7-9), południe (12-14), wieczór (20-22)",
            "Regularność jest ważniejsza niż perfekcja - 1 Story dziennie lepsze niż 10 raz w tygodniu",
            "Nawet w weekendy i urlopy - daj znać obserwatorkom gdzie jesteś"
          ],
          nextLessonTitle: "Interakcje z odbiorcami"
        },
        {
          id: "stories-komunikacja-l4",
          title: "Interakcje z odbiorcami",
          description: "Naucz się wykorzystywać interaktywne funkcje Stories do budowania społeczności.",
          estimatedMinutes: 20,
          intro: "Interaktywne naklejki to nie gadżet - to potężne narzędzie do budowania społeczności wokół Twojego salonu. W tej lekcji nauczysz się jak zachęcać do interakcji i dlaczego odpowiadanie na nie jest kluczowe.",
          sections: [
            { id: "stories-l4-1", type: "heading", content: "Dlaczego interakcje są tak ważne?" },
            { id: "stories-l4-2", type: "text", content: "Każda interakcja (głos w ankiecie, odpowiedź na pytanie, reakcja emoji) to **sygnał dla algorytmu**, że Twoje treści są wartościowe.\n\n**Więcej interakcji = więcej widoczności**\n\nAle to nie wszystko. Interakcje również:\n- Budują **relację** - osoba czuje się zauważona\n- Dają **feedback** - wiesz czego chcą klientki\n- Tworzą **społeczność** - obserwatorki zaczynają się angażować" },
            { id: "stories-l4-3", type: "tip", content: "Instagram mierzy \"engagement rate\" Twoich Stories. Konta z wysokim zaangażowaniem są pokazywane **wyżej** w pasku Stories i częściej w feedzie." },

            { id: "stories-l4-4", type: "heading", content: "Rodzaje interaktywnych naklejek" },
            { id: "stories-l4-5", type: "text", content: "Instagram oferuje kilka typów naklejek interaktywnych. Każda ma swoje zastosowanie:" },
            
            { 
              id: "stories-l4-6", 
              type: "step", 
              stepNumber: 1, 
              content: "**ANKIETA (Poll)** - Dwa przyciski do wyboru. Idealna na szybkie pytania typu \"A czy B?\". Najprostszy sposób na interakcję." 
            },
            { 
              id: "stories-l4-7", 
              type: "step", 
              stepNumber: 2, 
              content: "**SUWAK (Emoji Slider)** - Ocena na skali z emoji. Świetna do zbierania opinii typu \"Jak bardzo podoba Ci się ten kolor?\"" 
            },
            { 
              id: "stories-l4-8", 
              type: "step", 
              stepNumber: 3, 
              content: "**QUIZ** - Pytanie z kilkoma odpowiedziami (jedna poprawna). Idealna do edukacji i zabawy." 
            },
            { 
              id: "stories-l4-9", 
              type: "step", 
              stepNumber: 4, 
              content: "**PYTANIE (Question)** - Pole do wpisania odpowiedzi. Buduje głębszą relację, ale wymaga więcej wysiłku od odbiorcy." 
            },
            { 
              id: "stories-l4-10", 
              type: "step", 
              stepNumber: 5, 
              content: "**ODLICZANIE (Countdown)** - Stoper do wydarzenia. Idealna na zapowiedź promocji, nowości, otwarcia." 
            },
            { 
              id: "stories-l4-11", 
              type: "step", 
              stepNumber: 6, 
              content: "**LINK** - Przekierowanie na zewnętrzną stronę. Świetna do rezerwacji, cennika, produktów." 
            },

            { id: "stories-l4-12", type: "heading", content: "Ankieta - najprostsza i najskuteczniejsza" },
            { id: "stories-l4-13", type: "text", content: "Ankieta to **złoty standard** interakcji. Dlaczego?\n\n- Wymaga minimum wysiłku (jedno kliknięcie)\n- Daje natychmiastową gratyfikację (widzisz wynik)\n- Ludzie lubią wyrażać opinię\n- Buduje nawyk interakcji" },
            { id: "stories-l4-14", type: "example", content: "**10 pomysłów na ankiety dla salonu beauty:**\n\n💅 \"Na jesień: bordowy czy nude?\"\n💅 \"Klasyczne czy french?\"\n💅 \"Efekt mrozu czy ombre?\"\n👁️ \"Klasyczne czy objętościowe rzęsy?\"\n👁️ \"Natural czy drama look?\"\n💄 \"Makijaż naturalny czy wieczorowy?\"\n🧖 \"Zabieg relaksacyjny czy efektowy?\"\n📅 \"Wizyta rano czy po południu?\"\n💭 \"Wolisz ciszę czy rozmowę podczas zabiegu?\"\n🎵 \"Pop czy relaksacyjna muzyka?\"" },
            
            { 
              id: "stories-l4-15", 
              type: "mockup", 
              content: "Story z ankietą o kolorach:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "poll",
                description: "Ankieta 'Bordowy czy nude na jesień?' - proste pytanie, jasne opcje, łatwa decyzja dla obserwatorki"
              }
            },

            { id: "stories-l4-16", type: "heading", content: "Jak formułować angażujące pytania?" },
            { id: "stories-l4-17", type: "text", content: "Dobre pytanie jest **proste, konkretne i łatwe do odpowiedzi**. Złe pytanie wymaga zastanowienia, jest zbyt ogólne lub niejasne.\n\nZasady:\n- Jasne opcje (nie \"coś\" vs \"coś innego\")\n- Konkret > abstrakcja\n- Związek z branżą beauty\n- Zabawa > poważne tematy" },
            
            { 
              id: "stories-l4-18", 
              type: "comparison", 
              content: "Formułowanie pytań", 
              comparison: { 
                good: { 
                  title: "Angażujące pytanie", 
                  description: "Konkretne, łatwe, zabawne",
                  example: "Klasyczne przedłużanie czy efekt mokrych rzęs? 👁️" 
                }, 
                bad: { 
                  title: "Słabe pytanie", 
                  description: "Ogólne, wymaga wysiłku",
                  example: "Co sądzicie o aktualnych trendach w stylizacji rzęs?" 
                } 
              } 
            },

            { id: "stories-l4-19", type: "warning", content: "Unikaj pytań **zbyt osobistych** lub **kontrowersyjnych**. Salon beauty to nie miejsce na dyskusje polityczne czy religijne." },

            {
              id: "stories-l4-quiz1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Które pytanie w ankiecie zadziała najlepiej?",
                options: [
                  "Jakie macie plany na weekend?",
                  "Bordowy czy nude na jesienne paznokcie?",
                  "Lubicie moje Stories?",
                  "Co myślicie o nowych trendach?"
                ],
                correctIndex: 1,
                explanation: "Pytanie o konkretny wybór (bordowy vs nude) jest związane z branżą, łatwe do odpowiedzi i daje jasne opcje. Pozostałe są zbyt ogólne lub niezwiązane z Twoją specjalizacją."
              }
            },

            { id: "stories-l4-20", type: "heading", content: "Pytania otwarte - budowanie głębszej relacji" },
            { id: "stories-l4-21", type: "text", content: "Naklejka \"Pytanie\" wymaga więcej wysiłku od obserwatorki (musi coś napisać), ale **buduje głębszą relację**. Osoba czuje się zauważona, gdy odpowiadasz na jej wiadomość.\n\nKiedy używać:\n- \"Jakie masz pytania o...?\"\n- \"Co chciałabyś zobaczyć na moim profilu?\"\n- \"Jaki kolor paznokci masz teraz?\"" },
            
            { 
              id: "stories-l4-22", 
              type: "mockup", 
              content: "Story z pytaniem otwartym:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "question",
                description: "Pytanie 'O czym chciałabyś zobaczyć post?' - zbierasz pomysły i pokazujesz że zależy Ci na zdaniu obserwatorek"
              }
            },

            { id: "stories-l4-23", type: "tip", content: "Możesz **publikować odpowiedzi** na pytania (za zgodą) jako kolejne Stories. To pokazuje, że czytasz i reagujesz." },

            { id: "stories-l4-24", type: "heading", content: "Quiz - edukacja przez zabawę" },
            { id: "stories-l4-25", type: "text", content: "Naklejka Quiz jest idealna do **edukacji w formie zabawy**. Ludzie lubią sprawdzać swoją wiedzę.\n\nPomysły na quizy:\n- \"Ile trwa hybrydowy manicure?\" (opcje czasowe)\n- \"Co niszczy paznokcie najbardziej?\" (obalanie mitów)\n- \"Jak często robić henny brwi?\" (edukacja)" },
            { id: "stories-l4-26", type: "example", content: "**Przykładowy quiz edukacyjny:**\n\n❓ Pytanie: \"Jak długo po zabiegu nie moczyć rzęs?\"\n\nA) 4 godziny\nB) 12 godzin  \nC) 24 godziny ✓\nD) 48 godzin\n\nWyjaśnienie: \"Klej potrzebuje 24h żeby w pełni utwardzić się. Dlatego prosząc o unikanie wody i pary, chronię Twoje rzęski!\"" },

            { id: "stories-l4-27", type: "heading", content: "KLUCZOWE: Odpowiadaj na wszystkie interakcje!" },
            { id: "stories-l4-28", type: "text", content: "To **najważniejsza zasada** interakcji. Jeśli ktoś:\n- Zagłosował w ankiecie → podziękuj za głos lub pokaż wyniki\n- Odpowiedział na pytanie → odpowiedz na DM\n- Zareagował emoji → wyślij serduszko/dziękuję\n\nDlaczego to takie ważne? Osoba **poświęciła swój czas** żeby zareagować. Zasługuje na zauważenie. To buduje lojalność." },
            { id: "stories-l4-29", type: "warning", content: "**ZAWSZE** odpowiadaj na odpowiedzi! Jeśli ktoś napisał do Ciebie odpowiedź na Story i nie dostanie reakcji, nigdy więcej nie napisze. Tracisz szansę na relację." },

            { 
              id: "stories-l4-30", 
              type: "comparison", 
              content: "Reakcja na interakcje", 
              comparison: { 
                good: { 
                  title: "Profesjonalne podejście", 
                  description: "Odpowiadasz na każdą interakcję",
                  example: "50 głosów w ankiecie → Story z podziękowaniem i wynikami. 5 odpowiedzi na pytanie → osobna odpowiedź DM każdej osobie." 
                }, 
                bad: { 
                  title: "Amatorskie podejście", 
                  description: "Ignorujesz interakcje",
                  example: "50 głosów w ankiecie → nic. 5 odpowiedzi na pytanie → nic. Ludzie przestają reagować." 
                } 
              } 
            },

            {
              id: "stories-l4-quiz2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Wrzuciłaś Story z ankietą i dostałaś 50 głosów. Co teraz?",
                options: [
                  "Nic - ankieta się skończyła",
                  "Podziękujesz w następnym Story i pokażesz wyniki",
                  "Wyślesz DM do każdej osoby, która głosowała",
                  "Wrzucisz kolejną ankietę natychmiast"
                ],
                correctIndex: 1,
                explanation: "Pokazanie wyników i podziękowanie zamyka 'pętlę interakcji'. Ludzie widzą, że ich głos miał znaczenie - to motywuje do kolejnych interakcji. Wysyłanie 50 DM byłoby przesadą, kolejna ankieta od razu - monotonne."
              }
            },

            { id: "stories-l4-31", type: "heading", content: "Jak szybko odpowiadać?" },
            { id: "stories-l4-32", type: "text", content: "Ideał: **odpowiedz w ciągu godziny**. Realny cel: **odpowiedz tego samego dnia**, maksymalnie 24h.\n\nIm szybciej odpowiesz, tym:\n- Osoba jeszcze pamięta o czym pisała\n- Czuje się ważna\n- Jest bardziej skłonna do dalszej rozmowy" },
            { id: "stories-l4-33", type: "tip", content: "Wyznacz **konkretne pory** na odpowiadanie: np. rano po kawie, w przerwie obiadowej, wieczorem przed snem. Nie musisz reagować natychmiast - wystarczy regularnie." },

            { id: "stories-l4-34", type: "heading", content: "Zachęcanie do interakcji" },
            { id: "stories-l4-35", type: "text", content: "Czasem obserwatorki potrzebują **zachęty** do interakcji. Oto sprawdzone metody:\n\n- Jasny CTA (Call to Action): \"Zagłosuj!\", \"Napisz mi!\"\n- Pokazuj, że odpowiadasz: publikuj odpowiedzi\n- Nagradzaj interakcję: \"Wśród głosujących wylosuję...\"\n- Pytaj o zdanie: ludzie lubią się dzielić opinią" },
            { id: "stories-l4-36", type: "example", content: "**Przykłady CTA do interakcji:**\n\n💬 \"Zagłosuj - bordowy czy nude?\"\n📝 \"Napisz mi jakie masz pytania!\"\n❤️ \"Daj serduszko jeśli Ci się podoba\"\n🔄 \"Udostępnij znajomej, która to potrzebuje\"\n⬆️ \"Przesuń w górę żeby napisać\"" },
            
            { 
              id: "stories-l4-37", 
              type: "mockup", 
              content: "Story z CTA do interakcji:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "question",
                description: "Story z jasnym wezwaniem do działania: 'Masz pytania o rzęsy? Napisz tutaj! Odpowiem na wszystkie 💬'"
              }
            }
          ],
          tasks: [],
          checklist: [
            { id: "interaction-check-1", text: "Znam wszystkie rodzaje interaktywnych naklejek" },
            { id: "interaction-check-2", text: "Wiem, jak formułować angażujące pytania" },
            { id: "interaction-check-3", text: "Rozumiem dlaczego odpowiadanie na interakcje jest kluczowe" },
            { id: "interaction-check-4", text: "Mam wyznaczone pory na odpowiadanie na wiadomości" },
            { id: "interaction-check-5", text: "Znam sposoby na zachęcanie do interakcji (CTA)" },
            { id: "interaction-check-6", text: "Odpowiadam na wszystkie odpowiedzi w ciągu 24h" }
          ],
          keyTakeaways: [
            "Interakcje = sygnał dla algorytmu, że Twoje treści są wartościowe",
            "Ankieta to najprostszy i najskuteczniejszy typ interakcji",
            "Dobre pytanie jest proste, konkretne i łatwe do odpowiedzi",
            "ZAWSZE odpowiadaj na odpowiedzi - to buduje lojalność",
            "Używaj jasnych CTA (Call to Action) żeby zachęcać do interakcji"
          ],
          nextLessonTitle: "Stories sprzedażowe"
        },
        {
          id: "stories-komunikacja-l5",
          title: "Stories sprzedażowe",
          description: "Naucz się wykorzystywać Stories do promowania usług bez bycia nachalną.",
          estimatedMinutes: 18,
          intro: "Stories sprzedażowe mogą być skuteczne BEZ bycia nachalnymi. Kluczem jest proporcja, timing i sposób prezentacji. W tej lekcji nauczysz się tworzyć Stories, które sprzedają bez odpychania.",
          sections: [
            { id: "stories-l5-1", type: "heading", content: "Zasada 10% - fundament Stories sprzedażowych" },
            { id: "stories-l5-2", type: "text", content: "Wróćmy do zasady 70-20-10:\n\n- 70% - treści wartościowe (kulisy, efekty, edukacja)\n- 20% - budujące relację (życie, humor)\n- **10% - sprzedażowe** (promocje, wolne terminy, CTA)\n\nTo oznacza, że na **10 Stories, tylko 1 może być sprzedażowe**. Więcej = ludzie zaczną Cię ignorować." },
            { id: "stories-l5-3", type: "warning", content: "Konto, które wrzuca głównie promocje i wolne terminy, szybko traci zaangażowanie. Ludzie widzą \"reklama\" i automatycznie przeskakują. Nie bądź spamerem!" },

            { id: "stories-l5-4", type: "heading", content: "Rodzaje Stories sprzedażowych" },
            { id: "stories-l5-5", type: "text", content: "Nie każde sprzedażowe Story to \"PROMOCJA -20%\". Są subtelniejsze i skuteczniejsze metody:" },
            
            { 
              id: "stories-l5-6", 
              type: "step", 
              stepNumber: 1, 
              content: "**WOLNE TERMINY** - \"Mam wolne jutro o 15:00. Kto chętny?\" Informacyjne, nie nachalne, pilne." 
            },
            { 
              id: "stories-l5-7", 
              type: "step", 
              stepNumber: 2, 
              content: "**PROMOCJE OGRANICZONE** - Limitowane czasowo lub ilościowo. Uczciwe ograniczenie motywuje do działania." 
            },
            { 
              id: "stories-l5-8", 
              type: "step", 
              stepNumber: 3, 
              content: "**NOWOŚCI W OFERCIE** - Nowa usługa, technika, produkt. Ekscytacja i ciekawość." 
            },
            { 
              id: "stories-l5-9", 
              type: "step", 
              stepNumber: 4, 
              content: "**EFEKT + CTA** - Piękny efekt zabiegu + \"Chcesz tak samo? Napisz DM!\" Wartość + wezwanie do działania." 
            },
            { 
              id: "stories-l5-10", 
              type: "step", 
              stepNumber: 5, 
              content: "**SOCIAL PROOF** - Opinie klientek, reakcje \"wow\", reposty zadowolonych osób. Dowód społeczny = zaufanie." 
            },

            { id: "stories-l5-11", type: "heading", content: "Struktura skutecznego Story sprzedażowego" },
            { id: "stories-l5-12", type: "text", content: "Każde sprzedażowe Story powinno mieć **3 elementy**:\n\n**1. PRZYCIĄGNIJ UWAGĘ** - ciekawe zdjęcie, hook tekstowy, ruch\n**2. POKAŻ WARTOŚĆ** - co klientka zyska (efekt, uczucie, rozwiązanie problemu)\n**3. DAJ CTA** - jasne wezwanie do działania (napisz, zadzwoń, zarezerwuj)" },
            
            { 
              id: "stories-l5-13", 
              type: "comparison", 
              content: "Skuteczne vs nieskuteczne Story sprzedażowe", 
              comparison: { 
                good: { 
                  title: "Skuteczne Story", 
                  description: "Uwaga + wartość + CTA",
                  example: "Zdjęcie pięknych paznokci + 'Ostatni wolny termin jutro o 15:00. Napisz CHCĘ!' + naklejka pytanie" 
                }, 
                bad: { 
                  title: "Nieskuteczne Story", 
                  description: "Grafika bez emocji i kontekstu",
                  example: "Gotowa grafika 'PROMOCJA -20%' bez zdjęcia efektu, bez pilności, bez CTA" 
                } 
              } 
            },

            { id: "stories-l5-14", type: "example", content: "**Sekwencja 3 Stories sprzedażowych:**\n\n1️⃣ **Story 1 (wartość)**: Piękne zdjęcie efektu zabiegu - pokazujesz umiejętności\n2️⃣ **Story 2 (historia)**: Krótki opis procesu lub reakcja klientki - buduje emocje\n3️⃣ **Story 3 (CTA)**: \"Chcesz tak samo? Mam wolny termin jutro o 15. Napisz DM!\" + naklejka pytanie" },

            { 
              id: "stories-l5-15", 
              type: "mockup", 
              content: "Story sprzedażowe z CTA:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "photo",
                postImage: "nails",
                description: "Story z efektem manicure + tekst 'Ostatni termin jutro! Napisz DM' + naklejka pytanie jako CTA"
              }
            },

            { id: "stories-l5-16", type: "heading", content: "Technika FOMO - strach przed przegapieniem" },
            { id: "stories-l5-17", type: "text", content: "FOMO (Fear Of Missing Out) to **strach przed przegapieniem** okazji. To potężna motywacja, ale trzeba jej używać **uczciwie**.\n\nCo tworzy FOMO:\n- Ograniczenie czasowe: \"Tylko do piątku\"\n- Ograniczenie ilościowe: \"Zostały 3 miejsca\"\n- Ekskluzywność: \"Tylko dla obserwujących\"" },
            { id: "stories-l5-18", type: "warning", content: "**Nie nadużywaj FOMO!** Jeśli co tydzień masz \"ostatnią szansę\" i \"końcówkę promocji\", nikt nie będzie Ci wierzył. Fałszywe ograniczenia niszczą zaufanie." },
            
            { 
              id: "stories-l5-19", 
              type: "comparison", 
              content: "Uczciwe vs nieuczciwe FOMO", 
              comparison: { 
                good: { 
                  title: "Uczciwe FOMO", 
                  description: "Prawdziwe ograniczenie",
                  example: "\"Mam tylko 2 wolne terminy w tym tygodniu\" (i faktycznie masz tylko 2)" 
                }, 
                bad: { 
                  title: "Nieuczciwe FOMO", 
                  description: "Fałszywa pilność",
                  example: "\"Ostatnia szansa!\" co tydzień. \"Końcówka promocji!\" a promocja trwa od 3 miesięcy." 
                } 
              } 
            },

            {
              id: "stories-l5-quiz1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Masz wolny termin na jutro i chcesz go zapełnić. Jakie Story będzie najskuteczniejsze?",
                options: [
                  "Grafika z tekstem 'WOLNY TERMIN JUTRO' na kolorowym tle",
                  "Zdjęcie ostatniego efektu + 'Ostatni termin na jutro! Napisz DM'",
                  "Screen z kalendarza pokazujący wolną godzinę",
                  "Repost starego posta z portfolio"
                ],
                correctIndex: 1,
                explanation: "Zdjęcie efektu pokazuje WARTOŚĆ (co klientka dostanie), pilność ('ostatni termin') motywuje do działania, a jasne CTA ('Napisz DM') mówi co zrobić. To kombinacja emocji i konkretnej akcji."
              }
            },

            { id: "stories-l5-20", type: "heading", content: "Timing Stories sprzedażowych" },
            { id: "stories-l5-21", type: "text", content: "Kiedy publikować Stories sprzedażowe? Nie na początek dnia!\n\n**Złoty schemat**:\n1. Zacznij od wartościowego Story (kulisy, efekt)\n2. Dodaj story budujące relację\n3. **Na koniec** - sprzedażowe Story\n\nDlaczego? Bo obserwatorka \"rozgrzała się\" Twoimi treściami i jest bardziej otwarta na ofertę." },
            { id: "stories-l5-22", type: "tip", content: "**Najlepsze dni** na Stories sprzedażowe: niedziela wieczór i poniedziałek rano - ludzie planują tydzień. Piątek popołudniu - weekend nadchodzi, ludzie chcą się upiększyć." },

            { id: "stories-l5-23", type: "heading", content: "Wolne terminy - jak komunikować?" },
            { id: "stories-l5-24", type: "text", content: "Wolne terminy to **najprostsza forma** sprzedaży przez Stories. Ale jest różnica między \"poinformowaniem\" a \"sprzedaniem\":" },
            
            { 
              id: "stories-l5-25", 
              type: "comparison", 
              content: "Komunikowanie wolnych terminów", 
              comparison: { 
                good: { 
                  title: "Sprzedające Story", 
                  description: "Efekt + termin + CTA",
                  example: "Zdjęcie efektu + 'Takie pazurki możesz mieć jutro! Wolne: 10:00 i 15:00. Napisz który!' + naklejka pytanie" 
                }, 
                bad: { 
                  title: "Informacyjne Story", 
                  description: "Suche info bez emocji",
                  example: "Grafika: 'Wolne terminy: poniedziałek 10:00, 15:00. Wtorek 12:00.' - zero emocji" 
                } 
              } 
            },

            { id: "stories-l5-26", type: "example", content: "**3 warianty Story o wolnym terminie:**\n\n✅ **Wariant 1 (pilność)**: \"Mam JEDNĄ wolną godzinę na jutro! Kto łapie? 💅\"\n\n✅ **Wariant 2 (FOMO)**: \"Ktoś dziś odwołał wizytę... Idealna okazja dla kogoś kto chce pazurki NA JUŻ!\"\n\n✅ **Wariant 3 (wartość)**: Zdjęcie efektu + \"Chcesz takie do weekendu? Mam jeszcze miejsce w piątek o 16:00!\"" },

            { id: "stories-l5-27", type: "heading", content: "Promocje - jak prezentować?" },
            { id: "stories-l5-28", type: "text", content: "Promocje działają, ale **sposób prezentacji** ma znaczenie:\n\n❌ Grafika \"PROMOCJA -20%\" - nudne, wygląda jak spam\n✅ Seria Stories budująca napięcie:\n\n1. Tease: \"Mam dla Was coś specjalnego...\"\n2. Reveal: \"Promocja na [usługę] do końca tygodnia!\"\n3. Dowód: Zdjęcie efektu tej usługi\n4. CTA: \"Pisz 'CHCĘ' żeby zarezerwować\"" },

            {
              id: "stories-l5-quiz2",
              type: "quiz",
              content: "",
              quiz: {
                question: "Jaki % Twoich Stories powinien być sprzedażowy?",
                options: [
                  "50% - połowa musi sprzedawać",
                  "30% - jedna trzecia",
                  "10% - jedna na dziesięć",
                  "0% - Stories nie służą do sprzedaży"
                ],
                correctIndex: 2,
                explanation: "Zasada 70-20-10 mówi jasno: maksymalnie 10% treści sprzedażowych. Więcej = ludzie zaczną ignorować. Stories mają budować relację i dawać wartość - sprzedaż jest konsekwencją, nie głównym celem."
              }
            },

            { id: "stories-l5-29", type: "heading", content: "Social proof - opinie jako sprzedaż" },
            { id: "stories-l5-30", type: "text", content: "**Social proof** (dowód społeczny) to jedna z najpotężniejszych technik sprzedaży. Ludzie ufają opinii innych ludzi bardziej niż Twoim zapewnieniom.\n\nJak wykorzystać:\n- Reposty Stories klientek (za zgodą)\n- Screenshots pozytywnych wiadomości (za zgodą)\n- Reakcje \"wow\" klientek (za zgodą)\n- Zdjęcia zadowolonych klientek (za zgodą)" },
            { id: "stories-l5-31", type: "tip", content: "**Zawsze pytaj o zgodę** przed publikowaniem wiadomości lub zdjęć klientek. \"Mogę udostępnić Twoje Story / wiadomość?\" - większość się zgodzi." },

            { id: "stories-l5-32", type: "heading", content: "Call to Action - jak formułować?" },
            { id: "stories-l5-33", type: "text", content: "CTA (wezwanie do działania) musi być **jasne i proste**. Osoba musi wiedzieć DOKŁADNIE co zrobić.\n\n**Słabe CTA**:\n- \"Jeśli jesteś zainteresowana...\" (niepewność)\n- \"Daj znać\" (niejasne co to znaczy)\n\n**Mocne CTA**:\n- \"Napisz 'CHCĘ' w DM\"\n- \"Kliknij link w bio i zarezerwuj\"\n- \"Odpowiedz na to Story 💅\"" },
            { id: "stories-l5-34", type: "example", content: "**10 skutecznych CTA dla salonu beauty:**\n\n💬 \"Napisz 'CHCĘ' w wiadomości\"\n📩 \"Odpowiedz na to Story emoji pazurków\"\n🔗 \"Kliknij link w bio → Rezerwacja\"\n📞 \"Zadzwoń teraz: [numer]\"\n📅 \"Napisz która godzina Ci pasuje\"\n💕 \"Daj serduszko jeśli chcesz takie!\"\n📸 \"Wyślij mi zdjęcie inspiracji\"\n✋ \"Przesuń w górę żeby zarezerwować\"\n🙋 \"Napisz 'Rezerwuję [godzina]'\"\n⬇️ \"Kliknij naklejkę pytania i napisz\"" },

            { 
              id: "stories-l5-35", 
              type: "mockup", 
              content: "Story z mocnym CTA:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "question",
                description: "Story z efektem + naklejka pytania 'Napisz CHCĘ jeśli chcesz takie pazurki! 💅' - jasne, proste, zachęcające"
              }
            },

            { id: "stories-l5-36", type: "heading", content: "Częsty błąd: sprzedaż bez wartości" },
            { id: "stories-l5-37", type: "text", content: "Największy błąd początkujących: **za dużo sprzedaży, za mało wartości**.\n\nJeśli Twoje Stories to głównie:\n- Wolne terminy\n- Promocje\n- \"Rezerwuj teraz!\"\n\n...ludzie przestają oglądać. Musisz **najpierw dać wartość**, potem możesz prosić o zakup. Proporcja 9:1 (9 wartościowych na 1 sprzedażowe)." },
            { id: "stories-l5-38", type: "warning", content: "Sprawdź swoje ostatnie 10 Stories. Ile z nich było sprzedażowych? Jeśli więcej niż 1-2, masz problem z proporcją. Dodaj więcej wartościowych treści!" }
          ],
          tasks: [],
          checklist: [
            { id: "sales-check-1", text: "Rozumiem zasadę 10% - maksymalnie 1 na 10 Stories może być sprzedażowe" },
            { id: "sales-check-2", text: "Znam 5 typów Stories sprzedażowych" },
            { id: "sales-check-3", text: "Umiem stosować strukturę: uwaga + wartość + CTA" },
            { id: "sales-check-4", text: "Wiem jak uczciwie używać FOMO" },
            { id: "sales-check-5", text: "Znam najlepsze dni i pory na Stories sprzedażowe" },
            { id: "sales-check-6", text: "Umiem formułować jasne, mocne CTA" }
          ],
          keyTakeaways: [
            "Stories sprzedażowe to maksymalnie 10% wszystkich treści",
            "Struktura: Uwaga → Wartość → CTA",
            "FOMO działa, ale tylko gdy jest uczciwe - fałszywa pilność niszczy zaufanie",
            "Najlepsze dni to niedziela wieczór i poniedziałek rano",
            "Jasne CTA mówi DOKŁADNIE co ma zrobić obserwatorka"
          ],
          nextLessonTitle: undefined
        }
      ]
    }
  ]
};
