import "./About.css";
import aboutImg from "../../assets/images/illustrator/about-me-1img.png";

function About() {
    return(
        <section className="about-section about" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-6 scroll-animation">
                        <img src={aboutImg} alt="about-img" className="about-img" />
                    </div>
                    <div className="col-12 col-lg-6 scroll-animation">
                        <p className="hero-subtitle about-subtitle">About me</p>
                        <h2 className="hero-title about-title">Passionate about creating modern and meaningful digital experiences.</h2>
                        <p className="hero-p about-p">I'm a Frontend Developer who enjoys turning ideas into clean, responsive and user-friendly websites. I focus on writing organized code while creating interfaces that feel simple, elegant and enjoyable to use.</p>
                        <div className="row text-center g-4">
                            <div className="col-6 col-lg-4">
                                <div className="about-card">
                                    <h3>12+</h3>
                                    <p>Projects</p>
                                </div>
                            </div>
                            <div className="col-6 col-lg-4">
                                <div className="about-card">
                                    <h3>5+</h3>
                                    <p>Technologies</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="about-card">
                                    <h3>100%</h3>
                                    <p>Dedication</p>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="about-btn"><a href="/Vrushabh_Dhindale_Resume_Final.pdf" download>Download Resume</a></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;