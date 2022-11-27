import { Habit } from "./Habit";

export function Schedule() {
  return (
    <div className="border-white border-2 m-5 rounded">
      <div>Schedule</div>

      <div>
        <div>Time-Componente</div>
        <Habit />
        <Habit />
        <Habit />
      </div>
    </div>
  );
}
