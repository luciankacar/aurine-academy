import { useRef, useState } from 'react';
import { Upload, Wand2, X, Image as ImageIcon } from 'lucide-react';
import { CennikTemplate } from '@/data/cennik-templates';

interface GeneratorModeProps {
  templates: CennikTemplate[];
  uploadedImages: string[];
  onImagesChange: (images: string[]) => void;
  onSelectTemplate: (template: CennikTemplate) => void;
}

export const GeneratorMode = ({
  templates,
  uploadedImages,
  onImagesChange,
  onSelectTemplate,
}: GeneratorModeProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [generatedVariants, setGeneratedVariants] = useState<CennikTemplate[] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string;
        onImagesChange([...uploadedImages, dataUrl]);
      };
      reader.readAsDataURL(file);
    });

    // Reset input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation delay
    setTimeout(() => {
      // Return all 4 templates as "variants"
      setGeneratedVariants(templates);
      setIsGenerating(false);
    }, 800);
  };

  const handleReset = () => {
    setGeneratedVariants(null);
  };

  // Show generated variants
  if (generatedVariants) {
    return (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs font-semibold text-foreground">Wybierz wariant</h3>
            <p className="text-[10px] text-muted-foreground">Kliknij aby edytować</p>
          </div>
          <button
            onClick={handleReset}
            className="text-[10px] text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Wygeneruj ponownie
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {generatedVariants.map((variant) => (
            <button
              key={variant.id}
              onClick={() => onSelectTemplate(variant)}
              className="group relative overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/50 hover:shadow-md"
            >
              {/* Preview */}
              <div
                className="aspect-square w-full"
                style={{ backgroundColor: variant.backgroundColor }}
              >
                <div className="flex h-full items-center justify-center p-3">
                  <span
                    className="text-center text-sm font-bold"
                    style={{ color: variant.accentColor }}
                  >
                    CENNIK
                  </span>
                </div>
              </div>
              {/* Name */}
              <div className="p-2 border-t border-border">
                <span className="text-[10px] font-medium text-foreground">{variant.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Upload section */}
      <div className="space-y-2">
        <label className="text-xs font-medium text-foreground">
          Dodaj zdjęcia (opcjonalnie)
        </label>
        
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileSelect}
          className="hidden"
        />

        {uploadedImages.length === 0 ? (
          <button
            onClick={() => fileInputRef.current?.click()}
            className="w-full flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-border bg-muted/30 p-6 text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
          >
            <Upload className="h-6 w-6" />
            <span className="text-xs">Kliknij aby dodać zdjęcia</span>
          </button>
        ) : (
          <div className="space-y-2">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {uploadedImages.map((img, index) => (
                <div
                  key={index}
                  className="relative flex-shrink-0 h-20 w-20 rounded-lg overflow-hidden border border-border"
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-black/60 text-white hover:bg-black/80"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex-shrink-0 h-20 w-20 flex items-center justify-center rounded-lg border-2 border-dashed border-border text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
              >
                <ImageIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={isGenerating}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {isGenerating ? (
          <>
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
            <span>Generowanie...</span>
          </>
        ) : (
          <>
            <Wand2 className="h-4 w-4" />
            <span>Generuj warianty</span>
          </>
        )}
      </button>

      {/* Info */}
      <p className="text-center text-[10px] text-muted-foreground">
        Wygenerujemy 4 różne szablony do wyboru
      </p>
    </div>
  );
};
