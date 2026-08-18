import "./Footer.css";

function Footer() {

    return (
        <footer>
            <div className="container">
                <div className="footer-title">
                    <h2>Vrushabh<span>.</span></h2>
                    <p className="text-center">Frontend Developer crafting modern, responsive and user-friendly web experiences.</p>
                    <ul className="gap-3 footer-social">
                        <li className="footer-social-item">
                            <a
                                href="https://github.com/VrushabhDhindale"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-github"></i>
                                <span>GitHub</span>
                            </a>
                        </li>
                        <li className="footer-social-item">
                            <a
                                href="https://www.linkedin.com/in/vrushabh-dhindale-a04980320"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-square-linkedin"></i>
                                <span>LinkedIn</span>
                            </a>
                        </li>
                        <li className="footer-social-item">
                            <a
                                href="mailto:vrushabhhdhindale@gmail.com"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-solid fa-envelope"></i>
                                <span>Instagram</span>
                            </a>
                        </li>
                        <li className="footer-social-item">
                            <a
                                href="https://www.instagram.com/vrushabh_dhindale_225"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fa-brands fa-instagram"></i>
                                <span>Instagram</span>
                            </a>
                        </li>

                    </ul>
                </div>
                <div className="footer-bottom">
                    <p>© 2026 <span>Vrushabh Dhindale.</span> All rights reserved.</p>
                    <p>Built with • <span>React</span> • <span>Jquery</span></p>
                </div>
            </div>
        </footer>
    )

}

export default Footer;