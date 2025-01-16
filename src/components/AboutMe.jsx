export default function AboutMe(){
    return (
        <>
        <section id="About-me" className="section-container">
            <h1>About me</h1>
            <div className="aboutme-body">
                <div className="text-container">
                    <p>
                        I am a software developer passionate about <strong>technology</strong> and committed to every stage of the <strong>development lifecycle</strong>, from <strong>planning</strong> and <strong>requirements gathering</strong> to <strong>implementation</strong>, <strong>testing</strong>, and <strong>maintenance</strong> of efficient solutions. I pride myself on contributing <strong>innovative ideas</strong> that enhance the impact of every project I am involved in, always promoting the use of <strong>best practices</strong> such as writing <strong>clean code</strong>, maintaining <strong>clear documentation</strong>, and fostering <strong>collaborative work</strong>.
                    </p>
                    <p>
                        I have a results-driven approach, where <strong>quality</strong> and achieving the <strong>team's goals</strong> are my top priorities. Additionally, I constantly strive to stay updated on the latest <strong>technologies</strong> to deliver modern and effective solutions that adapt to the ever-changing needs of the professional environment.
                    </p>
                </div>
                <div className="photo-container">
                    <div className="cuadro-color"></div>
                    <img srcSet="/assets/foto.webp" type="image/webp" alt="Foto"/>
                </div>
            </div>
            <h2>Skills</h2>
            <div className="skills-container">
                <div className="skills-category">
                    <h3>Frontend</h3>
                    <div className="skills">
                        <img src="/assets/Icons/HTML5.svg" title="HTML5" alt="HTML5" />
                        <img src="/assets/Icons/CSS3.svg" title="CSS3" alt="CSS3" />
                        <img src="/assets/Icons/JavaScript.svg" title="JavaScript" alt="JavaScript" />
                        <img src="/assets/Icons/React.svg" title="React" alt="React" />
                        <img src="/assets/Icons/Tailwind CSS.svg" title="Tailwind CSS" alt="Tailwind CSS" />
                        <img src="/assets/Icons/Bootstrap.svg" title="Bootstrap" alt="Bootstrap" />
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Backend</h3>
                    <div className="skills">
                        <img src="/assets/Icons/Python.svg" title="Python" alt="Python" />
                        <img src="/assets/Icons/Django.svg" title="Django" alt="Django" />
                        <img src="/assets/Icons/Java.svg" title="Java" alt="Java" />
                    </div>
                </div>
                <div className="skills-category">
                    <h3>Tools</h3>
                    <div className="skills">
                        <img src="/assets/Icons/Docker.svg" title="Docker" alt="Docker" />
                        <img src="/assets/Icons/Git.svg" title="Git" alt="Git" />
                        <img src="/assets/Icons/Selenium.svg" title="Selenium" alt="Selenium" />
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}