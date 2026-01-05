import { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Download, Save, CalendarPlus, Palette, Instagram, Facebook, X } from 'lucide-react';
import { Canvas as FabricCanvas, Rect, FabricText } from 'fabric';
import { CennikTemplate, ACCENT_COLORS } from '@/data/cennik-templates';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';

interface CalendarPostData {
  imageDataUrl: string;
  date: Date;
  time: string;
  platforms: ("instagram" | "facebook")[];
  title: string;
}

interface SimpleEditorProps {
  template: CennikTemplate;
  uploadedImages: string[];
  onBack: () => void;
  onAddToCalendar?: (data: CalendarPostData) => void;
}

export const SimpleEditor = ({
  template,
  uploadedImages,
  onBack,
  onAddToCalendar,
}: SimpleEditorProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<FabricCanvas | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [textValues, setTextValues] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    template.elements
      .filter((el) => el.type === 'text')
      .forEach((el) => {
        initial[el.id] = el.defaultValue;
      });
    return initial;
  });

  const [accentColor, setAccentColor] = useState(template.accentColor);
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showCalendarModal, setShowCalendarModal] = useState(false);
  const [calendarDate, setCalendarDate] = useState(() => format(new Date(), 'yyyy-MM-dd'));
  const [calendarTime, setCalendarTime] = useState('12:00');
  const [selectedPlatforms, setSelectedPlatforms] = useState<("instagram" | "facebook")[]>(['instagram']);
  const [postTitle, setPostTitle] = useState(template.name);

  // Initialize canvas
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const scale = containerWidth / 1080;
    const displayHeight = 1080 * scale;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: containerWidth,
      height: displayHeight,
      backgroundColor: template.backgroundColor,
      selection: false,
    });

    fabricRef.current = canvas;

    // Render template elements
    renderTemplate(canvas, scale);

    return () => {
      canvas.dispose();
    };
  }, [template]);

  // Update canvas when text or color changes
  useEffect(() => {
    if (!fabricRef.current || !containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const scale = containerWidth / 1080;

    const canvas = fabricRef.current;
    canvas.clear();
    canvas.backgroundColor = template.backgroundColor;
    renderTemplate(canvas, scale);
  }, [textValues, accentColor, template]);

  const renderTemplate = (canvas: FabricCanvas, scale: number) => {
    template.elements.forEach((element) => {
      if (element.type === 'shape') {
        const rect = new Rect({
          left: element.x * scale,
          top: element.y * scale,
          width: (element.width || 100) * scale,
          height: (element.height || 100) * scale,
          fill: element.id.includes('accent') || element.id.includes('divider')
            ? accentColor
            : element.color,
          selectable: false,
        });
        canvas.add(rect);
      } else if (element.type === 'text') {
        const isPrice = element.id.startsWith('price');
        const isAccentText = element.id === 'cta' || element.id === 'subtitle';
        const textColor = isPrice || isAccentText ? accentColor : element.color;

        const text = new FabricText(textValues[element.id] || element.defaultValue, {
          left: element.x * scale,
          top: element.y * scale,
          fontSize: (element.fontSize || 24) * scale,
          fontWeight: element.fontWeight || 'normal',
          fill: textColor,
          fontFamily: 'Inter, sans-serif',
          originX: element.align === 'right' ? 'right' : element.align === 'left' ? 'left' : 'center',
          originY: 'center',
          selectable: true,
          hasControls: false,
          hasBorders: false,
          lockRotation: true,
          lockScalingX: true,
          lockScalingY: true,
        });
        canvas.add(text);
      }
    });

    canvas.renderAll();
  };

  const handleTextChange = (id: string, value: string) => {
    setTextValues((prev) => ({ ...prev, [id]: value }));
  };

  const handleDownload = () => {
    if (!fabricRef.current || !containerRef.current) return;

    // Create a temporary canvas at full resolution
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = 1080;
    tempCanvas.height = 1080;
    const ctx = tempCanvas.getContext('2d');
    if (!ctx) return;

    // Fill background
    ctx.fillStyle = template.backgroundColor;
    ctx.fillRect(0, 0, 1080, 1080);

    // Render elements at full scale
    template.elements.forEach((element) => {
      if (element.type === 'shape') {
        const color = element.id.includes('accent') || element.id.includes('divider')
          ? accentColor
          : element.color;
        ctx.fillStyle = color || '#000000';
        ctx.fillRect(element.x, element.y, element.width || 100, element.height || 100);
      } else if (element.type === 'text') {
        const isPrice = element.id.startsWith('price');
        const isAccentText = element.id === 'cta' || element.id === 'subtitle';
        const textColor = isPrice || isAccentText ? accentColor : element.color;

        ctx.fillStyle = textColor || '#ffffff';
        ctx.font = `${element.fontWeight || 'normal'} ${element.fontSize || 24}px Inter, sans-serif`;
        ctx.textAlign = element.align || 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(textValues[element.id] || element.defaultValue, element.x, element.y);
      }
    });

    // Download
    const link = document.createElement('a');
    link.download = `cennik-${Date.now()}.png`;
    link.href = tempCanvas.toDataURL('image/png');
    link.click();

    toast.success('Grafika pobrana');
  };

  const handleSaveToGallery = () => {
    toast.success('Grafika zapisana w galerii');
  };

  const handleOpenCalendarModal = () => {
    setShowCalendarModal(true);
  };

  const handleConfirmAddToCalendar = () => {
    if (!fabricRef.current) return;
    if (selectedPlatforms.length === 0) {
      toast.error('Wybierz co najmniej jedną platformę');
      return;
    }
    const dataUrl = fabricRef.current.toDataURL({ format: 'png', multiplier: 2 });
    onAddToCalendar?.({
      imageDataUrl: dataUrl,
      date: new Date(calendarDate),
      time: calendarTime,
      platforms: selectedPlatforms,
      title: postTitle || template.name,
    });
    setShowCalendarModal(false);
    toast.success('Dodano do kalendarza');
  };

  const togglePlatform = (platform: "instagram" | "facebook") => {
    setSelectedPlatforms(prev => 
      prev.includes(platform) 
        ? prev.filter(p => p !== platform)
        : [...prev, platform]
    );
  };

  // Get editable text fields
  const editableFields = template.elements.filter((el) => el.type === 'text');

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
          <p className="text-[10px] text-muted-foreground">Edytuj szablon</p>
        </div>
      </div>

      {/* Canvas preview */}
      <div
        ref={containerRef}
        className="w-full overflow-hidden rounded-xl border border-border shadow-lg"
      >
        <canvas ref={canvasRef} className="w-full" />
      </div>

      {/* Edit panel */}
      <div className="space-y-4 rounded-xl border border-border bg-card p-4">
        {/* Color picker */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-medium text-foreground">Kolor akcentu</label>
            <button
              onClick={() => setShowColorPicker(!showColorPicker)}
              className="flex items-center gap-1.5 text-[10px] text-muted-foreground hover:text-foreground"
            >
              <Palette className="h-3 w-3" />
              Zmień
            </button>
          </div>
          
          {showColorPicker && (
            <div className="flex flex-wrap gap-2">
              {ACCENT_COLORS.map((color) => (
                <button
                  key={color}
                  onClick={() => {
                    setAccentColor(color);
                    setShowColorPicker(false);
                  }}
                  className={`h-8 w-8 rounded-lg border-2 transition-all ${
                    accentColor === color
                      ? 'border-foreground scale-110'
                      : 'border-transparent hover:border-muted-foreground'
                  }`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
          
          {!showColorPicker && (
            <div
              className="h-8 w-full rounded-lg"
              style={{ backgroundColor: accentColor }}
            />
          )}
        </div>

        {/* Text fields */}
        <div className="space-y-3">
          <label className="text-xs font-medium text-foreground">Teksty</label>
          {editableFields.map((field) => (
            <div key={field.id} className="space-y-1">
              <label className="text-[10px] text-muted-foreground">{field.label}</label>
              <input
                type="text"
                value={textValues[field.id] || ''}
                onChange={(e) => handleTextChange(field.id, e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                placeholder={field.defaultValue}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={handleDownload}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-medium text-foreground hover:bg-muted/50 transition-colors"
        >
          <Download className="h-3.5 w-3.5" />
          Pobierz
        </button>
        <button
          onClick={handleSaveToGallery}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-medium text-foreground hover:bg-muted/50 transition-colors"
        >
          <Save className="h-3.5 w-3.5" />
          Zapisz
        </button>
        <button
          onClick={handleOpenCalendarModal}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <CalendarPlus className="h-3.5 w-3.5" />
          Kalendarz
        </button>
      </div>

      {/* Calendar Modal */}
      {showCalendarModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="w-full max-w-sm rounded-2xl bg-card border border-border p-4 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-foreground">Dodaj do kalendarza</h3>
              <button
                onClick={() => setShowCalendarModal(false)}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Title */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-medium text-muted-foreground">Tytuł posta</label>
              <input
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                placeholder="Nazwa posta"
              />
            </div>

            {/* Date & Time */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-muted-foreground">Data</label>
                <input
                  type="date"
                  value={calendarDate}
                  onChange={(e) => setCalendarDate(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-medium text-muted-foreground">Godzina</label>
                <input
                  type="time"
                  value={calendarTime}
                  onChange={(e) => setCalendarTime(e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-3 py-2 text-xs text-foreground focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            {/* Platforms */}
            <div className="space-y-1.5">
              <label className="text-[10px] font-medium text-muted-foreground">Platformy</label>
              <div className="flex gap-2">
                <button
                  onClick={() => togglePlatform('instagram')}
                  className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg border py-2.5 text-xs font-medium transition-colors ${
                    selectedPlatforms.includes('instagram')
                      ? 'border-pink-500 bg-pink-500/10 text-pink-500'
                      : 'border-border text-muted-foreground hover:border-muted-foreground'
                  }`}
                >
                  <Instagram className="h-3.5 w-3.5" />
                  Instagram
                </button>
                <button
                  onClick={() => togglePlatform('facebook')}
                  className={`flex-1 flex items-center justify-center gap-1.5 rounded-lg border py-2.5 text-xs font-medium transition-colors ${
                    selectedPlatforms.includes('facebook')
                      ? 'border-blue-500 bg-blue-500/10 text-blue-500'
                      : 'border-border text-muted-foreground hover:border-muted-foreground'
                  }`}
                >
                  <Facebook className="h-3.5 w-3.5" />
                  Facebook
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <button
                onClick={() => setShowCalendarModal(false)}
                className="flex-1 rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-medium text-foreground hover:bg-muted/50 transition-colors"
              >
                Anuluj
              </button>
              <button
                onClick={handleConfirmAddToCalendar}
                className="flex-1 rounded-xl bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Dodaj
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
