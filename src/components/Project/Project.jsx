import { useEffect } from "react";
import $ from "jquery";
import Isotope from "isotope-layout";
import "./Project.css";

import fashionblog from "../../assets/images/illustrator/fashionblogcss.png";
import burgercss from "../../assets/images/illustrator/burgercss.png";
import photographyportfoliocss from "../../assets/images/illustrator/photographyportfoliocss.png";
import loandaycss from "../../assets/images/illustrator/loandaycss.png";
import bigspringcss from "../../assets/images/illustrator/bigspringcss.png";
import cleanblogbootstrap from "../../assets/images/illustrator/cleanblogbootstrap.png";
import medicloud from "../../assets/images/illustrator/medicloudbootstrap.png";
import startbootstrap from "../../assets/images/illustrator/startbootstrap.png"
import todolistjs from "../../assets/images/illustrator/todolistjs.png";
import digitalclockjs from "../../assets/images/illustrator/digitalclockjs.png";
import clickgamejs from "../../assets/images/illustrator/clickgamejs.png";
import calculatorjs from "../../assets/images/illustrator/calculatorjs.png";
import guessmynumberjs from "../../assets/images/illustrator/guessmynumberjs.png";
import allfood from "../../assets/images/illustrator/all-food.png";

const projects = [
    {
        title: "Fashion Blog",
        description: "A modern and responsive fashion blog website built using HTML and CSS, featuring a clean editorial layout, engaging typography, and a visually appealing user experience.",
        image: fashionblog,

        category: "CSS",

        technologies: ["HTML", "CSS"],

        live: "https://fashionblogdemo.netlify.app/",
        github: "https://github.com/VrushabhDhindale/Fashion-blog.git"
    },

    {
        title: "Burger Restro",
        description: "A responsive restaurant landing page built using HTML and CSS, featuring an attractive food menu, chef highlights, promotional sections, and a modern design for an engaging dining experience.",
        image: burgercss,

        category: "CSS",

        technologies: ["HTML", "CSS"],

        live: "https://burger-restro.netlify.app/",
        github: "https://github.com/VrushabhDhindale/BurgerRestro.git"
    },

    {
        title: "Photographer Portfolio",
        description: "A clean and responsive photographer portfolio built with HTML and CSS, designed to showcase photography work through modern layouts and galleries.",
        image: photographyportfoliocss,

        category: "CSS",

        technologies: ["HTML", "CSS"],

        live: "https://photographer-portfolio-temp.netlify.app/",
        github: "https://github.com/VrushabhDhindale/Photography-portfolio.git"
    },

    {
        title: "Loan Day",
        description: "A responsive finance and loan service website built with HTML and CSS, featuring a clean business layout, loan information sections, service highlights, and a modern user interface.",
        image: loandaycss,

        category: "CSS",

        technologies: ["HTML", "CSS"],

        live: "https://loanday-demo.netlify.app/",
        github: "https://github.com/VrushabhDhindale/loanday.git"
    },

    {
        title: "BigSpring Landing Page",
        description: "A modern business landing page built using HTML and CSS, featuring a clean layout, responsive design, service highlights, call-to-action sections, and a professional user experience.",
        image: bigspringcss,

        category: "CSS",

        technologies: ["HTML", "CSS"],

        live: "https://bigspring-template.netlify.app/",
        github: "https://github.com/VrushabhDhindale/bigSpring.git"
    },

    {
        title: "All Food",
        description: "A responsive restaurant website featuring food menus, restaurant information, table booking, services, newsletter subscription, and a recent blog section.",
        image: allfood,

        category: "CSS",

        technologies: ["HTML", "CSS"],

        live: "https://all-food-template.netlify.app/",
        github: "https://github.com/VrushabhDhindale/all-food.git"
    },

    {
        title: "Clean Blog",
        description: "A responsive Bootstrap blog template featuring a clean editorial design, blog listing, article pages, responsive navigation, and a modern layout optimized for readability and user experience.",
        image: cleanblogbootstrap,

        category: "Bootstrap",

        technologies: ["HTML", "CSS", "Bootstrap"],

        live: "https://clean-blog-template.netlify.app/",
        github: "https://github.com/VrushabhDhindale/cleanBlog.git"
    },

    {
        title: "Mediclone",
        description: "A modern responsive healthcare website featuring services, doctors, appointments, testimonials, and contact sections. Built with HTML, CSS, Bootstrap, and JavaScript, emphasizing clean UI, responsiveness, and user-friendly design.",
        image: medicloud,

        category: "Bootstrap",

        technologies: ["HTML", "CSS", "Bootstrap"],

        live: "https://mediclone-template.netlify.app/",
        github: "https://github.com/VrushabhDhindale/medicloud.git"
    },

    {
        title: "Start Bootstrap",
        description: "A modern Bootstrap landing page with responsive navigation, service sections, call-to-action components, and a clean, professional design for business websites.",
        image: startbootstrap,

        category: "Bootstrap",

        technologies: ["HTML", "CSS", "Bootstrap"],

        live: "https://startbootstrap-template.netlify.app/",
        github: "https://github.com/VrushabhDhindale/Start-Bootstrap.git"
    },

    {
        title: "TO-Do List",
        description: "A responsive To-Do List application built using HTML, CSS, and JavaScript, featuring task creation, completion tracking, deletion, date validation, and Local Storage support to save tasks even after refreshing the browser.",
        image: todolistjs,

        category: "JavaScript",

        technologies: ["HTML", "CSS", "JavaScript"],

        live: "https://to-do-list-basics.netlify.app/",
        github: "https://github.com/VrushabhDhindale/Start-Bootstrap.git"
    },

    {
        title: "Digital Clock",
        description: "A responsive digital clock built using HTML, CSS, and JavaScript, displaying the current time in real-time with automatic updates, a clean modern interface, and a responsive design for an enhanced user experience.",
        image: digitalclockjs,

        category: "JavaScript",

        technologies: ["HTML", "CSS", "JavaScript"],

        live: "https://digital-clock-p1.netlify.app/",
        github: "https://github.com/VrushabhDhindale/digitalClock.git"
    },

    {
        title: "Click Game",
        description: "A fun and responsive click speed game developed with HTML, CSS, and JavaScript, featuring a countdown timer, live score updates, and performance-based rankings for an engaging user experience.",
        image: clickgamejs,

        category: "JavaScript",

        technologies: ["HTML", "CSS", "JavaScript"],

        live: "https://click-game-basic.netlify.app/",
        github: "https://github.com/VrushabhDhindale/clickgame.git"
    },

    {
        title: "Calculator",
        description: "A responsive calculator built with HTML, CSS, and JavaScript that performs basic arithmetic operations through an intuitive interface. It showcases DOM manipulation, event handling, and clean UI design while delivering fast and accurate calculations.",
        image: calculatorjs,

        category: "JavaScript",

        technologies: ["HTML", "CSS", "JavaScript"],

        live: "https://calculator-basic-project-demo.netlify.app/",
        github: "https://github.com/VrushabhDhindale/calculator.git"
    },

    {
        title: "Guess Number Game",
        description: `A responsive "Guess the Number" game built with HTML, CSS, and JavaScript, featuring real-time input validation, high score tracking with Local Storage, keyboard shortcuts, interactive game states, dynamic UI feedback, and a modern neon arcade-inspired interface.`,
        image: guessmynumberjs,

        category: "JavaScript",

        technologies: ["HTML", "CSS", "JavaScript"],

        live: "https://guess-my-number-game-responsive.netlify.app/",
        github: "https://github.com/VrushabhDhindale/guessnumber.git"
    }

]

