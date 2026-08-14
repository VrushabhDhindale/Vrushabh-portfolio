import "./Education.css";

function Education() {

    return (
        <section className="education-section" id="education">
            <div className="container">
                <div className="education-heading text-center">
                    <p className="hero-subtitle">EDUCATION</p>
                    <h2 className="hero-title">My Academic Journey</h2>
                    <p className="hero-p mx-auto">A journey of learning, building and continuously growing.</p>
                </div>
                <div className="education-timeline">
                    <div className="education-item">
                        <div className="education-card">
                            <span className="education-year">
                                2022-2025
                            </span>
                            <h3>
                                Bachelor of Business Administration in Computer Applications (BBA-CA)
                            </h3>
                            <h4>
                                Savitribai Phule Pune University
                            </h4>
                            <p>
                                Graduated with A Grade. Built a strong foundation
                                in programming, web development, databases,
                                computer fundamentals and business management.
                            </p>

                        </div>
                    </div>
                    <div className="education-item">
                        <div className="education-card">
                            <span className="education-year">
                                2025-present
                            </span>
                            <h3>
                                Master of Computer Applications (MCA)
                            </h3>
                            <h4>
                                Dr. D. Y. Patil Vidyapeeth (Distance Learning)
                            </h4>
                            <p>
                                Currently pursuing MCA while continuously
                                improving my skills in JavaScript, React
                                and modern web development.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Education;