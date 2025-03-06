import DownArrowIcon from "../assets/Down_Arrow_Icon.png";
import "./DownArrow.css";

export default function DownArrow(props) {
    return (
        <a href={props.skip}>
            <img className="down-arrow" src={DownArrowIcon}/>
        </a>
    )
}