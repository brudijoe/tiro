import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import { IconContext } from "react-icons";

export function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useState(true);
  const iconClass = "p-1";

  function handleClick() {
    document.documentElement.classList.toggle("dark");
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
