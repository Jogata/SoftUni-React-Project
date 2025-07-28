// import john from "../../images/john-doe.png"
import "./about.css";

// export function About() {
//     return (
//         <div className="about" id="about">
//             <div className="container">
//                 <img src={john} alt="john" />
//                 <div className="col-2">
//                     <h2>About</h2>
//                     <span className="line"></span>
//                     <p>Intense is an International Financial Planning company with offices in multiple jurisdictions over the world. Working with Intense gives me the ability to advise internat ional expatriates living in the middle east from where I live in USA.</p>
//                     <p>I am John Doe, a senior advisor for an independently owned financial planning company called Intense.</p>
//                     <button className="button">Explore More</button>
//                 </div>
//             </div>
//         </div>
//     )
// }

export function Contact() {
    return (
        <section id="contactPage">
            <div className="clients">
                <h2 className="contactPageTitle">My Clients</h2>
                <p className="clientDesc">
                    I have had oppurtunity to work with...
                </p>
            </div>
            <div className="clients-logos">
                <span>Walmart</span>
                <span>Adobe</span>
                <span>Microsoft</span>
                <span>Facebook</span>
            </div>
            <div id="contact">
                <h2 className="contactTitle">Contact Me</h2>
                <p className="contactDesc">
                    Please fill out the form below to
                    discuss work oppurtunities
                </p>
                <form action="" className="contactForm">
                    <input type="text" name="name" placeholder="Your name" />
                    <input type="email" name="email" placeholder="Your Email" />
                    <textarea name="msg" rows="5" placeholder="Your message"></textarea>
                    <button type="submit" value='send'>Submit</button>
                    <div className="links">
                        <i className="fa fa-facebook link"></i>
                        <i className="fa fa-twitter link"></i>
                        <i className="fa fa-instagram link"></i>
                        <i className="fa fa-youtube-play link"></i>
                    </div>
                </form>
            </div>
        </section>
    )
}