import { DarkModeSwitch } from "./DarkModeSwitch";

export function Header() {
  return (
    <nav className="p-6 flex items-center justify-between bg-gray-600 border-b-2 border-white">
      <div className="text-white">
        <span className="font-semibold text-xl">Tiro</span>
      </div>
      <div>
        <DarkModeSwitch />
      </div>
    </nav>
  );
}
