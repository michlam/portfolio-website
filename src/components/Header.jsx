import { useEffect } from "react";
import "./Header.css";
import { useState } from "react";

export default function Header() {
    const [opacity, setOpacity] = useState(0);
    const scrollRange = 800;

    useEffect(() => {
        function handleScroll() {
            const scrollY = window.scrollY;
            const newOpacity = (scrollY < scrollRange) ? (scrollY / scrollRange) : 1;
            setOpacity(newOpacity)
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrollRange]);

    const headerStyles = {
        backgroundColor: `rgba(0, 0, 255, ${opacity})`,
        transition: 'background-color 0.3s ease'
    }

    return (
        <header style={headerStyles}>
            <span className="nav-item">
                <h4><i>00</i></h4>
                <p>Home</p>
            </span>

            <span className="nav-item">
                <h4><i>01</i></h4>
                <p>About</p>
            </span>

            <span className="nav-item">
                <h4><i>02</i></h4>
                <p>Experience</p>
            </span>

            <span className="nav-item">
                <h4><i>03</i></h4>
                <p>Projects</p>
            </span>

            <span className="nav-item">
                <h4><i>04</i></h4>
                <p>Contact</p>
            </span>
        </header>
    )
}