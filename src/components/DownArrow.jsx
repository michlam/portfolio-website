import DownArrowIcon from "../assets/Down_Arrow_Icon.png";
import "./DownArrow.css";

export default function DownArrow(props) {
    return (
        <a href={props.skip} data-aos="fade" data-aos-duration="3000" data-aos-offset="0">
            <img className="down-arrow" src={DownArrowIcon}/>
        </a>
    )
}