import { Course } from "@/types/courses";

export const wprowadzenieCourse: Course = {
  id: "wprowadzenie-do-aurine-academy",
  title: "Wprowadzenie do Aurine Academy",
  description: "Poznaj jak działają kursy, jak się uczyć i co zyskasz dzięki Aurine Academy",
  icon: "GraduationCap",
  color: "purple",
  estimatedHours: 0.25,
  totalLessons: 3,
  isIntro: true,
  modules: [
    {
      id: "modul-1-zacznij-tutaj",
      title: "Zacznij tutaj",
      description: "Wszystko co musisz wiedzieć zanim zaczniesz naukę",
      lessons: [
        {
          id: "lekcja-1-witaj",
          title: "Witaj w Aurine Academy",
          description: "Poznaj naszą misję i dowiedz się, dla kogo są te kursy",
          estimatedMinutes: 5,
          objectives: [
            "Dowiesz się, czym są kursy w Aurine Academy",
            "Zrozumiesz jak kursy wspierają Twoją codzienną pracę",
            "Poznasz zakres tematów, które znajdziesz w kursach"
          ],
          sections: [
            {
              id: "section-1-1",
              type: "text",
              content: `# Cieszymy się, że tu jesteś! 💜

Kursy w Aurine Academy to Twoja baza wiedzy o prowadzeniu social mediów. Znajdziesz tu wszystko, czego potrzebujesz, żeby samodzielnie tworzyć treści, które przyciągają klientki.

## Co znajdziesz w kursach?

Kursy obejmują praktyczną wiedzę o:

📱 **Tworzeniu treści** – posty, stories, rolki, które angażują
📝 **Pisaniu tekstów** – jak mówić do swoich klientek
📸 **Zdjęciach i grafikach** – co działa w branży beauty
💬 **Budowaniu relacji** – jak rozmawiać z klientkami online`
            },
            {
              id: "section-1-2",
              type: "text",
              content: `## Kursy a kampanie reklamowe

Kampaniami płatnymi zajmuje się Twoja opiekunka z agencji – to nadal część naszej współpracy.

Kursy uczą Cię **działań organicznych** – czyli wszystkiego, co możesz robić samodzielnie, bez budżetu reklamowego. Regularne posty, stories, kontakt z obserwującymi – to buduje Twoją markę między kampaniami.

## Skąd ta wiedza?

Wszystkie kursy powstały na bazie doświadczeń z dziesiątek salonów beauty. To nie teoria – to sprawdzone metody, które działają u Twoich koleżanek z branży.`
            }
          ],
          tasks: [],
          checklist: [
            {
              id: "check-1-1",
              text: "Wiem, że kursy dotyczą działań organicznych w social mediach"
            },
            {
              id: "check-1-2",
              text: "Rozumiem, że kampanie reklamowe to osobna część współpracy z agencją"
            }
          ],
          keyTakeaways: [
            "Kursy to baza wiedzy o prowadzeniu social mediów",
            "Uczysz się działań organicznych – postów, stories, rolek",
            "Kampaniami płatnymi zajmuje się Twoja opiekunka"
          ]
        },
        {
          id: "lekcja-2-jak-dzialaja-kursy",
          title: "Jak działają kursy",
          description: "Poznaj strukturę kursów, lekcji i zadań",
          estimatedMinutes: 5,
          objectives: [
            "Poznasz strukturę kursów",
            "Zrozumiesz jak działają lekcje i zadania",
            "Dowiesz się jak śledzić swoje postępy"
          ],
          sections: [
            {
              id: "section-2-1",
              type: "text",
              content: `# Struktura kursów

Każdy kurs jest podzielony na **moduły**, a moduły na **lekcje**. Dzięki temu możesz uczyć się po kawałku i wracać do konkretnych tematów, kiedy ich potrzebujesz.

## Co zawiera każda lekcja?

📖 **Treść** – konkretna wiedza bez zbędnego lania wody
✅ **Checklista** – punkty do odhaczenia, żebyś wiedziała gdzie jesteś
💡 **Podsumowanie** – najważniejsze wnioski z lekcji`
            },
            {
              id: "section-2-2",
              type: "text",
              content: `## Twoje tempo

Nie ma tutaj terminów ani egzaminów. Uczysz się kiedy masz czas – rano przed klientkami, wieczorem po pracy, w przerwie między zabiegami.

Możesz:
- Przerobić cały kurs na raz
- Wracać do pojedynczych lekcji
- Robić przerwy między modułami

System zapamiętuje Twoje postępy, więc zawsze wrócisz tam, gdzie skończyłaś.`
            }
          ],
          tasks: [],
          checklist: [
            {
              id: "check-2-1",
              text: "Rozumiem strukturę kursów (moduły → lekcje)"
            },
            {
              id: "check-2-2",
              text: "Wiem, że mogę uczyć się we własnym tempie"
            }
          ],
          keyTakeaways: [
            "Kursy dzielą się na moduły i lekcje",
            "Każda lekcja ma treść, checklistę i podsumowanie",
            "Uczysz się we własnym tempie, system pamięta postępy"
          ]
        },
        {
          id: "lekcja-3-twoj-plan-nauki",
          title: "Twój plan nauki",
          description: "Zaplanuj swoją drogę przez kursy Aurine Academy",
          estimatedMinutes: 5,
          objectives: [
            "Dowiesz się od którego kursu zacząć",
            "Poznasz rekomendowane ścieżki nauki",
            "Zrozumiesz ile czasu potrzebujesz na naukę"
          ],
          sections: [
            {
              id: "section-3-1",
              type: "text",
              content: `# Wybierz swój start

Nie musisz przerabiać wszystkich kursów po kolei. Zacznij od tego, co jest Ci teraz najbardziej potrzebne.

## Nie wiesz od czego zacząć?

Zapytaj swoją opiekunkę z agencji – zna Twój profil i podpowie, które kursy będą dla Ciebie najlepsze na start.

## Popularne punkty startu:

🎬 **Rolki i wideo** – jeśli chcesz zacząć nagrywać
📸 **Zdjęcia do social mediów** – jeśli zależy Ci na lepszych fotkach
✍️ **Teksty do postów** – jeśli nie wiesz co pisać`
            },
            {
              id: "section-3-2",
              type: "text",
              content: `## Ile czasu potrzebujesz?

Każda lekcja ma oznaczony czas – większość zajmuje **5-10 minut**. Wystarczy 15-30 minut dziennie, żeby robić postępy.

Możesz też uczyć się intensywniej, jeśli masz wolny wieczór czy dzień bez klientek.

## Gotowa?

Zamknij tę lekcję i wybierz kurs, który Cię interesuje. Powodzenia! 🚀`
            }
          ],
          tasks: [],
          checklist: [
            {
              id: "check-3-1",
              text: "Wiem od którego kursu chcę zacząć"
            },
            {
              id: "check-3-2",
              text: "Rozumiem, że mogę pytać opiekunkę o rekomendacje"
            }
          ],
          keyTakeaways: [
            "Zacznij od kursu, który jest Ci teraz najbardziej potrzebny",
            "Twoja opiekunka podpowie najlepszy start",
            "15-30 minut dziennie wystarczy na solidne postępy"
          ]
        }
      ]
    }
  ]
};
