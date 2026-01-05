import { Course } from "@/types/courses";

export const strategiaTresciCourse: Course = {
  id: "strategia-tresci",
  title: "Strategia treści organicznych",
  description: "Naucz się planować i organizować treści, które przyciągną klientów do Twojego salonu.",
  icon: "strategy",
  color: "from-teal-500 to-cyan-500",
  estimatedHours: 3,
  totalLessons: 5,
  modules: [
    {
      id: "strategia-tresci-m1",
      title: "Planowanie treści",
      description: "Naucz się strategicznie planować treści na social media.",
      lessons: [
        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 1 - FILARY TREŚCI SALONU BEAUTY
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "filary-tresci",
          title: "Filary treści salonu beauty",
          description: "Poznaj główne kategorie treści, które powinny pojawiać się na profilu Twojego salonu.",
          estimatedMinutes: 15,
          intro: "Czy zdarza Ci się rano otwierać Instagram i myśleć 'co ja dziś wrzucę?'. Godzina mija, inspiracji brak, a Ty kończysz z desperackim zdjęciem kawy. To klasyczny objaw braku systemu. Filary treści to Twoja mapa – dzięki nim NIGDY nie zabraknie Ci pomysłów, a profil będzie spójny jak najlepsze magazyny.",
          sections: [
            {
              id: "filary-heading-1",
              type: "heading",
              content: "Czym są filary treści?"
            },
            {
              id: "filary-text-1",
              type: "text",
              content: "Wyobraź sobie, że Twoje profile na Facebooku i Instagramie to magazyn. Każdy magazyn ma stałe rubryki – o modzie, o zdrowiu, o celebrytach. Czytelniczka wie, czego się spodziewać w każdym numerze. Właśnie dlatego wraca!\n\n**Filary treści** działają dokładnie tak samo. To 4-5 głównych tematów, które regularnie pojawiają się na Twoich profilach. Nie wymyślasz codziennie od zera – sięgasz po jeden z filarów i tworzysz w jego ramach. Klientka obserwująca Twój profil podświadomie uczy się, czego może oczekiwać: 'O, ten salon zawsze pokazuje piękne efekty, daje fajne porady i wrzuca kulisy – lubię to!'. Ta przewidywalność buduje zaufanie i lojalność."
            },
            {
              id: "filary-tip-1",
              type: "tip",
              content: "Kiedy masz określone filary, tworzenie treści staje się prostsze. Zamiast codziennie zadawać sobie pytanie 'co dziś wrzucić?', sięgasz po jeden z filarów i tworzysz content w jego ramach. To jak przepis kulinarny – masz składniki, wiesz co z nich ugotować."
            },
            {
              id: "filary-heading-2",
              type: "heading",
              content: "5 filarów treści dla salonu beauty"
            },
            {
              id: "filary-text-2",
              type: "text",
              content: "Przez lata pracy z salonami beauty wypracowałyśmy 5 uniwersalnych filarów, które sprawdzają się niemal zawsze. Możesz je modyfikować, łączyć, dostosowywać – ale ta baza to punkt wyjścia dla każdego salonu. Każdy filar pełni inną funkcję w budowaniu Twojego profilu i relacji z klientkami."
            },
            {
              id: "filary-step-1",
              type: "step",
              stepNumber: 1,
              content: "**EFEKTY PRACY** – Zdjęcia i wideo Twoich realizacji. Przed/po, zbliżenia, metamorfozy. To Twoje portfolio, które pokazuje umiejętności i przekonuje niezdecydowane klientki. Klientka myśli: 'Wow, te paznokcie są piękne! Chcę takie!'. To najprostszy filar – robisz go codziennie podczas pracy."
            },
            {
              id: "filary-step-2",
              type: "step",
              stepNumber: 2,
              content: "**EDUKACJA** – Porady, wskazówki, odpowiedzi na pytania. 'Jak dbać o hybrydy?', 'Czego nie robić przed wizytą?', '5 błędów w pielęgnacji paznokci'. Buduje Twoją ekspertyzę i daje wartość obserwującym. Klientka myśli: 'Ta pani wie, co mówi! Ufam jej.' Edukacja sprawia, że jesteś EKSPERTKĄ, nie tylko usługodawczynią."
            },
            {
              id: "filary-step-3",
              type: "step",
              stepNumber: 3,
              content: "**KULISY** – Życie salonu, przygotowania, Twoja codzienność. Poranne przygotowywanie stanowiska, nowe produkty w dostawie, śmieszna sytuacja z klientką (za jej zgodą!). Pokazuje, że za profilem stoi prawdziwy człowiek. Klientka myśli: 'Lubię ją! Chcę do niej iść, wydaje się fajna.' Kulisy budują relację."
            },
            {
              id: "filary-step-4",
              type: "step",
              stepNumber: 4,
              content: "**TY/ZESPÓŁ** – Twoja historia, wartości, osobowość. Dlaczego zaczęłaś? Co Cię napędza? Kim są osoby w Twoim zespole? Klientki lubią wiedzieć, do kogo idą. Dzielenie się sobą sprawia, że wybierają właśnie CIEBIE, a nie 'jakiś salon'. Lojalność rodzi się z poznania człowieka."
            },
            {
              id: "filary-step-5",
              type: "step",
              stepNumber: 5,
              content: "**SPRZEDAŻ** – Promocje, wolne terminy, nowości w ofercie. Nie bój się mówić o swoich usługach! 'Mamy nowy zabieg!', 'Wolne terminy w piątek!', 'Promocja na walentynki!'. Ale pamiętaj – to nie może być JEDYNY filar. Jeśli tylko sprzedajesz, ludzie Cię wyciszą."
            },
            {
              id: "filary-mockup-1",
              type: "mockup",
              content: "Post edukacyjny - jeden z filarów treści:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "Jak dbać o paznokcie między wizytami? 💅\n\nMoje klientki często pytają, jak przedłużyć życie hybrydy. Oto moje top 3 porady:\n\n1️⃣ Olejuj skórki CODZIENNIE – nawilżone skórki = zdrowsze paznokcie\n2️⃣ Używaj rękawiczek do sprzątania – środki chemiczne to wróg!\n3️⃣ Nie skracaj paznokci za krótko między wizytami\n\nKtóra rada jest dla Ciebie nowa? 👇",
                postLikes: "28",
                postComments: "7",
                postImage: "nails",
                description: "Filar EDUKACJA – porady budują Twoją ekspertyzę. Klientka widzi, że znasz się na rzeczy i chętniej Ci zaufa."
              }
            },
            {
              id: "filary-heading-3",
              type: "heading",
              content: "Proporcje filarów na profilu"
            },
            {
              id: "filary-text-3",
              type: "text",
              content: "Nie wszystkie filary powinny być równomiernie reprezentowane. Każdy ma inną rolę i inną 'moc'. Oto proporcje, które sprawdzają się w praktyce:\n\n• **40% EFEKTY** – Twoje portfolio to podstawa. To przekonuje nowych.\n• **25% EDUKACJA** – Buduj ekspertyzę. To pokazuje, że WIESZ.\n• **20% KULISY + TY** – Buduj relację. To sprawia, że Cię LUBIĄ.\n• **15% SPRZEDAŻ** – Promocje i oferty. To sprawia, że KUPUJĄ.\n\nJeśli Twój profil to same promocje, ludzie zaczną Cię wyciszać – nikt nie chce ciągłych reklam. Jeśli same efekty bez edukacji – nie budujesz pozycji eksperta. Balans jest kluczem."
            },
            {
              id: "filary-quiz-1",
              type: "quiz",
              content: "Quiz: Zdiagnozuj problem",
              quiz: {
                question: "Magda prowadzi salon od roku. Jej profil to w 90% zdjęcia prac, a obserwujących prawie nie przybywa. Co jest problemem?",
                options: [
                  "Za mało zdjęć prac – powinna wrzucać więcej",
                  "Brak różnorodności – same efekty nie budują relacji ani ekspertyzy",
                  "Za dużo postów – powinna publikować rzadziej",
                  "Zła pora publikowania – to na pewno algorytm"
                ],
                correctIndex: 1,
                explanation: "Same zdjęcia prac to tylko PORTFOLIO. Ludzie je widzą, oceniają, ale nie mają powodu, żeby zostać i angażować się. Brakuje edukacji (dlaczego ta specjalistka jest ekspertką?) i kulis (kim ona jest jako człowiek?). Profil jest monotonny i nie buduje relacji."
              }
            },
            {
              id: "filary-comparison-1",
              type: "comparison",
              content: "Proporcje filarów na profilu",
              comparison: {
                good: {
                  title: "Zbalansowany profil",
                  description: "Różnorodne treści: 40% portfolio, 25% porady, 20% kulisy, 15% promocje. Obserwująca ma powody, żeby zostać.",
                  example: "Klientka myśli: 'Piękne prace, mądre porady, fajna babka – zapisuję się!'"
                },
                bad: {
                  title: "Niezbalansowany profil",
                  description: "90% zdjęcia prac lub 80% promocje. Monotonny, brak głębi, łatwo się znudzić.",
                  example: "Klientka myśli: 'Ok, ładne paznokcie, ale... już widziałam 50 takich zdjęć. Scroll dalej.'"
                }
              }
            },
            {
              id: "filary-heading-4",
              type: "heading",
              content: "Dopasuj filary do swojej specjalizacji"
            },
            {
              id: "filary-text-4",
              type: "text",
              content: "Filary powinny odzwierciedlać to, w czym się specjalizujesz i co jest UNIKALNE dla Twojego salonu. Jeśli robisz głównie nail art – filar EFEKTY może zawierać podfilar 'inspiracje i trendy'. Jeśli prowadzisz salon z zespołem – filar TY/ZESPÓŁ będzie pokazywał różne osoby. Jeśli specjalizujesz się w naturalnych stylizacjach – Twoja edukacja będzie o pielęgnacji i zdrowiu paznokci. Nie kopiuj bezmyślnie – przemyśl, co pasuje do CIEBIE."
            },
            {
              id: "filary-example-1",
              type: "example",
              content: "**Przykładowe filary dla różnych specjalizacji:**\n\n**Salon kosmetyczny (zabiegi na twarz):**\n1. Efekty zabiegów (przed/po)\n2. Pielęgnacja domowa (porady)\n3. Skóra pod lupą (edukacja o składnikach)\n4. Ja i zespół\n5. Nowości i promocje\n\n**Salon fryzjerski:**\n1. Metamorfozy\n2. Porady pielęgnacyjne\n3. Trendy i inspiracje\n4. Poznaj swojego fryzjera\n5. Wolne terminy i oferty\n\n**Studio stylizacji paznokci:**\n1. Portfolio (efekty)\n2. Nail care (edukacja)\n3. Trendy i inspiracje\n4. Kulisy i ja\n5. Dostępność i promocje"
            },
            {
              id: "filary-quiz-2",
              type: "quiz",
              content: "Quiz: Praktyczne zastosowanie",
              quiz: {
                question: "Klientka pyta Cię: 'Skąd bierzesz pomysły na posty?'. Co odpowiesz?",
                options: [
                  "Nie wiem, wrzucam co mi przyjdzie do głowy",
                  "Mam 5 głównych tematów i rotuję między nimi według planu",
                  "Kopiuję to, co robi konkurencja",
                  "Publikuję tylko promocje, bo to sprzedaje"
                ],
                correctIndex: 1,
                explanation: "Filary treści to Twój SYSTEM. Kiedy masz określone tematy, nie zastanawiasz się 'co wrzucić' – wiesz, że dziś pokazujesz efekty, jutro poradę, pojutrze kulisy. To zdejmuje presję i buduje spójny, profesjonalny profil."
              }
            },
            {
              id: "filary-warning-1",
              type: "warning",
              content: "Nie kopiuj filarów innych salonów bezmyślnie. Pomyśl, o czym TY chcesz opowiadać i co interesuje TWOJE klientki. Filary mają być autentyczne – jeśli nienawidzisz mówić o sobie, filar 'TY' może być mniejszy. Jeśli kochasz edukować – zwiększ udział porad. Dopasuj system do siebie."
            },
            {
              id: "filary-mockup-2",
              type: "mockup",
              content: "Post z filaru KULISY – budowanie relacji:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "Poniedziałkowy poranek w salonie ☕✨\n\nKawa się parzy, ulubiona playlista gra, wszystko gotowe na pierwsze klientki. Uwielbiam te spokojne 15 minut przed burzą! 😄\n\nA Wy jak zaczynacie poniedziałki? Kawa czy herbata? ☕🍵",
                postLikes: "24",
                postComments: "9",
                postImage: "salon",
                description: "Filar KULISY – pokazujesz ludzką stronę. Klientki czują, że Cię znają. To buduje lojalność i sympatię."
              }
            }
          ],
          tasks: [
            {
              id: "task-filary-1",
              title: "Zdefiniuj swoje filary treści",
              description: "Wypisz 4-5 głównych tematów, które będą się pojawiać na Twoim profilu. Nazwij je po swojemu (np. 'Moje prace', 'Tajniki urody', 'Za kulisami')."
            },
            {
              id: "task-filary-2",
              title: "Oceń obecny profil",
              description: "Przejrzyj swoje ostatnie 12 postów. Które filary dominują? Którego brakuje? Czy proporcje są ok?"
            },
            {
              id: "task-filary-3",
              title: "Ustal proporcje",
              description: "Zdecyduj, jaki procent treści przypiszesz każdemu filarowi. Zapisz to."
            }
          ],
          checklist: [
            { id: "check-filary-1", text: "Zdefiniowałam swoje 4-5 filarów treści" },
            { id: "check-filary-2", text: "Ustaliłam proporcje filarów na profilu" },
            { id: "check-filary-3", text: "Dopasowałam filary do mojej specjalizacji" },
            { id: "check-filary-4", text: "Przejrzałam obecny profil i wiem, co zmienić" }
          ],
          keyTakeaways: [
            "Filary treści to 4-5 głównych tematów Twojego profilu – Twoja mapa",
            "Sugerowane proporcje: 40% efekty, 25% edukacja, 20% kulisy, 15% sprzedaż",
            "Filary zdejmują presję codziennego wymyślania – wiesz, o czym pisać",
            "Dopasuj filary do swojej specjalizacji i osobowości – bądź autentyczna"
          ],
          nextLessonTitle: "Dobór formatów treści"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 2 - DOBÓR FORMATÓW TREŚCI
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "formaty-tresci",
          title: "Dobór formatów treści",
          description: "Dowiedz się jakie formaty treści najlepiej sprawdzają się w branży beauty.",
          estimatedMinutes: 20,
          intro: "Facebook i Instagram oferują więcej formatów niż kiedykolwiek – posty, Reels, Stories, karuzele, Live'y. To może przytłaczać. Ale oto sekret: nie musisz robić WSZYSTKIEGO. W tej lekcji nauczysz się wybierać formaty, które pasują do Twojego salonu, Twoich możliwości i Twoich celów. Bo mądry wybór bije chaotyczne próby robienia wszystkiego.",
          sections: [
            {
              id: "formaty-heading-1",
              type: "heading",
              content: "Formaty treści w social mediach – przegląd"
            },
            {
              id: "formaty-text-1",
              type: "text",
              content: "Na Facebooku i Instagramie masz do dyspozycji kilka formatów. Każdy ma swoje mocne strony, najlepsze zastosowania i różny potencjał zasięgu. Zrozumienie tych różnic to klucz do mądrej strategii. Nie chodzi o to, żeby robić wszystko – chodzi o to, żeby robić WŁAŚCIWE rzeczy."
            },
            {
              id: "formaty-step-1",
              type: "step",
              stepNumber: 1,
              content: "**POSTY (zdjęcia)** – Trwałe treści na feedzie. Idealne do portfolio, pięknych zdjęć efektów, inspiracji. Mniejszy zasięg organiczny niż Reels, ale budują estetykę profilu. Kiedy nowa osoba wchodzi na Twój profil, widzi POSTY – to Twoja wizytówka."
            },
            {
              id: "formaty-step-2",
              type: "step",
              stepNumber: 2,
              content: "**KARUZELE** – Wielozdjęciowe posty (do 20 slajdów). Świetne do porad, instrukcji, pokazywania procesu, przed/po. Generują WYSOKIE zaangażowanie, bo ludzie przesuwają. Algorytm to kocha. Karuzela z '5 poradami' to hit!"
            },
            {
              id: "formaty-step-3",
              type: "step",
              stepNumber: 3,
              content: "**REELS** – Krótkie wideo (do 90 sekund). Największy organiczny zasięg! Algorytm promuje Reelsy do osób, które Cię NIE obserwują. Idealne do metamorfoz, kulis, trendów. Jeśli chcesz rosnąć – Reels to must-have."
            },
            {
              id: "formaty-step-4",
              type: "step",
              stepNumber: 4,
              content: "**STORIES** – 24-godzinne treści. Najlepsze do codziennej komunikacji, kulis, interakcji. Nie wymagają perfekcji – autentyczność górą. Stories widzą głównie obecni obserwujący – to sposób na utrzymanie relacji."
            },
            {
              id: "formaty-quiz-1",
              type: "quiz",
              content: "Quiz: Który format do czego?",
              quiz: {
                question: "Chcesz dotrzeć do nowych osób, które Cię jeszcze nie znają. Który format wybierzesz?",
                options: [
                  "Stories – bo są najłatwiejsze do zrobienia",
                  "Post ze zdjęciem – bo mam piękne zdjęcia",
                  "Reels – bo algorytm promuje je do nowych osób",
                  "Karuzela – bo ma dużo zaangażowania"
                ],
                correctIndex: 2,
                explanation: "Reels mają największy zasięg ORGANICZNY. Algorytm pokazuje je osobom, które Cię nie obserwują – to Twoja szansa na dotarcie do nowych potencjalnych klientek. Stories widzą głównie obecni obserwujący, posty mają mniejszy zasięg."
              }
            },
            {
              id: "formaty-heading-2",
              type: "heading",
              content: "Który format do którego filaru?"
            },
            {
              id: "formaty-text-2",
              type: "text",
              content: "Każdy filar treści może być realizowany w różnych formatach. Oto jak je dopasować, żeby maksymalizować efekt. Pamiętaj – jeden temat możesz pokazać na wiele sposobów!"
            },
            {
              id: "formaty-example-1",
              type: "example",
              content: "**EFEKTY PRACY:**\n• Post – piękne zdjęcie close-up (portfolio)\n• Karuzela – przed i po + detale + info o zabiegu\n• Reels – timelapse zabiegu lub metamorfoza\n• Stories – szybki efekt 'prosto spod lampy'\n\n**EDUKACJA:**\n• Karuzela – '5 porad krok po kroku' (hit!)\n• Reels – odpowiedź na pytanie, obalanie mitu\n• Stories – szybka wskazówka, Q&A\n• Post – jedna silna porada z rozwinięciem\n\n**KULISY:**\n• Stories – codzienne momenty (naturalne miejsce!)\n• Reels – 'dzień z życia salonu'\n• Post – zdjęcie zespołu, wnętrza\n\n**SPRZEDAŻ:**\n• Stories – wolne terminy, flash promocje\n• Post/Karuzela – większe promocje, nowości\n• Reels – prezentacja nowej usługi"
            },
            {
              id: "formaty-comparison-1",
              type: "comparison",
              content: "Porównanie formatów",
              comparison: {
                good: {
                  title: "Reels i karuzele",
                  description: "Większy zasięg organiczny, dotarcie do nowych osób, algorytm je promuje, wysokie zaangażowanie.",
                  example: "Klientka, która Cię nie zna, ogląda Reels → wchodzi na profil → widzi portfolio → rezerwuje"
                },
                bad: {
                  title: "Tylko pojedyncze zdjęcia",
                  description: "Mniejszy zasięg, widzą głównie obecni obserwujący, mniejsze zaangażowanie.",
                  example: "Piękne zdjęcia, ale mało kto nowy je widzi. Profil rośnie wolno."
                }
              }
            },
            {
              id: "formaty-heading-3",
              type: "heading",
              content: "Nie musisz robić wszystkiego"
            },
            {
              id: "formaty-text-3",
              type: "text",
              content: "Widzisz salony robiące codzienne Reelsy, Stories non-stop, posty co drugi dzień, Live'y w weekendy? I myślisz 'ja tego nie ogarnę'?\n\n**Uspokój się.** Te profile albo mają zespół do social media, albo poświęcają na to kilka godzin dziennie, albo... wypalają się po kilku miesiącach.\n\nLepiej robić MNIEJ, ale DOBRZE i REGULARNIE, niż wszystko byle jak przez tydzień i potem cisza na miesiąc."
            },
            {
              id: "formaty-tip-1",
              type: "tip",
              content: "Zacznij od Stories + jednego formatu na feed (posty LUB Reels). Kiedy to ogarniesz i wejdzie w nawyk, dodawaj kolejne. Lepiej jeden format regularnie niż wszystkie sporadycznie. Konsekwencja > ambicja."
            },
            {
              id: "formaty-quiz-2",
              type: "quiz",
              content: "Quiz: Realistyczne podejście",
              quiz: {
                question: "Ania pracuje sama w salonie 8 godzin dziennie. Ma 30 minut na social media. Co powinna robić?",
                options: [
                  "Codzienne Reels, posty i Stories – trzeba być wszędzie",
                  "Tylko Reels – to jedyne co się liczy",
                  "Stories codziennie + 2-3 posty/Reelsy tygodniowo",
                  "Nic – przy takiej pracy to niemożliwe"
                ],
                correctIndex: 2,
                explanation: "30 minut dziennie to realistycznie: Stories codziennie (5-10 min) + 2-3 posty lub Reelsy TYGODNIOWO (przygotowane w wolnej chwili). To daje aktywny profil, regularność i jest do utrzymania długoterminowo."
              }
            },
            {
              id: "formaty-heading-4",
              type: "heading",
              content: "Strategiczne łączenie formatów – lejek"
            },
            {
              id: "formaty-text-4",
              type: "text",
              content: "Najlepsze profile łączą formaty w przemyślany sposób. To działa jak LEJEK:\n\n**1. Reels przyciągają NOWYCH** – Duży zasięg dociera do osób, które Cię nie znają. Ktoś ogląda Twój Reels z metamorfozą i myśli 'wow, kto to robi?'. Klika na profil.\n\n**2. Posty budują PORTFOLIO** – Nowa osoba wchodzi na profil i widzi siatkę Twoich prac. 'Ładne! Ta pani naprawdę umie!' – zaczyna obserwować.\n\n**3. Stories budują RELACJĘ** – Codzienne Stories sprawiają, że nowa obserwująca Cię poznaje, lubi, ufa. 'O, fajnie, pokazuje kulisy, jest sympatyczna!' – wchodzi regularnie.\n\n**4. Konwersja** – Po kilku dniach/tygodniach ta osoba rezerwuje wizytę. Lejek zadziałał!"
            },
            {
              id: "formaty-mockup-1",
              type: "mockup",
              content: "Reels z metamorfozą – format o największym zasięgu:",
              mockupData: {
                platform: "instagram",
                variant: "reel",
                description: "Reels to format z największym zasięgiem organicznym. Metamorfoza przed/po w 15 sekund + trending audio = przepis na viralowy content, który przyciągnie nowe obserwujące."
              }
            },
            {
              id: "formaty-warning-1",
              type: "warning",
              content: "Nie rób Reelsów 'bo wszyscy robią'. Jeśli nienawidzisz być przed kamerą i każdy Reels to dla Ciebie trauma – skup się na karuzelach i Stories. Autentyczność > trendy. Ale jeśli możesz – spróbuj chociaż prostych Reelsów (timelapse, metamorfoza bez mówienia)."
            }
          ],
          tasks: [
            {
              id: "task-formaty-1",
              title: "Wybierz swoje główne formaty",
              description: "Zdecyduj, które 2-3 formaty będziesz robić REGULARNIE. Zapisz je i trzymaj się planu."
            },
            {
              id: "task-formaty-2",
              title: "Dopasuj formaty do filarów",
              description: "Dla każdego filaru zdecyduj, w jakim formacie najlepiej go realizować. Stwórz tabelkę."
            },
            {
              id: "task-formaty-3",
              title: "Eksperyment z nowym formatem",
              description: "Jeśli nie robisz Reels – spróbuj zrobić jeden prosty (np. timelapse zabiegu). Sprawdź zasięg."
            }
          ],
          checklist: [
            { id: "check-formaty-1", text: "Znam różnice między formatami i ich zastosowania" },
            { id: "check-formaty-2", text: "Wybrałam 2-3 formaty, na których się skupię" },
            { id: "check-formaty-3", text: "Rozumiem, jak formaty współpracują jak lejek" },
            { id: "check-formaty-4", text: "Mam realistyczny plan, który jestem w stanie utrzymać" }
          ],
          keyTakeaways: [
            "Reels mają największy zasięg organiczny – przyciągają nowych",
            "Karuzele generują wysokie zaangażowanie – idealne do edukacji",
            "Nie musisz robić wszystkiego – wybierz 2-3 formaty i rób je DOBRZE",
            "Lejek: Reels przyciągają → Posty przekonują → Stories budują relację → Rezerwacja"
          ],
          nextLessonTitle: "Częstotliwość publikacji"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 3 - CZĘSTOTLIWOŚĆ PUBLIKACJI
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "czestotliwosc-publikacji",
          title: "Częstotliwość publikacji",
          description: "Ustal optymalną częstotliwość publikowania treści dla Twojego salonu.",
          estimatedMinutes: 15,
          intro: "Ile razy w tygodniu publikować? Codziennie? Co drugi dzień? A może raz w tygodniu wystarczy? Social media guru krzyczą 'publikuj codziennie!', a Ty masz salon do prowadzenia. W tej lekcji rozwiejemy mity i ustalimy REALISTYCZNY plan, który naprawdę jesteś w stanie utrzymać – bo to regularność wygrywa, nie ilość.",
          sections: [
            {
              id: "czest-heading-1",
              type: "heading",
              content: "Mit codziennego publikowania"
            },
            {
              id: "czest-text-1",
              type: "text",
              content: "Słyszałaś pewnie od guru social media, że 'trzeba publikować codziennie'. Daily content, consistency, algorytm wymaga codzienności!\n\n**Prawda dla salonu beauty?** Codzienne posty NIE są konieczne. Nie jesteś influencerką, której jedyna praca to social media. Masz salon do prowadzenia!\n\nWażniejsza jest **REGULARNOŚĆ niż ILOŚĆ**. Lepiej 3 posty w tygodniu konsekwentnie przez 6 miesięcy, niż 10 postów w jednym tygodniu i cisza przez miesiąc. Algorytm uczy się Twojego rytmu. Obserwujący uczą się, kiedy oczekiwać treści. Regularność buduje nawyk – u Ciebie i u nich."
            },
            {
              id: "czest-warning-1",
              type: "warning",
              content: "Nierealistyczne cele prowadzą do WYPALENIA. Obiecujesz sobie 'post dziennie', wytrzymujesz 2 tygodnie z entuzjazmem, potem 2 tygodnie z wysiłkiem, potem znika motywacja i nie publikujesz NIC przez miesiąc. Lepiej mniej, ale REGULARNIE. Konserwatywny plan, którego się trzymasz > ambitny plan, który porzucisz."
            },
            {
              id: "czest-heading-2",
              type: "heading",
              content: "Minimum vs optimum vs maksimum"
            },
            {
              id: "czest-text-2",
              type: "text",
              content: "Oto realistyczne wytyczne dla salonu beauty. Wybierz poziom, który pasuje do Twojego życia i możliwości:"
            },
            {
              id: "czest-step-1",
              type: "step",
              stepNumber: 1,
              content: "**MINIMUM (utrzymanie profilu):**\n• Feed: 2-3 posty/Reelsy TYGODNIOWO\n• Stories: 3-5 dni w tygodniu\n• To absolutne minimum, żeby profil wyglądał aktywnie i algorytm o Tobie nie zapomniał"
            },
            {
              id: "czest-step-2",
              type: "step",
              stepNumber: 2,
              content: "**OPTIMUM (wzrost profilu):**\n• Feed: 4-5 postów/Reelsów TYGODNIOWO\n• Stories: codziennie (3-7 Stories)\n• Więcej Reelsów = większy zasięg i szybszy wzrost\n• Realistyczne dla kogoś z 1-2h dziennie na social media"
            },
            {
              id: "czest-step-3",
              type: "step",
              stepNumber: 3,
              content: "**MAKSIMUM (intensywny wzrost):**\n• Feed: codziennie lub prawie codziennie\n• Stories: kilkanaście dziennie\n• Realne tylko przy wsparciu (asystent, delegowanie) lub poświęceniu kilku godzin dziennie\n• Dla ambitnych z dużymi celami wzrostowymi"
            },
            {
              id: "czest-quiz-1",
              type: "quiz",
              content: "Quiz: Wybierz realistyczną opcję",
              quiz: {
                question: "Kasia pracuje w salonie 6 dni w tygodniu, ma dziecko i dom na głowie. Ile treści powinna planować?",
                options: [
                  "Post dziennie – inaczej algorytm ją zignoruje",
                  "2-3 posty tygodniowo + Stories gdy ma chwilę",
                  "Nic – przy takim życiu social media to niemożliwe",
                  "10 postów tygodniowo, żeby nadrobić zaległości"
                ],
                correctIndex: 1,
                explanation: "MINIMUM to 2-3 posty tygodniowo + Stories kilka razy. To realistyczne nawet przy napiętym grafiku. Lepiej robić to KONSEKWENTNIE niż zacząć ambitnie i porzucić po 2 tygodniach. Czas na content można znaleźć: 15 minut rano, Stories przy kawie, planowanie w niedzielę."
              }
            },
            {
              id: "czest-comparison-1",
              type: "comparison",
              content: "Regularność vs ilość",
              comparison: {
                good: {
                  title: "Regularność",
                  description: "3 posty tygodniowo przez 6 miesięcy = 72 posty, stały wzrost, nawyk, algorytm Cię zna.",
                  example: "Obserwujący wiedzą: 'O, pn/śr/pt ma nowy post, sprawdzę!'"
                },
                bad: {
                  title: "Rwana aktywność",
                  description: "10 postów, miesiąc przerwy, 5 postów, 2 miesiące przerwy. Chaos.",
                  example: "Algorytm: 'Nie wiem, czy to aktywne konto...'. Obserwujący: 'A, ona jeszcze prowadzi salon?'"
                }
              }
            },
            {
              id: "czest-heading-3",
              type: "heading",
              content: "Jak ustalić SWOJĄ częstotliwość"
            },
            {
              id: "czest-text-3",
              type: "text",
              content: "Odpowiedz sobie SZCZERZE na te pytania:\n\n**1. Ile czasu REALNIE masz?** – Nie ile chciałabyś mieć, ale ile NAPRAWDĘ możesz poświęcić CODZIENNIE. 15 minut? 30? Godzinę?\n\n**2. Ile treści możesz STWORZYĆ?** – Ile zdjęć/wideo jesteś w stanie zrobić przy codziennej pracy? Czy masz czas na edycję?\n\n**3. Co jesteś w stanie utrzymać przez PÓŁ ROKU?** – To KLUCZOWE pytanie. Bo social media to maraton, nie sprint. Plan musi być możliwy do utrzymania DŁUGOTERMINOWO."
            },
            {
              id: "czest-tip-1",
              type: "tip",
              content: "Zacznij od MINIMUM i zwiększaj. Jeśli założysz 2 posty tygodniowo i będziesz to trzymać przez miesiąc bez wysiłku – zwiększ do 3. Lepiej ROSNĄĆ niż zacząć wysoko i SPAŚĆ. Psychologicznie – sukces (udało mi się!) motywuje bardziej niż porażka (nie dałam rady...)."
            },
            {
              id: "czest-heading-4",
              type: "heading",
              content: "Stories rządzą się innymi prawami"
            },
            {
              id: "czest-text-4",
              type: "text",
              content: "Stories są ŁATWIEJSZE do tworzenia niż posty. Nie wymagają perfekcji. Mogą być spontaniczne, nieidealne, z ręki. I właśnie o to chodzi!\n\n**Dlatego Stories możesz robić CODZIENNIE**, nawet jeśli posty wrzucasz tylko 2-3x tygodniowo. 5 minut dziennie = aktywne Stories.\n\nCo publikować na Stories?\n• Poranne 'cześć' z kawą (10 sekund)\n• Zabieg w trakcie – krótki filmik (15 sekund)\n• Efekt końcowy prosto spod lampy (zdjęcie)\n• Pytanie do obserwujących (ankieta, quiz)\n• Zapowiedź wolnych terminów\n• Cokolwiek z życia salonu\n\nStories to RELACJA, nie portfolio. Bądź sobą!"
            },
            {
              id: "czest-example-1",
              type: "example",
              content: "**Realistyczny plan dla zapracowanej właścicielki salonu:**\n\n• Poniedziałek: 1 post z efektem (zdjęcie z piątku) + Stories z poranku\n• Wtorek: Stories z kulis pracy\n• Środa: 1 Reels (np. timelapse nagrany dzień wcześniej) + Stories\n• Czwartek: Stories z kulis\n• Piątek: 1 post edukacyjny (przygotowany w niedzielę) + Stories\n• Weekend: Stories (wolne terminy, życie prywatne jeśli chcesz)\n\n**= 3 posty/Reelsy + Stories prawie codziennie = aktywny, rosnący profil**"
            },
            {
              id: "czest-quiz-2",
              type: "quiz",
              content: "Quiz: Zdiagnozuj błąd",
              quiz: {
                question: "Magda publikowała 7 dni w tygodniu przez 2 tygodnie, potem nic przez miesiąc, potem znowu intensywnie przez tydzień. Co poszło nie tak?",
                options: [
                  "Za mało treści w intensywnych okresach",
                  "Nierealistyczny plan – wypalenie, bo zaczęła za ambitnie",
                  "Algorytm jej nie lubi",
                  "Powinna była publikować więcej w przerwach"
                ],
                correctIndex: 1,
                explanation: "Klasyczne WYPALENIE. Zaczęła zbyt ambitnie (codziennie!), wytrzymała 2 tygodnie, potem brak energii i motywacji = cisza. Lepiej było zacząć od 3 postów tygodniowo i trzymać się tego KONSEKWENTNIE."
              }
            }
          ],
          tasks: [
            {
              id: "task-czest-1",
              title: "Ustal swoją częstotliwość",
              description: "Odpowiedz szczerze: ile postów/Reelsów tygodniowo i ile dni ze Stories jesteś w stanie utrzymać przez 6 miesięcy?"
            },
            {
              id: "task-czest-2",
              title: "Przetestuj przez 2 tygodnie",
              description: "Trzymaj się ustalonego planu przez 2 tygodnie. Sprawdź, czy jest realistyczny. Jeśli łatwy – zwiększ. Jeśli trudny – zmniejsz."
            },
            {
              id: "task-czest-3",
              title: "Znajdź swój czas na content",
              description: "Kiedy możesz tworzyć treści? Rano przed salonem? Wieczorem? W przerwie? Zapisz konkretne 'okienka czasowe'."
            }
          ],
          checklist: [
            { id: "check-czest-1", text: "Ustaliłam realistyczną częstotliwość publikacji" },
            { id: "check-czest-2", text: "Wiem, ile czasu mogę poświęcić na tworzenie treści" },
            { id: "check-czest-3", text: "Rozumiem różnicę między minimum a optimum" },
            { id: "check-czest-4", text: "Mam plan na Stories – wiem jak robić je szybko" }
          ],
          keyTakeaways: [
            "Regularność > ilość – lepiej 3x tygodniowo przez pół roku niż codziennie przez tydzień",
            "Minimum dla salonu: 2-3 posty tygodniowo + Stories 3-5 dni",
            "Zacznij od minimum i zwiększaj gdy ogarniesz – lepiej rosnąć niż spadać",
            "Stories są łatwiejsze – mogą być codzienne nawet przy rzadszych postach"
          ],
          nextLessonTitle: "Spontaniczność vs plan"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 4 - SPONTANICZNOŚĆ VS PLAN
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "spontanicznosc-vs-plan",
          title: "Spontaniczność vs plan",
          description: "Naucz się łączyć zaplanowane treści z spontanicznymi momentami.",
          estimatedMinutes: 15,
          intro: "Czy wszystko trzeba planować? Czy spontaniczne Stories są OK? Czy jak mam kalendarz treści, to nie mogę wrzucić czegoś 'z głowy'? W tej lekcji znajdziesz złoty środek między sztywnym planem (który czujesz jak więzienie) a totalnym chaosem (który kończy się brakiem publikacji). Najlepsze profile łączą jedno i drugie.",
          sections: [
            {
              id: "spont-heading-1",
              type: "heading",
              content: "Dwa bieguny: chaos vs sztywność"
            },
            {
              id: "spont-text-1",
              type: "text",
              content: "Są dwa ekstremalne podejścia do tworzenia treści:\n\n**TOTALNY CHAOS** – Publikujesz gdy masz natchnienie. Czasem 5 postów tygodniowo, czasem 0. Czasem świetne treści, czasem desperackie 'muszę coś wrzucić'. Brak planu = stres codziennie rano.\n\n**SZTYWNY PLAN** – Wszystko zaplanowane na miesiąc do przodu, grafiki gotowe, teksty napisane. Zero miejsca na spontan. Profil wygląda jakby prowadził go robot. Brak autentyczności.\n\n**Żaden z tych extremów nie działa dobrze.** Potrzebujesz planu, który daje strukturę, ale zostawia miejsce na życie, spontaniczność, autentyczne momenty."
            },
            {
              id: "spont-comparison-1",
              type: "comparison",
              content: "Podejścia do planowania",
              comparison: {
                good: {
                  title: "Elastyczny plan",
                  description: "Masz zaplanowaną strukturę (tematy, dni), ale zostawiasz miejsce na aktualne wydarzenia i spontan.",
                  example: "Klientka myśli: 'Ten profil jest profesjonalny, ale też autentyczny – podoba mi się!'"
                },
                bad: {
                  title: "Ekstremy",
                  description: "Totalny chaos (stres, brak regularności) lub sztywny plan bez miejsca na życie (robotyczność).",
                  example: "Chaos: 'Ojej, znowu nie wrzuciłam nic...'. Sztywność: 'Ten profil jest jakiś... sztuczny.'"
                }
              }
            },
            {
              id: "spont-heading-2",
              type: "heading",
              content: "Zasada 70/30"
            },
            {
              id: "spont-text-2",
              type: "text",
              content: "Sprawdzona proporcja, która działa dla większości salonów:\n\n**70% ZAPLANOWANE** – Znasz tematy z góry, masz przygotowane materiały, wiesz co wrzucisz w który dzień. To daje spokój i regularność.\n\n**30% SPONTANICZNE** – Miejsce na aktualne wydarzenia, trendy, 'chwilowe' momenty z życia salonu. To daje autentyczność i świeżość.\n\nTa proporcja oznacza: jeśli publikujesz 10 treści tygodniowo (posty + Stories), 7 jest zaplanowanych, 3 spontaniczne. Masz strukturę, ale nie czujesz się w klatce."
            },
            {
              id: "spont-step-1",
              type: "step",
              stepNumber: 1,
              content: "**PLANUJ:** Portfolio (zdjęcia efektów – wiesz że je będziesz mieć), posty edukacyjne (tematy możesz przygotować z góry), promocje i oferty (wiesz kiedy będą), ważne informacje (godziny, urlop), święta i okazje (są w kalendarzu)."
            },
            {
              id: "spont-step-2",
              type: "step",
              stepNumber: 2,
              content: "**SPONTANICZNIE:** Kulisy dnia codziennego (nie wiesz co się wydarzy), reakcje na trendy (pojawiają się nagle), nieplanowane 'wow' momenty (wyjątkowa metamorfoza), życie prywatne (w granicach komfortu), aktualne wydarzenia i pogoda."
            },
            {
              id: "spont-tip-1",
              type: "tip",
              content: "Stories to IDEALNE miejsce na spontan. Posty mogą być w 90% zaplanowane, Stories – w 90% spontaniczne. To daje profil ze strukturą na feedzie i autentycznością na Stories. Najlepsze z obu światów!"
            },
            {
              id: "spont-quiz-1",
              type: "quiz",
              content: "Quiz: Gdzie to wrzucić?",
              quiz: {
                question: "Jest środa, w planie masz post edukacyjny. Ale właśnie zrobiłaś NIESAMOWITĄ metamorfozę i musisz ją pokazać. Co robisz?",
                options: [
                  "Trzymam się planu – metamorfoza poczeka do przyszłego tygodnia",
                  "Wyrzucam plan – wrzucam tylko metamorfozę",
                  "Metamorfoza na Stories TERAZ, planowy post edukacyjny o 18:00",
                  "Rezygnuję ze wszystkiego – zbyt dużo opcji"
                ],
                correctIndex: 2,
                explanation: "Elastyczny plan! Metamorfoza jest 'gorąca' – wrzuć ją na Stories od razu, emocje są świeże. Zaplanowany post edukacyjny publikujesz zgodnie z planem. Masz spontan I strukturę. Win-win!"
              }
            },
            {
              id: "spont-heading-3",
              type: "heading",
              content: "Co ZAWSZE planować z wyprzedzeniem"
            },
            {
              id: "spont-text-3",
              type: "text",
              content: "Niektóre treści powinny być ZAWSZE zaplanowane – bo wymagają przygotowania lub są przewidywalne:"
            },
            {
              id: "spont-example-1",
              type: "example",
              content: "**ZAWSZE PLANUJ:**\n\n📅 **Święta i okazje** – Dzień Matki, Walentynki, święta – zaplanuj posty 2 tygodnie wcześniej\n📣 **Promocje** – Przygotuj grafiki i teksty z wyprzedzeniem\n🏖️ **Luki urlopowe** – Przed urlopem przygotuj posty do publikacji\n📢 **Ważne ogłoszenia** – Zmiana godzin, nowe usługi, cennik\n📚 **Posty edukacyjne** – Tematy i teksty możesz napisać z góry\n\n**ZOSTAW MIEJSCE NA:**\n\n🔥 Aktualny trend na Instagramie\n✨ Wyjątkową metamorfozę, którą właśnie zrobiłaś\n☕ Spontaniczne Stories z dnia\n🌧️ Reakcję na pogodę/wydarzenia\n💬 Odpowiedzi na pytania od klientek"
            },
            {
              id: "spont-heading-4",
              type: "heading",
              content: "Praktyka: zostawianie miejsca na spontan"
            },
            {
              id: "spont-text-4",
              type: "text",
              content: "Jak praktycznie zostawić miejsce na spontan w kalendarzu?\n\n**Jeśli planujesz 3 posty tygodniowo:**\n• 2 zaplanuj z góry (edukacja, portfolio)\n• 1 zostaw na 'cokolwiek aktualnego' – może być metamorfoza, może trend, może cokolwiek\n\n**Jeśli planujesz 5 postów tygodniowo:**\n• 3-4 zaplanuj\n• 1-2 spontaniczne\n\n**Stories?** W większości spontaniczne – to ich natura. Nie planuj Stories na miesiąc do przodu (chyba że to promocja czy ogłoszenie)."
            },
            {
              id: "spont-warning-1",
              type: "warning",
              content: "Spontaniczność ≠ brak jakości. Nawet spontaniczny post powinien być estetyczny i spójny z profilem. 'Spontan' to TEMAT i TIMING, nie jakość wykonania. Zdjęcie z ręki na Stories – ok. Rozmazane, ciemne zdjęcie na feed – nie ok."
            },
            {
              id: "spont-quiz-2",
              type: "quiz",
              content: "Quiz: Rozpoznaj problem",
              quiz: {
                question: "Ola ma wszystko zaplanowane na 2 miesiące do przodu. Zero stresu, ale obserwujący komentują że jej profil jest 'jakiś sztuczny' i 'bez życia'. Co jest nie tak?",
                options: [
                  "Planuje za daleko – powinna planować max tydzień",
                  "Za mało spontanu – profil wygląda robotycznie, brak autentyczności",
                  "Złe tematy postów",
                  "Publikuje za rzadko"
                ],
                correctIndex: 1,
                explanation: "100% planu = 0% autentyczności. Profile, które wyglądają 'perfekcyjnie' ale 'sztuczne' nie budują relacji. Ludzie chcą widzieć CZŁOWIEKA, nie maszynę do contentu. Ola potrzebuje dodać spontaniczne Stories, reagować na bieżąco, pokazać życie salonu."
              }
            },
            {
              id: "spont-mockup-1",
              type: "mockup",
              content: "Spontaniczne Stories vs zaplanowany post – obie formy są potrzebne:",
              mockupData: {
                platform: "instagram",
                variant: "story",
                storyType: "photo",
                description: "Stories: 'Poniedziałkowy poranek i kawa przed pierwszą klientką ☕' – spontaniczne, ludzkie, budują relację.\n\nPost: Profesjonalne zdjęcie efektu z przemyślanym tekstem – zaplanowane, budują portfolio.\n\nOBA są potrzebne!"
              }
            }
          ],
          tasks: [
            {
              id: "task-spont-1",
              title: "Ustal proporcję planu do spontanu",
              description: "Zdecyduj: ile % Twoich treści będzie planowanych, a ile spontanicznych? Zapisz to."
            },
            {
              id: "task-spont-2",
              title: "Zrób listę 'do planowania'",
              description: "Wypisz nadchodzące okazje, święta i wydarzenia na najbliższe 3 miesiące, które MUSISZ zaplanować."
            },
            {
              id: "task-spont-3",
              title: "Przygotuj się na spontan",
              description: "Gdzie będziesz trzymać spontaniczne pomysły? Notatki w telefonie? Folder 'do wrzucenia'? Stwórz system."
            }
          ],
          checklist: [
            { id: "check-spont-1", text: "Rozumiem zasadę 70/30" },
            { id: "check-spont-2", text: "Wiem, co planować a co zostawiać na spontan" },
            { id: "check-spont-3", text: "Mam listę nadchodzących okazji do zaplanowania" },
            { id: "check-spont-4", text: "Mam system na spontaniczne pomysły" }
          ],
          keyTakeaways: [
            "Złota proporcja: 70% planu + 30% spontanu",
            "Planuj: portfolio, edukację, promocje, święta",
            "Spontan: kulisy, trendy, Stories, wyjątkowe momenty",
            "Stories to idealne miejsce na spontaniczność – feed może być bardziej zaplanowany"
          ],
          nextLessonTitle: "Organizacja treści w czasie"
        },

        // ═══════════════════════════════════════════════════════════════════
        // LEKCJA 5 - ORGANIZACJA TREŚCI W CZASIE
        // ═══════════════════════════════════════════════════════════════════
        {
          id: "organizacja-tresci",
          title: "Organizacja treści w czasie",
          description: "Naucz się planować treści w kalendarzu i organizować pracę nad contentem.",
          estimatedMinutes: 20,
          intro: "Oto moment, w którym teoria staje się praktyką. W tej lekcji zbudujesz SYSTEM organizacji treści. Poznasz narzędzia do planowania, nauczysz się tworzyć kalendarz contentowy i zorganizujesz pracę tak, żeby publikowanie nie było codziennym stresem. Bo content bez systemu = chaos. Content z systemem = spokój.",
          sections: [
            {
              id: "org-heading-1",
              type: "heading",
              content: "Dlaczego potrzebujesz kalendarza treści"
            },
            {
              id: "org-text-1",
              type: "text",
              content: "Bez kalendarza każdy dzień zaczyna się od pytania 'co dziś wrzucić?'. To stresujące i prowadzi do:\n\n• Publikowania byle czego 'bo trzeba'\n• Zapominania o ważnych okazjach (Dzień Matki? Ups...)\n• Nierównomiernych treści (same efekty albo sama sprzedaż)\n• Wypalenia i porzucenia profilu\n• Codziennego stresu zamiast spokoju\n\n**Kalendarz treści** to Twój plan na tydzień lub miesiąc. Wiesz z góry, co publikujesz. Materiały są przygotowane. Budzisz się rano, otwierasz kalendarz, publikujesz gotowy post. Zero stresu, zero 'co wrzucić?', zero paniki."
            },
            {
              id: "org-comparison-1",
              type: "comparison",
              content: "Z planem vs bez planu",
              comparison: {
                good: {
                  title: "Z kalendarzem treści",
                  description: "Wiesz co wrzucić, materiały gotowe, zero stresu, spójny profil. Publikowanie trwa 5 minut.",
                  example: "Poniedziałek rano: Otwieram kalendarz → 'Ah, dziś post z metamorfozą' → Publikuję → Idę robić paznokcie 💅"
                },
                bad: {
                  title: "Bez kalendarza",
                  description: "Codzienne 'co wrzucić?', stres, szukanie zdjęć, wymyślanie tekstów, przypadkowe treści.",
                  example: "Poniedziałek rano: 'Co wrzucić? Nie mam zdjęć... Może jutro...' → Tydzień bez postu"
                }
              }
            },
            {
              id: "org-heading-2",
              type: "heading",
              content: "Narzędzia do planowania – wybierz swoje"
            },
            {
              id: "org-text-2",
              type: "text",
              content: "Nie musisz mieć drogich aplikacji. Oto opcje od najprostszych do zaawansowanych – wybierz to, co będziesz NAPRAWDĘ używać:"
            },
            {
              id: "org-step-1",
              type: "step",
              stepNumber: 1,
              content: "**Notatki w telefonie** – DARMOWE, PROSTE. Lista z dniami tygodnia i tematami. Działa? Działa. Dla tych, którzy nie lubią nowych aplikacji."
            },
            {
              id: "org-step-2",
              type: "step",
              stepNumber: 2,
              content: "**Google Calendar** – DARMOWY. Tworzysz wydarzenia 'Post: metamorfoza', 'Post: porada'. Przypomnienia automatyczne. Synchronizacja z telefonem."
            },
            {
              id: "org-step-3",
              type: "step",
              stepNumber: 3,
              content: "**Notion/Trello** – DARMOWE (podstawowa wersja). Bardziej wizualne. Karty z pomysłami, które przesuwasz między kolumnami: Pomysł → W przygotowaniu → Gotowe → Opublikowane. Dla wzrokowców."
            },
            {
              id: "org-step-4",
              type: "step",
              stepNumber: 4,
              content: "**Later/Planoly/Buffer** – PŁATNE (mają darmowe limity). Planowanie + automatyczne publikowanie + podgląd feedu. Dla bardziej zaawansowanych lub tych, którzy chcą automatyzacji."
            },
            {
              id: "org-tip-1",
              type: "tip",
              content: "Najlepsze narzędzie to takie, którego BĘDZIESZ UŻYWAĆ. Skomplikowana aplikacja, której nie otwierasz, jest bezużyteczna. Proste notatki w telefonie, które sprawdzasz codziennie? Bezcenne. Zacznij od prostego i rozbudowuj gdy potrzebujesz."
            },
            {
              id: "org-quiz-1",
              type: "quiz",
              content: "Quiz: Wybierz narzędzie",
              quiz: {
                question: "Ania nie lubi technologii, ma telefon z podstawowymi funkcjami i chce najprostsze rozwiązanie. Co wybrać?",
                options: [
                  "Later – bo automatyzuje publikowanie",
                  "Notion – bo jest wizualne i modne",
                  "Notatki w telefonie – proste, zawsze pod ręką",
                  "Arkusz Google – profesjonalne rozwiązanie"
                ],
                correctIndex: 2,
                explanation: "Dla osoby, która 'nie lubi technologii', notatki w telefonie to NAJLEPSZE rozwiązanie. Zero nauki nowej aplikacji, zawsze pod ręką, proste edytowanie. Lepsze proste narzędzie UŻYWANE niż zaawansowane IGNOROWANE."
              }
            },
            {
              id: "org-heading-3",
              type: "heading",
              content: "Tworzenie kalendarza krok po kroku"
            },
            {
              id: "org-text-3",
              type: "text",
              content: "Raz w tygodniu (np. w niedzielę wieczorem) poświęć 30 minut na planowanie. To inwestycja, która oszczędza godziny stresu w tygodniu:"
            },
            {
              id: "org-step-5",
              type: "step",
              stepNumber: 1,
              content: "**Sprawdź nadchodzące okazje** – Czy są święta, wydarzenia, promocje w tym tygodniu? Dzień Kobiet? Pierwsza wiosna? Wpisz je."
            },
            {
              id: "org-step-6",
              type: "step",
              stepNumber: 2,
              content: "**Przydziel filary do dni** – Np. poniedziałek = efekty, środa = edukacja, piątek = kulisy. Stały rytm ułatwia wszystko."
            },
            {
              id: "org-step-7",
              type: "step",
              stepNumber: 3,
              content: "**Wybierz KONKRETNE tematy** – Nie 'edukacja', ale 'post o pielęgnacji hybryd – 3 błędy'. Konkret, nie ogólnik."
            },
            {
              id: "org-step-8",
              type: "step",
              stepNumber: 4,
              content: "**Sprawdź materiały** – Czy masz zdjęcia do tych postów? Jeśli nie – zaplanuj sesję lub zanotuj, żeby zrobić w trakcie tygodnia."
            },
            {
              id: "org-example-1",
              type: "example",
              content: "**Przykładowy tydzień w kalendarzu:**\n\n📅 **Poniedziałek:**\n• Filar: Efekty\n• Temat: French na kwadracie – przed/po\n• Format: Karuzela\n• Materiały: ✅ gotowe (z piątku)\n\n📅 **Środa:**\n• Filar: Edukacja\n• Temat: 3 błędy w pielęgnacji hybryd\n• Format: Reels\n• Materiały: ⏳ nagrać we wtorek\n\n📅 **Piątek:**\n• Filar: Kulisy\n• Temat: Mój poranny rytuał w salonie\n• Format: Post ze zdjęciem\n• Materiały: 📸 zrobić w piątek rano"
            },
            {
              id: "org-heading-4",
              type: "heading",
              content: "Batch working – twórz treści partiami"
            },
            {
              id: "org-text-4",
              type: "text",
              content: "Zamiast CODZIENNIE wymyślać i tworzyć (co jest wyczerpujące), grupuj podobne zadania:\n\n• **Sesja zdjęciowa** – Raz w tygodniu rób zdjęcia kilku prac NARAZ. Lepsze światło, szybsze, więcej materiału.\n• **Dzień pisania** – W niedzielę napisz teksty do 5 postów. Wszystkie naraz, jeden flow.\n• **Dzień nagrywania** – Nagraj 2-3 Reelsy w jeden wieczór. Raz się przygotuj, kilka razy nagraj.\n\nTo EFEKTYWNIEJSZE niż codzienne przeskakiwanie między zadaniami. Jeden 'content day' = spokój przez cały tydzień."
            },
            {
              id: "org-tip-2",
              type: "tip",
              content: "Wybierz stały 'content day' – np. niedziela 17:00-18:30. Planujesz tydzień, piszesz teksty, sprawdzasz materiały. Reszta tygodnia to tylko publikowanie (5 minut) i spontaniczne Stories. SYSTEM działa."
            },
            {
              id: "org-quiz-2",
              type: "quiz",
              content: "Quiz: Poranek bez stresu",
              quiz: {
                question: "Jest wtorek rano, o 12:00 masz zaplanowany post. Jak wygląda Twój scenariusz z kalendarzem vs bez?",
                options: [
                  "Z kalendarzem: O 11:45 szukam zdjęcia i wymyślam tekst",
                  "Bez kalendarza: Post gotowy od niedzieli, tylko publikuję",
                  "Z kalendarzem: Post gotowy od niedzieli, tylko publikuję o 12:00",
                  "Bez kalendarza: Post gotowy, bo mam świetną pamięć"
                ],
                correctIndex: 2,
                explanation: "Z kalendarzem i batch workingiem Twój wtorek wygląda tak: otwierasz przygotowany post, publikujesz, idziesz do pracy z klientkami. ZERO stresu, bo wszystko zaplanowałaś w niedzielę. To jest moc systemu!"
              }
            },
            {
              id: "org-mockup-1",
              type: "mockup",
              content: "Prosty kalendarz treści w praktyce:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "KALENDARZ TREŚCI – TYDZIEŃ 12\n\n🔵 Pn: Efekty – french pink (karuzela) ✅\n🟢 Śr: Edukacja – pielęgnacja hybryd (Reels) ⏳\n🟡 Pt: Kulisy – poranna rutyna (post) 📸\n\n✅ = gotowe\n⏳ = do nagrania\n📸 = do zrobienia zdjęcia\n\nProste? Proste. Działa? Działa!",
                postLikes: "89",
                postComments: "12",
                description: "Nawet najprostszy kalendarz (notatki w telefonie!) eliminuje codzienne 'co wrzucić?' i daje spokój."
              }
            },
            {
              id: "org-warning-1",
              type: "warning",
              content: "Nie planuj zbyt daleko! Miesiąc do przodu to max dla większości salonów. Dłużej = za dużo może się zmienić, tracisz elastyczność na spontan. Optymalnie: planuj tydzień szczegółowo, miesiąc ogólnie."
            }
          ],
          tasks: [
            {
              id: "task-org-1",
              title: "Wybierz narzędzie do planowania",
              description: "Zdecyduj, jakiego narzędzia będziesz używać (notatki, kalendarz, aplikacja) i ZACZNIJ z niego korzystać."
            },
            {
              id: "task-org-2",
              title: "Stwórz kalendarz na najbliższy tydzień",
              description: "Zaplanuj KONKRETNE treści na każdy dzień publikacji. Filary, tematy, formaty, materiały."
            },
            {
              id: "task-org-3",
              title: "Wyznacz swój 'content day'",
              description: "Wybierz stały dzień i godzinę na planowanie i tworzenie treści. Wpisz to w kalendarz jako stałe wydarzenie."
            },
            {
              id: "task-org-4",
              title: "Przetestuj batch working",
              description: "W najbliższy 'content day' spróbuj napisać teksty do 3-5 postów naraz. Zmierz czas – ile to zajmuje?"
            }
          ],
          checklist: [
            { id: "check-org-1", text: "Wybrałam narzędzie do planowania treści" },
            { id: "check-org-2", text: "Stworzyłam pierwszy kalendarz treści na tydzień" },
            { id: "check-org-3", text: "Mam wyznaczony stały 'content day'" },
            { id: "check-org-4", text: "Rozumiem koncepcję batch workingu" },
            { id: "check-org-5", text: "Wiem jak sprawdzać i przygotowywać materiały z wyprzedzeniem" }
          ],
          keyTakeaways: [
            "Kalendarz treści eliminuje codzienne 'co wrzucić?' i stres",
            "Najprostsze narzędzie, którego UŻYWASZ > skomplikowane, które ignorujesz",
            "Planuj tydzień w niedzielę – 30 minut oszczędza godziny stresu",
            "Batch working = tworzenie treści partiami jest EFEKTYWNIEJSZE niż codzienne tworzenie"
          ]
        }
      ]
    }
  ]
};
