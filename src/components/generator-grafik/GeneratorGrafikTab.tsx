import { useState } from 'react';
import { Image } from 'lucide-react';
import { TemplateSelector } from './TemplateSelector';
import { CategoryView } from './CategoryView';
import { TemplateConfig, TemplateCategory } from '@/types/generator-grafik';
import { TEMPLATE_CONFIGS } from '@/data/template-configs';

interface CalendarPostData {
  imageDataUrl: string;
  date: Date;
  time: string;
  platforms: ("instagram" | "facebook")[];
  title: string;
}

interface GeneratorGrafikTabProps {
  onAddToCalendar?: (data: CalendarPostData) => void;
  onBack: () => void;
}

export const GeneratorGrafikTab = ({ onAddToCalendar, onBack }: GeneratorGrafikTabProps) => {
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | null>(null);

  const selectedTemplate = selectedCategory
    ? TEMPLATE_CONFIGS.find((t) => t.category === selectedCategory)
    : null;

  const handleCategorySelect = (category: TemplateCategory) => {
    setSelectedCategory(category);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  // Show CategoryView when category is selected
  if (selectedTemplate) {
    return (
      <div className="px-3 py-4 max-w-md mx-auto">
        <CategoryView
          template={selectedTemplate}
          onBack={handleBackToCategories}
          onAddToCalendar={onAddToCalendar}
        />
      </div>
    );
  }

  // Main category selection view
  return (
    <div className="px-3 py-4 space-y-4 max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-lg leading-none">←</span>
          <span>Wróć do narzędzi</span>
        </button>
      </div>

      {/* Title section */}
      <div className="text-center space-y-2">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10">
          <Image className="h-7 w-7 text-orange-500" />
        </div>
        <h1 className="text-lg font-semibold text-foreground">Generator Grafik</h1>
        <p className="text-xs text-muted-foreground">
          Twórz profesjonalne grafiki z gotowych szablonów
        </p>
      </div>

      {/* Category selector */}
      <CategorySelector onSelect={handleCategorySelect} />
    </div>
  );
};

// Category selector component
interface CategorySelectorProps {
  onSelect: (category: TemplateCategory) => void;
}

import {
  ArrowLeftRight,
  DollarSign,
  Percent,
  Sparkles,
  Calendar,
  Star,
  Lightbulb,
  Quote,
  Heart,
  PartyPopper,
  ChevronRight,
} from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ArrowLeftRight,
  DollarSign,
  Percent,
  Sparkles,
  Calendar,
  Star,
  Lightbulb,
  Quote,
  Heart,
  PartyPopper,
};

const CategorySelector = ({ onSelect }: CategorySelectorProps) => {
  return (
    <div className="space-y-3">
      <div className="text-center space-y-1">
        <h2 className="text-sm font-semibold text-foreground">Wybierz kategorię</h2>
        <p className="text-xs text-muted-foreground">10 kategorii szablonów do postów</p>
      </div>

      <div className="grid grid-cols-2 gap-2">
        {TEMPLATE_CONFIGS.map((template) => {
          const IconComponent = iconMap[template.icon] || Star;
          const isAvailable = template.category === 'cennik';

          return (
            <button
              key={template.id}
              onClick={() => onSelect(template.category)}
              className={`group relative overflow-hidden rounded-xl border bg-card p-3 text-left transition-all ${
                isAvailable
                  ? 'border-border hover:border-primary/50 hover:shadow-md'
                  : 'border-border/50 opacity-60'
              }`}
            >
              <div
                className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${template.defaultAccentColor}20` }}
              >
                <IconComponent
                  className="h-5 w-5"
                  style={{ color: template.defaultAccentColor }}
                />
              </div>
              <h3 className="text-xs font-semibold text-foreground">{template.name}</h3>
              <p className="mt-0.5 text-[10px] text-muted-foreground line-clamp-1">
                {template.description}
              </p>
              <div className="mt-1.5 flex items-center gap-1 text-[9px] text-muted-foreground">
                {isAvailable ? (
                  <span className="text-emerald-500">4 szablony</span>
                ) : (
                  <span>Wkrótce</span>
                )}
              </div>
              <ChevronRight className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5" />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default GeneratorGrafikTab;
