import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Task } from "@/types/courses";

interface TaskCheckboxProps {
  task: Task;
  lessonId: string;
  onComplete?: (taskId: string, completed: boolean) => void;
}

const TaskCheckbox = ({ task, lessonId, onComplete }: TaskCheckboxProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const storageKey = `task_${lessonId}_${task.id}`;
  
  const [isCompleted, setIsCompleted] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved === "true";
  });

  useEffect(() => {
    localStorage.setItem(storageKey, String(isCompleted));
    onComplete?.(task.id, isCompleted);
  }, [isCompleted, storageKey, task.id, onComplete]);

  return (
    <div className={`rounded-xl p-4 border-2 border-dashed transition-all ${
      isCompleted 
        ? (isDark ? 'border-emerald-500/50 bg-emerald-500/10' : 'border-emerald-400 bg-emerald-50')
        : (isDark ? 'border-pink-500/30 bg-pink-500/5' : 'border-pink-300 bg-pink-50/50')
    }`}>
      <div className="flex items-start gap-3">
        <button
          onClick={() => setIsCompleted(!isCompleted)}
          className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center shrink-0 transition-all ${
            isCompleted
              ? 'bg-emerald-500 border-emerald-500'
              : (isDark ? 'border-pink-500/50 hover:border-pink-500' : 'border-pink-400 hover:border-pink-500')
          }`}
        >
          {isCompleted && <Check className="w-4 h-4 text-white" strokeWidth={3} />}
        </button>
        
        <div className="flex-1">
          <h4 className={`font-semibold text-sm mb-1 ${
            isCompleted 
              ? (isDark ? 'text-emerald-400 line-through' : 'text-emerald-600 line-through')
              : (isDark ? 'text-pink-400' : 'text-pink-600')
          }`}>
            ✅ Zrób to teraz: {task.title}
          </h4>
          <p className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {task.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskCheckbox;
