import "./Hero.css";

import project1 from "../../assets/images/illustrator/project1.jpg";
import project2 from "../../assets/images/illustrator/project2.jpg";
import project3 from "../../assets/images/illustrator/project3.jpg";

function Hero() {

    return (

        <section className="home" id="home">
            <div className="container">
                <div className="row align-items-center">
                    <div className="hero-left-text col-12 col-lg-6 heroTextIn">
                        <p className="hero-subtitle">FRONTEND DEVELOPER</p>
                        <h1 className="hero-title">Building <span>clean</span>
                            <br /> modern <span>web</span>
                            <br /> experiences.
                        </h1>
                        <p className="hero-p">I build modern, responsive and user-friendly websites with HTML, CSS, Bootstrap, JavaScript and React.</p>
                        <div className="button-grp d-flex gap-3">
                            <button type="button" className="viewProject fw-bold"><a href="#project">View Project</a></button>
                            <button type="button" className="contactMe fw-bold"><a href="#contact">Contact me</a></button>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 d-flex justify-content-center mt-5 mt-lg-0 heroCardIn">
                        <div className="hero-card-wrapper">
                            <div className="card-back card-back-1"></div>
                            <div className="card-back card-back-2"></div>
                            <div className="browser-card">
                                <div className="browser-top">
                                    <div className="browser-dots">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <ul className="browser-nav">
                                        <li>Home</li>
                                        <li>Projects</li>
                                        <li>About</li>
                                    </ul>
                                </div>
                                <div className="browser-content">
                                    <p className="browser-small-title">
                                        VR
                                    </p>
                                    <h2>
                                        Featured <span>Projects</span>
                                    </h2>
                                    <p className="browser-text">
                                        Carefully crafted responsive websites with clean UI,
                                        performance-focused code and modern frontend technologies.
                                    </p>
                                    <div className="project-preview">

                                        <img src={project1} alt="Project 1" />
                                        <img src={project2} alt="Project 2" />
                                        <img src={project3} alt="Project 3" />

                                    </div>
                                    <button className="explore-btn">
                                        Explore Projects
                                        <i className="fa-solid fa-arrow-right-long"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )

}

export default Hero;