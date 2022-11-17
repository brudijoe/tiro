import { useState } from "react";

export function LanguageSwitch() {
  const [language, setLanguage] = useState(false);

  //TODO set global
  function handleClick() {
    setLanguage(!language);
  }

  return (
    <div
      onClick={handleClick}
      className="m-1 w-20 bg-gray-600 flex justify-center items-center rounded-xl border-2 dark:border-white text-white cursor-pointer hover:bg-gray-800"
    >
      {language ? "EN" : "DE"}
    </div>
  );
}
