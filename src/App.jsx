import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";
import { Header } from "./components/Header/Header";
import { LanguagesProvider } from "./context/LanguagesContext.jsx";

function App() {
  return (
    <>
      <LanguagesProvider>
        <Header />
        <Home />
        {/* <About />
      <Projects />
    <Contacts /> */}
      </LanguagesProvider>
    </>
  );
}

export default App;

/* To do:
---Add cursor animated
---Add react dom
*/
