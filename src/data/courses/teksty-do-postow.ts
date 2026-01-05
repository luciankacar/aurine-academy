import { Course } from "@/types/courses";

export const tekstyDoPostowCourse: Course = {
  id: "teksty-do-postow",
  title: "Teksty do postów (Copy)",
  description: "Naucz się pisać angażujące teksty do postów, które przyciągają uwagę i zachęcają do działania.",
  icon: "PenLine",
  color: "from-amber-500 to-orange-600",
  totalLessons: 7,
  estimatedHours: 4,
  modules: [
    {
      id: "modul-copy",
      title: "Copywriting dla salonu beauty",
      description: "Wszystko o pisaniu tekstów do social media",
      lessons: [
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 1 - ROLA TEKSTU W POŚCIE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "rola-tekstu",
          title: "Rola tekstu w poście",
          description: "Dlaczego tekst jest równie ważny jak zdjęcie i jak wpływa na zaangażowanie.",
          estimatedMinutes: 25,
          intro: "Piękne zdjęcie zatrzymuje wzrok na ułamek sekundy, ale to tekst decyduje o wszystkim, co dzieje się później. Czy ktoś skomentuje? Zapisze post? Napisze wiadomość? Te akcje – nie samo polubienie – budują zasięg i przynoszą nowe klientki.",
          sections: [
            // --- SEKCJA 1: Wprowadzenie ---
            {
              id: "L1-heading-1",
              type: "heading",
              content: "Dlaczego samo zdjęcie nie wystarczy"
            },
            {
              id: "L1-text-1",
              type: "text",
              content: "Wyobraź sobie dwie stylistki paznokci. Obie robią piękne prace. Obie wrzucają zdjęcia codziennie. Ale jedna ma 15 polubień i ciszę, druga ma 12 komentarzy i pełny grafik.\n\nRóżnica? Tekst pod zdjęciem."
            },
            {
              id: "L1-text-2",
              type: "text",
              content: "Zdjęcie zatrzymuje scrollowanie – to prawda. Klientka widzi piękny manicure i daje serduszko. Ale potem? Scrolluje dalej. Jej mózg już zapomniał o Twoim poście.\n\nTekst sprawia, że **zostaje dłużej**. Czyta, myśli, odnosi do siebie. \"O, ja też mam ten problem!\", \"Ciekawe, nie wiedziałam!\", \"Muszę to zapamiętać!\". Te reakcje – dłuższy czas na poście, komentarze, zapisy – algorytm Instagrama nagradza większym zasięgiem."
            },
            {
              id: "L1-example-1",
              type: "example",
              content: "**Historia Magdy – dwa identyczne zdjęcia**\n\nMagda prowadzi salon w małym mieście. Zrobiła test: wrzuciła dwa posty z praktycznie identycznymi zdjęciami paznokci.\n\n**Post A:** \"Dzisiejszy efekt 💅✨\"\n**Post B:** \"Klientka powiedziała, że hybryda jej nie trzyma. Okazało się, że przed każdą wizytą moczy dłonie w wannie... 🛁 Czy wiesz, że to najczęstszy powód odpadania? Napisz w komentarzu, czy Ty też to robisz!\"\n\n**Wyniki po 24h:**\n• Post A: 12 polubień, 0 komentarzy, 0 zapisów\n• Post B: 28 polubień, 9 komentarzy, 4 zapisy\n\nTen sam telefon, to samo światło, podobny manicure. Różnica tylko w tekście."
            },
            {
              id: "L1-tip-1",
              type: "tip",
              content: "Profile z gorszymi zdjęciami, ale świetnymi tekstami, często mają lepsze wyniki niż te z perfekcyjnymi fotkami i pustymi podpisami. Tekst to nie dodatek do zdjęcia – to osobne narzędzie budowania zaangażowania."
            },
            
            // --- SEKCJA 2: Hierarchia interakcji ---
            {
              id: "L1-heading-2",
              type: "heading",
              content: "Nie wszystkie interakcje są równe"
            },
            {
              id: "L1-text-3",
              type: "text",
              content: "Algorytm Facebooka i Instagrama patrzy na to, co robią ludzie z Twoim postem. Ale nie wszystkie akcje są dla niego tak samo wartościowe.\n\nPolubienie jest łatwe – jeden klik, ułamek sekundy. Dlatego ma najmniejszą wartość. Komentarz wymaga napisania czegoś – to już wysiłek. Zapis oznacza, że ktoś chce wrócić do treści później – bardzo cenne. A udostępnienie to rekomendacja dla znajomych – najcenniejsze ze wszystkich."
            },
            {
              id: "L1-text-4",
              type: "text",
              content: "Jeśli myślisz o tym w punktach:\n\n• **Polubienie** = 1 punkt\n• **Komentarz** = 5 punktów\n• **Zapis** = 10 punktów\n• **Udostępnienie** = 15 punktów\n\nTo nie są oficjalne liczby od Instagrama – ale dobrze oddają proporcje. Post z 8 komentarzami i 5 zapisami będzie miał znacznie większy zasięg niż post z 40 polubień i niczym więcej."
            },
            {
              id: "L1-text-5",
              type: "text",
              content: "Dlatego zamiast pytać \"jak zdobyć polubienia?\", pytaj: **\"Jak sprawić, żeby ktoś chciał skomentować lub zapisać?\"**\n\nA to wymaga tekstu, który daje wartość lub zadaje pytanie. Samo zdjęcie – nawet najpiękniejsze – nie generuje tych cennych akcji."
            },
            {
              id: "L1-warning-1",
              type: "warning",
              content: "Pułapka polubień: Łatwo wpaść w myślenie, że dużo serduszek = sukces. Ale 500 polubień bez komentarzy to martwy post – algorytm widzi, że ludzie nie angażują się głębiej i ogranicza zasięg następnych postów."
            },
            
            // --- SEKCJA 3: 4 funkcje tekstu ---
            {
              id: "L1-heading-3",
              type: "heading",
              content: "4 funkcje, które musi spełniać dobry tekst"
            },
            {
              id: "L1-text-6",
              type: "text",
              content: "Każdy skuteczny tekst do posta spełnia przynajmniej jedną z czterech funkcji. Najlepsze teksty łączą kilka naraz. Kiedy piszesz post, zastanów się: którą funkcję chcę osiągnąć?"
            },
            {
              id: "L1-step-1",
              type: "step",
              stepNumber: 1,
              content: "**ZATRZYMUJE UWAGĘ** – Pierwsze zdanie musi być na tyle intrygujące, żeby ktoś kliknął \"więcej\". W social mediach widać tylko około 125-150 znaków przed przyciskiem – to Twoje okno na przekonanie. Jeśli pierwsze zdanie jest nudne, nikt nie przeczyta reszty."
            },
            {
              id: "L1-step-2",
              type: "step",
              stepNumber: 2,
              content: "**BUDUJE RELACJĘ** – Przez tekst pokazujesz swoją osobowość i podejście do pracy. Klientka poznaje Cię zanim przyjdzie do salonu. Wie, że jesteś ekspertką, ale też że jesteś \"normalna\" – ma problemy, popełnia błędy, uczy się. To buduje zaufanie."
            },
            {
              id: "L1-step-3",
              type: "step",
              stepNumber: 3,
              content: "**EDUKUJE** – Wartościowa wiedza buduje Twój wizerunek eksperta. Kiedy tłumaczysz, dlaczego hybryda odpada, albo jak dbać o skórki, klientki widzą, że znasz się na rzeczy. I zapisują takie posty na później – bo są użyteczne."
            },
            {
              id: "L1-step-4",
              type: "step",
              stepNumber: 4,
              content: "**INSPIRUJE DO DZIAŁANIA** – Jasne wezwanie mówi, co czytelnik ma zrobić: skomentować, zapisać, napisać wiadomość. Bez tego ludzie czytają, kiwają głową i... scrollują dalej. Z jasnym CTA – robią coś."
            },
            
            // --- SEKCJA 4: Przykład w praktyce ---
            {
              id: "L1-heading-4",
              type: "heading",
              content: "Wszystkie 4 funkcje w jednym poście"
            },
            {
              id: "L1-text-7",
              type: "text",
              content: "Zobaczmy, jak wygląda post, który łączy wszystkie cztery funkcje. To nie jest przypadek – każde zdanie ma swoje zadanie."
            },
            {
              id: "L1-mockup-1",
              type: "mockup",
              content: "Post łączący wszystkie 4 funkcje:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "Hybryda musi 'odpoczywać'? To mit! 💅\n\nSłyszę to pytanie co tydzień: \"Czy powinnam robić przerwy od hybrydy?\"\n\nPrawda jest taka, że Twoje paznokcie nie potrzebują przerwy.\n\nPotrzebują:\n✨ Dobrej techniki nakładania\n✨ Jakościowych produktów\n✨ Prawidłowej pielęgnacji między wizytami\n\nJeśli hybryda jest nakładana i zdejmowana prawidłowo, możesz ją nosić latami bez żadnych przerw.\n\nCzy robisz przerwy? Napisz w komentarzu 👇",
                postLikes: "42",
                postComments: "11",
                description: "Hook obalający mit + wartość edukacyjna + pytanie zachęcające do komentarza"
              }
            },
            {
              id: "L1-text-8",
              type: "text",
              content: "Przeanalizujmy ten post:\n\n• **Zatrzymuje** – \"To mit!\" budzi ciekawość, bo łamie oczekiwania\n• **Buduje relację** – \"Słyszę to co tydzień\" pokazuje, że rozmawiasz z klientkami\n• **Edukuje** – Konkretna lista, co naprawdę jest ważne\n• **Inspiruje do działania** – Pytanie na końcu zachęca do komentarza\n\nCztery funkcje, jeden post. Efekt: 11 komentarzy zamiast \"ładne 💅\" i ciszę."
            },
            
            // --- SEKCJA 5: Zasada jednego celu ---
            {
              id: "L1-heading-5",
              type: "heading",
              content: "Zasada jednego celu"
            },
            {
              id: "L1-text-9",
              type: "text",
              content: "Zanim napiszesz post, zadaj sobie jedno pytanie: **Co chcę, żeby czytelnik ZROBIŁ?**\n\nZapisał post na później? Skomentował swoją opinię? Napisał wiadomość z pytaniem o termin? Umówił się na wizytę? Każdy z tych celów wymaga innego tekstu i innego zakończenia."
            },
            {
              id: "L1-text-10",
              type: "text",
              content: "Problem pojawia się, kiedy próbujesz osiągnąć wszystko naraz. \"Skomentuj, zapisz, udostępnij i napisz wiadomość!\" – brzmi znajomo? Taki post nie działa, bo zbyt wiele opcji **paraliżuje**.\n\nTo znane zjawisko z psychologii – kiedy mamy za dużo wyborów, nie wybieramy nic. Daj jedną jasną opcję, a ludzie ją wykonają."
            },
            {
              id: "L1-example-2",
              type: "example",
              content: "**Dopasuj tekst do celu:**\n\n• **Post edukacyjny o pielęgnacji?** → Cel: zapis. Zakończ: \"Zapisz na później!\"\n• **Post z metamorfozą klientki?** → Cel: komentarz. Zakończ: \"Która wersja lepsza – przed czy po?\"\n• **Post z wolnymi terminami?** → Cel: wiadomość. Zakończ: \"Napisz DM, żeby zarezerwować!\"\n• **Post inspiracyjny z trendami?** → Cel: udostępnienie. Zakończ: \"Wyślij koleżance, która to pokocha!\"\n\nJeden post = jeden cel = jasne działanie."
            },
            {
              id: "L1-tip-2",
              type: "tip",
              content: "Przed napisaniem posta zadaj sobie: \"Gdybym mogła poprosić o tylko jedną rzecz, co by to było?\" To jest Twój cel. Reszta tekstu powinna do niego prowadzić."
            },
            
            // --- SEKCJA 6: Quiz ---
            {
              id: "L1-heading-6",
              type: "heading",
              content: "Sprawdź się"
            },
            {
              id: "L1-text-11",
              type: "text",
              content: "Masz piękne zdjęcie świeżo zrobionego manicure. Chcesz maksymalizować zasięg tego posta. Jak je podpiszesz?"
            },
            {
              id: "L1-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Która opcja da największy zasięg organiczny?",
                options: [
                  "Zdjęcie z podpisem '💅 Dzisiejszy efekt'",
                  "Zdjęcie z hookiem + historią + pytaniem do obserwatorek",
                  "Zdjęcie bez tekstu – minimalizm jest modny",
                  "Zdjęcie z pełnym cennikiem wszystkich usług"
                ],
                correctIndex: 1,
                explanation: "Tekst z hookiem zatrzymuje scrollowanie, historia buduje emocje i czas spędzony na poście, pytanie generuje komentarze. Algorytm widzi te interakcje i zwiększa zasięg. Sam emoji to stracona szansa."
              }
            }
          ],
          tasks: [
            { id: "task-L1-1", title: "Analiza własnych postów", description: "Przejrzyj 5 ostatnich postów. Przy każdym zapisz: ile polubień, komentarzy, zapisów. Oceń tekst – czy miał hook? Powód do komentarza? CTA? Znajdź wzorzec." },
            { id: "task-L1-2", title: "Analiza konkurencji", description: "Znajdź 3 profile z dużym zaangażowaniem w Twojej branży. Co robią inaczej w tekstach? Zapisz 3 konkretne obserwacje, które możesz zastosować u siebie." }
          ],
          checklist: [
            { id: "check-L1-1", text: "Rozumiem, że tekst jest równie ważny jak zdjęcie" },
            { id: "check-L1-2", text: "Wiem, że komentarze i zapisy są cenniejsze dla algorytmu niż polubienia" },
            { id: "check-L1-3", text: "Znam 4 funkcje tekstu: zatrzymanie, relacja, edukacja, akcja" },
            { id: "check-L1-4", text: "Każdy mój post będzie miał jeden jasny cel" }
          ],
          keyTakeaways: [
            "Zdjęcie zatrzymuje scrollowanie, ale to tekst buduje zaangażowanie i zasięg",
            "Komentarze (5x) i zapisy (10x) są dla algorytmu znacznie cenniejsze niż polubienia",
            "Skuteczny tekst: zatrzymuje uwagę, buduje relację, edukuje, inspiruje do działania",
            "Jeden post = jeden cel – zbyt wiele opcji paraliżuje czytelnika"
          ],
          nextLessonTitle: "Struktura posta"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 2 - STRUKTURA POSTA
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "struktura-posta",
          title: "Struktura posta",
          description: "Poznaj sprawdzoną strukturę tekstu, która działa w social media.",
          estimatedMinutes: 30,
          intro: "Pisanie postów nie wymaga talentu literackiego ani kreatywnego natchnienia. Wystarczy znać prostą strukturę: Hook → Rozwinięcie → CTA. To jak przepis kulinarny – masz składniki, masz kolejność, wychodzi dobrze za każdym razem.",
          sections: [
            // --- SEKCJA 1: Formuła ---
            {
              id: "L2-heading-1",
              type: "heading",
              content: "Formuła Hook-Rozwinięcie-CTA"
            },
            {
              id: "L2-text-1",
              type: "text",
              content: "Każdy skuteczny post składa się z trzech elementów. To nie wymysł influencerów – to wzorzec, który sprawdza się od dekad w reklamie, dziennikarstwie i komunikacji. Social media tylko go zaadaptowały."
            },
            {
              id: "L2-step-1",
              type: "step",
              stepNumber: 1,
              content: "**HOOK (haczyk)** – Pierwsze zdanie, które zatrzymuje scrollowanie. Na Instagramie widać około 125 znaków przed przyciskiem \"więcej\". Jeśli hook nie zadziała, nikt nie przeczyta reszty. To najważniejsza część posta."
            },
            {
              id: "L2-step-2",
              type: "step",
              stepNumber: 2,
              content: "**ROZWINIĘCIE (treść)** – Główna część posta: historia, edukacja, wartość. Musi spełniać obietnicę hooka. Jeśli hook mówi \"5 błędów, które niszczą paznokcie\", rozwinięcie musi zawierać te 5 błędów. Inaczej czytelnik poczuje się oszukany."
            },
            {
              id: "L2-step-3",
              type: "step",
              stepNumber: 3,
              content: "**CTA (wezwanie do działania)** – Mówisz, co czytelnik ma zrobić: skomentować, zapisać, napisać wiadomość. Jedno CTA na post, nie więcej. Bez CTA nawet świetny post kończy się na \"fajne\" i scrollowaniu dalej."
            },
            {
              id: "L2-text-2",
              type: "text",
              content: "Ta struktura działa, bo odpowiada na sposób, w jaki ludzie przetwarzają informacje w social mediach. Mózg skanuje setki treści na minutę i automatycznie filtruje: nudne, nudne, nudne... o, to ciekawe!\n\nHook wywołuje reakcję \"o, to ciekawe!\". Rozwinięcie dostarcza wartość. CTA mówi, co dalej. Prosto i skutecznie."
            },
            {
              id: "L2-tip-1",
              type: "tip",
              content: "Myśl o poście jak o rozmowie ze znajomą. Hook to pierwsze zdanie, które mówisz – musi ją zainteresować. Rozwinięcie to cała historia. CTA to prośba na końcu: \"co o tym myślisz?\" lub \"daj znać, jeśli też tak masz\"."
            },
            
            // --- SEKCJA 2: Przykład w praktyce ---
            {
              id: "L2-heading-2",
              type: "heading",
              content: "Struktura w praktyce"
            },
            {
              id: "L2-text-3",
              type: "text",
              content: "Zobaczmy, jak wygląda kompletny post zbudowany według tej struktury. Każdy element pełni swoją funkcję – nic nie jest przypadkowe."
            },
            {
              id: "L2-mockup-1",
              type: "mockup",
              content: "Post ze strukturą Hook-Rozwinięcie-CTA:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "🎣 Ten błąd kosztował mnie klientkę...\n\nPrzez pierwszy rok prowadzenia salonu wrzucałam piękne zdjęcia z podpisem \"Dzisiejszy manicure 💅\". I cisza. 20 polubień, zero komentarzy, zero zapytań.\n\nPotem zaczęłam pisać inaczej:\n• Opowiadałam historie klientek\n• Odpowiadałam na pytania z salonu\n• Dawałam konkretne porady\n\nWyniki? Komentarze poszły w górę, a za nimi – zapytania o wolne terminy.\n\n📣 Napisz 💅 jeśli też kiedyś wrzucałaś tylko \"ładne paznokcie\" bez tekstu!",
                postLikes: "38",
                postComments: "12",
                description: "Hook (błąd) → Rozwinięcie (co zmieniłam) → CTA (napisz emoji)"
              }
            },
            {
              id: "L2-text-4",
              type: "text",
              content: "Przeanalizujmy:\n\n• **Hook** – \"Ten błąd kosztował mnie klientkę\" budzi ciekawość. Co się stało? Jaki błąd? Muszę przeczytać dalej.\n• **Rozwinięcie** – Historia własnego doświadczenia. Konkretna zmiana i konkretne wyniki.\n• **CTA** – Proste emoji. Niski próg wejścia – wystarczy jeden klik.\n\nTen post działa, bo każdy element jest na swoim miejscu."
            },
            
            // --- SEKCJA 3: Piramida odwrócona ---
            {
              id: "L2-heading-3",
              type: "heading",
              content: "Piramida odwrócona – najważniejsze na górze"
            },
            {
              id: "L2-text-5",
              type: "text",
              content: "W dziennikarstwie istnieje zasada \"piramidy odwróconej\" – najważniejsze informacje umieszczasz na początku, szczegóły później. W social mediach to jeszcze bardziej istotne, bo większość ludzi nie czyta do końca."
            },
            {
              id: "L2-text-6",
              type: "text",
              content: "Masz 3 sekundy na przekazanie głównego przekazu. Nie buduj napięcia jak w powieści kryminalnej – daj najważniejsze od razu, a potem rozwiń szczegóły dla tych, którzy zostaną dłużej.\n\nJeśli główna informacja jest na końcu posta, większość odbiorców jej nie zobaczy. Po prostu nie doczytają."
            },
            {
              id: "L2-example-1",
              type: "example",
              content: "**Źle (główna informacja na końcu):**\n\"Wczoraj miałam ciekawy dzień. Rano zaczęłam od kawy, potem przyszła pierwsza klientka, porozmawiałyśmy o wakacjach, zrobiłam jej manicure, a potem... okazało się, że to moja 1000. klientka!\"\n\n**Dobrze (główna informacja na górze):**\n\"1000. klientka! 🎉 Wczoraj to się wydarzyło. Kiedy kończyłam manicure, uświadomiłam sobie, że to oficjalnie tysięczna osoba, która mi zaufała...\"\n\nTa sama historia, odwrócona kolejność. Wersja B zatrzymuje od razu."
            },
            {
              id: "L2-warning-1",
              type: "warning",
              content: "Jeśli budujesz napięcie przez cały post i clou jest na końcu – stracisz 80% czytelników po drodze. Daj najważniejsze na górze, szczegóły poniżej."
            },
            
            // --- SEKCJA 4: Formatowanie ---
            {
              id: "L2-heading-4",
              type: "heading",
              content: "Formatowanie – tekst musi oddychać"
            },
            {
              id: "L2-text-7",
              type: "text",
              content: "Nawet świetna treść przepadnie, jeśli wygląda jak ściana tekstu. Długi blok bez przerw odstrasza – ludzie scrollują dalej zanim w ogóle zaczną czytać. Ich mózg automatycznie ocenia: \"dużo tekstu, nie chce mi się\"."
            },
            {
              id: "L2-text-8",
              type: "text",
              content: "Dziel tekst na krótkie akapity – 2-3 zdania maksymalnie. Używaj enterów jako wizualnych separatorów. Emoji mogą działać jak punktory, ale z umiarem – 2-3 na sekcję, nie więcej.\n\nCzytanie na telefonie to nie czytanie książki. Ludzie skanują, nie czytają słowo po słowie. Twój tekst musi być czytelny przy skanowaniu."
            },
            {
              id: "L2-comparison-1",
              type: "comparison",
              content: "Formatowanie tekstu",
              comparison: {
                good: {
                  title: "Czytelne formatowanie ✅",
                  description: "Krótkie akapity, odstępy, emoji jako punktory. Tekst 'oddycha' i jest łatwy do skanowania.",
                  example: "Ten błąd popełnia 80% klientek! 💅\n\nPrawda, że zdjęcie przyciąga wzrok.\n\nAle to tekst sprawia, że ktoś:\n✨ Zostaje dłużej\n✨ Komentuje\n✨ Zapisuje"
                },
                bad: {
                  title: "Ściana tekstu ❌",
                  description: "Jeden długi blok bez przerw. Wygląda przytłaczająco, ludzie omijają.",
                  example: "Ten błąd popełnia 80% klientek! Prawda, że zdjęcie przyciąga wzrok, ale to tekst sprawia, że ktoś zostaje dłużej, komentuje i zapisuje post. Dlatego warto poświęcić czas na napisanie dobrego tekstu, który angażuje i daje wartość..."
                }
              }
            },
            {
              id: "L2-tip-2",
              type: "tip",
              content: "Przed publikacją przeczytaj swój post na telefonie. Czy wygląda przystępnie? Czy chce Ci się to przeczytać? Jeśli nie – podziel na mniejsze kawałki."
            },
            
            // --- SEKCJA 5: Długość posta ---
            {
              id: "L2-heading-5",
              type: "heading",
              content: "Jak długi powinien być post?"
            },
            {
              id: "L2-text-9",
              type: "text",
              content: "Nie ma jednej idealnej długości. Zależy od celu posta i od tego, co masz do powiedzenia."
            },
            {
              id: "L2-text-10",
              type: "text",
              content: "**Krótkie posty (50-100 słów)** – Dobre do szybkich myśli, pytań do obserwujących, prostych ogłoszeń. \"Wolne terminy w tym tygodniu!\" nie wymaga elaboratu.\n\n**Średnie posty (100-200 słów)** – Idealne do większości treści: mini-historie, porady, obalanie mitów. Wystarczająco długie, żeby dać wartość, wystarczająco krótkie, żeby ludzie doczytali.\n\n**Długie posty (200+ słów)** – Dla głębszych historii, szczegółowych poradników, osobistych wyznań. Działają świetnie, jeśli treść jest naprawdę wartościowa i hook jest mocny."
            },
            {
              id: "L2-text-11",
              type: "text",
              content: "Zasada jest prosta: **post powinien być tak długi, jak wymaga temat – i ani słowa dłużej**. Nie rozwadniaj, żeby wydawało się \"profesjonalniej\". Nie skracaj, jeśli historia wymaga więcej miejsca."
            },
            
            // --- SEKCJA 6: Quiz ---
            {
              id: "L2-heading-6",
              type: "heading",
              content: "Sprawdź się"
            },
            {
              id: "L2-text-12",
              type: "text",
              content: "Piszesz post o swojej autorskiej metodzie przedłużania rzęs, która sprawia, że trzymają dłużej niż u konkurencji. To Twój główny wyróżnik. Gdzie umieścisz tę informację?"
            },
            {
              id: "L2-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Gdzie powinna być najważniejsza informacja o Twojej metodzie?",
                options: [
                  "Na końcu – jako efektowne podsumowanie całej historii",
                  "W środku rozwinięcia – po wstępie",
                  "Na początku – w hooku lub zaraz po nim",
                  "Nieważne gdzie – liczy się cała treść"
                ],
                correctIndex: 2,
                explanation: "Piramida odwrócona: najważniejsze na początku. Większość osób nie czyta do końca, więc kluczowa informacja musi być na górze. Jeśli ukryjesz ją na końcu, większość jej nie zobaczy."
              }
            }
          ],
          tasks: [
            { id: "task-L2-1", title: "Napisz post według struktury", description: "Wybierz temat z życia salonu. Napisz post: Hook → Rozwinięcie → CTA. Sprawdź: czy hook zatrzymuje? Czy CTA jest jasne i jedno?" },
            { id: "task-L2-2", title: "Przeformatuj stary post", description: "Znajdź stary post z niskim zaangażowaniem. Przepisz go według struktury, dodaj formatowanie (krótkie akapity, emoji jako punktory)." }
          ],
          checklist: [
            { id: "check-L2-1", text: "Znam strukturę Hook-Rozwinięcie-CTA" },
            { id: "check-L2-2", text: "Rozumiem zasadę piramidy odwróconej" },
            { id: "check-L2-3", text: "Potrafię dzielić tekst na czytelne akapity" },
            { id: "check-L2-4", text: "Wiem, że długość posta zależy od tematu" }
          ],
          keyTakeaways: [
            "Skuteczny post: Hook → Rozwinięcie → CTA – ta kolejność działa",
            "Hook musi zmieścić się w 125 znakach i zatrzymać scrollowanie",
            "Najważniejsze informacje na początku (piramida odwrócona)",
            "Formatowanie zwiększa czytelność – tekst musi oddychać"
          ],
          nextLessonTitle: "Hooki – jak zatrzymać scrollowanie"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 3 - HOOKI
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "hooki",
          title: "Hooki – jak zatrzymać scrollowanie",
          description: "Naucz się pisać pierwsze zdania, które zatrzymują kciuk na ekranie.",
          estimatedMinutes: 35,
          intro: "Użytkownik Instagrama ocenia post w ułamku sekundy. Hook to pierwsze 125 znaków – tyle widać przed przyciskiem \"więcej\". Bez dobrego hooka nawet najlepsza treść zostanie przeoczona. To najbardziej krytyczny element posta.",
          sections: [
            // --- SEKCJA 1: Czym jest hook ---
            {
              id: "L3-heading-1",
              type: "heading",
              content: "Czym jest hook i dlaczego jest najważniejszy"
            },
            {
              id: "L3-text-1",
              type: "text",
              content: "Hook (haczyk) to pierwsze zdania posta widoczne przed przyciskiem \"więcej\". To Twoje okno – masz ułamek sekundy na przekonanie kogoś, że warto kliknąć i przeczytać resztę.\n\nLudzie scrollują Instagram bardzo szybko – 200-300 postów na minutę. Ich mózg automatycznie filtruje treści: nudne, nudne, nudne... o, to ciekawe! Ten moment \"o, to ciekawe!\" – to reakcja na dobry hook."
            },
            {
              id: "L3-text-2",
              type: "text",
              content: "Hook to nie tylko kwestia estetyki czy \"ładnego początku\". To praktyczna konieczność. Jeśli hook nie zadziała:\n\n• Nikt nie kliknie \"więcej\"\n• Nikt nie przeczyta Twojej wartościowej treści\n• Nikt nie skomentuje ani nie zapisze\n• Algorytm zobaczy brak interakcji i ograniczy zasięg\n\nDobry hook to fundament całego posta."
            },
            {
              id: "L3-tip-1",
              type: "tip",
              content: "Masz dokładnie około 125 znaków na hook na Instagramie. Przelicz! Jeśli główne przesłanie jest na pozycji 130 – nikt go nie zobaczy bez kliknięcia \"więcej\", a większość nie kliknie."
            },
            
            // --- SEKCJA 2: 5 typów hooków ---
            {
              id: "L3-heading-2",
              type: "heading",
              content: "5 typów skutecznych hooków"
            },
            {
              id: "L3-text-3",
              type: "text",
              content: "Nie musisz wymyślać hooków od zera przy każdym poście. Istnieje kilka sprawdzonych typów, które działają w każdej branży – także w beauty. Możesz je adaptować do swoich tematów."
            },
            {
              id: "L3-step-1",
              type: "step",
              stepNumber: 1,
              content: "**PYTANIE** – \"Czy wiesz, że większość klientek źle dba o hybrydę?\" Mózg automatycznie szuka odpowiedzi na pytania, więc zatrzymuje się na poście. Pytania działają szczególnie dobrze, kiedy dotyczą czegoś, co czytelnik robi."
            },
            {
              id: "L3-step-2",
              type: "step",
              stepNumber: 2,
              content: "**SZOK/KONTROWERSJA** – \"Przez 3 lata robiłam ten błąd.\" Łamie oczekiwania, zaskakuje. Czytelnik chce wiedzieć, jaki to błąd – i czy on też go popełnia. Uwaga: szok musi być prawdziwy, nie wymyślony dla efektu."
            },
            {
              id: "L3-step-3",
              type: "step",
              stepNumber: 3,
              content: "**OBIETNICA WARTOŚCI** – \"5 sposobów, żeby hybryda trzymała 4 tygodnie.\" Konkretna korzyść dla czytelnika. Liczby działają świetnie – \"5 sposobów\" brzmi bardziej konkretnie niż \"kilka sposobów\"."
            },
            {
              id: "L3-step-4",
              type: "step",
              stepNumber: 4,
              content: "**HISTORIA** – \"Wczoraj klientka powiedziała coś, co zmieniło moje myślenie...\" Ludzie kochają opowieści i chcą poznać ciąg dalszy. Historie angażują emocjonalnie silniej niż fakty."
            },
            {
              id: "L3-step-5",
              type: "step",
              stepNumber: 5,
              content: "**LUKA INFORMACYJNA** – \"To zmieniło sposób, w jaki robię przedłużanie...\" Mówisz, że coś się wydarzyło, ale nie mówisz co. Mózg nie znosi niedokończonych historii i musi dowiedzieć się więcej."
            },
            {
              id: "L3-example-1",
              type: "example",
              content: "**Przykłady każdego typu dla branży beauty:**\n\n🔹 **Pytanie:** \"Czy wiesz, dlaczego Twoja hybryda odpada po tygodniu?\"\n🔹 **Szok:** \"Przez 5 lat myliłam się co do olejków do skórek.\"\n🔹 **Obietnica:** \"3 rzeczy, które robię, żeby paznokcie klientek wyglądały świeżo przez 4 tygodnie.\"\n🔹 **Historia:** \"Dzisiaj klientka pokazała mi paznokcie z innego salonu. To co zobaczyłam...\"\n🔹 **Luka:** \"Jest jedna rzecz, której nigdy nie robię przed nałożeniem hybrydy.\""
            },
            
            // --- SEKCJA 3: Hook w praktyce ---
            {
              id: "L3-heading-3",
              type: "heading",
              content: "Hook w praktyce – przykład posta"
            },
            {
              id: "L3-text-4",
              type: "text",
              content: "Zobaczmy, jak wygląda post z hookiem łączącym kilka technik – szok i pytanie jednocześnie. Łączenie typów wzmacnia efekt."
            },
            {
              id: "L3-mockup-1",
              type: "mockup",
              content: "Hook łączący szok z pytaniem:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "Ten błąd popełnia 80% klientek... Ty też? 😳\n\nPrzez 5 lat pracy widziałam to setki razy.\n\nKlientka mówi: \"Hybryda mi nie trzyma, może powinnam zrobić przerwę?\"\n\nA prawda jest taka, że problem to nie hybryda. To nawyk, który wiele z nas ma.\n\nChodzi o namaczanie dłoni tuż przed wizytą. Płytka paznokcia wchłania wodę i hybryda nie może się dobrze związać.\n\n👇 Napisz TAK jeśli też myślałaś, że hybryda musi \"odpoczywać\"!",
                postLikes: "47",
                postComments: "14",
                description: "Hook: szok (80%) + pytanie (Ty też?) – podwójna siła zatrzymania"
              }
            },
            {
              id: "L3-text-5",
              type: "text",
              content: "Ten hook działa, bo łączy dwie techniki:\n\n• **Szok** – \"80%\" to statystyka, która budzi zainteresowanie\n• **Pytanie** – \"Ty też?\" angażuje osobiście\n\nCzytelnik musi sprawdzić, czy on też popełnia ten błąd. Nie może scrollować dalej, dopóki się nie dowie."
            },
            
            // --- SEKCJA 4: Hook vs clickbait ---
            {
              id: "L3-heading-4",
              type: "heading",
              content: "Hook vs clickbait – gdzie jest granica"
            },
            {
              id: "L3-text-6",
              type: "text",
              content: "Może się zastanawiasz: \"Czy hook to nie jest manipulacja?\" Gdzie granica między skutecznym hookiem a irytującym clickbaitem, który wszyscy nienawidzą?"
            },
            {
              id: "L3-text-7",
              type: "text",
              content: "Różnica jest prosta: **hook spełnia obietnicę, clickbait nie**.\n\nJeśli piszesz \"Ten błąd popełnia 80% klientek\" – treść musi opisywać ten błąd. Jeśli piszesz \"NIE UWIERZYSZ co się wydarzyło!!!\" – a treść to zwykły manicure bez żadnej historii – to clickbait."
            },
            {
              id: "L3-comparison-1",
              type: "comparison",
              content: "Hook vs Clickbait",
              comparison: {
                good: {
                  title: "Hook ✅",
                  description: "Budzi ciekawość i DOSTARCZA obiecaną wartość. Czytelnik czuje się usatysfakcjonowany po przeczytaniu.",
                  example: "\"Ten błąd kosztował mnie klientkę\" → i opisujesz konkretny błąd i czego się nauczyłaś"
                },
                bad: {
                  title: "Clickbait ❌",
                  description: "Budzi ciekawość, ale NIE dostarcza obietnicy. Czytelnik czuje się oszukany.",
                  example: "\"NIE UWIERZYSZ!!!\" → a treść to normalny post bez niczego niezwykłego"
                }
              }
            },
            {
              id: "L3-warning-1",
              type: "warning",
              content: "Clickbait może dać kliknięcia w krótkim terminie, ale niszczy zaufanie. Klientka, która czuje się oszukana, przestaje reagować na Twoje posty. A co gorsza – pamięta, że nie można Ci ufać. Hook buduje ciekawość I dostarcza wartość."
            },
            
            // --- SEKCJA 5: Bank hooków ---
            {
              id: "L3-heading-5",
              type: "heading",
              content: "Bank hooków dla beauty – gotowe szablony"
            },
            {
              id: "L3-text-8",
              type: "text",
              content: "Oto gotowe szablony hooków, które możesz adaptować do swoich tematów. Zamień [temat] na swój obszar – paznokcie, rzęsy, brwi, włosy, zabiegi na twarz. Zapisz te, które najlepiej pasują do Twojego stylu."
            },
            {
              id: "L3-example-2",
              type: "example",
              content: "**Pytania:**\n• \"Czy wiesz, że [popularny mit] to nieprawda?\"\n• \"Robisz [częsty błąd]? Sprawdź!\"\n• \"Dlaczego [problem] zdarza się nawet stałym klientkom?\"\n\n**Szok:**\n• \"Przez [X lat] robiłam ten błąd...\"\n• \"To największy mit o [temat]\"\n• \"Nie wierzę, że kiedyś tak robiłam\"\n\n**Obietnica:**\n• \"[X] sposobów na [korzyść]\"\n• \"Dzięki temu [efekt] w [czas]\"\n• \"Jak sprawić, żeby [pożądany rezultat]\"\n\n**Historia:**\n• \"Wczoraj klientka powiedziała mi...\"\n• \"Historia tej metamorfozy jest niesamowita...\"\n• \"Kiedy to zobaczyłam, musiałam się podzielić...\"\n\n**Luka:**\n• \"Jest jedna rzecz, której nigdy nie robię...\"\n• \"To zmieniło wszystko\"\n• \"Przez lata szukałam rozwiązania i...\""
            },
            {
              id: "L3-tip-2",
              type: "tip",
              content: "Stwórz sobie dokument z hookami, które zadziałały. Za każdym razem, kiedy post ma dobre wyniki, zapisz hook. Po kilku miesiącach będziesz mieć własny \"bank hooków\" dostosowany do Twojej grupy odbiorców."
            },
            
            // --- SEKCJA 6: Quiz ---
            {
              id: "L3-heading-6",
              type: "heading",
              content: "Sprawdź się"
            },
            {
              id: "L3-text-9",
              type: "text",
              content: "Piszesz post edukacyjny o pielęgnacji rzęs po przedłużaniu. Chcesz, żeby ludzie kliknęli \"więcej\" i przeczytali całość. Który hook najlepiej zatrzyma scrollowanie?"
            },
            {
              id: "L3-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Który hook zadziała najlepiej dla posta o pielęgnacji rzęs?",
                options: [
                  "\"Oto kilka porad o pielęgnacji rzęs\"",
                  "\"Twoje rzęsy wypadają? Sprawdź, czy robisz TEN błąd\"",
                  "\"Pielęgnacja rzęs jest bardzo ważna\"",
                  "\"Dzisiaj opowiem o rzęsach\""
                ],
                correctIndex: 1,
                explanation: "Ten hook łączy problem (wypadają) z rozwiązaniem (sprawdź błąd) i budzi ciekawość (jaki błąd?). Pozostałe są za ogólne, nudne lub nie dają powodu do kliknięcia \"więcej\"."
              }
            }
          ],
          tasks: [
            { id: "task-L3-1", title: "Napisz 5 hooków do jednego tematu", description: "Wybierz jeden temat (np. pielęgnacja hybrydy). Napisz 5 różnych hooków – po jednym z każdego typu: pytanie, szok, obietnica, historia, luka." },
            { id: "task-L3-2", title: "Test hooków na żywym organizmie", description: "Opublikuj post z nowym, mocnym hookiem. Porównaj wyniki (komentarze, zapisy) z poprzednimi postami o podobnym temacie." }
          ],
          checklist: [
            { id: "check-L3-1", text: "Wiem, że mam około 125 znaków na hook" },
            { id: "check-L3-2", text: "Znam 5 typów skutecznych hooków" },
            { id: "check-L3-3", text: "Rozumiem różnicę między hookiem a clickbaitem" },
            { id: "check-L3-4", text: "Mam gotowe szablony hooków do wykorzystania" }
          ],
          keyTakeaways: [
            "Hook = pierwsze 125 znaków, które decydują czy ktoś przeczyta resztę",
            "5 sprawdzonych typów: pytanie, szok, obietnica, historia, luka informacyjna",
            "Hook spełnia obietnicę – clickbait oszukuje i niszczy zaufanie",
            "Łączenie typów (np. szok + pytanie) wzmacnia efekt zatrzymania"
          ],
          nextLessonTitle: "CTA – wezwania do działania"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 4 - CTA
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "cta",
          title: "CTA – wezwania do działania",
          description: "Naucz się pisać CTA, które generują komentarze, zapisy i wiadomości.",
          estimatedMinutes: 30,
          intro: "CTA (Call to Action) to proste polecenie na końcu posta mówiące, co czytelnik ma zrobić. Bez CTA nawet świetny post kończy się na przeczytaniu – i niczym więcej. Z dobrym CTA – ludzie działają.",
          sections: [
            // --- SEKCJA 1: Dlaczego CTA ---
            {
              id: "L4-heading-1",
              type: "heading",
              content: "Dlaczego CTA jest kluczowe"
            },
            {
              id: "L4-text-1",
              type: "text",
              content: "Ludzie potrzebują wskazówek. Nawet jeśli post im się bardzo podoba, rzadko sami wpadną na pomysł, żeby skomentować lub zapisać. Potrzebują impulsu z zewnątrz.\n\nCTA mówi im: \"zrób to teraz\". Proste? Tak. Skuteczne? Bardzo."
            },
            {
              id: "L4-text-2",
              type: "text",
              content: "To nie jest manipulacja – to ułatwienie. Czytelnik nie musi się zastanawiać, co robić dalej. Ty mu to mówisz, on wykonuje, oboje jesteście zadowoleni. On dostał wartość i wie, jak zareagować. Ty dostajesz interakcję, która buduje zasięg."
            },
            {
              id: "L4-example-1",
              type: "example",
              content: "**Post bez CTA vs z CTA:**\n\n❌ **Bez CTA:** \"Hybryda nie musi odpoczywać – to mit! Ważna jest technika nakładania i jakościowe produkty.\"\n→ Ludzie czytają, kiwają głową, scrollują dalej.\n\n✅ **Z CTA:** \"Hybryda nie musi odpoczywać – to mit! Ważna jest technika nakładania i jakościowe produkty. A Ty – robisz przerwy? Napisz w komentarzu!\"\n→ Ludzie czytają, kiwają głową i piszą \"Ja nie robię!\" albo \"Myślałam, że trzeba!\""
            },
            {
              id: "L4-tip-1",
              type: "tip",
              content: "Post bez CTA to jak rozmowa, która się nagle urywa. \"No i co teraz?\" – czytelnik nie wie. CTA daje jasną kontynuację i powód do działania."
            },
            
            // --- SEKCJA 2: Zasada jednego CTA ---
            {
              id: "L4-heading-2",
              type: "heading",
              content: "Zasada jednego CTA"
            },
            {
              id: "L4-text-3",
              type: "text",
              content: "Jeden post = jedno CTA. To fundamentalna zasada, którą wielu ignoruje. Jeśli prosisz o komentarz, zapis, udostępnienie i wiadomość naraz – nikt nie zrobi nic."
            },
            {
              id: "L4-text-4",
              type: "text",
              content: "Dlaczego? Bo zbyt wiele opcji **paraliżuje**. To znane zjawisko z psychologii decyzji – kiedy mamy za dużo wyborów, nie wybieramy nic. Nasz mózg woli odłożyć decyzję \"na później\" – czyli nigdy.\n\nDaj jedną jasną opcję, a ludzie ją wykonają. Daj pięć opcji, a wykonają zero."
            },
            {
              id: "L4-warning-1",
              type: "warning",
              content: "Nie: \"Skomentuj, zapisz, udostępnij i napisz wiadomość!\"\nTak: \"Napisz w komentarzu 💅\"\n\nJedna akcja. Jasna. Prosta. Wykonywalna."
            },
            
            // --- SEKCJA 3: 4 typy CTA ---
            {
              id: "L4-heading-3",
              type: "heading",
              content: "4 typy CTA dla różnych celów"
            },
            {
              id: "L4-text-5",
              type: "text",
              content: "Każdy cel wymaga innego CTA. Dobierz wezwanie do tego, co chcesz osiągnąć postem. Nie każdy post musi generować komentarze – czasem zależy Ci na zapisach albo wiadomościach."
            },
            {
              id: "L4-step-1",
              type: "step",
              stepNumber: 1,
              content: "**CTA NA KOMENTARZ** – Cel: zaangażowanie, zasięg algorytmu. Komentarze sygnalizują algorytmowi, że post jest wartościowy.\n\nPrzykłady:\n• \"Napisz w komentarzu 💅\"\n• \"A Ty jak dbasz o paznokcie? Podziel się!\"\n• \"Która opcja – 1 czy 2?\"\n• \"Zgadzasz się? Napisz TAK lub NIE\""
            },
            {
              id: "L4-step-2",
              type: "step",
              stepNumber: 2,
              content: "**CTA NA ZAPIS** – Cel: budowanie wartości posta. Zapisy to sygnał, że treść jest na tyle wartościowa, że ktoś chce do niej wrócić.\n\nPrzykłady:\n• \"Zapisz na później!\"\n• \"Zapisz, żeby nie zapomnieć\"\n• \"Ta lista przyda Ci się przed wizytą – zapisz!\"\n• \"Wróć do tego posta kiedy będziesz potrzebować\""
            },
            {
              id: "L4-step-3",
              type: "step",
              stepNumber: 3,
              content: "**CTA NA WIADOMOŚĆ** – Cel: konwersja, umówienie wizyty. To najbardziej bezpośrednia droga do nowej klientki.\n\nPrzykłady:\n• \"Napisz DM z hasłem PAZNOKCIE\"\n• \"Zostaw ❤️ w komentarzu – napiszę do Ciebie\"\n• \"Wolne terminy – pisz DM!\"\n• \"Masz pytanie? Napisz mi\""
            },
            {
              id: "L4-step-4",
              type: "step",
              stepNumber: 4,
              content: "**CTA NA UDOSTĘPNIENIE** – Cel: większy zasięg organiczny. Udostępnienia to najcenniejsza forma interakcji.\n\nPrzykłady:\n• \"Oznacz koleżankę, która to musi zobaczyć!\"\n• \"Wyślij przyjaciółce!\"\n• \"Udostępnij komuś, kto potrzebuje tych porad\"\n• \"Taka informacja przydałaby się Twojej siostrze?\""
            },
            
            // --- SEKCJA 4: Niski vs wysoki próg ---
            {
              id: "L4-heading-4",
              type: "heading",
              content: "Niski vs wysoki próg – co wybrać"
            },
            {
              id: "L4-text-6",
              type: "text",
              content: "CTA może mieć niski lub wysoki próg wejścia. To wpływa na liczbę i jakość reakcji."
            },
            {
              id: "L4-text-7",
              type: "text",
              content: "**Niski próg** = łatwe do wykonania. \"Napisz 💅\", \"Zostaw ❤️\". Wymaga minimalnego wysiłku – jeden klik lub jeden znak. Efekt: więcej reakcji, ale mniej wartościowych (w sensie informacji od odbiorców).\n\n**Wysoki próg** = wymaga więcej. \"Opisz swój problem\", \"Podziel się historią\". Efekt: mniej reakcji, ale bardziej zaangażowane, dające Ci cenne informacje o odbiorcach."
            },
            {
              id: "L4-example-2",
              type: "example",
              content: "**Niski próg (łatwe do wykonania):**\n• \"Napisz 💅 w komentarzu\"\n• \"Zostaw ❤️ jeśli się zgadzasz\"\n• \"Napisz 1 lub 2\"\n• \"Tap serduszko jeśli chcesz więcej takich postów\"\n\n**Wysoki próg (wymaga więcej):**\n• \"Napisz swoją opinię w komentarzu\"\n• \"Opisz swój problem z hybrydą\"\n• \"Podziel się swoją historią\"\n• \"Co myślisz? Daj mi znać w komentarzu\""
            },
            {
              id: "L4-text-8",
              type: "text",
              content: "Dobór zależy od celu. Chcesz dużo komentarzy dla algorytmu? Niski próg – emoji wystarczą. Chcesz poznać opinie klientek i zebrać materiał na kolejne posty? Wysoki próg – poproś o rozwiniętą odpowiedź."
            },
            {
              id: "L4-tip-2",
              type: "tip",
              content: "Na początek używaj niskiego progu – buduje nawyk komentowania. Kiedy masz zaangażowaną społeczność, możesz czasem wrzucić wysoki próg i zebrać wartościowe odpowiedzi."
            },
            
            // --- SEKCJA 5: CTA w akcji ---
            {
              id: "L4-heading-5",
              type: "heading",
              content: "CTA w praktyce"
            },
            {
              id: "L4-text-9",
              type: "text",
              content: "Zobaczmy post z CTA niskiego progu – prośba o numer. Minimalne wymaganie, maksymalna liczba odpowiedzi."
            },
            {
              id: "L4-mockup-1",
              type: "mockup",
              content: "CTA niskiego progu w akcji:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "3 rzeczy, które niszczą Twoje paznokcie 💔\n\n1️⃣ Odrywanie hybrydy (najgorsze!)\n2️⃣ Brak olejku do skórek\n3️⃣ Zbyt rzadkie uzupełnienia\n\nPrzyznaj się – robisz którąś z nich? 😅\n\nNapisz numer w komentarzu! 👇",
                postLikes: "31",
                postComments: "18",
                description: "CTA: 'napisz numer' – minimalny wysiłek, dużo odpowiedzi"
              }
            },
            {
              id: "L4-text-10",
              type: "text",
              content: "Zauważ: CTA jest związane z treścią. Post mówi o 3 błędach, CTA prosi o napisanie numeru błędu. To logiczne połączenie sprawia, że odpowiedź jest naturalna, nie wymuszona."
            },
            
            // --- SEKCJA 6: Quiz ---
            {
              id: "L4-heading-6",
              type: "heading",
              content: "Sprawdź się"
            },
            {
              id: "L4-text-11",
              type: "text",
              content: "Masz post edukacyjny o 5 sposobach pielęgnacji hybrydy w domu. To wartościowa lista, którą klientki mogą stosować między wizytami. Jaki cel ma sens i jakie CTA wybrać?"
            },
            {
              id: "L4-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Post edukacyjny o pielęgnacji – które CTA najlepsze?",
                options: [
                  "\"Skomentuj, zapisz, udostępnij i napisz wiadomość!\"",
                  "\"Zapisz ten post, żeby mieć tę listę pod ręką!\"",
                  "\"Napisz dowolny komentarz\"",
                  "\"Link w bio\""
                ],
                correctIndex: 1,
                explanation: "Post edukacyjny z listą naturalnie zachęca do zapisu – to treść, do której warto wrócić. CTA jest jasne, pasuje do treści i daje konkretną korzyść (\"mieć pod ręką\"). Zbyt wiele opcji paraliżuje, a \"link w bio\" nie ma związku z treścią."
              }
            }
          ],
          tasks: [
            { id: "task-L4-1", title: "Napisz 4 wersje CTA do jednego posta", description: "Wybierz jeden post. Napisz 4 różne CTA: na komentarz, zapis, wiadomość i udostępnienie. Oceń, które najlepiej pasuje do treści." },
            { id: "task-L4-2", title: "Test CTA A/B", description: "Opublikuj dwa podobne posty z różnymi CTA (np. niski vs wysoki próg). Porównaj wyniki po 24h." }
          ],
          checklist: [
            { id: "check-L4-1", text: "Wiem, że jeden post = jedno CTA" },
            { id: "check-L4-2", text: "Znam 4 typy CTA dla różnych celów" },
            { id: "check-L4-3", text: "Rozumiem różnicę między niskim a wysokim progiem" },
            { id: "check-L4-4", text: "Dobieram CTA do celu i treści posta" }
          ],
          keyTakeaways: [
            "CTA mówi czytelnikowi, co ma zrobić – bez niego nie zrobi nic",
            "Jeden post = jedno CTA – zbyt wiele opcji paraliżuje i daje zero reakcji",
            "4 typy: komentarz, zapis, wiadomość, udostępnienie – każdy ma swój cel",
            "Niski próg = więcej reakcji, wysoki próg = bardziej zaangażowane reakcje"
          ],
          nextLessonTitle: "Storytelling – opowiadanie historii"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 5 - STORYTELLING
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "storytelling",
          title: "Storytelling – opowiadanie historii",
          description: "Naucz się pisać angażujące historie z życia salonu.",
          estimatedMinutes: 35,
          intro: "Historie angażują silniej niż suche fakty. Mózg ludzki jest zaprogramowany do słuchania opowieści – tak uczyliśmy się przez tysiące lat, przy ogniskach. Social media to współczesne ognisko, a Ty możesz być opowiadaczką.",
          sections: [
            // --- SEKCJA 1: Dlaczego historie działają ---
            {
              id: "L5-heading-1",
              type: "heading",
              content: "Dlaczego historie działają lepiej niż fakty"
            },
            {
              id: "L5-text-1",
              type: "text",
              content: "Kiedy słyszysz historię, Twój mózg aktywuje te same obszary, jakbyś sam ją przeżywał. To nie jest metafora – badania neuroobrazowe to potwierdzają. Dlatego ludzie płaczą na filmach i stresują się książkami, mimo że wiedzą, że to fikcja."
            },
            {
              id: "L5-text-2",
              type: "text",
              content: "W praktyce oznacza to, że post z historią klientki angażuje bardziej niż post z suchą informacją. Czytelnik utożsamia się z bohaterką. Myśli: \"To mogłabym być ja!\", \"Mam dokładnie ten sam problem!\", \"Ciekawe, jak to się skończyło...\"\n\nTe emocjonalne reakcje przekładają się na dłuższy czas spędzony na poście, komentarze i zapisy – czyli dokładnie to, czego szuka algorytm."
            },
            {
              id: "L5-example-1",
              type: "example",
              content: "**Suche fakty vs historia:**\n\n❌ **Fakty:** \"Hybryda może trzymać 3-4 tygodnie przy odpowiedniej pielęgnacji. Ważne jest używanie olejku i unikanie namaczania.\"\n\n✅ **Historia:** \"Kasia przyszła do mnie zrezygnowana. 'U nikogo hybryda mi nie trzyma, może mam jakieś dziwne paznokcie?' Okazało się, że przed każdą wizytą moczyła dłonie w wannie. Po jednej zmianie – jej hybryda trzyma już 4 tygodnie!\"\n\nTa sama informacja, ale historia buduje emocje i zapada w pamięć."
            },
            {
              id: "L5-tip-1",
              type: "tip",
              content: "Historia nie musi być dramatyczna ani skomplikowana. Wystarczy prosty schemat: problem → rozwiązanie → efekt. To naturalna struktura, którą mózg rozumie i pamięta od tysięcy lat."
            },
            
            // --- SEKCJA 2: Struktura mini-historii ---
            {
              id: "L5-heading-2",
              type: "heading",
              content: "Struktura mini-historii w 4 krokach"
            },
            {
              id: "L5-text-3",
              type: "text",
              content: "Nie musisz pisać powieści. Historia w poście to 4-6 zdań. Ale te zdania muszą mieć strukturę, żeby działały. Oto schemat, który możesz stosować za każdym razem:"
            },
            {
              id: "L5-step-1",
              type: "step",
              stepNumber: 1,
              content: "**BOHATER** – Kto jest w centrum historii? Klientka, Ty sama, albo obserwująca. Musi być ktoś konkretny, z kim czytelnik może się utożsamić. \"Klientka\" jest lepsza niż \"ludzie\". \"Ania, która boi się o swoje paznokcie\" jest jeszcze lepsza."
            },
            {
              id: "L5-step-2",
              type: "step",
              stepNumber: 2,
              content: "**PROBLEM/WYZWANIE** – Co było złe? Słabe paznokcie, brak czasu, złe doświadczenia z innym salonem, strach przed zabiegiem? Problem buduje napięcie i sprawia, że chcemy poznać rozwiązanie."
            },
            {
              id: "L5-step-3",
              type: "step",
              stepNumber: 3,
              content: "**ROZWIĄZANIE/PRZEMIANA** – Co się zmieniło? Twoja metoda, nowy produkt, zmiana nawyku, edukacja? To moment przełomowy w historii – punkt, w którym sytuacja zaczyna się zmieniać."
            },
            {
              id: "L5-step-4",
              type: "step",
              stepNumber: 4,
              content: "**EFEKT/HAPPY END** – Jak wygląda sytuacja teraz? Konkretny, widoczny rezultat. \"Teraz hybryda trzyma 4 tygodnie\", \"Wróciła z uśmiechem\", \"Już nie boi się przedłużania\". To satysfakcjonujące zakończenie."
            },
            {
              id: "L5-text-4",
              type: "text",
              content: "Ten schemat jest uniwersalny. Działa dla metamorfoz klientek, dla Twoich własnych doświadczeń, dla historii z życia salonu. Wystarczy go wypełnić konkretnymi szczegółami."
            },
            
            // --- SEKCJA 3: Przykład w praktyce ---
            {
              id: "L5-heading-3",
              type: "heading",
              content: "Historia w praktyce"
            },
            {
              id: "L5-text-5",
              type: "text",
              content: "Zobaczmy, jak ten schemat wygląda w gotowym poście. Każdy element jest na swoim miejscu."
            },
            {
              id: "L5-mockup-1",
              type: "mockup",
              content: "Post z historią metamorfozy:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "Ania przyszła do mnie ze łzami w oczach... 😢\n\n\"Moje paznokcie są nie do uratowania. Przez lata je niszczyłam odrywaniem hybrydy.\"\n\nPowiedziałam jej: daj mi 3 miesiące.\n\nWiecie co? Spójrzcie na to zdjęcie! 💅✨\n\n3 miesiące regularnych wizyt, olejek co wieczór i zero odrywania.\n\nMorał? Nie ma paznokci 'nie do uratowania'. Są tylko paznokcie, które jeszcze nie trafiły na kogoś, kto się nimi zajmie.\n\nZnacie kogoś z podobnym problemem? Oznaczcie ją! 👇",
                postLikes: "52",
                postComments: "15",
                description: "Bohater → Problem → Rozwiązanie → Efekt → Morał → CTA"
              }
            },
            {
              id: "L5-text-6",
              type: "text",
              content: "Przeanalizujmy elementy:\n\n• **Bohater:** Ania (konkretne imię)\n• **Problem:** Zniszczone paznokcie, łzy, poczucie beznadziejności\n• **Rozwiązanie:** 3 miesiące regularnej pracy\n• **Efekt:** Piękne paznokcie (pokazane na zdjęciu)\n• **Morał:** Uniwersalna lekcja (\"nie ma niemożliwych\")\n• **CTA:** Oznacz kogoś podobnego\n\nPełna struktura w kilku zdaniach. Historia jest krótka, ale kompletna."
            },
            
            // --- SEKCJA 4: Skąd brać historie ---
            {
              id: "L5-heading-4",
              type: "heading",
              content: "Skąd brać historie do postów"
            },
            {
              id: "L5-text-7",
              type: "text",
              content: "\"Nie mam ciekawych historii\" – to najczęstsza wymówka. Ale prawda jest taka, że masz ich dziesiątki każdego tygodnia. Po prostu nie myślisz o nich jako o \"historiach\", bo wydają się zwyczajne."
            },
            {
              id: "L5-text-8",
              type: "text",
              content: "Każda klientka, która przychodzi do salonu, ma jakąś historię. Każdy problem, który rozwiązujesz, to potencjalny post. Każde Twoje doświadczenie – dobre lub złe – może uczyć innych."
            },
            {
              id: "L5-example-2",
              type: "example",
              content: "**5 źródeł historii w Twoim salonie:**\n\n📌 **Metamorfozy** – Przed i po. Zmiana. Efekt pracy. \"Przyszła z paznokciami po samodzielnym ściąganiu, wyszła z...\"\n\n📌 **Pytania klientek** – \"Czy hybryda niszczy paznokcie?\" → post obalający mit z historią konkretnej klientki.\n\n📌 **Wyzwania** – Trudny przypadek, który udało się rozwiązać. \"Nikt nie chciał się tego podjąć, ale...\"\n\n📌 **Własne doświadczenia** – Błędy, które popełniałaś. Czego się nauczyłaś. Jak się rozwijałaś.\n\n📌 **Kulisy** – Dlaczego wybrałaś ten zawód? Jak wyglądały początki? Co Cię motywuje?"
            },
            {
              id: "L5-tip-2",
              type: "tip",
              content: "Pytaj klientki, czy możesz opisać ich historię (oczywiście anonimowo lub za zgodą na imię). Większość chętnie się zgodzi – to dla nich komplement. A Ty dostajesz autentyczny materiał."
            },
            
            // --- SEKCJA 5: Autentyczność ---
            {
              id: "L5-heading-5",
              type: "heading",
              content: "Autentyczność – fundament dobrej historii"
            },
            {
              id: "L5-text-9",
              type: "text",
              content: "Historia musi być prawdziwa. Ludzie wyczuwają fałsz – może nie potrafią wskazać, co jest nie tak, ale czują, że coś nie gra. Wymyślone historie brzmią sztucznie, nawet jeśli są \"lepsze dramaturgicznie\"."
            },
            {
              id: "L5-text-10",
              type: "text",
              content: "Nie musisz upiększać. Surowe, prawdziwe historie działają lepiej niż wyreżyserowane. \"Zdenerwowałam się, bo nie wyszło jak chciałam\" jest bardziej wiarygodne niż \"wszystko zawsze wychodzi perfekcyjnie\".\n\nLudzie chcą widzieć prawdziwego człowieka, nie wyidealizowany obraz. Twoje błędy i wyzwania budują więź silniej niż same sukcesy."
            },
            {
              id: "L5-warning-1",
              type: "warning",
              content: "Nigdy nie publikuj zdjęć ani historii klientek bez ich zgody. Nawet anonimowo – jeśli klientka się pozna, stracisz jej zaufanie. Zawsze pytaj. Większość powie \"tak\", ale ta jedna, która powie \"nie\", może Ci zaoszczędzić problemów."
            },
            
            // --- SEKCJA 6: Częste błędy ---
            {
              id: "L5-heading-6",
              type: "heading",
              content: "Błędy w storytellingu"
            },
            {
              id: "L5-text-11",
              type: "text",
              content: "Kilka pułapek, w które łatwo wpaść:"
            },
            {
              id: "L5-text-12",
              type: "text",
              content: "• **Za długie wprowadzenie** – \"Wczoraj rano wstałam, wypiłam kawę, poszłam do salonu, włączyłam muzykę...\" Skracaj! Zacznij od sedna.\n\n• **Brak problemu** – \"Klientka przyszła, zrobiłam manicure, wyszło ładnie.\" To nie historia, to relacja. Historia potrzebuje napięcia.\n\n• **Brak konkretów** – \"Jakaś klientka miała jakiś problem.\" Konkretne szczegóły budują wiarygodność.\n\n• **Wszystko o Tobie** – Bohaterką powinien być czytelnik lub klientka. Ty jesteś przewodnikiem, nie gwiazdą."
            },
            
            // --- SEKCJA 7: Quiz ---
            {
              id: "L5-heading-7",
              type: "heading",
              content: "Sprawdź się"
            },
            {
              id: "L5-text-13",
              type: "text",
              content: "Masz zdjęcie pięknego manicure klientki, która przyszła z bardzo zniszczonymi paznokciami po samodzielnym ściąganiu hybrydy. Jak opowiedzieć tę historię?"
            },
            {
              id: "L5-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Która wersja to pełna mini-historia?",
                options: [
                  "\"Piękny efekt po dzisiejszym zabiegu! 💅\"",
                  "\"Kasia przyszła zrezygnowana – myślała, że nic się nie da zrobić. 3 miesiące później – patrz na efekt!\"",
                  "\"Manicure hybrydowy, kolor nr 45, czas: 1.5h\"",
                  "\"Kolejna zadowolona klientka!\""
                ],
                correctIndex: 1,
                explanation: "Ta wersja ma wszystkie elementy: bohater (Kasia), problem (zrezygnowana, myślała że beznadziejne), przemiana (3 miesiące pracy) i efekt (zdjęcie). Pozostałe to albo suche fakty, albo brak historii."
              }
            }
          ],
          tasks: [
            { id: "task-L5-1", title: "Napisz 3 mini-historie", description: "Przypomnij sobie 3 klientki z ciekawą historią (metamorfoza, problem, wyzwanie). Napisz mini-post o każdej według struktury: bohater → problem → rozwiązanie → efekt." },
            { id: "task-L5-2", title: "Bank historii", description: "Przez tydzień zapisuj ciekawe sytuacje z salonu – pytania klientek, metamorfozy, nieoczekiwane reakcje. To Twój bank treści na posty." }
          ],
          checklist: [
            { id: "check-L5-1", text: "Znam strukturę: bohater → problem → rozwiązanie → efekt" },
            { id: "check-L5-2", text: "Wiem, skąd brać historie do postów (5 źródeł)" },
            { id: "check-L5-3", text: "Rozumiem znaczenie autentyczności" },
            { id: "check-L5-4", text: "Pytam klientki o zgodę na publikację ich historii" }
          ],
          keyTakeaways: [
            "Historie angażują mózg silniej niż suche fakty – aktywują emocje i pamięć",
            "Struktura: bohater → problem → rozwiązanie → efekt – prosta i uniwersalna",
            "5 źródeł historii: metamorfozy, pytania klientek, wyzwania, własne doświadczenia, kulisy",
            "Autentyczność jest kluczowa – fałsz się czuje, nawet jeśli nie można go wskazać"
          ],
          nextLessonTitle: "Typy postów i ich zastosowanie"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 6 - TYPY POSTÓW
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "typy-postow",
          title: "Typy postów i ich zastosowanie",
          description: "Poznaj różne formaty postów i kiedy je stosować.",
          estimatedMinutes: 30,
          intro: "Nie każdy post musi być taki sam. Różne cele wymagają różnych formatów. Profil złożony tylko ze zdjęć prac z podpisem \"efekt zabiegu\" szybko staje się nudny – obserwujące przestają reagować. Różnorodność utrzymuje zainteresowanie.",
          sections: [
            // --- SEKCJA 1: Dlaczego różnorodność ---
            {
              id: "L6-heading-1",
              type: "heading",
              content: "Dlaczego różnorodność jest ważna"
            },
            {
              id: "L6-text-1",
              type: "text",
              content: "Wyobraź sobie restaurację, która serwuje tylko jedno danie. Nawet jeśli jest pyszne, po kilku wizytach znudzisz się i pójdziesz gdzie indziej.\n\nTwój profil na Instagramie działa tak samo. Profil złożony wyłącznie ze zdjęć paznokci z podpisem \"dzisiejszy efekt 💅\" staje się przewidywalny. Obserwujące wiedzą czego się spodziewać – więc przestają zwracać uwagę."
            },
            {
              id: "L6-text-2",
              type: "text",
              content: "Różnorodność utrzymuje zainteresowanie. Jeden dzień post edukacyjny, drugi metamorfoza z historią, trzeci kulisy z przygotowania salonu. Każdy format przyciąga inne osoby i generuje inne akcje.\n\nNiektórzy lubią się uczyć (posty edukacyjne). Inni kochają emocje (historie). Jeszcze inni chcą Cię poznać jako osobę (kulisy). Mieszając formaty, docierasz do wszystkich."
            },
            {
              id: "L6-tip-1",
              type: "tip",
              content: "Zasada 4:1 – na 4 posty wartościowe (edukacja, inspiracja, historia) przypada 1 post promocyjny (wolne terminy, oferta). Nikt nie lubi profilu, który tylko sprzedaje. Dawaj wartość, a sprzedaż przyjdzie naturalnie."
            },
            
            // --- SEKCJA 2: Post portfolio ---
            {
              id: "L6-heading-2",
              type: "heading",
              content: "Post portfolio (efekt pracy)"
            },
            {
              id: "L6-text-3",
              type: "text",
              content: "To podstawa profilu beauty – zdjęcia Twoich prac. Pokazujesz umiejętności, style, jakość. Ale nawet post portfolio może mieć lepszy tekst niż samo emoji.\n\nZamiast \"Dzisiejszy manicure 💅\", dodaj kontekst. Jaki to kolor i do czego pasuje? Na jaką okazję klientka go wybrała? Dla kogo polecasz ten styl? Daj obserwującym powód do reakcji."
            },
            {
              id: "L6-comparison-1",
              type: "comparison",
              content: "Post portfolio",
              comparison: {
                good: {
                  title: "Lepszy post portfolio ✅",
                  description: "Kontekst, historia, pytanie do obserwujących",
                  example: "Kolor idealny na jesienne wesele 🍂\n\nKlientka miała sukienkę w kolorze burgundu i chciała coś eleganckiego, ale nie nudnego.\n\nCzy Wam też podoba się ta kombinacja? 👇"
                },
                bad: {
                  title: "Zwykły post portfolio ❌",
                  description: "Tylko emoji, zero kontekstu",
                  example: "Efekt po zabiegu 💅✨"
                }
              }
            },
            {
              id: "L6-text-4",
              type: "text",
              content: "Oba posty pokazują tę samą pracę. Ale pierwszy daje powód do komentarza (pytanie), buduje relację (historia klientki) i pozycjonuje Cię jako eksperta (doradzasz kolor do okazji)."
            },
            
            // --- SEKCJA 3: Post edukacyjny ---
            {
              id: "L6-heading-3",
              type: "heading",
              content: "Post edukacyjny"
            },
            {
              id: "L6-text-5",
              type: "text",
              content: "Dzielisz się wiedzą – obalasz mity, dajesz porady, tłumaczysz zagadnienia. Ten typ posta buduje Twój wizerunek eksperta i generuje dużo zapisów, bo ludzie chcą wracać do wartościowych informacji."
            },
            {
              id: "L6-text-6",
              type: "text",
              content: "Posty edukacyjne to Twój \"evergreen content\" – działają długo po publikacji. Ktoś wpisuje w Google \"dlaczego hybryda odpada\" – i trafia na Twój post. Ktoś szuka porad – zapisuje Twój post na później. Ta treść pracuje dla Ciebie przez miesiące."
            },
            {
              id: "L6-mockup-1",
              type: "mockup",
              content: "Przykład posta edukacyjnego:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "3 błędy, które skracają trwałość hybrydy 💅\n\n❌ Namaczanie dłoni tuż przed wizytą\nPłytka wchłania wodę i hybryda nie może się dobrze związać.\n\n❌ Używanie kremów z olejkami przed manicure\nOlejek tworzy warstwę, która przeszkadza w przyleganiu.\n\n❌ Odrywanie odchodzącej hybrydy\nNiszczy płytkę i sprawia, że kolejne hybrydy trzymają coraz gorzej.\n\nKtóry błąd popełniasz? Przyznaj się! 😅\n\n📌 Zapisz na później!",
                postLikes: "45",
                postComments: "13",
                description: "Wartość edukacyjna + konkretne wyjaśnienia + CTA na komentarz i zapis"
              }
            },
            
            // --- SEKCJA 4: Post z historią ---
            {
              id: "L6-heading-4",
              type: "heading",
              content: "Post z historią"
            },
            {
              id: "L6-text-7",
              type: "text",
              content: "Opowiadasz historię klientki, swoją własną lub z życia salonu. Ten format buduje emocjonalne połączenie i generuje komentarze, bo ludzie chcą dzielić się swoimi doświadczeniami.\n\nJuż wiesz, jak pisać mini-historie (poprzednia lekcja). Teraz używaj tego formatu regularnie – np. raz w tygodniu \"historia klientki\" lub \"za kulisami tej metamorfozy\"."
            },
            {
              id: "L6-text-8",
              type: "text",
              content: "Posty z historiami wyróżniają Cię spośród setek podobnych profili, które publikują tylko zdjęcia. One pokazują Twoje prace. Ty pokazujesz prace PLUS ludzi za nimi. To buduje zupełnie inną więź z obserwującymi."
            },
            
            // --- SEKCJA 5: Post kulisowy ---
            {
              id: "L6-heading-5",
              type: "heading",
              content: "Post kulisowy"
            },
            {
              id: "L6-text-9",
              type: "text",
              content: "Pokazujesz życie za kulisami: przygotowanie salonu rano, nowe produkty, Twoją codzienność, stanowisko pracy. Ten format buduje autentyczność i poczucie znajomości – ludzie czują, że Cię znają, zanim przyjdą na wizytę."
            },
            {
              id: "L6-example-1",
              type: "example",
              content: "**Przykłady postów kulisowych:**\n\n☕ \"Poranek w salonie – tak wygląda moje stanowisko przed pierwszą klientką. Kawa, muzyka, spokój.\"\n\n📦 \"Nowa dostawa! Rozpakowanie paczki z nowościami – zgadnijcie, co zamówiłam!\"\n\n📸 \"Za kulisami sesji zdjęciowej do portfolio. Wiecie, ile prób potrzeba na jedno idealne zdjęcie?\"\n\n💭 \"Dlaczego wybrałam ten zawód? Historia sprzed 5 lat...\"\n\n🧹 \"Sobotnie porządki. Organizacja szuflad daje mi satysfakcję równie dużą co udany manicure!\""
            },
            {
              id: "L6-text-10",
              type: "text",
              content: "Posty kulisowe działają szczególnie dobrze na Stories, ale świetnie sprawdzają się też jako posty na feed. Pokazują, że za profilem jest prawdziwy człowiek, nie robot publikujący zdjęcia."
            },
            
            // --- SEKCJA 6: Post promocyjny ---
            {
              id: "L6-heading-6",
              type: "heading",
              content: "Post promocyjny"
            },
            {
              id: "L6-text-11",
              type: "text",
              content: "Ogłaszasz wolne terminy, nową usługę, promocję. Ten format bezpośrednio prowadzi do umówienia wizyty – ale używaj go z umiarem.\n\nPost promocyjny działa najlepiej, kiedy wcześniej zbudowałaś wartość i relację. Ludzie kupują od tych, których lubią i którym ufają. Jeśli Twój profil to same \"wolne terminy!\", nie budujesz ani jednego, ani drugiego."
            },
            {
              id: "L6-warning-1",
              type: "warning",
              content: "Nie więcej niż 1 post promocyjny na 4-5 postów wartościowych. Profil pełen \"wolne terminy!\" i \"promocja!\" odstrasza. Ludzie przychodzą po wartość, inspirację, rozrywkę – nie po reklamy. Dawaj im to, czego szukają, a sprzedaż przyjdzie naturalnie."
            },
            {
              id: "L6-text-12",
              type: "text",
              content: "Kiedy już publikujesz post promocyjny, nie bądź sucha. \"Wolne terminy w tym tygodniu!\" można napisać lepiej:\n\n\"Zostało mi kilka okienek w tym tygodniu – idealna okazja na jesienną metamorfozę 🍂 Kto chce?\""
            },
            
            // --- SEKCJA 7: Planowanie ---
            {
              id: "L6-heading-7",
              type: "heading",
              content: "Jak mieszać formaty – przykładowy tydzień"
            },
            {
              id: "L6-text-13",
              type: "text",
              content: "Oto przykład, jak może wyglądać tydzień postów z różnymi formatami:"
            },
            {
              id: "L6-example-2",
              type: "example",
              content: "**Przykładowy tydzień:**\n\n📅 **Poniedziałek:** Post portfolio z kontekstem\n\"Kolor tygodnia – bordowy ideał na jesień\"\n\n📅 **Wtorek:** Post edukacyjny\n\"3 sposoby, żeby skórki wyglądały idealnie między wizytami\"\n\n📅 **Środa:** Post z historią\n\"Historia Kasi, która myślała, że paznokcie są nie do uratowania\"\n\n📅 **Czwartek:** Post kulisowy\n\"Za kulisami – tak przygotowuję się do metamorfoz\"\n\n📅 **Piątek:** Post promocyjny\n\"Wolne terminy w przyszłym tygodniu – kto pierwszy?\"\n\n5 postów, 5 różnych formatów, jedna spójność."
            },
            
            // --- SEKCJA 8: Quiz ---
            {
              id: "L6-heading-8",
              type: "heading",
              content: "Sprawdź się"
            },
            {
              id: "L6-text-14",
              type: "text",
              content: "Masz nowy lakier hybrydowy, który świetnie się sprawdza – kolor jest piękny i trwałość niesamowita. Chcesz go pokazać obserwującym. Jaki typ posta najlepiej go zaprezentuje?"
            },
            {
              id: "L6-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Chcesz pokazać nowy, świetny lakier – który format wybierasz?",
                options: [
                  "Tylko post promocyjny – \"Nowy kolor! Umów się!\"",
                  "Post portfolio z historią – klientka wybrała ten kolor, bo...",
                  "Post tylko ze zdjęciem bez opisu",
                  "Post z pełnym cennikiem wszystkich usług"
                ],
                correctIndex: 1,
                explanation: "Post portfolio z historią łączy pokazanie pracy z angażującą treścią. Sam post promocyjny brzmi jak reklama i nie buduje relacji. Historia daje kontekst i powód do zaangażowania."
              }
            }
          ],
          tasks: [
            { id: "task-L6-1", title: "Zaplanuj tydzień postów", description: "Rozpisz 5 postów na tydzień. Użyj różnych formatów: portfolio, edukacyjny, historia, kulisy, promocja. Sprawdź, czy zachowujesz proporcję 4:1." },
            { id: "task-L6-2", title: "Przekształć stary post", description: "Znajdź stary post portfolio z samym emoji. Przepisz go jako post z historią lub jako post edukacyjny." }
          ],
          checklist: [
            { id: "check-L6-1", text: "Znam główne typy postów: portfolio, edukacyjny, historia, kulisy, promocyjny" },
            { id: "check-L6-2", text: "Rozumiem zasadę 4:1 (wartość vs promocja)" },
            { id: "check-L6-3", text: "Potrafię pisać lepsze podpisy do postów portfolio" },
            { id: "check-L6-4", text: "Planuję różnorodne treści na profilu" }
          ],
          keyTakeaways: [
            "Różnorodność utrzymuje zainteresowanie – monotonny profil nudzi obserwujące",
            "5 typów: portfolio, edukacyjny, historia, kulisy, promocyjny – każdy ma swoją funkcję",
            "Zasada 4:1 – na 4 wartościowe 1 promocyjny – dawaj wartość, nie sprzedawaj non-stop",
            "Nawet post portfolio może mieć angażujący tekst z kontekstem i pytaniem"
          ],
          nextLessonTitle: "Zakończenia postów – stopki i kontakt"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 7 - ZAKOŃCZENIA POSTÓW
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "zakonczenia-postow",
          title: "Zakończenia postów – stopki i kontakt",
          description: "Naucz się profesjonalnie kończyć posty, dodawać dane kontaktowe i podpisy.",
          estimatedMinutes: 25,
          intro: "Koniec posta to nie tylko CTA. To też miejsce na dane kontaktowe, linki i podpis. Dobrze zaprojektowana \"stopka\" ułatwia klientkom kontakt i buduje profesjonalny wizerunek. Źle zaprojektowana – wygląda jak spam.",
          sections: [
            // --- SEKCJA 1: Co to stopka ---
            {
              id: "L7-heading-1",
              type: "heading",
              content: "Czym jest stopka posta"
            },
            {
              id: "L7-text-1",
              type: "text",
              content: "Stopka to dolna część posta, która pojawia się po głównej treści i CTA. To miejsce, gdzie podajesz informacje kontaktowe, oznaczasz lokalizację lub dodajesz hashtagi.\n\nNie każdy post wymaga pełnej stopki. Post edukacyjny o pielęgnacji paznokci nie potrzebuje numeru telefonu. Ale post z wolnymi terminami powinien jasno mówić: jak się ze mną skontaktować?"
            },
            {
              id: "L7-text-2",
              type: "text",
              content: "Stopka to kompromis. Z jednej strony chcesz dać wszystkie potrzebne informacje. Z drugiej – zbyt długa stopka wygląda jak spam i odstrasza. Cel: 2-3 linijki maksymalnie, tylko najważniejsze informacje."
            },
            {
              id: "L7-tip-1",
              type: "tip",
              content: "Stopka powinna być krótka i czytelna. Jeśli Twoja stopka jest dłuższa niż główna treść posta – coś jest nie tak. Skracaj bezlitośnie."
            },
            
            // --- SEKCJA 2: Elementy stopki ---
            {
              id: "L7-heading-2",
              type: "heading",
              content: "Elementy skutecznej stopki"
            },
            {
              id: "L7-text-3",
              type: "text",
              content: "Dobra stopka ma jasną strukturę. Oto elementy, które możesz używać – ale wybierz tylko 2-3 najbardziej odpowiednie dla danego posta, nie wszystkie naraz."
            },
            {
              id: "L7-step-1",
              type: "step",
              stepNumber: 1,
              content: "**LOKALIZACJA** – Gdzie jest salon? \"📍 Warszawa, Mokotów\" lub \"📍 ul. Puławska 123\". Pomaga klientkom z okolicy Cię znaleźć w wyszukiwaniach lokalnych."
            },
            {
              id: "L7-step-2",
              type: "step",
              stepNumber: 2,
              content: "**SPOSÓB KONTAKTU** – \"Zapisz się przez DM\", \"Link w bio\", \"📞 123-456-789\". Jasna instrukcja, co zrobić, żeby się umówić. Jedna metoda, nie pięć."
            },
            {
              id: "L7-step-3",
              type: "step",
              stepNumber: 3,
              content: "**HASHTAGI** – 2-5 hashtagów związanych z treścią i lokalizacją. \"#paznokcieMokotów #manicureWarszawa\". Pomagają w odkrywalności, ale bez przesady – 30 hashtagów to spam."
            },
            {
              id: "L7-step-4",
              type: "step",
              stepNumber: 4,
              content: "**PODPIS** – Twoje imię lub nazwa salonu. Buduje rozpoznawalność. \"— Asia z Beauty Nails\" lub po prostu \"— Asia 💅\". Ludzki akcent na koniec."
            },
            
            // --- SEKCJA 3: Warianty stopek ---
            {
              id: "L7-heading-3",
              type: "heading",
              content: "Trzy warianty stopki"
            },
            {
              id: "L7-text-4",
              type: "text",
              content: "Nie każdy post wymaga tej samej stopki. Dopasuj ją do typu treści i celu posta."
            },
            {
              id: "L7-example-1",
              type: "example",
              content: "**Minimalna stopka (pod postem portfolio/edukacyjnym):**\n📍 Warszawa, Mokotów\n💬 Zapisz się przez DM\n\n**Średnia stopka (pod postem promocyjnym):**\n📍 Warszawa, Mokotów\n📅 Wolne terminy: link w bio\n— Asia\n\n**Pełna stopka (pod postem z ofertą/wydarzeniem):**\n📍 Beauty Nails, ul. Puławska 123\n📞 123-456-789\n📅 Rezerwacje: link w bio\n\n#manicureWarszawa #paznokcieMokotów"
            },
            {
              id: "L7-text-5",
              type: "text",
              content: "Zauważ: nawet \"pełna\" stopka to tylko 4-5 linijek. Nie rozbudowuj dalej. Post edukacyjny o pielęgnacji? Wystarczy minimalna stopka lub żadna. Post z wolnymi terminami? Średnia lub pełna z kontaktem."
            },
            
            // --- SEKCJA 4: Stopka w praktyce ---
            {
              id: "L7-heading-4",
              type: "heading",
              content: "Stopka w praktyce"
            },
            {
              id: "L7-text-6",
              type: "text",
              content: "Zobaczmy, jak wygląda post promocyjny z pełną stopką. Każdy element ma swoje miejsce."
            },
            {
              id: "L7-mockup-1",
              type: "mockup",
              content: "Post promocyjny z dobrą stopką:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "Marzysz o takiej stylizacji? 💅✨\n\nTo klasyczne french w wersji 2024 – delikatny, elegancki i pasuje absolutnie do wszystkiego!\n\nWolne terminy w tym tygodniu:\n• Czwartek 16:00\n• Piątek 10:00, 14:00\n• Sobota 11:00\n\nNapisz DM lub kliknij link w bio! 📲\n\n📍 Warszawa, Mokotów\n— Asia z Beauty Nails\n\n#frenchmanicure #paznokcieMokotów #manicureWarszawa",
                postLikes: "156",
                postComments: "34",
                description: "Treść + wolne terminy + jasny kontakt + lokalizacja + podpis + hashtagi"
              }
            },
            {
              id: "L7-text-7",
              type: "text",
              content: "Ten post ma wszystko: atrakcyjną treść, konkretne terminy, jasną instrukcję kontaktu, lokalizację i hashtagi. Ale stopka nie dominuje nad treścią – jest jej uzupełnieniem."
            },
            
            // --- SEKCJA 5: Czego unikać ---
            {
              id: "L7-heading-5",
              type: "heading",
              content: "Błędy w stopkach"
            },
            {
              id: "L7-text-8",
              type: "text",
              content: "Stopka powinna pomagać, nie przeszkadzać. Oto błędy, które psują nawet najlepszy post:"
            },
            {
              id: "L7-warning-1",
              type: "warning",
              content: "❌ 30 hashtagów pod każdym postem\n❌ Pełny cennik wszystkich usług\n❌ Te same 5 linijek kopiuj-wklejane pod każdym postem\n❌ Numer telefonu + email + adres + wszystkie social media + cennik\n\nStopka musi być dopasowana do treści i celu posta. Kopiowanie tej samej mega-stopki wszędzie wygląda spamersko."
            },
            {
              id: "L7-text-9",
              type: "text",
              content: "Unikaj też pisania numeru telefonu w każdym poście, jeśli masz go w bio. Wystarczy \"kontakt w bio\". Zbyt dużo informacji = chaos. Klientka nie wie, gdzie kliknąć."
            },
            
            // --- SEKCJA 6: Link w bio ---
            {
              id: "L7-heading-6",
              type: "heading",
              content: "Link w bio – jak go wykorzystać"
            },
            {
              id: "L7-text-10",
              type: "text",
              content: "\"Link w bio\" to standardowe zakończenie wielu postów. Ale ten link musi prowadzić do czegoś użytecznego – kalendarza rezerwacji, strony z ofertą, kontaktu WhatsApp.\n\nJeśli ktoś klika \"link w bio\" i trafia na pustą stronę albo skomplikowany formularz – rezygnuje. Testuj swój link: czy łatwo się umówić? Czy jasne jest, co robić dalej?"
            },
            {
              id: "L7-tip-2",
              type: "tip",
              content: "Używaj narzędzi typu Linktree, Tap.bio lub Stan.store, żeby w jednym linku zmieścić kilka opcji: rezerwacje, cennik, kontakt, inne social media. Klientka wybiera, czego potrzebuje, zamiast trafić na jedną opcję, która może jej nie pasować."
            },
            {
              id: "L7-text-11",
              type: "text",
              content: "Pro tip: Regularnie sprawdzaj, czy link działa. Nic nie jest bardziej frustrujące dla potencjalnej klientki niż kliknięcie \"link w bio\" i trafienie na błąd 404 lub wygasłą stronę."
            },
            
            // --- SEKCJA 7: Hashtagi ---
            {
              id: "L7-heading-7",
              type: "heading",
              content: "Hashtagi – mniej znaczy więcej"
            },
            {
              id: "L7-text-12",
              type: "text",
              content: "Hashtagi pomagają w odkrywalności, ale ich nadmiar wygląda spamersko i może nawet zmniejszyć zasięg (algorytm podejrzewa spam)."
            },
            {
              id: "L7-text-13",
              type: "text",
              content: "Zasady hashtagów:\n\n• **Jakość > ilość** – 3-5 trafnych hashtagów lepsze niż 30 przypadkowych\n• **Lokalizacja** – #paznokcieMokotów, #manicureWarszawa – przyciąga lokalne klientki\n• **Specyficzność** – #frenchtips lepsze niż #nails (mniejsza konkurencja, trafniejsi odbiorcy)\n• **Zmieniaj** – Nie używaj zawsze tych samych, algorytm to widzi\n• **Ukryj lub zmniejsz** – Możesz je dać w komentarzu zamiast w poście"
            },
            
            // --- SEKCJA 8: Quiz ---
            {
              id: "L7-heading-8",
              type: "heading",
              content: "Sprawdź się"
            },
            {
              id: "L7-text-14",
              type: "text",
              content: "Piszesz post z wolnymi terminami na ten tydzień. Chcesz, żeby klientki mogły łatwo się umówić. Jaka stopka będzie najbardziej skuteczna?"
            },
            {
              id: "L7-quiz-1",
              type: "quiz",
              content: "",
              quiz: {
                question: "Post z wolnymi terminami – która stopka najlepsza?",
                options: [
                  "Bez stopki – po co, skoro terminy są w treści",
                  "📍 Lokalizacja + sposób kontaktu (DM/link) + podpis",
                  "30 hashtagów i cały cennik wszystkich usług",
                  "Tylko 'link w bio' bez żadnego kontekstu"
                ],
                correctIndex: 1,
                explanation: "Stopka z lokalizacją, jasnym kontaktem i podpisem ułatwia klientce podjęcie decyzji i buduje profesjonalny wizerunek. Bez stopki może nie wiedzieć, jak się umówić. Zbyt dużo elementów wygląda spamersko."
              }
            }
          ],
          tasks: [
            { id: "task-L7-1", title: "Stwórz 3 warianty stopki", description: "Przygotuj 3 wersje stopki: minimalną, średnią i pełną. Zapisz je w notatkach i używaj odpowiedniej w zależności od typu posta." },
            { id: "task-L7-2", title: "Sprawdź link w bio", description: "Kliknij swój link w bio jak klientka. Czy łatwo się umówić? Czy wszystko działa? Popraw, jeśli trzeba." }
          ],
          checklist: [
            { id: "check-L7-1", text: "Wiem, jakie elementy może zawierać stopka" },
            { id: "check-L7-2", text: "Dobieram stopkę do typu posta" },
            { id: "check-L7-3", text: "Unikam zbyt długich stopek i spamu hashtagów" },
            { id: "check-L7-4", text: "Mój link w bio prowadzi do czegoś użytecznego i działa" }
          ],
          keyTakeaways: [
            "Stopka to miejsce na kontakt, lokalizację i podpis – 2-3 linijki maksymalnie",
            "Dopasuj stopkę do typu posta – nie wszędzie potrzebujesz pełnej",
            "Unikaj spamu: te same mega-stopki wszędzie, 30 hashtagów, pełny cennik",
            "Link w bio musi prowadzić do czegoś użytecznego i działać – regularnie sprawdzaj"
          ],
          nextLessonTitle: null
        }
      ]
    }
  ]
};
