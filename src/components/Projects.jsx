import "./Projects.css";
import projectsData from "../data/projectsData";

export default function Projects() {
    const projectsElements = projectsData.map((project) => {
        return (
            <div className="projects-item" key={project.name}>
                <div className="projects-image-container">
                    <img src={project.thumbnailPath} />
                </div>
                <h3>{project.name}</h3>
            </div>
        )
    }) 

    return (
        <section id="projects" className="projects">
            <h1>Projects</h1>
            <div className="projects-container">
                {projectsElements}
            </div>
        </section>
    )
}