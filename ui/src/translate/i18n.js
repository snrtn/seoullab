import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as fr from "./fr";

const LANGUAGE_KEY = "i18nextLng";

export const setLanguage = (language) => {
  i18n.changeLanguage(language);
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: {
          ...fr.button,
          ...fr.contact,
          ...fr.info,
          ...fr.navigation,
          ...fr.section,
        },
      },
    },
    fallbackLng: "fr",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    lng: localStorage.getItem(LANGUAGE_KEY) || "fr",
  });

export default i18n;
