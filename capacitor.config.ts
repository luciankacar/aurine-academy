import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.aurine.academy',
  appName: 'Aurine Academy',
  webDir: 'dist',
  server: {
    url: 'https://80834e94-7d14-4ddf-8de5-6b4c449882ed.lovableproject.com?forceHideBadge=true',
    cleartext: true
  }
};

export default config;
