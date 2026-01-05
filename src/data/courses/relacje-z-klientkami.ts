import { Course } from "@/types/courses";

export const relacjeZKlientkamiCourse: Course = {
  id: "relacje-z-klientkami",
  title: "Relacje z klientkami",
  description: "Naucz się budować trwałe relacje z klientkami poprzez skuteczną komunikację online.",
  icon: "Heart",
  color: "#ec4899",
  estimatedHours: 2,
  totalLessons: 5,
  modules: [
    {
      id: "relacje-m1",
      title: "Relacje z klientkami",
      description: "Kompleksowy przewodnik po budowaniu relacji z klientkami",
      lessons: [
        {
          id: "relacje-l1",
          title: "Komunikacja przed wizytą",
          description: "Jak przygotować klientkę do wizyty i zbudować pozytywne oczekiwania.",
          estimatedMinutes: 12,
          intro: "Pierwsze wrażenie zaczyna się jeszcze przed wizytą. Profesjonalna komunikacja sprawia, że klientka czuje się zaopiekowana od pierwszego kontaktu.",
          objectives: [
            "Nauczysz się potwierdzać wizyty profesjonalnie",
            "Poznasz zasady komunikacji przedwizytowej",
            "Zrozumiesz, jak budować oczekiwania"
          ],
          sections: [
            { id: "relacje-l1-1", type: "heading", content: "Dlaczego komunikacja przed wizytą jest kluczowa?" },
            { id: "relacje-l1-2", type: "text", content: "Klientka, która dostaje profesjonalne przypomnienie, czuje się ważna. To zmniejsza liczbę nieodwołanych wizyt i buduje pozytywne nastawienie jeszcze przed wejściem do salonu." },
            { id: "relacje-l1-3", type: "heading", content: "Kiedy i jak wysyłać potwierdzenie?" },
            { 
              id: "relacje-l1-4", 
              type: "step", 
              stepNumber: 1, 
              content: "Wyślij przypomnienie 24h przed wizytą - to optymalny czas na ewentualną zmianę terminu." 
            },
            { 
              id: "relacje-l1-5", 
              type: "step", 
              stepNumber: 2, 
              content: "Zawrzyj kluczowe informacje: datę, godzinę, rodzaj zabiegu, czas trwania." 
            },
            { 
              id: "relacje-l1-6", 
              type: "step", 
              stepNumber: 3, 
              content: "Dodaj instrukcje przygotowawcze (np. 'przyjdź bez makijażu oczu' przy rzęsach)." 
            },
            { 
              id: "relacje-l1-7", 
              type: "step", 
              stepNumber: 4, 
              content: "Personalizuj wiadomość imieniem klientki - to robi ogromną różnicę." 
            },
            { 
              id: "relacje-l1-mockup", 
              type: "mockup", 
              content: "Story z zapytaniem o preferencje przed wizytą:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "question",
                description: "Pytanie o preferencje buduje relację jeszcze przed wizytą"
              }
            },
            { id: "relacje-l1-8", type: "heading", content: "Budowanie oczekiwań" },
            { id: "relacje-l1-9", type: "text", content: "Wyślij zdjęcie inspiracji lub zapytaj o preferencje. To pokazuje profesjonalizm i zaangażowanie. Klientka poczuje się wyjątkowo i będzie bardziej zaangażowana w proces." },
            { 
              id: "relacje-l1-10", 
              type: "comparison", 
              content: "Wiadomości potwierdzające", 
              comparison: { 
                good: { 
                  title: "Profesjonalna wiadomość", 
                  description: "Personalizowana, konkretna, ciepła",
                  example: "Cześć Ania! Przypominam o jutrzejszej wizycie o 14:00 na stylizację rzęs. Przyjdź bez makijażu oczu. Do zobaczenia! 💕" 
                }, 
                bad: { 
                  title: "Słaba wiadomość", 
                  description: "Sucha, bezosobowa, niepełna",
                  example: "Wizyta jutro 14" 
                } 
              } 
            },
            { id: "relacje-l1-11", type: "tip", content: "Używaj emotikonów z umiarem - dodają ciepła, ale zbyt wiele wygląda nieprofesjonalnie. 1-2 emoji to optimum." },
            {
              id: "relacje-l1-quiz",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka umówiła się na przedłużanie rzęs na jutro o 10:00. Co powinna zawierać wiadomość przypominająca?",
                options: [
                  "Tylko godzinę wizyty",
                  "Datę, godzinę, rodzaj zabiegu i instrukcję (bez makijażu oczu)",
                  "Link do płatności online",
                  "Cennik wszystkich usług"
                ],
                correctIndex: 1,
                explanation: "Kompletna wiadomość zawiera wszystkie praktyczne informacje - klientka wie czego się spodziewać i jak się przygotować. To zmniejsza stres i buduje profesjonalny wizerunek."
              }
            },
            { id: "relacje-l1-12", type: "example", content: "Szablon potwierdzenia:\n\n\"Cześć [Imię]! 💕\n\nPrzypominam o jutrzejszej wizycie:\n📅 [Data] o godz. [Godzina]\n💅 [Rodzaj zabiegu]\n⏱️ Czas trwania: ok. [X] min\n\n[Ewentualne instrukcje]\n\nDo zobaczenia!\n[Twoje imię]\"" }
          ],
          tasks: [
            { id: "relacje-task-1", title: "Szablon potwierdzenia", description: "Stwórz szablon wiadomości potwierdzającej wizytę dla swojej głównej usługi." }
          ],
          checklist: [
            { id: "relacje-check-1", text: "Wiem, kiedy wysyłać potwierdzenie wizyty" },
            { id: "relacje-check-2", text: "Mam szablon wiadomości potwierdzającej" },
            { id: "relacje-check-3", text: "Personalizuję wiadomości imieniem klientki" }
          ],
          keyTakeaways: [
            "Potwierdzaj wizyty 24h wcześniej",
            "Personalizuj wiadomości imieniem klientki",
            "Dodawaj instrukcje przygotowawcze"
          ],
          nextLessonTitle: "Komunikacja po wizycie"
        },
        {
          id: "relacje-l2",
          title: "Komunikacja po wizycie",
          description: "Jak utrzymać kontakt po wizycie i zachęcić do powrotu.",
          estimatedMinutes: 12,
          intro: "Większość salonów kończy kontakt z klientką w momencie wyjścia z salonu. A to właśnie follow-up buduje lojalność i generuje polecenia.",
          objectives: [
            "Nauczysz się follow-upu po wizycie",
            "Poznasz techniki zbierania opinii",
            "Zrozumiesz wartość komunikacji powizytowej"
          ],
          sections: [
            { id: "relacje-l2-1", type: "heading", content: "Dlaczego follow-up jest tak ważny?" },
            { id: "relacje-l2-2", type: "text", content: "Follow-up pokazuje, że zależy Ci na klientce nawet po jej wyjściu z salonu. To moment, w którym budujesz lojalność i zbierasz cenne opinie, które przyciągną nowe klientki." },
            { id: "relacje-l2-3", type: "heading", content: "Kiedy wysyłać follow-up?" },
            { 
              id: "relacje-l2-4", 
              type: "step", 
              stepNumber: 1, 
              content: "24-48h po zabiegu - gdy klientka już widzi efekt i może go ocenić." 
            },
            { 
              id: "relacje-l2-5", 
              type: "step", 
              stepNumber: 2, 
              content: "Zapytaj, jak się czuje z efektem - to pokazuje troskę." 
            },
            { 
              id: "relacje-l2-6", 
              type: "step", 
              stepNumber: 3, 
              content: "Przypomnij o pielęgnacji domowej - wartość dodana." 
            },
            { id: "relacje-l2-7", type: "heading", content: "Zbieranie opinii" },
            { id: "relacje-l2-8", type: "text", content: "Poproś o opinię w Google lub na Facebooku, ale wybierz właściwy moment. Najlepiej gdy klientka sama wyrazi zadowolenie. Wyślij bezpośredni link - im łatwiej, tym więcej opinii zbierzesz." },
            { id: "relacje-l2-9", type: "warning", content: "Nie proś o opinię w tej samej wiadomości co follow-up! Najpierw zapytaj o samopoczucie, a dopiero gdy klientka odpowie pozytywnie, poproś o recenzję." },
            { 
              id: "relacje-l2-10", 
              type: "comparison", 
              content: "Follow-up", 
              comparison: { 
                good: { 
                  title: "Dobry follow-up", 
                  description: "Ciepły, pomocny, bez nachalności",
                  example: "Cześć Kasia! Jak się czujesz z nowymi rzęsami? Pamiętaj o delikatnym czesaniu. Jakby coś - pisz!" 
                }, 
                bad: { 
                  title: "Zły follow-up", 
                  description: "Od razu prosi o coś, bez troski",
                  example: "Proszę o opinię w Google" 
                } 
              } 
            },
            {
              id: "relacje-l2-quiz",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka po wizycie napisała: 'Super, jestem zachwycona!'. Co teraz?",
                options: [
                  "Nie odpowiadaj - zadowolona klientka nie wymaga reakcji",
                  "Od razu wyślij link do Google z prośbą o opinię",
                  "Podziękuj za feedback i dopiero potem (osobna wiadomość) poproś o opinię",
                  "Zaproponuj kolejną wizytę z rabatem"
                ],
                correctIndex: 2,
                explanation: "Najpierw doceń feedback, potem (najlepiej osobną wiadomością) poproś o opinię. Taka sekwencja jest naturalna i nie wygląda jak wyłudzanie recenzji."
              }
            },
            { id: "relacje-l2-11", type: "tip", content: "Automatyzuj follow-upy, ale personalizuj treść. Możesz użyć aplikacji do planowania wiadomości lub notatek w telefonie." },
            { id: "relacje-l2-12", type: "example", content: "Sekwencja follow-up:\n\n1️⃣ Po 24h: \"Cześć [Imię]! Jak wrażenia po wizycie? Daj znać jak się czujesz z efektem 💕\"\n\n2️⃣ Gdy odpowie pozytywnie: \"Super, cieszę się! Czy miałabyś chwilkę, żeby podzielić się opinią w Google? To bardzo pomaga! [link]\"" }
          ],
          tasks: [
            { id: "relacje-task-2", title: "Szablon follow-up", description: "Stwórz szablon wiadomości po wizycie dla swojej głównej usługi." }
          ],
          checklist: [
            { id: "relacje-check-3", text: "Wiem, kiedy wysyłać follow-up" },
            { id: "relacje-check-4", text: "Mam system zbierania opinii" },
            { id: "relacje-check-5", text: "Nie proszę o opinię bez wcześniejszego pytania o zadowolenie" }
          ],
          keyTakeaways: [
            "Wysyłaj follow-up 24-48h po wizycie",
            "Proś o opinie gdy klientka jest zadowolona",
            "Rozdziel troskę od prośby o recenzję"
          ],
          nextLessonTitle: "Wiadomości prywatne"
        },
        {
          id: "relacje-l3",
          title: "Wiadomości prywatne",
          description: "Jak profesjonalnie odpowiadać na wiadomości i budować relacje.",
          estimatedMinutes: 10,
          intro: "Wiadomości prywatne (Messenger i DM) to często pierwszy kontakt potencjalnej klientki z Twoim salonem. Sposób odpowiedzi decyduje o tym, czy umówi wizytę czy pójdzie do konkurencji.",
          objectives: [
            "Poznasz zasady odpowiadania na DM",
            "Nauczysz się konwertować zapytania na rezerwacje"
          ],
          sections: [
            { id: "relacje-l3-1", type: "heading", content: "Złota zasada odpowiadania na wiadomości" },
            { id: "relacje-l3-2", type: "text", content: "Szybkość + konkret = rezerwacja. Klientka pisząca do 5 salonów wybierze ten, który odpowie szybko i profesjonalnie." },
            { id: "relacje-l3-3", type: "heading", content: "Zasady skutecznej odpowiedzi" },
            { 
              id: "relacje-l3-4", 
              type: "step", 
              stepNumber: 1, 
              content: "Odpowiadaj w ciągu 2-4 godzin - im szybciej, tym lepiej." 
            },
            { 
              id: "relacje-l3-5", 
              type: "step", 
              stepNumber: 2, 
              content: "Bądź ciepła, ale profesjonalna - balance jest kluczowy." 
            },
            { 
              id: "relacje-l3-6", 
              type: "step", 
              stepNumber: 3, 
              content: "Odpowiedz na pytanie I zaproponuj kolejny krok." 
            },
            { 
              id: "relacje-l3-7", 
              type: "step", 
              stepNumber: 4, 
              content: "Zakończ pytaniem lub propozycją konkretnych terminów." 
            },
            { id: "relacje-l3-8", type: "heading", content: "Konwersja na rezerwację" },
            { id: "relacje-l3-9", type: "text", content: "Nie zostawiaj rozmowy otwartej! Zaproponuj 2-3 konkretne terminy. Ułatw podjęcie decyzji - klientka nie musi myśleć, tylko wybrać." },
            { 
              id: "relacje-l3-10", 
              type: "comparison", 
              content: "Odpowiedzi na DM", 
              comparison: { 
                good: { 
                  title: "Dobra odpowiedź", 
                  description: "Konkretna, z propozycją terminów",
                  example: "Cześć! Przedłużanie klasyczne to 2h, cena 150zł. Mam wolne jutro o 12 lub w piątek o 10. Który termin Ci pasuje?" 
                }, 
                bad: { 
                  title: "Słaba odpowiedź", 
                  description: "Odsyła, nie proponuje niczego",
                  example: "Cennik mam w wyróżnionych" 
                } 
              } 
            },
            {
              id: "relacje-l3-quiz",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka napisała: 'Ile kosztują paznokcie hybrydowe?'. Jak odpowiedzieć, żeby zwiększyć szansę na rezerwację?",
                options: [
                  "Napisz tylko cenę: '120 zł'",
                  "Odeślij do wyróżnionych relacji z cennikiem",
                  "Podaj cenę + czas + 2 propozycje terminów + pytanie",
                  "Zapytaj najpierw jaki kształt preferuje"
                ],
                correctIndex: 2,
                explanation: "Kompletna odpowiedź (cena + czas + terminy + pytanie) eliminuje potrzebę kolejnych wiadomości i ułatwia decyzję. Klientka może od razu wybrać termin."
              }
            },
            { id: "relacje-l3-11", type: "tip", content: "Zapisuj szybkie odpowiedzi w Messengerze i Instagramie na najczęstsze pytania. Oszczędzisz czas i zachowasz spójność." },
            { id: "relacje-l3-12", type: "example", content: "Szablon odpowiedzi na pytanie o cenę:\n\n\"Cześć! [Nazwa usługi] to [cena] zł, zabieg trwa ok. [czas].\n\nMam wolne terminy:\n📅 [dzień] o [godzina]\n📅 [dzień] o [godzina]\n\nKtóry Ci pasuje? 💕\"" }
          ],
          tasks: [
            { id: "relacje-task-3", title: "Szybkie odpowiedzi", description: "Przygotuj 5 szybkich odpowiedzi na najczęstsze pytania." }
          ],
          checklist: [
            { id: "relacje-check-5", text: "Odpowiadam na wiadomości w ciągu kilku godzin" },
            { id: "relacje-check-6", text: "Mam przygotowane szybkie odpowiedzi" },
            { id: "relacje-check-7", text: "Zawsze proponuję konkretne terminy" }
          ],
          keyTakeaways: [
            "Odpowiadaj szybko i proponuj konkretne terminy",
            "Zakończ wiadomość pytaniem lub propozycją",
            "Używaj szybkich odpowiedzi dla oszczędności czasu"
          ],
          nextLessonTitle: "Komentarze i opinie"
        },
        {
          id: "relacje-l4",
          title: "Komentarze i opinie",
          description: "Jak reagować na komentarze i zarządzać opiniami online.",
          estimatedMinutes: 12,
          intro: "Komentarze i opinie to publiczna wizytówka Twojego salonu. Sposób, w jaki na nie reagujesz, obserwują setki potencjalnych klientek.",
          objectives: [
            "Nauczysz się odpowiadać na komentarze",
            "Poznasz strategie reagowania na negatywne opinie"
          ],
          sections: [
            { id: "relacje-l4-1", type: "heading", content: "Dlaczego każdy komentarz zasługuje na odpowiedź?" },
            { id: "relacje-l4-2", type: "text", content: "Komentarze to nie tylko interakcja z jedną osobą - to pokaz dla wszystkich, którzy przeglądają Twój profil. Profesjonalne odpowiedzi budują wizerunek zaangażowanego salonu." },
            { id: "relacje-l4-3", type: "heading", content: "Zasady odpowiadania na komentarze" },
            { 
              id: "relacje-l4-4", 
              type: "step", 
              stepNumber: 1, 
              content: "Odpowiadaj na KAŻDY komentarz - nawet prosty 😍 zasługuje na ❤️." 
            },
            { 
              id: "relacje-l4-5", 
              type: "step", 
              stepNumber: 2, 
              content: "Dziękuj za komplementy konkretnie, nie ogólnikowo." 
            },
            { 
              id: "relacje-l4-6", 
              type: "step", 
              stepNumber: 3, 
              content: "Na pytania odpowiadaj merytorycznie i ciepło." 
            },
            { 
              id: "relacje-l4-7", 
              type: "step", 
              stepNumber: 4, 
              content: "Używaj imienia osoby komentującej gdy to możliwe." 
            },
            { id: "relacje-l4-8", type: "heading", content: "Negatywne opinie - jak reagować?" },
            { id: "relacje-l4-9", type: "text", content: "Negatywna opinia to szansa, nie katastrofa. Profesjonalna reakcja może przekonać więcej osób niż 10 pozytywnych recenzji!" },
            { id: "relacje-l4-10", type: "warning", content: "NIGDY nie usuwaj negatywnych opinii (chyba że są obraźliwe) i nie wdawaj się w kłótnie. Odpowiedz spokojnie i przenieś rozmowę do DM." },
            { 
              id: "relacje-l4-11", 
              type: "comparison", 
              content: "Reakcja na negatywną opinię", 
              comparison: { 
                good: { 
                  title: "Profesjonalna reakcja", 
                  description: "Spokojnie, z empatią, oferuje rozwiązanie",
                  example: "Dziękuję za feedback. Przykro mi, że efekt nie spełnił oczekiwań. Proszę o kontakt DM - chętnie to naprawimy." 
                }, 
                bad: { 
                  title: "Zła reakcja", 
                  description: "Defensywna, obwiniająca klientkę",
                  example: "To nieprawda! Sama pani źle dbała o rzęsy!" 
                } 
              } 
            },
            {
              id: "relacje-l4-quiz",
              type: "quiz",
              content: "",
              quiz: {
                question: "Klientka napisała negatywną opinię: 'Hybryda odpadła po 3 dniach, fatalny salon'. Co robisz?",
                options: [
                  "Usuwasz opinię - nie chcesz żeby inni to widzieli",
                  "Piszesz publiczną odpowiedź tłumaczącą, że to wina klientki",
                  "Odpowiadasz spokojnie z przeprosinami i propozycją kontaktu DM",
                  "Ignorujesz - nie warto karmić hejterów"
                ],
                correctIndex: 2,
                explanation: "Profesjonalna odpowiedź pokazuje wszystkim, że traktujesz problemy poważnie. Inne klientki widzą, że nawet w trudnej sytuacji jesteś fair i chcesz pomóc."
              }
            },
            { id: "relacje-l4-12", type: "tip", content: "Jedna profesjonalna odpowiedź na negatywną opinię może przekonać więcej osób niż 10 pozytywnych recenzji. Ludzie szukają jak reagujesz na problemy." },
            { id: "relacje-l4-13", type: "example", content: "Schemat odpowiedzi na negatywną opinię:\n\n1️⃣ Podziękuj za feedback\n2️⃣ Wyraź żal/empatię\n3️⃣ Nie tłumacz się publicznie\n4️⃣ Zaproponuj kontakt prywatny\n5️⃣ Obiecaj rozwiązanie" }
          ],
          tasks: [
            { id: "relacje-task-4", title: "Audyt opinii", description: "Sprawdź swoje opinie w Google i odpowiedz na wszystkie bez odpowiedzi." }
          ],
          checklist: [
            { id: "relacje-check-7", text: "Odpowiadam na wszystkie komentarze" },
            { id: "relacje-check-8", text: "Wiem, jak reagować na negatywne opinie" },
            { id: "relacje-check-9", text: "Nie wdaję się w publiczne kłótnie" }
          ],
          keyTakeaways: [
            "Odpowiadaj na każdy komentarz i opinię",
            "Na krytykę reaguj spokojnie i profesjonalnie",
            "Negatywna opinia to szansa na pokazanie profesjonalizmu"
          ],
          nextLessonTitle: "Budowanie lojalności"
        },
        {
          id: "relacje-l5",
          title: "Budowanie lojalności",
          description: "Jak sprawić, by klientki wracały i polecały Twój salon.",
          estimatedMinutes: 12,
          intro: "Lojalna klientka to skarb - wraca regularnie, poleca znajomym i jest mniej wrażliwa na cenę. Budowanie lojalności to najlepsza inwestycja w marketing.",
          objectives: [
            "Poznasz strategie budowania lojalności",
            "Nauczysz się tworzyć program poleceń"
          ],
          sections: [
            { id: "relacje-l5-1", type: "heading", content: "Dlaczego lojalność się opłaca?" },
            { id: "relacje-l5-2", type: "text", content: "Pozyskanie nowej klientki kosztuje 5-7x więcej niż utrzymanie stałej. Lojalne klientki wydają więcej, polecają znajome i przebaczają drobne wpadki." },
            { id: "relacje-l5-3", type: "heading", content: "4 filary lojalności" },
            { 
              id: "relacje-l5-4", 
              type: "step", 
              stepNumber: 1, 
              content: "PERSONALIZACJA - Pamiętaj preferencje klientek (ulubiony kolor, sposób komunikacji, alergie)." 
            },
            { 
              id: "relacje-l5-5", 
              type: "step", 
              stepNumber: 2, 
              content: "PROGRAM LOJALNOŚCIOWY - Nagradzaj regularność (np. co 5. wizyta z rabatem)." 
            },
            { 
              id: "relacje-l5-6", 
              type: "step", 
              stepNumber: 3, 
              content: "URODZINY - Życzenia + mały rabat lub prezent to prosty gest z dużym efektem." 
            },
            { 
              id: "relacje-l5-7", 
              type: "step", 
              stepNumber: 4, 
              content: "EKSKLUZYWNOŚĆ - Stałe klientki mają pierwszeństwo rezerwacji lub dostęp do nowości." 
            },
            { id: "relacje-l5-8", type: "heading", content: "Program poleceń" },
            { id: "relacje-l5-9", type: "text", content: "Zachęcaj do polecania znajomym. Kluczowa zasada: nagradzaj OBE strony - polecającą i nową klientkę. Obie czują się wygrane." },
            { 
              id: "relacje-l5-10", 
              type: "comparison", 
              content: "Programy lojalnościowe", 
              comparison: { 
                good: { 
                  title: "Skuteczny program", 
                  description: "Prosty, wartościowy, uczciwy",
                  example: "Co 5. wizyta -30%, urodzinowy rabat 15%, polecenie = rabat dla obu" 
                }, 
                bad: { 
                  title: "Nieskuteczny program", 
                  description: "Skomplikowany, nieopłacalny",
                  example: "Skomplikowany system punktów, trudne zasady, małe korzyści" 
                } 
              } 
            },
            {
              id: "relacje-l5-quiz",
              type: "quiz",
              content: "",
              quiz: {
                question: "Stała klientka pyta, czy mogłaby polecić Cię koleżance. Co proponujesz?",
                options: [
                  "Daj jej wizytówkę i podziękuj",
                  "Zaproponuj rabat tylko dla nowej klientki",
                  "Zaproponuj rabat dla obu - polecającej i nowej klientki",
                  "Powiedz, że polecenia to najlepsza reklama i na tym zakończ"
                ],
                correctIndex: 2,
                explanation: "Nagradzanie obu stron sprawia, że klientka chętniej poleci, a nowa klientka czuje się mile widziana. To win-win-win - zyskujesz lojalność i nową klientkę."
              }
            },
            { id: "relacje-l5-11", type: "tip", content: "Prowadź kartotekę klientek z notatkami o preferencjach. To pomoże Ci personalizować usługi i klientki docenią, że pamiętasz szczegóły." },
            { id: "relacje-l5-12", type: "example", content: "Przykładowy program lojalnościowy:\n\n🎁 CO 5. WIZYTA: -30% na usługę\n🎂 URODZINY: -15% przez cały miesiąc urodzinowy\n💕 POLECENIE: Ty i koleżanka -20% na następną wizytę\n⭐ STAŁE KLIENTKI: Pierwszeństwo rezerwacji i dostęp do nowości" }
          ],
          tasks: [
            { id: "relacje-task-5", title: "Program lojalnościowy", description: "Zaprojektuj prosty program lojalnościowy dla swojego salonu." }
          ],
          checklist: [
            { id: "relacje-check-9", text: "Mam strategię budowania lojalności" },
            { id: "relacje-check-10", text: "Mam program poleceń" },
            { id: "relacje-check-11", text: "Prowadzę kartotekę klientek z notatkami" }
          ],
          keyTakeaways: [
            "Lojalna klientka to najlepsza reklama",
            "Program poleceń powinien nagradzać obie strony",
            "Personalizacja buduje więź i lojalność"
          ]
        }
      ]
    }
  ]
};
