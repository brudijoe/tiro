import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { IconContext } from "react-icons";
import { DarkMode } from "../DarkMode";

export function DarkModeSwitch() {
  const iconClass = "p-1";

  const [darkMode, setDarkMode] = useState(true);

  function handleClick() {
    DarkMode();
    setDarkMode(!darkMode);
  }

  return (
    <div
      onClick={handleClick}
      className="m-1 w-20 bg-gray-600 flex justify-center items-center rounded-xl border-2 dark:border-white cursor-pointer hover:bg-gray-800"
    >
      <IconContext.Provider
        value={{
          color: "yellow",
          size: "2em",
          className: `${iconClass}`,
        }}
      >
        {darkMode ? <BsSunFill /> : <BsMoonFill />}
      </IconContext.Provider>
    </div>
  );
}
