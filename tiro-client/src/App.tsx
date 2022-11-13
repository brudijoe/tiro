import React from "react";
import Button from "./components/Button";

function App() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      Hallo Tori-User
      <Button
        bg="bg-red-300"
        bgHover="hover:bg-red-500"
        children="Absenden"
        onClick={() => console.log("You clicked on the pink circle!")}
      />
    </div>
  );
}

export default App;
