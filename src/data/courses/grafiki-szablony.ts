import { Course } from "@/types/courses";

export const grafikiSzablonyCourse: Course = {
  id: "grafiki-szablony",
  title: "Grafiki i szablony",
  description: "Naucz się tworzyć profesjonalne grafiki dla salonu beauty i wykorzystuj szablony do efektywnej komunikacji wizualnej.",
  icon: "Palette",
  color: "#8b5cf6",
  estimatedHours: 3,
  totalLessons: 5,
  modules: [
    {
      id: "grafiki-szablony-m1",
      title: "Grafiki i szablony",
      description: "Kompleksowy przewodnik po grafikach i szablonach dla salonu beauty",
      lessons: [
        {
          id: "kiedy-uzywac-grafik",
          title: "Kiedy używać grafik",
          description: "Dowiedz się, w jakich sytuacjach grafiki są lepsze niż zdjęcia i jak je skutecznie stosować",
          estimatedMinutes: 12,
          objectives: [
            "Zrozumienie różnicy między zdjęciami a grafikami",
            "Identyfikacja sytuacji idealnych do użycia grafik",
            "Dopasowanie typu grafiki do celu komunikacji"
          ],
          sections: [
            {
              id: "kiedy-grafiki-1",
              type: "text",
              content: "Grafiki i zdjęcia to dwa różne narzędzia komunikacji wizualnej. Każde ma swoje zastosowanie i zalety. Kluczem jest wiedzieć, kiedy sięgnąć po każde z nich."
            },
            {
              id: "kiedy-grafiki-heading-1",
              type: "heading",
              content: "Kiedy grafika jest lepsza niż zdjęcie?"
            },
            {
              id: "kiedy-grafiki-2",
              type: "text",
              content: "**Grafiki sprawdzają się najlepiej gdy:**\n\n• **Przekazujesz informacje** – cenniki, godziny otwarcia, regulaminy\n• **Tworzysz ogłoszenia** – promocje, nowości, wydarzenia\n• **Edukujesz** – porady, wskazówki, instrukcje\n• **Budujesz rozpoznawalność** – cytaty, wartości marki\n• **Nie masz odpowiedniego zdjęcia** – lepiej grafika niż słabe zdjęcie"
            },
            {
              id: "kiedy-grafiki-3",
              type: "comparison",
              content: "Grafika vs zdjęcie – kiedy co wybrać",
              comparison: {
                good: {
                  title: "Użyj grafiki gdy:",
                  description: "Ogłaszasz promocję lub rabat, publikujesz cennik usług, dzielisz się poradą lub wskazówką, informujesz o zmianach (godziny, urlop), tworzysz cykl edukacyjny",
                  example: "Grafiki informacyjne i promocyjne"
                },
                bad: {
                  title: "Użyj zdjęcia gdy:",
                  description: "Pokazujesz efekty pracy, prezentujesz atmosferę salonu, budujesz relację (behind the scenes), pokazujesz produkty w użyciu, chcesz wzbudzić emocje",
                  example: "Zdjęcia budujące emocje i relacje"
                }
              }
            },
            {
              id: "kiedy-grafiki-heading-2",
              type: "heading",
              content: "Rodzaje grafik dla salonu beauty"
            },
            {
              id: "kiedy-grafiki-mockup",
              type: "mockup",
              content: "Post informacyjny z grafiką cennika:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "💅 CENNIK 2024\n\nManicure klasyczny: 60zł\nManicure hybrydowy: 90zł\nŻel na formie: 140zł\n\nZapisz post! 📌",
                postLikes: "89",
                postComments: "12",
                description: "Grafika cennikowa - czytelna i profesjonalna"
              }
            },
            {
              id: "kiedy-grafiki-4",
              type: "text",
              content: "**1. Grafiki informacyjne**\nCenniki, godziny otwarcia, regulaminy, FAQ\n\n**2. Grafiki promocyjne**\nRabaty, oferty specjalne, pakiety, wydarzenia\n\n**3. Grafiki edukacyjne**\nPorady, wskazówki, instrukcje pielęgnacji\n\n**4. Grafiki wizerunkowe**\nCytaty, wartości marki, misja salonu\n\n**5. Grafiki interaktywne**\nAnkiety, pytania, quizy, zagadki"
            },
            {
              id: "kiedy-grafiki-5",
              type: "tip",
              content: "Idealna proporcja na feedzie to około 70% zdjęć i 30% grafik. Zbyt wiele grafik sprawia, że profil wygląda 'sztucznie', zbyt mało – że brakuje mu profesjonalizmu."
            }
          ],
          tasks: [
            {
              id: "task-kiedy-grafiki-1",
              title: "Analiza własnego profilu",
              description: "Przeanalizuj swoje ostatnie 12 postów i policz proporcję zdjęć do grafik"
            },
            {
              id: "task-kiedy-grafiki-2",
              title: "Lista tematów na grafiki",
              description: "Stwórz listę 10 tematów, które w Twoim salonie warto komunikować grafikami"
            }
          ],
          checklist: [
            { id: "check-kiedy-1", text: "Rozumiem różnicę między zastosowaniem zdjęć i grafik" },
            { id: "check-kiedy-2", text: "Wiem, jakie rodzaje grafik pasują do mojego salonu" },
            { id: "check-kiedy-3", text: "Znam idealną proporcję zdjęć do grafik" }
          ],
          keyTakeaways: [
            "Grafiki służą do przekazywania informacji, zdjęcia do budowania emocji",
            "Idealna proporcja to 70% zdjęć i 30% grafik",
            "Lepiej użyć grafiki niż słabego zdjęcia"
          ]
        },
        {
          id: "spojnosc-wizualna",
          title: "Spójność wizualna",
          description: "Jak budować rozpoznawalny styl wizualny salonu w social mediach",
          estimatedMinutes: 15,
          objectives: [
            "Zrozumienie znaczenia spójności wizualnej",
            "Tworzenie własnego stylu graficznego",
            "Utrzymywanie konsekwencji w komunikacji"
          ],
          sections: [
            {
              id: "spojnosc-1",
              type: "text",
              content: "Spójność wizualna to klucz do rozpoznawalności marki. Gdy ktoś scrolluje feed na Facebooku lub Instagramie, powinien od razu rozpoznać Twoje posty – nawet bez patrzenia na nazwę konta."
            },
            {
              id: "spojnosc-heading-1",
              type: "heading",
              content: "Elementy spójności wizualnej"
            },
            {
              id: "spojnosc-2",
              type: "text",
              content: "**1. Paleta kolorów**\nMaksymalnie 3-5 kolorów, które powtarzają się we wszystkich materiałach\n\n**2. Typografia**\n1-2 fonty używane konsekwentnie\n\n**3. Styl grafik**\nPodobny układ, ramki, elementy dekoracyjne\n\n**4. Filtry na zdjęciach**\nTen sam filtr lub preset na wszystkich zdjęciach\n\n**5. Ton komunikacji**\nSpójny styl pisania i zwracania się do odbiorców"
            },
            {
              id: "spojnosc-3",
              type: "comparison",
              content: "Spójny vs niespójny profil",
              comparison: {
                good: {
                  title: "Spójny profil:",
                  description: "Rozpoznawalny na pierwszy rzut oka, buduje profesjonalny wizerunek, zwiększa zaufanie klientów, łatwiejszy do tworzenia (masz system), wygląda jak przemyślana marka",
                  example: "Feed z jednolitą paletą kolorów i stylem"
                },
                bad: {
                  title: "Niespójny profil:",
                  description: "Każdy post wygląda inaczej, brak rozpoznawalności, wrażenie chaosu i przypadkowości, trudniej zapamiętać markę, wygląda nieprofesjonalnie",
                  example: "Losowe kolory, fonty i style w każdym poście"
                }
              }
            },
            {
              id: "spojnosc-heading-2",
              type: "heading",
              content: "Jak stworzyć swój styl?"
            },
            {
              id: "spojnosc-4",
              type: "text",
              content: "**Krok 1: Zbierz inspiracje**\nZnajdź 5-10 profili, których styl Ci się podoba. Co je łączy?\n\n**Krok 2: Określ charakter marki**\nCzy Twój salon jest elegancki? Nowoczesny? Przyjazny? Luksusowy?\n\n**Krok 3: Wybierz paletę kolorów**\nKolor główny + 1-2 kolory uzupełniające + neutralne tła\n\n**Krok 4: Ustal zasady**\nJakie fonty? Jakie elementy graficzne? Jakie filtry?\n\n**Krok 5: Stwórz szablony**\nPrzygotuj szablony dla różnych typów postów"
            },
            {
              id: "spojnosc-5",
              type: "tip",
              content: "Stwórz 'brand board' – jedną grafikę z kolorami, fontami i elementami wizualnymi. Miej ją zawsze pod ręką podczas tworzenia materiałów."
            }
          ],
          tasks: [
            {
              id: "task-spojnosc-1",
              title: "Analiza inspiracji",
              description: "Znajdź 5 profili salonów beauty, których styl Ci się podoba i zapisz, co je wyróżnia"
            },
            {
              id: "task-spojnosc-2",
              title: "Brand board",
              description: "Stwórz prosty brand board z kolorami i fontami dla swojego salonu"
            }
          ],
          checklist: [
            { id: "check-spojnosc-1", text: "Mam określoną paletę kolorów salonu" },
            { id: "check-spojnosc-2", text: "Wiem, jakie fonty pasują do mojej marki" },
            { id: "check-spojnosc-3", text: "Rozumiem znaczenie spójności wizualnej" }
          ],
          keyTakeaways: [
            "Spójność wizualna buduje rozpoznawalność marki",
            "Ogranicz paletę do 3-5 kolorów i 1-2 fontów",
            "Stwórz brand board jako punkt odniesienia"
          ]
        },
        {
          id: "kolory-i-fonty",
          title: "Kolory i fonty",
          description: "Praktyczny przewodnik po doborze kolorów i czcionek dla salonu beauty",
          estimatedMinutes: 18,
          objectives: [
            "Zrozumienie psychologii kolorów",
            "Dobór kolorów do charakteru salonu",
            "Wybór odpowiednich fontów"
          ],
          sections: [
            {
              id: "kolory-1",
              type: "text",
              content: "Kolory i fonty to fundamenty identyfikacji wizualnej. Dobrze dobrane budują odpowiedni wizerunek, źle dobrane – mogą odstraszać potencjalnych klientów."
            },
            {
              id: "kolory-heading-1",
              type: "heading",
              content: "Psychologia kolorów w beauty"
            },
            {
              id: "kolory-2",
              type: "text",
              content: "**Różowy/Pudrowy**\nKobiecość, delikatność, romantyzm – idealne dla salonów kosmetycznych\n\n**Złoty/Beżowy**\nLuksus, elegancja, prestiż – dla salonów premium\n\n**Czarny**\nSophistication, nowoczesność, moda – dla salonów fryzjerskich, stylizacji\n\n**Biały**\nCzystość, minimalizm, świeżość – dla klinik, medycyny estetycznej\n\n**Zielony**\nNaturalność, eko, wellness – dla salonów naturalnych, spa\n\n**Fioletowy**\nKreatywność, tajemniczość, luksus – dla nail art, makijażu"
            },
            {
              id: "kolory-heading-2",
              type: "heading",
              content: "Jak dobrać paletę kolorów?"
            },
            {
              id: "kolory-3",
              type: "text",
              content: "**Zasada 60-30-10:**\n\n• **60%** – kolor dominujący (tła, duże powierzchnie)\n• **30%** – kolor uzupełniający (akcenty, nagłówki)\n• **10%** – kolor wyróżnienia (CTA, ważne elementy)\n\n**Przykład dla salonu kosmetycznego:**\n• 60% – pudrowy róż lub kremowy beż\n• 30% – ciemniejszy róż lub złoty\n• 10% – czarny lub bordowy"
            },
            {
              id: "kolory-heading-3",
              type: "heading",
              content: "Fonty dla salonu beauty"
            },
            {
              id: "kolory-4",
              type: "text",
              content: "**Fonty eleganckie (z szeryfami):**\nPlayfair Display, Cormorant, Bodoni – dla salonów luksusowych\n\n**Fonty nowoczesne (bezszeryfowe):**\nMontserrat, Poppins, Lato – dla salonów nowoczesnych\n\n**Fonty dekoracyjne:**\nTylko do nagłówków i logo, nigdy do dłuższych tekstów\n\n**Zasada:**\nMaksymalnie 2 fonty – jeden do nagłówków, drugi do tekstu"
            },
            {
              id: "kolory-5",
              type: "comparison",
              content: "Dobre vs złe praktyki",
              comparison: {
                good: {
                  title: "Dobrze:",
                  description: "2-3 kolory + neutralne tła, maksymalnie 2 fonty, kontrastowe połączenia (czytelność), spójność z wystrojem salonu, kolory pasujące do grupy docelowej",
                  example: "Przemyślana, spójna paleta kolorów"
                },
                bad: {
                  title: "Źle:",
                  description: "Tęcza kolorów bez ładu, 5 różnych fontów na jednej grafice, słaby kontrast (tekst nieczytelny), neonowe kolory dla salonu premium, przypadkowe dobieranie kolorów",
                  example: "Chaotyczne połączenia bez systemu"
                }
              }
            },
            {
              id: "kolory-6",
              type: "tip",
              content: "Użyj narzędzia Coolors.co do generowania harmonijnych palet kolorów. Możesz też 'podkraść' paletę z inspirującego zdjęcia lub logo."
            }
          ],
          tasks: [
            {
              id: "task-kolory-1",
              title: "Wybór palety",
              description: "Wybierz 3-5 kolorów dla swojego salonu i zapisz ich kody HEX"
            },
            {
              id: "task-kolory-2",
              title: "Dobór fontów",
              description: "Wybierz 2 fonty – jeden do nagłówków, jeden do tekstu"
            }
          ],
          checklist: [
            { id: "check-kolory-1", text: "Mam wybraną paletę kolorów z kodami HEX" },
            { id: "check-kolory-2", text: "Mam wybrane 2 fonty dla salonu" },
            { id: "check-kolory-3", text: "Rozumiem zasadę 60-30-10" }
          ],
          keyTakeaways: [
            "Kolory wywołują emocje – dobieraj je świadomie",
            "Stosuj zasadę 60-30-10 przy budowaniu palety",
            "Ogranicz się do maksymalnie 2 fontów"
          ]
        },
        {
          id: "korzystanie-z-szablonow",
          title: "Korzystanie z szablonów",
          description: "Jak efektywnie wykorzystywać szablony graficzne i oszczędzać czas",
          estimatedMinutes: 15,
          objectives: [
            "Zrozumienie zalet pracy z szablonami",
            "Dostosowywanie szablonów do własnej marki",
            "Tworzenie biblioteki szablonów"
          ],
          sections: [
            {
              id: "szablony-1",
              type: "text",
              content: "Szablony to Twoje narzędzie do szybkiego tworzenia profesjonalnych grafik. Zamiast zaczynać od zera, modyfikujesz gotowy projekt – oszczędzasz czas i utrzymujesz spójność."
            },
            {
              id: "szablony-heading-1",
              type: "heading",
              content: "Zalety pracy z szablonami"
            },
            {
              id: "szablony-2",
              type: "text",
              content: "**1. Oszczędność czasu**\nZamiast 30 minut – 5 minut na grafikę\n\n**2. Spójność wizualna**\nWszystkie grafiki wyglądają profesjonalnie i pasują do siebie\n\n**3. Łatwość tworzenia**\nNie musisz być grafikiem, by tworzyć piękne materiały\n\n**4. Możliwość delegowania**\nKażdy w zespole może tworzyć grafiki według szablonu\n\n**5. Profesjonalny wizerunek**\nKoniec z 'amatorskimi' grafikami"
            },
            {
              id: "szablony-heading-2",
              type: "heading",
              content: "Jak dostosować szablon do swojej marki?"
            },
            {
              id: "szablony-3",
              type: "text",
              content: "**Krok 1: Zmień kolory**\nZastąp kolory szablonu swoją paletą kolorów\n\n**Krok 2: Zmień fonty**\nUstaw swoje firmowe fonty\n\n**Krok 3: Dodaj logo**\nUmieść logo w stałym miejscu\n\n**Krok 4: Dostosuj zdjęcia**\nWstaw własne zdjęcia lub z biblioteki\n\n**Krok 5: Zapisz jako nowy szablon**\nZachowaj dostosowaną wersję do wielokrotnego użytku"
            },
            {
              id: "szablony-heading-3",
              type: "heading",
              content: "Jakie szablony przygotować?"
            },
            {
              id: "szablony-4",
              type: "text",
              content: "**Szablony podstawowe:**\n• Szablon cennika\n• Szablon promocji/rabatu\n• Szablon porady/tip\n• Szablon 'przed i po'\n• Szablon informacyjny (godziny, urlop)\n\n**Szablony dodatkowe:**\n• Szablon cytatu\n• Szablon nowości\n• Szablon opinii klientki\n• Szablon na Stories\n• Szablon na Reels (cover)"
            },
            {
              id: "szablony-5",
              type: "tip",
              content: "Stwórz folder 'Szablony salonu' i zapisz w nim wszystkie dostosowane szablony. Uporządkuj je według typu (cennik, promocja, porada itp.)."
            }
          ],
          tasks: [
            {
              id: "task-szablony-1",
              title: "Dostosowanie szablonu",
              description: "Wybierz jeden szablon z Aurine i dostosuj go do kolorów i fontów swojego salonu"
            },
            {
              id: "task-szablony-2",
              title: "Biblioteka szablonów",
              description: "Stwórz listę 5 typów szablonów, które będą Ci najbardziej potrzebne"
            }
          ],
          checklist: [
            { id: "check-szablony-1", text: "Wiem, jak dostosować szablon do mojej marki" },
            { id: "check-szablony-2", text: "Mam listę szablonów do przygotowania" },
            { id: "check-szablony-3", text: "Rozumiem zalety pracy z szablonami" }
          ],
          keyTakeaways: [
            "Szablony oszczędzają czas i zapewniają spójność",
            "Zawsze dostosuj kolory i fonty do swojej marki",
            "Przygotuj bibliotekę szablonów dla różnych typów postów"
          ]
        },
        {
          id: "najczestsze-bledy-graficzne",
          title: "Najczęstsze błędy graficzne",
          description: "Unikaj typowych błędów, które psują wizerunek profesjonalnego salonu",
          estimatedMinutes: 12,
          objectives: [
            "Identyfikacja najczęstszych błędów graficznych",
            "Zrozumienie dlaczego te błędy szkodzą wizerunkowi",
            "Nauka ich unikania"
          ],
          sections: [
            {
              id: "bledy-graficzne-1",
              type: "text",
              content: "Nawet drobne błędy graficzne mogą sprawić, że Twój salon będzie wyglądał nieprofesjonalnie. Oto najczęstsze pułapki i jak ich unikać."
            },
            {
              id: "bledy-graficzne-2",
              type: "comparison",
              content: "Błędy typograficzne",
              comparison: {
                good: {
                  title: "Prawidłowo:",
                  description: "Maksymalnie 2 fonty na grafice, odpowiedni rozmiar tekstu (czytelny), wystarczający kontrast z tłem, jednolite wyrównanie tekstu, odpowiednie odstępy między liniami",
                  example: "Czytelna, spójna typografia"
                },
                bad: {
                  title: "Błędnie:",
                  description: "5 różnych fontów na jednej grafice, mały tekst nieczytelny na telefonie, biały tekst na jasnym tle, tekst raz wyśrodkowany raz do lewej, słowa 'sklejone' bez odstępów",
                  example: "Chaotyczna, nieczytelna typografia"
                }
              }
            },
            {
              id: "bledy-graficzne-heading-1",
              type: "heading",
              content: "Błędy kolorystyczne"
            },
            {
              id: "bledy-graficzne-3",
              type: "text",
              content: "**1. Zbyt wiele kolorów**\nTęcza kolorów wygląda chaotycznie\n\n**2. Brak kontrastu**\nTekst zlewa się z tłem\n\n**3. Niespójne kolory**\nKażda grafika w innych kolorach\n\n**4. Agresywne kolory**\nNeonowe, jaskrawe – męczą oczy\n\n**5. Niedopasowanie do branży**\nKolory, które nie pasują do beauty"
            },
            {
              id: "bledy-graficzne-heading-2",
              type: "heading",
              content: "Błędy kompozycyjne"
            },
            {
              id: "bledy-graficzne-4",
              type: "text",
              content: "**1. Przeładowanie grafiki**\nZbyt wiele elementów, brak 'powietrza'\n\n**2. Brak hierarchii**\nWszystko tak samo ważne = nic nie jest ważne\n\n**3. Złe kadrowanie**\nUcięte elementy, tekst przy krawędziach\n\n**4. Niskie rozdzielczości**\nRozmazane zdjęcia i grafiki\n\n**5. Niespójny styl**\nMix różnych stylów graficznych"
            },
            {
              id: "bledy-graficzne-heading-3",
              type: "heading",
              content: "Checklist przed publikacją"
            },
            {
              id: "bledy-graficzne-5",
              type: "text",
              content: "Przed opublikowaniem grafiki sprawdź:\n\n• Czy tekst jest czytelny na telefonie?\n• Czy użyłam maksymalnie 2 fontów?\n• Czy kolory są spójne z moją marką?\n• Czy jest wystarczający kontrast?\n• Czy grafika nie jest przeładowana?\n• Czy wszystkie elementy są ostre?\n• Czy logo jest widoczne?\n• Czy nie ma literówek?"
            },
            {
              id: "bledy-graficzne-6",
              type: "tip",
              content: "Zawsze oglądaj gotową grafikę na telefonie przed publikacją. To tam ją zobaczą Twoi odbiorcy – upewnij się, że wszystko jest czytelne."
            }
          ],
          tasks: [
            {
              id: "task-bledy-1",
              title: "Audyt własnych grafik",
              description: "Przejrzyj 5 ostatnich grafik i znajdź błędy z tej lekcji"
            },
            {
              id: "task-bledy-2",
              title: "Checklist",
              description: "Wydrukuj lub zapisz checklistę i używaj jej przed każdą publikacją"
            }
          ],
          checklist: [
            { id: "check-bledy-1", text: "Znam najczęstsze błędy graficzne" },
            { id: "check-bledy-2", text: "Wiem, jak sprawdzić grafikę przed publikacją" },
            { id: "check-bledy-3", text: "Mam checklistę kontrolną" }
          ],
          keyTakeaways: [
            "Mniej znaczy więcej – unikaj przeładowania grafik",
            "Zawsze sprawdzaj czytelność na telefonie",
            "Używaj checklisty przed każdą publikacją"
          ]
        }
      ]
    }
  ]
};
