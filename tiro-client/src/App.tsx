import useLanguage, { LanguageContext } from "./hooks/useLanguage";
import { Header } from "./pages/Header";

function App() {
  const LanguageContextProvider = LanguageContext.Provider;
  const { selectedLanguage, changeLanguage } = useLanguage();

  return (
    <>
      <LanguageContextProvider value={{ selectedLanguage, changeLanguage }}>
        <div className="bg-gray-100 dark:bg-gray-600 h-full min-h-screen">
          <Header />
        </div>
      </LanguageContextProvider>
    </>
  );
}

export default App;
