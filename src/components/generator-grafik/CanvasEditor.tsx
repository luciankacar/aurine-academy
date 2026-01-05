import { useEffect, useRef, useState, useCallback } from 'react';
import { Canvas as FabricCanvas, Rect, Textbox, Image as FabricImage, Circle, FabricObject } from 'fabric';
import { 
  Upload, Type, Palette, Download, Save, CalendarPlus, 
  RotateCcw, ZoomIn, ZoomOut, Undo, ImageIcon, Smartphone, Square
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  TemplateConfig, TemplateVariant, CanvasSize, CANVAS_SIZES, 
  BrandKit, STORAGE_KEYS 
} from '@/types/generator-grafik';
import { useTheme } from '@/contexts/ThemeContext';

interface CanvasEditorProps {
  template: TemplateConfig;
  variant: TemplateVariant;
  onSave: (imageDataUrl: string, thumbnailUrl: string) => void;
  onAddToCalendar: (imageDataUrl: string) => void;
  onBack: () => void;
}

export const CanvasEditor = ({ 
  template, 
  variant, 
  onSave, 
  onAddToCalendar,
  onBack 
}: CanvasEditorProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [canvasSize, setCanvasSize] = useState<CanvasSize>('post');
  const [accentColor, setAccentColor] = useState(template.defaultAccentColor);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [textValues, setTextValues] = useState<Record<string, string>>({});
  const [zoom, setZoom] = useState(0.35);

  // Load brand kit
  const [brandKit, setBrandKit] = useState<BrandKit>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.BRAND_KIT);
      if (stored) return JSON.parse(stored);
    } catch {}
    
    // Default brand kit
    const profile = localStorage.getItem('aurine_profile');
    const salonName = profile ? JSON.parse(profile).salonName : 'Mój Salon';
    return {
      salonName,
      primaryColor: '#ec4899',
      secondaryColor: '#f472b6',
      fontStyle: 'modern' as const,
    };
  });

  // Initialize canvas
  useEffect(() => {
    if (!canvasRef.current) return;

    const dimensions = CANVAS_SIZES[canvasSize];
    const canvas = new FabricCanvas(canvasRef.current, {
      width: dimensions.width,
      height: dimensions.height,
      backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
      selection: true,
    });

    setFabricCanvas(canvas);
    initializeTemplate(canvas, dimensions);

    return () => {
      canvas.dispose();
    };
  }, [canvasSize]);

  // Update canvas when accent color changes
  useEffect(() => {
    if (!fabricCanvas) return;
    updateAccentColor(fabricCanvas, accentColor);
  }, [accentColor, fabricCanvas]);

  const initializeTemplate = (canvas: FabricCanvas, dimensions: { width: number; height: number }) => {
    // Clear canvas
    canvas.clear();
    canvas.backgroundColor = isDark ? '#1a1a1a' : '#ffffff';

    // Add background gradient/shape based on template
    const bgRect = new Rect({
      left: 0,
      top: 0,
      width: dimensions.width,
      height: dimensions.height,
      fill: accentColor + '15',
      selectable: false,
      evented: false,
    });
    canvas.add(bgRect);

    // Add accent decorations
    const accentCircle = new Circle({
      left: dimensions.width - 200,
      top: -100,
      radius: 300,
      fill: accentColor + '20',
      selectable: false,
      evented: false,
    });
    canvas.add(accentCircle);

    // Add text fields from variant config
    const initialTextValues: Record<string, string> = {};
    variant.textFields.forEach((field, index) => {
      const textbox = new Textbox(field.defaultValue, {
        left: field.position.x,
        top: field.position.y,
        fontSize: field.fontSize,
        fontFamily: 'Inter, sans-serif',
        fill: isDark ? '#ffffff' : '#1a1a1a',
        textAlign: 'center',
        originX: 'center',
        originY: 'center',
        width: dimensions.width * 0.8,
        editable: true,
        name: field.id,
      });
      canvas.add(textbox);
      initialTextValues[field.id] = field.defaultValue;
    });
    setTextValues(initialTextValues);

    // Add image placeholders if needed
    if (variant.requiredImages > 0) {
      const placeholderSize = variant.layout === 'split' 
        ? { width: dimensions.width / 2 - 40, height: dimensions.height * 0.6 }
        : { width: dimensions.width * 0.7, height: dimensions.height * 0.5 };

      for (let i = 0; i < variant.requiredImages; i++) {
        const xOffset = variant.layout === 'split' 
          ? (i === 0 ? dimensions.width * 0.25 : dimensions.width * 0.75)
          : dimensions.width / 2;

        const placeholder = new Rect({
          left: xOffset,
          top: dimensions.height * 0.45,
          width: placeholderSize.width,
          height: placeholderSize.height,
          fill: isDark ? '#2a2a2a' : '#f0f0f0',
          stroke: accentColor + '50',
          strokeWidth: 2,
          strokeDashArray: [10, 5],
          rx: 12,
          ry: 12,
          originX: 'center',
          originY: 'center',
          name: `image-placeholder-${i}`,
        });
        canvas.add(placeholder);
      }
    }

    // Add salon name watermark
    const watermark = new Textbox(brandKit.salonName, {
      left: dimensions.width / 2,
      top: dimensions.height - 40,
      fontSize: 18,
      fontFamily: 'Inter, sans-serif',
      fill: isDark ? '#ffffff40' : '#00000030',
      textAlign: 'center',
      originX: 'center',
      originY: 'center',
      selectable: false,
      evented: false,
    });
    canvas.add(watermark);

    canvas.renderAll();
  };

  const updateAccentColor = (canvas: FabricCanvas, color: string) => {
    canvas.getObjects().forEach((obj: FabricObject) => {
      if (obj.type === 'circle' && !obj.selectable) {
        obj.set('fill', color + '20');
      }
      if (obj.type === 'rect' && (obj as any).name?.startsWith('image-placeholder')) {
        obj.set('stroke', color + '50');
      }
    });
    canvas.renderAll();
  };

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !fabricCanvas) return;

    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const imgUrl = event.target?.result as string;
      setUploadedImages(prev => [...prev, imgUrl]);

      // Find first empty placeholder and replace it
      const placeholders = fabricCanvas.getObjects().filter(
        (obj: FabricObject) => (obj as any).name?.startsWith('image-placeholder')
      );
      
      if (placeholders.length > 0) {
        const placeholder = placeholders[0];
        const img = document.createElement('img');
        img.src = imgUrl;
        img.onload = () => {
          const fabricImg = new FabricImage(img, {
            left: placeholder.left,
            top: placeholder.top,
            originX: 'center',
            originY: 'center',
            scaleX: (placeholder.width! * (placeholder.scaleX || 1)) / img.width,
            scaleY: (placeholder.height! * (placeholder.scaleY || 1)) / img.height,
          });
          
          fabricCanvas.remove(placeholder);
          fabricCanvas.add(fabricImg);
          fabricCanvas.renderAll();
        };
      }
    };

    reader.readAsDataURL(file);
    e.target.value = '';
  }, [fabricCanvas]);

  const handleExport = useCallback(() => {
    if (!fabricCanvas) return;

    // Export full size
    const dataUrl = fabricCanvas.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1,
    });

    // Export thumbnail
    const thumbnailUrl = fabricCanvas.toDataURL({
      format: 'png',
      quality: 0.8,
      multiplier: 0.2,
    });

    onSave(dataUrl, thumbnailUrl);
  }, [fabricCanvas, onSave]);

  const handleDownload = useCallback(() => {
    if (!fabricCanvas) return;

    const dataUrl = fabricCanvas.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1,
    });

    const link = document.createElement('a');
    link.download = `${template.name}-${canvasSize}.png`;
    link.href = dataUrl;
    link.click();
  }, [fabricCanvas, template.name, canvasSize]);

  const handleAddToCalendar = useCallback(() => {
    if (!fabricCanvas) return;

    const dataUrl = fabricCanvas.toDataURL({
      format: 'png',
      quality: 1,
      multiplier: 1,
    });

    onAddToCalendar(dataUrl);
  }, [fabricCanvas, onAddToCalendar]);

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.1, 1));
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.1, 0.2));

  const handleReset = () => {
    if (!fabricCanvas) return;
    const dimensions = CANVAS_SIZES[canvasSize];
    initializeTemplate(fabricCanvas, dimensions);
    setUploadedImages([]);
  };

  const presetColors = [
    '#ec4899', '#ef4444', '#f59e0b', '#10b981', 
    '#06b6d4', '#8b5cf6', '#f472b6', '#1a1a1a'
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-1.5 text-[11px] text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-lg leading-none">←</span>
          <span>Wróć do wyboru</span>
        </button>
        <h2 className="text-sm font-semibold text-foreground">{template.name}</h2>
      </div>

      {/* Size selector */}
      <div className="flex items-center justify-center gap-2">
        {(Object.keys(CANVAS_SIZES) as CanvasSize[]).map((size) => (
          <button
            key={size}
            onClick={() => setCanvasSize(size)}
            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[10px] font-medium transition-colors ${
              canvasSize === size
                ? 'bg-primary text-primary-foreground'
                : 'bg-card border border-border text-muted-foreground hover:text-foreground'
            }`}
          >
            {size === 'story' ? <Smartphone className="h-3 w-3" /> : <Square className="h-3 w-3" />}
            {CANVAS_SIZES[size].label}
          </button>
        ))}
      </div>

      {/* Canvas container */}
      <div 
        ref={containerRef}
        className="relative overflow-auto rounded-xl border border-border bg-muted/30 p-4"
        style={{ maxHeight: '50vh' }}
      >
        <div 
          className="mx-auto"
          style={{ 
            transform: `scale(${zoom})`,
            transformOrigin: 'top center',
            width: CANVAS_SIZES[canvasSize].width,
            height: CANVAS_SIZES[canvasSize].height * zoom + 40,
          }}
        >
          <canvas ref={canvasRef} className="rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Zoom controls */}
      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" size="sm" onClick={handleZoomOut} className="h-8 w-8 p-0">
          <ZoomOut className="h-4 w-4" />
        </Button>
        <span className="text-xs text-muted-foreground w-12 text-center">{Math.round(zoom * 100)}%</span>
        <Button variant="outline" size="sm" onClick={handleZoomIn} className="h-8 w-8 p-0">
          <ZoomIn className="h-4 w-4" />
        </Button>
      </div>

      {/* Toolbar */}
      <div className="space-y-3 rounded-xl border border-border bg-card p-3">
        {/* Image upload */}
        {variant.requiredImages > 0 && (
          <div className="flex items-center gap-2">
            <label className="flex-1">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
              <div className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/50 py-3 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                <Upload className="h-4 w-4" />
                <span>Dodaj zdjęcie ({uploadedImages.length}/{variant.requiredImages})</span>
              </div>
            </label>
          </div>
        )}

        {/* Color picker */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-muted-foreground flex items-center gap-1.5">
            <Palette className="h-3 w-3" />
            Kolor akcentu
          </label>
          <div className="flex items-center gap-1.5">
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => setAccentColor(color)}
                className={`h-6 w-6 rounded-full border-2 transition-transform hover:scale-110 ${
                  accentColor === color ? 'border-foreground scale-110' : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
            <input
              type="color"
              value={accentColor}
              onChange={(e) => setAccentColor(e.target.value)}
              className="h-6 w-6 cursor-pointer rounded-full border-0 bg-transparent"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 pt-2 border-t border-border">
          <Button variant="outline" size="sm" onClick={handleReset} className="h-8 gap-1.5 text-xs">
            <RotateCcw className="h-3 w-3" />
            Reset
          </Button>
          <div className="flex-1" />
          <Button variant="outline" size="sm" onClick={handleDownload} className="h-8 gap-1.5 text-xs">
            <Download className="h-3 w-3" />
            Pobierz
          </Button>
          <Button variant="outline" size="sm" onClick={handleAddToCalendar} className="h-8 gap-1.5 text-xs">
            <CalendarPlus className="h-3 w-3" />
            Kalendarz
          </Button>
          <Button variant="primary" size="sm" onClick={handleExport} className="h-8 gap-1.5 text-xs">
            <Save className="h-3 w-3" />
            Zapisz
          </Button>
        </div>
      </div>
    </div>
  );
};
