import { Course } from "@/types/courses";

export const grafikiSzablonyCourse: Course = {
  id: "grafiki-szablony",
  title: "Grafiki i szablony",
  description: "Naucz się tworzyć profesjonalne grafiki dla salonu beauty i skutecznie wykorzystywać szablony do komunikacji wizualnej.",
  icon: "Palette",
  color: "from-fuchsia-500 to-pink-500",
  totalLessons: 5,
  estimatedHours: 1.5,
  modules: [
    {
      id: "grafiki-szablony-module-1",
      title: "Grafiki i szablony",
      description: "Kompletny przewodnik po tworzeniu profesjonalnych grafik dla salonu beauty",
      lessons: [
        {
          id: "kiedy-uzywac-grafik",
          title: "Kiedy używać grafik",
          description: "Poznaj sytuacje, w których grafika działa lepiej niż zdjęcie i naucz się świadomie dobierać format treści.",
          estimatedMinutes: 18,
          intro: "Nie każda sytuacja wymaga zdjęcia. Czasem dobrze zaprojektowana grafika przekaże więcej niż najlepsze foto. W tej lekcji nauczysz się rozpoznawać momenty, gdy grafika jest Twoim najlepszym wyborem.",
          nextLessonTitle: "Spójność wizualna",
          sections: [
            {
              id: "gs1-heading-1",
              type: "heading",
              content: "Grafika vs zdjęcie - fundamentalna różnica"
            },
            {
              id: "gs1-text-1",
              type: "text",
              content: "**Zdjęcie pokazuje rzeczywistość** - Twoje prace, salon, atmosferę. To autentyczność w czystej formie.\n\n**Grafika komunikuje informację** - cennik, promocję, zasady, godziny. To przekaz, który musi być jasny i czytelny.\n\nProblem pojawia się, gdy mieszamy te funkcje. Promocja napisana na zdjęciu stylizacji? Gubi się. Grafika udająca zdjęcie? Wygląda tanio."
            },
            {
              id: "gs1-tip-1",
              type: "tip",
              content: "Zanim stworzysz post, zadaj sobie pytanie: \"Czy chcę pokazać, czy powiedzieć?\" Pokazać = zdjęcie. Powiedzieć = grafika."
            },
            {
              id: "gs1-heading-2",
              type: "heading",
              content: "5 sytuacji, gdy grafika wygrywa ze zdjęciem"
            },
            {
              id: "gs1-step-1",
              type: "step",
              content: "**Promocje i oferty specjalne** - \"-20% na pierwsze zabiegi\" musi być widoczne od razu. Na zdjęciu tekst się gubi, grafika wyróżnia przekaz.",
              stepNumber: 1
            },
            {
              id: "gs1-step-2",
              type: "step",
              content: "**Cenniki i pakiety** - Jasna struktura, czytelne ceny, profesjonalny wygląd. Żadne zdjęcie tego nie zastąpi.",
              stepNumber: 2
            },
            {
              id: "gs1-step-3",
              type: "step",
              content: "**Godziny pracy i informacje kontaktowe** - Klientka szuka konkretnej informacji. Grafika daje ją natychmiast.",
              stepNumber: 3
            },
            {
              id: "gs1-step-4",
              type: "step",
              content: "**Cytaty i motywacje** - Inspirujące treści wymagają odpowiedniej oprawy. Grafika nadaje im wagę.",
              stepNumber: 4
            },
            {
              id: "gs1-step-5",
              type: "step",
              content: "**Ogłoszenia i zmiany** - \"Nowy adres\", \"Zmiana godzin\", \"Szukamy do zespołu\" - grafika przyciąga uwagę do ważnej informacji.",
              stepNumber: 5
            },
            {
              id: "gs1-quiz-1",
              type: "quiz",
              content: "Sprawdź swoją wiedzę",
              quiz: {
                question: "Która z poniższych sytuacji NAJBARDZIEJ wymaga grafiki zamiast zdjęcia?",
                options: [
                  "Pokazanie nowej stylizacji paznokci",
                  "Ogłoszenie o 30% zniżce na wszystkie zabiegi",
                  "Prezentacja metamorfozy brwi",
                  "Zdjęcie z zadowoloną klientką"
                ],
                correctIndex: 1,
                explanation: "Promocja cenowa (-30%) musi być widoczna natychmiast. Na zdjęciu tekst o promocji może się zgubić, a grafika z wyraźną informacją o zniżce przyciąga wzrok i jasno komunikuje ofertę."
              }
            },
            {
              id: "gs1-heading-3",
              type: "heading",
              content: "5 rodzajów grafik dla salonu beauty"
            },
            {
              id: "gs1-text-2",
              type: "text",
              content: "Każdy salon beauty potrzebuje zestawu podstawowych grafik. Oto rodzaje, które warto mieć przygotowane:"
            },
            {
              id: "gs1-text-3",
              type: "text",
              content: "**1. Grafiki promocyjne**\n- Sezonowe wyprzedaże\n- Oferty specjalne\n- Pakiety zabiegów\n- Happy hours\n\n**2. Grafiki informacyjne**\n- Cenniki\n- Godziny pracy\n- Dane kontaktowe\n- Adres i lokalizacja"
            },
            {
              id: "gs1-text-4",
              type: "text",
              content: "**3. Grafiki edukacyjne**\n- Porady pielęgnacyjne\n- Instrukcje przed/po zabiegu\n- FAQ o usługach\n- Obalanie mitów beauty\n\n**4. Grafiki ogłoszeniowe**\n- Rekrutacja do zespołu\n- Nowe usługi w ofercie\n- Zmiany w funkcjonowaniu\n- Ważne komunikaty"
            },
            {
              id: "gs1-text-5",
              type: "text",
              content: "**5. Grafiki wizerunkowe**\n- Cytaty i motywacje\n- Wartości salonu\n- Przedstawienie zespołu\n- Opinie klientek (w formie graficznej)"
            },
            {
              id: "gs1-mockup-1",
              type: "mockup",
              content: "Przykład grafiki promocyjnej vs zdjęcia z tekstem",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "💅 PROMOCJA -25% na wszystkie stylizacje hybrydowe! Tylko do końca tygodnia. Umów się: link w bio ✨",
                postLikes: "127",
                postComments: "15",
                postImage: "nails",
                description: "Grafika promocyjna z wyraźną informacją o zniżce jest znacznie skuteczniejsza niż tekst na zdjęciu stylizacji"
              }
            },
            {
              id: "gs1-heading-4",
              type: "heading",
              content: "Proporcja zdjęć do grafik na profilu"
            },
            {
              id: "gs1-text-6",
              type: "text",
              content: "Idealny profil salonu beauty to **70-80% zdjęć** i **20-30% grafik**.\n\nDlaczego?\n\n- Zdjęcia budują zaufanie i pokazują Twoje umiejętności\n- Grafiki przekazują ważne informacje\n- Zbyt dużo grafik = profil wygląda jak tablica ogłoszeń\n- Zbyt mało grafik = promocje giną w morzu zdjęć"
            },
            {
              id: "gs1-comparison-1",
              type: "comparison",
              content: "Proporcja grafik na profilu",
              comparison: {
                good: {
                  title: "Zbalansowany profil",
                  description: "70-80% zdjęć prac, 20-30% grafik informacyjnych",
                  example: "Zdjęcie stylizacji → Zdjęcie metamorfozy → Grafika promocji → Zdjęcie → Zdjęcie → Grafika cennika"
                },
                bad: {
                  title: "Przeładowany grafikami",
                  description: "Więcej niż 50% grafik sprawia, że profil wygląda jak reklama",
                  example: "Grafika → Grafika → Zdjęcie → Grafika → Grafika → Grafika"
                }
              }
            },
            {
              id: "gs1-tip-2",
              type: "tip",
              content: "Zaplanuj grafiki z wyprzedzeniem. Jeśli wiesz, że w piątek publikujesz promocję (grafika), to we wtorek i środę postaw na zdjęcia."
            },
            {
              id: "gs1-heading-5",
              type: "heading",
              content: "Kiedy NIE używać grafik"
            },
            {
              id: "gs1-warning-1",
              type: "warning",
              content: "Unikaj grafik gdy pokazujesz swoje prace - metamorfozy, stylizacje, efekty zabiegów. Tu autentyczne zdjęcie jest królem. Grafika w tych sytuacjach wygląda sztucznie i nie buduje zaufania."
            },
            {
              id: "gs1-text-7",
              type: "text",
              content: "**Nie rób grafiki zamiast zdjęcia gdy:**\n\n- Chcesz pokazać efekty swojej pracy\n- Prezentujesz atmosferę salonu\n- Przedstawiasz siebie lub zespół\n- Budujesz relację z klientkami (zdjęcia zza kulis)\n- Pokazujesz proces zabiegu"
            },
            {
              id: "gs1-example-1",
              type: "example",
              content: "**Częsty błąd:** Stylistka tworzy grafikę z napisem \"Piękne brwi dla Ciebie!\" zamiast pokazać zdjęcie swoich rzeczywistych realizacji. Klientka widzi ładną grafikę, ale nie wie, jak wyglądają faktyczne efekty pracy.\n\n**Lepsze rozwiązanie:** Zdjęcie metamorfozy brwi z prostym opisem w tekście posta."
            },
            {
              id: "gs1-quiz-2",
              type: "quiz",
              content: "Test praktyczny",
              quiz: {
                question: "Planujesz opublikować informację o nowych godzinach pracy salonu. Co wybierzesz?",
                options: [
                  "Zdjęcie salonu z godzinami napisanymi w opisie",
                  "Grafikę z czytelnymi godzinami pracy",
                  "Story z napisem na tle filmu z salonu",
                  "Reelsa z pokazaniem salonu w różnych porach dnia"
                ],
                correctIndex: 1,
                explanation: "Grafika z godzinami pracy to najczytelniejszy format. Klientka od razu widzi informację, którą szuka. Może ją zapisać i wrócić do niej w każdej chwili."
              }
            },
            {
              id: "gs1-heading-6",
              type: "heading",
              content: "Praktyczne wskazówki na start"
            },
            {
              id: "gs1-text-8",
              type: "text",
              content: "**Zanim stworzysz grafikę, odpowiedz na 3 pytania:**\n\n1. **Jaki jest cel?** - Informacja, promocja, edukacja?\n2. **Co klientka ma zapamiętać?** - Jedna główna myśl\n3. **Jaką akcję ma podjąć?** - Zadzwonić, zapisać, kliknąć?"
            },
            {
              id: "gs1-tip-3",
              type: "tip",
              content: "Jedna grafika = jedna informacja. Nie pakuj promocji, cennika i godzin pracy w jeden obrazek. To recepta na chaos wizualny."
            },
            {
              id: "gs1-text-9",
              type: "text",
              content: "W Aurine znajdziesz szablony grafik dostosowane do każdej z tych sytuacji. W następnych lekcjach nauczysz się, jak je personalizować i dostosować do wizerunku Twojego salonu."
            }
          ],
          tasks: [],
          checklist: [
            { id: "gs1-check-1", text: "Rozumiem różnicę między grafiką a zdjęciem" },
            { id: "gs1-check-2", text: "Znam 5 sytuacji wymagających grafiki" },
            { id: "gs1-check-3", text: "Wiem jakie rodzaje grafik są potrzebne w salonie" },
            { id: "gs1-check-4", text: "Rozumiem zasadę proporcji 70-80% zdjęć do 20-30% grafik" },
            { id: "gs1-check-5", text: "Potrafię zadać sobie 3 pytania przed stworzeniem grafiki" }
          ],
          keyTakeaways: [
            "Grafika komunikuje informację, zdjęcie pokazuje rzeczywistość - nie mieszaj tych funkcji",
            "Promocje, cenniki, godziny pracy i ogłoszenia = grafika. Efekty pracy = zawsze zdjęcie",
            "Utrzymuj proporcję 70-80% zdjęć i 20-30% grafik na profilu",
            "Jedna grafika = jedna główna informacja. Nie przeładowuj treścią",
            "Przed stworzeniem grafiki odpowiedz: jaki cel, co zapamiętać, jaką akcję podjąć"
          ]
        },
        {
          id: "spojnosc-wizualna",
          title: "Spójność wizualna",
          description: "Dowiedz się, jak budować rozpoznawalny wizerunek salonu poprzez konsekwentną identyfikację wizualną.",
          estimatedMinutes: 20,
          intro: "Klientka scrolluje feed i nagle zatrzymuje się na Twoim poście - nie dlatego, że przeczytała nazwę, ale dlatego, że rozpoznała Twój styl. To magia spójności wizualnej, która buduje rozpoznawalność i zaufanie.",
          nextLessonTitle: "Kolory i fonty",
          sections: [
            {
              id: "gs2-heading-1",
              type: "heading",
              content: "Dlaczego klientka rozpoznaje Twój post"
            },
            {
              id: "gs2-text-1",
              type: "text",
              content: "Wyobraź sobie dwie kawiarnie. Pierwsza ma różne menu każdego dnia - raz rustykalne, raz nowoczesne, raz kolorowe, raz minimalistyczne. Druga zawsze serwuje w tej samej stylowej zastawie, z tym samym logo na filiżance.\n\nKtórą zapamiętasz? Którą polecisz znajomym?\n\nTwój profil w social media działa tak samo. **Spójność = rozpoznawalność = zaufanie.**"
            },
            {
              id: "gs2-tip-1",
              type: "tip",
              content: "Rozpoznawalność buduje się powoli, ale traci błyskawicznie. Jedna niespójna grafika nie zniszczy Twojej marki, ale seria chaotycznych postów sprawi, że klientki przestaną Cię rozpoznawać."
            },
            {
              id: "gs2-heading-2",
              type: "heading",
              content: "5 filarów spójności wizualnej"
            },
            {
              id: "gs2-text-2",
              type: "text",
              content: "Spójność wizualna to nie przypadek - to świadomy zestaw elementów, które zawsze wyglądają podobnie:"
            },
            {
              id: "gs2-step-1",
              type: "step",
              content: "**Paleta kolorów** - 3-5 kolorów, które pojawiają się we wszystkich Twoich materiałach. Główny kolor + kolor akcentowy + neutralne tło.",
              stepNumber: 1
            },
            {
              id: "gs2-step-2",
              type: "step",
              content: "**Typografia** - 2 fonty maksymalnie. Jeden do nagłówków (może być bardziej ozdobny), jeden do tekstów (czytelny i prosty).",
              stepNumber: 2
            },
            {
              id: "gs2-step-3",
              type: "step",
              content: "**Styl zdjęć** - Jasne lub ciemne? Ciepłe czy chłodne kolory? Minimalistyczne czy bogate w detale? Wybierz jeden kierunek.",
              stepNumber: 3
            },
            {
              id: "gs2-step-4",
              type: "step",
              content: "**Elementy graficzne** - Logo, ramki, ikony, kształty. Powtarzające się motywy tworzą Twój unikalny język wizualny.",
              stepNumber: 4
            },
            {
              id: "gs2-step-5",
              type: "step",
              content: "**Ton komunikacji** - Choć to nie element wizualny, wpływa na odbiór całości. Profesjonalny? Przyjacielski? Luksusowy? Wybierz i trzymaj się tego.",
              stepNumber: 5
            },
            {
              id: "gs2-mockup-1",
              type: "mockup",
              content: "Przykład spójnego profilu salonu beauty",
              mockupData: {
                platform: "instagram",
                variant: "profile",
                profileName: "Twój Salon Beauty",
                username: "twojsalonbeauty",
                bio: "💅 Stylizacja paznokci & brwi\n📍 Warszawa, Mokotów\n📞 Umów wizytę: link poniżej",
                followers: "2,847",
                following: "324",
                posts: "156",
                coverType: "salon-interior",
                description: "Spójny profil: jednolita kolorystyka zdjęć, powtarzający się styl grafik, rozpoznawalne elementy marki"
              }
            },
            {
              id: "gs2-heading-3",
              type: "heading",
              content: "Skutki niespójnego profilu"
            },
            {
              id: "gs2-text-3",
              type: "text",
              content: "Brak spójności wizualnej to nie tylko kwestia estetyki. To realne konsekwencje dla Twojego biznesu:"
            },
            {
              id: "gs2-text-4",
              type: "text",
              content: "**❌ Brak rozpoznawalności**\nKlientka widzi Twój post i nie wie, że to Ty. Przewija dalej, bo nie kojarzy z salonem, który polubiła.\n\n**❌ Wrażenie chaosu**\nNiespójny profil sugeruje brak profesjonalizmu. Jeśli nie dbasz o wizerunek online, czy dbasz o szczegóły w pracy?\n\n**❌ Trudność w budowaniu marki**\nNie możesz zbudować silnej marki, jeśli co tydzień wyglądasz inaczej."
            },
            {
              id: "gs2-text-5",
              type: "text",
              content: "**❌ Niższe zaangażowanie**\nAlgorytm faworyzuje profile, które mają rozpoznawalny styl. Klientki częściej lajkują posty, które \"pasują\" do tego, co znają.\n\n**❌ Utracone rekomendacje**\n\"Polecam salon mojej stylistki, ma różowe grafiki...\" - bez spójności, klientka nie wie, jak Cię opisać znajomym."
            },
            {
              id: "gs2-comparison-1",
              type: "comparison",
              content: "Spójny vs niespójny feed",
              comparison: {
                good: {
                  title: "Spójny feed",
                  description: "Jednolita kolorystyka, powtarzający się styl grafik, rozpoznawalne zdjęcia",
                  example: "Pastelowe różowe akcenty, białe tła, minimalistyczne grafiki, jasne zdjęcia stylizacji"
                },
                bad: {
                  title: "Chaotyczny feed",
                  description: "Różne style, kolory, fonty - każdy post wygląda jak z innego salonu",
                  example: "Czarno-złota grafika, potem neonowe różowe, potem rustykalne brązy, mieszane filtry na zdjęciach"
                }
              }
            },
            {
              id: "gs2-quiz-1",
              type: "quiz",
              content: "Sprawdź swoją wiedzę",
              quiz: {
                question: "Co jest NAJBARDZIEJ szkodliwe dla rozpoznawalności marki salonu?",
                options: [
                  "Publikowanie rzadko, ale spójnie",
                  "Częste zmiany palety kolorów i fontów",
                  "Używanie tylko jednego formatu postów",
                  "Brak logo na każdej grafice"
                ],
                correctIndex: 1,
                explanation: "Częste zmiany kolorów i fontów niszczą rozpoznawalność. Klientki nie potrafią powiązać różnych postów z jednym salonem. Lepiej publikować rzadziej, ale spójnie, niż często i chaotycznie."
              }
            },
            {
              id: "gs2-heading-4",
              type: "heading",
              content: "Jak stworzyć swój styl w 5 krokach"
            },
            {
              id: "gs2-step-6",
              type: "step",
              content: "**Zdefiniuj charakter swojego salonu** - Luksusowy? Przyjazny? Nowoczesny? Naturalny? Wybierz 3 przymiotniki, które najlepiej Cię opisują.",
              stepNumber: 1
            },
            {
              id: "gs2-step-7",
              type: "step",
              content: "**Wybierz paletę kolorów** - Bazując na charakterze, dobierz 3-5 kolorów. Więcej o tym w następnej lekcji.",
              stepNumber: 2
            },
            {
              id: "gs2-step-8",
              type: "step",
              content: "**Wybierz 2 fonty** - Jeden wyrazisty do nagłówków, jeden czytelny do tekstów. Upewnij się, że pasują do Twojego charakteru.",
              stepNumber: 3
            },
            {
              id: "gs2-step-9",
              type: "step",
              content: "**Stwórz elementy powtarzalne** - Logo w tym samym miejscu, charakterystyczne ramki, ikony w Twoim stylu.",
              stepNumber: 4
            },
            {
              id: "gs2-step-10",
              type: "step",
              content: "**Ustal zasady zdjęć** - Filtr/preset, który stosujesz zawsze. Styl fotografii (np. jasne, naturalne światło).",
              stepNumber: 5
            },
            {
              id: "gs2-example-1",
              type: "example",
              content: "**Przykład: Salon \"Natura Beauty\"**\n\n- Charakter: Naturalny, spokojny, ekologiczny\n- Kolory: Zieleń szałwiowa, beż, biel, akcenty w złocie\n- Fonty: Playfair Display (nagłówki), Lato (teksty)\n- Elementy: Logo z listkiem, okrągłe ramki, ikony roślinne\n- Zdjęcia: Jasne, ciepłe, naturalne światło, dużo roślin w kadrze"
            },
            {
              id: "gs2-heading-5",
              type: "heading",
              content: "Brand board - Twój wizualny przewodnik"
            },
            {
              id: "gs2-text-6",
              type: "text",
              content: "**Brand board** to jedna strona/grafika, która zbiera wszystkie elementy Twojej identyfikacji wizualnej w jednym miejscu.\n\nCo zawiera:\n- Logo w różnych wersjach\n- Paleta kolorów z kodami\n- Fonty z przykładami użycia\n- Przykładowe grafiki\n- Elementy graficzne (ikony, ramki, kształty)\n- Styl zdjęć (przykładowe fotografie)"
            },
            {
              id: "gs2-tip-2",
              type: "tip",
              content: "Zapisz brand board jako tapetę w telefonie lub wydrukuj i powieś nad biurkiem. Za każdym razem gdy tworzysz nową grafikę, zerknij na niego - czy to pasuje do Twojej marki?"
            },
            {
              id: "gs2-text-7",
              type: "text",
              content: "W Aurine możesz stworzyć swój brand kit, który automatycznie zastosuje Twoje kolory i fonty do wszystkich szablonów. To oszczędza czas i gwarantuje spójność."
            },
            {
              id: "gs2-heading-6",
              type: "heading",
              content: "Jak utrzymać spójność w codziennej pracy"
            },
            {
              id: "gs2-text-8",
              type: "text",
              content: "Stworzenie stylu to jedno. Utrzymanie go w codziennej pracy to drugie. Oto praktyczne wskazówki:"
            },
            {
              id: "gs2-text-9",
              type: "text",
              content: "**1. Używaj szablonów**\nNie twórz każdej grafiki od zera. Miej gotowe szablony promocji, cenników, ogłoszeń.\n\n**2. Zapisz swoje ustawienia**\nKody kolorów, nazwy fontów, rozmiary tekstu - wszystko w jednym miejscu.\n\n**3. Planuj z wyprzedzeniem**\nPrzeglądaj feed przed publikacją. Czy nowy post pasuje do całości?"
            },
            {
              id: "gs2-text-10",
              type: "text",
              content: "**4. Rób screenshoty inspiracji**\nGdy widzisz coś, co pasuje do Twojego stylu, zapisz. Buduj bibliotekę inspiracji.\n\n**5. Audytuj swój profil**\nRaz w miesiącu przejrzyj ostatnie posty. Czy wszystkie pasują do siebie? Gdzie się \"wyłamałaś\"?"
            },
            {
              id: "gs2-warning-1",
              type: "warning",
              content: "Nie zmieniaj swojego stylu impulsywnie. Jeśli zobaczysz trendy konto z zupełnie inną estetyką, nie kopiuj. Twoja spójność jest ważniejsza niż podążanie za każdym trendem."
            },
            {
              id: "gs2-quiz-2",
              type: "quiz",
              content: "Test praktyczny",
              quiz: {
                question: "Widzisz piękny szablon grafiki w zupełnie innym stylu niż Twój. Co robisz?",
                options: [
                  "Używasz go od razu - jest przecież ładny",
                  "Dostosujesz kolory i fonty do swojej marki, potem używasz",
                  "Zmieniasz cały swój styl, żeby pasował do szablonu",
                  "Ignorujesz, bo nie pasuje do Twojej marki"
                ],
                correctIndex: 1,
                explanation: "Najlepsze rozwiązanie to adaptacja. Dobry szablon możesz dostosować do swojej marki - zmienić kolory, fonty, elementy graficzne. Zachowujesz inspirację, ale utrzymujesz spójność."
              }
            },
            {
              id: "gs2-heading-7",
              type: "heading",
              content: "Kiedy można złamać spójność"
            },
            {
              id: "gs2-text-11",
              type: "text",
              content: "Są sytuacje, gdy odstępstwo od stylu jest uzasadnione:\n\n- **Świętowanie (Boże Narodzenie, Walentynki)** - sezonowe akcenty są oczekiwane\n- **Współpraca z inną marką** - możesz użyć elementów partnera\n- **Rebranding** - świadoma zmiana stylu (ale komunikowana!)\n- **Pilne ogłoszenie** - czasem ważna informacja > estetyka"
            },
            {
              id: "gs2-tip-3",
              type: "tip",
              content: "Nawet w świątecznych grafikach zachowaj elementy rozpoznawalne - Twój font, układ logo, charakterystyczne kształty. Dodaj świąteczne akcenty, ale nie porzucaj całej identyfikacji."
            }
          ],
          tasks: [],
          checklist: [
            { id: "gs2-check-1", text: "Rozumiem 5 filarów spójności wizualnej" },
            { id: "gs2-check-2", text: "Znam konsekwencje niespójnego profilu" },
            { id: "gs2-check-3", text: "Wiem jak stworzyć swój styl w 5 krokach" },
            { id: "gs2-check-4", text: "Rozumiem czym jest brand board" },
            { id: "gs2-check-5", text: "Znam sposoby utrzymania spójności na co dzień" },
            { id: "gs2-check-6", text: "Wiem kiedy można złamać spójność" }
          ],
          keyTakeaways: [
            "Spójność = rozpoznawalność = zaufanie. Klientka musi rozpoznać Twój post bez czytania nazwy",
            "5 filarów: paleta kolorów, typografia, styl zdjęć, elementy graficzne, ton komunikacji",
            "Brand board to Twój wizualny przewodnik - wszystkie elementy marki w jednym miejscu",
            "Używaj szablonów i zapisuj ustawienia, by utrzymać spójność bez wysiłku",
            "Nie zmieniaj stylu impulsywnie - Twoja rozpoznawalność jest ważniejsza niż trendy"
          ]
        },
        {
          id: "kolory-i-fonty",
          title: "Kolory i fonty",
          description: "Naucz się dobierać paletę kolorów i fonty, które oddają charakter Twojego salonu i przyciągają idealną klientkę.",
          estimatedMinutes: 22,
          intro: "Kolory i fonty to nie kwestia gustu - to narzędzia komunikacji. Zanim klientka przeczyta tekst, jej mózg już zareagował na kolory. W tej lekcji nauczysz się świadomie używać tych narzędzi.",
          nextLessonTitle: "Korzystanie z szablonów",
          sections: [
            {
              id: "gs3-heading-1",
              type: "heading",
              content: "Psychologia kolorów - co mówią klientkom"
            },
            {
              id: "gs3-text-1",
              type: "text",
              content: "Kolory wywołują emocje i skojarzenia w ułamku sekundy. Zanim klientka zdąży pomyśleć, już CZUJE Twoją markę.\n\nDlatego wybór kolorów to nie \"co mi się podoba\", ale \"co chcę komunikować\"."
            },
            {
              id: "gs3-text-2",
              type: "text",
              content: "**🩷 Róż i fuksja**\nKobiecość, delikatność, młodość, romantyczność\n*Idealny dla:* Salon stylizacji paznokci, brwi, make-up\n\n**💜 Fiolet i lawenda**\nLuksus, kreatywność, tajemniczość, duchowość\n*Idealny dla:* Salon premium, spa, zabiegi relaksacyjne\n\n**🩵 Błękit i turkus**\nSpokój, zaufanie, czystość, profesjonalizm\n*Idealny dla:* Medycyna estetyczna, gabinet kosmetyczny"
            },
            {
              id: "gs3-text-3",
              type: "text",
              content: "**🤎 Beż i nude**\nNaturalność, elegancja, ciepło, ponadczasowość\n*Idealny dla:* Salon naturalny, ekologiczny, klasyczny\n\n**🖤 Czerń i złoto**\nPrestiż, ekskluzywność, siła, elegancja\n*Idealny dla:* Salon premium, luksusowe zabiegi\n\n**💚 Zieleń**\nNatura, świeżość, zdrowie, harmonia\n*Idealny dla:* Salon eko, naturalna kosmetyka, wellness"
            },
            {
              id: "gs3-quiz-1",
              type: "quiz",
              content: "Sprawdź swoją wiedzę",
              quiz: {
                question: "Prowadzisz ekskluzywny salon z zabiegami premium. Które kolory NAJLEPIEJ oddadzą charakter Twojej marki?",
                options: [
                  "Jaskrawy róż i turkus",
                  "Czerń, złoto i głęboki burgund",
                  "Pastelowy żółty i zielony",
                  "Neonowy fiolet i pomarańcz"
                ],
                correctIndex: 1,
                explanation: "Czerń i złoto komunikują prestiż i ekskluzywność. Głęboki burgund dodaje elegancji. Te kolory od razu mówią klientce: \"To miejsce premium, warte swojej ceny\"."
              }
            },
            {
              id: "gs3-heading-2",
              type: "heading",
              content: "Kolory dla różnych typów salonów beauty"
            },
            {
              id: "gs3-text-4",
              type: "text",
              content: "Twój salon ma unikalny charakter. Oto gotowe sugestie palet kolorów dla różnych typów działalności:"
            },
            {
              id: "gs3-text-5",
              type: "text",
              content: "**Stylizacja paznokci - nowoczesny salon**\n- Główny: Pudrowy róż lub nude\n- Akcent: Złoto lub miedź\n- Tło: Kremowa biel\n- Neutralny: Szary\n\n**Stylizacja brwi i rzęs**\n- Główny: Ciepły brąz lub taupe\n- Akcent: Różowe złoto\n- Tło: Jasny beż\n- Neutralny: Ciepła biel"
            },
            {
              id: "gs3-text-6",
              type: "text",
              content: "**Salon kosmetyczny - klasyczny**\n- Główny: Elegancki fiolet lub burgund\n- Akcent: Złoto\n- Tło: Kremowa biel lub jasny szary\n- Neutralny: Antracyt\n\n**Gabinet medycyny estetycznej**\n- Główny: Spokojny błękit lub szałwia\n- Akcent: Srebro lub jasne złoto\n- Tło: Czysta biel\n- Neutralny: Chłodny szary"
            },
            {
              id: "gs3-text-7",
              type: "text",
              content: "**Salon naturalny/eko**\n- Główny: Zieleń szałwiowa lub oliwkowa\n- Akcent: Terakota lub miedź\n- Tło: Kremowy beż\n- Neutralny: Ciepły brąz\n\n**Salon młodzieżowy/trendy**\n- Główny: Intensywny róż lub koral\n- Akcent: Żywy fiolet lub turkus\n- Tło: Jasna biel\n- Neutralny: Jasny szary"
            },
            {
              id: "gs3-heading-3",
              type: "heading",
              content: "Zasada 60-30-10 w praktyce"
            },
            {
              id: "gs3-text-8",
              type: "text",
              content: "To złota zasada projektowania, która gwarantuje harmonijny wygląd każdej grafiki:\n\n**60% - Kolor dominujący (tło)**\nNajczęściej neutralny: biały, kremowy, jasny szary. Daje przestrzeń do oddychania.\n\n**30% - Kolor główny (elementy)**\nTwój charakterystyczny kolor marki. Pojawia się w nagłówkach, ramkach, ważnych elementach.\n\n**10% - Kolor akcentowy (szczegóły)**\nPrzyciąga wzrok do najważniejszego: CTA, ceny, daty. Używaj oszczędnie!"
            },
            {
              id: "gs3-mockup-1",
              type: "mockup",
              content: "Przykład zastosowania zasady 60-30-10",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "💅 Nowy cennik zabiegów już dostępny! Sprawdź szczegóły ➡️ link w bio\n\n#stylizacjapaznokci #manicure #hybryda",
                postLikes: "89",
                postComments: "7",
                postImage: "nails",
                description: "60% kremowe tło, 30% pudrowy róż w ramkach i tekstach, 10% złoty akcent w CTA i ikonie"
              }
            },
            {
              id: "gs3-example-1",
              type: "example",
              content: "**Praktyczny przykład:**\n\nGrafika promocyjna salonu \"Rose Nails\":\n- **60%** - Kremowe tło (przestrzeń, czytelność)\n- **30%** - Pudrowy róż (nagłówek \"Promocja -20%\", ramka wokół oferty)\n- **10%** - Złoto (przycisk \"Umów się\", ikona paznokcia)\n\nEfekt: Elegancka, czytelna grafika, która prowadzi wzrok do CTA."
            },
            {
              id: "gs3-heading-4",
              type: "heading",
              content: "Jak wybrać paletę kolorów - krok po kroku"
            },
            {
              id: "gs3-step-1",
              type: "step",
              content: "**Określ charakter swojego salonu** - Napisz 3-5 przymiotników: luksusowy, naturalny, nowoczesny, przyjazny, profesjonalny?",
              stepNumber: 1
            },
            {
              id: "gs3-step-2",
              type: "step",
              content: "**Wybierz kolor główny** - Bazując na charakterze i psychologii kolorów. To będzie Twój rozpoznawalny kolor marki.",
              stepNumber: 2
            },
            {
              id: "gs3-step-3",
              type: "step",
              content: "**Dodaj kolor akcentowy** - Kontrastujący z głównym, ale harmonijny. Złoto, miedź, lub żywszy odcień Twojego głównego koloru.",
              stepNumber: 3
            },
            {
              id: "gs3-step-4",
              type: "step",
              content: "**Wybierz neutralne tło** - Biały, kremowy, jasny szary lub bardzo rozbielona wersja Twojego głównego koloru.",
              stepNumber: 4
            },
            {
              id: "gs3-step-5",
              type: "step",
              content: "**Przetestuj paletę** - Stwórz prostą grafikę z wszystkimi kolorami. Czy wygląda jak Twoja marka? Czy jest czytelna?",
              stepNumber: 5
            },
            {
              id: "gs3-tip-1",
              type: "tip",
              content: "Nie wybieraj kolorów samodzielnie! Użyj narzędzia Coolors.co lub Adobe Color - wpisujesz jeden kolor, a narzędzie podpowiada harmonijne kombinacje."
            },
            {
              id: "gs3-heading-5",
              type: "heading",
              content: "Typografia - fonty dla beauty"
            },
            {
              id: "gs3-text-9",
              type: "text",
              content: "Font to głos Twojej marki w formie pisanej. Tak jak kolor wywołuje emocje, font nadaje ton komunikacji.\n\n**Serif (z szeryfami)** - Klasyka, elegancja, tradycja\nPrzykłady: Playfair Display, Cormorant, Libre Baskerville\n*Idealne dla:* Salony premium, klasyczne, luksusowe\n\n**Sans-serif (bez szeryfów)** - Nowoczesność, prostota, czytelność\nPrzykłady: Montserrat, Poppins, Raleway, Lato\n*Idealne dla:* Nowoczesne salony, młodzieżowe, minimalistyczne"
            },
            {
              id: "gs3-text-10",
              type: "text",
              content: "**Script (ozdobne)** - Kobiecość, elegancja, artyzm\nPrzykłady: Parisienne, Great Vibes, Dancing Script\n*Idealne dla:* Akcenty, logo, nagłówki (NIGDY do dłuższych tekstów!)\n\n**Display (dekoracyjne)** - Charakter, wyjątkowość, wyróżnienie\nPrzykłady: Abril Fatface, Bodoni Moda\n*Idealne dla:* Nagłówki, tytuły promocji"
            },
            {
              id: "gs3-warning-1",
              type: "warning",
              content: "Fonty ozdobne (script) są piękne, ale NIECZYTELNE w dłuższych tekstach. Używaj ich TYLKO do krótkich nagłówków i akcentów. Tekst główny zawsze w czytelnym foncie!"
            },
            {
              id: "gs3-heading-6",
              type: "heading",
              content: "Łączenie fontów - zasady"
            },
            {
              id: "gs3-text-11",
              type: "text",
              content: "Idealna kombinacja to **2 fonty** - jeden do nagłówków, jeden do tekstów. Maksymalnie 3 (jeśli dodajesz akcent).\n\n**Sprawdzone połączenia dla beauty:**"
            },
            {
              id: "gs3-text-12",
              type: "text",
              content: "**Elegancki salon:**\n- Nagłówki: Playfair Display\n- Teksty: Raleway\n\n**Nowoczesny salon:**\n- Nagłówki: Montserrat Bold\n- Teksty: Lato\n\n**Romantyczny salon:**\n- Nagłówki: Cormorant Garamond\n- Teksty: Open Sans\n- Akcent: Parisienne (tylko logo/podpisy)"
            },
            {
              id: "gs3-comparison-1",
              type: "comparison",
              content: "Dobór fontów",
              comparison: {
                good: {
                  title: "Harmonijna para",
                  description: "Kontrastujące, ale uzupełniające się fonty",
                  example: "Playfair Display (elegancki serif) + Raleway (nowoczesny sans-serif)"
                },
                bad: {
                  title: "Chaotyczna mieszanka",
                  description: "Zbyt podobne lub zbyt różne fonty, brak hierarchii",
                  example: "Comic Sans + Papyrus + Impact (3 różne style, żaden nie pasuje do beauty)"
                }
              }
            },
            {
              id: "gs3-quiz-2",
              type: "quiz",
              content: "Test praktyczny",
              quiz: {
                question: "Chcesz użyć pięknego ozdobnego fontu Script do opisu promocji (3 zdania). Co powiesz na ten pomysł?",
                options: [
                  "Świetny pomysł - będzie elegancko i wyróżni się",
                  "Zły pomysł - fonty Script są nieczytelne w dłuższych tekstach",
                  "Dobry pomysł, ale tylko jeśli font jest duży",
                  "Zależy od koloru fontu"
                ],
                correctIndex: 1,
                explanation: "Fonty Script są piękne, ale trudne do czytania w dłuższych tekstach. 3 zdania to już za dużo. Użyj Script do nagłówka (1-3 słowa), a opis napisz czytelnym fontem Sans-serif."
              }
            },
            {
              id: "gs3-heading-7",
              type: "heading",
              content: "Częste błędy kolorystyczne i typograficzne"
            },
            {
              id: "gs3-text-13",
              type: "text",
              content: "**❌ Błędy kolorystyczne:**\n- Zbyt wiele kolorów (więcej niż 4-5)\n- Brak kontrastu tekst-tło (jasny tekst na jasnym tle)\n- Neonowe kolory w salonie premium\n- Zmiana palety co miesiąc\n- Używanie różnych odcieni tego samego koloru (np. 5 różnych różów)"
            },
            {
              id: "gs3-text-14",
              type: "text",
              content: "**❌ Błędy typograficzne:**\n- Więcej niż 3 fonty na grafice\n- Font ozdobny do dłuższych tekstów\n- Brak hierarchii (wszystko tym samym fontem i rozmiarem)\n- Fonty, które nie pasują do charakteru marki\n- Tekst zbyt mały lub zbyt ciasno ułożony"
            },
            {
              id: "gs3-tip-2",
              type: "tip",
              content: "Zapisz swoje kolory z kodami HEX i fonty z dokładnymi nazwami. W Aurine możesz to zrobić w Brand Kit, który automatycznie zastosuje Twoje ustawienia do każdego szablonu."
            },
            {
              id: "gs3-heading-8",
              type: "heading",
              content: "Narzędzia do doboru kolorów i fontów"
            },
            {
              id: "gs3-text-15",
              type: "text",
              content: "**Kolory:**\n- **Coolors.co** - Generator palet kolorów\n- **Adobe Color** - Koło kolorów i harmonie\n- **Canva Color Palette Generator** - Wyciąga kolory ze zdjęcia\n\n**Fonty:**\n- **Google Fonts** - Darmowe fonty do użytku komercyjnego\n- **Fontpair.co** - Gotowe kombinacje fontów\n- **Typ.io** - Inspiracje fontowe z prawdziwych stron"
            },
            {
              id: "gs3-tip-3",
              type: "tip",
              content: "Masz zdjęcie swojego salonu lub produktów? Wrzuć je do Canva Color Palette Generator - wyciągnie z niego paletę kolorów, która idealnie pasuje do Twojego miejsca."
            }
          ],
          tasks: [],
          checklist: [
            { id: "gs3-check-1", text: "Rozumiem psychologię kolorów w kontekście beauty" },
            { id: "gs3-check-2", text: "Znam zasadę 60-30-10" },
            { id: "gs3-check-3", text: "Potrafię wybrać paletę kolorów w 5 krokach" },
            { id: "gs3-check-4", text: "Rozumiem różnice między typami fontów" },
            { id: "gs3-check-5", text: "Wiem jak łączyć fonty" },
            { id: "gs3-check-6", text: "Znam częste błędy kolorystyczne i typograficzne" },
            { id: "gs3-check-7", text: "Mam zapisane swoje kolory i fonty" }
          ],
          keyTakeaways: [
            "Kolory komunikują emocje - wybieraj je świadomie, nie według gustu",
            "Zasada 60-30-10: 60% neutralne tło, 30% kolor główny, 10% akcent",
            "2 fonty to ideał: jeden do nagłówków (może być ozdobny), jeden do tekstów (czytelny)",
            "Fonty Script są piękne, ale używaj ich TYLKO do krótkich nagłówków",
            "Zapisz kolory (kody HEX) i fonty (nazwy) - to Twój wizualny DNA marki"
          ]
        },
        {
          id: "korzystanie-z-szablonow",
          title: "Korzystanie z szablonów",
          description: "Poznaj efektywne techniki pracy z szablonami, które pozwolą Ci tworzyć profesjonalne grafiki w kilka minut.",
          estimatedMinutes: 18,
          intro: "Tworzenie grafiki od zera zajmuje 30-60 minut. Z szablonem? 5-10 minut. W tej lekcji nauczysz się pracować z szablonami tak, by wyglądały profesjonalnie i pasowały do Twojej marki.",
          nextLessonTitle: "Najczęstsze błędy graficzne",
          sections: [
            {
              id: "gs4-heading-1",
              type: "heading",
              content: "Dlaczego szablony zmieniają grę"
            },
            {
              id: "gs4-text-1",
              type: "text",
              content: "Wyobraź sobie, że co tydzień musisz stworzyć:\n- 2 grafiki promocyjne\n- 1 cennik\n- 3 stories z pytaniami\n- Grafiki do highlights\n\nBez szablonów to 4-6 godzin pracy. Z szablonami? Godzina, może półtorej.\n\n**Szablony to nie oszustwo** - to sprytna praca. Profesjonalne agencje też ich używają."
            },
            {
              id: "gs4-text-2",
              type: "text",
              content: "**5 zalet pracy z szablonami:**\n\n1. **Oszczędność czasu** - Minuty zamiast godzin\n2. **Spójność** - Wszystkie grafiki wyglądają jak część jednej marki\n3. **Profesjonalizm** - Szablony są projektowane przez grafików\n4. **Mniejszy stres** - Nie zaczynasz od pustej kartki\n5. **Łatwiejsze planowanie** - Wiesz ile czasu potrzebujesz na content"
            },
            {
              id: "gs4-tip-1",
              type: "tip",
              content: "Szablony to punkt wyjścia, nie cel. Każdy szablon możesz i POWINNAŚ dostosować do swojej marki. Szablon bez personalizacji = grafika jak setki innych."
            },
            {
              id: "gs4-heading-2",
              type: "heading",
              content: "Jak dostosować szablon do swojej marki"
            },
            {
              id: "gs4-text-3",
              type: "text",
              content: "Dostosowanie szablonu to proces, który powinna wykonać za każdym razem, gdy używasz nowego szablonu. Oto kolejność działań:"
            },
            {
              id: "gs4-step-1",
              type: "step",
              content: "**Zmień kolory na swoje** - To pierwsza i najważniejsza zmiana. Użyj kolorów z Twojej palety (zapisanych kodów HEX).",
              stepNumber: 1
            },
            {
              id: "gs4-step-2",
              type: "step",
              content: "**Wymień fonty** - Zastąp fonty szablonu swoimi. Nagłówek Twoim fontem do nagłówków, tekst Twoim fontem do tekstów.",
              stepNumber: 2
            },
            {
              id: "gs4-step-3",
              type: "step",
              content: "**Dodaj logo** - W tym samym miejscu na każdej grafice. Buduje rozpoznawalność.",
              stepNumber: 3
            },
            {
              id: "gs4-step-4",
              type: "step",
              content: "**Dostosuj treść** - Zmień teksty na swoje. Zachowaj strukturę, zmień słowa.",
              stepNumber: 4
            },
            {
              id: "gs4-step-5",
              type: "step",
              content: "**Sprawdź czytelność** - Czy tekst jest widoczny? Czy kontrast jest wystarczający? Przetestuj na telefonie!",
              stepNumber: 5
            },
            {
              id: "gs4-quiz-1",
              type: "quiz",
              content: "Sprawdź swoją wiedzę",
              quiz: {
                question: "Znalazłaś piękny szablon grafiki promocyjnej. Co robisz NAJPIERW?",
                options: [
                  "Wpisujesz swoją treść promocji",
                  "Zmieniasz kolory na swoje",
                  "Dodajesz logo",
                  "Zmieniasz zdjęcie"
                ],
                correctIndex: 1,
                explanation: "Kolory to pierwsza zmiana! To one najbardziej wpływają na rozpoznawalność marki. Po zmianie kolorów szablon od razu zaczyna wyglądać jak \"Twój\"."
              }
            },
            {
              id: "gs4-heading-3",
              type: "heading",
              content: "Jakie szablony przygotować na start"
            },
            {
              id: "gs4-text-4",
              type: "text",
              content: "Nie potrzebujesz setek szablonów. Na początek wystarczy **8-10 podstawowych**, które pokryją większość potrzeb:"
            },
            {
              id: "gs4-text-5",
              type: "text",
              content: "**Szablony postów (format kwadratowy 1080x1080px):**\n\n1. **Promocja / Oferta specjalna** - Z miejscem na % zniżki i datę\n2. **Cennik** - Czytelna lista usług z cenami\n3. **Cytat / Motywacja** - Inspirujący przekaz\n4. **Ogłoszenie** - Ważna informacja (zmiana godzin, nowy adres)\n5. **Nowość w ofercie** - Prezentacja nowej usługi"
            },
            {
              id: "gs4-text-6",
              type: "text",
              content: "**Szablony stories (format 1080x1920px):**\n\n6. **Pytanie do obserwatorów** - Z naklejką pytania\n7. **Ankieta** - Z naklejką głosowania\n8. **Informacja dnia** - Szybka wiadomość\n\n**Szablony highlights (format koło):**\n\n9. **Ikony highlights** - Cennik, O mnie, Kontakt, Opinie, FAQ"
            },
            {
              id: "gs4-comparison-1",
              type: "comparison",
              content: "Grafika od zera vs z szablonu",
              comparison: {
                good: {
                  title: "Z szablonu + personalizacja",
                  description: "5-10 minut, profesjonalny wygląd, spójna z marką",
                  example: "Otwieram szablon → Zmieniam kolory → Wpisuję tekst → Dodaję logo → Gotowe"
                },
                bad: {
                  title: "Od zera",
                  description: "30-60 minut, ryzyko amatorskiego wyglądu, często niespójna",
                  example: "Pusta kartka → Szukam inspiracji → Eksperymenty z układem → Problemy z fontami → Frustracja"
                }
              }
            },
            {
              id: "gs4-heading-4",
              type: "heading",
              content: "Biblioteka szablonów - organizacja"
            },
            {
              id: "gs4-text-7",
              type: "text",
              content: "Posiadanie szablonów to jedno. Umiejętność szybkiego ich znalezienia to drugie. Oto jak zorganizować swoją bibliotekę:"
            },
            {
              id: "gs4-text-8",
              type: "text",
              content: "**Struktura folderów:**\n\n📁 SZABLONY SALON\n├── 📁 Posty\n│   ├── Promocje\n│   ├── Cenniki\n│   ├── Ogłoszenia\n│   └── Cytaty\n├── 📁 Stories\n│   ├── Pytania\n│   ├── Ankiety\n│   └── Info\n├── 📁 Highlights\n└── 📁 Reels (okładki)"
            },
            {
              id: "gs4-tip-2",
              type: "tip",
              content: "Nazwij pliki jasno: \"PROMO_procenty.psd\" lub \"CENNIK_podstawowy.canva\". Gdy za 3 miesiące będziesz szukać szablonu, podziękujesz sobie za porządek."
            },
            {
              id: "gs4-heading-5",
              type: "heading",
              content: "Szablony w Aurine - jak z nich korzystać"
            },
            {
              id: "gs4-text-9",
              type: "text",
              content: "W Aurine znajdziesz gotowe szablony zaprojektowane specjalnie dla salonów beauty. Oto jak z nich korzystać:"
            },
            {
              id: "gs4-step-6",
              type: "step",
              content: "**Skonfiguruj Brand Kit** - Wpisz swoje kolory, fonty i logo. Aurine automatycznie zastosuje je do szablonów.",
              stepNumber: 1
            },
            {
              id: "gs4-step-7",
              type: "step",
              content: "**Wybierz kategorię** - Promocje, cenniki, stories, highlights - znajdź to, czego potrzebujesz.",
              stepNumber: 2
            },
            {
              id: "gs4-step-8",
              type: "step",
              content: "**Wybierz szablon** - Przeglądaj dostępne opcje. Każdy szablon ma podgląd.",
              stepNumber: 3
            },
            {
              id: "gs4-step-9",
              type: "step",
              content: "**Edytuj treść** - Wpisz swoje teksty, dostosuj szczegóły.",
              stepNumber: 4
            },
            {
              id: "gs4-step-10",
              type: "step",
              content: "**Pobierz lub zaplanuj** - Gotową grafikę możesz pobrać lub od razu zaplanować publikację.",
              stepNumber: 5
            },
            {
              id: "gs4-mockup-1",
              type: "mockup",
              content: "Szablon przed i po personalizacji",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "✨ Promocja weekendowa! -15% na wszystkie zabiegi pielęgnacyjne. Tylko do niedzieli! 📞 Rezerwacje: link w bio",
                postLikes: "156",
                postComments: "23",
                postImage: "treatment",
                description: "Ten sam szablon, ale z Twoimi kolorami, fontami i treścią - wygląda jak stworzony specjalnie dla Ciebie"
              }
            },
            {
              id: "gs4-heading-6",
              type: "heading",
              content: "5 minut vs 30 minut - realna różnica"
            },
            {
              id: "gs4-example-1",
              type: "example",
              content: "**Scenariusz: Trzeba stworzyć grafikę promocyjną -20% na manicure**\n\n**Bez szablonu (30-45 min):**\n- Otwórz Canva, szukaj inspiracji (10 min)\n- Wybierz tło, układaj elementy (10 min)\n- Dobieraj fonty i kolory (10 min)\n- Poprawiaj, przesuwaj, zmieniaj (10 min)\n- Frustacja: \"Nie wygląda profesjonalnie\"\n\n**Z szablonem (5-8 min):**\n- Otwórz szablon promocji (1 min)\n- Wpisz \"-20%\" i \"manicure\" (1 min)\n- Sprawdź na telefonie (1 min)\n- Eksportuj i publikuj (2 min)\n- Zadowolenie: \"Wygląda świetnie!\""
            },
            {
              id: "gs4-text-10",
              type: "text",
              content: "**Policzymy:**\n\nJeśli tworzysz 8 grafik tygodniowo:\n- Bez szablonów: 8 × 30 min = **4 godziny**\n- Z szablonami: 8 × 7 min = **56 minut**\n\n**Oszczędzasz ponad 3 godziny tygodniowo!** To czas na kolejną klientkę lub zasłużony odpoczynek."
            },
            {
              id: "gs4-quiz-2",
              type: "quiz",
              content: "Test praktyczny",
              quiz: {
                question: "Masz 15 minut przed otwarciem salonu. Chcesz opublikować informację o wolnym terminie dziś o 14:00. Co robisz?",
                options: [
                  "Rezygnujesz - nie zdążysz zrobić ładnej grafiki",
                  "Robisz szybkie zdjęcie salonu i wrzucasz z tekstem",
                  "Otwierasz szablon \"ogłoszenie\", wpisujesz informację, publikujesz",
                  "Piszesz tylko tekst bez grafiki"
                ],
                correctIndex: 2,
                explanation: "Z gotowym szablonem 15 minut to mnóstwo czasu! Szablon \"ogłoszenie\" + wpisanie informacji = 5 minut. Profesjonalna grafika gotowa przed poranną kawą."
              }
            },
            {
              id: "gs4-heading-7",
              type: "heading",
              content: "Kiedy NIE używać szablonu"
            },
            {
              id: "gs4-text-11",
              type: "text",
              content: "Szablony są świetne, ale nie zawsze są najlepszym wyborem:\n\n**❌ Gdy szablon nie pasuje do przekazu**\nNie wciskaj treści na siłę. Lepiej poszukać innego szablonu.\n\n**❌ Gdy potrzebujesz czegoś unikalnego**\nWażna rocznica salonu, specjalna kolaboracja - czasem warto poświęcić więcej czasu.\n\n**❌ Gdy szablon wymaga więcej przeróbek niż tworzenie od zera**\nJeśli zmieniasz wszystko - tło, układ, elementy - może lepiej zacząć od nowa."
            },
            {
              id: "gs4-warning-1",
              type: "warning",
              content: "Nie używaj szablonu bez personalizacji! Klientki (i konkurencja) rozpoznają popularne szablony. Bez zmiany kolorów i fontów Twoja grafika wygląda jak setki innych."
            },
            {
              id: "gs4-tip-3",
              type: "tip",
              content: "Zrób sobie \"dzień szablonów\" raz w miesiącu. Poświęć 2 godziny na przygotowanie i personalizację szablonów na cały miesiąc. Potem korzystasz z gotowych materiałów."
            }
          ],
          tasks: [],
          checklist: [
            { id: "gs4-check-1", text: "Rozumiem zalety pracy z szablonami" },
            { id: "gs4-check-2", text: "Wiem jak dostosować szablon do mojej marki w 5 krokach" },
            { id: "gs4-check-3", text: "Mam listę 8-10 podstawowych szablonów do przygotowania" },
            { id: "gs4-check-4", text: "Rozumiem jak zorganizować bibliotekę szablonów" },
            { id: "gs4-check-5", text: "Wiem kiedy NIE używać szablonu" }
          ],
          keyTakeaways: [
            "Szablony oszczędzają 3+ godziny tygodniowo - to czas na klientkę lub odpoczynek",
            "Każdy szablon MUSISZ personalizować: kolory → fonty → logo → treść → sprawdzenie",
            "Na start potrzebujesz 8-10 podstawowych szablonów (posty, stories, highlights)",
            "Organizuj szablony w foldery - przyszła Ty podziękujesz za porządek",
            "Szablon bez personalizacji = grafika jak setki innych. Zawsze dostosuj do swojej marki"
          ]
        },
        {
          id: "najczestsze-bledy-graficzne",
          title: "Najczęstsze błędy graficzne",
          description: "Poznaj typowe błędy w grafikach salonów beauty i naucz się ich unikać, by Twoje materiały wyglądały profesjonalnie.",
          estimatedMinutes: 18,
          intro: "Nawet najlepsza treść przepadnie, jeśli grafika odstraszy klientkę. W tej lekcji pokażę Ci najczęstsze błędy graficzne salonów beauty - i jak ich unikać, by Twoje materiały wyglądały profesjonalnie.",
          sections: [
            {
              id: "gs5-heading-1",
              type: "heading",
              content: "Błędy typograficzne - tekst, który odstrasza"
            },
            {
              id: "gs5-text-1",
              type: "text",
              content: "Tekst to często najważniejszy element grafiki - to on przekazuje informację. Błędy typograficzne mogą całkowicie zniszczyć przekaz."
            },
            {
              id: "gs5-text-2",
              type: "text",
              content: "**❌ Błąd #1: Zbyt wiele fontów**\n\nKażdy nowy font to nowy \"głos\" na grafice. 3, 4, 5 fontów to kakofonia, chaos wizualny.\n\n✅ **Rozwiązanie:** Maksymalnie 2 fonty. Jeden do nagłówków, jeden do tekstu. Urozmaicaj grubością (bold/regular) zamiast dodawaniem nowych fontów."
            },
            {
              id: "gs5-text-3",
              type: "text",
              content: "**❌ Błąd #2: Font ozdobny do długiego tekstu**\n\nScript, kaligraficzne, ozdobne fonty są piękne... w nagłówkach. 3 zdania takiego tekstu? Nieczytelne.\n\n✅ **Rozwiązanie:** Fonty ozdobne tylko do nagłówków (1-5 słów). Dłuższe teksty zawsze w czytelnym foncie sans-serif."
            },
            {
              id: "gs5-text-4",
              type: "text",
              content: "**❌ Błąd #3: Tekst za mały lub za ciasny**\n\nJeśli musisz mrużyć oczy, by przeczytać - klientka nie przeczyta wcale. Zbyt mały margines między liniami to też problem.\n\n✅ **Rozwiązanie:** Sprawdź na telefonie! Jeśli tekst jest trudny do przeczytania - powiększ. Zwiększ interlinie (odstęp między liniami)."
            },
            {
              id: "gs5-comparison-1",
              type: "comparison",
              content: "Typografia na grafice",
              comparison: {
                good: {
                  title: "Czytelny układ",
                  description: "2 fonty, hierarchia rozmiarów, odpowiednie marginesy",
                  example: "Nagłówek 32px bold + tekst 16px regular, odstęp między liniami 1.4"
                },
                bad: {
                  title: "Typograficzny chaos",
                  description: "4+ fonty, wszystko tym samym rozmiarem, ciasno upakowane",
                  example: "5 różnych fontów, tekst 10px bez marginesów, niemożliwy do przeczytania"
                }
              }
            },
            {
              id: "gs5-heading-2",
              type: "heading",
              content: "Błędy kolorystyczne - gdy kolory kłócą się między sobą"
            },
            {
              id: "gs5-text-5",
              type: "text",
              content: "Kolory mogą przyciągać lub odpychać. Złe zestawienia powodują dyskomfort - klientka scrolluje dalej, nawet nie wiedząc dlaczego."
            },
            {
              id: "gs5-text-6",
              type: "text",
              content: "**❌ Błąd #4: Zbyt wiele kolorów**\n\nRóż, błękit, żółty, zielony, fiolet... na jednej grafice? To przeciążenie wizualne.\n\n✅ **Rozwiązanie:** Zasada 60-30-10. Maksymalnie 3-4 kolory na grafice. Jeden dominujący, reszta wspierająca."
            },
            {
              id: "gs5-text-7",
              type: "text",
              content: "**❌ Błąd #5: Brak kontrastu**\n\nJasnoróżowy tekst na różowym tle? Biały na kremowym? Nieczytelne.\n\n✅ **Rozwiązanie:** Tekst musi być wyraźnie widoczny. Ciemny na jasnym lub jasny na ciemnym. Sprawdź, mrużąc oczy - czy nadal widzisz tekst?"
            },
            {
              id: "gs5-text-8",
              type: "text",
              content: "**❌ Błąd #6: Neonowe kolory w premium**\n\nJaskrawy neon krzyczysz \"tania oferta\". Jeśli Twój salon jest premium - neonowe kolory niszczą ten wizerunek.\n\n✅ **Rozwiązanie:** Dla premium: stonowane, głębokie kolory, złoto, czerń. Neon tylko dla młodzieżowych, trendy marek."
            },
            {
              id: "gs5-quiz-1",
              type: "quiz",
              content: "Sprawdź swoją wiedzę",
              quiz: {
                question: "Tworzysz grafikę promocyjną. Tekst \"-30%\" jest w kolorze jasnoróżowym na pastelowym różowym tle. Jaki jest problem?",
                options: [
                  "Róż to zły kolor na promocje",
                  "Brak kontrastu - tekst jest nieczytelny",
                  "Procenty powinny być większe",
                  "Brakuje ramki wokół tekstu"
                ],
                correctIndex: 1,
                explanation: "Brak kontrastu! Jasnoróżowy na różowym = tekst zlewa się z tłem. Klientka go nie zauważy. Zmień tekst na ciemniejszy (np. burgund) lub dodaj biały/ciemny cień."
              }
            },
            {
              id: "gs5-heading-3",
              type: "heading",
              content: "Błędy kompozycyjne - gdy wszystko jest wszędzie"
            },
            {
              id: "gs5-text-9",
              type: "text",
              content: "Kompozycja to układ elementów na grafice. Dobra kompozycja prowadzi wzrok. Zła - powoduje chaos i dezorientację."
            },
            {
              id: "gs5-text-10",
              type: "text",
              content: "**❌ Błąd #7: Przeładowanie treścią**\n\nWszystko jest ważne, więc wszystko musi być na grafice? Nie. Gdy wszystko jest ważne, nic nie jest ważne.\n\n✅ **Rozwiązanie:** Jedna grafika = jedna główna informacja. Chcesz powiedzieć więcej? Zrób karuzele lub serię grafik."
            },
            {
              id: "gs5-text-11",
              type: "text",
              content: "**❌ Błąd #8: Brak hierarchii**\n\nWszystko tym samym rozmiarem, tym samym kolorem. Wzrok nie wie, gdzie patrzeć najpierw.\n\n✅ **Rozwiązanie:** Hierarchia = co najważniejsze, to największe i najbardziej wyraziste. Nagłówek > tekst > szczegóły."
            },
            {
              id: "gs5-text-12",
              type: "text",
              content: "**❌ Błąd #9: Elementy przy samej krawędzi**\n\nTekst lub grafika dotykające krawędzi wyglądają \"ściśnięte\" i amatorsko.\n\n✅ **Rozwiązanie:** Zachowaj marginesy! Minimum 30-50px od każdej krawędzi. Elementy potrzebują \"powietrza\"."
            },
            {
              id: "gs5-example-1",
              type: "example",
              content: "**Przykład hierarchii wizualnej:**\n\n**Źle:**\nMANICURE HYBRYDOWY\n50 ZŁ\nUMÓW SIĘ TERAZ\nOFERTA WAŻNA DO 31.12\n(wszystko tym samym rozmiarem i kolorem)\n\n**Dobrze:**\n# MANICURE HYBRYDOWY (największe, wyraziste)\n## 50 ZŁ (duże, kolor akcentowy)\nUmów się teraz (średnie, CTA w ramce)\nOferta ważna do 31.12 (małe, stonowane)"
            },
            {
              id: "gs5-heading-4",
              type: "heading",
              content: "Błędy techniczne - gdy grafika \"nie działa\""
            },
            {
              id: "gs5-text-13",
              type: "text",
              content: "Możesz mieć piękny design, ale błędy techniczne zniszczą całe wrażenie."
            },
            {
              id: "gs5-text-14",
              type: "text",
              content: "**❌ Błąd #10: Rozmazane zdjęcia/grafiki**\n\nNiska rozdzielczość = nieostry, pikselowy obraz. Wygląda tanio i nieprofesjonalnie.\n\n✅ **Rozwiązanie:** Zawsze używaj grafik minimum 1080x1080px dla postów. Nie rozciągaj małych obrazków!"
            },
            {
              id: "gs5-text-15",
              type: "text",
              content: "**❌ Błąd #11: Zły format pliku**\n\n- JPEG do grafik z tekstem = rozmazane litery\n- PNG niepotrzebnie do zdjęć = duży plik\n\n✅ **Rozwiązanie:** \n- PNG - grafiki z tekstem, logo, przezroczyste tła\n- JPEG - zdjęcia, grafiki bez tekstu"
            },
            {
              id: "gs5-text-16",
              type: "text",
              content: "**❌ Błąd #12: Grafika źle przycięta**\n\nPodgląd na Instagramie przycina kwadrat ze środka. Jeśli ważne elementy są na brzegach - zostaną ucięte.\n\n✅ **Rozwiązanie:** Najważniejsze elementy umieszczaj w centrum. Sprawdź podgląd przed publikacją."
            },
            {
              id: "gs5-warning-1",
              type: "warning",
              content: "Instagram przycina zdjęcia do kwadratu w feedzie, ale w pełnym widoku pokazuje całość. Projektuj z myślą o podglądzie kafelkowym - najważniejsze treści w centrum!"
            },
            {
              id: "gs5-heading-5",
              type: "heading",
              content: "Checklist przed publikacją"
            },
            {
              id: "gs5-text-17",
              type: "text",
              content: "Zanim klikniesz \"Opublikuj\", sprawdź każdy punkt:"
            },
            {
              id: "gs5-text-18",
              type: "text",
              content: "**📱 Na telefonie:**\n□ Czy tekst jest czytelny bez powiększania?\n□ Czy kontrast jest wystarczający?\n□ Czy nic ważnego nie jest przy samej krawędzi?\n□ Czy grafika nie jest rozmazana?\n\n**📐 Kompozycja:**\n□ Czy jest jasna hierarchia (co najważniejsze)?\n□ Czy jedna grafika = jedna główna informacja?\n□ Czy elementy mają \"powietrze\" (marginesy)?"
            },
            {
              id: "gs5-text-19",
              type: "text",
              content: "**🎨 Kolory i fonty:**\n□ Czy używam maksymalnie 3-4 kolorów?\n□ Czy używam maksymalnie 2 fontów?\n□ Czy font ozdobny jest tylko w nagłówku?\n□ Czy kolory pasują do mojej marki?\n\n**✅ Finalnie:**\n□ Czy grafika wygląda jak część mojej marki?\n□ Czy przekazuje to, co chciałam przekazać?\n□ Czy chciałabym ją zobaczyć jako klientka?"
            },
            {
              id: "gs5-tip-1",
              type: "tip",
              content: "Wydrukuj tę checklistę i miej przy biurku. Po tygodniu weryfikacji wejdzie Ci to w nawyk i nie będziesz jej potrzebować."
            },
            {
              id: "gs5-quiz-2",
              type: "quiz",
              content: "Test praktyczny",
              quiz: {
                question: "Grafika promocyjna wygląda świetnie na komputerze, ale na telefonie tekst jest ledwo widoczny. Co robisz?",
                options: [
                  "Publikujesz - na komputerze wygląda dobrze",
                  "Powiększasz tekst i sprawdzasz ponownie na telefonie",
                  "Zmieniasz font na bardziej ozdobny",
                  "Dodajesz więcej kolorów, żeby tekst się wyróżnił"
                ],
                correctIndex: 1,
                explanation: "90% klientek ogląda Twoje posty na telefonie! Jeśli tekst jest nieczytelny na małym ekranie - nie zostanie przeczytany. Zawsze powiększ tekst i sprawdź na telefonie przed publikacją."
              }
            },
            {
              id: "gs5-heading-6",
              type: "heading",
              content: "Najgorsze błędy - absolutnie unikaj"
            },
            {
              id: "gs5-text-20",
              type: "text",
              content: "Te błędy niszczą profesjonalny wizerunek natychmiast:"
            },
            {
              id: "gs5-text-21",
              type: "text",
              content: "**🚫 Watermark ze stocka**\nUżywanie zdjęć z widocznym znakiem wodnym (np. Shutterstock) = sygnał \"nie stać mnie na oryginalne materiały\"\n\n**🚫 Błędy ortograficzne**\n\"Promocja\" zamiast \"Promocja\", literówki w nazwie usługi. Zawsze sprawdź dwukrotnie!\n\n**🚫 Nieaktualne informacje**\n\"Promocja do 31 marca\" opublikowana w kwietniu. Regularnie przeglądaj swoje posty."
            },
            {
              id: "gs5-text-22",
              type: "text",
              content: "**🚫 Rozciągnięte logo/zdjęcia**\nProporcje muszą być zachowane. Rozciągnięte elementy wyglądają amatorsko.\n\n**🚫 Cliparty i darmowe ikony niskiej jakości**\nPixelowe ikony z lat 2000. Lepiej nie używać ikon niż używać złych."
            },
            {
              id: "gs5-comparison-2",
              type: "comparison",
              content: "Profesjonalna vs amatorska grafika",
              comparison: {
                good: {
                  title: "Profesjonalna",
                  description: "Spójna, czytelna, z zachowaną hierarchią",
                  example: "2 fonty, 3 kolory, jasny przekaz, sprawdzona na telefonie, bez błędów"
                },
                bad: {
                  title: "Amatorska",
                  description: "Chaotyczna, nieczytelna, przeładowana",
                  example: "5 fontów, 7 kolorów, tekst przy krawędzi, błąd ortograficzny, rozmazane logo"
                }
              }
            },
            {
              id: "gs5-heading-7",
              type: "heading",
              content: "Podsumowanie kursu - co dalej"
            },
            {
              id: "gs5-text-23",
              type: "text",
              content: "Gratulacje! Ukończyłaś kurs \"Grafiki i szablony\". Teraz wiesz:\n\n✅ Kiedy używać grafik zamiast zdjęć\n✅ Jak budować spójność wizualną\n✅ Jak dobierać kolory i fonty\n✅ Jak efektywnie korzystać z szablonów\n✅ Jakich błędów unikać"
            },
            {
              id: "gs5-text-24",
              type: "text",
              content: "**Twoje następne kroki:**\n\n1. **Stwórz swój Brand Kit** - Zapisz kolory (kody HEX) i fonty\n2. **Przygotuj 5 podstawowych szablonów** - Promocja, cennik, ogłoszenie, story, highlight\n3. **Zrób audyt swojego profilu** - Znajdź błędy, które teraz rozpoznajesz\n4. **Praktykuj z checklistą** - Sprawdzaj każdą grafikę przed publikacją"
            },
            {
              id: "gs5-tip-2",
              type: "tip",
              content: "Nie próbuj wszystkiego naraz. Zacznij od jednej rzeczy - np. spójności kolorów. Gdy to opanujesz, przejdź do fontów. Mały krok co tydzień = wielka zmiana po miesiącu."
            },
            {
              id: "gs5-text-25",
              type: "text",
              content: "W Aurine znajdziesz wszystkie narzędzia potrzebne do tworzenia profesjonalnych grafik - Brand Kit, szablony dla beauty, generator grafik. Teraz wiesz, jak z nich korzystać!"
            }
          ],
          tasks: [],
          checklist: [
            { id: "gs5-check-1", text: "Znam błędy typograficzne i wiem jak ich unikać" },
            { id: "gs5-check-2", text: "Rozumiem błędy kolorystyczne" },
            { id: "gs5-check-3", text: "Wiem co to błędy kompozycyjne" },
            { id: "gs5-check-4", text: "Znam błędy techniczne (rozdzielczość, formaty)" },
            { id: "gs5-check-5", text: "Mam checklistę przed publikacją" },
            { id: "gs5-check-6", text: "Wiem jakich błędów absolutnie unikać" }
          ],
          keyTakeaways: [
            "2 fonty, 3-4 kolory, 1 główna informacja - to recepta na czystą grafikę",
            "Zawsze sprawdź czytelność na telefonie - 90% klientek tam Cię ogląda",
            "Hierarchia wizualna = co najważniejsze, to największe i najbardziej wyraziste",
            "Checklist przed publikacją chroni przed wpadkami - używaj jej!",
            "Małe kroki co tydzień = wielka zmiana po miesiącu. Nie próbuj wszystkiego naraz"
          ]
        }
      ]
    }
  ]
};
