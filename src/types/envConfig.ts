declare module 'react-native-config' {
  export interface NativeConfig {
    API_URL: string;
    PREFILLED_USERNAME: string;
    PREFILLED_PASSWORD: string;
  }

  export const Config: NativeConfig;
  export default Config;
}
