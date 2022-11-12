import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      Hallo Tori-User
      <Button
        styling={
          "text-base bg-red-300 border-black border hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
        }
        children="Absenden"
        onClick={() => console.log("You clicked on the pink circle!")}
      />
    </div>
  );
}

export default App;
