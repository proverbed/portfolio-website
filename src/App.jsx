import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Header
        menuListItems={[
          {
            name: "About",
            sectionId: "#about-section",
          },
          {
            name: "Projects",
            sectionId: "#projects-section",
          },
          {
            name: "Contact",
            sectionId: "#contact-section",
          },
        ]}
      />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
