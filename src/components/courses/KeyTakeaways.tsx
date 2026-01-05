import { Lightbulb } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface KeyTakeawaysProps {
  takeaways: string[];
}

const KeyTakeaways = ({ takeaways }: KeyTakeawaysProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <div className={`rounded-xl p-4 border ${
      isDark 
        ? 'bg-gradient-to-br from-pink-500/10 to-purple-500/10 border-pink-500/30' 
        : 'bg-gradient-to-br from-pink-50 to-purple-50 border-pink-200'
    }`}>
      <div className="flex items-center gap-2 mb-3">
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isDark ? 'bg-pink-500/20' : 'bg-pink-100'}`}>
          <Lightbulb className={`w-4 h-4 ${isDark ? 'text-pink-400' : 'text-pink-600'}`} />
        </div>
        <h4 className={`font-semibold text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
          🎯 Kluczowe punkty do zapamiętania
        </h4>
      </div>
      
      <div className="space-y-3">
        {takeaways.map((takeaway, index) => (
          <div key={index} className="flex items-start gap-3">
            <span className={`text-lg font-bold ${isDark ? 'text-pink-400' : 'text-pink-500'}`}>
              {index + 1}.
            </span>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              {takeaway}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyTakeaways;
