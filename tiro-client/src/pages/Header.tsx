import { DarkModeSwitch } from "./DarkModeSwitch";
import { LanguageSwitch } from "./LanguageSwitch";
import translations from "../translations/translation.json";
import { currentDateDe } from "../pages/Time";

// TODO date and language depend on selected language
export function Header() {
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
        <span className="font-semibold text-xl">{`${""}`}</span>
      </div>
      <div className="text-white">
        <span className="font-semibold text-xl">{`${""}`}</span>
      </div>
      <div>
        <DarkModeSwitch />
      </div>
    </nav>
  );
}
