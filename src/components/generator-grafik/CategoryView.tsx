import { useState } from 'react';
import { ArrowLeft, Wand2, Grid3X3 } from 'lucide-react';
import { TemplateConfig } from '@/types/generator-grafik';
import { GeneratorMode } from './GeneratorMode';
import { GalleryMode } from './GalleryMode';
import { SimpleEditor } from './SimpleEditor';
import { CennikTemplate, CENNIK_TEMPLATES } from '@/data/cennik-templates';

interface CalendarPostData {
  imageDataUrl: string;
  date: Date;
  time: string;
  platforms: ("instagram" | "facebook")[];
  title: string;
}

interface CategoryViewProps {
  template: TemplateConfig;
  onBack: () => void;
  onAddToCalendar?: (data: CalendarPostData) => void;
}

type TabMode = 'generator' | 'gallery';

export const CategoryView = ({ template, onBack, onAddToCalendar }: CategoryViewProps) => {
  const [activeTab, setActiveTab] = useState<TabMode>('generator');
  const [selectedTemplate, setSelectedTemplate] = useState<CennikTemplate | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  // Check if this category has templates
  const hasTemplates = template.category === 'cennik';
  const templates = hasTemplates ? CENNIK_TEMPLATES : [];

  const handleTemplateSelect = (tmpl: CennikTemplate) => {
    setSelectedTemplate(tmpl);
  };

  const handleBackFromEditor = () => {
    setSelectedTemplate(null);
  };

  // If template is selected, show editor
  if (selectedTemplate) {
    return (
      <SimpleEditor
        template={selectedTemplate}
        uploadedImages={uploadedImages}
        onBack={handleBackFromEditor}
        onAddToCalendar={onAddToCalendar}
      />
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <div>
          <h2 className="text-sm font-semibold text-foreground">{template.name}</h2>
          <p className="text-[10px] text-muted-foreground">{template.description}</p>
        </div>
      </div>

      {/* Tabs */}
      {hasTemplates ? (
        <>
          <div className="flex rounded-lg border border-border bg-muted/30 p-1">
            <button
              onClick={() => setActiveTab('generator')}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                activeTab === 'generator'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Wand2 className="h-3.5 w-3.5" />
              Generator
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-md px-3 py-2 text-xs font-medium transition-colors ${
                activeTab === 'gallery'
                  ? 'bg-card text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Grid3X3 className="h-3.5 w-3.5" />
              Galeria szablonów
            </button>
          </div>

          {/* Tab content */}
          {activeTab === 'generator' ? (
            <GeneratorMode
              templates={templates}
              uploadedImages={uploadedImages}
              onImagesChange={setUploadedImages}
              onSelectTemplate={handleTemplateSelect}
            />
          ) : (
            <GalleryMode
              templates={templates}
              onSelectTemplate={handleTemplateSelect}
            />
          )}
        </>
      ) : (
        // Placeholder for categories without templates yet
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
            <Grid3X3 className="h-7 w-7 text-muted-foreground" />
          </div>
          <h3 className="text-sm font-medium text-foreground">Wkrótce dostępne</h3>
          <p className="mt-1 text-xs text-muted-foreground max-w-[200px]">
            Szablony dla tej kategorii są w przygotowaniu
          </p>
        </div>
      )}
    </div>
  );
};
