import { useState, useEffect, useRef } from "react";
import { FolderOpen, Download, Trash2, Upload, Loader2, Plus, ChevronRight, BookOpen, Clock, Play } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useTheme } from "@/contexts/ThemeContext";
import { useIsOwner } from "@/hooks/useIsOwner";

interface EmployeeCourse {
  name: string;
  size: number;
  created_at?: string;
}

const formatBytes = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

// Get file extension without dot
const getFileExtension = (filename: string): string => {
  const ext = filename.split('.').pop()?.toUpperCase() || '';
  return ext;
};

interface EmployeeCoursesSectionProps {
  onSelectCourse: (course: EmployeeCourse) => void;
}

const EmployeeCoursesSection = ({ onSelectCourse }: EmployeeCoursesSectionProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const { isOwner } = useIsOwner();
  const inputRef = useRef<HTMLInputElement>(null);
  const [courses, setCourses] = useState<EmployeeCourse[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  const fetchCourses = async () => {
    setLoading(true);
    const { data, error } = await supabase.storage
      .from("employee-materials")
      .list("", { sortBy: { column: "created_at", order: "desc" } });
    
    if (error) {
      console.error("Error fetching courses:", error);
      setCourses([]);
    } else {
      setCourses(
        (data || [])
          .filter((f) => f.name !== ".emptyFolderPlaceholder")
          .map((f) => ({ 
            name: f.name, 
            size: f.metadata?.size ?? 0,
            created_at: f.created_at
          }))
      );
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchCourses();
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
      toast.error("Nie udało się przesłać kursu");
    } else {
      toast.success("Kurs dodany");
      fetchCourses();
    }
    setUploading(false);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDelete = async (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    setDeleting(name);
    const { error } = await supabase.storage
      .from("employee-materials")
      .remove([name]);
    
    if (error) {
      toast.error("Nie udało się usunąć kursu");
    } else {
      toast.success("Kurs usunięty");
      fetchCourses();
    }
    setDeleting(null);
  };

  return (
    <div className="mb-7">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-gradient-to-br from-teal-500/20 to-cyan-500/20 flex items-center justify-center border border-teal-500/30">
            <BookOpen className="h-3 w-3 text-teal-500" />
          </div>
          <div>
            <h2 className="text-sm font-semibold text-foreground">Kursy dla pracowników</h2>
            <p className="text-[10px] text-muted-foreground">Materiały szkoleniowe do nauki</p>
          </div>
        </div>
        
        {/* Upload button - only for owner */}
        {isOwner && (
          <div>
            <input ref={inputRef} type="file" className="hidden" onChange={handleUpload} />
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 text-[10px] gap-1 text-teal-600 hover:text-teal-700 hover:bg-teal-500/10"
              onClick={() => inputRef.current?.click()} 
              disabled={uploading}
            >
              {uploading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Plus className="h-3 w-3" />}
              Dodaj kurs
            </Button>
          </div>
        )}
      </div>

      {/* Courses List */}
      {loading ? (
        <div className="flex items-center justify-center py-8">
          <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
        </div>
      ) : courses.length === 0 ? (
        <div className={`flex flex-col items-center justify-center py-8 rounded-xl border ${
          isDark ? 'bg-card border-border/50' : 'bg-card border-border/30'
        }`}>
          <BookOpen className="h-8 w-8 text-muted-foreground/40 mb-2" />
          <p className="text-xs text-muted-foreground">Brak kursów</p>
          {isOwner && (
            <p className="text-[10px] text-muted-foreground/60 mt-1">Dodaj pierwszy kurs powyżej</p>
          )}
        </div>
      ) : (
        <div className="space-y-2.5">
          {courses.map((course) => {
            const ext = getFileExtension(course.name);
            const nameWithoutExt = course.name.replace(/\.[^/.]+$/, "");
            
            return (
              <div
                key={course.name}
                onClick={() => onSelectCourse(course)}
                className={`group relative rounded-xl border overflow-hidden transition-all duration-200 cursor-pointer ${
                  isDark 
                    ? 'bg-gradient-to-br from-teal-950/30 via-card to-cyan-950/20 border-teal-500/20 hover:border-teal-500/40 hover:shadow-md hover:shadow-teal-500/10' 
                    : 'bg-gradient-to-br from-teal-50/50 via-card to-cyan-50/30 border-teal-200/50 hover:border-teal-300 hover:shadow-md'
                }`}
              >
                <div className="p-4 flex items-center gap-3">
                  {/* Course Icon */}
                  <div className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 shadow-md shadow-teal-500/20`}>
                    <BookOpen className="h-5 w-5 text-white" />
                    {/* File type badge */}
                    <div className="absolute -bottom-1 -right-1 px-1 py-0.5 rounded text-[7px] font-bold bg-background border border-teal-500/30 text-teal-600 dark:text-teal-400">
                      {ext}
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-foreground truncate group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                        {nameWithoutExt}
                      </h3>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <FolderOpen className="h-3 w-3" />
                        {formatBytes(course.size)}
                      </span>
                    </div>
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center gap-1">
                    {isOwner && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 shrink-0 text-destructive/60 hover:text-destructive hover:bg-destructive/10 opacity-0 group-hover:opacity-100 transition-opacity" 
                        onClick={(e) => handleDelete(e, course.name)} 
                        disabled={deleting === course.name}
                      >
                        {deleting === course.name ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash2 className="h-4 w-4" />
                        )}
                      </Button>
                    )}
                    <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-teal-500/10 group-hover:bg-teal-500 transition-colors">
                      <ChevronRight className="h-4 w-4 text-teal-500 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default EmployeeCoursesSection;
