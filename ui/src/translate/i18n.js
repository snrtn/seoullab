import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as fr from "./fr";

const currencyMap = {
  fr: "EUR",
};

const LANGUAGE_KEY = "i18nextLng";

const initCurrency = () => {
  const savedLanguage = localStorage.getItem(LANGUAGE_KEY) || i18n.language;
};

export const getCurrencySymbol = (currencyCode) => {
  switch (currencyCode) {
    case "USD":
      return "$";
    case "EUR":
      return "€";
    default:
      return "€";
  }
};

export const getCurrency = () => {
  return localStorage.getItem(CURRENCY_KEY) || currencyMap[i18n.language];
};

export const setCurrency = (currency) => {
  localStorage.setItem(CURRENCY_KEY, currency);
};

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
          ...fr.card,
          ...fr.form,
          ...fr.navigation,
          ...fr.page,
          ...fr.text,
        },
      },
      // Add more languages as needed
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
