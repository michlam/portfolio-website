import { useEffect, useState } from "react";
import UpArrowIcon from "../assets/Up_Arrow_Icon.png";
import "./UpArrow.css";

export default function UpArrow(props) {
    const [opacity, setOpacity] = useState(0);
    const scrollRange = 1000;

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            const newOpacity = (scrollY < scrollRange) ? (scrollY / scrollRange) : 1;
            setOpacity(Math.min(0.9, newOpacity));
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollRange]);

    const headerStyles = {
        opacity: `${opacity}`,
        transition: 'opacity 0.3s ease'
    }

    return (
        <>
            { (opacity !== 0) ? 
                <a href="#home" className="up-arrow" style={headerStyles}>  
                    <img className="up-arrow-image" src={UpArrowIcon}/>
                </a> :
                null
            }
        </>
    )
}