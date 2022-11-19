import { createContext, useState } from "react";

export const LanguageContext = createContext<LanguageStore>({
  selectedLanguage: "DE",
  changeLanguage({ language }: { language: string }): void {},
});

export default function useLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState("DE");

  function changeLanguage({ language }: { language: string }) {
    setSelectedLanguage(language);
  }

  return {
    selectedLanguage,
    changeLanguage,
  };
}
