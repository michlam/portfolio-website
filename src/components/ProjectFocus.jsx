import { Dialog, DialogContent, Link } from "@mui/material";
import LinkIcon from "../assets/Link_Icon.png";
import "./ProjectFocus.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ProjectFocus(props) {
    const skillsElements = (
        <div className="dialog-skills">
            <p>Java</p>
            <p>Spring</p>
            <p>MySQL Workbench</p>
            <p>Postman</p>
            <p>React</p>
            <p>React Router</p>
            <p>JavaScript</p>
            <p>HTML</p>
            <p>CSS</p>
        </div>
    )

    const carousel = (
        <Carousel>
            <div>
                <img src="/public/projects/genshin-loadouts/Landing.png" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="/public/projects/covid/thumbnail.png" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="/public/projects/dungeons/thumbnail.png" />
                <p className="legend">Legend 3</p>
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
                padding: "40px 50px",
            }}>
                <div className="dialog-top">
                    <h1>{props.focus}</h1>
                    <Link href="https://www.google.ca" target="_blank" className="project-github-link" sx={{
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
                        <p className="dialog-description">
                            Genshin Loadouts is a web application combining my passion for software development with one of my favourite games - Genshin Impact.
                            I wanted to create a tool that simulates the user creation, character unlocking, and team creation processes.
                        </p>
                        <p className="dialog-description">
                            I built the REST API backend with Java and Spring, which interfaces with a MySQL database. 
                            The frontend is built with React and React Router, which consumes the API.
                        </p>
                        {skillsElements}
                    </div>

                    <div className="dialog-right">
                        {carousel}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}