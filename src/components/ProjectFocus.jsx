import { Dialog, DialogContent, Link } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LinkIcon from "../assets/Link_Icon.png";
import projectsData from "../data/projectsData.js";
import "./ProjectFocus.css";
import { useState } from "react";

export default function ProjectFocus(props) {
    const skillsElements = props.focus ? props.focus.skills.map((skill) => (
        <p key={skill}>{skill}</p>
    )) : null;

    const carousel = (
        <Carousel width="55%" dynamicHeight>
            <div>
                <img src="/projects/genshin-loadouts/Landing.png" />
            </div>
            <div className="carousel">
                <img src="/projects/covid/thumbnail.png" />
            </div>
            <div className="carousel">
                <img src="/projects/dungeons/thumbnail.png" />
            </div>
        </Carousel>
    )

    function handleClose() {
        props.setOpen(false);
    }

    return (
        <Dialog open={props.open} onClose={handleClose} maxWidth="lg" fullWidth="lg">
            <DialogContent className="dialog-content" sx={{
                backgroundColor: "#0b2b31",
                color: "#f3f3f4",
                padding: "50px 50px 20px",
            }}>
                <div className="dialog-top">
                    <h1>{props.focus ? props.focus.name : null}</h1>
                    <Link href={props.focus ? props.focus.githubLink : null} target="_blank" className="project-github-link" sx={{
                        color: "#bdbdbe",
                        textDecoration: "none",
                        marginTop: "10px",
                    }}>
                        <img src={LinkIcon} />
                        <p>View in GitHub</p>
                    </Link>
                </div>

                <div className="dialog-bottom">
                    <div className="dialog-left">
                        <p className="dialog-description">{props.focus ? props.focus.desc1 : null}</p>
                        <p className="dialog-description">{props.focus ? props.focus.desc2 : null}</p>

                        <div className="dialog-skills">
                            {skillsElements}
                        </div>
                    </div>

                    <div className="dialog-right">
                        {carousel}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
