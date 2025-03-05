import "./Header.css";

export default function Header() {
    return (
        <header>
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