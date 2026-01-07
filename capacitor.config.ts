import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.lovable.aurineacademy', // poprawny format
  appName: 'Aurine Academy',
  webDir: 'dist', // folder PWA
  server: {
    cleartext: true
  },
  android: {
    allowMixedContent: true
  }
};

export default config;
