import { Course } from "@/types/courses";

export const grafikiSzablonyCourse: Course = {
  id: "grafiki-szablony",
  title: "Grafiki i szablony",
  description: "Naucz się tworzyć profesjonalne grafiki dla salonu beauty",
  icon: "Palette",
  color: "#8b5cf6",
  estimatedHours: 1,
  totalLessons: 5,
  modules: [
    {
      id: "grafiki-szablony-m1",
      title: "Grafiki i szablony",
      description: "Praktyczny przewodnik po tworzeniu grafik dla salonu",
      lessons: [
        {
          id: "kiedy-uzywac-grafik",
          title: "Kiedy używać grafik",
          description: "Dowiedz się, kiedy grafika jest lepsza niż zdjęcie",
          estimatedMinutes: 5,
          objectives: [
            "Zrozumiesz różnicę między grafikami a zdjęciami",
            "Dowiesz się, kiedy sięgać po grafiki",
            "Poznasz idealną proporcję na feedzie"
          ],
          sections: [
            {
              id: "section-1-1",
              type: "text",
              content: `# Grafika czy zdjęcie? 🎨

Grafiki i zdjęcia to dwa różne narzędzia. Każde ma swoje zastosowanie – kluczem jest wiedzieć, kiedy sięgnąć po które.

## Kiedy grafika jest lepsza?

📋 **Przekazujesz informacje** – cennik, godziny otwarcia, regulamin
📢 **Ogłaszasz coś** – promocja, nowość w ofercie, wydarzenie
💡 **Edukujesz** – porady pielęgnacyjne, wskazówki, instrukcje
🚫 **Nie masz dobrego zdjęcia** – lepiej grafika niż słabe zdjęcie

Grafiki są idealne do przekazywania konkretnych informacji w uporządkowany sposób. Klientka scrolluje, widzi cennik – od razu wie, o co chodzi.`
            },
            {
              id: "section-1-2",
              type: "text",
              content: `## A kiedy zdjęcie?

Zdjęcie jest lepsze, gdy chcesz:
- Pokazać efekty pracy (paznokcie, fryzury, makijaż)
- Budować relację (behind the scenes, Ty przy pracy)
- Wzbudzić emocje (atmosfera salonu, detale)
- Pokazać produkty w użyciu

## Idealna proporcja na feedzie

Dobra proporcja to około **70% zdjęć i 30% grafik**. Zbyt wiele grafik sprawia, że profil wygląda sztucznie i "marketingowo". Zbyt mało – brakuje ważnych informacji.

Pamiętaj: grafiki informują, zdjęcia budują emocje i zaufanie.`
            }
          ],
          tasks: [],
          checklist: [
            {
              id: "check-1-1",
              text: "Wiem, kiedy użyć grafiki zamiast zdjęcia"
            },
            {
              id: "check-1-2",
              text: "Znam idealną proporcję grafik na feedzie"
            }
          ],
          keyTakeaways: [
            "Grafiki służą do informowania, zdjęcia do budowania emocji",
            "Idealna proporcja to 70% zdjęć i 30% grafik",
            "Lepiej użyć grafiki niż słabego zdjęcia"
          ]
        },
        {
          id: "spojnosc-wizualna",
          title: "Spójność wizualna",
          description: "Jak budować rozpoznawalny styl swojego salonu",
          estimatedMinutes: 5,
          objectives: [
            "Zrozumiesz znaczenie spójności wizualnej",
            "Dowiesz się, jakie elementy budują spójność",
            "Poznasz praktyczne wskazówki"
          ],
          sections: [
            {
              id: "section-2-1",
              type: "text",
              content: `# Dlaczego spójność jest ważna? ✨

Gdy ktoś scrolluje feed, powinien rozpoznać Twoje posty od razu – bez patrzenia na nazwę konta. To jest siła spójności wizualnej.

## Co buduje spójność?

🎨 **Paleta kolorów** – 3-5 kolorów, które się powtarzają
🔤 **Fonty** – 1-2 czcionki używane wszędzie
📐 **Styl grafik** – podobny układ, elementy dekoracyjne
📸 **Filtry** – ten sam filtr na wszystkich zdjęciach

Spójność nie oznacza monotonii – chodzi o to, żeby wszystko do siebie pasowało i tworzyło jedną całość.`
            },
            {
              id: "section-2-2",
              type: "text",
              content: `## Spójny profil vs chaotyczny

Spójny profil jest rozpoznawalny na pierwszy rzut oka. Buduje profesjonalny wizerunek i jest łatwiejszy do prowadzenia, bo masz system.

Chaotyczny profil to taki, gdzie każdy post wygląda inaczej – inne kolory, fonty, style. Sprawia wrażenie przypadkowości i trudniej zapamiętać taką markę.

## Jak zacząć?

Nie musisz wymyślać wszystkiego od zera. Użyj szablonów z Aurine i dostosuj je do swoich kolorów. To najprostszy sposób na spójny profil bez godzin pracy.`
            }
          ],
          tasks: [],
          checklist: [
            {
              id: "check-2-1",
              text: "Rozumiem znaczenie spójności wizualnej"
            },
            {
              id: "check-2-2",
              text: "Wiem, jakie elementy budują spójność"
            }
          ],
          keyTakeaways: [
            "Spójność wizualna buduje rozpoznawalność marki",
            "Ogranicz paletę do 3-5 kolorów i 1-2 fontów",
            "Spójny profil jest łatwiejszy do prowadzenia"
          ]
        },
        {
          id: "kolory-i-fonty",
          title: "Kolory i fonty",
          description: "Jak dobrać kolory i czcionki do swojego salonu",
          estimatedMinutes: 5,
          objectives: [
            "Poznasz podstawy psychologii kolorów",
            "Dowiesz się, jak dobrać paletę",
            "Zrozumiesz, jak wybierać fonty"
          ],
          sections: [
            {
              id: "section-3-1",
              type: "text",
              content: `# Kolory mówią za Ciebie 🌈

Każdy kolor wywołuje inne skojarzenia. Dobierz je świadomie do charakteru swojego salonu.

## Popularne kolory w beauty

💗 **Różowy/Pudrowy** – kobiecość, delikatność, romantyczność
✨ **Złoty/Beżowy** – luksus, elegancja, premium
🖤 **Czarny** – nowoczesność, moda, glamour
🤍 **Biały** – czystość, minimalizm, świeżość
💜 **Fioletowy** – kreatywność, artyzm, nail art

Nie musisz wybierać jednego koloru – chodzi o stworzenie palety 3-5 kolorów, które do siebie pasują.`
            },
            {
              id: "section-3-2",
              type: "text",
              content: `## Jak dobrać paletę?

Stosuj zasadę **60-30-10**:
- **60%** – kolor dominujący (tła, duże powierzchnie)
- **30%** – kolor uzupełniający (akcenty, ramki)
- **10%** – kolor wyróżnienia (przyciski, ważne elementy)

## A fonty?

Wybierz maksymalnie 2 czcionki:
- Jeden font do nagłówków (może być ozdobny)
- Jeden font do tekstu (musi być czytelny)

Jeśli nie wiesz jakie kolory wybrać, użyj kolorów ze swojego logo lub wystroju salonu – to najprostszy sposób na spójność.`
            }
          ],
          tasks: [],
          checklist: [
            {
              id: "check-3-1",
              text: "Wiem, jakie kolory pasują do mojego salonu"
            },
            {
              id: "check-3-2",
              text: "Rozumiem zasadę 60-30-10"
            }
          ],
          keyTakeaways: [
            "Kolory wywołują emocje – dobieraj je świadomie",
            "Stosuj zasadę 60-30-10",
            "Ogranicz się do 2 fontów"
          ]
        },
        {
          id: "korzystanie-z-szablonow",
          title: "Korzystanie z szablonów",
          description: "Jak efektywnie używać szablonów i oszczędzać czas",
          estimatedMinutes: 5,
          objectives: [
            "Zrozumiesz zalety pracy z szablonami",
            "Nauczysz się dostosowywać szablony",
            "Poznasz Generator grafik w Aurine"
          ],
          sections: [
            {
              id: "section-4-1",
              type: "text",
              content: `# Szablony = oszczędność czasu ⏱️

Zamiast tworzyć każdą grafikę od zera, modyfikujesz gotowy projekt. To oszczędność czasu i gwarancja spójności.

## Dlaczego warto używać szablonów?

⏱️ **Szybkość** – 5 minut zamiast 30 na stworzenie grafiki
🎨 **Spójność** – wszystkie grafiki do siebie pasują
👍 **Prostota** – nie musisz być grafikiem
👥 **Delegowanie** – każdy w salonie może tworzyć grafiki

Szablony to nie oszustwo – to sprytne narzędzie, z którego korzystają profesjonaliści.`
            },
            {
              id: "section-4-2",
              type: "text",
              content: `## Generator grafik w Aurine

W zakładce **Szablony** znajdziesz gotowe szablony do różnych celów:
- Cenniki i oferty
- Promocje i rabaty
- Porady i wskazówki
- Informacje (godziny, urlopy, zmiany)
- Oferty specjalne i pakiety

Wystarczy wybrać szablon, zmienić tekst i dostosować kolor – gotowe! Możesz też dodać swoje logo, żeby każda grafika była "Twoja".

Przejdź do zakładki Szablony i sprawdź dostępne kategorie – znajdziesz tam szablony dopasowane do branży beauty.`
            }
          ],
          tasks: [],
          checklist: [
            {
              id: "check-4-1",
              text: "Wiem, gdzie znaleźć szablony w Aurine"
            },
            {
              id: "check-4-2",
              text: "Rozumiem zalety pracy z szablonami"
            }
          ],
          keyTakeaways: [
            "Szablony oszczędzają czas i zapewniają spójność",
            "Generator grafik znajdziesz w zakładce Szablony",
            "Wystarczy zmienić tekst i kolor"
          ]
        },
        {
          id: "bledy-w-grafikach",
          title: "Częste błędy",
          description: "Czego unikać przy tworzeniu grafik",
          estimatedMinutes: 5,
          objectives: [
            "Poznasz najczęstsze błędy",
            "Dowiesz się, jak ich unikać",
            "Zrozumiesz zasady czytelności"
          ],
          sections: [
            {
              id: "section-5-1",
              type: "text",
              content: `# Błędy, których warto unikać ⚠️

Nawet z szablonami można popełnić błędy. Oto najczęstsze problemy, które widzimy na profilach salonów:

## Za dużo tekstu

Grafika na social media to nie ulotka. Ludzie scrollują szybko – masz 2-3 sekundy, żeby przyciągnąć uwagę.

Zasada jest prosta: jeden post = jedna myśl. Jeśli masz więcej do powiedzenia, napisz resztę w opisie pod postem. Grafika ma przyciągnąć uwagę, opis może być dłuższy.`
            },
            {
              id: "section-5-2",
              type: "text",
              content: `## Inne częste błędy

❌ **Słaby kontrast** – tekst zlewa się z tłem i jest nieczytelny
❌ **Za małe fonty** – nieczytelne na telefonie
❌ **Zbyt wiele kolorów** – chaos wizualny, brak spójności
❌ **Różne style** – każdy post wygląda zupełnie inaczej
❌ **Słaba jakość zdjęć** – rozmazane, ciemne, pikselowane

## Jak sprawdzić przed publikacją?

Przed publikacją sprawdź grafikę na telefonie – czy wszystko jest czytelne? Czy tekst nie zlewa się z tłem? Czy da się przeczytać bez przybliżania?

Szablony z Aurine mają już odpowiedni kontrast i rozmiary fontów – wystarczy nie zmieniać ich drastycznie.`
            }
          ],
          tasks: [],
          checklist: [
            {
              id: "check-5-1",
              text: "Wiem, jakich błędów unikać"
            },
            {
              id: "check-5-2",
              text: "Rozumiem zasadę 'jeden post = jedna myśl'"
            }
          ],
          keyTakeaways: [
            "Jeden post = jedna myśl, resztę napisz w opisie",
            "Zawsze sprawdzaj grafikę na telefonie",
            "Szablony Aurine mają już dobre ustawienia"
          ]
        }
      ]
    }
  ]
};
