// Kursy dla pracowników (wewnątrz aplikacji)

export type EmployeeCourseSection =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "bullets"; items: string[] }
  | { type: "steps"; items: { title: string; text: string }[] };

export interface EmployeeCourseDefinition {
  id: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  sections: EmployeeCourseSection[];
}

export const employeeCourses: EmployeeCourseDefinition[] = [
  {
    id: "standard-obsługi-salonu",
    title: "Standard obsługi klientki",
    description: "Prosty standard: od powitania, przez konsultację, po domknięcie wizyty.",
    estimatedMinutes: 12,
    sections: [
      { type: "heading", text: "Cel" },
      {
        type: "paragraph",
        text: "Ujednolicenie obsługi tak, żeby każda klientka czuła się zaopiekowana — niezależnie od tego, kto wykonuje usługę.",
      },
      { type: "heading", text: "Zasady (must-have)" },
      {
        type: "bullets",
        items: [
          "Powitanie + imię klientki (jeśli znasz).",
          "Krótka konsultacja: oczekiwania, alergie, przeciwwskazania.",
          "Informowanie o etapach: co robimy i dlaczego.",
          "Domknięcie: pielęgnacja po zabiegu + propozycja kolejnego terminu.",
        ],
      },
      { type: "heading", text: "Przebieg wizyty (kroki)" },
      {
        type: "steps",
        items: [
          {
            title: "1. Start",
            text: "Uśmiech, kontakt wzrokowy, zaproś do stanowiska i potwierdź usługę.",
          },
          {
            title: "2. Konsultacja 60 sekund",
            text: "Dopytaj o cel wizyty i pokaż 2–3 opcje w prostych słowach.",
          },
          {
            title: "3. W trakcie",
            text: "Komunikuj: " +
              "\"Teraz zrobię X — potrwa około Y minut\"."
          },
          {
            title: "4. Finał",
            text: "Pokaż efekt w lustrze/na świetle, zapytaj o satysfakcję, daj 2 wskazówki pielęgnacyjne.",
          },
          {
            title: "5. Następny krok",
            text: "Zaproponuj kolejny termin i/lub pakiet (bez presji).",
          },
        ],
      },
    ],
  },
  {
    id: "komunikacja-w-zespole",
    title: "Komunikacja w zespole (mini-regulamin)",
    description: "Ustalenia, które ograniczają chaos: dyżury, przekazywanie zmian, konflikty.",
    estimatedMinutes: 10,
    sections: [
      { type: "heading", text: "Zasada nadrzędna" },
      {
        type: "paragraph",
        text: "Mówimy wprost i z szacunkiem. Problemy rozwiązujemy z osobą zainteresowaną — nie przy klientkach.",
      },
      { type: "heading", text: "Co jest OK" },
      {
        type: "bullets",
        items: [
          "Prośba o pomoc (konkretnie i z terminem).",
          "Zgłoszenie błędu bez obwiniania (fakty + propozycja rozwiązania).",
          "Informowanie o opóźnieniu od razu.",
        ],
      },
      { type: "heading", text: "Czego nie robimy" },
      {
        type: "bullets",
        items: [
          "Komentarzy o salonie/klientkach w social media.",
          "Kłótni przy klientkach.",
          "Ustalania zmian grafiku na ostatnią chwilę bez zgody właścicielki.",
        ],
      },
    ],
  },
  {
    id: "higiena-stanowiska",
    title: "Higiena stanowiska (checklista) प्रेर",
    description: "Krótka checklista: przed, w trakcie i po usłudze.",
    estimatedMinutes: 8,
    sections: [
      { type: "heading", text: "Przed usługą" },
      {
        type: "bullets",
        items: [
          "Zdezynfekuj blat i lampę.",
          "Przygotuj jednorazowe elementy.",
          "Sprawdź czystość narzędzi (pakiet/pojemnik).",
        ],
      },
      { type: "heading", text: "Po usłudze" },
      {
        type: "bullets",
        items: [
          "Utylizacja odpadów jednorazowych.",
          "Dezynfekcja powierzchni + fotela.",
          "Przygotowanie stanowiska pod następną klientkę.",
        ],
      },
    ],
  },
];
