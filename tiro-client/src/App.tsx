import useLanguage, { LanguageContext } from "./hooks/useLanguage";
import { Header } from "./pages/Header";
import { Schedule } from "./pages/Schedule";

function App() {
  const LanguageContextProvider = LanguageContext.Provider;
  const { selectedLanguage, changeLanguage } = useLanguage();

  return (
    <>
      <LanguageContextProvider value={{ selectedLanguage, changeLanguage }}>
        <div className="bg-gray-100 dark:bg-gray-600 min-h-screen">
          <Header />
          <Schedule />
        </div>
      </LanguageContextProvider>
    </>
  );
}

export default App;
