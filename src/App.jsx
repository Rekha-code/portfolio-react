import "./App.css";
import About from "./Components/About/About";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Education from "./Components/Education/Education";
import MyWork from "./Components/MyWork/MyWork";
import Experience from "./Components/Experience/Experience";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <MyWork />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
