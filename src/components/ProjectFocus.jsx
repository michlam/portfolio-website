import { Dialog, DialogContent, Link } from "@mui/material";
import LinkIcon from "../assets/Link_Icon.png";
import "./ProjectFocus.css";

export default function ProjectFocus(props) {
    const skillsElements = (
        <>Skills elements</>
    )

    function handleClose() {
        props.setOpen(false);
    }

    return (
        <Dialog open={props.open} onClose={handleClose} maxWidth="md" fullWidth="md">
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
                            Genshin Loadouts is a web application inspired by combining my passion for software development with one of my favourite games - Genshin Impact.
                            I wanted to create a tool that simulates the user creation, character unlocking, and team creation processes.
                        </p>
                        {skillsElements}
                    </div>

                    <div className="dialog-right">
                        {/* CAROUSEL GOES HERE */}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}