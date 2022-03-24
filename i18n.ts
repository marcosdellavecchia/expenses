import I18n from 'react-native-i18n';
import en from './src/locales/en';
import es from './src/locales/es';

I18n.fallbacks = true;

I18n.translations = {
  en,
  es,
};

export default I18n;
