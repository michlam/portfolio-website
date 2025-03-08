import { Dialog } from "@mui/material";
import "./ProjectFocus.css";

export default function ProjectFocus(props) {
    function handleClose() {
        props.setOpen(false);
    }

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <h1>Hello hello</h1>
        </Dialog>
    )
}