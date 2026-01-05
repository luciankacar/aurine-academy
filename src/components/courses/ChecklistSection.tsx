import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { ChecklistItem } from "@/types/courses";

interface ChecklistSectionProps {
  items: ChecklistItem[];
  lessonId: string;
}

const ChecklistSection = ({ items, lessonId }: ChecklistSectionProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  const [completed, setCompleted] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem(`checklist_${lessonId}`);
    return saved ? JSON.parse(saved) : {};
  });

  useEffect(() => {
    localStorage.setItem(`checklist_${lessonId}`, JSON.stringify(completed));
  }, [completed, lessonId]);

  const toggleItem = (id: string) => {
    setCompleted(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const completedCount = Object.values(completed).filter(Boolean).length;
  const progress = (completedCount / items.length) * 100;

  return (
    <div className={`rounded-xl p-4 border ${isDark ? 'bg-neutral-900/50 border-neutral-800' : 'bg-white border-gray-200'}`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
          📋 Checklist
        </h4>
        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
          {completedCount}/{items.length}
        </span>
      </div>
      
      {/* Progress bar */}
      <div className={`h-1.5 rounded-full mb-4 ${isDark ? 'bg-neutral-800' : 'bg-gray-100'}`}>
        <div 
          className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`w-full flex items-center gap-3 p-2 rounded-lg transition-all text-left ${
              completed[item.id]
                ? (isDark ? 'bg-emerald-500/10' : 'bg-emerald-50')
                : (isDark ? 'hover:bg-neutral-800' : 'hover:bg-gray-50')
            }`}
          >
            <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all ${
              completed[item.id]
                ? 'bg-emerald-500 border-emerald-500'
                : (isDark ? 'border-neutral-600' : 'border-gray-300')
            }`}>
              {completed[item.id] && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
            </div>
            <span className={`text-sm ${
              completed[item.id]
                ? (isDark ? 'text-gray-400 line-through' : 'text-gray-400 line-through')
                : (isDark ? 'text-gray-300' : 'text-gray-700')
            }`}>
              {item.text}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChecklistSection;
