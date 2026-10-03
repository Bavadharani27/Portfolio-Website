import {
  useEffect,
  useState
} from "react";

import {
  Routes,
  Route,
  useLocation
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Contact from "./pages/Contact";


function ScrollToTop() {

  const { pathname } = useLocation();

  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }, [pathname]);

  return null;
}


function App() {

  const [dark, setDark] = useState(() => {

    return (
      localStorage.getItem("theme")
      === "dark"
    );

  });


  useEffect(() => {

    document.documentElement.dataset.theme =
      dark ? "dark" : "light";

    localStorage.setItem(
      "theme",
      dark ? "dark" : "light"
    );

  }, [dark]);


  return (

    <div className="app">

      <ScrollToTop />

      <Navbar
        dark={dark}
        onToggle={() =>
          setDark((value) => !value)
        }
      />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/skills"
            element={<Skills />}
          />

          <Route
            path="/projects"
            element={<Projects />}
          />

          <Route
            path="/experience"
            element={<Experience />}
          />

          <Route
            path="/education"
            element={<Education />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>

      <Footer />

    </div>

  );
}


export default App;