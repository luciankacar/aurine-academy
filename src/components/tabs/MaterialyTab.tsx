import { useState, useEffect, useRef } from "react";
import { FileText, Download, Trash2, Upload, Loader2, FolderOpen, AlertCircle, FileIcon, File } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { supabase } from "@/integrations/supabase/client";
import { useIsOwner } from "@/hooks/useIsOwner";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface MaterialFile {
  name: string;
  size: number;
  created_at: string;
}

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const MaterialyTab = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const { user } = useAuth();
  const { isOwner, loading: ownerLoading } = useIsOwner();
  const inputRef = useRef<HTMLInputElement>(null);

  const [files, setFiles] = useState<MaterialFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchFiles = async () => {
    setLoading(true);
    const { data, error } = await supabase.storage.from("employee-materials").list("", { sortBy: { column: "created_at", order: "desc" } });
    if (error) {
      console.error("Error fetching files:", error);
      setFiles([]);
    } else {
      setFiles(
        (data || [])
          .filter((f) => f.name !== ".emptyFolderPlaceholder")
          .map((f) => ({ name: f.name, size: f.metadata?.size ?? 0, created_at: f.created_at ?? "" }))
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    if (user) fetchFiles();
  }, [user]);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const { error } = await supabase.storage.from("employee-materials").upload(file.name, file, { upsert: true });
    if (error) {
      console.error("Upload error:", error);
      toast.error("Nie udało się przesłać pliku");
    } else {
      toast.success("Plik przesłany");
      fetchFiles();
    }
    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDownload = async (name: string) => {
    const { data, error } = await supabase.storage.from("employee-materials").createSignedUrl(name, 60);
    if (error || !data?.signedUrl) {
      toast.error("Nie udało się pobrać pliku");
      return;
    }
    const a = document.createElement("a");
    a.href = data.signedUrl;
    a.download = name;
    a.click();
  };

  const handleDelete = async (name: string) => {
    setDeleting(name);
    const { error } = await supabase.storage.from("employee-materials").remove([name]);
    if (error) {
      toast.error("Nie udało się usunąć pliku");
    } else {
      toast.success("Plik usunięty");
      fetchFiles();
    }
    setDeleting(null);
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-muted-foreground gap-2">
        <AlertCircle className="h-8 w-8" />
        <p className="text-sm">Zaloguj się, aby zobaczyć materiały</p>
      </div>
    );
  }

  return (
    <div className="px-4 py-5 pb-14">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-amber-500/20 shadow-md shadow-amber-500/10">
          <FolderOpen className="h-5 w-5 text-amber-500" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-foreground tracking-tight mb-0.5">Materiały dla pracowników</h1>
          <p className="text-xs text-muted-foreground">Pobierz pliki do nauki i pracy</p>
        </div>
      </div>

      {/* Owner upload */}
      {isOwner && !ownerLoading && (
        <div className="mb-5">
          <input ref={inputRef} type="file" className="hidden" onChange={handleUpload} />
          <Button variant="secondary" size="sm" className="gap-2" onClick={() => inputRef.current?.click()} disabled={uploading}>
            {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Upload className="h-4 w-4" />}
            Prześlij plik
          </Button>
        </div>
      )}

      {/* File list */}
      {loading || ownerLoading ? (
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
        </div>
      ) : files.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-muted-foreground gap-2">
          <FileIcon className="h-10 w-10 opacity-50" />
          <p className="text-sm">Brak plików</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {files.map((f) => (
            <li
              key={f.name}
              className={`flex items-center gap-3 p-3 rounded-xl border transition-colors ${isDark ? "bg-card border-border/50 hover:border-border" : "bg-card border-border/30 hover:border-border/60"}`}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                <File className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">{f.name}</p>
                <p className="text-[10px] text-muted-foreground">{formatBytes(f.size)}</p>
              </div>
              <Button variant="ghost" size="icon" className="shrink-0" onClick={() => handleDownload(f.name)}>
                <Download className="h-4 w-4" />
              </Button>
              {isOwner && (
                <Button variant="ghost" size="icon" className="shrink-0 text-destructive hover:text-destructive" onClick={() => handleDelete(f.name)} disabled={deleting === f.name}>
                  {deleting === f.name ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
                </Button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MaterialyTab;
