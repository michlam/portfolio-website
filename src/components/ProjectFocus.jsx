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

    const carouselImages = props.focus ? props.focus.images.map((image) => (
        <div key={image}>
            <img src={image} />
        </div>
    )) : null;
    
    function handleClose() {
        props.setOpen(false);
    }

    return (
        <Dialog open={props.open} onClose={handleClose} maxWidth="lg" fullWidth="lg">
            <DialogContent className="dialog-content" sx={{
                backgroundColor: "#0b2b31",
                color: "#f3f3f4",
                padding: "50px 50px 0px",
            }}>
                <div className="dialog-top">
                    <h1>{props.focus ? props.focus.name : null}</h1>
                    <div className="dialog-top-right">
                        {
                            props.focus && props.focus.demoLink ? 
                            <Link href={props.focus.demoLink} target="_blank" className="project-github-link" sx={{
                                color: "#bdbdbe",
                                textDecoration: "none",
                                marginTop: "10px",
                            }}>
                                <img src={LinkIcon} />
                                <p>Demo</p>
                            </Link> :
                            null
                        }

                        {
                            props.focus && props.focus.githubLink ?
                            <Link href={props.focus.githubLink} target="_blank" className="project-github-link" sx={{
                                color: "#bdbdbe",
                                textDecoration: "none",
                                marginTop: "10px",
                            }}>
                                <img src={LinkIcon} />
                                <p>GitHub</p>
                            </Link> :
                            null
                        }
                    </div>
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
                        <Carousel width="95%" dynamicHeight className="carousel">
                            {carouselImages}
                        </Carousel>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