function Project() {
    useEffect(() => {

        const grid = document.querySelector(".project-grid");

        const isotope = new Isotope(grid, {
            itemSelector: ".project-item",
            layoutMode: "fitRows"
        });

        $(".filter-btn").on('click', function () {
            $(".filter-btn").removeClass("active-page");

            $(this).addClass("active-page");

            const filterValue = $(this).attr("data-filter");

            isotope.arrange({
                filter: filterValue
            });

        });

        return () => {
            $(".filter-btn").off("click");
            isotope.destroy();
        };
    }, []);

    return (
        <section className="project-section scroll-animation" id="project">
            <div className="container">
                <div className="project-heading text-center">
                    <p className="hero-subtitle">My Work</p>
                    <h2 className="hero-title">Featured Projects</h2>
                    <p className="margin-para">Explore some of the projects I've built using HTML, CSS, Bootstrap, JavaScript, jQuery and React.</p>
                </div>

                {/* project filters */}

                <div className="project-filter d-flex flex-wrap justify-content-center gap-4 mt-5 mb-5">

                    <button className="filter-btn active-page" data-filter="*">
                        All
                    </button>

                    <button className="filter-btn" data-filter=".CSS">
                        CSS
                    </button>

                    <button className="filter-btn" data-filter=".Bootstrap">
                        BootStrap
                    </button>

                    <button className="filter-btn" data-filter=".JavaScript">
                        JavaScript
                    </button>

                </div>

                {/* project card */}

                <div className="project-grid row g-4">
                    {
                        projects.map((project) => {

                            return (
                                <article
                                    className={`project-item ${project.category} col-12 col-md-6 col-lg-4`}
                                    key={project.title}
                                >
                                    <div className="project-card">
                                        <div className="project-image">
                                            <img src={project.image} alt={project.title} />
                                        </div>

                                        <div className="project-content">

                                            <div className="project-tech d-flex">
                                                {
                                                    project.technologies.map((technology) => (
                                                        <span key={technology}>{technology}</span>
                                                    ))
                                                }
                                            </div>

                                            <p className="project-dis">
                                                {project.description}
                                            </p>

                                            <div className="project-buttons">
                                                <a
                                                    href={project.live}
                                                    className="live-btn"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Live Demo
                                                </a>

                                                <a
                                                    href={project.github}
                                                    className="git-btn"
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    GitHub
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    )

}

export {projects, Project as default };