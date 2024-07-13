import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <BrowserRouter>
          <div className="flex flex-col h-screen">
            <Header />
            <div className="flex-grow overflow-auto">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contacts />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </LanguagesProvider>
    </>
  );
}

export default App;

/* To do:
---Add cursor animated
---Add react dom
*/
