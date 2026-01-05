import { useState, useEffect } from "react";
import { X, Building2, Mail, Phone, MapPin, Check, User } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { toast } from "sonner";

const profileSchema = z.object({
  displayName: z.string().trim().min(2, "Imię musi mieć minimum 2 znaki").max(100, "Imię może mieć maksymalnie 100 znaków"),
  salonName: z.string().trim().max(100, "Nazwa salonu może mieć maksymalnie 100 znaków").optional().or(z.literal('')),
  email: z.string().trim().email("Nieprawidłowy adres email").max(255, "Email może mieć maksymalnie 255 znaków"),
  phone: z.string().trim().regex(/^\+?[0-9\s]{9,15}$/, "Nieprawidłowy numer telefonu").optional().or(z.literal('')),
  address: z.string().trim().max(200, "Adres może mieć maksymalnie 200 znaków").optional().or(z.literal('')),
});

export type ProfileData = {
  displayName: string;
  salonName: string;
  email: string;
  phone: string;
  address: string;
};

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: ProfileData;
  onSave: (data: ProfileData) => Promise<{ error: string | null }>;
  isSaving?: boolean;
}

const EditProfileModal = ({ isOpen, onClose, initialData, onSave, isSaving = false }: EditProfileModalProps) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  
  const [formData, setFormData] = useState<ProfileData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof ProfileData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
      setErrors({});
    }
  }, [isOpen, initialData]);

  if (!isOpen) return null;

  const handleChange = (field: keyof ProfileData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const result = profileSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ProfileData, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof ProfileData;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    const savedData: ProfileData = {
      displayName: formData.displayName.trim(),
      salonName: formData.salonName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
    };
    
    const { error } = await onSave(savedData);
    
    if (error) {
      toast.error(error);
    } else {
      toast.success("Dane zostały zapisane");
      onClose();
    }
    setIsSubmitting(false);
  };

  const inputClasses = `w-full px-4 py-3 rounded-xl border text-sm transition-colors ${
    isDark 
      ? 'bg-neutral-800 border-neutral-700 text-foreground placeholder:text-muted-foreground focus:border-pink-500' 
      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-pink-500'
  } focus:outline-none focus:ring-2 focus:ring-pink-500/20`;

  const errorClasses = "text-xs text-red-500 mt-1";

  const fields: { key: keyof ProfileData; label: string; icon: any; placeholder: string; required?: boolean }[] = [
    { key: "displayName", label: "Imię i nazwisko", icon: User, placeholder: "np. Anna Kowalska", required: true },
    { key: "salonName", label: "Nazwa salonu", icon: Building2, placeholder: "np. Salon Aurora" },
    { key: "email", label: "Email", icon: Mail, placeholder: "np. kontakt@salon.pl", required: true },
    { key: "phone", label: "Telefon", icon: Phone, placeholder: "np. +48 500 123 456" },
    { key: "address", label: "Adres", icon: MapPin, placeholder: "np. ul. Marszałkowska 42, Warszawa" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      
      <div className={`relative w-full sm:max-w-md mx-auto ${
        isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-gray-200'
      } rounded-t-3xl sm:rounded-2xl border max-h-[90vh] overflow-hidden`}>
        
        {/* Header */}
        <div className={`flex items-center justify-between p-5 border-b ${
          isDark ? 'border-neutral-800' : 'border-gray-100'
        }`}>
          <h2 className={`text-lg font-semibold ${isDark ? 'text-foreground' : 'text-gray-900'}`}>
            Edytuj dane
          </h2>
          <button 
            onClick={onClose}
            className={`p-2 rounded-xl transition-colors ${
              isDark ? 'hover:bg-neutral-800' : 'hover:bg-gray-100'
            }`}
          >
            <X className={`w-5 h-5 ${isDark ? 'text-muted-foreground' : 'text-gray-500'}`} />
          </button>
        </div>

        {/* Form */}
        <div className="p-5 space-y-4 overflow-y-auto max-h-[60vh]">
          {fields.map(({ key, label, icon: Icon, placeholder, required }) => (
            <div key={key}>
              <label className={`text-xs font-medium ${isDark ? 'text-muted-foreground' : 'text-gray-500'} mb-1.5 block`}>
                {label} {required && <span className="text-pink-500">*</span>}
              </label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Icon className={`w-4 h-4 ${errors[key] ? 'text-red-500' : 'text-pink-500'}`} />
                </div>
                <input
                  type={key === "email" ? "email" : "text"}
                  value={formData[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  placeholder={placeholder}
                  className={`${inputClasses} pl-11 ${errors[key] ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : ''}`}
                />
              </div>
              {errors[key] && <p className={errorClasses}>{errors[key]}</p>}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`p-5 border-t ${isDark ? 'border-neutral-800' : 'border-gray-100'} flex gap-3`}>
          <Button
            variant="outline"
            onClick={onClose}
            className={`flex-1 h-12 rounded-xl ${
              isDark ? 'border-neutral-700 hover:bg-neutral-800' : ''
            }`}
          >
            Anuluj
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={isSubmitting || isSaving}
            className="flex-1 h-12 rounded-xl bg-pink-500 hover:bg-pink-600 text-white"
          >
            {isSubmitting || isSaving ? (
              <span className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Zapisuję...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4" />
                Zapisz zmiany
              </span>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
