import { Habit } from "./Habit";
import axios from "axios";
import { useEffect, useState } from "react";
import { SETTINGS } from "../settings/settings";

export function Schedule() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    getGreeting();
  }, []);

  async function getGreeting() {
    const { data } = await axios.get(`${SETTINGS.HOST}/greeting`);
    setGreeting(data);
  }

  return (
    <div className="border-white border-2 m-5 rounded">
      <div>{greeting}</div>

      <div>
        <div>Time-Componente</div>
        <Habit />
        <Habit />
        <Habit />
      </div>
    </div>
  );
}
