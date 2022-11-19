import { useContext } from "react";
import { LanguageContext } from "../hooks/useLanguage";

export function LanguageSwitch() {
  const languageContext = useContext(LanguageContext);

  function handleChange(selectObject: any) {
    languageContext?.changeLanguage({ language: selectObject });
  }

  return (
    <>
      <select
        className="m-1 w-20 bg-gray-600 text-center rounded-xl border-2 dark:border-white text-white cursor-pointer hover:bg-gray-800"
        name="language"
        id="language"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value={"DE"} hidden={languageContext.selectedLanguage === "DE"}>
          DE
        </option>
        <option value={"EN"} hidden={languageContext.selectedLanguage === "EN"}>
          EN
        </option>
      </select>
    </>
  );
}
