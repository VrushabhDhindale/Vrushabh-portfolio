import "./Education.css";

function Education() {

    const education = [
        {
            year: "2022-2025",
            degree: "Bachelor of Business Administration in Computer Applications (BBA-CA)",
            university: "Savitribai Phule Pune University",
            description: "Graduated with A Grade. Built a strong foundation in programming, web development, databases, computer fundamentals and business management."
        },
        {
            year: "2025-present",
            degree: "Master of Computer Applications (MCA)",
            university: "Dr. D. Y. Patil Vidyapeeth (Distance Learning)",
            description: "Currently pursuing MCA while continuously improving my skills in JavaScript, React and modern web development."
        }
    ];

    return (
        <section className="education-section" id="education">
            <div className="container">

                <div className="education-heading text-center">
                    <p className="hero-subtitle">EDUCATION</p>

                    <h2 className="hero-title">
                        My Academic Journey
                    </h2>

                    <p className="margin-para">
                        A journey of learning, building and continuously growing.
                    </p>
                </div>

                <div className="education-timeline">

                    {
                        education.map((item) => (

                            <div className="education-item" key={item.degree}>

                                <div className="education-card">

                                    <span className="education-year">
                                        {item.year}
                                    </span>

                                    <h3>
                                        {item.degree}
                                    </h3>

                                    <h4>
                                        {item.university}
                                    </h4>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        ))
                    }

                </div>

            </div>
        </section>
    );
}

export default Education;