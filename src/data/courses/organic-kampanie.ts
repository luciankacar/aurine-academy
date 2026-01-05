import { Course } from "@/types/courses";

export const organicKampanieCourse: Course = {
  id: "organic-kampanie",
  title: "Organic + Kampanie reklamowe",
  description: "Dowiedz się, jak łączyć działania organiczne z płatnymi kampaniami reklamowymi.",
  icon: "Target",
  color: "#f59e0b",
  estimatedHours: 2,
  totalLessons: 5,
  modules: [
    {
      id: "organic-m1",
      title: "Organic + Kampanie reklamowe",
      description: "Kompleksowy przewodnik po reklamach dla salonu beauty",
      lessons: [
        {
          id: "organic-l1",
          title: "Przygotowanie profilu pod kampanie",
          description: "Jak przygotować profil, by kampanie reklamowe były skuteczne.",
          estimatedMinutes: 12,
          objectives: [
            "Zrozumiesz, dlaczego profil musi być gotowy przed kampanią",
            "Poznasz checklistę przygotowania profilu",
            "Nauczysz się optymalizować profil pod konwersję"
          ],
          sections: [
            { id: "organic-l1-1", type: "text", content: "Kampania reklamowa przyciąga ludzi na Twój profil. Ale jeśli profil nie jest gotowy, pieniądze pójdą w błoto. Ludzie wejdą, zobaczą pustkę i wyjdą." },
            { id: "organic-l1-2", type: "heading", content: "Dlaczego profil jest kluczowy?" },
            { id: "organic-l1-3", type: "text", content: "Reklama to zaproszenie do salonu. Profil to Twój salon. Jeśli gość wchodzi i widzi bałagan, wychodzi. Reklama może być idealna, ale bez dobrego profilu nie zadziała." },
            { 
              id: "organic-l1-mockup", 
              type: "mockup", 
              content: "Profil gotowy pod kampanię reklamową:",
              mockupData: {
                platform: "instagram",
                variant: "profile",
                bio: "💅 Stylizacja paznokci | Hybryda & Żel\n📍 Kraków Kazimierz\n⏰ Pon-Sob 9-19\n🎁 -20% na pierwszą wizytę!\n📲 Booksy: link poniżej",
                followers: "2,847",
                following: "412",
                posts: "156",
                description: "Kompletne bio + promocja + jasny CTA = gotowe pod kampanię"
              }
            },
            { id: "organic-l1-4", type: "heading", content: "Checklista przed kampanią" },
            { id: "organic-l1-5", type: "text", content: "1. BIO - Jasne co robisz, dla kogo, jak umówić wizytę. 2. ZDJĘCIE PROFILOWE - Profesjonalne, rozpoznawalne. 3. WYRÓŻNIONE RELACJE - Cennik, efekty, opinie, FAQ. 4. OSTATNIE 9 POSTÓW - Różnorodne, pokazujące jakość. 5. CTA - Jasna ścieżka do rezerwacji." },
            { id: "organic-l1-6", type: "comparison", content: "Profil pod kampanie", comparison: { good: { title: "Gotowy profil", description: "Kompletne bio, wyróżnione relacje, świeże posty z efektami, jasne CTA" }, bad: { title: "Niegotowy profil", description: "Puste bio, brak wyróżnionych, ostatni post sprzed miesiąca" } } },
            { id: "organic-l1-7", type: "tip", content: "Przed startem kampanii poproś 3 znajome o ocenę profilu - czy wiedzą czym się zajmujesz i jak się umówić?" }
          ],
          tasks: [
            { id: "organic-task-1", title: "Audyt profilu", description: "Przejdź checklistę i uzupełnij braki w profilu." }
          ],
          checklist: [
            { id: "organic-check-1", text: "Mój profil jest gotowy pod kampanie" },
            { id: "organic-check-2", text: "Mam jasne CTA do rezerwacji" }
          ],
          keyTakeaways: [
            "Profil musi być gotowy przed startem kampanii",
            "Reklama przyciąga, profil konwertuje"
          ]
        },
        {
          id: "organic-l2",
          title: "Jak organic wspiera kampanie",
          description: "Synergia między treściami organicznymi a płatnymi.",
          estimatedMinutes: 12,
          objectives: [
            "Zrozumiesz związek między organic a paid",
            "Nauczysz się wspierać kampanie treściami"
          ],
          sections: [
            { id: "organic-l2-1", type: "text", content: "Organic i paid to nie osobne światy - to zespół. Dobre treści organiczne sprawiają, że reklamy działają lepiej i kosztują mniej." },
            { id: "organic-l2-2", type: "heading", content: "Jak organic wzmacnia kampanie" },
            { id: "organic-l2-3", type: "text", content: "1. SOCIAL PROOF - Aktywny profil buduje zaufanie gdy ktoś wejdzie z reklamy. 2. REMARKETING - Osoby angażujące się w treści można targetować reklamą. 3. TREŚCI DO REKLAM - Najlepsze posty organiczne możesz promować. 4. OBNIŻENIE KOSZTÓW - Zaangażowany profil = niższe koszty reklam." },
            { id: "organic-l2-4", type: "heading", content: "Co publikować podczas kampanii" },
            { id: "organic-l2-5", type: "text", content: "Zwiększ częstotliwość publikacji. Pokazuj efekty podobne do tych w reklamie. Publikuj opinie i social proof. Odpowiadaj szybko na komentarze i wiadomości." },
            { id: "organic-l2-6", type: "comparison", content: "Organic podczas kampanii", comparison: { good: { title: "Aktywny profil", description: "Codzienne Stories, świeże posty, szybkie odpowiedzi, spójność z reklamą" }, bad: { title: "Martwy profil", description: "Brak aktywności, ostatni post sprzed tygodnia, brak odpowiedzi" } } },
            { id: "organic-l2-7", type: "tip", content: "Podczas kampanii publikuj 2x więcej niż zwykle - każda osoba z reklamy sprawdzi Twój profil." }
          ],
          tasks: [
            { id: "organic-task-2", title: "Plan wsparcia", description: "Zaplanuj dodatkowe treści na czas kampanii." }
          ],
          checklist: [
            { id: "organic-check-3", text: "Rozumiem synergię organic i paid" },
            { id: "organic-check-4", text: "Wiem, jak wspierać kampanię treściami" }
          ],
          keyTakeaways: [
            "Organic i paid wzajemnie się wzmacniają",
            "Podczas kampanii zwiększ aktywność organiczną"
          ]
        },
        {
          id: "organic-l3",
          title: "Współpraca z opiekunem",
          description: "Jak efektywnie współpracować z osobą prowadzącą kampanie.",
          estimatedMinutes: 10,
          objectives: [
            "Poznasz zasady współpracy z opiekunem kampanii",
            "Nauczysz się dostarczać potrzebne materiały"
          ],
          sections: [
            { id: "organic-l3-1", type: "text", content: "Sukces kampanii zależy od współpracy. Opiekun potrzebuje od Ciebie materiałów i informacji, Ty potrzebujesz jego ekspertyzy w reklamach." },
            { id: "organic-l3-2", type: "heading", content: "Co dostarczyć opiekunowi" },
            { id: "organic-l3-3", type: "text", content: "1. ZDJĘCIA I WIDEO - Wysokiej jakości materiały do reklam. 2. INFORMACJE O USŁUGACH - Ceny, czas trwania, korzyści. 3. GRUPA DOCELOWA - Kogo chcesz przyciągnąć. 4. CELE - Co chcesz osiągnąć (rezerwacje, świadomość). 5. BUDŻET - Ile możesz przeznaczyć miesięcznie." },
            { id: "organic-l3-4", type: "heading", content: "Zasady dobrej współpracy" },
            { id: "organic-l3-5", type: "text", content: "Odpowiadaj na wiadomości w ciągu 24h. Dostarczaj materiały na czas. Bądź otwarta na sugestie. Regularnie sprawdzaj wyniki razem. Dawaj feedback co działa w salonie." },
            { id: "organic-l3-6", type: "comparison", content: "Współpraca", comparison: { good: { title: "Dobra współpraca", description: "Szybkie odpowiedzi, regularne materiały, otwartość na feedback" }, bad: { title: "Trudna współpraca", description: "Brak odpowiedzi, spóźnione materiały, ignorowanie sugestii" } } },
            { id: "organic-l3-7", type: "tip", content: "Stwórz folder w Google Drive z materiałami do reklam - udostępnij opiekunowi i regularnie dodawaj nowe zdjęcia." }
          ],
          tasks: [
            { id: "organic-task-3", title: "Folder materiałów", description: "Przygotuj folder z materiałami do kampanii." }
          ],
          checklist: [
            { id: "organic-check-5", text: "Wiem, czego potrzebuje opiekun kampanii" },
            { id: "organic-check-6", text: "Mam przygotowane materiały do reklam" }
          ],
          keyTakeaways: [
            "Sukces kampanii wymaga Twojego zaangażowania",
            "Przygotuj materiały z wyprzedzeniem"
          ]
        },
        {
          id: "organic-l4",
          title: "Podstawowe wskaźniki",
          description: "Jakie metryki śledzić i jak je interpretować.",
          estimatedMinutes: 12,
          objectives: [
            "Poznasz kluczowe wskaźniki kampanii",
            "Nauczysz się oceniać skuteczność reklam"
          ],
          sections: [
            { id: "organic-l4-1", type: "text", content: "Nie musisz być ekspertem od analityki. Wystarczy, że rozumiesz kilka kluczowych wskaźników, by ocenić czy kampania działa." },
            { id: "organic-l4-2", type: "heading", content: "Kluczowe wskaźniki" },
            { id: "organic-l4-3", type: "text", content: "ZASIĘG - Ile osób zobaczyło reklamę. KLIKNIĘCIA - Ile osób kliknęło w reklamę. CTR (Click-Through Rate) - % osób, które kliknęły (dobry: powyżej 1%). CPC (Cost Per Click) - Koszt jednego kliknięcia. KONWERSJE - Ile osób wykonało pożądaną akcję (rezerwacja, wiadomość)." },
            { id: "organic-l4-4", type: "heading", content: "Jak interpretować wyniki" },
            { id: "organic-l4-5", type: "text", content: "Niski CTR = zła kreacja lub źle dobrana grupa. Wysoki CPC = duża konkurencja lub słaba reklama. Dużo kliknięć, mało konwersji = problem z profilem lub ofertą. Najważniejsze: ile rezerwacji przyniosła kampania vs ile kosztowała." },
            { id: "organic-l4-6", type: "comparison", content: "Wyniki kampanii", comparison: { good: { title: "Dobre wyniki", description: "CTR powyżej 1%, koszt rezerwacji niższy niż zysk z niej, rosnące zaangażowanie" }, bad: { title: "Słabe wyniki", description: "CTR poniżej 0.5%, droższe rezerwacje niż zysk, brak konwersji" } } },
            { id: "organic-l4-7", type: "tip", content: "Pytaj opiekuna o raport co 2 tygodnie. Poproś o wyjaśnienie wyników prostym językiem." }
          ],
          tasks: [
            { id: "organic-task-4", title: "Słownik wskaźników", description: "Zapisz definicje 5 kluczowych wskaźników." }
          ],
          checklist: [
            { id: "organic-check-7", text: "Rozumiem podstawowe wskaźniki kampanii" },
            { id: "organic-check-8", text: "Wiem, jak ocenić skuteczność reklam" }
          ],
          keyTakeaways: [
            "Śledź CTR, CPC i konwersje",
            "Najważniejszy wskaźnik: koszt pozyskania klientki"
          ]
        },
        {
          id: "organic-l5",
          title: "Proces współpracy z Aurine",
          description: "Jak wygląda współpraca z Aurine przy kampaniach reklamowych.",
          estimatedMinutes: 10,
          objectives: [
            "Poznasz etapy współpracy z Aurine",
            "Zrozumiesz, czego oczekiwać na każdym etapie"
          ],
          sections: [
            { id: "organic-l5-1", type: "text", content: "Aurine oferuje kompleksowe wsparcie w kampaniach reklamowych. Oto jak wygląda proces współpracy od początku do końca." },
            { id: "organic-l5-2", type: "heading", content: "Etapy współpracy" },
            { id: "organic-l5-3", type: "text", content: "1. KONSULTACJA - Omówienie celów, budżetu, grupy docelowej. 2. PRZYGOTOWANIE - Audyt profilu, zbieranie materiałów. 3. KONFIGURACJA - Ustawienie kampanii, kreacje reklamowe. 4. URUCHOMIENIE - Start kampanii, monitoring. 5. OPTYMALIZACJA - Ciągłe ulepszanie na podstawie wyników. 6. RAPORTOWANIE - Regularne podsumowania i wnioski." },
            { id: "organic-l5-4", type: "heading", content: "Twoja rola w procesie" },
            { id: "organic-l5-5", type: "text", content: "Dostarczaj materiały na czas. Informuj o promocjach i nowościach. Zgłaszaj feedback od klientek z reklam. Utrzymuj aktywność organiczną. Bądź w kontakcie z opiekunem." },
            { id: "organic-l5-6", type: "comparison", content: "Współpraca z Aurine", comparison: { good: { title: "Aktywna współpraca", description: "Regularna komunikacja, szybkie dostarczanie materiałów, feedback z salonu" }, bad: { title: "Pasywna współpraca", description: "Brak kontaktu, oczekiwanie że wszystko zrobi się samo" } } },
            { id: "organic-l5-7", type: "tip", content: "Najlepsze rezultaty osiągają salony, które traktują kampanie jako partnerstwo - Twoje zaangażowanie bezpośrednio wpływa na wyniki." }
          ],
          tasks: [
            { id: "organic-task-5", title: "Przygotowanie do współpracy", description: "Przygotuj materiały i informacje potrzebne do startu kampanii." }
          ],
          checklist: [
            { id: "organic-check-9", text: "Rozumiem etapy współpracy z Aurine" },
            { id: "organic-check-10", text: "Wiem, jaka jest moja rola w procesie" }
          ],
          keyTakeaways: [
            "Kampania to partnerstwo - Twoje zaangażowanie jest kluczowe",
            "Regularna komunikacja zapewnia najlepsze wyniki"
          ]
        }
      ]
    }
  ]
};
