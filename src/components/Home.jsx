import AboutMe from "./AboutMe";
import Achievements from "./Achievements";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
import { FaGithub, FaLinkedin  } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoReader } from "react-icons/io5";

export default function Home() {
    return (
        <>
            <section className="home-container" id="Home">
                <div className="principal-container-burbles">
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                    <div className="floating-burble"></div>
                </div>
                <div className="home-header">
                    <div>
                        <h1>Hi, I'm Elliot Axel Noriega</h1>
                        <p>
                        Here you’ll discover my projects, experiences, and the skills that help me tackle every technological challenge.    
                        </p>
                        <p>
                            Feel free to explore and learn more about my work!
                        </p>
                        <div className="icons">
                            <a className="button-cv" href="/assets/ICPC.pdf" target="_blank">
                                <IoReader/>
                                Curriculum
                            </a>
                            <a className="icon-contact" href="https://github.com/ElliotAxNor" target="_blank">
                                <FaGithub/>
                            </a>
                            <a className="icon-contact" href="https://www.linkedin.com/in/elliot-axel-noriega-41005528a/" target="_blank">
                                <FaLinkedin/>
                            </a>
                            <a className="icon-contact" href="mailto:elliotnoriega@gmail.com">
                                <MdEmail/>
                            </a>
                        </div>
                    </div>
                    <div>
                        <picture>
                            <img srcSet="/assets/foto.webp" alt="Foto" type="image/webp" />
                        </picture>
                    </div>
                </div>
            </section>
            <Experience/>
            <Education/>
            <AboutMe/>
            <Projects/>
            <Achievements/>
        </>
    );
}