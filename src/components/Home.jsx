import GithubIcon from "../assets/Github_Icon.svg";
import LinkedInIcon from "../assets/LinkedIn_Icon.png";
import "./Home.css";

export default function Home(props) {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <h1>MICHAEL LAM</h1>
                <h2>Software Developer &middot; Quality Assurance &middot; Game Developer</h2>
                <div className="socials">
                    <a href="https://github.com/michlam" target="_blank">
                        <img src={GithubIcon} alt="Github Icon" className="github-icon"/>
                    </a>

                    <a href="https://www.linkedin.com/in/michlam812" target="_blank">
                        <img src={LinkedInIcon} alt="LinkedIn Icon" className="linkedIn-icon"/>
                    </a>
                </div>
            </div>
        </section>
    )
}