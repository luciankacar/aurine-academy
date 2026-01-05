import { TemplateConfig, TemplateCategory } from '@/types/generator-grafik';

// 10 template categories with variants
export const TEMPLATE_CONFIGS: TemplateConfig[] = [
  {
    id: 'przed-po',
    category: 'przed-po',
    name: 'Przed i Po',
    description: 'Metamorfoza klientki',
    icon: 'ArrowLeftRight',
    defaultAccentColor: '#ec4899',
    variants: [
      {
        id: 'przed-po-split',
        name: 'Podział poziomy',
        layout: 'split',
        requiredImages: 2,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Metamorfoza', maxLength: 30, fontSize: 48, position: { x: 540, y: 100 } },
          { id: 'before', label: 'Przed', defaultValue: 'PRZED', maxLength: 10, fontSize: 24, position: { x: 270, y: 950 } },
          { id: 'after', label: 'Po', defaultValue: 'PO', maxLength: 10, fontSize: 24, position: { x: 810, y: 950 } },
        ],
      },
      {
        id: 'przed-po-vertical',
        name: 'Podział pionowy',
        layout: 'split',
        requiredImages: 2,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Efekt WOW', maxLength: 30, fontSize: 48, position: { x: 540, y: 540 } },
        ],
      },
      {
        id: 'przed-po-diagonal',
        name: 'Ukośny',
        layout: 'split',
        requiredImages: 2,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Transformacja', maxLength: 30, fontSize: 42, position: { x: 540, y: 100 } },
        ],
      },
    ],
  },
  {
    id: 'cennik',
    category: 'cennik',
    name: 'Cennik',
    description: 'Aktualna oferta',
    icon: 'DollarSign',
    defaultAccentColor: '#10b981',
    variants: [
      {
        id: 'cennik-elegant',
        name: 'Elegancki',
        layout: 'minimal',
        requiredImages: 0,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'CENNIK', maxLength: 20, fontSize: 64, position: { x: 540, y: 120 } },
          { id: 'service1', label: 'Usługa 1', defaultValue: 'Manicure klasyczny', maxLength: 40, fontSize: 28, position: { x: 540, y: 300 } },
          { id: 'price1', label: 'Cena 1', defaultValue: '80 zł', maxLength: 15, fontSize: 28, position: { x: 540, y: 350 } },
          { id: 'service2', label: 'Usługa 2', defaultValue: 'Manicure hybrydowy', maxLength: 40, fontSize: 28, position: { x: 540, y: 450 } },
          { id: 'price2', label: 'Cena 2', defaultValue: '120 zł', maxLength: 15, fontSize: 28, position: { x: 540, y: 500 } },
          { id: 'service3', label: 'Usługa 3', defaultValue: 'Pedicure', maxLength: 40, fontSize: 28, position: { x: 540, y: 600 } },
          { id: 'price3', label: 'Cena 3', defaultValue: '100 zł', maxLength: 15, fontSize: 28, position: { x: 540, y: 650 } },
        ],
      },
      {
        id: 'cennik-modern',
        name: 'Nowoczesny',
        layout: 'minimal',
        requiredImages: 1,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Oferta', maxLength: 20, fontSize: 56, position: { x: 540, y: 100 } },
          { id: 'subtitle', label: 'Podtytuł', defaultValue: 'Aktualne ceny', maxLength: 30, fontSize: 24, position: { x: 540, y: 170 } },
        ],
      },
      {
        id: 'cennik-bold',
        name: 'Wyrazisty',
        layout: 'minimal',
        requiredImages: 0,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'CENNIK', maxLength: 20, fontSize: 72, position: { x: 540, y: 200 } },
          { id: 'highlight', label: 'Wyróżnienie', defaultValue: 'od 80 zł', maxLength: 20, fontSize: 48, position: { x: 540, y: 540 } },
        ],
      },
    ],
  },
  {
    id: 'promocja',
    category: 'promocja',
    name: 'Promocja',
    description: 'Rabat, wyprzedaż',
    icon: 'Percent',
    defaultAccentColor: '#ef4444',
    variants: [
      {
        id: 'promocja-bold',
        name: 'Wyrazista',
        layout: 'minimal',
        requiredImages: 0,
        textFields: [
          { id: 'discount', label: 'Rabat', defaultValue: '-20%', maxLength: 10, fontSize: 120, position: { x: 540, y: 400 } },
          { id: 'title', label: 'Tytuł', defaultValue: 'PROMOCJA', maxLength: 20, fontSize: 48, position: { x: 540, y: 600 } },
          { id: 'validity', label: 'Ważność', defaultValue: 'do końca miesiąca', maxLength: 30, fontSize: 24, position: { x: 540, y: 700 } },
        ],
      },
      {
        id: 'promocja-elegant',
        name: 'Elegancka',
        layout: 'single',
        requiredImages: 1,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Oferta Specjalna', maxLength: 25, fontSize: 48, position: { x: 540, y: 150 } },
          { id: 'discount', label: 'Rabat', defaultValue: '-30%', maxLength: 10, fontSize: 96, position: { x: 540, y: 540 } },
        ],
      },
      {
        id: 'promocja-flash',
        name: 'Flash Sale',
        layout: 'minimal',
        requiredImages: 0,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'FLASH SALE', maxLength: 20, fontSize: 56, position: { x: 540, y: 300 } },
          { id: 'discount', label: 'Rabat', defaultValue: '-50%', maxLength: 10, fontSize: 144, position: { x: 540, y: 540 } },
          { id: 'cta', label: 'CTA', defaultValue: 'Tylko dziś!', maxLength: 20, fontSize: 32, position: { x: 540, y: 800 } },
        ],
      },
    ],
  },
  {
    id: 'metamorfoza',
    category: 'metamorfoza',
    name: 'Metamorfoza',
    description: 'Transformacja stylizacji',
    icon: 'Sparkles',
    defaultAccentColor: '#8b5cf6',
    variants: [
      {
        id: 'metamorfoza-showcase',
        name: 'Showcase',
        layout: 'single',
        requiredImages: 1,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'METAMORFOZA', maxLength: 20, fontSize: 56, position: { x: 540, y: 900 } },
          { id: 'hashtag', label: 'Hashtag', defaultValue: '#nowalook', maxLength: 20, fontSize: 24, position: { x: 540, y: 980 } },
        ],
      },
      {
        id: 'metamorfoza-story',
        name: 'Historia',
        layout: 'collage',
        requiredImages: 2,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Nowa Ja', maxLength: 20, fontSize: 48, position: { x: 540, y: 540 } },
        ],
      },
    ],
  },
  {
    id: 'sezonowy',
    category: 'sezonowy',
    name: 'Sezonowy',
    description: 'Święta, pory roku',
    icon: 'Calendar',
    defaultAccentColor: '#f59e0b',
    variants: [
      {
        id: 'sezonowy-christmas',
        name: 'Świąteczny',
        layout: 'minimal',
        requiredImages: 0,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Wesołych Świąt!', maxLength: 25, fontSize: 56, position: { x: 540, y: 400 } },
          { id: 'subtitle', label: 'Podtytuł', defaultValue: 'życzy Twój Salon', maxLength: 30, fontSize: 28, position: { x: 540, y: 500 } },
        ],
      },
      {
        id: 'sezonowy-spring',
        name: 'Wiosenny',
        layout: 'single',
        requiredImages: 1,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Wiosenna Oferta', maxLength: 25, fontSize: 48, position: { x: 540, y: 150 } },
        ],
      },
      {
        id: 'sezonowy-summer',
        name: 'Letni',
        layout: 'single',
        requiredImages: 1,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Letnie Promocje', maxLength: 25, fontSize: 48, position: { x: 540, y: 150 } },
        ],
      },
    ],
  },
  {
    id: 'nowosc',
    category: 'nowosc',
    name: 'Nowość',
    description: 'Nowa usługa/produkt',
    icon: 'Star',
    defaultAccentColor: '#06b6d4',
    variants: [
      {
        id: 'nowosc-launch',
        name: 'Premiera',
        layout: 'single',
        requiredImages: 1,
        textFields: [
          { id: 'badge', label: 'Badge', defaultValue: 'NOWOŚĆ', maxLength: 15, fontSize: 32, position: { x: 540, y: 100 } },
          { id: 'title', label: 'Tytuł', defaultValue: 'Nowa Usługa', maxLength: 25, fontSize: 56, position: { x: 540, y: 850 } },
          { id: 'cta', label: 'CTA', defaultValue: 'Umów się już dziś!', maxLength: 25, fontSize: 24, position: { x: 540, y: 950 } },
        ],
      },
      {
        id: 'nowosc-product',
        name: 'Produkt',
        layout: 'single',
        requiredImages: 1,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'W ofercie', maxLength: 20, fontSize: 48, position: { x: 540, y: 150 } },
          { id: 'product', label: 'Produkt', defaultValue: 'Nazwa produktu', maxLength: 30, fontSize: 36, position: { x: 540, y: 900 } },
        ],
      },
    ],
  },
  {
    id: 'porada',
    category: 'porada',
    name: 'Tip / Porada',
    description: 'Porady pielęgnacyjne',
    icon: 'Lightbulb',
    defaultAccentColor: '#84cc16',
    variants: [
      {
        id: 'porada-tip',
        name: 'Tip',
        layout: 'minimal',
        requiredImages: 0,
        textFields: [
          { id: 'badge', label: 'Badge', defaultValue: 'TIP', maxLength: 10, fontSize: 24, position: { x: 540, y: 150 } },
          { id: 'title', label: 'Tytuł', defaultValue: 'Czy wiesz, że...', maxLength: 30, fontSize: 48, position: { x: 540, y: 300 } },
          { id: 'content', label: 'Treść', defaultValue: 'Tutaj wpisz poradę', maxLength: 100, fontSize: 28, position: { x: 540, y: 500 } },
        ],
      },
      {
        id: 'porada-howto',
        name: 'How To',
        layout: 'single',
        requiredImages: 1,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Jak dbać o...', maxLength: 25, fontSize: 48, position: { x: 540, y: 850 } },
        ],
      },
    ],
  },
  {
    id: 'opinia',
    category: 'opinia',
    name: 'Opinia',
    description: 'Testimonial klientki',
    icon: 'Quote',
    defaultAccentColor: '#f472b6',
    variants: [
      {
        id: 'opinia-quote',
        name: 'Cytat',
        layout: 'minimal',
        requiredImages: 0,
        textFields: [
          { id: 'quote', label: 'Cytat', defaultValue: '"Najlepszy salon w mieście!"', maxLength: 100, fontSize: 36, position: { x: 540, y: 400 } },
          { id: 'author', label: 'Autor', defaultValue: '— Anna K.', maxLength: 30, fontSize: 24, position: { x: 540, y: 600 } },
          { id: 'stars', label: 'Gwiazdki', defaultValue: '⭐⭐⭐⭐⭐', maxLength: 10, fontSize: 32, position: { x: 540, y: 700 } },
        ],
      },
      {
        id: 'opinia-photo',
        name: 'Ze zdjęciem',
        layout: 'single',
        requiredImages: 1,
        textFields: [
          { id: 'quote', label: 'Cytat', defaultValue: '"Polecam!"', maxLength: 60, fontSize: 32, position: { x: 540, y: 850 } },
          { id: 'author', label: 'Autor', defaultValue: '— Klientka', maxLength: 30, fontSize: 20, position: { x: 540, y: 950 } },
        ],
      },
    ],
  },
  {
    id: 'atmosfera',
    category: 'atmosfera',
    name: 'Atmosfera',
    description: 'Kulisy salonu',
    icon: 'Heart',
    defaultAccentColor: '#ec4899',
    variants: [
      {
        id: 'atmosfera-behind',
        name: 'Za kulisami',
        layout: 'single',
        requiredImages: 1,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Za kulisami', maxLength: 25, fontSize: 48, position: { x: 540, y: 900 } },
          { id: 'hashtag', label: 'Hashtag', defaultValue: '#naszSalon', maxLength: 20, fontSize: 24, position: { x: 540, y: 980 } },
        ],
      },
      {
        id: 'atmosfera-team',
        name: 'Zespół',
        layout: 'single',
        requiredImages: 1,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Nasz Zespół', maxLength: 25, fontSize: 56, position: { x: 540, y: 900 } },
        ],
      },
    ],
  },
  {
    id: 'wydarzenie',
    category: 'wydarzenie',
    name: 'Wydarzenie',
    description: 'Event specjalny',
    icon: 'PartyPopper',
    defaultAccentColor: '#a855f7',
    variants: [
      {
        id: 'wydarzenie-event',
        name: 'Event',
        layout: 'minimal',
        requiredImages: 0,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'WYDARZENIE', maxLength: 20, fontSize: 56, position: { x: 540, y: 300 } },
          { id: 'date', label: 'Data', defaultValue: '15 stycznia 2025', maxLength: 25, fontSize: 32, position: { x: 540, y: 450 } },
          { id: 'description', label: 'Opis', defaultValue: 'Zapraszamy!', maxLength: 50, fontSize: 28, position: { x: 540, y: 600 } },
        ],
      },
      {
        id: 'wydarzenie-opening',
        name: 'Otwarcie',
        layout: 'single',
        requiredImages: 1,
        textFields: [
          { id: 'title', label: 'Tytuł', defaultValue: 'Grand Opening', maxLength: 25, fontSize: 56, position: { x: 540, y: 400 } },
          { id: 'date', label: 'Data', defaultValue: 'Już wkrótce', maxLength: 25, fontSize: 28, position: { x: 540, y: 500 } },
        ],
      },
    ],
  },
];

export const getCategoryIcon = (category: TemplateCategory): string => {
  const config = TEMPLATE_CONFIGS.find(c => c.category === category);
  return config?.icon || 'Image';
};

export const getCategoryColor = (category: TemplateCategory): string => {
  const config = TEMPLATE_CONFIGS.find(c => c.category === category);
  return config?.defaultAccentColor || '#ec4899';
};
