interface LanguageStore {
  selectedLanguage: string;
  changeLanguage({ language }: { language: string }): void;
}
