import { Dialog } from "@mui/material";
import Link from "../assets/Link_Icon.png";
import "./ProjectFocus.css";

export default function ProjectFocus(props) {
    const skillsElements = (
        <>Skills elements</>
    )

    function handleClose() {
        props.setOpen(false);
    }

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <div className="dialog">
                <div className="dialog-top">
                    <h1>{props.focus}</h1>
                    <div className="project-github-link">
                        <img src={Link} />
                        <p>View in GitHub</p>
                    </div>
                </div>

                <div className="dialog-bottom">
                    <div className="dialog-left">
                        <p className="dialog-description">
                            Description
                        </p>
                        {skillsElements}
                    </div>

                    <div className="dialog-right">
                        {/* CAROUSEL GOES HERE */}
                    </div>
                </div>
            </div>
        </Dialog>
    )
}