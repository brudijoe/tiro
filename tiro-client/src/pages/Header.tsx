import { DarkModeSwitch } from "./DarkModeSwitch";
import { LanguageSwitch } from "./LanguageSwitch";
import translations from "../translations/translation.json";
import { currentDateDe } from "../pages/Time";
import { LanguageContext } from "../hooks/useLanguage";
import { propEq, filter } from "ramda";
import { useContext, useState } from "react";
import Button from "../components/Button";
import { TaskContext } from "../hooks/useTasks";

export function Header() {
  const languageContext = useContext(LanguageContext);
  const taskContext = useContext(TaskContext);

  const [taskName, setTaskName] = useState("");
  console.log(taskName);

  function onTaskNameChanged(e: React.FormEvent<HTMLInputElement>) {
    setTaskName(e.currentTarget.value);
  }

  const hasLanguageName = propEq(
    "languageName",
    languageContext.selectedLanguage
  );
  const filteredLanguage = filter(hasLanguageName, translations.languages);

  function handleClickNewTask() {
    taskContext?.addTask(taskName);
  }

  return (
    <nav className="p-6 flex items-center justify-between bg-gray-600 border-b-2 border-white">
      <div>
        <LanguageSwitch />
      </div>
      <div className="text-white">
        <span className="font-semibold text-xl">Tiro</span>
      </div>
      <div className="text-white">
        <span className="font-semibold text-xl">{currentDateDe}</span>
      </div>
      <div className="text-white">
        <Button
          backgroundColor="bg-green-500"
          backgroundColorHover="hover:bg-green-700"
          textColor="text-white"
          onClick={handleClickNewTask}
        >
          {`${filteredLanguage[0].header.newTask}`}
        </Button>
        <input
          maxLength={100}
          type="text"
          className="text-black"
          value={taskName}
          onChange={onTaskNameChanged}
        />
      </div>
      <div className="text-white">
        <span className="font-semibold text-xl">{`${filteredLanguage[0].header.statistic}`}</span>
      </div>
      <div>
        <DarkModeSwitch />
      </div>
    </nav>
  );
}
