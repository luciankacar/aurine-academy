import { useState } from "react";
import {
  Building2, Phone, Mail, MapPin,
  Bell, HelpCircle, Info,
  LogOut, Shield, ChevronRight, Sun, Moon, Monitor
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const ProfilTab = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [notifications, setNotifications] = useState(true);

  const textPrimary = isDark ? "text-white" : "text-gray-900";
  const textSecondary = isDark ? "text-neutral-400" : "text-gray-500";
  const cardBg = isDark ? "bg-neutral-900" : "bg-white";
  const cardBorder = isDark ? "border-pink-500/20" : "border-gray-100";

  const profileData = {
    name: "Karolina Nowak",
    email: "karolina@beautysalon.pl",
    phone: "+48 123 456 789",
    salon: "Beauty Studio Karolina",
    address: "ul. Kwiatowa 15, 00-001 Warszawa",
    package: "Premium",
    memberSince: "Marzec 2024",
  };

  const themeOptions = [
    { value: "light" as const, icon: Sun, label: "Jasny" },
    { value: "dark" as const, icon: Moon, label: "Ciemny" },
    { value: "system" as const, icon: Monitor, label: "Systemowy" },
  ];

  return (
    <div className="px-3 py-4 space-y-4">
      {/* Profile Header */}
      <div className={`${cardBg} rounded-xl border ${cardBorder} p-4 shadow-md`}>
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
            <span className="text-2xl font-bold text-white">K</span>
          </div>
          <div>
            <h1 className={`text-lg font-bold ${textPrimary}`}>{profileData.name}</h1>
            <p className={`text-xs ${textSecondary}`}>{profileData.salon}</p>
            <span className="inline-flex items-center mt-1 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
              Pakiet {profileData.package}
            </span>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden shadow-md`}>
        <div className="p-3 border-b border-border">
          <h2 className={`text-xs font-semibold ${textPrimary}`}>Dane kontaktowe</h2>
        </div>
        <div className="divide-y divide-border">
          <div className="flex items-center gap-3 p-3">
            <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-gray-100'} flex items-center justify-center`}>
              <Mail className={`w-4 h-4 ${textSecondary}`} />
            </div>
            <div className="flex-1">
              <p className={`text-[10px] ${textSecondary}`}>Email</p>
              <p className={`text-xs ${textPrimary}`}>{profileData.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">
            <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-gray-100'} flex items-center justify-center`}>
              <Phone className={`w-4 h-4 ${textSecondary}`} />
            </div>
            <div className="flex-1">
              <p className={`text-[10px] ${textSecondary}`}>Telefon</p>
              <p className={`text-xs ${textPrimary}`}>{profileData.phone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">
            <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-gray-100'} flex items-center justify-center`}>
              <Building2 className={`w-4 h-4 ${textSecondary}`} />
            </div>
            <div className="flex-1">
              <p className={`text-[10px] ${textSecondary}`}>Salon</p>
              <p className={`text-xs ${textPrimary}`}>{profileData.salon}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3">
            <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-gray-100'} flex items-center justify-center`}>
              <MapPin className={`w-4 h-4 ${textSecondary}`} />
            </div>
            <div className="flex-1">
              <p className={`text-[10px] ${textSecondary}`}>Adres</p>
              <p className={`text-xs ${textPrimary}`}>{profileData.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Theme Settings */}
      <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden shadow-md`}>
        <div className="p-3 border-b border-border">
          <h2 className={`text-xs font-semibold ${textPrimary}`}>Motyw</h2>
        </div>
        <div className="p-3">
          <div className="flex gap-2">
            {themeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setTheme(option.value)}
                className={`flex-1 flex flex-col items-center gap-1.5 py-2.5 rounded-lg transition-colors ${
                  theme === option.value
                    ? 'bg-primary/10 text-primary'
                    : isDark ? 'bg-neutral-800 text-neutral-400' : 'bg-gray-100 text-gray-500'
                }`}
              >
                <option.icon className="w-4 h-4" />
                <span className="text-[10px] font-medium">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Settings */}
      <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden shadow-md`}>
        <div className="p-3 border-b border-border">
          <h2 className={`text-xs font-semibold ${textPrimary}`}>Ustawienia</h2>
        </div>
        <div className="divide-y divide-border">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-gray-100'} flex items-center justify-center`}>
                <Bell className={`w-4 h-4 ${textSecondary}`} />
              </div>
              <div>
                <p className={`text-xs ${textPrimary}`}>Powiadomienia</p>
                <p className={`text-[10px] ${textSecondary}`}>Otrzymuj powiadomienia o nowościach</p>
              </div>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>
          <button className="flex items-center justify-between p-3 w-full hover:bg-accent/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-gray-100'} flex items-center justify-center`}>
                <Shield className={`w-4 h-4 ${textSecondary}`} />
              </div>
              <div className="text-left">
                <p className={`text-xs ${textPrimary}`}>Prywatność</p>
                <p className={`text-[10px] ${textSecondary}`}>Zarządzaj ustawieniami prywatności</p>
              </div>
            </div>
            <ChevronRight className={`w-4 h-4 ${textSecondary}`} />
          </button>
        </div>
      </div>

      {/* Help & Support */}
      <div className={`${cardBg} rounded-xl border ${cardBorder} overflow-hidden shadow-md`}>
        <div className="p-3 border-b border-border">
          <h2 className={`text-xs font-semibold ${textPrimary}`}>Pomoc</h2>
        </div>
        <div className="divide-y divide-border">
          <button className="flex items-center justify-between p-3 w-full hover:bg-accent/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-gray-100'} flex items-center justify-center`}>
                <HelpCircle className={`w-4 h-4 ${textSecondary}`} />
              </div>
              <p className={`text-xs ${textPrimary}`}>FAQ</p>
            </div>
            <ChevronRight className={`w-4 h-4 ${textSecondary}`} />
          </button>
          <button className="flex items-center justify-between p-3 w-full hover:bg-accent/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-lg ${isDark ? 'bg-neutral-800' : 'bg-gray-100'} flex items-center justify-center`}>
                <Info className={`w-4 h-4 ${textSecondary}`} />
              </div>
              <p className={`text-xs ${textPrimary}`}>O aplikacji</p>
            </div>
            <ChevronRight className={`w-4 h-4 ${textSecondary}`} />
          </button>
        </div>
      </div>

      {/* Logout */}
      <Button
        variant="outline"
        className="w-full border-destructive/50 text-destructive hover:bg-destructive/10"
      >
        <LogOut className="w-4 h-4 mr-2" />
        Wyloguj się
      </Button>

      {/* Version */}
      <p className={`text-center text-[10px] ${textSecondary}`}>
        Aurine Academy v1.0.0 • Członek od {profileData.memberSince}
      </p>
    </div>
  );
};

export default ProfilTab;
