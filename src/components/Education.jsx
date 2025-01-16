import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";

export default function Education(){
    return (
        <>
            <section className="section-container" id="Education">
                <h1 id="Education">Education</h1>
                <div className="education-body">
                    <picture>
                        <img srcSet="src/assets/UAZ.svg" alt="Logo UAZ" type="image/webp" />
                    </picture>
                    <span className="line-vertical"></span>
                    <div className="info-container">
                        <article className="university">
                            <p>Universidad Autónoma de Zacatecas</p>
                            <div className="location">
                                <MdLocationOn/>
                                <p>Villanueva - Zacatecas, La Escondida, 98160 Zacatecas, Zac.</p>
                            </div>
                        </article>
                        <article className="career">
                            <p>Bachelor's Degree in Software Engineering</p>
                            <div className="period">
                                <FaCalendarAlt/>
                                <p> August 2020 - December 2024</p>
                            </div>
                        </article>
                        <article>
                            <p><strong>Key Highlights:</strong></p>
                            <ul>
                                <li>Proficiency in software engineering principles, including analysis, design, implementation, evaluation, and maintenance.</li>
                                <li>Knowledge of all stages of the software development lifecycle, from planning to implementation and testing.</li>
                                <li>Ability to collaborate in teams and lead multidisciplinary projects.</li>
                                <li>Strong problem-solving skills and adaptability to emerging technologies.</li>
                                <li>Commitment to ethical practices and continuous learning in the field.</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}