import "./About.css";

export default function About(props) {
    return (
        <section className="about">
            <div className="about-top">
                <h1>Hello there! 👋</h1>
                <h3>
                    I'm Michael, an aspiring software engineer and tester based in Vancouver. 
                    Feel free to peruse around my website, where I show my previous experiences and projects.
                </h3>
                <p>
                    Passionate about software development and a hobbyist game developer.
                </p>
            </div>

            <div className="about-bottom">
                <div className="about-bottom-item">
                    Software Development    
                </div>

                <div className="about-bottom-item">
                    Quality Assurance
                </div>

                <div className="about-bottom-item">    
                    Based in Canada
                    Graduated BSC from The University of British Columbia
                </div>
            </div>
        </section>
    )
}