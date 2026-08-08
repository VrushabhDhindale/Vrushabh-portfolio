import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

function Navbar() {

    const navRef = useRef(null);
    const [activeSection, setActiveSection] = useState("home");

    function closeMenu() {
        if(navRef.current.classList.contains("show")){
            navRef.current.classList.remove("show");
        }
    }

    useEffect(() => {

        const sections = document
    });

    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top">

                <div className="container">

                    <a className="navbar-brand" href="#home">
                        Vrushabh <span>.</span>
                    </a>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fa-solid fa-bars"></i>
                    </button>

                    <div
                        ref={navRef}
                        className="collapse navbar-collapse"
                        id="navbarNav"
                    >

                        <ul className="navbar-nav ms-auto align-items-center">

                            <li className="nav-item text-center">
                                <a className="nav-link active" href="#home" onClick={closeMenu}>
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about" onClick={closeMenu}>
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#education" onClick={closeMenu}>
                                    Education
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#skills" onClick={closeMenu}>
                                    Skills
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#projects" onClick={closeMenu}>
                                    Projects
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact" onClick={closeMenu}>
                                    Contact
                                </a>
                            </li>

                            <li className="nav-item ms-lg-3">
                                <a href="#" className="resume-btn">
                                    Resume
                                </a>
                            </li>

                        </ul>

                    </div>

                </div>

            </nav>
        </header>
    );
}

export default Navbar;