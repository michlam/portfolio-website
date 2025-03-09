import "./Projects.css";
import projectsData from "../data/projectsData";
import { useState } from "react";
import ProjectFocus from "./ProjectFocus";

export default function Projects() {
    const [open, setOpen] = useState(false);
    const [focus, setFocus] = useState(null);

    function handleOpenFocus(projectName) {
        setFocus(getProjectFocus(projectName));
        setOpen(true);
    }

    const projectsElements = projectsData.map((project) => {
        return (
            <div className="projects-item" key={project.name} data-aos="zoom-in-up" data-aos-duration="400">
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
                <h1 data-aos="fade" data-aos-duration="2000">Projects</h1>
                <div className="projects-container">
                    {projectsElements}
                </div>
            </section>
        </>
    )
}

function getProjectFocus(projectName) {
    for (let i = 0; i < projectsData.length; i++) {
        if (projectsData[i].name === projectName) return projectsData[i];
    }
}