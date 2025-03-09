import "./Experience.css";
import PinIcon from "../assets/PinIcon.png";
import LinkIcon from "../assets/Link_Icon.png";
import experience from "../data/experienceData.js";
import DownArrow from "./DownArrow";
import Aos from "aos";
import { useEffect } from "react";

export default function Experience(props) {

    const experienceElements = experience.map((exp) => {
        const responsibiliesElements = exp.responsibilities.map((resp) => {
            return (
                <li key={resp}>{resp}</li>
            )
        })

        const skillsElements = exp.skills.map((skill) => {
            return (
                <h4 key={skill}>{skill}</h4>
            )
        })

        const bgStyle = {
            backgroundImage: `url(${exp.imagePath})`,
        }

        return (
            <div className="experience-content" key={exp.role} data-aos="fade-up">
                <details name="work">
                    <summary>
                        <div className="work-date">
                            <h4>{exp.date1}</h4>
                            <h2>{exp.date2}</h2>
                        </div>
                        <div className="work-description">
                            <h2>{exp.role}</h2>
                            <div className="work-location">
                                <img src={PinIcon} />
                                <h4>{exp.location}</h4>
                            </div>
                        </div>
                    </summary>

                    <div className="work-content" style={bgStyle}>
                        <a href={exp.link} target="_blank" className="work-link">
                            <img src={LinkIcon} />
                            <h4>{exp.link}</h4>
                        </a>

                        <p>{exp.description}</p>
                        <ul>{responsibiliesElements}</ul>

                        <div className="work-skills">{skillsElements}</div> 
                    </div>
                    
                </details>
            </div>
        )
    })

    return (
        <section id="experience" className="experience">
            <h1 data-aos="fade" data-aos-duration="2000">Experience</h1>
            <div className="experience-elements">
                {experienceElements}
            </div>
            <DownArrow skip="#projects"/>
        </section>
    )
}