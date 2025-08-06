import "./instructor.css";

export function Instructor() {
    return (
        <div className="edukative-instructor-section">
            <div className="edukative-instructor">
                <img src="https://raw.githubusercontent.com/Jogata/Front-end/refs/heads/main/Landing-Pages/Sports/img/soccer/cristiano-ronaldo.png" alt="" />
            </div>
            <div className="edukative-instructor-text">
                <h2>Become An Instructor</h2>
                <p>
                    At Edukative, we believe that great instructors shape
                    the future. Whether you're an industry expert, an experienced
                    teacher, or a passionate professional, our platform gives you
                    the tools and support to share your knowledge with learners
                    around the world.
                </p>
                <p>
                    Transform your knowledge into high-quality courses and reach 
                    a global audience. Help students grow their skills, advance 
                    their careers, or discover new passions.
                </p>
                <button>Apply Now</button>
            </div>
        </div>
    )
}