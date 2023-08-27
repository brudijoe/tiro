interface LanguageStore {
  selectedLanguage: string;
  changeLanguage({ language }: { language: string }): void;
}

interface Task {
  name: string;
}

interface TaskStore {
  tasks: Task[];
  addTask(taskName: string): void;
}
