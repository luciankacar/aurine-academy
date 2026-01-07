import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  // Poprawny App ID w formacie Java package
  appId: 'com.lovable.aurineacademy',
  appName: 'Aurine Academy',
  
  // Folder zbudowanego frontendu PWA (dist po npm run build)
  webDir: 'dist',

  // Nie ustawiamy URL, żeby aplikacja działała offline
  server: {
    cleartext: true
  },

  // Opcjonalnie: jeśli chcesz wymusić, żeby pluginy Capacitor działały od razu
  android: {
    allowMixedContent: true
  }
};

export default config;
