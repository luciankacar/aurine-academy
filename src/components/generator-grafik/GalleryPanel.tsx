import { useState, useEffect } from 'react';
import { 
  Trash2, Download, Edit, CalendarPlus, Image, X, 
  Instagram, Facebook, MoreVertical 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SavedGraphic, STORAGE_KEYS } from '@/types/generator-grafik';
import { useTheme } from '@/contexts/ThemeContext';
import { TEMPLATE_CONFIGS } from '@/data/template-configs';

interface GalleryPanelProps {
  onEdit: (graphic: SavedGraphic) => void;
  onAddToCalendar: (imageDataUrl: string) => void;
  onClose: () => void;
}

export const GalleryPanel = ({ onEdit, onAddToCalendar, onClose }: GalleryPanelProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [graphics, setGraphics] = useState<SavedGraphic[]>([]);
  const [selectedGraphic, setSelectedGraphic] = useState<SavedGraphic | null>(null);
  const [showMenu, setShowMenu] = useState<string | null>(null);

  useEffect(() => {
    loadGraphics();
  }, []);

  const loadGraphics = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.GRAPHICS_GALLERY);
      if (stored) {
        const parsed = JSON.parse(stored);
        setGraphics(parsed.map((g: any) => ({
          ...g,
          createdAt: new Date(g.createdAt)
        })));
      }
    } catch {}
  };

  const handleDelete = (id: string) => {
    const updated = graphics.filter(g => g.id !== id);
    setGraphics(updated);
    localStorage.setItem(STORAGE_KEYS.GRAPHICS_GALLERY, JSON.stringify(updated));
    setShowMenu(null);
  };

  const handleDownload = (graphic: SavedGraphic) => {
    const link = document.createElement('a');
    link.download = `${graphic.name}.png`;
    link.href = graphic.imageDataUrl;
    link.click();
    setShowMenu(null);
  };

  const getCategoryName = (categoryId: string) => {
    const config = TEMPLATE_CONFIGS.find(t => t.category === categoryId);
    return config?.name || categoryId;
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('pl-PL', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-foreground">Moje Grafiki</h2>
          <p className="text-xs text-muted-foreground mt-0.5">
            {graphics.length} {graphics.length === 1 ? 'grafika' : 'grafik'}
          </p>
        </div>
        <button
          onClick={onClose}
          className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {graphics.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card py-12 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <Image className="h-6 w-6 text-muted-foreground" />
          </div>
          <p className="mt-3 text-sm font-medium text-foreground">Brak zapisanych grafik</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Stworzone grafiki pojawią się tutaj
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-2">
          {graphics.map((graphic) => (
            <div
              key={graphic.id}
              className="group relative overflow-hidden rounded-xl border border-border bg-card"
            >
              {/* Thumbnail */}
              <div 
                className="aspect-square cursor-pointer"
                onClick={() => setSelectedGraphic(graphic)}
              >
                <img
                  src={graphic.thumbnailUrl || graphic.imageDataUrl}
                  alt={graphic.name}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Info */}
              <div className="p-2">
                <p className="text-[10px] font-medium text-foreground truncate">
                  {graphic.name}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[9px] text-muted-foreground">
                    {getCategoryName(graphic.category)}
                  </span>
                  <div className="flex items-center gap-1">
                    {graphic.platforms.includes('instagram') && (
                      <Instagram className="h-3 w-3 text-pink-500" />
                    )}
                    {graphic.platforms.includes('facebook') && (
                      <Facebook className="h-3 w-3 text-blue-500" />
                    )}
                  </div>
                </div>
                <p className="text-[9px] text-muted-foreground mt-0.5">
                  {formatDate(graphic.createdAt)}
                </p>
              </div>

              {/* Menu button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMenu(showMenu === graphic.id ? null : graphic.id);
                }}
                className="absolute right-1.5 top-1.5 rounded-lg bg-black/50 p-1 opacity-0 transition-opacity group-hover:opacity-100"
              >
                <MoreVertical className="h-4 w-4 text-white" />
              </button>

              {/* Dropdown menu */}
              {showMenu === graphic.id && (
                <div className="absolute right-1.5 top-8 z-10 w-32 rounded-lg border border-border bg-card py-1 shadow-lg">
                  <button
                    onClick={() => {
                      onEdit(graphic);
                      setShowMenu(null);
                    }}
                    className="flex w-full items-center gap-2 px-3 py-1.5 text-[11px] text-foreground hover:bg-muted"
                  >
                    <Edit className="h-3 w-3" />
                    Edytuj
                  </button>
                  <button
                    onClick={() => handleDownload(graphic)}
                    className="flex w-full items-center gap-2 px-3 py-1.5 text-[11px] text-foreground hover:bg-muted"
                  >
                    <Download className="h-3 w-3" />
                    Pobierz
                  </button>
                  <button
                    onClick={() => {
                      onAddToCalendar(graphic.imageDataUrl);
                      setShowMenu(null);
                    }}
                    className="flex w-full items-center gap-2 px-3 py-1.5 text-[11px] text-foreground hover:bg-muted"
                  >
                    <CalendarPlus className="h-3 w-3" />
                    Do kalendarza
                  </button>
                  <div className="my-1 border-t border-border" />
                  <button
                    onClick={() => handleDelete(graphic.id)}
                    className="flex w-full items-center gap-2 px-3 py-1.5 text-[11px] text-destructive hover:bg-muted"
                  >
                    <Trash2 className="h-3 w-3" />
                    Usuń
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Full preview modal */}
      {selectedGraphic && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedGraphic(null)}
        >
          <div 
            className="relative max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedGraphic.imageDataUrl}
              alt={selectedGraphic.name}
              className="max-h-[85vh] max-w-full rounded-lg"
            />
            <button
              onClick={() => setSelectedGraphic(null)}
              className="absolute -right-2 -top-2 rounded-full bg-card p-2 shadow-lg"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="mt-3 flex items-center justify-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleDownload(selectedGraphic)}
                className="gap-1.5"
              >
                <Download className="h-3.5 w-3.5" />
                Pobierz
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                onClick={() => {
                  onAddToCalendar(selectedGraphic.imageDataUrl);
                  setSelectedGraphic(null);
                }}
                className="gap-1.5"
              >
                <CalendarPlus className="h-3.5 w-3.5" />
                Dodaj do kalendarza
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
