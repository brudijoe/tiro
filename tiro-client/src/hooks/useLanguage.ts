import { useState } from "react";

export default function useLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState("DE");

  return {
    selectedLanguage,
  };
}
