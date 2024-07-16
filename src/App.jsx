import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contacts } from "./pages/Contacts";
import { Header } from "./components/Header/Header";
import { useLoader } from "./context/index.js";
import { Loader } from "./pages/Loader.jsx";

function App() {
  const { loading } = useLoader();
  return (
    <>
      {loading && <Loader />}
      <div className={`flex flex-col h-screen ${loading ? "hidden" : "block"}`}>
        <Header />
        {/* className={`flex-grow overflow-auto ${loading ? "hidden" : "block"}`} */}
        <div className="flex-grow overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

/* To do:
---Add cursor animated
---Add react dom
*/
