import { useEffect } from "react";
import "./Header.css";
import { useState } from "react";

export default function Header(props) {
    const [opacity, setOpacity] = useState(0);
    const scrollRange = 600;

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            const newOpacity = (scrollY < scrollRange) ? (scrollY / scrollRange) : 1;
            setOpacity(Math.min(0.75, newOpacity));
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollRange]);

    const headerStyles = {
        backgroundColor: `rgba(5, 24, 27, ${opacity})`,
        transition: 'background-color 0.3s ease'
    }

    return (
        <header style={headerStyles}>
            <a href="#home">
                <span className="nav-item">
                    <h4><i>00</i></h4>
                    <p>Home</p>
                </span>
            </a>

            <a href="#about">
                <span className="nav-item">
                    <h4><i>01</i></h4>
                    <p>About</p>
                </span>
            </a>

            <a href="#experience">
                <span className="nav-item">
                    <h4><i>02</i></h4>
                    <p>Experience</p>
                </span>
            </a>

            <a href="#projects">
                <span className="nav-item">
                    <h4><i>03</i></h4>
                    <p>Projects</p>
                </span>
            </a>

            <a href="#contact">   
                <span className="nav-item">
                    <h4><i>04</i></h4>
                    <p>Contact</p>
                </span>
            </a>
        </header>
    )
}