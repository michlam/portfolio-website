import "./Experience.css";
import PinIcon from "../assets/PinIcon.png";

export default function Experience(props) {
    return (
        <section id="experience" className="experience">
            <h1>Experience</h1>
            
            <div className="experience-content">
                <details name="work">
                    <summary>
                        <div className="work-date">
                            <h4>Jan - Aug</h4>
                            <h2>2024</h2>
                        </div>
                        <div className="work-description">
                            <h2>QA Analyst Intern @ Vecima Networks Inc.</h2>
                            <div className="work-location">
                                <img src={PinIcon} />
                                <h4>Vancouver, BC</h4>
                            </div>
                        </div>
                    </summary>

                    <div>
                        <p>
                            During this internship, I worked to test every part of the GPS solution suite, including websites, 
                            internal tools, APIs, third-party integrations, and hardware.
                        </p>
                        <ul>
                            <li>
                                Developed and executed functional tests for over seven GPS device models, adhering to criteria set by client use cases 
                                and specific device protocols.
                            </li>
                            <li>
                                Contributed over 100 test cases to our Sahi test automation suite, significantly reducing release night downtime.
                            </li>
                            <li>
                                Created a robust and scalable automation script to initialize hundreds of devices, 
                                saving hours of manual input for bulk client registration.
                            </li>
                            <li>
                                As principal QA for a third party integration, translated client requirements into actionable E2E test plans 
                                and automated tests within a strict release schedule.
                            </li>
                        </ul>

                        
                    </div>
                    
                </details>
            </div>

        </section>
    )
}