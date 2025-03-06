import "./About.css";
import DownArrow from "./DownArrow";

export default function About(props) {
    return (
        <section id="about" className="about">
            <div className="about-top">
                <h1>Hello there! 👋</h1>
                <h3>
                    I'm Michael, an aspiring software engineer and tester, as well as a hobbyist game developer.
                    Feel free to peruse around my website and check out my previous experiences and projects.
                </h3>
            </div>

            <div className="about-bottom">
                <div className="about-bottom-item about-swd">
                    <h2>Software Development</h2>
                    <hr />

                    <ul>
                        <li>
                            <i>Frontend:</i>&nbsp; &nbsp; JavaScript, TypeScript, HTML, CSS, React
                        </li>
                        <li>
                            <i>Backend:</i>&nbsp; &nbsp; Java, SQL, Firebase, Python, Scikit-learn
                        </li>
                        <li>
                            <i>Other:</i>&nbsp; &nbsp; AWS, Postman, Godot
                        </li>
                    </ul>
                </div>

                <div className="about-bottom-item about-qa">
                    <h2>Quality Assurance</h2>
                    <hr />

                    <ul>
                        <li>
                            Experienced with manual and automated testing
                        </li>
                        <li>
                            Two QA internships over the course of sixteen months
                        </li>
                        <li>
                            <i>Tools: </i>&nbsp; Sahi, Mocha, JUnit, TestRail
                        </li>
                    </ul>
                </div>

                <div className="about-bottom-item about-edu">  
                    <h2>Education</h2>  
                    <hr />

                    <ul>
                        <li>
                            Graduated BSC from The University of British Columbia
                        </li>
                        <li>
                            <i>Courses: </i>&nbsp; Software construction, databases, cloud, game dev, internet
                        </li>
                        <li>
                            Based in Canada 🍁
                        </li>
                    </ul>
                </div>
            </div>

            <DownArrow skip={"#experience"} />
        </section>
    )
}