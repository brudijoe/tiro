import Button from "../components/Button";

export function Habit() {
  function handleClick() {}
  return (
    <div className="flex flex-row m-5 p-5 border-white border-2">
      <div className="p-2 dark:text-white">18:00</div>
      <div className="p-2 dark:text-white">HabitName</div>
      <Button
        backgroundColor="bg-red-500"
        backgroundColorHover="hover:bg-red-700"
        textColor="text-white"
        onClick={handleClick}
      >
        Failed
      </Button>
      <Button
        backgroundColor="bg-green-500"
        backgroundColorHover="hover:bg-green-700"
        textColor="text-white"
        onClick={handleClick}
      >
        Completed
      </Button>
    </div>
  );
}
