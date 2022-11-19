import { DarkModeSwitch } from "./DarkModeSwitch";
import { LanguageSwitch } from "./LanguageSwitch";
import translations from "../translations/translation.json";
import { currentDateDe } from "../pages/Time";
import { LanguageContext } from "../hooks/useLanguage";
import { propEq, filter } from "ramda";
import { useContext } from "react";

export function Header() {
  const languageContext = useContext(LanguageContext);

  const hasLanguageName = propEq(
    "languageName",
    languageContext.selectedLanguage
  );
  const filteredLanguage = filter(hasLanguageName, translations.languages);

  return (
    <nav className="p-6 flex items-center justify-between bg-gray-600 border-b-2 border-white">
      <div>
        <LanguageSwitch />
      </div>
      <div className="text-white">
        <span className="font-semibold text-xl">Tiro</span>
      </div>
      <div className="text-white">
        <span className="font-semibold text-xl">{currentDateDe}</span>
      </div>
      <div className="text-white">
        <span className="font-semibold text-xl">{`${filteredLanguage[0].header.newTask}`}</span>
      </div>
      <div className="text-white">
        <span className="font-semibold text-xl">{`${filteredLanguage[0].header.statistic}`}</span>
      </div>
      <div>
        <DarkModeSwitch />
      </div>
    </nav>
  );
}
