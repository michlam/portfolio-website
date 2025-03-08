import "./Projects.css";
import projectsData from "../data/projectsData";
import { useState } from "react";
import ProjectFocus from "./ProjectFocus";

export default function Projects() {
    const [focus, setFocus] = useState(null);
    const dialog = document.querySelector("dialog");

    const projectsElements = projectsData.map((project) => {
        return (
            <div className="projects-item" key={project.name}>
                <div className="projects-image-container" onClick={() => setFocus(project.name)}>
                    <img src={project.thumbnailPath} />
                </div>
                <h3>{project.name}</h3>
            </div>
        )
    }) 


    return (
        <>
            {focus ? <ProjectFocus /> : null}
            <section id="projects" className="projects">
                <h1>Projects</h1>
                <div className="projects-container">
                    {projectsElements}
                </div>
            </section>
        </>
    )
}