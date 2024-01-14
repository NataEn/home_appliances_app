import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector  from "i18next-browser-languagedetector";
const resources = {
    en: {
      translation: {
        learn: "Welcome to React and react-i18next",
      }
    },
    fr: {
      translation: {
        "Welcome to React": "Bienvenue à React et react-i18next"
      }
    }
  };

  i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    lng: "en", 
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;