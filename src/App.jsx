import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";

function App() {
    return (
        <>
            <div id="progress"></div>
            <Navbar />
            <Hero />
            <About />
            <Education />
        </>
    )
}

export default App;