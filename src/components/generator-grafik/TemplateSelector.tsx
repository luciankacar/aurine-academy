import { useState } from 'react';
import { 
  ArrowLeftRight, DollarSign, Percent, Sparkles, Calendar, 
  Star, Lightbulb, Quote, Heart, PartyPopper, ChevronRight 
} from 'lucide-react';
import { TemplateConfig, TemplateCategory, TemplateVariant } from '@/types/generator-grafik';
import { TEMPLATE_CONFIGS } from '@/data/template-configs';
import { useTheme } from '@/contexts/ThemeContext';

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

interface TemplateSelectorProps {
  onSelect: (template: TemplateConfig, variant: TemplateVariant) => void;
}

export const TemplateSelector = ({ onSelect }: TemplateSelectorProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | null>(null);

  const selectedTemplate = selectedCategory 
    ? TEMPLATE_CONFIGS.find(t => t.category === selectedCategory) 
    : null;

  const handleCategoryClick = (category: TemplateCategory) => {
    setSelectedCategory(category);
  };

  const handleVariantSelect = (variant: TemplateVariant) => {
    if (selectedTemplate) {
      onSelect(selectedTemplate, variant);
    }
  };

  const handleBack = () => {
    setSelectedCategory(null);
  };

  // Category grid view
  if (!selectedCategory) {
    return (
      <div className="space-y-4">
        <div className="text-center space-y-1">
          <h2 className="text-sm font-semibold text-foreground">Wybierz kategorię</h2>
          <p className="text-xs text-muted-foreground">10 kategorii szablonów do postów</p>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {TEMPLATE_CONFIGS.map((template) => {
            const IconComponent = iconMap[template.icon] || Star;
            return (
              <button
                key={template.id}
                onClick={() => handleCategoryClick(template.category)}
                className="group relative overflow-hidden rounded-xl border border-border bg-card p-3 text-left transition-all hover:border-primary/50 hover:shadow-md"
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
                  <span>{template.variants.length} warianty</span>
                </div>
                <ChevronRight className="absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5" />
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Variant selection view
  return (
    <div className="space-y-4">
      <button
        onClick={handleBack}
        className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-lg leading-none">←</span>
        <span>Wróć do kategorii</span>
      </button>

      <div className="text-center space-y-1">
        <div 
          className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${selectedTemplate?.defaultAccentColor}20` }}
        >
          {selectedTemplate && iconMap[selectedTemplate.icon] && (
            (() => {
              const IconComponent = iconMap[selectedTemplate.icon];
              return (
                <IconComponent className="h-6 w-6 text-primary" />
              );
            })()
          )}
        </div>
        <h2 className="text-sm font-semibold text-foreground">{selectedTemplate?.name}</h2>
        <p className="text-xs text-muted-foreground">Wybierz wariant layoutu</p>
      </div>

      <div className="space-y-2">
        {selectedTemplate?.variants.map((variant) => (
          <button
            key={variant.id}
            onClick={() => handleVariantSelect(variant)}
            className="group w-full overflow-hidden rounded-xl border border-border bg-card p-3 text-left transition-all hover:border-primary/50 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xs font-semibold text-foreground">{variant.name}</h3>
                <div className="mt-1 flex items-center gap-3 text-[10px] text-muted-foreground">
                  <span>
                    {variant.requiredImages === 0 
                      ? 'Bez zdjęć' 
                      : `${variant.requiredImages} ${variant.requiredImages === 1 ? 'zdjęcie' : 'zdjęcia'}`}
                  </span>
                  <span>•</span>
                  <span>{variant.textFields.length} pól tekstowych</span>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground/50 transition-transform group-hover:translate-x-0.5" />
            </div>
            
            {/* Layout preview placeholder */}
            <div className="mt-2 flex h-16 items-center justify-center rounded-lg bg-muted/50">
              <span className="text-[10px] text-muted-foreground">Podgląd: {variant.layout}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};
