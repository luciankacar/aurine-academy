import { Course } from "@/types/courses";

export const pozycjonowanieKomunikacjaCourse: Course = {
  id: "pozycjonowanie-komunikacja",
  title: "Pozycjonowanie i komunikacja salonu",
  description: "Naucz się jak wyróżnić swój salon na tle konkurencji i zbudować spójny wizerunek marki.",
  icon: "target",
  color: "purple",
  totalLessons: 5,
  estimatedHours: 3,
  modules: [
    {
      id: "pozycjonowanie-module-1",
      title: "Pozycjonowanie i komunikacja",
      description: "Zbuduj unikalny wizerunek swojego salonu",
      lessons: [
        {
          id: "specjalizacja-salonu",
          title: "Specjalizacja salonu",
          description: "Jak znaleźć i zakomunikować swoją niszę na rynku beauty.",
          estimatedMinutes: 15,
          intro: "Wyobraź sobie supermarket – tysiące produktów, wszystko na raz. A teraz wyobraź sobie butik z czekoladkami rzemieślniczymi. Gdzie zapłacisz więcej i będziesz szczęśliwsza z zakupu? Butik wygrywa, bo jest EKSPERTEM w jednej rzeczy. Twój salon może być takim butikiem – ale tylko jeśli znajdziesz swoją specjalizację.",
          sections: [
            {
              id: "spec-1",
              type: "heading",
              content: "Dlaczego specjalizacja zmienia wszystko?"
            },
            {
              id: "spec-2",
              type: "text",
              content: "W świecie beauty, gdzie na każdym osiedlu działa kilka salonów, próba bycia \"salonem od wszystkiego\" to prosta droga do bycia niezauważonym. Pomyśl o tym tak: gdy boli Cię serce, idziesz do kardiologa, nie do lekarza pierwszego kontaktu. Gdy szukasz najlepszego manicure hybrydowego, idziesz do salonu, który jest ZNANY z hybryd – nie do tego, który robi \"wszystko po trochu\". Klientki podświadomie szukają ekspertów. Salon specjalizujący się w przedłużaniu rzęs automatycznie wydaje się bardziej wiarygodny w tej dziedzinie niż salon, który oferuje 47 różnych usług. To psychologia – specjalizacja = ekspertyza = wyższe zaufanie = wyższe ceny, które klientki akceptują bez mrugnięcia okiem."
            },
            {
              id: "spec-3",
              type: "tip",
              content: "Lepiej być znaną jako \"królowa french manicure w Katowicach\" niż \"salon, który robi wszystko, ale nic wyjątkowo\". Specjalizacja to Twoja supermoc – nie ograniczenie!"
            },
            {
              id: "spec-4",
              type: "heading",
              content: "Jak znaleźć swoją specjalizację?"
            },
            {
              id: "spec-5",
              type: "text",
              content: "Znalezienie specjalizacji to nie wymyślanie czegoś na siłę – to odkrywanie tego, co już w Tobie jest. Odpowiedz szczerze: które usługi wykonujesz najczęściej? Na co klientki umawiają się z największym entuzjazmem? O co pytają Twoje koleżanki z branży? Często Twoja specjalizacja już istnieje – po prostu jej jeszcze nie nazwałaś. Może to stylizacje ślubne, bo uwielbiasz te emocje? Może minimalistyczne manicure, bo cenisz elegancję? Może paznokcie dla dziewczynek, bo masz cierpliwość anioła? Twoja pasja i naturalne talenty to mapa do specjalizacji."
            },
            {
              id: "spec-6",
              type: "step",
              stepNumber: 1,
              content: "Przeanalizuj swoje rezerwacje z ostatnich 3 miesięcy – które usługi dominują? Które mają najlepsze opinie? To są Twoi naturalni kandydaci na specjalizację."
            },
            {
              id: "spec-7",
              type: "step",
              stepNumber: 2,
              content: "Sprawdź konkurencję w promieniu 5 km – w czym się specjalizują? Może jest nisza, której NIKT nie obsługuje? Paznokcie dla alergiczek? Stylizacje dla seniorek?"
            },
            {
              id: "spec-8",
              type: "step",
              stepNumber: 3,
              content: "Zapytaj siebie: co Cię NAPRAWDĘ kręci w tej pracy? Co byś robiła za darmo z czystej radości? Autentyczna pasja jest magnetyczna – klientki to wyczuwają."
            },
            {
              id: "spec-quiz-1",
              type: "quiz",
              content: "Quiz: Która specjalizacja zadziała lepiej?",
              quiz: {
                question: "Ania prowadzi salon w centrum miasta. Którą specjalizację powinna wybrać?",
                options: [
                  "\"Pełen zakres usług kosmetycznych dla każdego\"",
                  "\"Ekspresowe stylizacje dla kobiet biznesu – manicure w 30 minut\"",
                  "\"Profesjonalne usługi paznokciowe\"",
                  "\"Wszystko, czego potrzebujesz w jednym miejscu\""
                ],
                correctIndex: 1,
                explanation: "Opcja B wygrywa, bo określa konkretną grupę (kobiety biznesu), konkretną korzyść (ekspresowa obsługa) i wyróżnik (30 minut). Kobieta biegnąca między spotkaniami od razu wie, że to salon dla NIEJ. Pozostałe opcje są tak ogólne, że nikogo nie przyciągają."
              }
            },
            {
              id: "spec-9",
              type: "comparison",
              content: "Porównanie podejść do specjalizacji",
              comparison: {
                good: {
                  title: "Jasna specjalizacja",
                  description: "\"Specjalizujemy się w naturalnych stylizacjach dla zabieganych mam – piękne paznokcie, które wytrzymają życie z dziećmi\"",
                  example: "Klientka: \"O! To salon dla MNIE! Rozumieją moje życie!\""
                },
                bad: {
                  title: "Brak specjalizacji",
                  description: "\"Oferujemy pełen zakres usług kosmetycznych dla każdego klienta\"",
                  example: "Klientka: \"Brzmi jak każdy inny salon... scrolluję dalej\""
                }
              }
            },
            {
              id: "spec-10",
              type: "mockup",
              content: "Post pokazujący specjalizację w akcji:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "Kolejna mężna mama wychodzi ze studia! 💪\n\nTe paznokcie przetrwają:\n✅ Zmianę 47 pieluch\n✅ Budowanie zamku z klocków\n✅ Wojnę z plasteliną\n✅ Nocne karmienie o 3 w nocy\n\nBo tu wiemy, że Twoje życie to nie sesja zdjęciowa – a paznokcie muszą nadążyć za Tobą! 💅\n\n#stylizacjedlamam #paznokciemamy #mamanieztraci",
                postLikes: "32",
                postComments: "7",
                postImage: "nails",
                description: "Ten post jasno mówi: 'To salon dla mam'. Każda mama czyta i myśli 'Oni mnie ROZUMIEJĄ!'"
              }
            },
            {
              id: "spec-11",
              type: "warning",
              content: "Specjalizacja NIE oznacza rezygnacji z innych usług! Nadal możesz oferować pełne spektrum – ale w komunikacji pokazujesz się jako ekspert w wybranej dziedzinie. To jak restauracja włoska, która ma też sałatki – ale reklamuje się jako \"najlepsza pizza w mieście\"."
            },
            {
              id: "spec-12",
              type: "example",
              content: "Przykłady specjalizacji, które działają:\n\n• \"Paznokcie dla pielęgniarek\" – rozumiesz ich dresscode i ograniczenia\n• \"Stylizacje ślubne i okolicznościowe\" – emocje, perfekcja, wielki dzień\n• \"Minimalistyczny manicure dla eleganckich kobiet\" – mniej znaczy więcej\n• \"Zdobienia artystyczne i hand-made\" – dla odważnych indywidualistek\n• \"Ekspresowe stylizacje w 25 minut\" – dla zabieganych"
            }
          ],
          tasks: [
            {
              id: "spec-task-1",
              title: "Analiza usług",
              description: "Wypisz 3 usługi, które wykonujesz najczęściej i mają najlepsze opinie od klientek"
            },
            {
              id: "spec-task-2",
              title: "Badanie konkurencji",
              description: "Sprawdź profile 3 najbliższych salonów – w czym się specjalizują? Gdzie jest LUKA, którą możesz wypełnić?"
            },
            {
              id: "spec-task-3",
              title: "Hasło specjalizacji",
              description: "Napisz jedno zdanie: \"Specjalizuję się w [usłudze] dla [grupy klientek], które [korzyść]\""
            }
          ],
          checklist: [
            { id: "spec-check-1", text: "Zidentyfikowałam swoją główną specjalizację" },
            { id: "spec-check-2", text: "Wiem, czym wyróżniam się od najbliższej konkurencji" },
            { id: "spec-check-3", text: "Mam gotowe hasło specjalizacji do wykorzystania w bio i postach" },
            { id: "spec-check-4", text: "Rozumiem, że specjalizacja to ekspertyza, nie ograniczenie oferty" }
          ],
          keyTakeaways: [
            "Specjalizacja = bycie ekspertem, nie rezygnacja z innych usług",
            "Klientki szukają najlepszych – nie 'przeciętnych od wszystkiego'",
            "Twoja pasja i naturalne talenty to mapa do specjalizacji",
            "Konkretna grupa + konkretna korzyść = rozpoznawalność"
          ],
          nextLessonTitle: "Komunikowanie usług"
        },
        {
          id: "komunikowanie-uslug",
          title: "Komunikowanie usług",
          description: "Jak opisywać usługi, żeby klientki chciały je kupić.",
          estimatedMinutes: 20,
          intro: "Czy kiedykolwiek kupiłaś coś, bo opis produktu sprawił, że POCZUŁAŚ, jak to zmieni Twoje życie? Apple nie sprzedaje 'telefonów z aparatem 48 MP' – sprzedaje 'chwytanie wspomnień w oszałamiającej jakości'. Twoje usługi też mogą wywoływać emocje – ale większość salonów opisuje je tak nudno, że klientki scrollują dalej.",
          sections: [
            {
              id: "kom-1",
              type: "heading",
              content: "Cechy vs korzyści – fundamentalna różnica"
            },
            {
              id: "kom-2",
              type: "text",
              content: "To jest NAJWAŻNIEJSZA lekcja o komunikacji, jaką kiedykolwiek przeczytasz. Większość salonów opisuje CECHY usług – co robimy, jakiego sprzętu używamy, ile to trwa. Ale klientki nie kupują cech. Klientki kupują KORZYŚCI – co z tego MAJĄ. Pomyśl: wiertarka to cecha, dziura w ścianie to korzyść. Lakier hybrydowy to cecha, 3 tygodnie bez odpryskiwań to korzyść. Masaż stóp to cecha, uczucie chodzenia na chmurach po długim dniu to korzyść. Każda usługa ma ukrytą korzyść – Twoim zadaniem jest ją odkryć i nazwać tak, że klientka powie: 'O tak! Właśnie tego potrzebuję!'"
            },
            {
              id: "kom-3",
              type: "comparison",
              content: "Jak pisać o usługach",
              comparison: {
                good: {
                  title: "Korzyść dla klientki",
                  description: "\"Paznokcie, które wytrzymają 3 tygodnie bez odpryskiwań – nawet przy codziennym gotowaniu, zmywaniu i życiu na pełnych obrotach\"",
                  example: "Klientka myśli: \"TAK! Ciągle mam odpryski w tydzień – to jest rozwiązanie MOJEGO problemu!\""
                },
                bad: {
                  title: "Tylko cechy",
                  description: "\"Manicure hybrydowy z użyciem lakierów premium marki XYZ i lamp LED nowej generacji\"",
                  example: "Klientka myśli: \"Fajnie... ale co z tego? Każdy salon ma 'premium' lakiery...\""
                }
              }
            },
            {
              id: "kom-4",
              type: "tip",
              content: "Magiczna formuła: \"[Usługa], dzięki której [korzyść] – nawet jeśli [typowy problem klientki]\"\n\nPrzykład: \"Przedłużanie rzęs, dzięki któremu budzisz się gotowa na podbój świata – nawet jeśli masz 5 minut na makijaż rano.\""
            },
            {
              id: "kom-5",
              type: "heading",
              content: "Język emocji – bo klientki kupują uczucia"
            },
            {
              id: "kom-6",
              type: "text",
              content: "Klientki nie kupują usług – kupują emocje i transformacje. 'Piękne paznokcie' to za mało. 'Pewność siebie na ważnym spotkaniu' – to sprzedaje. 'Pedicure' brzmi zwyczajnie. 'Uczucie świeżości i lekkości po ciężkim tygodniu' – to budzi pragnienie. Każda usługa niesie ze sobą emocję: relaks, pewność siebie, luksus, radość, ulga. Znajdź tę emocję i nazwij ją wprost. Klientka czytając opis powinna POCZUĆ, jak będzie się czuła po wizycie."
            },
            {
              id: "kom-quiz-1",
              type: "quiz",
              content: "Quiz: Który opis sprzeda więcej?",
              quiz: {
                question: "Który opis pedicure skłoni więcej klientek do rezerwacji?",
                options: [
                  "\"Pedicure spa z użyciem profesjonalnych kosmetyków i narzędzi\"",
                  "\"Stopy jak z reklamy – gładkie, zadbane i gotowe na sandałki\"",
                  "\"Pedicure klasyczny – 60 minut, cena 120 zł\"",
                  "\"Oferujemy pedicure hybrydowy i klasyczny\""
                ],
                correctIndex: 1,
                explanation: "Opcja B maluje obraz końcowego efektu – klientka WIDZI swoje stopy w sandałkach, CZUJE satysfakcję. Pozostałe opcje to suche fakty, które nie wywołują żadnych emocji ani pragnień."
              }
            },
            {
              id: "kom-mockup",
              type: "mockup",
              content: "Post sprzedający emocje, nie tylko usługę:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "Gotowa na ważne spotkanie? 💼✨\n\nTe paznokcie to pewność siebie zamknięta w 10 palcach.\n\nKiedy Ania weszła do sali konferencyjnej, wszyscy zauważyli jej prezentację. Ale ona wiedziała, że jej dłonie wyglądają perfekcyjnie – i to dodawało jej skrzydeł.\n\nCzego TY potrzebujesz, żeby poczuć się niepokonana?\n\n👇 Napisz w komentarzu!",
                postLikes: "35",
                postComments: "6",
                postImage: "nails",
                description: "Emocje (pewność siebie, profesjonalizm) + historia + pytanie angażujące = post, który sprzedaje BEZ sprzedawania"
              }
            },
            {
              id: "kom-7",
              type: "heading",
              content: "Transformacja – pokaż zmianę"
            },
            {
              id: "kom-8",
              type: "text",
              content: "Najsilniejszy przekaz marketingowy to transformacja: PRZED → PO. Nie chodzi tylko o zdjęcia – chodzi o całą historię zmiany. Przed wizytą: zmęczona, zaniedbane paznokcie, brak czasu dla siebie. Po wizycie: odświeżona, pewna siebie, gotowa na świat. To może być transformacja fizyczna (paznokcie, rzęsy, skóra) lub emocjonalna (stres → relaks, niepewność → pewność siebie). Im bardziej dramatyczna transformacja, którą obiecujesz, tym większe pragnienie rezerwacji."
            },
            {
              id: "kom-9",
              type: "example",
              content: "Transformacje, które sprzedają:\n\n❌ \"Oferujemy pedicure spa\"\n✅ \"Wyjdź od nas z lekkimi, odprężonymi stopami – gotowa na lato w sandałkach\"\n\n❌ \"Przedłużanie rzęs metodą 1:1\"\n✅ \"Budzisz się rano i już wyglądasz świetnie – bez minuty przy lusterku\"\n\n❌ \"Manicure hybrydowy\"\n✅ \"3 tygodnie bez myślenia o paznokciach – wytrzymają wszystko, co Ci życie rzuci\""
            },
            {
              id: "kom-10",
              type: "warning",
              content: "Unikaj żargonu branżowego. 'Keratyna', 'kwas hialuronowy', 'bonder', 'primer' – to nic nie mówi większości klientek. Pisz prostym językiem o EFEKTACH: 'mocniejsze paznokcie', 'dłuższe trzymanie', 'gładsza skóra'. Klientka ma poczuć efekt, nie zdawać egzaminu z chemii."
            },
            {
              id: "kom-11",
              type: "quiz",
              content: "Quiz: Znajdź ukrytą korzyść",
              quiz: {
                question: "Salon oferuje 'stylizację paznokci z diamentowym pyłem'. Jaka jest prawdziwa korzyść dla klientki?",
                options: [
                  "Diamentowy pył jest drogi, więc to luksusowa usługa",
                  "Paznokcie lśnią jak biżuteria – czujesz się wyjątkowo na każdej imprezie",
                  "Diament to najtwardszy minerał, więc paznokcie są mocniejsze",
                  "Profesjonalne składniki wysokiej jakości"
                ],
                correctIndex: 1,
                explanation: "Klientka nie kupuje diamentowego pyłu – kupuje uczucie bycia wyjątkową, luksus, podziw innych. To jest prawdziwa korzyść emocjonalna, która napędza decyzje."
              }
            }
          ],
          tasks: [
            {
              id: "kom-task-1",
              title: "Przepisz opis usługi",
              description: "Weź swoją najpopularniejszą usługę i przepisz jej opis według formuły: korzyść + emocja + transformacja"
            },
            {
              id: "kom-task-2",
              title: "Lista emocji",
              description: "Wypisz 5 emocji, które klientki mogą czuć PO wizycie u Ciebie (pewność siebie, relaks, luksus...)"
            },
            {
              id: "kom-task-3",
              title: "Usuń żargon",
              description: "Przejrzyj opisy swoich usług i zastąp każdy termin branżowy prostym językiem korzyści"
            }
          ],
          checklist: [
            { id: "kom-check-1", text: "Rozumiem różnicę między cechą a korzyścią" },
            { id: "kom-check-2", text: "Przepisałam opisy min. 3 usług na język korzyści" },
            { id: "kom-check-3", text: "Wiem, jakie emocje chcę wywoływać u klientek" },
            { id: "kom-check-4", text: "Usunęłam żargon branżowy z moich opisów" }
          ],
          keyTakeaways: [
            "Korzyść > cecha – pisz, co klientka Z TEGO MA",
            "Emocje sprzedają – pewność siebie, relaks, luksus, radość",
            "Transformacja PRZED → PO to najsilniejszy przekaz",
            "Prosty język bez żargonu = więcej rezerwacji"
          ],
          nextLessonTitle: "Ton i styl komunikacji"
        },
        {
          id: "ton-styl-komunikacji",
          title: "Ton i styl komunikacji",
          description: "Jak mówić do klientek – formalnie czy po koleżeńsku?",
          estimatedMinutes: 15,
          intro: "Wyobraź sobie dwie przyjaciółki. Ania mówi 'Dzień dobry, czy mogłabym prosić o kawę?'. Kasia mówi 'Hej, skoczymy na kawkę?'. Obie zapraszają na kawę, ale CZUJESZ różnicę? Ton komunikacji to osobowość Twojego salonu – i musi być tak autentyczny jak Ty.",
          sections: [
            {
              id: "ton-1",
              type: "heading",
              content: "Ton = osobowość Twojej marki"
            },
            {
              id: "ton-2",
              type: "text",
              content: "Sposób, w jaki piszesz posty, odpowiadasz na wiadomości i opisujesz usługi, buduje wizerunek salonu. To jak głos Twojej marki – klientka czytając Twój post powinna USŁYSZEĆ Cię w głowie. Czy jesteś ciepłą przyjaciółką, która zawsze wysłucha? Elegancką profesjonalistką, która wie wszystko o urodzie? Energiczną optymistką, która dodaje skrzydeł? Zanim zaczniesz pisać, musisz wiedzieć, KIM jest Twoja marka jako osoba. Bo niespójność tonu to jak osoba z podwójną osobowością – nikomu nie da się zaufać."
            },
            {
              id: "ton-3",
              type: "heading",
              content: "Spektrum tonów – znajdź swój"
            },
            {
              id: "ton-4",
              type: "text",
              content: "Nie ma jednego 'dobrego' tonu – jest ton PASUJĄCY do Ciebie i Twoich klientek. Na jednym końcu spektrum masz formalny styl: 'Zapraszamy Państwa na zabiegi pielęgnacyjne w przyjaznej atmosferze'. Na drugim – swobodny, prawie koleżeński: 'Hej dziewczyny! Kto chce dziś piękne pazurki? 💅'. A pośrodku mnóstwo wariantów: ciepły i profesjonalny, przyjazny ale ekspertki, zabawny ale wiarygodny. Kluczowe pytanie: jak rozmawiasz z klientkami na żywo? Jeśli na fotelu mówisz 'per Ty' i śmiejecie się razem – niech tak będzie też online!"
            },
            {
              id: "ton-quiz-1",
              type: "quiz",
              content: "Quiz: Który ton pasuje do którego salonu?",
              quiz: {
                question: "Marta prowadzi kameralny salon w małym mieście. Jej klientki to głównie kobiety 40-60 lat, które przychodzą od lat. Który ton będzie najlepszy?",
                options: [
                  "\"Hej laski! 💖 Nowe wzorki czekają, kto pierwszy ten lepszy!\"",
                  "\"Szanowne Panie, zapraszamy na zabiegi w naszym gabinecie\"",
                  "\"Cześć Kochane! Mamy coś wyjątkowego dla stałych bywalczyń 💕\"",
                  "\"Oferujemy profesjonalne usługi kosmetyczne najwyższej jakości\""
                ],
                correctIndex: 2,
                explanation: "Opcja C łączy ciepłość ('Kochane') z szacunkiem dla relacji ('stałe bywalczynie'). Jest osobista, ale nie infantylna. 'Hej laski' brzmi zbyt młodzieżowo, formy 'Szanowne Panie' są zbyt chłodne dla kameralnego salonu."
              }
            },
            {
              id: "ton-5",
              type: "tip",
              content: "Prosty test: Przeczytaj swój post na głos. Czy brzmi jak TY? Czy brzmi tak, jakbyś mówiła do klientki przy fotelu? Jeśli nie – przepisz!"
            },
            {
              id: "ton-6",
              type: "heading",
              content: "Spójność – klucz do zaufania"
            },
            {
              id: "ton-7",
              type: "text",
              content: "Wyobraź sobie, że Twoja znajoma raz mówi do Ciebie per 'Pani', a raz per 'kochanie'. Dziwne, prawda? Tak samo klientki czują się zdezorientowane, gdy Twoja komunikacja jest chaotyczna. Spójność oznacza: ten sam ton w postach, stories, odpowiedziach na komentarze, wiadomościach prywatnych, a nawet SMS-ach przypominających o wizycie. To nie jest nudne – to jest PROFESJONALNE. Klientka wie, czego się spodziewać, i to buduje zaufanie."
            },
            {
              id: "ton-8",
              type: "comparison",
              content: "Spójność vs chaos",
              comparison: {
                good: {
                  title: "Spójny ton",
                  description: "Wszystkie posty, stories, odpowiedzi i wiadomości mają ten sam styl – ciepły i profesjonalny. Klientka rozpoznaje Twój głos od pierwszego słowa.",
                  example: "Klientka myśli: 'Ten salon to jak dobra przyjaciółka – wiem, czego się spodziewać'"
                },
                bad: {
                  title: "Chaotyczny ton",
                  description: "Post formalny, story z emoji i slangiem, odpowiedź sztywna jak urzędnik. Klientka nie wie, z kim ma do czynienia.",
                  example: "Klientka myśli: 'To jakby kilka różnych osób prowadziło ten profil... dziwne'"
                }
              }
            },
            {
              id: "ton-9",
              type: "heading",
              content: "Stwórz 'słowniczek marki'"
            },
            {
              id: "ton-10",
              type: "text",
              content: "Najlepsze marki mają spisane zasady komunikacji – i Ty też możesz to zrobić! Słowniczek marki to lista zwrotów, których UŻYWASZ i których UNIKASZ. Dzięki temu, nawet gdy masz gorszy dzień, Twoja komunikacja zostaje spójna. To szczególnie ważne, jeśli ktoś pomaga Ci z social media – każdy musi znać 'głos' Twojego salonu."
            },
            {
              id: "ton-mockup",
              type: "mockup",
              content: "Przykład spójnego tonu – ten sam styl w różnych formatach:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "text",
                description: "Post: 'Cześć Piękna! Mamy dla Ciebie nowość – musisz to zobaczyć!'\nStory: 'Hej! Widziałaś już? 😍'\nOdpowiedź na komentarz: 'Dziękuję Kochana! Zapraszam na wizytę 💕'\n\nTen sam ciepły ton – klientka rozpoznaje Twój głos w każdym formacie."
              }
            },
            {
              id: "ton-11",
              type: "example",
              content: "Przykład słowniczka marki:\n\n✅ UŻYWAM:\n• 'Cześć Piękna!' / 'Hej Kochana!'\n• 'Zapraszam' zamiast 'Zapraszamy'\n• Emoji: 💕 💅 ✨ (ciepłe, kobiece)\n• 'Dziękuję za zaufanie!'\n\n❌ UNIKAM:\n• 'Szanowna Pani' (zbyt formalne)\n• 'promo' / 'promocja' (wolę 'coś wyjątkowego dla Ciebie')\n• 'Polecamy' (wolę 'Pokochasz!')\n• Słowa: 'tani', 'najtańszy', 'budżetowy'"
            },
            {
              id: "ton-12",
              type: "warning",
              content: "Unikaj kopiowania tonu innych salonów. To, co działa u influencerki z Warszawy z 500k followersów, może kompletnie nie pasować do Twojego kameralnego salonu w małym mieście. Bądź sobą – autentyczność przyciąga."
            },
            {
              id: "ton-quiz-2",
              type: "quiz",
              content: "Quiz: Rozpoznaj problem",
              quiz: {
                question: "Salon publikuje post: 'Szanowni Państwo, zapraszamy na manicure!', a w stories pisze: 'Hej laski, lecim z pazurkami! 💖🔥'. Co jest nie tak?",
                options: [
                  "Oba tonu są złe – powinny być bardziej profesjonalne",
                  "Post jest za sztywny – powinien być bardziej swobodny",
                  "Brak spójności – to brzmi jak dwa różne salony",
                  "Stories są zbyt nieformalne dla branży beauty"
                ],
                correctIndex: 2,
                explanation: "Problem to brak spójności. Klientka widząc te dwa różne style zastanawia się, z kim ma do czynienia. Rozwiązanie: wybrać JEDEN ton i trzymać się go wszędzie."
              }
            }
          ],
          tasks: [
            {
              id: "ton-task-1",
              title: "Określ swój ton",
              description: "Wybierz 3 przymiotniki opisujące ton Twojej komunikacji (np. ciepły, profesjonalny, zabawny, elegancki)"
            },
            {
              id: "ton-task-2",
              title: "Stwórz słowniczek marki",
              description: "Napisz listę: 5 zwrotów, których UŻYWASZ i 5 zwrotów, których UNIKASZ w komunikacji"
            },
            {
              id: "ton-task-3",
              title: "Audyt spójności",
              description: "Przejrzyj swoje ostatnie 5 postów i 5 stories – czy mają spójny ton?"
            }
          ],
          checklist: [
            { id: "ton-check-1", text: "Zdefiniowałam ton komunikacji mojego salonu (3 przymiotniki)" },
            { id: "ton-check-2", text: "Mam spisany słowniczek marki (używam/unikam)" },
            { id: "ton-check-3", text: "Sprawdziłam, czy mój ton pasuje do moich klientek" },
            { id: "ton-check-4", text: "Moja komunikacja jest spójna we wszystkich kanałach" }
          ],
          keyTakeaways: [
            "Ton = osobowość marki – wybierz świadomie i bądź sobą",
            "Spójność buduje zaufanie – wszędzie ten sam głos",
            "Słowniczek marki pomaga zachować spójność",
            "Test: przeczytaj post na głos – czy brzmi jak TY?"
          ],
          nextLessonTitle: "Spójność wizualna profilu"
        },
        {
          id: "spojnosc-wizualna",
          title: "Spójność wizualna profilu",
          description: "Jak stworzyć rozpoznawalny styl wizualny na Instagramie.",
          estimatedMinutes: 20,
          intro: "Wyobraź sobie, że wchodzisz do dwóch sklepów. Pierwszy: wszystko poukładane kolorami, piękne wystawy, przyjemna muzyka. Drugi: chaos, produkty wszędzie, niepasujące kolory. W którym zostajesz dłużej? Twój profil na Instagramie to Twoja witryna sklepowa – i pierwsze 3 sekundy decydują, czy klientka zostanie.",
          sections: [
            {
              id: "wiz-1",
              type: "heading",
              content: "Pierwsze wrażenie to feed"
            },
            {
              id: "wiz-2",
              type: "text",
              content: "Gdy ktoś wchodzi na Twój profil, widzi siatkę zdjęć – ostatnich 9, 12, 15 postów. W ułamku sekundy podświadomie ocenia: 'Czy to PROFESJONALNY salon? Czy tu chcę iść?' Chaotyczny feed z różnymi filtrami, stylami i kolorami = brak zaufania. Spójny feed z rozpoznawalną estetyką = 'wow, to wygląda profesjonalnie! Chcę tam iść!'. To nie jest kwestia bycia perfekcjonistą – to kwestia pierwszego wrażenia, które budujesz. A pierwsze wrażenie zrobisz tylko raz."
            },
            {
              id: "wiz-3",
              type: "mockup",
              content: "Feed jako całość – co widzi klientka wchodząc na Twój profil:",
              mockupData: {
                platform: "instagram",
                variant: "profile",
                bio: "✨ Stylizacje paznokci z pasją\n📍 Kraków, Kazimierz\n📱 Rezerwacje: link w bio",
                followers: "2,847",
                following: "412",
                posts: "189",
                description: "Spójny feed to jak witryna sklepowa – klientka od razu widzi Twój styl i poziom. Chaos w feedzie = 'może jednak poszukam innego salonu'."
              }
            },
            {
              id: "wiz-4",
              type: "heading",
              content: "Trzy filary spójności wizualnej"
            },
            {
              id: "wiz-5",
              type: "step",
              stepNumber: 1,
              content: "PALETA KOLORÓW – wybierz 3-4 kolory i trzymaj się ich jak klej. Mogą to być kolory Twojego logo, wnętrza salonu, lub po prostu kolory, które kochasz. Te kolory powinny dominować w tle zdjęć, grafikach, a nawet... lakierach, które pokazujesz! 🎨"
            },
            {
              id: "wiz-6",
              type: "step",
              stepNumber: 2,
              content: "STYL ZDJĘĆ – jasne i świetliste? Ciemne i eleganckie? Kolorowe i energetyczne? Ciepłe czy zimne tony? Wybierz JEDEN kierunek. Nie mieszaj zdjęć ciepłych (żółte światło) z zimnymi (niebieskawe). To najbardziej widoczny błąd spójności."
            },
            {
              id: "wiz-7",
              type: "step",
              stepNumber: 3,
              content: "TŁO ZDJĘĆ – używaj podobnych teł. Jeśli robisz zdjęcia paznokci na marmurze – niech to będzie Twój znak rozpoznawczy. Białe tło? Drewno? Puste kartki? Wybierz 2-3 tła i rotuj między nimi. Każde inne zdjęcie na innym tle = wizualny chaos."
            },
            {
              id: "wiz-8",
              type: "tip",
              content: "Najprostszy sposób na spójność: użyj TEGO SAMEGO filtra lub presetu do WSZYSTKICH zdjęć. Lightroom i VSCO mają darmowe presety, które natychmiast ujednolicą Twój feed. To dosłownie jednym kliknięciem robi różnicę."
            },
            {
              id: "wiz-quiz-1",
              type: "quiz",
              content: "Quiz: Zidentyfikuj problem",
              quiz: {
                question: "Kasia przegląda swoich ostatnich 9 postów: 3 zdjęcia ciepłe (żółte światło), 3 zimne (niebieskawe), 3 z różnymi filtrami. Co powinna zrobić?",
                options: [
                  "Usunąć wszystkie posty i zacząć od nowa",
                  "Nic – różnorodność jest ważna",
                  "Wybrać jeden styl (ciepły LUB zimny) i stosować go od teraz",
                  "Dodać więcej filtrów, żeby było ciekawiej"
                ],
                correctIndex: 2,
                explanation: "Nie trzeba usuwać starych postów – ale od TERAZ Kasia powinna wybrać jeden kierunek i konsekwentnie go trzymać. W ciągu kilku tygodni stare posty 'zejdą' w dół i feed zacznie wyglądać spójnie."
              }
            },
            {
              id: "wiz-9",
              type: "comparison",
              content: "Feed salonu – dwa scenariusze",
              comparison: {
                good: {
                  title: "Spójny feed",
                  description: "Jednolita kolorystyka (biele + róże), podobne tła (marmur), ten sam filtr, rozpoznawalny styl. Klientka od razu wie, że to TEN salon.",
                  example: "Klientka: 'Nawet nie muszę patrzeć na nazwę – rozpoznaję te zdjęcia od razu!'"
                },
                bad: {
                  title: "Chaotyczny feed",
                  description: "Każde zdjęcie inne: raz ciemne, raz jasne, różne filtry, losowe tła (stolik, łóżko, ulica, biurko).",
                  example: "Klientka: 'Czy to profesjonalny salon czy ktoś robi paznokcie w domu między gotowaniem?'"
                }
              }
            },
            {
              id: "wiz-10",
              type: "heading",
              content: "Planowanie feeda – myśl o całości"
            },
            {
              id: "wiz-11",
              type: "text",
              content: "Profesjonalne profile nie publikują losowo – PLANUJĄ feed z wyprzedzeniem. Zanim wrzucisz post, spójrz jak będzie wyglądał obok poprzednich. Czy pasuje kolorystycznie? Czy nie ma dwóch niemal identycznych zdjęć obok siebie? Niektóre salony używają wzoru: zdjęcie pracy → grafika z tekstem → zdjęcie klientki → powtórz. Inne rotują kolory: różowy post → biały → różowy → biały. Znajdź SWÓJ rytm."
            },
            {
              id: "wiz-12",
              type: "example",
              content: "Proste narzędzia do planowania feeda:\n\n• Preview (apka) – ułóż posty zanim opublikujesz\n• Later – zaplanuj posty z podglądem grida\n• Canva – twórz grafiki w spójnej kolorystyce\n• Lightroom Mobile – darmowe presety do zdjęć\n\nNawet 15 minut planowania raz w tygodniu robi OGROMNĄ różnicę w spójności feeda."
            },
            {
              id: "wiz-13",
              type: "warning",
              content: "Spójność ≠ nuda. Możesz mieć różnorodne TREŚCI (porady, zdjęcia prac, kulisy, humor) – ale wszystkie utrzymane w tym samym stylu wizualnym. To jak album muzyczny – różne piosenki, ale słychać, że to ten sam artysta."
            },
            {
              id: "wiz-14",
              type: "quiz",
              content: "Quiz: Idealna paleta kolorów",
              quiz: {
                question: "Jola prowadzi elegancki salon w centrum miasta. Jej wnętrze to biele, złoto i pudrowy róż. Jaką paletę kolorów powinna wybrać na Instagram?",
                options: [
                  "Tęczę kolorów – każdy post w innym kolorze, żeby było wesoło",
                  "Biel + złoto + pudrowy róż – spójność z wnętrzem",
                  "Czarno-białe zdjęcia – elegancja ponad wszystko",
                  "Jaskrawe kolory – żeby wyróżnić się w feedzie klientek"
                ],
                correctIndex: 1,
                explanation: "Paleta spójna z wnętrzem salonu to strzał w dziesiątkę! Klientka widząca feed już 'czuje' atmosferę salonu przed wizytą. To buduje oczekiwanie i zaufanie."
              }
            }
          ],
          tasks: [
            {
              id: "wiz-task-1",
              title: "Wybierz paletę kolorów",
              description: "Zdefiniuj 3-4 kolory, które będą bazą Twojego profilu (możesz użyć kolorów z logo lub wnętrza)"
            },
            {
              id: "wiz-task-2",
              title: "Audyt feeda",
              description: "Przejrzyj swoich ostatnich 9 postów – czy są spójne wizualnie? Co wymaga poprawy?"
            },
            {
              id: "wiz-task-3",
              title: "Wybierz preset/filtr",
              description: "Znajdź jeden filtr lub preset, którego będziesz używać do wszystkich zdjęć"
            },
            {
              id: "wiz-task-4",
              title: "Zdefiniuj tła",
              description: "Wybierz 2-3 tła, na których będziesz robić zdjęcia prac (marmur, drewno, biel...)"
            }
          ],
          checklist: [
            { id: "wiz-check-1", text: "Mam wybraną paletę 3-4 kolorów dla profilu" },
            { id: "wiz-check-2", text: "Określiłam styl zdjęć (jasne/ciemne, ciepłe/zimne)" },
            { id: "wiz-check-3", text: "Mam wybrany preset/filtr do wszystkich zdjęć" },
            { id: "wiz-check-4", text: "Wiem, jakie 2-3 tła będę używać do zdjęć prac" },
            { id: "wiz-check-5", text: "Znam narzędzia do planowania feeda" }
          ],
          keyTakeaways: [
            "Feed to Twoja wizytówka – pierwsze 3 sekundy decydują",
            "3-4 kolory + jeden styl zdjęć + stałe tła = rozpoznawalność",
            "Ten sam filtr do wszystkich zdjęć to najprostszy trik",
            "Planuj feed z wyprzedzeniem – myśl o całości, nie tylko o pojedynczym poście"
          ],
          nextLessonTitle: "Czego nie komunikować"
        },
        {
          id: "czego-nie-komunikowac",
          title: "Czego nie komunikować",
          description: "Błędy w komunikacji, które odstraszają klientki.",
          estimatedMinutes: 15,
          intro: "Wyobraź sobie, że idziesz do fryzjera i słyszysz, jak właścicielka narzeka do koleżanki: 'Ta poprzednia klientka była niemożliwa, ciągle się czepiała!'. Jak się czujesz? Dokładnie. To samo dzieje się, gdy Twój profil online jest pełen rzeczy, które ODSTRASZAJĄ zamiast przyciągać.",
          sections: [
            {
              id: "nie-1",
              type: "heading",
              content: "Błędy, które kosztują klientki"
            },
            {
              id: "nie-2",
              type: "text",
              content: "Niektóre rzeczy lepiej zachować dla siebie. Nawet niewinne posty mogą sprawić, że klientka pomyśli 'hmm, może jednak poszukam innego salonu'. Problem? Większość właścicielek salonów nawet nie zdaje sobie sprawy, że ich komunikacja odstrasza. Bo to są subtelne rzeczy – ton narzekania, desperacji, nieprofesjonalizmu – które klientki WYCZUWAJĄ, nawet jeśli nie potrafią tego nazwać. Przejdźmy przez największe pułapki."
            },
            {
              id: "nie-3",
              type: "warning",
              content: "NIGDY nie narzekaj publicznie na klientki – nawet anonimowo, nawet 'ogólnie'. \"Znowu ktoś nie przyszedł na wizytę 😤\" – brzmi jak oskarżenie WSZYSTKICH klientek. Ta jedna, która czyta, myśli: 'A co jeśli ja kiedyś muszę odwołać? Będzie o mnie tak pisać?'"
            },
            {
              id: "nie-4",
              type: "heading",
              content: "Czego unikać – konkretna lista"
            },
            {
              id: "nie-5",
              type: "step",
              stepNumber: 1,
              content: "DESPERACJA o klientki – 'Mam wolne terminy! Dzwońcie!!! 📞📞📞' wygląda rozpaczliwie. Klientka myśli: 'Skoro nikt tam nie chodzi, to może jest powód?'. Zamiast tego: 'Ostatnie 2 miejsca w tym tygodniu dla szczęściar! 💕'"
            },
            {
              id: "nie-6",
              type: "step",
              stepNumber: 2,
              content: "PRYWATNE PROBLEMY – klientki chcą widzieć profesjonalistkę, nie Twoje drama z mężem, kłopoty finansowe, czy złe dni. Stories o bólu głowy, kłótni z sąsiadką, zepsutym samochodzie – to nie buduje relacji, to obniża Twój profesjonalizm."
            },
            {
              id: "nie-7",
              type: "step",
              stepNumber: 3,
              content: "KRYTYKA KONKURENCJI – 'W innych salonach robią to źle, u nas dobrze' brzmi małostkowo. Zamiast mówić co inni robią źle, pokaż co TY robisz ŚWIETNIE. Pozytywny przekaz wygrywa zawsze."
            },
            {
              id: "nie-8",
              type: "step",
              stepNumber: 4,
              content: "USPRAWIEDLIWIANIE SIĘ – 'Przepraszam za słabe zdjęcie, nie miałam czasu' lub 'Wiem, że post nie jest idealny, ale...' – po prostu NIE publikuj słabych treści! Każde usprawiedliwienie obniża Twój profesjonalizm."
            },
            {
              id: "nie-9",
              type: "step",
              stepNumber: 5,
              content: "ZBYT DUŻO O SOBIE – owszem, klientki chcą Cię poznać. Ale jeśli 80% treści to Twoje selfie z kawą, Twój kot i Twoje przemyślenia o życiu – to profil osobisty, nie biznesowy. Proporcja: max 20% 'o mnie', 80% wartość dla klientki."
            },
            {
              id: "nie-quiz-1",
              type: "quiz",
              content: "Quiz: Znajdź błąd",
              quiz: {
                question: "Ania publikuje story: 'Dziewczyny, macie może wolne terminy w tym tygodniu? Bo u mnie pusto jak nigdy 😅🙈 Dzwońcie, proszę!!!'. Co jest nie tak?",
                options: [
                  "Zbyt dużo emoji",
                  "Powinna pisać w bardziej formalnym tonie",
                  "Brzmi desperacko – klientki wyczuwają, że coś jest nie tak",
                  "Powinna podać konkretne godziny zamiast 'wolne terminy'"
                ],
                correctIndex: 2,
                explanation: "Desperacja jest ODPYCHAJĄCA. Klientka myśli: 'Skoro u niej pusto, to może inne wiedzą coś, czego ja nie wiem?'. Zamiast tego: 'Mam 2 okienka w piątek – idealne na relaks przed weekendem! Kto łapie? 💅'"
              }
            },
            {
              id: "nie-10",
              type: "heading",
              content: "Jak reagować w trudnych sytuacjach"
            },
            {
              id: "nie-11",
              type: "text",
              content: "Negatywne komentarze, zła opinia na Google, niezadowolona klientka – to się zdarza KAŻDEMU. Różnica między profesjonalistką a amatorką? Reakcja. Emocjonalna odpowiedź ('To nieprawda! Ta klientka była niemożliwa!') niszczy Twoją reputację bardziej niż sama negatywna opinia. Profesjonalna odpowiedź ('Dziękuję za feedback. Chętnie wyjaśnię sytuację prywatnie.') buduje szacunek u wszystkich, którzy to czytają."
            },
            {
              id: "nie-12",
              type: "comparison",
              content: "Jak reagować na negatywną opinię",
              comparison: {
                good: {
                  title: "Profesjonalna reakcja",
                  description: "\"Dziękuję za podzielenie się opinią. Bardzo mi zależy na zadowoleniu każdej klientki – zapraszam do kontaktu prywatnego, żebyśmy mogły to wyjaśnić. 💕\"",
                  example: "Inni czytający myślą: 'Wow, profesjonalne podejście. Ta właścicielka wie, co robi.'"
                },
                bad: {
                  title: "Emocjonalna reakcja",
                  description: "\"To nieprawda! Ta klientka była bardzo trudna i wymagająca! Zrobiłam wszystko dobrze, a ona ciągle narzekała!\"",
                  example: "Inni czytający myślą: 'Ojej... wolę nie ryzykować, bo jak mi się nie spodoba, to też tak o mnie napisze'"
                }
              }
            },
            {
              id: "nie-13",
              type: "tip",
              content: "ZASADA 24H: Jeśli coś Cię zdenerwowało – poczekaj 24 godziny przed odpowiedzią. Zapisz odpowiedź, ale NIE wysyłaj. Następnego dnia przeczytaj jeszcze raz. 90% przypadków – przepiszesz na spokojniej i mądrzej."
            },
            {
              id: "nie-14",
              type: "example",
              content: "Transformacje komunikatów:\n\n❌ 'Mam wolne terminy! Dzwońcie!!!' \n✅ 'Zostały ostatnie 2 miejsca w tym tygodniu! Kto łapie?' \n\n❌ 'Znowu ktoś nie przyszedł na wizytę 😤'\n✅ (nie pisz nic – rozwiąż prywatnie z klientką)\n\n❌ 'Przepraszam za słabe zdjęcie'\n✅ (nie publikuj słabych zdjęć – zrób lepsze)\n\n❌ 'U konkurencji robią to źle'\n✅ 'U nas robimy to TAK – zobacz efekty!'"
            },
            {
              id: "nie-quiz-2",
              type: "quiz",
              content: "Quiz: Właściwa odpowiedź",
              quiz: {
                question: "Klientka pisze negatywny komentarz: 'Słaba obsługa, pani była nieuprzejma i spóźniła się 20 minut'. Co powinna odpowiedzieć właścicielka?",
                options: [
                  "Nic – lepiej nie odpowiadać na negatywne komentarze",
                  "\"To nieprawda, byłam punktualna. Mam to w kalendarzu.\"",
                  "\"Bardzo mi przykro z powodu Pani doświadczenia. Proszę o kontakt prywatny, żebyśmy mogły to wyjaśnić.\"",
                  "\"Następnym razem proszę od razu powiedzieć, że coś nie tak, a nie pisać po fakcie.\""
                ],
                correctIndex: 2,
                explanation: "Opcja C jest profesjonalna i buduje zaufanie. Przepraszasz za DOŚWIADCZENIE (nie przyznajesz się do winy), proponujesz rozwiązanie prywatnie. Inni czytający widzą, że dbasz o klientki – nawet te niezadowolone."
              }
            },
            {
              id: "nie-15",
              type: "warning",
              content: "Nawet prawdziwe problemy rozwiązuj PRYWATNIE. Publiczna kłótnia – nawet jeśli masz rację – zawsze Ci szkodzi. Ludzie nie pamiętają, kto miał rację. Pamiętają, że 'w tym salonie są jakieś dramaty'."
            }
          ],
          tasks: [
            {
              id: "nie-task-1",
              title: "Audyt postów",
              description: "Przejrzyj swoich ostatnich 20 postów i stories – czy któryś zawiera elementy z listy 'czego unikać'? Usuń lub przepisz."
            },
            {
              id: "nie-task-2",
              title: "Szablon odpowiedzi",
              description: "Przygotuj gotowy szablon odpowiedzi na negatywną opinię – żebyś w emocjach miała gotowiec"
            },
            {
              id: "nie-task-3",
              title: "Proporcja treści",
              description: "Sprawdź proporcję: ile % Twoich treści to 'o mnie' vs 'wartość dla klientki'? Skoryguj do 20/80."
            }
          ],
          checklist: [
            { id: "nie-check-1", text: "Wiem, czego NIE powinienam komunikować publicznie" },
            { id: "nie-check-2", text: "Mam przygotowany szablon odpowiedzi na negatywne komentarze" },
            { id: "nie-check-3", text: "Przejrzałam swoje posty i usunęłam problematyczne treści" },
            { id: "nie-check-4", text: "Stosuję zasadę 24h przed odpowiedzią w trudnych sytuacjach" },
            { id: "nie-check-5", text: "Moja proporcja treści to 20% 'o mnie', 80% wartość dla klientki" }
          ],
          keyTakeaways: [
            "Narzekanie i desperacja ODSTRASZAJĄ – nawet subtelne",
            "Profesjonalizm > emocje – szczególnie w trudnych sytuacjach",
            "Zasada 24h: czekaj z odpowiedzią, gdy jesteś zdenerwowana",
            "Problemy rozwiązuj PRYWATNIE – publiczna kłótnia zawsze szkodzi"
          ]
        }
      ]
    }
  ]
};
