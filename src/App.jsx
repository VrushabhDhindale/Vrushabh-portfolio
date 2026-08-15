import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";

function App() {
    return (
        <>
            <div id="progress"></div>
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Skills />
        </>
    )
}

export default App;