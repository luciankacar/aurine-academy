import { useMemo, useState } from "react";
import { createPortal } from "react-dom";
import {
  Bookmark,
  Check,
  Copy,
  Download,
  Facebook,
  Hash,
  Heart,
  Instagram,
  MessageCircle,
  MoreHorizontal,
  Send,
  Share2,
  ThumbsUp,
  X,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface Template {
  id: number;
  title: string;
  category: string;
  platforms: ("instagram" | "facebook")[];
  description: string;
  caption: string;
  hashtags: string[];
  imageUrl: string;
}

interface TemplateDetailModalProps {
  template: Template;
  isOpen: boolean;
  onClose: () => void;
}

const getSalonName = () => {
  try {
    const saved = localStorage.getItem("aurine_profile");
    if (saved) {
      const profile = JSON.parse(saved);
      return profile.salonName || "Twój Salon";
    }
  } catch {
    // ignore
  }
  return "Twój Salon";
};

const TemplateDetailModal = ({
  template,
  isOpen,
  onClose,
}: TemplateDetailModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const [previewPlatform, setPreviewPlatform] = useState<"instagram" | "facebook">(
    template.platforms[0] || "instagram"
  );
  const [copiedCaption, setCopiedCaption] = useState(false);
  const [copiedHashtags, setCopiedHashtags] = useState(false);

  const salonName = useMemo(() => getSalonName(), []);
  const handle = useMemo(
    () => salonName.toLowerCase().replace(/\s+/g, "_"),
    [salonName]
  );

  if (!isOpen) return null;

  const handleCopyCaption = () => {
    navigator.clipboard.writeText(template.caption);
    setCopiedCaption(true);
    setTimeout(() => setCopiedCaption(false), 2000);
  };

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText(template.hashtags.join(" "));
    setCopiedHashtags(true);
    setTimeout(() => setCopiedHashtags(false), 2000);
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(template.imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${template.title.replace(/\s+/g, "-").toLowerCase()}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch {
      // ignore
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex flex-col bg-background">
      {/* Header */}
      <header className="shrink-0 flex items-center justify-between gap-3 px-4 py-3 border-b border-border bg-card">
        <button
          onClick={onClose}
          className="h-10 w-10 shrink-0 rounded-2xl bg-muted text-foreground flex items-center justify-center hover:bg-accent transition-colors"
          aria-label="Zamknij"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex-1 min-w-0 text-center">
          <h2 className="text-sm font-bold text-foreground truncate">
            {template.title}
          </h2>
          <p className="text-[10px] text-muted-foreground">{template.category}</p>
        </div>

        <button
          onClick={handleDownload}
          className="h-10 px-4 shrink-0 rounded-2xl bg-primary text-primary-foreground text-xs font-semibold flex items-center gap-2 shadow-lg shadow-primary/20"
        >
          <Download className="h-4 w-4" />
          Pobierz
        </button>
      </header>

      <div className="flex-1 overflow-y-auto">
        {/* Platform Toggle */}
        <div className="sticky top-0 z-10 px-4 py-3 bg-background">
          <div className="flex rounded-2xl p-1 bg-card border border-border">
            {template.platforms.includes("instagram") && (
              <button
                onClick={() => setPreviewPlatform("instagram")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                  previewPlatform === "instagram"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Instagram className="h-5 w-5" />
                Instagram
              </button>
            )}
            {template.platforms.includes("facebook") && (
              <button
                onClick={() => setPreviewPlatform("facebook")}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${
                  previewPlatform === "facebook"
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Facebook className="h-5 w-5" />
                Facebook
              </button>
            )}
          </div>
        </div>

        {/* 3D Preview Stage */}
        <section className="px-4 pb-6" aria-label="Podgląd posta">
          {/* Outer glow layer */}
          <div
            className={`relative rounded-[2.5rem] p-5 ${
              isDark
                ? "bg-gradient-to-b from-primary/10 via-transparent to-transparent"
                : "bg-gradient-to-b from-primary/5 via-transparent to-transparent"
            }`}
          >
            {/* Shadow/depth layer */}
            <div
              className={`absolute inset-5 rounded-[2rem] ${
                isDark
                  ? "shadow-[0_50px_100px_-35px_hsl(var(--primary)/0.28),0_30px_60px_-25px_hsl(var(--foreground)/0.22)]"
                  : "shadow-[0_40px_80px_-30px_hsl(var(--primary)/0.18),0_25px_50px_-20px_hsl(var(--foreground)/0.16)]"
              }`}
            />

            {/* Card frame */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="bg-card">
                {previewPlatform === "instagram" ? (
                  <InstagramPreview
                    template={template}
                    salonName={salonName}
                    handle={handle}
                  />
                ) : (
                  <FacebookPreview template={template} salonName={salonName} />
                )}
              </div>
            </div>

            {/* Reflection effect */}
            <div
              className={`absolute -bottom-4 left-8 right-8 h-16 rounded-[2rem] ${
                isDark
                  ? "bg-gradient-to-b from-primary/8 to-transparent blur-xl"
                  : "bg-gradient-to-b from-primary/5 to-transparent blur-xl"
              }`}
            />
          </div>
        </section>

        {/* Caption */}
        <section className="mx-4 mb-4 rounded-3xl overflow-hidden bg-card shadow-lg">
          <div className="flex items-center justify-between px-4 py-3.5 bg-muted/30">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Copy className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                Tekst posta
              </span>
            </div>
            <button
              onClick={handleCopyCaption}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                copiedCaption
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-foreground hover:bg-muted"
              }`}
            >
              {copiedCaption ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copiedCaption ? "Skopiowano!" : "Kopiuj"}
            </button>
          </div>
          <div className="p-4">
            <pre className="text-sm whitespace-pre-wrap font-sans leading-relaxed text-foreground/90">
              {template.caption}
            </pre>
          </div>
        </section>

        {/* Hashtags */}
        <section className="mx-4 mb-8 rounded-3xl overflow-hidden bg-card shadow-lg">
          <div className="flex items-center justify-between px-4 py-3.5 bg-muted/30">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Hash className="h-4 w-4 text-primary" />
              </div>
              <span className="text-sm font-semibold text-foreground">
                Hashtagi ({template.hashtags.length})
              </span>
            </div>
            <button
              onClick={handleCopyHashtags}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                copiedHashtags
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-foreground hover:bg-muted"
              }`}
            >
              {copiedHashtags ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
              {copiedHashtags ? "Skopiowano!" : "Kopiuj"}
            </button>
          </div>
          <div className="p-4">
            <div className="flex flex-wrap gap-2">
              {template.hashtags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex px-3 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>,
    document.body
  );
};

/* ───────────────────────────────────────────────────────────────────────────
   Instagram Preview
─────────────────────────────────────────────────────────────────────────── */
const InstagramPreview = ({
  template,
  salonName,
  handle,
}: {
  template: Template;
  salonName: string;
  handle: string;
}) => {
  return (
    <article>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary via-primary/80 to-primary/60 p-[2px]">
            <div className="h-full w-full rounded-full bg-card flex items-center justify-center">
              <span className="text-sm font-bold text-foreground">
                {salonName.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">{handle}</p>
            <p className="text-[11px] text-muted-foreground">Salon kosmetyczny</p>
          </div>
        </div>
        <MoreHorizontal className="h-6 w-6 text-muted-foreground" />
      </div>

      {/* Image */}
      <div className="aspect-square bg-muted">
        <img
          src={template.imageUrl}
          alt={`${template.title} - podgląd Instagram`}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Actions */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-5">
            <Heart className="h-7 w-7 text-foreground" />
            <MessageCircle className="h-7 w-7 text-foreground" />
            <Send className="h-7 w-7 text-foreground" />
          </div>
          <Bookmark className="h-7 w-7 text-foreground" />
        </div>
        <p className="text-sm font-bold mb-2 text-foreground">128 polubień</p>
        <p className="text-sm text-foreground/90">
          <span className="font-semibold">{handle}</span>{" "}
          <span className="line-clamp-2">{template.caption.split("\n")[0]}</span>
        </p>
        <p className="text-[11px] mt-2 text-muted-foreground">2 godziny temu</p>
      </div>
    </article>
  );
};

/* ───────────────────────────────────────────────────────────────────────────
   Facebook Preview
─────────────────────────────────────────────────────────────────────────── */
const FacebookPreview = ({
  template,
  salonName,
}: {
  template: Template;
  salonName: string;
}) => {
  // Skrócony tekst do max 2 linii
  const shortCaption = template.caption.split("\n")[0].slice(0, 100);

  return (
    <article className="flex flex-col">
      {/* Header - fixed height */}
      <div className="flex items-center gap-3 px-4 py-3 shrink-0">
        <div className="h-10 w-10 shrink-0 rounded-full bg-primary/15 flex items-center justify-center">
          <span className="text-foreground font-bold text-base">
            {salonName.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-foreground truncate">{salonName}</p>
          <div className="flex items-center gap-1 text-muted-foreground">
            <span className="text-xs">2 godz.</span>
            <span className="text-xs">·</span>
            <span className="text-xs">🌐</span>
          </div>
        </div>
        <MoreHorizontal className="h-5 w-5 shrink-0 text-muted-foreground" />
      </div>

      {/* Caption - fixed 2 lines max */}
      <div className="px-4 pb-2 shrink-0">
        <p className="text-sm leading-snug text-foreground/90 line-clamp-2">
          {shortCaption}
        </p>
      </div>

      {/* Image - square */}
      <div className="aspect-square bg-muted shrink-0">
        <img
          src={template.imageUrl}
          alt={`${template.title} - podgląd Facebook`}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Reactions - fixed height */}
      <div className="px-4 py-2 border-b border-border shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="flex -space-x-1">
              <div className="h-4 w-4 rounded-full bg-primary flex items-center justify-center ring-1 ring-card">
                <ThumbsUp className="h-2.5 w-2.5 text-primary-foreground" />
              </div>
              <div className="h-4 w-4 rounded-full bg-primary/80 flex items-center justify-center ring-1 ring-card">
                <Heart className="h-2.5 w-2.5 text-primary-foreground" />
              </div>
            </div>
            <span className="text-xs text-muted-foreground">48</span>
          </div>
          <span className="text-xs text-muted-foreground">12 kom. · 3 udost.</span>
        </div>
      </div>

      {/* Actions - fixed height */}
      <div className="flex shrink-0">
        {[
          { icon: ThumbsUp, label: "Lubię" },
          { icon: MessageCircle, label: "Komentarz" },
          { icon: Share2, label: "Udostępnij" },
        ].map((action, i) => (
          <button
            key={i}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-muted-foreground text-xs font-medium"
          >
            <action.icon className="h-4 w-4" />
            <span className="hidden xs:inline">{action.label}</span>
          </button>
        ))}
      </div>
    </article>
  );
};

export default TemplateDetailModal;
