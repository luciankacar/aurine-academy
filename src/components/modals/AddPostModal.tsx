import { useState, useEffect } from "react";
import { X, Instagram, Facebook, Check } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { format } from "date-fns";
import { pl } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface AddPostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (post: {
    title: string;
    date: Date;
    time: string;
    platforms: ("instagram" | "facebook")[];
    postType: string;
  }) => void;
  selectedDate?: Date | null;
}

const postTypes = [
  { id: "post", label: "Post" },
  { id: "story", label: "Story" },
  { id: "reels", label: "Reels" },
  { id: "cennik", label: "Cennik" },
  { id: "przed-po", label: "Przed i Po" },
  { id: "promocja", label: "Promocja" },
  { id: "tip", label: "Porada" },
];

const timeSlots = [
  "08:00", "09:00", "10:00", "11:00", "12:00", 
  "13:00", "14:00", "15:00", "16:00", "17:00", 
  "18:00", "19:00", "20:00"
];

const AddPostModal = ({ isOpen, onClose, onAdd, selectedDate }: AddPostModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  const [title, setTitle] = useState("");
  const [date, setDate] = useState<Date | undefined>(selectedDate || new Date());
  const [time, setTime] = useState("12:00");
  const [platforms, setPlatforms] = useState<("instagram" | "facebook")[]>(["instagram"]);
  const [postType, setPostType] = useState("post");
  const [showCalendar, setShowCalendar] = useState(false);

  // Sync date when selectedDate changes or modal opens
  useEffect(() => {
    if (isOpen && selectedDate) {
      setDate(selectedDate);
    }
  }, [isOpen, selectedDate]);

  const togglePlatform = (platform: "instagram" | "facebook") => {
    if (platforms.includes(platform)) {
      if (platforms.length > 1) {
        setPlatforms(platforms.filter(p => p !== platform));
      }
    } else {
      setPlatforms([...platforms, platform]);
    }
  };

  const handleSubmit = () => {
    if (!title.trim() || !date) return;
    
    onAdd({
      title: title.trim(),
      date,
      time,
      platforms,
      postType,
    });
    
    // Reset form but keep the date for next add
    setTitle("");
    setTime("12:00");
    setPlatforms(["instagram"]);
    setPostType("post");
    onClose();
  };

  // Reset state when modal closes
  const handleClose = () => {
    setShowCalendar(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className={`max-w-sm mx-4 p-0 gap-0 ${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-gray-200'}`}>
        <DialogHeader className={`p-4 border-b ${isDark ? 'border-neutral-800' : 'border-gray-100'}`}>
          <DialogTitle className={`text-base font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Nowy post
          </DialogTitle>
        </DialogHeader>

        <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
          {/* Tytuł */}
          <div>
            <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Tytuł posta
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="np. Promocja weekendowa"
              className={`w-full px-3 py-2 rounded-lg border text-sm ${
                isDark 
                  ? 'bg-neutral-800 border-neutral-700 text-white placeholder:text-gray-500' 
                  : 'bg-white border-gray-200 text-gray-900 placeholder:text-gray-400'
              } focus:outline-none focus:ring-2 focus:ring-pink-500/50`}
            />
          </div>

          {/* Data */}
          <div>
            <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Data publikacji
            </label>
            <button
              onClick={() => setShowCalendar(!showCalendar)}
              className={`w-full px-3 py-2 rounded-lg border text-sm text-left ${
                isDark 
                  ? 'bg-neutral-800 border-neutral-700 text-white' 
                  : 'bg-white border-gray-200 text-gray-900'
              }`}
            >
              {date ? format(date, "d MMMM yyyy", { locale: pl }) : "Wybierz datę"}
            </button>
            {showCalendar && (
              <div className={`mt-2 rounded-lg border ${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-gray-200'}`}>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(d) => {
                    setDate(d);
                    setShowCalendar(false);
                  }}
                  locale={pl}
                  className="rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Godzina */}
          <div>
            <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Godzina
            </label>
            <div className="flex flex-wrap gap-1.5">
              {timeSlots.map((t) => (
                <button
                  key={t}
                  onClick={() => setTime(t)}
                  className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                    time === t
                      ? 'bg-pink-500 text-white'
                      : isDark
                        ? 'bg-neutral-800 text-gray-400 hover:bg-neutral-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          {/* Platformy */}
          <div>
            <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Platformy
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => togglePlatform("instagram")}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                  platforms.includes("instagram")
                    ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 border-transparent text-white'
                    : isDark
                      ? 'bg-neutral-800 border-neutral-700 text-gray-400'
                      : 'bg-white border-gray-200 text-gray-600'
                }`}
              >
                <Instagram className="w-4 h-4" />
                Instagram
                {platforms.includes("instagram") && <Check className="w-3 h-3" />}
              </button>
              <button
                onClick={() => togglePlatform("facebook")}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-all ${
                  platforms.includes("facebook")
                    ? 'bg-blue-600 border-transparent text-white'
                    : isDark
                      ? 'bg-neutral-800 border-neutral-700 text-gray-400'
                      : 'bg-white border-gray-200 text-gray-600'
                }`}
              >
                <Facebook className="w-4 h-4" />
                Facebook
                {platforms.includes("facebook") && <Check className="w-3 h-3" />}
              </button>
            </div>
          </div>

          {/* Typ posta */}
          <div>
            <label className={`block text-xs font-medium mb-1.5 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Typ posta
            </label>
            <div className="flex flex-wrap gap-1.5">
              {postTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setPostType(type.id)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    postType === type.id
                      ? 'bg-pink-500 text-white'
                      : isDark
                        ? 'bg-neutral-800 text-gray-400 hover:bg-neutral-700'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className={`p-4 border-t flex gap-2 ${isDark ? 'border-neutral-800' : 'border-gray-100'}`}>
          <button
            onClick={onClose}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              isDark 
                ? 'bg-neutral-800 text-gray-300 hover:bg-neutral-700' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Anuluj
          </button>
          <button
            onClick={handleSubmit}
            disabled={!title.trim()}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-colors ${
              title.trim()
                ? 'bg-pink-500 text-white hover:bg-pink-600'
                : isDark
                  ? 'bg-neutral-800 text-gray-600 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            Dodaj post
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddPostModal;
