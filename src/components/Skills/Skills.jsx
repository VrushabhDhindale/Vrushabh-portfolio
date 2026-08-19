import "./Skills.css";

function Skills() {

    const skills = [
        {
            name: "HTML",
            icon: "fa-brands fa-html5"
        },
        {
            name: "CSS",
            icon: "fa-brands fa-css3-alt"
        },
        {
            name: "Bootstrap",
            icon: "fa-brands fa-bootstrap"
        },
        {
            name: "JavaScript",
            icon: "fa-brands fa-js"
        },
        {
            name: "React",
            icon: "fa-brands fa-react"
        },
        {
            name: "Redux",
            icon: "fa-solid fa-code-branch"
        },
        {
            name: "JQuery",
            icon: "fa-solid fa-code"
        },
        {
            name: "Git & GitHub",
            icon: "fa-brands fa-github"
        }
    ]

    return (
        <section className="skills-section scroll-animation" id="skills">
            <div className="container">
                <div className="skills-title text-center">
                    <p className="hero-subtitle">SKILLS</p>
                    <h2 className="hero-title">Technologies I Work With</h2>
                    <p className="skill-p margin-para">I use modern technologies and tools to build clean, responsive and user-friendly web applications.</p>
                </div>
                <div className="skills-cards row g-4 mt-5 justify-content-center">
                    {
                        skills.map((skill) => (
                            <div className="col-6 col-md-4 col-lg-3 text-center" key={skill.name}>
                                <div className="skill-card">
                                    <i className={`skill-icon ${skill.icon}`}></i>

                                    <h3 className="skill-name">
                                        {skill.name}
                                    </h3>
                                    <span></span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );

}

export default Skills;