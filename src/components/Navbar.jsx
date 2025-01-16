import { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState(""); // Para rastrear la sección activa
    const [showSubMenu, setShowMenu] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true); // Estado para el modo oscuro

    useEffect(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);
    }, [isDarkMode]);

    useEffect(() => {
        if (showSubMenu) {
            document.body.style.overflow = "hidden"; // Desactivar scroll
        } else {
            document.body.style.overflow = ""; // Reactivar scroll
        }

        return () => {
            document.body.style.overflow = ""; // Asegurarse de reactivar el scroll
        };
    }, [showSubMenu]);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section");
            let currentSection = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const scrollPosition = window.scrollY + window.innerHeight / 3;

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    currentSection = section.getAttribute("id");
                }
            });
            if (currentSection){
                setActiveSection(currentSection);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    function scrollToSection(sectionId, offset = 50) {
        const section = document.getElementById(sectionId);
        if (section) {
            const sectionTop = section.offsetTop; // Obtén la posición de la sección desde la parte superior.
            const scrollPosition = sectionTop - offset; // Resta un margen para que no quede justo al inicio.
            window.scrollTo({
                top: scrollPosition,
                behavior: "smooth", // Desplazamiento suave.
            });
        }
    }

    return (
        <>
            <nav className={`navbar ${showSubMenu ? "submenu-active" : ""}`}>
                <div className="indicator-level"></div>
                <div className="navbar-content">
                    <p>My portfolio</p>
                    <div className="animated-toggle" onClick={() => setIsDarkMode(!isDarkMode)}>
                        <div className={`circle ${isDarkMode ? "light" : "dark"}`}>
                            {isDarkMode ? <MdDarkMode/> : <MdOutlineLightMode/>}
                        </div>
                    </div>
                    <div className="content-links">
                        <a
                            href="#Experience"
                            className={`link-item ${activeSection === "Experience" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault(); // Evitar el comportamiento predeterminado.
                                setActiveSection("Experience");
                                scrollToSection("Experience");
                            }}
                        >
                            Experience
                        </a>
                        <a
                            href="#Education"
                            className={`link-item ${activeSection === "Education" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault(); // Evitar el comportamiento predeterminado.
                                setActiveSection("Education");
                                scrollToSection("Education");
                            }}
                        >
                            Education
                        </a>
                        <a
                            href="#About-me"
                            className={`link-item ${activeSection === "About-me" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault(); // Evitar el comportamiento predeterminado.
                                setActiveSection("About-me");
                                scrollToSection("About-me");
                            }}
                        >
                            About me
                        </a>
                        <a
                            href="#Projects"
                            className={`link-item ${activeSection === "Projects" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault(); // Evitar el comportamiento predeterminado.
                                setActiveSection("Projects");
                                scrollToSection("Projects");
                            }}
                        >
                            Projects
                        </a>

                        <a
                            href="#Achievements"
                            className={`link-item ${activeSection === "Achievements" ? "active" : ""}`}
                            onClick={(e) => {
                                e.preventDefault(); // Evitar el comportamiento predeterminado.
                                setActiveSection("Achievements");
                                scrollToSection("Achievements");
                            }}
                        >
                            Achievements
                        </a>
                    </div>
                    <div className={`content-toggle ${showSubMenu ? "active" : ""}`}>
                        <button
                            aria-expanded={showSubMenu}
                            onClick={() => setShowMenu(!showSubMenu)}
                        >
                            <div></div>
                            <div></div>
                            <div></div>
                        </button>
                    </div>
                </div>
            </nav>
            {showSubMenu && (
                <div className="background-submenu" onClick={() => setShowMenu(false)}>
                    <div className={`sub-menu ${showSubMenu ? "active" : ""}`}>
                        <div>
                            <a
                                href="#Experience"
                                className={`link-item ${activeSection === "Experience" ? "active" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault(); // Evitar el comportamiento predeterminado.
                                    setActiveSection("Experience");
                                    scrollToSection("Experience");
                                    setShowMenu(false)
                                }}
                            >
                                Experience
                            </a>
                            <a
                                href="#Education"
                                className={`link-item ${activeSection === "Education" ? "active" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault(); // Evitar el comportamiento predeterminado.
                                    setActiveSection("Education");
                                    scrollToSection("Education");
                                    setShowMenu(false)
                                }}
                            >
                                Education
                            </a>
                            <a
                                href="#About-me"
                                className={`link-item ${activeSection === "About-me" ? "active" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault(); // Evitar el comportamiento predeterminado.
                                    setActiveSection("About-me");
                                    scrollToSection("About-me");
                                    setShowMenu(false)
                                }}
                            >
                                About me
                            </a>
                            <a
                                href="#Projects"
                                className={`link-item ${activeSection === "Projects" ? "active" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault(); // Evitar el comportamiento predeterminado.
                                    setActiveSection("Projects");
                                    scrollToSection("Projects");
                                    setShowMenu(false)
                                }}
                            >
                                Projects
                            </a>

                            <a
                                href="#Achievements"
                                className={`link-item ${activeSection === "Achievements" ? "active" : ""}`}
                                onClick={(e) => {
                                    e.preventDefault(); // Evitar el comportamiento predeterminado.
                                    setActiveSection("Achievements");
                                    scrollToSection("Achievements");
                                    setShowMenu(false)
                                }}
                            >
                                Achievements
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
