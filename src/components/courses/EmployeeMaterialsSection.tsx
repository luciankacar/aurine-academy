import { useState, useEffect, useRef } from "react";
import { FolderOpen, Download, Trash2, Upload, Loader2, File, Plus } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface MaterialFile {
  name: string;
  size: number;
}

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const EmployeeMaterialsSection = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<MaterialFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchFiles = async () => {
    setLoading(true);
    const { data, error } = await supabase.storage
      .from("employee-materials")
      .list("", { sortBy: { column: "created_at", order: "desc" } });
    
    if (error) {
      console.error("Error fetching files:", error);
      setFiles([]);
    } else {
      setFiles(
        (data || [])
          .filter((f) => f.name !== ".emptyFolderPlaceholder")
          .map((f) => ({ name: f.name, size: f.metadata?.size ?? 0 }))
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const { error } = await supabase.storage
      .from("employee-materials")
      .upload(file.name, file, { upsert: true });
    
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
    const { data, error } = await supabase.storage
      .from("employee-materials")
      .createSignedUrl(name, 60);
    
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
    const { error } = await supabase.storage
      .from("employee-materials")
      .remove([name]);
    
    if (error) {
      toast.error("Nie udało się usunąć pliku");
    } else {
      toast.success("Plik usunięty");
      fetchFiles();
    }
    setDeleting(null);
  };

  return (
    <div className="mb-7">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/30">
            <FolderOpen className="h-3 w-3 text-amber-500" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">Materiały dla pracowników</h2>
            <p className="text-[10px] text-muted-foreground">Pliki do pobrania</p>
          </div>
        </div>
        
        {/* Upload button */}
        <div>
          <input ref={inputRef} type="file" className="hidden" onChange={handleUpload} />
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-7 text-[10px] gap-1 text-amber-600 hover:text-amber-700 hover:bg-amber-500/10"
            onClick={() => inputRef.current?.click()} 
            disabled={uploading}
          >
            {uploading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Plus className="h-3 w-3" />}
            Dodaj plik
          </Button>
        </div>
      </div>

      {/* Files Card */}
      <div className="rounded-xl border bg-card border-amber-500/20 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-6">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : files.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-6 text-muted-foreground gap-1">
            <File className="h-6 w-6 opacity-40" />
            <p className="text-[11px]">Brak plików</p>
          </div>
        ) : (
          <ul className="divide-y divide-border/50">
            {files.map((f) => (
              <li
                key={f.name}
                className="flex items-center gap-3 px-3 py-2.5 hover:bg-muted/30 transition-colors"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 shrink-0">
                  <File className="h-3.5 w-3.5 text-amber-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-foreground truncate">{f.name}</p>
                  <p className="text-[9px] text-muted-foreground">{formatBytes(f.size)}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-7 w-7 shrink-0 text-amber-600 hover:text-amber-700 hover:bg-amber-500/10" 
                  onClick={() => handleDownload(f.name)}
                >
                  <Download className="h-3.5 w-3.5" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="h-7 w-7 shrink-0 text-destructive/70 hover:text-destructive hover:bg-destructive/10" 
                  onClick={() => handleDelete(f.name)} 
                  disabled={deleting === f.name}
                >
                  {deleting === f.name ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Trash2 className="h-3.5 w-3.5" />
                  )}
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default EmployeeMaterialsSection;
