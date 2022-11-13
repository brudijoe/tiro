import React from "react";
import Button from "./components/Button";
import { DarkMode } from "./DarkMode";

function App() {
  return (
    <div className="dark:bg-black">
      <h1 className="text-3xl dark:text-white font-bold underline">
        Hello User!
      </h1>
      <Button
        bg="bg-red-300"
        bgHover="hover:bg-red-500"
        children="Absenden"
        onClick={() => console.log("Clicked on button")}
      />
      <button onClick={() => DarkMode}>Dunkelmodus</button>
    </div>
  );
}

export default App;
