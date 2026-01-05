import { useState, useEffect } from 'react';
import { Palette, Type, Upload, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BrandKit, STORAGE_KEYS } from '@/types/generator-grafik';
import { useTheme } from '@/contexts/ThemeContext';

interface BrandKitPanelProps {
  onClose: () => void;
}

export const BrandKitPanel = ({ onClose }: BrandKitPanelProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  const [brandKit, setBrandKit] = useState<BrandKit>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.BRAND_KIT);
      if (stored) return JSON.parse(stored);
    } catch {}
    
    // Default values
    const profile = localStorage.getItem('aurine_profile');
    const salonName = profile ? JSON.parse(profile).salonName : 'Mój Salon';
    return {
      salonName,
      primaryColor: '#ec4899',
      secondaryColor: '#f472b6',
      fontStyle: 'modern' as const,
    };
  });

  const handleSave = () => {
    localStorage.setItem(STORAGE_KEYS.BRAND_KIT, JSON.stringify(brandKit));
    onClose();
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setBrandKit(prev => ({ ...prev, logoUrl: event.target?.result as string }));
    };
    reader.readAsDataURL(file);
  };

  const presetColors = [
    '#ec4899', '#ef4444', '#f59e0b', '#10b981', 
    '#06b6d4', '#8b5cf6', '#a855f7', '#1a1a1a'
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-foreground">Brand Kit</h2>
        <button
          onClick={onClose}
          className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <p className="text-xs text-muted-foreground">
        Dostosuj kolory i styl grafik do Twojego salonu
      </p>

      <div className="space-y-4 rounded-xl border border-border bg-card p-4">
        {/* Salon name */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-muted-foreground">
            Nazwa salonu
          </label>
          <input
            type="text"
            value={brandKit.salonName}
            onChange={(e) => setBrandKit(prev => ({ ...prev, salonName: e.target.value }))}
            className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            placeholder="Nazwa Twojego salonu"
          />
        </div>

        {/* Primary color */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-muted-foreground flex items-center gap-1.5">
            <Palette className="h-3 w-3" />
            Kolor główny
          </label>
          <div className="flex items-center gap-1.5 flex-wrap">
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => setBrandKit(prev => ({ ...prev, primaryColor: color }))}
                className={`h-8 w-8 rounded-lg border-2 transition-transform hover:scale-105 ${
                  brandKit.primaryColor === color ? 'border-foreground scale-105' : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
            <input
              type="color"
              value={brandKit.primaryColor}
              onChange={(e) => setBrandKit(prev => ({ ...prev, primaryColor: e.target.value }))}
              className="h-8 w-8 cursor-pointer rounded-lg border-0 bg-transparent"
            />
          </div>
        </div>

        {/* Secondary color */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-muted-foreground">
            Kolor akcentowy
          </label>
          <div className="flex items-center gap-1.5 flex-wrap">
            {presetColors.map((color) => (
              <button
                key={color}
                onClick={() => setBrandKit(prev => ({ ...prev, secondaryColor: color }))}
                className={`h-8 w-8 rounded-lg border-2 transition-transform hover:scale-105 ${
                  brandKit.secondaryColor === color ? 'border-foreground scale-105' : 'border-transparent'
                }`}
                style={{ backgroundColor: color }}
              />
            ))}
            <input
              type="color"
              value={brandKit.secondaryColor}
              onChange={(e) => setBrandKit(prev => ({ ...prev, secondaryColor: e.target.value }))}
              className="h-8 w-8 cursor-pointer rounded-lg border-0 bg-transparent"
            />
          </div>
        </div>

        {/* Font style */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-muted-foreground flex items-center gap-1.5">
            <Type className="h-3 w-3" />
            Styl czcionki
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['modern', 'elegant', 'minimal'] as const).map((style) => (
              <button
                key={style}
                onClick={() => setBrandKit(prev => ({ ...prev, fontStyle: style }))}
                className={`rounded-lg border px-3 py-2 text-xs font-medium transition-colors ${
                  brandKit.fontStyle === style
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary/50'
                }`}
              >
                {style === 'modern' ? 'Nowoczesny' : style === 'elegant' ? 'Elegancki' : 'Minimalistyczny'}
              </button>
            ))}
          </div>
        </div>

        {/* Logo upload */}
        <div className="space-y-1.5">
          <label className="text-[10px] font-medium text-muted-foreground flex items-center gap-1.5">
            <Upload className="h-3 w-3" />
            Logo salonu (opcjonalne)
          </label>
          {brandKit.logoUrl ? (
            <div className="relative">
              <img 
                src={brandKit.logoUrl} 
                alt="Logo salonu" 
                className="h-16 w-auto rounded-lg border border-border"
              />
              <button
                onClick={() => setBrandKit(prev => ({ ...prev, logoUrl: undefined }))}
                className="absolute -right-2 -top-2 rounded-full bg-destructive p-1 text-destructive-foreground"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <label className="block">
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                className="hidden"
              />
              <div className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted/50 py-4 text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary">
                <Upload className="h-4 w-4" />
                <span>Wgraj logo</span>
              </div>
            </label>
          )}
        </div>

        {/* Preview */}
        <div className="space-y-1.5 pt-2 border-t border-border">
          <label className="text-[10px] font-medium text-muted-foreground">
            Podgląd
          </label>
          <div 
            className="flex items-center justify-center rounded-lg p-4"
            style={{ backgroundColor: brandKit.primaryColor + '15' }}
          >
            <div className="text-center">
              <p 
                className="text-lg font-semibold"
                style={{ color: brandKit.primaryColor }}
              >
                {brandKit.salonName}
              </p>
              <p 
                className="text-xs mt-1"
                style={{ color: brandKit.secondaryColor }}
              >
                Przykładowy tekst
              </p>
            </div>
          </div>
        </div>
      </div>

      <Button variant="primary" onClick={handleSave} className="w-full gap-2">
        <Save className="h-4 w-4" />
        Zapisz Brand Kit
      </Button>
    </div>
  );
};
