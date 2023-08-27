import { createContext, useEffect, useState } from "react";
import { SETTINGS } from "../settings";
import axios from "axios";

export const TaskContext = createContext<TaskStore | null>(null);

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks();
  }, []);

  async function getTasks() {
    const { data } = await axios.get<Task[]>(`${SETTINGS.HOST}/tiro/tasks`);
    setTasks(data);
  }

  async function addTask(taskName: string) {
    const { data } = await axios.post<Task[]>(
      `${SETTINGS.HOST}/tiro/add/${taskName}`
    );
    setTasks(data);
  }

  return {
    tasks,
    addTask,
  };
}
