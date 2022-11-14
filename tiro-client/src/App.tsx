import React from "react";
import Button from "./components/Button";
import { Switch } from "./pages/Switch";
import { DarkMode } from "./DarkMode";

function App() {
  return (
    <div className="bg-gray-100 dark:bg-gray-600 h-full min-h-screen">
      <h1 className="text-3xl dark:text-white font-bold underline">
        Hello User!
      </h1>
      <Button
        bg="bg-red-300"
        bgHover="hover:bg-red-500"
        children="Absenden"
        onClick={() => console.log("Clicked on button")}
      />
      <Switch />
      <button className="dark:text-white" onClick={DarkMode}>
        Dunkelmodus
      </button>
    </div>
  );
}

export default App;
