// Brand Kit types
export interface BrandKit {
  salonName: string;
  primaryColor: string;
  secondaryColor: string;
  logoUrl?: string;
  fontStyle: 'modern' | 'elegant' | 'minimal';
}

// Template types
export type TemplateCategory = 
  | 'przed-po'
  | 'cennik'
  | 'promocja'
  | 'metamorfoza'
  | 'sezonowy'
  | 'nowosc'
  | 'porada'
  | 'opinia'
  | 'atmosfera'
  | 'wydarzenie';

export interface TemplateVariant {
  id: string;
  name: string;
  previewUrl?: string;
  layout: 'single' | 'split' | 'collage' | 'minimal';
  requiredImages: number;
  textFields: TextFieldConfig[];
}

export interface TextFieldConfig {
  id: string;
  label: string;
  defaultValue: string;
  maxLength: number;
  fontSize: number;
  position: { x: number; y: number };
}

export interface TemplateConfig {
  id: string;
  category: TemplateCategory;
  name: string;
  description: string;
  icon: string;
  variants: TemplateVariant[];
  defaultAccentColor: string;
}

// Canvas size presets
export type CanvasSize = 'post' | 'story' | 'cover';

export interface CanvasDimensions {
  width: number;
  height: number;
  label: string;
}

export const CANVAS_SIZES: Record<CanvasSize, CanvasDimensions> = {
  post: { width: 1080, height: 1080, label: 'Post (1:1)' },
  story: { width: 1080, height: 1920, label: 'Story (9:16)' },
  cover: { width: 820, height: 312, label: 'Cover' },
};

// Saved graphic types
export interface SavedGraphic {
  id: string;
  templateId: string;
  category: TemplateCategory;
  variantId: string;
  imageDataUrl: string;
  thumbnailUrl: string;
  createdAt: Date;
  platforms: ('instagram' | 'facebook')[];
  size: CanvasSize;
  name: string;
}

// Editor state
export interface EditorState {
  selectedTemplate: TemplateConfig | null;
  selectedVariant: TemplateVariant | null;
  uploadedImages: string[];
  textValues: Record<string, string>;
  accentColor: string;
  canvasSize: CanvasSize;
}

// localStorage keys
export const STORAGE_KEYS = {
  BRAND_KIT: 'aurine_brand_kit',
  GRAPHICS_GALLERY: 'aurine_graphics_gallery',
  GENERATOR_DRAFTS: 'aurine_generator_drafts',
} as const;
