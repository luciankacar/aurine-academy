// 4 distinct templates for "Cennik" category
export interface CennikTemplate {
  id: string;
  name: string;
  description: string;
  backgroundColor: string;
  accentColor: string;
  requiredImages: number;
  elements: TemplateElement[];
}

export interface TemplateElement {
  type: 'text' | 'image' | 'shape';
  id: string;
  label: string;
  defaultValue: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  fontSize?: number;
  fontWeight?: string;
  color?: string;
  align?: 'left' | 'center' | 'right';
}

export const CENNIK_TEMPLATES: CennikTemplate[] = [
  {
    id: 'cennik-elegant',
    name: 'Elegancki',
    description: 'Minimalistyczny design z subtelnymi akcentami',
    backgroundColor: '#1a1a1a',
    accentColor: '#10b981',
    requiredImages: 0,
    elements: [
      { type: 'text', id: 'title', label: 'Tytuł', defaultValue: 'CENNIK', x: 540, y: 120, fontSize: 64, fontWeight: 'bold', color: '#ffffff', align: 'center' },
      { type: 'shape', id: 'divider', label: 'Linia', defaultValue: '', x: 340, y: 180, width: 400, height: 2, color: '#10b981' },
      { type: 'text', id: 'service1', label: 'Usługa 1', defaultValue: 'Manicure klasyczny', x: 120, y: 300, fontSize: 26, color: '#ffffff', align: 'left' },
      { type: 'text', id: 'price1', label: 'Cena 1', defaultValue: '80 zł', x: 960, y: 300, fontSize: 26, fontWeight: 'bold', color: '#10b981', align: 'right' },
      { type: 'text', id: 'service2', label: 'Usługa 2', defaultValue: 'Manicure hybrydowy', x: 120, y: 380, fontSize: 26, color: '#ffffff', align: 'left' },
      { type: 'text', id: 'price2', label: 'Cena 2', defaultValue: '120 zł', x: 960, y: 380, fontSize: 26, fontWeight: 'bold', color: '#10b981', align: 'right' },
      { type: 'text', id: 'service3', label: 'Usługa 3', defaultValue: 'Pedicure klasyczny', x: 120, y: 460, fontSize: 26, color: '#ffffff', align: 'left' },
      { type: 'text', id: 'price3', label: 'Cena 3', defaultValue: '100 zł', x: 960, y: 460, fontSize: 26, fontWeight: 'bold', color: '#10b981', align: 'right' },
      { type: 'text', id: 'service4', label: 'Usługa 4', defaultValue: 'Pedicure hybrydowy', x: 120, y: 540, fontSize: 26, color: '#ffffff', align: 'left' },
      { type: 'text', id: 'price4', label: 'Cena 4', defaultValue: '150 zł', x: 960, y: 540, fontSize: 26, fontWeight: 'bold', color: '#10b981', align: 'right' },
      { type: 'text', id: 'salon', label: 'Nazwa salonu', defaultValue: 'Beauty Studio', x: 540, y: 950, fontSize: 20, color: '#666666', align: 'center' },
    ],
  },
  {
    id: 'cennik-modern',
    name: 'Nowoczesny',
    description: 'Odważne kolory i geometryczne kształty',
    backgroundColor: '#0f172a',
    accentColor: '#f472b6',
    requiredImages: 0,
    elements: [
      { type: 'shape', id: 'accent-bar', label: 'Pasek', defaultValue: '', x: 0, y: 0, width: 1080, height: 200, color: '#f472b6' },
      { type: 'text', id: 'title', label: 'Tytuł', defaultValue: 'CENNIK', x: 540, y: 100, fontSize: 72, fontWeight: 'bold', color: '#ffffff', align: 'center' },
      { type: 'text', id: 'service1', label: 'Usługa 1', defaultValue: 'Manicure', x: 100, y: 320, fontSize: 32, fontWeight: 'bold', color: '#ffffff', align: 'left' },
      { type: 'text', id: 'desc1', label: 'Opis 1', defaultValue: 'klasyczny / hybrydowy', x: 100, y: 365, fontSize: 18, color: '#94a3b8', align: 'left' },
      { type: 'text', id: 'price1', label: 'Cena 1', defaultValue: 'od 80 zł', x: 980, y: 340, fontSize: 28, fontWeight: 'bold', color: '#f472b6', align: 'right' },
      { type: 'text', id: 'service2', label: 'Usługa 2', defaultValue: 'Pedicure', x: 100, y: 460, fontSize: 32, fontWeight: 'bold', color: '#ffffff', align: 'left' },
      { type: 'text', id: 'desc2', label: 'Opis 2', defaultValue: 'klasyczny / hybrydowy', x: 100, y: 505, fontSize: 18, color: '#94a3b8', align: 'left' },
      { type: 'text', id: 'price2', label: 'Cena 2', defaultValue: 'od 100 zł', x: 980, y: 480, fontSize: 28, fontWeight: 'bold', color: '#f472b6', align: 'right' },
      { type: 'text', id: 'service3', label: 'Usługa 3', defaultValue: 'Stylizacja brwi', x: 100, y: 600, fontSize: 32, fontWeight: 'bold', color: '#ffffff', align: 'left' },
      { type: 'text', id: 'desc3', label: 'Opis 3', defaultValue: 'henna / laminacja', x: 100, y: 645, fontSize: 18, color: '#94a3b8', align: 'left' },
      { type: 'text', id: 'price3', label: 'Cena 3', defaultValue: 'od 60 zł', x: 980, y: 620, fontSize: 28, fontWeight: 'bold', color: '#f472b6', align: 'right' },
      { type: 'text', id: 'cta', label: 'CTA', defaultValue: 'Umów wizytę już dziś!', x: 540, y: 900, fontSize: 24, color: '#f472b6', align: 'center' },
    ],
  },
  {
    id: 'cennik-minimal',
    name: 'Minimalistyczny',
    description: 'Czysty design z dużą ilością przestrzeni',
    backgroundColor: '#fafafa',
    accentColor: '#18181b',
    requiredImages: 0,
    elements: [
      { type: 'text', id: 'title', label: 'Tytuł', defaultValue: 'Cennik usług', x: 540, y: 150, fontSize: 48, fontWeight: 'bold', color: '#18181b', align: 'center' },
      { type: 'shape', id: 'divider', label: 'Linia', defaultValue: '', x: 440, y: 210, width: 200, height: 3, color: '#18181b' },
      { type: 'text', id: 'service1', label: 'Usługa 1', defaultValue: 'Manicure klasyczny', x: 150, y: 350, fontSize: 24, color: '#18181b', align: 'left' },
      { type: 'text', id: 'price1', label: 'Cena 1', defaultValue: '80 zł', x: 930, y: 350, fontSize: 24, color: '#18181b', align: 'right' },
      { type: 'text', id: 'service2', label: 'Usługa 2', defaultValue: 'Manicure hybrydowy', x: 150, y: 420, fontSize: 24, color: '#18181b', align: 'left' },
      { type: 'text', id: 'price2', label: 'Cena 2', defaultValue: '120 zł', x: 930, y: 420, fontSize: 24, color: '#18181b', align: 'right' },
      { type: 'text', id: 'service3', label: 'Usługa 3', defaultValue: 'Pedicure klasyczny', x: 150, y: 490, fontSize: 24, color: '#18181b', align: 'left' },
      { type: 'text', id: 'price3', label: 'Cena 3', defaultValue: '100 zł', x: 930, y: 490, fontSize: 24, color: '#18181b', align: 'right' },
      { type: 'text', id: 'service4', label: 'Usługa 4', defaultValue: 'Pedicure hybrydowy', x: 150, y: 560, fontSize: 24, color: '#18181b', align: 'left' },
      { type: 'text', id: 'price4', label: 'Cena 4', defaultValue: '150 zł', x: 930, y: 560, fontSize: 24, color: '#18181b', align: 'right' },
      { type: 'text', id: 'salon', label: 'Salon', defaultValue: '@twojsalon', x: 540, y: 950, fontSize: 18, color: '#a1a1aa', align: 'center' },
    ],
  },
  {
    id: 'cennik-bold',
    name: 'Wyrazisty',
    description: 'Mocne kolory i duża typografia',
    backgroundColor: '#7c3aed',
    accentColor: '#fbbf24',
    requiredImages: 0,
    elements: [
      { type: 'text', id: 'title', label: 'Tytuł', defaultValue: 'CENNIK', x: 540, y: 120, fontSize: 96, fontWeight: 'bold', color: '#ffffff', align: 'center' },
      { type: 'text', id: 'subtitle', label: 'Podtytuł', defaultValue: 'Nasze usługi', x: 540, y: 220, fontSize: 28, color: '#fbbf24', align: 'center' },
      { type: 'shape', id: 'card1', label: 'Karta 1', defaultValue: '', x: 80, y: 300, width: 440, height: 160, color: '#ffffff' },
      { type: 'text', id: 'service1', label: 'Usługa 1', defaultValue: 'Manicure', x: 300, y: 350, fontSize: 28, fontWeight: 'bold', color: '#7c3aed', align: 'center' },
      { type: 'text', id: 'price1', label: 'Cena 1', defaultValue: 'od 80 zł', x: 300, y: 400, fontSize: 24, color: '#18181b', align: 'center' },
      { type: 'shape', id: 'card2', label: 'Karta 2', defaultValue: '', x: 560, y: 300, width: 440, height: 160, color: '#ffffff' },
      { type: 'text', id: 'service2', label: 'Usługa 2', defaultValue: 'Pedicure', x: 780, y: 350, fontSize: 28, fontWeight: 'bold', color: '#7c3aed', align: 'center' },
      { type: 'text', id: 'price2', label: 'Cena 2', defaultValue: 'od 100 zł', x: 780, y: 400, fontSize: 24, color: '#18181b', align: 'center' },
      { type: 'shape', id: 'card3', label: 'Karta 3', defaultValue: '', x: 80, y: 500, width: 440, height: 160, color: '#ffffff' },
      { type: 'text', id: 'service3', label: 'Usługa 3', defaultValue: 'Brwi', x: 300, y: 550, fontSize: 28, fontWeight: 'bold', color: '#7c3aed', align: 'center' },
      { type: 'text', id: 'price3', label: 'Cena 3', defaultValue: 'od 60 zł', x: 300, y: 600, fontSize: 24, color: '#18181b', align: 'center' },
      { type: 'shape', id: 'card4', label: 'Karta 4', defaultValue: '', x: 560, y: 500, width: 440, height: 160, color: '#ffffff' },
      { type: 'text', id: 'service4', label: 'Usługa 4', defaultValue: 'Rzęsy', x: 780, y: 550, fontSize: 28, fontWeight: 'bold', color: '#7c3aed', align: 'center' },
      { type: 'text', id: 'price4', label: 'Cena 4', defaultValue: 'od 150 zł', x: 780, y: 600, fontSize: 24, color: '#18181b', align: 'center' },
      { type: 'text', id: 'cta', label: 'CTA', defaultValue: '📞 Zadzwoń i umów wizytę!', x: 540, y: 900, fontSize: 26, fontWeight: 'bold', color: '#fbbf24', align: 'center' },
    ],
  },
];

// Color palette for accent color picker
export const ACCENT_COLORS = [
  '#10b981', // emerald
  '#f472b6', // pink
  '#fbbf24', // amber
  '#3b82f6', // blue
  '#8b5cf6', // violet
  '#ef4444', // red
  '#06b6d4', // cyan
  '#84cc16', // lime
];
