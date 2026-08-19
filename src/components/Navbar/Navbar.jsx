import { useRef } from "react";
import "./Navbar.css";

function Navbar() {

    const navRef = useRef(null);

    function closeNav() {
        if (navRef.current.classList.contains("show")) {
            navRef.current.classList.remove("show")
        }
    }

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
                                <a className="nav-link" href="#home" onClick={closeNav}>
                                    Home
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#about" onClick={closeNav}>
                                    About
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#education" onClick={closeNav}>
                                    Education
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#skills" onClick={closeNav}>
                                    Skills
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#project" onClick={closeNav}>
                                    Projects
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#contact" onClick={closeNav}>
                                    Contact
                                </a>
                            </li>

                            <li className="nav-item ms-lg-3">
                                <a href="/Vrushabh_Dhindale_Resume_Final.pdf" className="resume-btn" onClick={closeNav} download>
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