import { Course } from "@/types/courses";

export const planowanieSystemCourse: Course = {
  id: "planowanie-system",
  title: "Planowanie i system pracy",
  description: "Stwórz efektywny system planowania treści i organizacji pracy w social mediach.",
  icon: "Calendar",
  color: "#0ea5e9",
  estimatedHours: 2,
  totalLessons: 4,
  modules: [
    {
      id: "planowanie-m1",
      title: "Planowanie i system pracy",
      description: "Kompleksowy przewodnik po organizacji pracy w social mediach",
      lessons: [
        {
          id: "planowanie-l1",
          title: "Planowanie miesiąca treści",
          description: "Jak zaplanować cały miesiąc publikacji z wyprzedzeniem.",
          estimatedMinutes: 15,
          objectives: [
            "Nauczysz się planować treści na miesiąc",
            "Poznasz metodę content buckets",
            "Zrozumiesz, jak unikać pustki kreatywnej"
          ],
          sections: [
            { id: "plan-l1-1", type: "text", content: "Planowanie treści z wyprzedzeniem to klucz do regularności. Gdy masz plan, nie zastanawiasz się co opublikować - po prostu realizujesz." },
            { id: "plan-l1-2", type: "heading", content: "Metoda Content Buckets" },
            { id: "plan-l1-3", type: "text", content: "Podziel treści na kategorie (buckets): 1. EDUKACJA - porady, triki, FAQ. 2. EFEKTY - przed/po, metamorfozy. 3. KULISY - proces, przygotowania. 4. PERSONAL - Ty jako osoba. 5. SPRZEDAŻ - promocje, wolne terminy." },
            { 
              id: "plan-l1-mockup", 
              type: "mockup", 
              content: "Przykładowy post edukacyjny z kategorii EDUKACJA:",
              mockupData: {
                platform: "instagram",
                variant: "post",
                postCaption: "5 błędów, które skracają trwałość hybrydy 💅\n\n1. Mokre paznokcie przed wizytą\n2. Olejowanie skórek dzień przed\n3. Zdrapywanie lakieru...\n\nZapisz post! 📌",
                postLikes: "156",
                postComments: "34",
                description: "Post edukacyjny - jedna z 5 kategorii content buckets"
              }
            },
            { id: "plan-l1-4", type: "heading", content: "Planowanie miesiąca krok po kroku" },
            { id: "plan-l1-5", type: "text", content: "1. Zarezerwuj 2-3h na początku miesiąca. 2. Wypisz święta, wydarzenia, promocje. 3. Przydziel dni do kategorii treści. 4. Rozpisz tematy dla każdego dnia. 5. Przygotuj grafiki i teksty partiami." },
            { id: "plan-l1-6", type: "comparison", content: "Planowanie treści", comparison: { good: { title: "Z planem", description: "Wiesz co publikować każdego dnia, masz przygotowane materiały, zero stresu" }, bad: { title: "Bez planu", description: "Codzienne zastanawianie się, puste dni, przypadkowe treści" } } },
            { id: "plan-l1-7", type: "tip", content: "Zostaw 20% miejsca na spontaniczne treści - aktualne wydarzenia, trendy, niespodziewane inspiracje." }
          ],
          tasks: [
            { id: "plan-task-1", title: "Plan na miesiąc", description: "Zaplanuj treści na najbliższy miesiąc używając metody buckets." }
          ],
          checklist: [
            { id: "plan-check-1", text: "Znam metodę content buckets" },
            { id: "plan-check-2", text: "Mam zaplanowany najbliższy miesiąc" }
          ],
          keyTakeaways: [
            "Planuj treści na miesiąc z wyprzedzeniem",
            "Używaj kategorii (buckets) dla różnorodności"
          ]
        },
        {
          id: "planowanie-l2",
          title: "Kalendarz publikacji",
          description: "Jak stworzyć i prowadzić efektywny kalendarz contentowy.",
          estimatedMinutes: 12,
          objectives: [
            "Poznasz narzędzia do planowania",
            "Nauczysz się tworzyć kalendarz publikacji"
          ],
          sections: [
            { id: "plan-l2-1", type: "text", content: "Kalendarz publikacji to Twoje centrum dowodzenia. Wszystko w jednym miejscu - posty na FB i IG, Stories, Reels, promocje." },
            { id: "plan-l2-2", type: "heading", content: "Narzędzia do planowania" },
            { id: "plan-l2-3", type: "text", content: "DARMOWE: Notatki w telefonie, Kalendarz Google, Notion, Trello. PŁATNE: Later, Planoly, Meta Business Suite. Wybierz narzędzie, które będziesz faktycznie używać - najlepsze to takie, które Ci odpowiada." },
            { id: "plan-l2-4", type: "heading", content: "Struktura kalendarza" },
            { id: "plan-l2-5", type: "text", content: "Dla każdego wpisu notuj: datę i godzinę publikacji, typ treści (post/story/reel), temat i kategorię, status (pomysł/w przygotowaniu/gotowe/opublikowane), potrzebne materiały." },
            { id: "plan-l2-6", type: "comparison", content: "Kalendarze", comparison: { good: { title: "Dobry kalendarz", description: "Przejrzysty, regularnie aktualizowany, zawiera wszystkie potrzebne informacje" }, bad: { title: "Zły kalendarz", description: "Chaotyczny, nieaktualny, brakuje kluczowych danych" } } },
            { id: "plan-l2-7", type: "tip", content: "Wydrukuj miesięczny kalendarz i powieś przy stanowisku - wizualna kontrola motywuje do regularności." }
          ],
          tasks: [
            { id: "plan-task-2", title: "Kalendarz", description: "Załóż kalendarz publikacji w wybranym narzędziu." }
          ],
          checklist: [
            { id: "plan-check-3", text: "Wybrałam narzędzie do planowania" },
            { id: "plan-check-4", text: "Mam działający kalendarz publikacji" }
          ],
          keyTakeaways: [
            "Wybierz narzędzie, które będziesz faktycznie używać",
            "Notuj wszystkie kluczowe informacje o treściach"
          ]
        },
        {
          id: "planowanie-l3",
          title: "Organizacja pracy",
          description: "Jak efektywnie zarządzać czasem na social media.",
          estimatedMinutes: 12,
          objectives: [
            "Poznasz techniki organizacji czasu",
            "Nauczysz się batch workingu"
          ],
          sections: [
            { id: "plan-l3-1", type: "text", content: "Social media mogą pochłonąć całe dnie. Kluczem jest systematyczne podejście i jasne granice czasowe." },
            { id: "plan-l3-2", type: "heading", content: "Batch working" },
            { id: "plan-l3-3", type: "text", content: "Grupuj podobne zadania: jeden dzień na sesję zdjęciową, jeden na pisanie tekstów, jeden na planowanie. To efektywniejsze niż robienie wszystkiego po trochu każdego dnia." },
            { id: "plan-l3-4", type: "heading", content: "Bloki czasowe" },
            { id: "plan-l3-5", type: "text", content: "Wyznacz stałe godziny na social media: RANO (15 min) - publikacja, odpowiedzi. POŁUDNIE (10 min) - Stories z pracy. WIECZÓR (20 min) - interakcje, planowanie jutra." },
            { id: "plan-l3-6", type: "comparison", content: "Organizacja czasu", comparison: { good: { title: "Batch working", description: "Poniedziałek: sesja zdjęciowa. Wtorek: pisanie tekstów. Skupienie na jednym zadaniu." }, bad: { title: "Multitasking", description: "Codziennie wszystko po trochu. Brak skupienia. Ciągłe przeskakiwanie." } } },
            { id: "plan-l3-7", type: "tip", content: "Wyłącz powiadomienia z social mediów poza wyznaczonymi blokami - to zabójcy produktywności." }
          ],
          tasks: [
            { id: "plan-task-3", title: "Bloki czasowe", description: "Zaplanuj tygodniowy harmonogram pracy z social mediami." }
          ],
          checklist: [
            { id: "plan-check-5", text: "Stosuję batch working" },
            { id: "plan-check-6", text: "Mam wyznaczone bloki czasowe" }
          ],
          keyTakeaways: [
            "Grupuj podobne zadania (batch working)",
            "Wyznacz stałe godziny na social media"
          ]
        },
        {
          id: "planowanie-l4",
          title: "Delegowanie zadań",
          description: "Jak i kiedy delegować zadania związane z social mediami.",
          estimatedMinutes: 10,
          objectives: [
            "Poznasz zadania do delegowania",
            "Nauczysz się współpracować z pomocnikiem"
          ],
          sections: [
            { id: "plan-l4-1", type: "text", content: "Nie musisz robić wszystkiego sama. Niektóre zadania można łatwo przekazać, nawet jeśli nie stać Cię na profesjonalnego social media managera." },
            { id: "plan-l4-2", type: "heading", content: "Co można delegować" },
            { id: "plan-l4-3", type: "text", content: "ŁATWE DO DELEGOWANIA: Obróbka zdjęć, tworzenie grafik z szablonów, planowanie publikacji, odpowiedzi na proste pytania. LEPIEJ ROBIĆ SAMEJ: Nagrywanie wideo, osobiste Stories, strategiczne decyzje, odpowiedzi na złożone pytania." },
            { id: "plan-l4-4", type: "heading", content: "Kogo zatrudnić" },
            { id: "plan-l4-5", type: "text", content: "Opcje: praktykantka/stażystka, studentka marketingu, wirtualna asystentka na godziny, znajoma z talentem do grafiki. Zacznij od 5-10 godzin miesięcznie." },
            { id: "plan-l4-6", type: "comparison", content: "Delegowanie", comparison: { good: { title: "Dobre delegowanie", description: "Jasne instrukcje, szablony do wykorzystania, regularna komunikacja" }, bad: { title: "Złe delegowanie", description: "Brak wytycznych, oczekiwanie samodzielności od razu, brak feedbacku" } } },
            { id: "plan-l4-7", type: "tip", content: "Stwórz prosty dokument z wytycznymi: kolory, styl tekstów, ton komunikacji. To ułatwi wdrożenie każdej osoby." }
          ],
          tasks: [
            { id: "plan-task-4", title: "Lista zadań", description: "Wypisz zadania, które mogłabyś delegować." }
          ],
          checklist: [
            { id: "plan-check-7", text: "Wiem, które zadania mogę delegować" },
            { id: "plan-check-8", text: "Mam plan na potencjalną pomoc" }
          ],
          keyTakeaways: [
            "Deleguj obróbkę zdjęć i proste grafiki",
            "Zachowaj dla siebie autentyczne treści i strategię"
          ]
        },
      ]
    }
  ]
};
