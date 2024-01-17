import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector  from "i18next-browser-languagedetector";
import {resources} from "./internalization/index"
import {detectionOptions as options} from "./internalization/langDetectionOptions"

  i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug:(process.env.NODE_ENV !== 'production'),
    resources,
    // detection: options,
    lng: "spa", // if you're using a language detector, do not define the lng option
    // fallbackLng: "en",
    interpolation: {
      escapeValue: false
    }
  });

  export default i18n;