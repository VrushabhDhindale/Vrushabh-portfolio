import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/Chatbot/Chatbot";

function App() {
    return (
        <>
            <div id="progress"></div>
            <Navbar />
            <Hero />
            <About />
            <Education />
            <Skills />
            <Project />
            <Contact />
            <Footer />

            <Chatbot />
        </>
    )
}

export default App;