import { useState } from "react";
import "./Contact.css";

function Contact() {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append(
            "access_key",
            import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
        );
        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData
            }
        );
        const result = await response.json();

        if (result.success) {
            event.target.reset();
            setSubmitted(true);
        } else {
            alert("Something went wrong. Please try again.");
        }
    };

    return (
        <section className="contact-section scroll-animation" id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-right col-12 col-md-6">
                        <p className="hero-subtitle">
                            GET IN TOUCH
                        </p>
                        <h2 className="hero-title">
                            Let's Work <span>Together</span>
                        </h2>
                        <p>
                            I'm currently open to new opportunities and
                            exciting projects. Whether you have a question
                            or just want to say hi, I'll try my best to get
                            back to you!
                        </p>
                        <div className="w-100 info-box text-center">
                            <a
                                href="https://maps.app.goo.gl/UTm8wfeKpnKRspcB8"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-solid fa-location-dot"></i>
                                <p>
                                    Pune, Maharashtra, India
                                </p>
                            </a>
                        </div>
                        <div
                            className="w-100 info-box text-center"
                            onClick={() =>
                                window.location.href =
                                "mailto:vrushabhhdhindale@gmail.com"
                            }
                        >
                            <i className="fa-solid fa-envelope"></i>
                            <p>
                                vrushabhhdhindale@gmail.com
                            </p>
                        </div>
                        <div className="follow-me">
                            <p>
                                FOLLOW ME
                            </p>
                            <ul className="d-flex align-items-center gap-3">
                                <li>
                                    <a
                                        href="https://github.com/VrushabhDhindale"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-github"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/vrushabh-dhindale-a04980320"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-square-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.instagram.com/vrushabh_dhindale_225"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="contact-left col-12 col-md-6">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="name">
                                Your Company Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Enter your company name"
                                required
                            />
                            <label htmlFor="email">
                                Your Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                required
                            />
                            <label htmlFor="subject">
                                Subject
                            </label>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Enter subject"
                                required
                            />
                            <label htmlFor="message">
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Message"
                                required
                            ></textarea>
                            <button type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {
                submitted && (
                    <div className="submit-notification">
                        <div className="submit-icon">
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <div>
                            <h3>
                                Message Sent!
                            </h3>
                            <p>
                                Thank you for reaching out. I'll get back
                                to you soon.
                            </p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setSubmitted(false)}
                        >
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                )
            }
        </section>
    );
}

export default Contact;