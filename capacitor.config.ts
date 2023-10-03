import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-react',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins:{
    LiveUpdates: {
      appId: 'fde0f26a',
      channel: 'Production',
      autoUpdateMethod: 'background',
      maxVersions: 2,
    }
  }
};

export default config;
