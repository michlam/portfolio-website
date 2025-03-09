import UpArrowIcon from "../assets/Up_Arrow_Icon.png";
import "./UpArrow.css";

export default function UpArrow(props) {

    return (
        <a href="#home" className="up-arrow">
            <img className="up-arrow-image" src={UpArrowIcon}/>
        </a>
    )
}