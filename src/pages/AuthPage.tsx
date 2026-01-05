import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, Sparkles } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import logoImg from "@/assets/logo.png";
import { z } from 'zod';

const emailSchema = z.string().email('Podaj poprawny adres email');
const passwordSchema = z.string().min(6, 'Hasło musi mieć minimum 6 znaków');

const AuthPage = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const navigate = useNavigate();
  const { user, signIn, signUp, loading } = useAuth();
  
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  // Redirect if already logged in
  useEffect(() => {
    if (user && !loading) {
      navigate('/');
    }
  }, [user, loading, navigate]);

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};
    
    try {
      emailSchema.parse(email);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.email = e.errors[0].message;
      }
    }
    
    try {
      passwordSchema.parse(password);
    } catch (e) {
      if (e instanceof z.ZodError) {
        newErrors.password = e.errors[0].message;
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      if (isLogin) {
        const { error } = await signIn(email, password);
        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            toast.error('Nieprawidłowy email lub hasło');
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success('Zalogowano pomyślnie!');
          navigate('/');
        }
      } else {
        const { error } = await signUp(email, password, displayName);
        if (error) {
          if (error.message.includes('User already registered')) {
            toast.error('Ten email jest już zarejestrowany');
          } else {
            toast.error(error.message);
          }
        } else {
          toast.success('Konto utworzone! Możesz się teraz zalogować.');
          navigate('/');
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${isDark ? 'bg-neutral-950' : 'bg-gradient-to-br from-pink-50 via-white to-purple-50'}`}>
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  const cardBg = isDark ? 'bg-neutral-900/80' : 'bg-white/90';
  const cardBorder = isDark ? 'border-neutral-800' : 'border-pink-100/50';
  const textPrimary = isDark ? 'text-white' : 'text-neutral-900';
  const textSecondary = isDark ? 'text-neutral-400' : 'text-neutral-600';
  const inputBg = isDark ? 'bg-neutral-800/50' : 'bg-neutral-50';
  const inputBorder = isDark ? 'border-neutral-700' : 'border-neutral-200';

  return (
    <div className={`min-h-screen flex items-center justify-center p-4 ${isDark ? 'bg-neutral-950' : 'bg-gradient-to-br from-pink-50 via-white to-purple-50'}`}>
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-1/4 -left-32 w-64 h-64 rounded-full ${isDark ? 'bg-pink-500/10' : 'bg-pink-200/30'} blur-3xl`} />
        <div className={`absolute bottom-1/4 -right-32 w-64 h-64 rounded-full ${isDark ? 'bg-purple-500/10' : 'bg-purple-200/30'} blur-3xl`} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`w-full max-w-md ${cardBg} backdrop-blur-xl rounded-2xl border ${cardBorder} shadow-2xl overflow-hidden`}
      >
        {/* Header */}
        <div className="p-6 pb-4 text-center">
          <div className="flex justify-center mb-4">
            <img src={logoImg} alt="Aurine Academy" className="w-16 h-16" />
          </div>
          <h1 className={`text-xl font-bold ${textPrimary}`}>
            {isLogin ? 'Witaj ponownie!' : 'Dołącz do Aurine Academy'}
          </h1>
          <p className={`text-sm mt-1 ${textSecondary}`}>
            {isLogin ? 'Zaloguj się do swojego konta' : 'Stwórz konto i zacznij naukę'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-4">
          {!isLogin && (
            <div className="space-y-1.5">
              <label className={`text-xs font-medium ${textSecondary}`}>Imię (opcjonalnie)</label>
              <div className="relative">
                <User className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${textSecondary}`} />
                <Input
                  type="text"
                  placeholder="Twoje imię"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className={`pl-10 ${inputBg} ${inputBorder}`}
                />
              </div>
            </div>
          )}

          <div className="space-y-1.5">
            <label className={`text-xs font-medium ${textSecondary}`}>Email</label>
            <div className="relative">
              <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${textSecondary}`} />
              <Input
                type="email"
                placeholder="twoj@email.pl"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors(prev => ({ ...prev, email: undefined }));
                }}
                className={`pl-10 ${inputBg} ${inputBorder} ${errors.email ? 'border-red-500' : ''}`}
              />
            </div>
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <label className={`text-xs font-medium ${textSecondary}`}>Hasło</label>
            <div className="relative">
              <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 ${textSecondary}`} />
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setErrors(prev => ({ ...prev, password: undefined }));
                }}
                className={`pl-10 pr-10 ${inputBg} ${inputBorder} ${errors.password ? 'border-red-500' : ''}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={`absolute right-3 top-1/2 -translate-y-1/2 ${textSecondary} hover:text-primary transition-colors`}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg"
          >
            {isSubmitting ? (
              <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white"></div>
            ) : (
              <>
                {isLogin ? 'Zaloguj się' : 'Utwórz konto'}
                <ArrowRight className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <div className="text-center pt-2">
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
              }}
              className={`text-sm ${textSecondary} hover:text-primary transition-colors`}
            >
              {isLogin ? (
                <>Nie masz konta? <span className="text-primary font-medium">Zarejestruj się</span></>
              ) : (
                <>Masz już konto? <span className="text-primary font-medium">Zaloguj się</span></>
              )}
            </button>
          </div>
        </form>

        {/* Footer decoration */}
        <div className={`px-6 py-4 ${isDark ? 'bg-neutral-800/30' : 'bg-pink-50/50'} border-t ${cardBorder}`}>
          <div className="flex items-center justify-center gap-2 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className={textSecondary}>Dołącz do społeczności profesjonalistek beauty</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
