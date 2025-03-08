import "./Projects.css";
import projectsData from "../data/projectsData";
import { useState } from "react";
import ProjectFocus from "./ProjectFocus";

export default function Projects() {
    const [open, setOpen] = useState(false);
    const [focus, setFocus] = useState(null);

    function handleOpenFocus(projectName) {
        setFocus(projectName);
        setOpen(true);
    }

    const projectsElements = projectsData.map((project) => {
        return (
            <div className="projects-item" key={project.name}>
                <div className="projects-image-container" onClick={() => handleOpenFocus(project.name)}>
                    <img src={project.thumbnailPath} />
                </div>
                <h3>{project.name}</h3>
            </div>
        )
    }) 

    return (
        <>
            <ProjectFocus open={open} setOpen={setOpen} focus={focus}/>
            <section id="projects" className="projects">
                <h1>Projects</h1>
                <div className="projects-container">
                    {projectsElements}
                </div>
            </section>
        </>
    )
}