import "./Projects.css";
import DownArrow from "./DownArrow";

export default function Projects(props) {
    return (
        <section id="projects" className="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                <div className="projects-item">
                    <div className="projects-image-container">
                        <img src="/projects/genshin-loadouts/Landing.png" />
                    </div>
                    <h3>Genshin Loadouts</h3>
                </div>

                <div className="projects-item">
                    <div className="projects-image-container">
                        <img src="/projects/genshin-loadouts/Landing.png" />
                    </div>
                    <h3>Genshin Loadouts</h3>
                </div>
                
                <div className="projects-item">
                    <div className="projects-image-container">
                        <img src="/projects/genshin-loadouts/Landing.png" />
                    </div>
                    <h3>Genshin Loadouts</h3>
                </div>
                
                <div className="projects-item">
                    <div className="projects-image-container">
                        <img src="/projects/genshin-loadouts/Landing.png" />
                    </div>
                    <h3>Genshin Loadouts</h3>
                </div>
            </div>
        </section>
    )
}