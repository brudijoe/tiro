import { Habit } from "./Habit";
import axios from "axios";
import { useEffect, useState } from "react";
import { SETTINGS } from "../settings/settings";

export function Schedule() {
  const [greeting, setGreeting] = useState("");
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  useEffect(() => {
    getGreeting();
    getTasks();
  }, []);

  async function getGreeting() {
    const { data } = await axios.get(`${SETTINGS.HOST}/greeting`);
    setGreeting(data);
  }

  // in hook bauen
  async function getTasks() {
    const { data } = await axios.get(`${SETTINGS.HOST}/tasks`);
    setTasks(data);
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
