import { Course } from "@/types/courses";

export const konfiguracjaProfiluCourse: Course = {
  id: "konfiguracja-profilu",
  title: "Konfiguracja profilu salonu",
  description: "Facebook • Instagram • Google – wszystko co musisz ustawić, żeby klienci Cię znaleźli",
  icon: "Settings",
  color: "blue",
  estimatedHours: 4,
  totalLessons: 12,
  modules: [
    // ═══════════════════════════════════════════════════════════════════════════
    // MODUŁ 1 - PROFILE W SOCIAL MEDIA
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: "modul-1-social-media",
      title: "Profile w Social Media",
      description: "Profesjonalna konfiguracja Facebooka i Instagrama",
      lessons: [
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 1 - ZDJĘCIE PROFILOWE SALONU
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-1-zdjecie-profilowe",
          title: "Zdjęcie profilowe salonu",
          description: "Jak wybrać idealne zdjęcie profilowe, które buduje zaufanie",
          estimatedMinutes: 12,
          intro: "Wyobraź sobie: Kasia scrolluje Instagram w poszukiwaniu nowego salonu. Widzi 8 profili. Na który klika? Nie na ten z rozmytym selfie ani na ten z fotografią paznokci nieczytelną w małym rozmiarze. Klika na ten, który wygląda profesjonalnie i wiarygodnie. Masz pół sekundy, żeby zrobić pierwsze wrażenie – i to zdjęcie profilowe decyduje o wszystkim.",
          sections: [
            // --- SEKCJA 1: Psychologia pierwszego wrażenia ---
            {
              id: "s1",
              type: "heading",
              content: "Pół sekundy – tyle masz czasu"
            },
            {
              id: "s2",
              type: "text",
              content: "Badania eye-trackingowe pokazują, że użytkownicy social mediów podejmują decyzję o kliknięciu w profil w **0,5 sekundy**. W tym czasie ich mózg przetwarza tylko jeden element: Twoje zdjęcie profilowe.\n\nPomyśl o tym jak o pierwszym uścisku dłoni. Czy chcesz, żeby był mocny i pewny, czy słaby i niepewny? Zdjęcie profilowe to Twój cyfrowy uścisk dłoni – i większość salonów robi go fatalnie."
            },
            {
              id: "s3",
              type: "example",
              content: "**Historia Magdy z Warszawy**\n\nMagda prowadzi salon od 3 lat. Przez cały ten czas jej zdjęciem profilowym było zdjęcie paznokci – piękna stylizacja w czerwieni. Problem? Na małym kółeczku wyglądało to jak... czerwona plama.\n\nPewnego dnia poprosiła projektantkę o proste logo. Biały napis \"MagdaNails\" na pudrowym tle. Zmieniła zdjęcie profilowe.\n\n**Efekt po miesiącu:** +23% wiadomości na Instagramie. Zero innych zmian – tylko zdjęcie profilowe.\n\n\"Teraz ludzie widzą, że to salon, a nie prywatne konto\" – mówi Magda."
            },
            {
              id: "s4",
              type: "tip",
              content: "Zdjęcie profilowe NIE jest miejscem na pokazanie swoich prac. Od tego jest galeria. Zdjęcie profilowe ma jedno zadanie: wyglądać profesjonalnie i być rozpoznawalne nawet w rozmiarze 40x40 pikseli."
            },
            
            // --- SEKCJA 2: Co działa najlepiej ---
            {
              id: "s5",
              type: "heading",
              content: "Trzy typy zdjęć, które działają"
            },
            {
              id: "s6",
              type: "text",
              content: "Przez lata analizowania profili salonów beauty wyłoniły się trzy podejścia, które konsekwentnie budują zaufanie i wyglądają profesjonalnie. Każde z nich ma swoje mocne strony – wybierz to, które pasuje do Twojej marki."
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 1,
              content: "**Logo salonu (najlepsza opcja)**\n\nCzyste, proste logo na jednolitym tle. Działa doskonale, bo:\n• Jest czytelne w każdym rozmiarze\n• Wygląda profesjonalnie i \"firmowo\"\n• Buduje rozpoznawalność marki\n• Działa identycznie na FB, IG i Google\n\nJeśli nie masz logo – to idealny moment, żeby je stworzyć. Canva oferuje darmowe szablony."
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 2,
              content: "**Profesjonalne zdjęcie właścicielki**\n\nTwarz buduje zaufanie szybciej niż logo. Ale musi to być:\n• Zdjęcie z dobrym światłem (najlepiej naturalne)\n• Uśmiech – przyjazny, naturalny\n• Jednolite tło (nie chaos salonu w tle)\n• Kadrowane na twarz, nie całą sylwetkę\n\nTo świetna opcja dla jednoosobowych salonów, gdzie TY jesteś marką."
            },
            {
              id: "s9",
              type: "step",
              stepNumber: 3,
              content: "**Zdjęcie frontu salonu**\n\nJeśli masz charakterystyczne, rozpoznawalne miejsce:\n• Zdjęcie witryny lub wejścia\n• Wyraźny szyld z nazwą\n• Dobre światło (zdjęcie za dnia)\n• Kadr, który pokazuje wyjątkowość miejsca\n\nTo buduje poczucie \"miejsca, które istnieje naprawdę\"."
            },
            
            // --- SEKCJA 3: Comparison ---
            {
              id: "s10",
              type: "heading",
              content: "Dobre vs złe zdjęcie profilowe"
            },
            {
              id: "s11",
              type: "comparison",
              content: "Co klientka myśli widząc Twoje zdjęcie profilowe?",
              comparison: {
                good: {
                  title: "Czytelne logo na jednolitym tle",
                  description: "Klientka myśli: \"To profesjonalny salon. Mają logo, dbają o szczegóły. Prawdopodobnie dbają też o moje paznokcie.\"",
                  example: "Minimalistyczne logo \"Beauty Studio\" na pudrowo-różowym tle, czytelne nawet w małym rozmiarze"
                },
                bad: {
                  title: "Zdjęcie paznokci jako avatar",
                  description: "Klientka myśli: \"Co to jest? Nie widzę... Chyba jakieś paznokcie? Wygląda jak prywatne konto, nie jak salon.\"",
                  example: "Close-up na czerwone paznokcie – nieczytelny jako małe kółko, wygląda jak czerwona plama"
                }
              }
            },
            {
              id: "s12",
              type: "mockup",
              content: "Tak wygląda różnica w praktyce:",
              mockupData: {
                platform: "instagram",
                variant: "profile-header",
                profileName: "Beauty Studio",
                username: "beauty.studio.krakow",
                bio: "💅 Manicure hybrydowy | Kraków\n✨ Specjalizacja: french & zdobienia\n📍 ul. Długa 15",
                followers: "2,847",
                following: "324",
                posts: "156",
                avatarType: "logo",
                description: "Czytelne logo sprawia, że profil wygląda profesjonalnie od pierwszego spojrzenia"
              }
            },
            
            // --- SEKCJA 4: Quiz ---
            {
              id: "s13",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka przegląda wyniki wyszukiwania \"salon manicure Kraków\". Widzi 6 profili. Który typ zdjęcia profilowego najprawdopodobniej kliknie JAKO PIERWSZY?",
                options: [
                  "Piękne zdjęcie stylizacji paznokci w jesiennych kolorach",
                  "Czytelne logo salonu na jednolitym tle",
                  "Zdjęcie grupowe zespołu salonu",
                  "Kolaż 4 różnych stylizacji"
                ],
                correctIndex: 1,
                explanation: "Logo wygrywa z kilku powodów: jest natychmiast rozpoznawalne jako \"firma\", jest czytelne w małym rozmiarze, buduje pierwsze wrażenie profesjonalizmu. Zdjęcia prac są ważne – ale w galerii, nie jako avatar. Kolaże i grupowe zdjęcia są nieczytelne jako małe kółka."
              }
            },
            
            // --- SEKCJA 5: Wymagania techniczne ---
            {
              id: "s14",
              type: "heading",
              content: "Wymagania techniczne – każda platforma ma swoje"
            },
            {
              id: "s15",
              type: "text",
              content: "Nie ma uniwersalnego rozmiaru zdjęcia profilowego. Każda platforma przycina je inaczej, ma inne minimalne wymagania. Przygotuj zdjęcie w największym rozmiarze – platformy same je zmniejszą."
            },
            {
              id: "s16",
              type: "step",
              stepNumber: 1,
              content: "**Instagram**\n• Minimum: 110 x 110 px (ale zalecane 320 x 320 px)\n• Wyświetlane jako: koło\n• Pro tip: Ważne elementy trzymaj w środku – rogi zostaną przycięte"
            },
            {
              id: "s17",
              type: "step",
              stepNumber: 2,
              content: "**Facebook**\n• Minimum: 180 x 180 px\n• Wyświetlane jako: koło na profilu, kwadrat w reklamach\n• Pro tip: Logo powinno mieć margines wokół – nie na styk z krawędzią"
            },
            {
              id: "s18",
              type: "step",
              stepNumber: 3,
              content: "**Google Business**\n• Minimum: 250 x 250 px (zalecane 720 x 720 px)\n• Wyświetlane jako: kwadrat z zaokrąglonymi rogami\n• Pro tip: Tutaj logo może mieć więcej szczegółów – wyświetla się większe"
            },
            {
              id: "s19",
              type: "warning",
              content: "**Najczęstszy błąd:** Użycie tego samego zdjęcia paznokci jako avatara na wszystkich platformach. W małym rozmiarze wygląda jak nieczytelna plama kolorów. Nawet najpiękniejsza stylizacja staje się nijaką plamą w rozmiarze 40x40 px."
            },
            
            // --- SEKCJA 6: Spójność między platformami ---
            {
              id: "s20",
              type: "heading",
              content: "Jedna twarz na wszystkich platformach"
            },
            {
              id: "s21",
              type: "text",
              content: "Klientka szuka Cię w Google, potem sprawdza Instagram, potem Facebook. Jeśli na każdej platformie ma inne zdjęcie – zaczyna się gubić. \"Czy to ten sam salon?\"\n\n**Spójność buduje rozpoznawalność.** Użyj tego samego zdjęcia profilowego na:\n• Instagram\n• Facebook\n• Google Business\n• WhatsApp Business\n• Booksy / inny system rezerwacji\n\nTo nie jest kwestia \"ładnego wyglądu\" – to kwestia zaufania. Spójna identyfikacja = profesjonalizm."
            },
            {
              id: "s22",
              type: "tip",
              content: "Masz problem z wyborem zdjęcia? Zrób prosty test: Wyślij 3 kandydatów do 5 znajomych z pytaniem \"Który wygląda najbardziej profesjonalnie?\" Wybierz ten, który dostanie najwięcej głosów."
            },
            
            // --- SEKCJA 7: Praktyczne kroki ---
            {
              id: "s23",
              type: "heading",
              content: "Jak zmienić zdjęcie profilowe – krok po kroku"
            },
            {
              id: "s24",
              type: "step",
              stepNumber: 1,
              content: "**Przygotuj zdjęcie**\n• Format: JPG lub PNG\n• Rozmiar: minimum 720 x 720 px (dla Google)\n• Tło: jednolite lub rozmyte, nie chaotyczne"
            },
            {
              id: "s25",
              type: "step",
              stepNumber: 2,
              content: "**Sprawdź w małym rozmiarze**\n• Zmniejsz zdjęcie do rozmiaru 50x50 px\n• Czy nadal jest czytelne?\n• Czy rozpoznasz co to przedstawia?"
            },
            {
              id: "s26",
              type: "step",
              stepNumber: 3,
              content: "**Zaktualizuj na wszystkich platformach**\n• Instagram → Edytuj profil → Zmień zdjęcie\n• Facebook → Strona → Zdjęcie profilowe → Edytuj\n• Google → business.google.com → Zdjęcie → Logo"
            },
            {
              id: "s27",
              type: "interactive",
              content: "Otwórz teraz swój profil Instagram i spójrz na zdjęcie profilowe w komentarzach pod dowolnym postem. Czy jest czytelne? Czy wygląda profesjonalnie obok innych profili?",
              actionLabel: "Sprawdź swój profil"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Oceń swoje obecne zdjęcie profilowe",
              description: "Zmniejsz je do 50x50 px i sprawdź, czy jest nadal czytelne i rozpoznawalne"
            },
            {
              id: "t2",
              title: "Przygotuj nowe zdjęcie profilowe",
              description: "Logo, profesjonalne zdjęcie właścicielki lub front salonu – wybierz jeden typ"
            },
            {
              id: "t3",
              title: "Zaktualizuj zdjęcie na WSZYSTKICH platformach",
              description: "Instagram, Facebook, Google Business, WhatsApp – wszędzie to samo zdjęcie"
            }
          ],
          checklist: [
            { id: "c1", text: "Mam czytelne zdjęcie profilowe (logo lub profesjonalne zdjęcie)" },
            { id: "c2", text: "Zdjęcie jest czytelne nawet w małym rozmiarze (50x50 px)" },
            { id: "c3", text: "Ważne elementy są w centrum (nie na krawędziach)" },
            { id: "c4", text: "Używam tego samego zdjęcia na wszystkich platformach" },
            { id: "c5", text: "Zdjęcie budzi skojarzenia z profesjonalnym salonem" }
          ],
          keyTakeaways: [
            "Masz 0,5 sekundy na pierwsze wrażenie – zdjęcie profilowe to Twój cyfrowy uścisk dłoni",
            "Logo lub profesjonalne zdjęcie działa lepiej niż zdjęcie paznokci (nieczytelne w małym rozmiarze)",
            "Spójność między platformami buduje rozpoznawalność i zaufanie",
            "Przetestuj zdjęcie w rozmiarze 50x50 px – jeśli jest nieczytelne, zmień je"
          ],
          nextLessonTitle: "Zdjęcie w tle na Facebooku"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 2 - ZDJĘCIE W TLE NA FACEBOOKU
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-2-zdjecie-w-tle",
          title: "Zdjęcie w tle na Facebooku",
          description: "Wykorzystaj największą przestrzeń reklamową na swoim profilu",
          estimatedMinutes: 15,
          intro: "Wyobraź sobie billboard przy autostradzie. Miliony osób go mija, a Ty płacisz za niego... zero złotych. Brzmi jak fantazja? To dokładnie czym jest zdjęcie w tle na Facebooku – darmowa przestrzeń reklamowa, którą większość salonów wypełnia zdjęciem kwiatów albo zostawia pustą. Czas to zmienić.",
          sections: [
            // --- SEKCJA 1: Wartość zdjęcia w tle ---
            {
              id: "s1",
              type: "heading",
              content: "Darmowy billboard – wykorzystujesz go?"
            },
            {
              id: "s2",
              type: "text",
              content: "Zdjęcie w tle (cover photo) to **największa przestrzeń wizualna** na Twoim profilu Facebook. Zajmuje całą szerokość ekranu, to pierwsze co rzuca się w oczy po wejściu na stronę.\n\nA teraz spójrz na swój profil. Co tam jest?\n\n• Przypadkowe zdjęcie kwiatów?\n• Stare zdjęcie z wakacji?\n• Puste, domyślne tło?\n\nTo tak, jakbyś miała darmowy billboard przy głównej ulicy i zostawiła go pusty. Każda osoba, która wchodzi na Twój profil, widzi tę przestrzeń – wykorzystaj ją!"
            },
            {
              id: "s3",
              type: "example",
              content: "**Case study: Salon Klaudia Nails z Poznania**\n\nKlaudia przez 2 lata miała zdjęcie w tle... tulipanów. \"Lubię wiosnę\" – tłumaczyła.\n\nPewnego dnia zmieniła cover na grafikę z hasłem:\n\"ŚWIĄTECZNA PROMOCJA -20% NA PIERWSZY ZABIEG\"\n+ kontaktowy numer telefonu\n+ logo salonu\n\n**Efekt po 2 tygodniach:**\n• 14 telefonów z pytaniem o promocję\n• 9 nowych klientek\n• 0 zł wydanych na reklamę\n\n\"Teraz zmieniam cover co miesiąc. To mój najskuteczniejszy kanał promocji\" – mówi Klaudia."
            },
            {
              id: "s4",
              type: "tip",
              content: "Zdjęcie w tle to Twoja **reklama, która działa 24/7**. Każdy kto wchodzi na Twój profil – z reklamy, z polecenia, z wyszukiwania – widzi ją natychmiast. Zero dodatkowego kosztu."
            },
            
            // --- SEKCJA 2: Co powinno się znaleźć ---
            {
              id: "s5",
              type: "heading",
              content: "Trzy strategie na cover photo"
            },
            {
              id: "s6",
              type: "text",
              content: "Nie ma jednej słusznej drogi. Wybierz strategię, która pasuje do Twojego salonu i aktualnej sytuacji. Każda z nich działa – jeśli wykonasz ją dobrze."
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 1,
              content: "**Strategia 1: Zdjęcie wnętrza salonu**\n\nPokaż atmosferę: czyste stanowiska, przytulne wnętrze, profesjonalny sprzęt. Klientka już wie, czego się spodziewać.\n\n✅ Kiedy wybrać: Masz piękne, fotogeniczne wnętrze\n✅ Efekt: Buduje zaufanie, pokazuje \"realność\" miejsca\n❌ Unikaj: Zdjęć z brudnymi ręcznikami, chaosem, słabym światłem"
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 2,
              content: "**Strategia 2: Grafika promocyjna**\n\nAktualna promocja, pakiet zabiegów, sezonowa oferta. To zamienia cover w aktywną reklamę.\n\n✅ Kiedy wybrać: Masz konkretną ofertę do promowania\n✅ Efekt: Bezpośrednio generuje zapytania\n❌ Unikaj: Zbyt wielu informacji, nieczytelnych fontów, przestarzałych promocji"
            },
            {
              id: "s9",
              type: "step",
              stepNumber: 3,
              content: "**Strategia 3: Zdjęcie zespołu**\n\nTy i Twoje pracownice w profesjonalnych strojach, uśmiechnięte, w salonie.\n\n✅ Kiedy wybrać: Mały, rodzinny salon, gdzie \"ludzie\" są główną wartością\n✅ Efekt: Ogromnie buduje zaufanie (\"prawdziwi ludzie, nie korporacja\")\n❌ Unikaj: Zdjęć z telefonów, nieostrych, ze złym tłem"
            },
            
            // --- SEKCJA 3: Mockup i comparison ---
            {
              id: "s10",
              type: "mockup",
              content: "Profil z profesjonalnym zdjęciem w tle:",
              mockupData: {
                platform: "facebook",
                variant: "profile",
                profileName: "Beauty Studio Kraków",
                followers: "1,847",
                coverType: "salon-interior",
                description: "Cover ze zdjęciem wnętrza salonu buduje zaufanie i pokazuje, czego klientka może się spodziewać"
              }
            },
            {
              id: "s11",
              type: "comparison",
              content: "Co klientka myśli widząc Twój cover?",
              comparison: {
                good: {
                  title: "Grafika z aktualną promocją",
                  description: "Klientka myśli: \"O, promocja na pierwszy zabieg! Muszą mieć wolne terminy. Sprawdzę cennik i napiszę.\"",
                  example: "Elegancka grafika: 'WIOSENNA PROMOCJA -20%' + logo + numer telefonu na stonowanym tle"
                },
                bad: {
                  title: "Zdjęcie kwiatów z wakacji",
                  description: "Klientka myśli: \"Co to jest? Profil prywatny? Czy to w ogóle salon?\"",
                  example: "Zdjęcie tulipanów z wycieczki do Holandii – zero informacji o salonie"
                }
              }
            },
            
            // --- SEKCJA 4: Quiz ---
            {
              id: "s12",
              type: "quiz",
              content: "",
              quiz: {
                question: "Ania prowadzi mały salon manicure. Jest sama, nie ma pracownic. Jej salon jest malutki, ale przytulny. Jakie zdjęcie w tle będzie dla niej NAJLEPSZE?",
                options: [
                  "Profesjonalne zdjęcie Ani w jej stanowisku pracy",
                  "Grafika z promocją -30% na wszystkie usługi",
                  "Kolaż zdjęć najlepszych stylizacji",
                  "Logo salonu na jednolitym tle"
                ],
                correctIndex: 0,
                explanation: "Dla jednoosobowego salonu, gdzie właścicielka JEST marką, zdjęcie z twarzą działa najlepiej. Buduje zaufanie ('znam Cię zanim Cię spotkam'), pokazuje profesjonalizm, tworzy osobistą więź. Promocje działają, ale zdjęcie właścicielki w małym salonie ma większą wartość długoterminową."
              }
            },
            
            // --- SEKCJA 5: Kwestie techniczne ---
            {
              id: "s13",
              type: "heading",
              content: "Techniczne pułapki – jak ich uniknąć"
            },
            {
              id: "s14",
              type: "text",
              content: "Zdjęcie w tle wyświetla się **inaczej na telefonie i komputerze**. To najczęstsza pułapka – tworzysz piękną grafikę na komputerze, a na telefonie... przycina ważne elementy.\n\nFacebook zmieniał wymagania wielokrotnie. Oto aktualne dane:"
            },
            {
              id: "s15",
              type: "step",
              stepNumber: 1,
              content: "**Rozmiar desktop:** 820 x 312 pikseli\nTo co widzisz na komputerze. Szeroki, panoramiczny format."
            },
            {
              id: "s16",
              type: "step",
              stepNumber: 2,
              content: "**Rozmiar mobile:** 640 x 360 pikseli\nTelefon przycina boki! Ważne elementy muszą być W CENTRUM."
            },
            {
              id: "s17",
              type: "step",
              stepNumber: 3,
              content: "**Bezpieczna strefa:** Środkowa część grafiki (około 560 x 312 px)\nTutaj umieść wszystko ważne – tekst, logo, numer telefonu."
            },
            {
              id: "s18",
              type: "warning",
              content: "**Zawsze sprawdź widok na telefonie!** Po dodaniu covera otwórz profil na telefonie. Jeśli promocja jest przycięta lub numer telefonu nie widać – musisz poprawić grafikę."
            },
            
            // --- SEKCJA 6: Tworzenie grafiki ---
            {
              id: "s19",
              type: "heading",
              content: "Jak stworzyć profesjonalny cover za darmo"
            },
            {
              id: "s20",
              type: "text",
              content: "Nie potrzebujesz grafika ani Photoshopa. **Canva (canva.com)** ma gotowe szablony cover photo dla Facebooka w idealnych rozmiarach. Wystarczy:\n\n1. Wejdź na canva.com (darmowe konto)\n2. Wyszukaj \"Facebook Cover\"\n3. Wybierz szablon pasujący do Twojej estetyki\n4. Dostosuj: zmień tekst, kolory, dodaj logo\n5. Pobierz jako PNG\n\nCały proces zajmuje 15-20 minut."
            },
            {
              id: "s21",
              type: "step",
              stepNumber: 1,
              content: "**Elementy dobrego covera:**\n• Hasło główne (duże, czytelne) – np. \"Profesjonalny manicure hybrydowy\"\n• Wyróżnik lub oferta – np. \"-20% na pierwszą wizytę\"\n• Kontakt – numer telefonu lub \"Rezerwacje: link w bio\"\n• Logo (jeśli masz) – w rogu, nie dominujące"
            },
            {
              id: "s22",
              type: "tip",
              content: "**Pro tip:** Zmieniaj cover co miesiąc lub przy okazji promocji sezonowych. Święta? Walentynki? Lato? Każda okazja to pretekst do odświeżenia i pokazania, że salon żyje."
            },
            
            // --- SEKCJA 7: Implementacja ---
            {
              id: "s23",
              type: "heading",
              content: "Jak zmienić zdjęcie w tle – praktycznie"
            },
            {
              id: "s24",
              type: "step",
              stepNumber: 1,
              content: "**Na telefonie:** Otwórz aplikację Facebook → Twoja strona → Zdjęcie w tle → Edytuj → Wybierz z galerii"
            },
            {
              id: "s25",
              type: "step",
              stepNumber: 2,
              content: "**Na komputerze:** Wejdź na swoją stronę → Najedź na cover → \"Edytuj zdjęcie w tle\" → Prześlij zdjęcie"
            },
            {
              id: "s26",
              type: "step",
              stepNumber: 3,
              content: "**Po dodaniu:** Sprawdź widok na telefonie I komputerze. Jeśli coś jest przycięte – dostosuj pozycję lub zmień grafikę."
            },
            {
              id: "s27",
              type: "interactive",
              content: "Otwórz teraz swój profil Facebook na telefonie. Jak wygląda Twoje zdjęcie w tle? Czy mówi coś o Twoim salonie? Czy zachęca do kontaktu?",
              actionLabel: "Sprawdź swój profil"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Oceń swój obecny cover",
              description: "Czy mówi coś o Twoim salonie? Czy zachęca do kontaktu?"
            },
            {
              id: "t2",
              title: "Wybierz strategię covera",
              description: "Wnętrze salonu, grafika promocyjna czy zdjęcie zespołu – która pasuje do Ciebie?"
            },
            {
              id: "t3",
              title: "Stwórz nowy cover w Canvie",
              description: "Użyj szablonu Facebook Cover i dostosuj do swojego salonu"
            },
            {
              id: "t4",
              title: "Sprawdź widok na telefonie",
              description: "Po dodaniu covera sprawdź, czy wszystkie ważne elementy są widoczne na mobile"
            }
          ],
          checklist: [
            { id: "c1", text: "Mam aktualne zdjęcie w tle (nie puste ani przypadkowe)" },
            { id: "c2", text: "Zdjęcie komunikuje coś o moim salonie" },
            { id: "c3", text: "Sprawdziłam widok na telefonie – ważne elementy są widoczne" },
            { id: "c4", text: "Jeśli jest promocja – jest aktualna (nie przestarzała)" },
            { id: "c5", text: "Mam plan, kiedy zmienię cover następnym razem" }
          ],
          keyTakeaways: [
            "Zdjęcie w tle to darmowy billboard – każdy odwiedzający profil go widzi",
            "Trzy skuteczne strategie: wnętrze salonu, grafika promocyjna, zdjęcie zespołu",
            "Zawsze sprawdź widok na telefonie – FB przycina boki!",
            "Zmieniaj cover regularnie (minimum raz na sezon) – to sygnał, że salon żyje"
          ],
          nextLessonTitle: "Bio na Instagramie"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 3 - BIO NA INSTAGRAMIE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-3-bio-instagram",
          title: "Bio na Instagramie",
          description: "150 znaków, które decydują czy ktoś zostanie na Twoim profilu",
          estimatedMinutes: 18,
          intro: "150 znaków. To mniej niż ten akapit. A od tych 150 znaków zależy, czy klientka zostanie na Twoim profilu, czy pójdzie do konkurencji. Bio to Twój pitch – masz 3 sekundy, żeby powiedzieć kim jesteś, co robisz i dlaczego warto zostać. Większość salonów marnuje to miejsce na '💅✨ Zapraszamy! ✨💅'. Czas to zmienić.",
          sections: [
            // --- SEKCJA 1: Psychologia bio ---
            {
              id: "s1",
              type: "heading",
              content: "150 znaków – zero miejsca na bzdury"
            },
            {
              id: "s2",
              type: "text",
              content: "Bio na Instagramie to **jedyne miejsce, gdzie możesz użyć klikalnego linku** i **jedyne miejsce, gdzie klientka czyta tekst** przed podjęciem decyzji o obserwowaniu.\n\nCo robi klientka, która trafiła na Twój profil?\n\n1. Patrzy na zdjęcie profilowe (0,5 sekundy)\n2. Czyta bio (2-3 sekundy)\n3. Scrolluje 3-6 pierwszych postów (5 sekund)\n4. Decyduje: obserwować czy wyjść\n\n**Bio to etap 2 – a większość salonów go zawala.**"
            },
            {
              id: "s3",
              type: "example",
              content: "**Test dwóch bio – które byś kliknęła?**\n\n**Bio A:**\n💅 Salon kosmetyczny 💅\n✨ Profesjonalna obsługa ✨\n💖 Zapraszamy! 💖\n\n**Bio B:**\nManicure hybrydowy | Kraków Podgórze\n✨ French & zdobienia geometryczne\n📍 3 min od metra Podgórze\n⬇️ Rezerwacje online 24/7\n\n**Wynik:** Bio B mówi CO (manicure), GDZIE (lokalizacja + metro), CO WYRÓŻNIA (specjalizacja), JAK UMÓWIĆ (link).\nBio A mówi... nic. Tylko emoji."
            },
            {
              id: "s4",
              type: "warning",
              content: "Emoji to nie treść. '💅✨💖' nie mówi nic o Twoim salonie. Każdy znak w bio jest na wagę złota – nie marnuj ich na puste dekoracje."
            },
            
            // --- SEKCJA 2: Struktura idealnego bio ---
            {
              id: "s5",
              type: "heading",
              content: "Struktura idealnego bio – 4 linie, 4 funkcje"
            },
            {
              id: "s6",
              type: "text",
              content: "Bio na Instagramie ma maksymalnie 150 znaków i wyświetla się w 4 liniach. Każda linia powinna pełnić konkretną funkcję:"
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 1,
              content: "**Linia 1: Kim jesteś + gdzie**\n\nNazwa usługi + lokalizacja. To odpowiada na podstawowe pytanie: \"Czy to dla mnie?\"\n\nPrzykłady:\n• \"Manicure hybrydowy | Kraków Kazimierz\"\n• \"Stylizacja paznokci • Warszawa Mokotów\"\n• \"Salon beauty | Poznań Centrum\""
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 2,
              content: "**Linia 2: Co Cię wyróżnia**\n\nTo jest Twoja \"supermoc\" – coś, czego inne salony nie mają lub nie komunikują.\n\nPrzykłady:\n• \"✨ Specjalizacja: french & zdobienia\"\n• \"🏆 5 lat doświadczenia w nail art\"\n• \"💎 Tylko lakiery premium (Semilac, Indigo)\""
            },
            {
              id: "s9",
              type: "step",
              stepNumber: 3,
              content: "**Linia 3: Lokalizacja lub ułatwienie**\n\nCoś, co ułatwia życie klientce – szczegółowa lokalizacja, parking, godziny.\n\nPrzykłady:\n• \"📍 3 min od metra Politechnika\"\n• \"🚗 Darmowy parking pod budynkiem\"\n• \"⏰ Pon-Sob 9:00-20:00\""
            },
            {
              id: "s10",
              type: "step",
              stepNumber: 4,
              content: "**Linia 4: CTA (wezwanie do działania)**\n\nCo ma zrobić klientka? Daj jasną instrukcję.\n\nPrzykłady:\n• \"⬇️ Umów wizytę online\"\n• \"📲 Napisz DM, odpowiadam w 2h\"\n• \"👇 Rezerwacje przez link\""
            },
            
            // --- SEKCJA 3: Comparison ---
            {
              id: "s11",
              type: "comparison",
              content: "Porównanie dwóch bio",
              comparison: {
                good: {
                  title: "Konkretne i z charakterem",
                  description: "Mówi CO, GDZIE i DLACZEGO warto. Każda linia ma funkcję.",
                  example: "Manicure hybrydowy | Kraków Podgórze\n✨ Specjalizacja: french i zdobienia\n📍 2 min od Galerii Kazimierz\n⬇️ Rezerwacje online 24/7"
                },
                bad: {
                  title: "Generyczne i puste",
                  description: "Nic nie mówi, niczym nie wyróżnia. Same emoji bez treści.",
                  example: "💅 Salon kosmetyczny 💅\n✨ Profesjonalna obsługa ✨\n💖 Zapraszamy! 💖\n✨💅💖✨💅💖"
                }
              }
            },
            
            // --- SEKCJA 4: Mockup ---
            {
              id: "s12",
              type: "mockup",
              content: "Tak wygląda profesjonalne bio w praktyce:",
              mockupData: {
                platform: "instagram",
                variant: "profile",
                profileName: "Nail Studio Kasia",
                username: "nailstudio.kasia",
                bio: "💅 Manicure hybrydowy | Kraków\n✨ Specjalizacja: french & nail art\n📍 3 min od Galerii Krakowskiej\n⬇️ Rezerwacje przez link",
                followers: "3,241",
                following: "412",
                posts: "287",
                avatarType: "logo",
                description: "Bio odpowiada na wszystkie pytania klientki: co, gdzie, dlaczego i jak umówić"
              }
            },
            
            // --- SEKCJA 5: Quiz ---
            {
              id: "s13",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka wchodzi na profil salonu i widzi bio: '💅✨ Paznokcie to moja pasja! ✨💅 Zapraszam serdecznie! 💖' Co najprawdopodobniej zrobi?",
                options: [
                  "Od razu kliknie link do rezerwacji",
                  "Wyjdzie z profilu, bo nie wie co, gdzie i jak",
                  "Napisze DM z pytaniem o ceny",
                  "Zacznie przeglądać posty szukając informacji"
                ],
                correctIndex: 1,
                explanation: "Bio nie odpowiada na żadne pytanie: Jaki typ usług? Gdzie? Jak umówić? Klientka nie ma czasu szukać – wychodzi i idzie do profilu, który od razu daje odpowiedzi. Każda sekunda szukania = większa szansa na utratę klientki."
              }
            },
            
            // --- SEKCJA 6: Link w bio ---
            {
              id: "s14",
              type: "heading",
              content: "Link w bio – Twój jedyny klikalny adres"
            },
            {
              id: "s15",
              type: "text",
              content: "Instagram daje Ci **tylko jeden klikalny link** w całym profilu. Jeden. To jedyna droga, żeby klientka przeszła z przeglądania do działania.\n\nCo powinno być pod tym linkiem?"
            },
            {
              id: "s16",
              type: "step",
              stepNumber: 1,
              content: "**Opcja 1: Bezpośredni link do rezerwacji**\n\nJeśli używasz Booksy, Moment, Calendly – daj bezpośredni link do rezerwacji. Zero pośredników.\n\n✅ Najkrótsza droga od \"chcę\" do \"umówiłam\"\n❌ Nie masz strony www? Nie szkodzi – Booksy wystarczy"
            },
            {
              id: "s17",
              type: "step",
              stepNumber: 2,
              content: "**Opcja 2: Strona linków (Linktree, Beacons)**\n\nJeśli masz wiele miejsc do pokazania (rezerwacje + cennik + opinie), użyj strony linków.\n\n✅ Daje klientce wybór\n❌ Jeden dodatkowy klik = część osób rezygnuje"
            },
            {
              id: "s18",
              type: "warning",
              content: "**Najgorszy błąd:** Link do głównej strony www zamiast do rezerwacji. Każdy dodatkowy klik to utracona klientka. Jeśli link prowadzi do strony, gdzie trzeba SZUKAĆ jak się umówić – tracisz 40-60% potencjalnych rezerwacji."
            },
            {
              id: "s19",
              type: "tip",
              content: "Przetestuj swój link: poproś znajomą, żeby spróbowała się umówić używając tylko linka z bio. Ile kliknięć potrzebuje? Ile sekund zajmuje znalezienie rezerwacji? Jeśli więcej niż 2 kliki – popraw."
            },
            
            // --- SEKCJA 7: Emoji - strategia użycia ---
            {
              id: "s20",
              type: "heading",
              content: "Emoji – mniej znaczy więcej"
            },
            {
              id: "s21",
              type: "text",
              content: "Emoji mogą **pomóc** lub **zaszkodzić** Twojemu bio. Różnica leży w sposobie użycia.\n\n**Dobre użycie emoji:**\n• Jako ikony przed informacją (📍 lokalizacja, ⏰ godziny)\n• Jeden emoji na linię, maksymalnie dwa\n• Emoji dodające znaczenie, nie dekorację\n\n**Złe użycie emoji:**\n• Całe linie samych emoji (💅✨💖✨💅)\n• Emoji zamiast słów\n• 5+ emoji w jednej linii"
            },
            {
              id: "s22",
              type: "comparison",
              content: "Użycie emoji",
              comparison: {
                good: {
                  title: "Emoji jako ikony",
                  description: "Jeden emoji na początek każdej linii – czytelne, profesjonalne",
                  example: "💅 Manicure hybrydowy\n📍 Kraków Kazimierz\n⏰ Pon-Sob 10-20\n⬇️ Rezerwuj online"
                },
                bad: {
                  title: "Emoji jako dekoracja",
                  description: "Masa emoji bez treści – nieprofesjonalne, chaotyczne",
                  example: "💅✨💖 Paznokcie 💖✨💅\n✨💅💖✨💅💖✨\n💖✨💅💖✨💅💖"
                }
              }
            },
            
            // --- SEKCJA 8: Praktyczne kroki ---
            {
              id: "s23",
              type: "heading",
              content: "Jak napisać nowe bio – krok po kroku"
            },
            {
              id: "s24",
              type: "step",
              stepNumber: 1,
              content: "**Odpowiedz na 4 pytania:**\n• Co robisz? (typ usług)\n• Gdzie? (lokalizacja)\n• Co Cię wyróżnia? (specjalizacja, doświadczenie)\n• Jak się umówić? (CTA)"
            },
            {
              id: "s25",
              type: "step",
              stepNumber: 2,
              content: "**Napisz 4 linie (maks. 150 znaków):**\nKażda linia = jedna informacja. Nie próbuj zmieścić wszystkiego."
            },
            {
              id: "s26",
              type: "step",
              stepNumber: 3,
              content: "**Dodaj 1 emoji na linię:**\nNa początku każdej linii, jako \"ikona\" pomagająca szybko zrozumieć treść."
            },
            {
              id: "s27",
              type: "step",
              stepNumber: 4,
              content: "**Ustaw link do rezerwacji:**\nBezpośredni link do Booksy/systemu rezerwacji lub strona linków (Linktree)."
            },
            {
              id: "s28",
              type: "interactive",
              content: "Otwórz teraz swój profil Instagram. Przeczytaj swoje bio oczami klientki. Czy po 3 sekundach wiesz: co, gdzie, jak umówić? Jeśli nie – przepisz.",
              actionLabel: "Sprawdź swoje bio"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Przeanalizuj swoje obecne bio",
              description: "Odpowiedz: czy mówi CO, GDZIE, CO WYRÓŻNIA i JAK UMÓWIĆ?"
            },
            {
              id: "t2",
              title: "Napisz nowe bio według struktury",
              description: "4 linie: usługa + lokalizacja, wyróżnik, ułatwienie, CTA"
            },
            {
              id: "t3",
              title: "Ustaw właściwy link",
              description: "Link bezpośredni do rezerwacji lub strona linków"
            },
            {
              id: "t4",
              title: "Przetestuj link",
              description: "Poproś znajomą o próbę umówienia – ile klików potrzebuje?"
            }
          ],
          checklist: [
            { id: "c1", text: "Bio ma maksymalnie 150 znaków" },
            { id: "c2", text: "Podaję typ usługi i lokalizację (miasto + dzielnica)" },
            { id: "c3", text: "Jest wyróżnik – coś co różni mnie od innych" },
            { id: "c4", text: "Jest CTA – jasna instrukcja co zrobić" },
            { id: "c5", text: "Link prowadzi do rezerwacji (nie do głównej strony www)" },
            { id: "c6", text: "Emoji używam jako ikony, nie dekorację (1 na linię)" }
          ],
          keyTakeaways: [
            "Bio musi odpowiedzieć na 4 pytania: co, gdzie, dlaczego, jak umówić – w 150 znakach",
            "Link powinien prowadzić BEZPOŚREDNIO do rezerwacji – każdy dodatkowy klik = utracone klientki",
            "Emoji używaj jako ikony (1 na linię), nie jako dekorację",
            "Zrób test: poproś znajomą o próbę rezerwacji – jeśli nie znajdzie linku w 3 sekundy, popraw bio"
          ],
          nextLessonTitle: "Dane kontaktowe i przyciski"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 4 - DANE KONTAKTOWE I PRZYCISKI
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-4-dane-kontaktowe",
          title: "Dane kontaktowe i przyciski",
          description: "Ułatw klientkom kontakt – dosłownie jednym kliknięciem",
          estimatedMinutes: 12,
          intro: "Wyobraź sobie: Ania widzi Twój profil, podoba jej się. Chce się umówić. Szuka numeru telefonu... szuka... nie może znaleźć. Sprawdza bio – link nie działa. Klika 'Napisz' – nie ma opcji. Po 30 sekundach frustracji zamyka profil i idzie do konkurencji. Straciłaś klientkę. Nie dlatego, że Twoje prace są gorsze – dlatego, że nie mogła Cię znaleźć.",
          sections: [
            // --- SEKCJA 1: Dlaczego kontakt jest kluczowy ---
            {
              id: "s1",
              type: "heading",
              content: "Jeden klik = rezerwacja. Dwa kliki = wahanie. Trzy kliki = rezygnacja."
            },
            {
              id: "s2",
              type: "text",
              content: "W świecie natychmiastowej gratyfikacji, każda dodatkowa sekunda szukania to bariera. Badania UX pokazują prostą zależność:\n\n• **1 klik do kontaktu** = 80% konwersji\n• **2 kliki** = 50% konwersji\n• **3+ kliki** = poniżej 30% konwersji\n\nKażdy dodatkowy krok, który klientka musi wykonać, to punkt wyjścia z procesu. Twoje dane kontaktowe muszą być **natychmiast dostępne** – bez szukania, bez zgadywania."
            },
            {
              id: "s3",
              type: "example",
              content: "**Dwie klientki, dwie historie**\n\n**Kasia** wchodzi na profil salonu. Klika przycisk \"Zadzwoń\" – telefon się wybiera. Po 3 sygnałach rozmawia z recepcją. Umawia wizytę w 2 minuty.\n\n**Magda** wchodzi na profil innego salonu. Szuka numeru... w bio jest tylko \"Zapraszamy!\". Klika w link – strona się ładuje. Szuka numeru na stronie... jest w stopce. Przepisuje numer ręcznie do telefonu. Frustruje się, zamyka i szuka dalej.\n\n**Kto ma klientkę?** Pierwszy salon. Nie dlatego, że jest lepszy – dlatego, że nie utrudniał."
            },
            {
              id: "s4",
              type: "tip",
              content: "Zrób test: poproś znajomą (która nie zna Twojego salonu) o próbę umówienia się przez Twój profil. Mierz czas i liczbę klików. Jeśli trwa to więcej niż minutę – masz problem."
            },
            
            // --- SEKCJA 2: Przyciski na Facebooku ---
            {
              id: "s5",
              type: "heading",
              content: "Facebook – przyciski, które działają za Ciebie"
            },
            {
              id: "s6",
              type: "text",
              content: "Facebook pozwala dodać do strony firmowej **przyciski akcji** – jeden główny (obok zdjęcia profilowego) i kilka dodatkowych w sekcji kontakt. Większość salonów nie konfiguruje ich wcale."
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 1,
              content: "**Przycisk główny – wybierz JEDEN najważniejszy**\n\nFacebook wyświetla jeden przycisk obok Twojego avatara. Wybierz mądrze:\n\n• \"Zadzwoń\" – jeśli umawiasz przez telefon\n• \"Zarezerwuj\" – jeśli masz system online (Booksy, Moment)\n• \"Wyślij wiadomość\" – jeśli wolisz Messenger\n\n**Nie wybieraj \"Więcej informacji\"** – to dodatkowy klik bez wartości."
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 2,
              content: "**Numer telefonu – klikalny**\n\nKlientka klika → telefon się wybiera. Żadnego przepisywania numerów.\n\nGdzie dodać: Ustawienia → Informacje o stronie → Numer telefonu"
            },
            {
              id: "s9",
              type: "step",
              stepNumber: 3,
              content: "**Adres z mapką**\n\nKlientka klika → otwiera się Nawigator/Mapy. Widzi jak dojechać.\n\nGdzie dodać: Ustawienia → Informacje o stronie → Lokalizacja"
            },
            {
              id: "s10",
              type: "step",
              stepNumber: 4,
              content: "**Godziny otwarcia – AKTUALNE!**\n\nNic tak nie irytuje jak przyjazd do zamkniętego salonu. Aktualizuj przy każdej zmianie.\n\nGdzie dodać: Ustawienia → Informacje o stronie → Godziny"
            },
            {
              id: "s11",
              type: "warning",
              content: "**Sprawdź swój numer telefonu!** Zdarza się, że salony zmieniają numer, a w profilu zostaje stary. Raz w miesiącu zadzwoń na swój numer z innego telefonu i sprawdź, czy działa."
            },
            
            // --- SEKCJA 3: Przyciski na Instagramie ---
            {
              id: "s12",
              type: "heading",
              content: "Instagram – konto firmowe to podstawa"
            },
            {
              id: "s13",
              type: "text",
              content: "Na Instagramie przyciski kontaktowe są dostępne **tylko dla kont firmowych (profesjonalnych)**. Jeśli masz konto osobiste – nie masz przycisków, nie masz statystyk, nie masz pełnych możliwości.\n\n**Przejście na konto firmowe jest darmowe i zajmuje 2 minuty.**"
            },
            {
              id: "s14",
              type: "step",
              stepNumber: 1,
              content: "**Przełącz się na konto firmowe:**\nUstawienia → Konto → Przełącz na konto profesjonalne → Firma\n\nOdblokowujesz:\n• Przyciski kontaktowe (Email, Telefon, Adres)\n• Statystyki postów i Stories\n• Promowanie postów"
            },
            {
              id: "s15",
              type: "step",
              stepNumber: 2,
              content: "**Dodaj przyciski kontaktowe:**\nEdytuj profil → Opcje kontaktowe\n\n• Email – klientka klika, otwiera się aplikacja email\n• Telefon – klientka klika, telefon się wybiera\n• Adres – klientka klika, otwierają się mapy"
            },
            {
              id: "s16",
              type: "mockup",
              content: "Profil z poprawnie skonfigurowanymi przyciskami:",
              mockupData: {
                platform: "instagram",
                variant: "profile",
                profileName: "Nail Studio Kasia",
                username: "nailstudio.kasia",
                bio: "💅 Manicure hybrydowy | Kraków\n✨ French & nail art\n📍 ul. Długa 15\n⬇️ Umów wizytę online",
                followers: "2,156",
                following: "324",
                posts: "189",
                avatarType: "logo",
                highlightElement: "contact-buttons",
                description: "Przyciski 'Zadzwoń', 'E-mail' i 'Jak dojechać' widoczne pod bio – jeden klik do kontaktu"
              }
            },
            
            // --- SEKCJA 4: Quiz ---
            {
              id: "s17",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka Ania wchodzi na Twój profil Instagram z telefonu. Chce się umówić. Co powinna zobaczyć, żeby mogła to zrobić NAJSZYBCIEJ?",
                options: [
                  "Link do strony www w bio",
                  "Przycisk 'Zadzwoń' lub 'Zarezerwuj' pod bio",
                  "Numer telefonu napisany w bio",
                  "Post z napisem 'Jak się umówić'"
                ],
                correctIndex: 1,
                explanation: "Przycisk pod bio to JEDEN klik. Link do strony = 2+ kliki. Numer w bio = przepisywanie ręczne. Post = szukanie. Każdy dodatkowy krok to ryzyko rezygnacji. Przyciski kontaktowe działają natychmiast."
              }
            },
            
            // --- SEKCJA 5: Błędy ---
            {
              id: "s18",
              type: "heading",
              content: "Najczęstsze błędy w danych kontaktowych"
            },
            {
              id: "s19",
              type: "comparison",
              content: "Dobre vs złe podejście do kontaktu",
              comparison: {
                good: {
                  title: "Jeden klik do działania",
                  description: "Przycisk 'Zadzwoń' pod profilem, klikalny adres, link do rezerwacji online",
                  example: "Klientka klika → telefon dzwoni → umówiona w 2 minuty"
                },
                bad: {
                  title: "Szukanie igły w stogu siana",
                  description: "Numer telefonu w stopce strony www, adres bez linku do map, brak przycisków",
                  example: "Klientka szuka → frustruje się → wychodzi → idzie do konkurencji"
                }
              }
            },
            {
              id: "s20",
              type: "step",
              stepNumber: 1,
              content: "**Błąd: Przestarzały numer telefonu**\n\nZmieniłaś numer pół roku temu. W profilu nadal stary. Klientki dzwonią... nie odbiera nikt.\n\n✅ Rozwiązanie: Sprawdzaj raz w miesiącu, czy wszystkie numery działają"
            },
            {
              id: "s21",
              type: "step",
              stepNumber: 2,
              content: "**Błąd: Nieaktualne godziny otwarcia**\n\nZmieniłaś godziny na lato. W profilu nadal 'Pon-Pt 9-17'. Klientka przyjeżdża o 18:00... zamknięte.\n\n✅ Rozwiązanie: Aktualizuj godziny przy każdej zmianie + przy zmianie pór roku"
            },
            {
              id: "s22",
              type: "step",
              stepNumber: 3,
              content: "**Błąd: Adres bez szczegółów**\n\n'ul. Długa 15' – ale które piętro? Które drzwi? Jak wejść?\n\n✅ Rozwiązanie: Dodaj szczegóły: 'ul. Długa 15, II piętro, domofon 15'"
            },
            
            // --- SEKCJA 6: Implementacja ---
            {
              id: "s23",
              type: "heading",
              content: "Skonfiguruj wszystko w 10 minut"
            },
            {
              id: "s24",
              type: "step",
              stepNumber: 1,
              content: "**Facebook (5 minut):**\n1. Wejdź na swoją stronę\n2. Ustawienia → Informacje o stronie\n3. Dodaj: telefon, adres, godziny, stronę www\n4. Ustaw główny przycisk akcji (Zadzwoń/Zarezerwuj)"
            },
            {
              id: "s25",
              type: "step",
              stepNumber: 2,
              content: "**Instagram (5 minut):**\n1. Przejdź na konto firmowe (jeśli jeszcze nie masz)\n2. Edytuj profil → Opcje kontaktowe\n3. Dodaj: telefon, email, adres\n4. Sprawdź czy przyciski wyświetlają się pod bio"
            },
            {
              id: "s26",
              type: "interactive",
              content: "Zadzwoń teraz na swój numer z innego telefonu (lub poproś kogoś). Czy połączenie działa? Czy ktoś odbiera? Czy nagranie na poczcie jest aktualne?",
              actionLabel: "Przetestuj swój numer"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Przełącz Instagram na konto firmowe",
              description: "Jeśli masz konto osobiste – zmień na profesjonalne (darmowe)"
            },
            {
              id: "t2",
              title: "Skonfiguruj przyciski na Facebooku",
              description: "Telefon, adres, godziny, przycisk główny (Zadzwoń/Zarezerwuj)"
            },
            {
              id: "t3",
              title: "Dodaj dane kontaktowe na Instagramie",
              description: "Telefon, email, adres – widoczne pod bio jako przyciski"
            },
            {
              id: "t4",
              title: "Przetestuj wszystkie kontakty",
              description: "Zadzwoń na swój numer, kliknij swój adres w mapach"
            }
          ],
          checklist: [
            { id: "c1", text: "Instagram jest kontem firmowym (profesjonalnym)" },
            { id: "c2", text: "Facebook ma skonfigurowany przycisk główny (Zadzwoń/Zarezerwuj)" },
            { id: "c3", text: "Numer telefonu jest klikalny i aktualny" },
            { id: "c4", text: "Adres otwiera mapy i jest dokładny" },
            { id: "c5", text: "Godziny otwarcia są aktualne" },
            { id: "c6", text: "Przetestowałam wszystkie kontakty – działają" }
          ],
          keyTakeaways: [
            "Każdy dodatkowy klik do kontaktu = utracone klientki (80% → 50% → 30%)",
            "Konto firmowe na Instagramie jest darmowe i odblokowuje przyciski + statystyki",
            "Raz w miesiącu sprawdź czy wszystkie numery i adresy są aktualne",
            "Zrób test: poproś znajomą o próbę umówienia – ile klików potrzebuje?"
          ],
          nextLessonTitle: "Wyróżnione relacje"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 5 - WYRÓŻNIONE RELACJE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-5-wyroznione-relacje",
          title: "Wyróżnione relacje",
          description: "Stwórz mini-stronę www z relacji na Instagramie",
          estimatedMinutes: 15,
          intro: "Wyobraź sobie, że klientka wchodzi na Twój profil Instagram. Widzi kółeczka pod bio – 'Wakacje', 'Piesek', 'Kawa', 'Impreza'. Co się dowie o Twoim salonie? Nic. A teraz wyobraź sobie inne kółeczka: 'CENNIK', 'OPINIE', 'PRACE', 'O NAS', 'DOJAZD'. Nagle Twój profil stał się mini-stroną www. Darmową. Zawsze dostępną.",
          sections: [
            // --- SEKCJA 1: Czym są Highlights ---
            {
              id: "s1",
              type: "heading",
              content: "Darmowa mini-strona w Twoim profilu"
            },
            {
              id: "s2",
              type: "text",
              content: "Wyróżnione relacje (Highlights) to kółeczka widoczne pod bio. Większość salonów traktuje je jako śmietnik na stare Stories – \"Piesek\", \"Plaża 2023\", \"Urodziny\".\n\nAle mogą być czymś zupełnie innym: **Twoją mini-stroną www**.\n\nPomyśl o tym: strona www ma zakładki – O nas, Usługi, Cennik, Kontakt. Highlights mogą pełnić dokładnie tę samą funkcję. I są darmowe. I są zawsze widoczne. I klientka może je przeglądać zanim jeszcze napisze do Ciebie."
            },
            {
              id: "s3",
              type: "example",
              content: "**Historia Kasi z Poznania**\n\nKasia prowadziła profil salonu od 2 lat. Highlights? \"Mama\", \"Kawki\", \"Lato 2022\". Prywatne wspomnienia, nie biznes.\n\nPewnego dnia zrobiła porządek:\n• Usunęła wszystkie prywatne Highlights\n• Stworzyła: CENNIK | OPINIE | PRACE | SALON | JAK DOJECHAĆ\n• Każdy Highlight dostał spójną okładkę (różowa ikona na białym tle)\n\n**Efekt po miesiącu:**\n• -73% wiadomości \"Ile kosztuje hybryda?\" (odpowiedź jest w CENNIK)\n• +28% bezpośrednich rezerwacji\n• \"Teraz widzę, że to profesjonalny salon\" – opinia klientki\n\n\"To była najlepsza decyzja. Oszczędzam godzinę dziennie na odpowiadanie na te same pytania.\" – mówi Kasia"
            },
            {
              id: "s4",
              type: "tip",
              content: "Highlights to jedyne miejsce na Instagramie, gdzie treści NIE znikają po 24 godzinach. To Twoja stała ekspozycja – wykorzystaj ją mądrze."
            },
            
            // --- SEKCJA 2: Jakie kategorie stworzyć ---
            {
              id: "s5",
              type: "heading",
              content: "5 kategorii, które MUSI mieć każdy salon"
            },
            {
              id: "s6",
              type: "text",
              content: "Nie ma jednej recepty na idealne Highlights. Ale są kategorie, które sprawdzają się w każdym salonie beauty – bo odpowiadają na pytania, które klientki zadają najczęściej."
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 1,
              content: "**CENNIK** (obowiązkowy!)\n\nNajczęściej zadawane pytanie: \"Ile kosztuje hybryda/pedicure/makijaż?\"\n\nZamiast odpowiadać 100 razy – wrzuć cennik do Highlights.\n\n✅ Co wrzucić: Zdjęcia cennika, Stories z cenami poszczególnych usług\n✅ Pro tip: Napisz w bio \"Cennik → Highlights\" żeby było jasne"
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 2,
              content: "**OPINIE / KLIENTKI**\n\nSocial proof – klientki chcą widzieć, że inne są zadowolone.\n\n✅ Co wrzucić: Screeny pozytywnych wiadomości, zdjęcia klientek z hashtagiem, reposty Stories\n✅ Pro tip: Zamazuj imiona i nazwiska (RODO)"
            },
            {
              id: "s9",
              type: "step",
              stepNumber: 3,
              content: "**PRACE / REALIZACJE**\n\nTwoje portfolio – najlepsze zdjęcia stylizacji/zabiegów.\n\n✅ Co wrzucić: Zdjęcia prac, \"przed i po\", zbliżenia detali\n✅ Pro tip: Możesz mieć kilka: FRENCH, ZDOBIENIA, PEDICURE"
            },
            {
              id: "s10",
              type: "step",
              stepNumber: 4,
              content: "**O NAS / SALON**\n\nPokaż wnętrze, zespół, atmosferę. Buduj zaufanie przed wizytą.\n\n✅ Co wrzucić: Wnętrze salonu, stanowiska, zespół przy pracy, produkty których używasz\n✅ Pro tip: Stories \"dzień z życia salonu\" działają świetnie"
            },
            {
              id: "s11",
              type: "step",
              stepNumber: 5,
              content: "**JAK DOJECHAĆ**\n\nKlientka już jest zdecydowana – ułatw jej dojazd.\n\n✅ Co wrzucić: Mapkę z Google Maps, zdjęcie wejścia, gdzie zaparkować\n✅ Pro tip: \"Drugie piętro, domofon 15\" – konkretne szczegóły"
            },
            
            // --- SEKCJA 3: Dodatkowe kategorie ---
            {
              id: "s12",
              type: "heading",
              content: "Kategorie dodatkowe – jeśli masz czas"
            },
            {
              id: "s13",
              type: "example",
              content: "**Inne sprawdzone kategorie:**\n\n• **PROMOCJE** – aktualne oferty (aktualizuj regularnie!)\n• **FAQ** – odpowiedzi na częste pytania\n• **INSPIRACJE** – co teraz modne, trendy\n• **PRODUKTY** – jakich lakierów/kosmetyków używasz\n• **REZERWACJE** – jak się umówić krok po kroku"
            },
            {
              id: "s14",
              type: "warning",
              content: "**Max 6-8 Highlights!** Więcej = chaos. Klientka nie ma czasu przeglądać 15 kółeczek. Wybierz najważniejsze."
            },
            
            // --- SEKCJA 4: Spójne okładki ---
            {
              id: "s15",
              type: "heading",
              content: "Spójne okładki = profesjonalny wygląd"
            },
            {
              id: "s16",
              type: "text",
              content: "Okładki Highlights to pierwsza rzecz, którą widzi klientka pod bio. Jeśli każda jest inna – profil wygląda chaotycznie. Jeśli są spójne – wygląda profesjonalnie.\n\n**Trzy podejścia do okładek:**"
            },
            {
              id: "s17",
              type: "step",
              stepNumber: 1,
              content: "**Ikony na jednolitym tle**\n\nNajpopularniejsze rozwiązanie. Prosty symbol (💅, 📋, 💬) na jednolitym, pastelowym tle.\n\n✅ Efekt: Elegancki, minimalistyczny, czytelny\n✅ Narzędzie: Canva → wyszukaj \"Instagram Highlight Cover\""
            },
            {
              id: "s18",
              type: "step",
              stepNumber: 2,
              content: "**Zdjęcia w tym samym filtrze**\n\nZdjęcia z salonu, ale wszystkie przetworzone tym samym filtrem.\n\n✅ Efekt: Naturalny, autentyczny, ale spójny\n✅ Narzędzie: VSCO lub Lightroom z tym samym presetem"
            },
            {
              id: "s19",
              type: "step",
              stepNumber: 3,
              content: "**Minimalistyczne napisy**\n\nSłowo na jednolitym tle: \"CENNIK\", \"OPINIE\", \"PRACE\".\n\n✅ Efekt: Maksymalna czytelność, zero niedomówień\n✅ Narzędzie: Canva z prostym fontem"
            },
            {
              id: "s20",
              type: "comparison",
              content: "Spójne vs chaotyczne okładki",
              comparison: {
                good: {
                  title: "Spójne – jedna estetyka",
                  description: "Wszystkie okładki w tym samym stylu: różowe tło, białe ikony",
                  example: "CENNIK 📋 | OPINIE 💬 | PRACE 💅 | SALON 🏠 | DOJAZD 📍 – każda w tym samym kolorze i stylu"
                },
                bad: {
                  title: "Chaotyczne – przypadkowe kadry",
                  description: "Każda okładka to losowy kadr z losowego Stories",
                  example: "Rozmyte zdjęcie ręki | Selfie | Fragment lakieru | Zdjęcie psa | Kawa – zero spójności"
                }
              }
            },
            
            // --- SEKCJA 5: Quiz ---
            {
              id: "s21",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka wchodzi na profil salonu. Widzi Highlights: 'Wakacje', 'Mój pies', 'Impreza', 'Zakupy', 'Pizza'. Co myśli?",
                options: [
                  "Wow, fajny salon, zarezerwuję wizytę",
                  "Czy to w ogóle salon? Wygląda jak prywatne konto",
                  "Sprawdzę ich prace w Highlights 'Pizza'",
                  "Super, właścicielka lubi to samo co ja!"
                ],
                correctIndex: 1,
                explanation: "Prywatne Highlights na profilu firmowym to sygnał: 'to nie jest profesjonalny biznes'. Klientka szuka informacji o usługach, cenach, opiniach – nie o Twoim psie. Profil firmowy = treści firmowe. Prywatne rzeczy zostaw na prywatnym koncie."
              }
            },
            
            // --- SEKCJA 6: Jak stworzyć Highlights ---
            {
              id: "s22",
              type: "heading",
              content: "Jak stworzyć Highlights krok po kroku"
            },
            {
              id: "s23",
              type: "step",
              stepNumber: 1,
              content: "**Zrób listę kategorii**\n\nWybierz 5-6 najważniejszych. Minimum: CENNIK, OPINIE, PRACE"
            },
            {
              id: "s24",
              type: "step",
              stepNumber: 2,
              content: "**Stwórz okładki w Canvie**\n\nWyszukaj \"Instagram Highlight Cover\" → wybierz zestaw → dostosuj kolory do swojej estetyki"
            },
            {
              id: "s25",
              type: "step",
              stepNumber: 3,
              content: "**Zbierz Stories do każdej kategorii**\n\nMożesz użyć starych Stories z archiwum lub stworzyć nowe specjalnie dla Highlights"
            },
            {
              id: "s26",
              type: "step",
              stepNumber: 4,
              content: "**Ustaw okładki**\n\nTwój profil → Highlight → Edytuj Highlight → Edytuj okładkę → Wybierz z galerii"
            },
            {
              id: "s27",
              type: "tip",
              content: "**Pro tip:** Okładkę możesz ustawić z dowolnego zdjęcia – nie musi być w Highlights. Wgraj okładkę do galerii telefonu, a potem wybierz ją jako okładkę."
            },
            {
              id: "s28",
              type: "interactive",
              content: "Otwórz teraz swój profil Instagram. Ile masz Highlights? Czy którykolwiek pomaga klientce (cennik, opinie, prace)? Czy okładki są spójne?",
              actionLabel: "Sprawdź swoje Highlights"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Usuń prywatne Highlights",
              description: "Piesek, wakacje, imprezy – to nie miejsce dla nich na profilu firmowym"
            },
            {
              id: "t2",
              title: "Stwórz 5 głównych kategorii",
              description: "CENNIK, OPINIE, PRACE, SALON, JAK DOJECHAĆ – minimum"
            },
            {
              id: "t3",
              title: "Zaprojektuj spójne okładki w Canvie",
              description: "Ten sam styl dla wszystkich okładek"
            },
            {
              id: "t4",
              title: "Wypełnij każdy Highlight",
              description: "Minimum 3-5 Stories w każdej kategorii"
            }
          ],
          checklist: [
            { id: "c1", text: "Mam minimum 5 kategorii Highlights (CENNIK obowiązkowy!)" },
            { id: "c2", text: "Usunęłam prywatne Highlights (wakacje, piesek, imprezy)" },
            { id: "c3", text: "Okładki są spójne – ten sam styl/kolor" },
            { id: "c4", text: "Nazwy kategorii są krótkie i jasne (max 10 znaków)" },
            { id: "c5", text: "Każda kategoria ma minimum 3 Stories" },
            { id: "c6", text: "CENNIK jest aktualny" }
          ],
          keyTakeaways: [
            "Highlights to Twoja darmowa mini-strona www – nie marnuj ich na prywatne treści",
            "5 obowiązkowych kategorii: CENNIK, OPINIE, PRACE, SALON, JAK DOJECHAĆ",
            "Spójne okładki = profesjonalny wygląd (stwórz w Canvie w 15 minut)",
            "Max 6-8 Highlights – więcej to chaos"
          ],
          nextLessonTitle: "Przypięte posty"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 6 - PRZYPIĘTE POSTY
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-6-przypiete-posty",
          title: "Przypięte posty",
          description: "Kontroluj, co klientka widzi jako pierwsze",
          estimatedMinutes: 12,
          intro: "Wyobraź sobie witrynę sklepową. Masz 3 miejsca na wystawę – co pokazujesz? Najpopularniejsze produkty? Najnowszą kolekcję? Wyprzedaż? Na Instagramie masz dokładnie to samo: 3 przypięte posty, które widzi KAŻDY odwiedzający jako pierwsze. Większość salonów ich nie używa. Ty nie popełnisz tego błędu.",
          sections: [
            // --- SEKCJA 1: Czym są przypięte posty ---
            {
              id: "s1",
              type: "heading",
              content: "Twoja kontrolowana witryna sklepowa"
            },
            {
              id: "s2",
              type: "text",
              content: "Przypięte posty to 3 pierwsze kwadraty, które widzi każdy odwiedzający Twój profil. Normalnie posty wyświetlają się chronologicznie – najnowszy pierwszy. Ale przypięte posty **zawsze są na górze**, niezależnie od daty publikacji.\n\nTo jedyne miejsce na Instagramie, gdzie masz pełną kontrolę nad tym, co klientka zobaczy jako pierwsze."
            },
            {
              id: "s3",
              type: "example",
              content: "**Dlaczego to ważne?**\n\nWyobraź sobie: Nowa klientka wchodzi na Twój profil. Spędziła na nim 8 sekund (tyle pokazują statystyki) zanim zdecyduje – zostać czy wyjść.\n\nW tych 8 sekundach widzi:\n• Zdjęcie profilowe\n• Bio\n• Highlights\n• **Pierwsze 3-6 postów**\n\nJeśli te pierwsze posty to:\n❌ Zdjęcie z wakacji z 2022\n❌ Repost cytatu motywacyjnego\n❌ Rozmyte zdjęcie lakierów\n\n...to tracisz ją.\n\nAle jeśli to:\n✅ Najlepsza realizacja\n✅ Post powitalny \"O salonie\"\n✅ Aktualna promocja\n\n...zostajesz w grze."
            },
            {
              id: "s4",
              type: "tip",
              content: "Przypięte posty to Twoja pierwsza linia obrony. To różnica między \"fajny profil, zapiszę na później\" (i zapomni) a \"wow, muszę się tu umówić\" (i rezerwuje)."
            },
            
            // --- SEKCJA 2: Strategia przypinania ---
            {
              id: "s5",
              type: "heading",
              content: "Strategia: 3 posty, 3 cele"
            },
            {
              id: "s6",
              type: "text",
              content: "Masz 3 miejsca na przypięte posty. Każde powinno pełnić inną funkcję:"
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 1,
              content: "**Post 1: PORTFOLIO – Twoja wizytówka**\n\nNajlepsze zdjęcie Twojej pracy. To, które mówi \"oto co potrafię\".\n\n✅ Wybierz: Najlepszą realizację, tę z największą liczbą lajków, albo taką która najlepiej pokazuje Twoją specjalizację\n❌ Unikaj: Kolaży, zdjęć słabej jakości, czegoś \"zwykłego\""
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 2,
              content: "**Post 2: PRZEDSTAWIENIE – Kim jesteś**\n\nPost powitalny, przedstawiający Ciebie/salon. \"Hej, to my!\"\n\n✅ Zawiera: Zdjęcie Ciebie/zespołu, krótką historię, zaproszenie do kontaktu\n❌ Unikaj: Długich elaboratów, korporacyjnego żargonu"
            },
            {
              id: "s9",
              type: "step",
              stepNumber: 3,
              content: "**Post 3: OFERTA – Dlaczego teraz**\n\nAktualna promocja, sezonowa oferta lub post z opiniami klientek.\n\n✅ Cel: Dać powód do działania TERAZ\n❌ Pamiętaj: Rotuj gdy oferta się skończy!"
            },
            
            // --- SEKCJA 3: Comparison ---
            {
              id: "s10",
              type: "comparison",
              content: "Dobre vs złe przypięte posty",
              comparison: {
                good: {
                  title: "Strategiczne wybory",
                  description: "Najlepsza praca + post o salonie + aktualna promocja",
                  example: "1️⃣ Stunning french na karuzeli | 2️⃣ 'Hej, jestem Kasia, prowadzę salon od 5 lat...' | 3️⃣ 'WIOSENNA PROMOCJA -20% na pierwszy zabieg'"
                },
                bad: {
                  title: "Przypadkowe treści",
                  description: "Stare zdjęcia, reposty, prywatne treści",
                  example: "1️⃣ Cytat 'Życie jest piękne' | 2️⃣ Zdjęcie kawy | 3️⃣ Promocja świąteczna 2022"
                }
              }
            },
            
            // --- SEKCJA 4: Quiz ---
            {
              id: "s11",
              type: "quiz",
              content: "",
              quiz: {
                question: "Jest lipiec. W Twoich przypiętych postach jest 'PROMOCJA ŚWIĄTECZNA -20%' ze zdjęciem choinki. Co myśli klientka?",
                options: [
                  "Super, promocja nadal działa!",
                  "Ten profil jest nieaktualny, chyba salon nie działa",
                  "Fajnie, wrócę w grudniu",
                  "Nic, nie zauważa daty"
                ],
                correctIndex: 1,
                explanation: "Przestarzała promocja to sygnał: 'ten profil jest martwy'. Klientka nie wie, czy salon w ogóle jeszcze istnieje. Zawsze sprawdzaj przypięte posty – jeśli oferta się skończyła, odepnij lub zamień na coś aktualnego."
              }
            },
            
            // --- SEKCJA 5: Rotacja ---
            {
              id: "s12",
              type: "heading",
              content: "Kiedy zmieniać przypięte posty"
            },
            {
              id: "s13",
              type: "text",
              content: "Przypięte posty nie są \"ustaw i zapomnij\". Powinny żyć razem z Twoim salonem:"
            },
            {
              id: "s14",
              type: "step",
              stepNumber: 1,
              content: "**Nowa promocja?** → Zamień post promocyjny\n\nKończysz wiosenną ofertę, zaczynasz letnią? Wymień."
            },
            {
              id: "s15",
              type: "step",
              stepNumber: 2,
              content: "**Lepsza realizacja?** → Zamień post portfolio\n\nZrobiłaś stylizację, która bije wszystkie poprzednie? Przypnij ją."
            },
            {
              id: "s16",
              type: "step",
              stepNumber: 3,
              content: "**Zmiana sezonu?** → Przegląd wszystkiego\n\nCo kwartał przeglądaj przypięte posty. Czy nadal są aktualne? Czy pasują do sezonu?"
            },
            {
              id: "s17",
              type: "warning",
              content: "**Najgorszy błąd:** Przypięta przestarzała promocja. \"Walentynkowa oferta -30%\" w maju to sygnał, że profil jest martwy. Zawsze sprawdzaj, czy przypięte posty są aktualne."
            },
            
            // --- SEKCJA 6: Jak przypiąć ---
            {
              id: "s18",
              type: "heading",
              content: "Jak przypiąć post – instrukcja"
            },
            {
              id: "s19",
              type: "step",
              stepNumber: 1,
              content: "**Na Instagramie:**\n1. Otwórz post, który chcesz przypiąć\n2. Kliknij trzy kropki (⋮) w prawym górnym rogu\n3. Wybierz \"Przypnij do profilu\"\n\nPost pojawi się jako pierwszy na Twojej siatce z małą ikoną pinezki."
            },
            {
              id: "s20",
              type: "step",
              stepNumber: 2,
              content: "**Na Facebooku:**\n1. Znajdź post na swojej stronie\n2. Kliknij trzy kropki (⋮) w prawym górnym rogu posta\n3. Wybierz \"Przypnij post\"\n\nPost będzie wyświetlany jako pierwszy na Twojej stronie."
            },
            {
              id: "s21",
              type: "tip",
              content: "Możesz mieć max 3 przypięte posty na Instagramie. Jeśli przypiłaś już 3, a chcesz przypiąć 4. – najpierw odepnij jeden z istniejących."
            },
            {
              id: "s22",
              type: "interactive",
              content: "Otwórz teraz swój profil Instagram. Czy masz przypięte posty? Czy są to strategiczne wybory, czy przypadkowe treści? Czy któryś jest przestarzały?",
              actionLabel: "Sprawdź przypięte posty"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Wybierz 3 posty do przypięcia",
              description: "Portfolio + przedstawienie + oferta/opinie"
            },
            {
              id: "t2",
              title: "Przypiąć posty na Instagramie",
              description: "Trzy kropki → Przypnij do profilu"
            },
            {
              id: "t3",
              title: "Sprawdź aktualność",
              description: "Czy żaden przypięty post nie jest przestarzały?"
            },
            {
              id: "t4",
              title: "Przypiąć post na Facebooku",
              description: "Minimum jeden post z aktualną ofertą lub przedstawieniem"
            }
          ],
          checklist: [
            { id: "c1", text: "Mam 3 przypięte posty na Instagramie" },
            { id: "c2", text: "Jeden z nich to najlepsza realizacja/portfolio" },
            { id: "c3", text: "Jeden to post powitalny/o salonie" },
            { id: "c4", text: "Żaden przypięty post nie jest przestarzały" },
            { id: "c5", text: "Mam przypięty post na Facebooku" },
            { id: "c6", text: "Mam plan kiedy przeglądam przypięte (np. raz w miesiącu)" }
          ],
          keyTakeaways: [
            "Przypięte posty to Twoja kontrolowana witryna – klientka widzi je jako pierwsze",
            "Strategia 3 postów: najlepsza praca + przedstawienie + aktualna oferta",
            "Rotuj regularnie – przestarzała promocja to sygnał martwego profilu",
            "Raz w miesiącu sprawdź, czy wszystkie przypięte posty są aktualne"
          ],
          nextLessonTitle: "Wizytówka Google – podstawowa konfiguracja"
        }
      ]
    },

    // ═══════════════════════════════════════════════════════════════════════════
    // MODUŁ 2 - WIZYTÓWKA GOOGLE
    // ═══════════════════════════════════════════════════════════════════════════
    {
      id: "modul-2-google",
      title: "Wizytówka Google",
      description: "Podstawa widoczności lokalnej – konfiguracja krok po kroku",
      lessons: [
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 7 - WIZYTÓWKA GOOGLE – PODSTAWY
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-7-google-podstawy",
          title: "Wizytówka Google – podstawowa konfiguracja",
          description: "Pierwszy krok do bycia znajdowanym przez lokalne klientki",
          estimatedMinutes: 18,
          intro: "\"Salon manicure blisko mnie\" – to jedno z najczęstszych wyszukiwań w Google. Klientka wpisuje, Google pokazuje mapkę z wynikami. Jeśli nie masz wizytówki Google – nie istniejesz w tych wynikach. Dosłownie. Twoja konkurentka z drugiej strony ulicy ma wizytówkę? To ona dostanie klientkę, nie Ty.",
          sections: [
            // --- SEKCJA 1: Dlaczego Google ---
            {
              id: "s1",
              type: "heading",
              content: "\"Salon paznokci blisko mnie\" – czy Cię znajdą?"
            },
            {
              id: "s2",
              type: "text",
              content: "Kiedy klientka szuka lokalnej usługi, jej pierwszym odruchem jest Google. Nie Instagram, nie Facebook – **Google**.\n\nWpisuje: \"salon manicure Kraków Podgórze\" lub po prostu \"paznokcie blisko mnie\".\n\nGoogle pokazuje:\n• 3 wyniki z mapki (tzw. \"Local Pack\")\n• Oceny, godziny otwarcia, odległość\n• Zdjęcia z wizytówki\n\n**Jeśli nie masz wizytówki Google – nie pojawisz się w tych wynikach.** Nawet jeśli jesteś 50 metrów od klientki. Nawet jeśli masz najlepsze opinie na Instagramie."
            },
            {
              id: "s3",
              type: "example",
              content: "**Historia dwóch salonów**\n\n**Salon A** – Kasia, świetna stylistka, 5 lat doświadczenia, piękny profil na IG.\nBrak wizytówki Google. Klientki trafiają tylko z polecenia i social mediów.\n\n**Salon B** – Ania, rok doświadczenia, profil IG mniej imponujący.\nMa wizytówkę Google z 47 opiniami (średnia 4.9). Pojawia się w wynikach \"manicure + dzielnica\".\n\n**Wynik:** Ania dostaje 15-20 nowych klientek miesięcznie z Google. Kasia – zero z tego źródła.\n\n\"Nie wiedziałam, że to takie ważne\" – mówi Kasia, która po założeniu wizytówki zobaczyła natychmiastowy wzrost zapytań."
            },
            {
              id: "s4",
              type: "tip",
              content: "Wizytówka Google (Google Business Profile) jest **całkowicie darmowa**. Zero opłat za założenie, utrzymanie czy wyświetlanie w wynikach. To darmowa reklama, którą większość małych salonów kompletnie ignoruje."
            },
            
            // --- SEKCJA 2: Jak zacząć ---
            {
              id: "s5",
              type: "heading",
              content: "Krok pierwszy: Sprawdź, czy wizytówka już istnieje"
            },
            {
              id: "s6",
              type: "text",
              content: "Zanim zaczniesz tworzyć nową wizytówkę – **sprawdź, czy już nie istnieje**.\n\nGoogle czasem automatycznie tworzy wizytówki na podstawie danych z internetu. Jeśli Twój salon jest gdziekolwiek wymieniony online (Booksy, Facebook, strona www), możliwe że wizytówka już jest."
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 1,
              content: "**Wyszukaj w Google:**\n\nWpisz dokładną nazwę swojego salonu + miasto. Np. \"Beauty Studio Kraków\"\n\nJeśli po prawej stronie wyników pojawia się mapa z Twoim salonem – wizytówka istnieje."
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 2,
              content: "**Sprawdź w Google Maps:**\n\nOtwórz maps.google.com, wyszukaj nazwę salonu.\n\nJeśli się pojawia – wizytówka istnieje."
            },
            {
              id: "s9",
              type: "warning",
              content: "**Wizytówka istnieje, ale nie masz do niej dostępu?** To częsty problem. Google pozwala \"przejąć\" taką wizytówkę – proces weryfikacji trwa kilka dni, ale jest możliwy."
            },
            
            // --- SEKCJA 3: Tworzenie wizytówki ---
            {
              id: "s10",
              type: "heading",
              content: "Tworzenie lub przejmowanie wizytówki"
            },
            {
              id: "s11",
              type: "step",
              stepNumber: 1,
              content: "**Wejdź na business.google.com**\n\nZaloguj się kontem Google (tym, którego używasz na co dzień lub stwórz osobne dla biznesu)."
            },
            {
              id: "s12",
              type: "step",
              stepNumber: 2,
              content: "**Wyszukaj nazwę swojego salonu**\n\nGoogle pokaże czy taka firma już istnieje w bazie."
            },
            {
              id: "s13",
              type: "step",
              stepNumber: 3,
              content: "**Jeśli istnieje → Kliknij \"Zarządzaj teraz\" lub \"Przejmij\"**\n\nGoogle wyśle kod weryfikacyjny:\n• Pocztówką na adres salonu (5-14 dni)\n• Telefonem (jeśli numer jest w systemie)\n• Emailem (jeśli jest w systemie)"
            },
            {
              id: "s14",
              type: "step",
              stepNumber: 4,
              content: "**Jeśli nie istnieje → Kliknij \"Dodaj firmę\"**\n\nPrzejdziesz przez kreator:\n1. Nazwa firmy\n2. Kategoria (np. \"Salon paznokci\")\n3. Adres\n4. Numer telefonu\n5. Strona www (jeśli masz)"
            },
            {
              id: "s15",
              type: "tip",
              content: "Weryfikacja pocztówką trwa najdłużej, ale jest najpewniejsza. Możesz zacząć uzupełniać wizytówkę od razu – będzie widoczna publicznie dopiero po weryfikacji."
            },
            
            // --- SEKCJA 4: Podstawowe dane ---
            {
              id: "s16",
              type: "heading",
              content: "Dane, które musisz uzupełnić od razu"
            },
            {
              id: "s17",
              type: "text",
              content: "Po weryfikacji (lub w trakcie oczekiwania) uzupełnij podstawowe dane. Im więcej informacji, tym lepiej Google Cię pozycjonuje:"
            },
            {
              id: "s18",
              type: "step",
              stepNumber: 1,
              content: "**Nazwa** – Oficjalna nazwa salonu. NIE dodawaj słów kluczowych typu \"najlepszy\" czy \"tani\"! Google za to karze obniżeniem pozycji."
            },
            {
              id: "s19",
              type: "step",
              stepNumber: 2,
              content: "**Adres** – Dokładny, z numerem lokalu. \"ul. Długa 15\" to za mało – \"ul. Długa 15/2, II piętro\" jest lepiej."
            },
            {
              id: "s20",
              type: "step",
              stepNumber: 3,
              content: "**Telefon** – Ten sam numer co na FB/IG. Spójność buduje wiarygodność dla Google."
            },
            {
              id: "s21",
              type: "step",
              stepNumber: 4,
              content: "**Strona www** – Jeśli masz. Link do Booksy też działa!\n\nJeśli nie masz strony – możesz podać link do profilu Instagram lub Booksy."
            },
            {
              id: "s22",
              type: "step",
              stepNumber: 5,
              content: "**Godziny otwarcia** – AKTUALNE! Nic tak nie irytuje klientki jak przyjazd do zamkniętego salonu.\n\nAktualizuj przy zmianie godzin, świętach, urlopach."
            },
            
            // --- SEKCJA 5: Quiz ---
            {
              id: "s23",
              type: "quiz",
              content: "",
              quiz: {
                question: "Zakładasz wizytówkę Google. Jaka nazwa będzie NAJLEPSZA?",
                options: [
                  "Najlepszy salon manicure Kraków - Beauty Studio - paznokcie hybrydowe tanio",
                  "Beauty Studio",
                  "Beauty Studio Kraków - Salon Manicure",
                  "Beauty Studio - profesjonalny salon stylizacji paznokci i pedicure w Krakowie"
                ],
                correctIndex: 1,
                explanation: "Google KARZE za upychanie słów kluczowych w nazwie! Twoja nazwa powinna być dokładnie taka, jak na szyldzie salonu. 'Beauty Studio' – i tyle. Dodawanie 'najlepszy', 'tanio', listy usług obniża Twoją pozycję w wynikach."
              }
            },
            
            // --- SEKCJA 6: Częste błędy ---
            {
              id: "s24",
              type: "heading",
              content: "Błędy, które obniżają Twoją pozycję"
            },
            {
              id: "s25",
              type: "comparison",
              content: "Co Google lubi vs czego nie lubi",
              comparison: {
                good: {
                  title: "Profesjonalna, kompletna wizytówka",
                  description: "Prawdziwa nazwa, dokładny adres, aktualne godziny, zdjęcia, regularne posty",
                  example: "Beauty Studio | ul. Długa 15/2, Kraków | Pon-Sob 10:00-19:00 | 47 opinii (4.9★)"
                },
                bad: {
                  title: "Spam słów kluczowych i zaniedbanie",
                  description: "Sztuczna nazwa z \"najlepszy\", brak godzin, brak zdjęć, zero aktywności",
                  example: "NAJLEPSZY SALON MANICURE KRAKÓW TANIO PAZNOKCIE | brak adresu | godziny: ? | 0 opinii"
                }
              }
            },
            {
              id: "s26",
              type: "warning",
              content: "Google może **zawiesić** Twoją wizytówkę za nadużycia: fałszywe opinie, spamowana nazwa, fałszywy adres. Odzyskanie zawieszonej wizytówki to proces trwający tygodnie."
            },
            {
              id: "s27",
              type: "interactive",
              content: "Wpisz w Google nazwę swojego salonu + miasto. Czy pojawia się wizytówka? Jeśli tak – czy masz do niej dostęp? Jeśli nie – czas ją stworzyć!",
              actionLabel: "Sprawdź swoją wizytówkę"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Sprawdź, czy masz wizytówkę w Google",
              description: "Wyszukaj nazwę salonu + miasto w Google"
            },
            {
              id: "t2",
              title: "Utwórz lub przejmij wizytówkę",
              description: "Wejdź na business.google.com i przejdź przez proces"
            },
            {
              id: "t3",
              title: "Uzupełnij podstawowe dane",
              description: "Nazwa, adres, telefon, strona www, godziny"
            },
            {
              id: "t4",
              title: "Zamów weryfikację",
              description: "Wybierz metodę weryfikacji i poczekaj na kod"
            }
          ],
          checklist: [
            { id: "c1", text: "Mam konto w Google Business Profile" },
            { id: "c2", text: "Wizytówka jest zweryfikowana (lub w trakcie)" },
            { id: "c3", text: "Nazwa jest poprawna (bez spamu słów kluczowych)" },
            { id: "c4", text: "Adres jest dokładny (z numerem lokalu)" },
            { id: "c5", text: "Telefon i strona www są uzupełnione" },
            { id: "c6", text: "Godziny otwarcia są aktualne" }
          ],
          keyTakeaways: [
            "Bez wizytówki Google nie istniejesz w lokalnych wynikach wyszukiwania",
            "Wizytówka jest całkowicie darmowa – to najlepsza darmowa reklama dla lokalnego biznesu",
            "NIE upychaj słów kluczowych w nazwie – Google za to karze obniżeniem pozycji",
            "Weryfikacja trwa do 2 tygodni – zacznij teraz, nie odkładaj"
          ],
          nextLessonTitle: "Opis salonu w Google"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 8 - OPIS SALONU W GOOGLE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-8-opis-google",
          title: "Opis salonu w Google",
          description: "750 znaków, żeby przekonać klientkę do wizyty",
          estimatedMinutes: 12,
          intro: "Masz 750 znaków, żeby powiedzieć klientce: 'Właśnie tutaj chcesz przyjść'. Nie 750 słów – 750 znaków. To mniej niż ta strona tekstu. W tych znakach musisz zmieścić: kim jesteś, co robisz, gdzie jesteś i dlaczego właśnie TY. Większość salonów pisze 'Profesjonalny salon. Zapraszamy.' – i marnuje tę szansę.",
          sections: [
            // --- SEKCJA 1: Dlaczego opis jest ważny ---
            {
              id: "s1",
              type: "heading",
              content: "750 znaków – Twoja szansa na przekonanie"
            },
            {
              id: "s2",
              type: "text",
              content: "Opis w wizytówce Google to jedno z pierwszych miejsc, gdzie klientka szuka informacji po znalezieniu Cię w wynikach.\n\nKlika na Twoją wizytówkę i widzi:\n• Zdjęcia\n• Godziny otwarcia\n• **Opis** (jeśli go masz)\n• Opinie\n\nJeśli opis mówi \"Zapraszamy do naszego salonu\" – klientka nic się nie dowie. Jeśli mówi konkretnie co robisz, gdzie jesteś i dlaczego warto – masz większą szansę na kliknięcie w \"Zadzwoń\"."
            },
            {
              id: "s3",
              type: "example",
              content: "**Dwa opisy – która klientka zadzwoni?**\n\n**Opis A:**\n\"Witamy w naszym salonie! Oferujemy profesjonalne usługi kosmetyczne. Zapraszamy!\"\n\n*Klientka myśli:* \"Ale jakie usługi? Gdzie to jest? Czym się wyróżniają? Nic nie wiem...\"\n\n**Opis B:**\n\"Beauty Studio to salon manicure hybrydowego w centrum Krakowa, przy ul. Długiej 15. Od 5 lat specjalizujemy się w stylizacji paznokci – szczególnie french i zdobień geometrycznych. Używamy wyłącznie lakierów premium (Semilac, Indigo). Parking przy budynku. Rezerwacje online lub telefonicznie.\"\n\n*Klientka myśli:* \"Kraków, centra, specjalizacja we french, 5 lat doświadczenia, parking jest. Dzwonię.\""
            },
            {
              id: "s4",
              type: "tip",
              content: "Opis w Google to NIE miejsce na reklamowe hasła. To miejsce na konkretne informacje. Klientka szuka odpowiedzi – daj jej je."
            },
            
            // --- SEKCJA 2: Struktura opisu ---
            {
              id: "s5",
              type: "heading",
              content: "Struktura skutecznego opisu – 4 elementy"
            },
            {
              id: "s6",
              type: "step",
              stepNumber: 1,
              content: "**Zdanie otwierające: Kim jesteś + gdzie**\n\nRozpocznij od nazwy i lokalizacji. Wpleć nazwę dzielnicy.\n\nPrzykład: \"Beauty Studio to salon manicure hybrydowego w Krakowie Podgórzu, przy ul. Długiej 15.\""
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 2,
              content: "**Główne usługi: Co robisz**\n\nWymień 3-4 główne usługi. Nie wszystkie – najważniejsze.\n\nPrzykład: \"Specjalizujemy się w manicure hybrydowym, stylizacji paznokci żelowych i pedicure spa.\""
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 3,
              content: "**Wyróżnik: Dlaczego TY**\n\nCo Cię wyróżnia? Doświadczenie? Specjalizacja? Produkty?\n\nPrzykład: \"Od 5 lat specjalizujemy się w french manicure i zdobień geometrycznych. Używamy wyłącznie lakierów premium.\""
            },
            {
              id: "s9",
              type: "step",
              stepNumber: 4,
              content: "**Zaproszenie: Co dalej**\n\nZakończ zachętą do kontaktu lub wizyty.\n\nPrzykład: \"Zapraszamy na wizytę – rezerwacje online lub telefonicznie.\""
            },
            
            // --- SEKCJA 3: Comparison ---
            {
              id: "s10",
              type: "comparison",
              content: "Opis konkretny vs ogólnikowy",
              comparison: {
                good: {
                  title: "Konkretny i lokalny",
                  description: "Zawiera usługi, lokalizację (dzielnica), wyróżnik i zaproszenie do kontaktu",
                  example: "Beauty Studio to salon manicure hybrydowego w centrum Krakowa, przy ul. Długiej 15. Specjalizujemy się w trwałych stylizacjach paznokci, french manicure i zdobień. Od 5 lat dbamy o paznokcie krakowianek w przyjaznej atmosferze. Umów się online lub zadzwoń!"
                },
                bad: {
                  title: "Ogólnikowy i pusty",
                  description: "Nic nie mówi, brzmi jak każdy inny salon w Polsce",
                  example: "Witamy w naszym salonie! Oferujemy profesjonalne usługi kosmetyczne. Nasz zespół to wykwalifikowani specjaliści. Zapraszamy serdecznie!"
                }
              }
            },
            
            // --- SEKCJA 4: Zakazy Google ---
            {
              id: "s11",
              type: "heading",
              content: "Czego NIE pisać – zakazy Google"
            },
            {
              id: "s12",
              type: "text",
              content: "Google ma surowe zasady dotyczące opisów. Złamanie ich może skutkować obniżeniem pozycji lub nawet zawieszeniem wizytówki:"
            },
            {
              id: "s13",
              type: "warning",
              content: "**Google ZABRANIA:**\n\n❌ **Linków** – żadnych adresów www w opisie\n❌ **Numerów telefonów** – od tego jest pole \"Telefon\"\n❌ **Promocji cenowych** – \"50% taniej!\" nie wolno\n❌ **WIELKICH LITER** – nie krzycz na klienta\n❌ **Przesadzonego spamu słów kluczowych** – \"manicure Kraków manicure hybrydowy Kraków paznokcie\""
            },
            {
              id: "s14",
              type: "tip",
              content: "Naturalnie wpleć nazwę dzielnicy/osiedla. \"Salon w Krakowie Podgórzu\" jest lepszy niż \"Salon w Krakowie\" – trafia do bardziej konkretnych wyszukiwań i budzi zaufanie lokalnych klientek."
            },
            
            // --- SEKCJA 5: Quiz ---
            {
              id: "s15",
              type: "quiz",
              content: "",
              quiz: {
                question: "Który opis jest NIEPOPRAWNY wg zasad Google?",
                options: [
                  "Beauty Studio to salon manicure w Krakowie Kazimierzu, specjalizujący się w stylizacji hybrydowej.",
                  "Profesjonalny salon kosmetyczny. 10 lat doświadczenia. Zapraszamy!",
                  "NAJLEPSZY SALON W KRAKOWIE!!! Zadzwoń: 123-456-789. Promocja -50%! www.salon.pl",
                  "Salon manicure przy ul. Długiej. Specjalizacja: french i zdobienia geometryczne."
                ],
                correctIndex: 2,
                explanation: "Opis C łamie wszystkie zasady: WIELKIE LITERY (krzyczenie), numer telefonu (zabroniony w opisie), promocja cenowa (zabroniona), link (zabroniony). Taki opis może spowodować zawieszenie wizytówki."
              }
            },
            
            // --- SEKCJA 6: Implementacja ---
            {
              id: "s16",
              type: "heading",
              content: "Jak dodać opis do wizytówki"
            },
            {
              id: "s17",
              type: "step",
              stepNumber: 1,
              content: "Wejdź na **business.google.com** i zaloguj się"
            },
            {
              id: "s18",
              type: "step",
              stepNumber: 2,
              content: "Wybierz swoją wizytówkę (jeśli masz ich więcej)"
            },
            {
              id: "s19",
              type: "step",
              stepNumber: 3,
              content: "Kliknij **\"Edytuj profil\"** lub **\"Informacje\"**"
            },
            {
              id: "s20",
              type: "step",
              stepNumber: 4,
              content: "Znajdź pole **\"Opis firmy\"** i wpisz swój tekst (max 750 znaków)"
            },
            {
              id: "s21",
              type: "step",
              stepNumber: 5,
              content: "Kliknij **\"Zapisz\"** – zmiany pojawią się w ciągu kilku godzin"
            },
            {
              id: "s22",
              type: "interactive",
              content: "Napisz teraz swój opis używając struktury: kim jesteś + gdzie → co robisz → co Cię wyróżnia → zaproszenie. Policz znaki – masz max 750.",
              actionLabel: "Napisz swój opis"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Napisz opis używając 4-elementowej struktury",
              description: "Kim + gdzie → co robisz → wyróżnik → zaproszenie (max 750 znaków)"
            },
            {
              id: "t2",
              title: "Sprawdź, czy nie łamiesz zasad",
              description: "Brak linków, telefonów, promocji cenowych, WIELKICH LITER"
            },
            {
              id: "t3",
              title: "Wpleć nazwę dzielnicy",
              description: "Zamiast \"Kraków\" napisz \"Kraków Podgórze\" lub \"Kraków Kazimierz\""
            },
            {
              id: "t4",
              title: "Dodaj opis do wizytówki",
              description: "business.google.com → Edytuj profil → Opis firmy"
            }
          ],
          checklist: [
            { id: "c1", text: "Opis ma mniej niż 750 znaków" },
            { id: "c2", text: "Zaczyna się od nazwy i lokalizacji" },
            { id: "c3", text: "Wymienia główne usługi (3-4)" },
            { id: "c4", text: "Zawiera wyróżnik (doświadczenie, specjalizacja)" },
            { id: "c5", text: "Zawiera nazwę dzielnicy (nie tylko miasta)" },
            { id: "c6", text: "Nie zawiera zakazanych elementów (linki, telefony, promocje)" }
          ],
          keyTakeaways: [
            "750 znaków to mało – każde słowo musi nieść wartość",
            "Struktura: kim jesteś + co robisz + co Cię wyróżnia + zaproszenie",
            "Wpleć nazwę dzielnicy – to poprawia pozycjonowanie lokalne",
            "NIE używaj: linków, telefonów, promocji, WIELKICH LITER – Google karze"
          ],
          nextLessonTitle: "Kategorie usług w Google"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 9 - KATEGORIE USŁUG W GOOGLE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-9-kategorie-google",
          title: "Kategorie usług w Google",
          description: "Wybierz właściwe kategorie, żeby być znajdowana",
          estimatedMinutes: 10,
          intro: "Klientka wpisuje 'manicure Kraków'. Google pokazuje salony. Twój salon się nie pojawia – mimo że robisz manicure. Dlaczego? Bo wybrałaś kategorię 'Salon kosmetyczny' zamiast 'Salon manicure'. Kategoria główna to jeden z najważniejszych czynników pozycjonowania – i jeden z najczęściej popełnianych błędów.",
          sections: [
            {
              id: "s1",
              type: "heading",
              content: "Kategorie = widoczność w wyszukiwaniach"
            },
            {
              id: "s2",
              type: "text",
              content: "Kiedy klientka szuka 'salon paznokci Kraków', Google nie skanuje treści Twojego opisu. Patrzy na **kategorię**.\n\nJeśli Twoja kategoria główna to 'Salon kosmetyczny' – konkurujesz ze WSZYSTKIMI salonami kosmetycznymi. Fryzjerskimi, makijażowymi, spa. Tysiące wyników.\n\nJeśli Twoja kategoria to 'Salon manicure' lub 'Salon paznokci' – konkurujesz tylko z salonami paznokci. Znacznie mniej konkurencji. Znacznie większa szansa na wyświetlenie."
            },
            {
              id: "s3",
              type: "example",
              content: "**Prosty test**\n\nWpisz w Google \"salon kosmetyczny Kraków\" – zobaczysz setki wyników.\nWpisz \"salon manicure Kraków\" – mniej wyników, ale bardziej konkretnych.\n\nGdzie chcesz być? Tam, gdzie konkurujesz z tysiącami, czy tam, gdzie konkurujesz z dziesiątkami – ale trafionymi?"
            },
            {
              id: "s4",
              type: "tip",
              content: "Im bardziej precyzyjna kategoria, tym mniejsza konkurencja i większa szansa na wyświetlenie. 'Salon paznokci' > 'Salon kosmetyczny'. 'Salon pedicure' > 'Salon beauty'."
            },
            
            // --- Kategoria główna ---
            {
              id: "s5",
              type: "heading",
              content: "Kategoria główna – Twój główny biznes"
            },
            {
              id: "s6",
              type: "text",
              content: "Możesz wybrać tylko JEDNĄ kategorię główną. To najważniejsza decyzja przy konfiguracji wizytówki.\n\n**Pytanie do siebie:** Gdyby klientka miała opisać Twój salon jednym zdaniem, co by powiedziała? 'To salon paznokci' czy 'To salon kosmetyczny'?\n\nWybierz kategorię, która NAJLEPIEJ opisuje Twój główny biznes."
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 1,
              content: "**Dla salonu specjalizującego się w paznokciach:**\n• \"Salon paznokci\" (najlepsza opcja)\n• \"Salon manicure\"\n• \"Stylizacja paznokci\""
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 2,
              content: "**Dla salonu z wieloma usługami:**\n• Wybierz kategorię dla GŁÓWNEJ usługi (tej, która przynosi najwięcej klientów)\n• Resztę dodasz jako kategorie dodatkowe"
            },
            {
              id: "s9",
              type: "warning",
              content: "NIE wybieraj 'Salon kosmetyczny' jako głównej kategorii, jeśli specjalizujesz się w paznokciach! Konkurujesz wtedy z WSZYSTKIMI salonami kosmetycznymi – fryzjerami, spa, makijażystkami."
            },
            
            // --- Kategorie dodatkowe ---
            {
              id: "s10",
              type: "heading",
              content: "Kategorie dodatkowe – rozszerz widoczność"
            },
            {
              id: "s11",
              type: "text",
              content: "Oprócz kategorii głównej możesz dodać do **9 kategorii dodatkowych**. To szansa na pojawienie się w różnych wyszukiwaniach."
            },
            {
              id: "s12",
              type: "example",
              content: "**Przykład dla salonu paznokci:**\n\n• Salon paznokci (główna)\n• Salon manicure\n• Salon pedicure\n• Stylizacja paznokci\n• Salon kosmetyczny\n\n**Przykład dla salonu z wieloma usługami:**\n\n• Salon kosmetyczny (główna)\n• Salon manicure\n• Salon pedicure\n• Salon depilacji\n• Gabinet kosmetyczny"
            },
            {
              id: "s13",
              type: "tip",
              content: "Sprawdź, jakie kategorie mają Twoi konkurenci! Wyszukaj w Google ich nazwy i zobacz w ich wizytówkach. Możesz podejrzeć ich strategie."
            },
            
            // --- Quiz ---
            {
              id: "s14",
              type: "quiz",
              content: "",
              quiz: {
                question: "Prowadzisz salon, w którym 80% klientek przychodzi na manicure hybrydowy. Jaka powinna być Twoja kategoria GŁÓWNA?",
                options: [
                  "Salon kosmetyczny (bo mam też inne usługi)",
                  "Salon beauty (brzmi nowocześniej)",
                  "Salon paznokci lub Salon manicure (główna usługa)",
                  "Gabinet kosmetyczny (brzmi profesjonalniej)"
                ],
                correctIndex: 2,
                explanation: "Kategoria główna powinna odzwierciedlać GŁÓWNĄ usługę. Skoro 80% klientek przychodzi na manicure – 'Salon paznokci' lub 'Salon manicure' to właściwy wybór. Inne usługi dodasz jako kategorie dodatkowe."
              }
            },
            
            // --- Usługi ---
            {
              id: "s15",
              type: "heading",
              content: "Usługi w wizytówce – dodatkowa widoczność"
            },
            {
              id: "s16",
              type: "text",
              content: "Oprócz kategorii, Google pozwala dodać konkretne **usługi z cenami**. To dodatkowe miejsce, gdzie klientka może zobaczyć Twoją ofertę.\n\nGdzie dodać: business.google.com → Twoja wizytówka → Usługi → Dodaj usługę"
            },
            {
              id: "s17",
              type: "step",
              stepNumber: 1,
              content: "**Dodaj główne usługi:**\n• Manicure hybrydowy – 80 zł\n• Pedicure spa – 120 zł\n• Zdobienie paznokci – od 10 zł"
            },
            {
              id: "s18",
              type: "step",
              stepNumber: 2,
              content: "**Aktualizuj ceny!**\nNie ma nic gorszego niż przestarzałe ceny. Klientka przychodzi oczekując 80 zł, a płaci 120 zł."
            },
            {
              id: "s19",
              type: "interactive",
              content: "Sprawdź teraz swoją wizytówkę Google. Jaka jest Twoja kategoria główna? Czy jest precyzyjna, czy zbyt ogólna? Ile masz kategorii dodatkowych?",
              actionLabel: "Sprawdź swoje kategorie"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Sprawdź obecną kategorię główną",
              description: "business.google.com → Twoja wizytówka → Kategoria"
            },
            {
              id: "t2",
              title: "Zmień kategorię główną na precyzyjną",
              description: "Jeśli masz 'Salon kosmetyczny' a specjalizujesz się w paznokciach – zmień na 'Salon paznokci'"
            },
            {
              id: "t3",
              title: "Dodaj kategorie dodatkowe",
              description: "Dodaj wszystkie pasujące kategorie (max 9)"
            },
            {
              id: "t4",
              title: "Dodaj usługi z cenami",
              description: "Główne usługi z aktualnymi cenami"
            }
          ],
          checklist: [
            { id: "c1", text: "Kategoria główna jest precyzyjna (np. 'Salon paznokci')" },
            { id: "c2", text: "Mam dodane kategorie dodatkowe (wszystkie pasujące)" },
            { id: "c3", text: "Sprawdziłam kategorie konkurencji" },
            { id: "c4", text: "Dodałam główne usługi z cenami" },
            { id: "c5", text: "Ceny usług są aktualne" }
          ],
          keyTakeaways: [
            "Kategoria główna decyduje, w jakich wyszukiwaniach się pojawiasz",
            "Im precyzyjniejsza kategoria, tym mniejsza konkurencja (Salon paznokci > Salon kosmetyczny)",
            "Możesz mieć do 9 kategorii dodatkowych – wykorzystaj je wszystkie",
            "Podglądaj kategorie konkurencji – to legalne i mądre"
          ],
          nextLessonTitle: "Zdjęcia w wizytówce Google"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 10 - ZDJĘCIA W WIZYTÓWCE GOOGLE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-10-zdjecia-google",
          title: "Zdjęcia w wizytówce Google",
          description: "Zdjęcia zwiększają kliknięcia o 42% – pokaż swój salon",
          estimatedMinutes: 12,
          intro: "Badania Google pokazują, że wizytówki ze zdjęciami otrzymują 42% więcej kliknięć w 'jak dojechać' i 35% więcej kliknięć na stronę www. Zdjęcia budują zaufanie jak nic innego – klientka widzi, gdzie przyjdzie, jak wygląda salon, co może oczekiwać. A większość salonów ma... 2-3 rozmyte zdjęcia z telefonu.",
          sections: [
            {
              id: "s1",
              type: "heading",
              content: "Zdjęcia = zaufanie + kliknięcia"
            },
            {
              id: "s2",
              type: "text",
              content: "Klientka widzi dwa salony w Google Maps:\n\n**Salon A:** 3 zdjęcia – rozmyte, ciemne, widać głównie podłogę\n**Salon B:** 15 zdjęć – wnętrze, stanowiska, realizacje, zespół, wejście\n\nNa który klika? Oczywiście na B. Zdjęcia to dowód, że salon istnieje, wygląda profesjonalnie i jest godny zaufania."
            },
            {
              id: "s3",
              type: "example",
              content: "**Statystyki z Google:**\n\n• Wizytówki ze zdjęciami: **42% więcej kliknięć** w \"Jak dojechać\"\n• Wizytówki ze zdjęciami: **35% więcej kliknięć** na stronę www\n• Wizytówki z 10+ zdjęciami: jeszcze lepsze wyniki\n\nZdjęcia to nie \"bonus\" – to podstawa."
            },
            {
              id: "s4",
              type: "tip",
              content: "Google PREFERUJE wizytówki z bogatą galerią. Im więcej zdjęć (wysokiej jakości!), tym wyżej w wynikach. To prosty sposób na poprawę pozycji."
            },
            
            // --- Jakie zdjęcia ---
            {
              id: "s5",
              type: "heading",
              content: "6 typów zdjęć, które MUSI mieć każdy salon"
            },
            {
              id: "s6",
              type: "step",
              stepNumber: 1,
              content: "**Logo**\n\nTo samo co na IG/FB. Spójność buduje rozpoznawalność."
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 2,
              content: "**Zdjęcie okładkowe**\n\nNajlepsze zdjęcie salonu lub pracy. To wyświetla się jako pierwsze w wynikach."
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 3,
              content: "**Wnętrze**\n\nStanowiska pracy, poczekalnia, recepcja. Pokaż atmosferę salonu."
            },
            {
              id: "s9",
              type: "step",
              stepNumber: 4,
              content: "**Zewnątrz**\n\nFront budynku, wejście do salonu. Klientka łatwiej Cię znajdzie!"
            },
            {
              id: "s10",
              type: "step",
              stepNumber: 5,
              content: "**Zespół**\n\nTy i pracownice przy pracy. Buduje zaufanie – \"prawdziwi ludzie\"."
            },
            {
              id: "s11",
              type: "step",
              stepNumber: 6,
              content: "**Realizacje**\n\nZdjęcia prac – paznokcie, zabiegi, efekty. Twoje portfolio."
            },
            {
              id: "s12",
              type: "warning",
              content: "**Minimum 10 zdjęć!** Google preferuje wizytówki z bogatą galerią. 3 zdjęcia to za mało. Celuj w 15-20 i dodawaj nowe regularnie."
            },
            
            // --- Wymagania techniczne ---
            {
              id: "s13",
              type: "heading",
              content: "Wymagania techniczne – co Google akceptuje"
            },
            {
              id: "s14",
              type: "text",
              content: "Google ma swoje wymagania dotyczące zdjęć. Zdjęcia, które ich nie spełniają, mogą zostać odrzucone:"
            },
            {
              id: "s15",
              type: "step",
              stepNumber: 1,
              content: "**Format:** JPG lub PNG"
            },
            {
              id: "s16",
              type: "step",
              stepNumber: 2,
              content: "**Rozmiar:** Minimum 720 x 720 pikseli (zalecane 2048 x 1536)"
            },
            {
              id: "s17",
              type: "step",
              stepNumber: 3,
              content: "**Waga:** Maksymalnie 5 MB na zdjęcie"
            },
            {
              id: "s18",
              type: "step",
              stepNumber: 4,
              content: "**Bez tekstu i watermarków!** Google odrzuca zdjęcia z nakładkami tekstowymi"
            },
            {
              id: "s19",
              type: "comparison",
              content: "Dobre vs złe zdjęcia",
              comparison: {
                good: {
                  title: "Jasne, ostre, autentyczne",
                  description: "Dobre światło, prawdziwe wnętrze, bez filtrów i tekstu",
                  example: "Zdjęcie stanowiska przy oknie, naturalne światło, widać sprzęt i atmosferę"
                },
                bad: {
                  title: "Ciemne, rozmyte, z tekstem",
                  description: "Słabe światło, filtry, nakładki 'PROMO -50%'",
                  example: "Ciemne zdjęcie z flashem, napis 'Zapraszamy!' nałożony w Paint"
                }
              }
            },
            
            // --- Quiz ---
            {
              id: "s20",
              type: "quiz",
              content: "",
              quiz: {
                question: "Które zdjęcie Google PRAWDOPODOBNIE odrzuci?",
                options: [
                  "Jasne zdjęcie wnętrza salonu bez tekstu",
                  "Zdjęcie z napisem 'PROMOCJA -50%' i logo salonu",
                  "Zdjęcie zespołu przy pracy",
                  "Zdjęcie frontu budynku pokazujące wejście"
                ],
                correctIndex: 1,
                explanation: "Google odrzuca zdjęcia z nakładkami tekstowymi, logo, promocjami. Chce autentycznych zdjęć pokazujących rzeczywisty wygląd miejsca. Grafiki reklamowe są zabronione."
              }
            },
            
            // --- Dodawanie zdjęć ---
            {
              id: "s21",
              type: "heading",
              content: "Jak dodać zdjęcia do wizytówki"
            },
            {
              id: "s22",
              type: "step",
              stepNumber: 1,
              content: "Wejdź na **business.google.com** i wybierz wizytówkę"
            },
            {
              id: "s23",
              type: "step",
              stepNumber: 2,
              content: "Kliknij **\"Zdjęcia\"** w menu bocznym"
            },
            {
              id: "s24",
              type: "step",
              stepNumber: 3,
              content: "Kliknij **\"+\"** i wybierz typ zdjęcia (Logo, Okładka, Wnętrze, itd.)"
            },
            {
              id: "s25",
              type: "step",
              stepNumber: 4,
              content: "Wgraj zdjęcia z dysku – moderacja trwa 24-48 godzin"
            },
            {
              id: "s26",
              type: "tip",
              content: "**Pro tip:** Dodawaj nowe zdjęcia regularnie (np. raz w tygodniu). To sygnał dla Google, że biznes jest aktywny – i poprawia Twoją pozycję."
            },
            {
              id: "s27",
              type: "interactive",
              content: "Sprawdź teraz swoją wizytówkę Google. Ile masz zdjęć? Czy są wysokiej jakości? Czy obejmują wszystkie 6 kategorii (logo, okładka, wnętrze, zewnątrz, zespół, realizacje)?",
              actionLabel: "Sprawdź swoje zdjęcia"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Policz swoje obecne zdjęcia",
              description: "Sprawdź ile zdjęć masz w wizytówce Google"
            },
            {
              id: "t2",
              title: "Zrób listę brakujących typów",
              description: "Logo, okładka, wnętrze, zewnątrz, zespół, realizacje – co brakuje?"
            },
            {
              id: "t3",
              title: "Przygotuj i dodaj minimum 10 zdjęć",
              description: "Jasne, ostre, bez tekstu, min. 720x720 px"
            },
            {
              id: "t4",
              title: "Zaplanuj regularne dodawanie",
              description: "Np. raz w tygodniu nowe zdjęcie realizacji"
            }
          ],
          checklist: [
            { id: "c1", text: "Mam dodane logo" },
            { id: "c2", text: "Mam zdjęcie okładkowe" },
            { id: "c3", text: "Mam zdjęcia wnętrza (min. 3)" },
            { id: "c4", text: "Mam zdjęcie frontu budynku/wejścia" },
            { id: "c5", text: "Mam zdjęcia zespołu lub moje przy pracy" },
            { id: "c6", text: "Mam minimum 10 zdjęć łącznie" },
            { id: "c7", text: "Żadne zdjęcie nie ma tekstu ani watermarków" }
          ],
          keyTakeaways: [
            "Wizytówki ze zdjęciami dostają 42% więcej kliknięć – to nie opcja, to konieczność",
            "Minimum 10 zdjęć, celuj w 15-20. Dodawaj nowe regularnie.",
            "6 typów obowiązkowych: logo, okładka, wnętrze, zewnątrz, zespół, realizacje",
            "Bez tekstu i watermarków! Google odrzuca grafiki reklamowe."
          ],
          nextLessonTitle: "Aktualności i posty Google"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 11 - AKTUALNOŚCI I POSTY GOOGLE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-11-posty-google",
          title: "Aktualności i posty Google",
          description: "Darmowa reklama w wynikach wyszukiwania",
          estimatedMinutes: 12,
          intro: "Czy wiesz, że możesz publikować posty bezpośrednio w Google? Tak – posty, które wyświetlają się w wynikach wyszukiwania obok Twojej wizytówki. To darmowa reklama, którą 95% lokalnych biznesów kompletnie ignoruje. Dla Ciebie to szansa na wyróżnienie się.",
          sections: [
            {
              id: "s1",
              type: "heading",
              content: "Posty w Google – ukryta broń lokalnego marketingu"
            },
            {
              id: "s2",
              type: "text",
              content: "Google Business Profile pozwala publikować **posty**, które wyświetlają się bezpośrednio w wynikach wyszukiwania. Kiedy klientka szuka Twojego salonu i klika na wizytówkę – widzi te posty.\n\nMożesz promować:\n• Nowe usługi\n• Aktualne promocje\n• Wydarzenia\n• Nowości z salonu\n\nI wszystko to **za darmo**."
            },
            {
              id: "s3",
              type: "example",
              content: "**Jak to wygląda w praktyce:**\n\nKlientka wpisuje \"salon manicure Kraków Kazimierz\". Widzi Twoją wizytówkę. Pod podstawowymi informacjami widzi:\n\n📣 **AKTUALNOŚĆ**\n\"Nowe lakiery wiosenne w ofercie! 🌸 Pastelowe kolory idealne na sezon. Umów się przez link lub telefonicznie.\"\n[Zdjęcie nowych lakierów]\n[Przycisk: Zadzwoń]\n\nTo dodatkowy punkt kontaktu – dodatkowa szansa na kliknięcie."
            },
            {
              id: "s4",
              type: "tip",
              content: "Posty w Google to darmowa reklama, której prawie nikt nie używa. Jeśli Twoja konkurentka ich nie ma, a Ty masz – automatycznie wyglądasz bardziej profesjonalnie."
            },
            
            // --- Typy postów ---
            {
              id: "s5",
              type: "heading",
              content: "4 typy postów – kiedy którego użyć"
            },
            {
              id: "s6",
              type: "step",
              stepNumber: 1,
              content: "**Nowości (Updates)**\n\nOgólne informacje, nowości z salonu. Np. \"Nowe lakiery w ofercie!\", \"Przedstawiamy nowego członka zespołu\".\n\n⏰ Widoczne przez 7 dni, potem znikają."
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 2,
              content: "**Wydarzenia (Events)**\n\nZ datą i godziną. Np. \"Dzień otwarty salonu\", \"Warsztaty nail art\".\n\n⏰ Widoczne do daty wydarzenia."
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 3,
              content: "**Oferty (Offers)**\n\nPromocje z datą ważności. Np. \"Wiosenna promocja -20% do końca marca\".\n\n⏰ Widoczne do daty końcowej. Można dodać kod promocyjny."
            },
            {
              id: "s9",
              type: "step",
              stepNumber: 4,
              content: "**Produkty (Products)**\n\nPrezentacja konkretnych usług z ceną. Np. \"Manicure hybrydowy – 80 zł\".\n\n⏰ Widoczne bezterminowo (lub do usunięcia)."
            },
            
            // --- Struktura posta ---
            {
              id: "s10",
              type: "heading",
              content: "Struktura skutecznego posta Google"
            },
            {
              id: "s11",
              type: "step",
              stepNumber: 1,
              content: "**Zdjęcie (obowiązkowe)**\n\nMinimum 400 x 300 px. Jasne, ostre, przyciągające uwagę. Bez tekstu na zdjęciu!"
            },
            {
              id: "s12",
              type: "step",
              stepNumber: 2,
              content: "**Tekst (krótki!)**\n\nMaksymalnie 1500 znaków, ale zalecane 100-200. Klientka skanuje, nie czyta elaboratów."
            },
            {
              id: "s13",
              type: "step",
              stepNumber: 3,
              content: "**Przycisk CTA (wezwanie do działania)**\n\nWybierz jeden: \"Zadzwoń\", \"Zarezerwuj\", \"Więcej informacji\", \"Kup\", \"Zarejestruj się\"."
            },
            {
              id: "s14",
              type: "comparison",
              content: "Dobry vs słaby post",
              comparison: {
                good: {
                  title: "Konkretny z CTA",
                  description: "Jasne zdjęcie, krótki tekst z korzyścią, przycisk akcji",
                  example: "🌸 Wiosenne lakiery już w ofercie! Pastelowe kolory idealne na sezon. Umów wizytę i wypróbuj jako pierwsza! [Zdjęcie lakierów] [Przycisk: Zadzwoń]"
                },
                bad: {
                  title: "Ogólnikowy bez CTA",
                  description: "Ciemne zdjęcie, długi tekst bez konkretów, brak przycisku",
                  example: "Witamy w naszym salonie! Oferujemy wiele usług kosmetycznych wysokiej jakości. Nasz wykwalifikowany zespół zapewni Państwu... [200 słów więcej] [Brak przycisku]"
                }
              }
            },
            
            // --- Quiz ---
            {
              id: "s15",
              type: "quiz",
              content: "",
              quiz: {
                question: "Publikujesz post 'Nowości' w Google Business. Za ile dni post zniknie?",
                options: [
                  "Nigdy – pozostaje na zawsze",
                  "Za 7 dni",
                  "Za 30 dni",
                  "Za 24 godziny"
                ],
                correctIndex: 1,
                explanation: "Posty 'Nowości' wygasają po 7 dniach. Dlatego ważna jest regularność – publikuj minimum 1 post tygodniowo, żeby zawsze coś było widoczne. Posty 'Produkty' nie wygasają."
              }
            },
            
            // --- Regularność ---
            {
              id: "s16",
              type: "heading",
              content: "Regularność > perfekcja"
            },
            {
              id: "s17",
              type: "text",
              content: "Posty Nowości wygasają po 7 dniach. To oznacza, że musisz publikować **regularnie**, żeby zawsze coś było widoczne.\n\n**Minimum: 1 post tygodniowo.** Nie musi być idealny – musi być."
            },
            {
              id: "s18",
              type: "step",
              stepNumber: 1,
              content: "**Poniedziałek:** Publikujesz post o nowości/promocji"
            },
            {
              id: "s19",
              type: "step",
              stepNumber: 2,
              content: "**W ciągu tygodnia:** Post jest widoczny w wynikach"
            },
            {
              id: "s20",
              type: "step",
              stepNumber: 3,
              content: "**Następny poniedziałek:** Publikujesz nowy post (stary wygasa)"
            },
            {
              id: "s21",
              type: "tip",
              content: "Nie masz czasu co tydzień? Użyj postów 'Produkty' – nie wygasają. Dodaj 3-5 głównych usług jako produkty i będą widoczne bez konieczności odświeżania."
            },
            {
              id: "s22",
              type: "interactive",
              content: "Wejdź na business.google.com i sprawdź sekcję 'Posty'. Czy masz jakieś opublikowane? Jeśli nie – stwórz pierwszy teraz!",
              actionLabel: "Stwórz pierwszy post"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Stwórz pierwszy post Google",
              description: "Zdjęcie + krótki tekst + przycisk CTA"
            },
            {
              id: "t2",
              title: "Dodaj 3 usługi jako 'Produkty'",
              description: "Główne usługi z cenami – nie wygasają"
            },
            {
              id: "t3",
              title: "Zaplanuj posty na miesiąc",
              description: "Minimum 1 post tygodniowo (4 w miesiącu)"
            }
          ],
          checklist: [
            { id: "c1", text: "Opublikowałam pierwszy post w Google" },
            { id: "c2", text: "Post ma zdjęcie, tekst i przycisk CTA" },
            { id: "c3", text: "Dodałam główne usługi jako 'Produkty'" },
            { id: "c4", text: "Mam plan regularnych postów (min. 1/tydzień)" }
          ],
          keyTakeaways: [
            "Posty w Google to darmowa reklama w wynikach wyszukiwania",
            "4 typy: Nowości (7 dni), Wydarzenia (do daty), Oferty (do daty), Produkty (stałe)",
            "Struktura: jasne zdjęcie + krótki tekst + przycisk CTA",
            "Regularność jest kluczowa – minimum 1 post tygodniowo"
          ],
          nextLessonTitle: "Opinie w Google – podstawy obsługi"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 12 - OPINIE W GOOGLE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "lekcja-12-opinie-google",
          title: "Opinie w Google – podstawy obsługi",
          description: "Jak zbierać opinie i odpowiadać na nie profesjonalnie",
          estimatedMinutes: 15,
          intro: "90% ludzi czyta opinie przed wyborem lokalnej usługi. Nie 50%, nie 70% – dziewięćdziesiąt procent. Salon z 50 opiniami i średnią 4.9 wygrywa z salonem, który ma zero opinii – nawet jeśli ten drugi jest obiektywnie lepszy. Opinie to Twoja waluta zaufania. Czas nauczyć się nią zarządzać.",
          sections: [
            {
              id: "s1",
              type: "heading",
              content: "Opinie = pieniądze (dosłownie)"
            },
            {
              id: "s2",
              type: "text",
              content: "Wyobraź sobie klientkę przed decyzją. Widzi dwa salony w Google:\n\n**Salon A:** 47 opinii, średnia 4.8 ⭐\n**Salon B:** 3 opinie, średnia 4.0 ⭐\n\nNa który kliknie? Na A. Nawet jeśli B ma lepsze usługi. Opinie to **społeczny dowód słuszności** – mózg klientki myśli \"jeśli tyle osób jest zadowolonych, muszą być dobrzy\"."
            },
            {
              id: "s3",
              type: "example",
              content: "**Matematyka opinii:**\n\nSalon z 50 opiniami vs salon z 5 opiniami.\n\nPrzy 1000 wyświetleń wizytówki:\n• 50 opinii → ~15% klika → 150 potencjalnych klientek\n• 5 opinii → ~5% klika → 50 potencjalnych klientek\n\n**Różnica: 100 utraconych potencjalnych klientek miesięcznie.**\n\nPrzy konwersji 30% i średniej wartości wizyty 100 zł:\n50 opinii = +30 klientek × 100 zł = **+3000 zł miesięcznie**\n\nOpinie to nie \"miło mieć\". To realny przychód."
            },
            {
              id: "s4",
              type: "tip",
              content: "Każda nowa opinia to nie tylko lepsze pozycjonowanie – to realne pieniądze. Dlatego zbieranie opinii powinno być Twoim priorytetem."
            },
            
            // --- Jak prosić o opinie ---
            {
              id: "s5",
              type: "heading",
              content: "Jak skutecznie prosić o opinie"
            },
            {
              id: "s6",
              type: "text",
              content: "Większość zadowolonych klientek nie zostawia opinii – nie dlatego, że nie chcą, ale dlatego, że o tym nie myślą. Twoim zadaniem jest im **przypomnieć i ułatwić**."
            },
            {
              id: "s7",
              type: "step",
              stepNumber: 1,
              content: "**Moment: Tuż po zabiegu**\n\nProś kiedy klientka jest najbardziej zadowolona – zaraz po zabiegu, gdy patrzy na swoje nowe paznokcie.\n\n\"Cieszę się, że się podoba! Jeśli masz chwilę, będzie mi bardzo miło jeśli zostawisz opinię w Google – to bardzo pomaga małym salonom jak mój.\""
            },
            {
              id: "s8",
              type: "step",
              stepNumber: 2,
              content: "**Ułatw: Bezpośredni link**\n\nNie każ klientce szukać. Daj jej link, który otwiera formularza opinii od razu.\n\nGdzie go znaleźć: business.google.com → Strona główna → \"Uzyskaj więcej opinii\" → Kopiuj link"
            },
            {
              id: "s9",
              type: "step",
              stepNumber: 3,
              content: "**Przypomnij: Następnego dnia**\n\nWyślij SMS lub wiadomość z podziękowaniem i linkiem:\n\n\"Cześć! Dziękuję za dzisiejszą wizytę! 💅 Jeśli masz chwilę, będzie mi bardzo miło jeśli podzielisz się wrażeniami: [link]\""
            },
            {
              id: "s10",
              type: "tip",
              content: "**Pro tip:** Stwórz kod QR z linkiem do opinii i wydrukuj małą karteczkę. Zostaw przy recepcji. Klientka skanuje i od razu pisze."
            },
            
            // --- Odpowiadanie na opinie ---
            {
              id: "s11",
              type: "heading",
              content: "Odpowiadaj na WSZYSTKIE opinie"
            },
            {
              id: "s12",
              type: "text",
              content: "Odpowiadanie na opinie to nie tylko grzeczność – to sygnał dla przyszłych klientek. Czytają Twoje odpowiedzi i wyrabiają sobie opinię o Tobie.\n\n**Odpowiadaj na wszystkie opinie:**\n• Pozytywne – podziękuj osobiście\n• Negatywne – odpowiedz profesjonalnie"
            },
            {
              id: "s13",
              type: "comparison",
              content: "Odpowiedź na pozytywną opinię",
              comparison: {
                good: {
                  title: "Osobista i konkretna",
                  description: "Odnosi się do szczegółów z wizyty, używa imienia, brzmi naturalnie",
                  example: "Dziękuję Pani Kasiu! 💅 Cieszę się, że french na bazie nude się spodobał – idealnie pasuje do jesiennych stylizacji. Do zobaczenia za 3 tygodnie!"
                },
                bad: {
                  title: "Generyczna i bezosobowa",
                  description: "Copy-paste pod każdą opinię, brzmi jak robot",
                  example: "Dziękujemy za opinię. Zapraszamy ponownie."
                }
              }
            },
            
            // --- Negatywne opinie ---
            {
              id: "s14",
              type: "heading",
              content: "Negatywna opinia – jak odpowiedzieć profesjonalnie"
            },
            {
              id: "s15",
              type: "text",
              content: "Negatywna opinia to stres. Naturalna reakcja to obrona. Ale w internecie, **Twoja odpowiedź czytają wszyscy przyszli klienci**. Jak odpowiesz, tak Cię ocenią."
            },
            {
              id: "s16",
              type: "step",
              stepNumber: 1,
              content: "**Nie reaguj emocjonalnie**\n\nZobaczysz negatywną opinię – wściekłość. To normalne. Ale NIE odpowiadaj od razu. Odczekaj minimum godzinę. Lepiej do następnego dnia."
            },
            {
              id: "s17",
              type: "step",
              stepNumber: 2,
              content: "**Przeproś za doświadczenie**\n\nNawet jeśli uważasz, że to niesprawiedliwe. Nie przepraszasz za to co zrobiłaś – przepraszasz, że klientka miała złe doświadczenie.\n\n\"Bardzo mi przykro, że wizyta nie spełniła oczekiwań.\""
            },
            {
              id: "s18",
              type: "step",
              stepNumber: 3,
              content: "**Zaproponuj rozwiązanie**\n\nPokaż, że chcesz naprawić sytuację.\n\n\"Proszę o kontakt bezpośredni – chętnie porozmawiam i znajdziemy rozwiązanie.\""
            },
            {
              id: "s19",
              type: "step",
              stepNumber: 4,
              content: "**Przenieś rozmowę prywatnie**\n\nNie kłóć się publicznie. Daj numer telefonu lub email.\n\n\"Zapraszam do kontaktu telefonicznego lub mailowego – chętnie omówimy szczegóły.\""
            },
            {
              id: "s20",
              type: "warning",
              content: "**Nigdy nie pisz:**\n• \"To nieprawda!\" (oskarżasz klienta o kłamstwo)\n• \"Pani chyba nie zrozumiała\" (lekceważysz)\n• \"Inne klientki są zadowolone\" (sugerujesz, że problem jest z nią)\n\nKażdy potencjalny klient czyta Twoje odpowiedzi i ocenia CIEBIE, nie klienta."
            },
            
            // --- Quiz ---
            {
              id: "s21",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka pisze negatywną opinię: 'Stylizacja odpada po 3 dniach. Wyrzucone pieniądze.' Która odpowiedź jest NAJLEPSZA?",
                options: [
                  "To nieprawda, nasze lakiery trzymają 3 tygodnie. Musi Pani źle dbać o paznokcie.",
                  "Bardzo mi przykro, że stylizacja nie spełniła oczekiwań. Proszę o kontakt – z chęcią znajdziemy rozwiązanie i naprawimy sytuację.",
                  "Dziękujemy za opinię. Zapraszamy ponownie.",
                  "U innych klientek lakier trzyma świetnie, może problem jest po Pani stronie?"
                ],
                correctIndex: 1,
                explanation: "Odpowiedź B przeprasza za doświadczenie (nie przyznając winy), proponuje rozwiązanie i zaprasza do kontaktu prywatnego. Inne odpowiedzi atakują klienta lub są bezosobowe. Pamiętaj: odpowiedź czytają wszyscy potencjalni klienci."
              }
            },
            
            // --- System zbierania opinii ---
            {
              id: "s22",
              type: "heading",
              content: "Zbuduj system zbierania opinii"
            },
            {
              id: "s23",
              type: "text",
              content: "Nie zostawiaj zbierania opinii przypadkowi. Zbuduj **system**, który działa automatycznie:"
            },
            {
              id: "s24",
              type: "step",
              stepNumber: 1,
              content: "**Karteczka z QR kodem przy recepcji**\n\n\"Podobało Ci się? Podziel się opinią! [QR kod]\" – skanuje, pisze od razu."
            },
            {
              id: "s25",
              type: "step",
              stepNumber: 2,
              content: "**SMS/Wiadomość po wizycie**\n\nNastępnego dnia wyślij wiadomość z podziękowaniem i linkiem."
            },
            {
              id: "s26",
              type: "step",
              stepNumber: 3,
              content: "**Prośba słowna przy pożegnaniu**\n\n\"Cieszę się, że Ci się podoba! Jeśli masz chwilę, opinia w Google bardzo pomoże.\""
            },
            {
              id: "s27",
              type: "interactive",
              content: "Znajdź teraz swój link do opinii: business.google.com → Strona główna → 'Uzyskaj więcej opinii'. Zapisz go – będziesz go używać wielokrotnie.",
              actionLabel: "Znajdź link do opinii"
            }
          ],
          tasks: [
            {
              id: "t1",
              title: "Znajdź i zapisz link do opinii",
              description: "business.google.com → 'Uzyskaj więcej opinii' → Kopiuj link"
            },
            {
              id: "t2",
              title: "Stwórz QR kod z linkiem",
              description: "Użyj qr-code-generator.com i wydrukuj karteczkę przy recepcji"
            },
            {
              id: "t3",
              title: "Odpowiedz na wszystkie nieodpowiedziane opinie",
              description: "Pozytywne – osobiście. Negatywne – profesjonalnie."
            },
            {
              id: "t4",
              title: "Poproś 3 klientki o opinię w tym tygodniu",
              description: "Zaraz po zabiegu + SMS z linkiem następnego dnia"
            }
          ],
          checklist: [
            { id: "c1", text: "Mam zapisany link do wystawiania opinii" },
            { id: "c2", text: "Mam QR kod lub karteczkę przy recepcji" },
            { id: "c3", text: "Odpowiedziałam na wszystkie nieodpowiedziane opinie" },
            { id: "c4", text: "Mam szablon SMS-a do wysyłki po wizycie" },
            { id: "c5", text: "Wiem, jak odpowiadać na negatywne opinie (spokojnie, z przeprosinami, prywatnie)" }
          ],
          keyTakeaways: [
            "90% ludzi czyta opinie przed wizytą – opinie = pieniądze",
            "Proś w odpowiednim momencie (tuż po zabiegu) i ułatwiaj (bezpośredni link, QR kod)",
            "Odpowiadaj na WSZYSTKIE opinie – pozytywne osobiście, negatywne profesjonalnie",
            "Na negatywne: przeproś za doświadczenie, zaproponuj rozwiązanie, przenieś rozmowę prywatnie"
          ]
        }
      ]
    }
  ]
};
