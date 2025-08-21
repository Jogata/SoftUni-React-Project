import "./contact.css";

export function Contact() {
    return (
        <div id="contact" className="contact">
            <div className="contact-header">
                <h2>Get In Touch</h2>
            </div>
            <div className="contact-info">
                <div className="contact-left">
                    <h2>Let's talk buisness</h2>
                    <p>
                        Type something very very catchy that will make your potential 
                        clients send a message and make further enquiry about your 
                        business.
                    </p>
                    <div className="contact-details">
                        <div className="detail">
                            <i className="fa fa-envelope"></i>
                            <p>tabloor@info.com</p>
                        </div>
                        <div className="detail">
                            <i className="ri-phone-fill"></i>
                            <p>+123 456 789</p>
                        </div>
                        <div className="detail">
                            <i className="ri-map-pin-2-fill"></i>
                            <p>LG, Country</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="text">
                        <input type="text" name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="text">
                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                    </div>
                    <div className="message">
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>
                    <div className="btn">
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

// export function Contact() {
//     return (
//         <div className="contact-edukative-page">
//             <header>
//                 <h1>Contact Us</h1>
//                 <p>We're here to help. Reach out with your questions or feedback!</p>
//             </header>

//             <main>
//                 <section>
//                     <h2>Send Us a Message</h2>
//                     <form action="#" method="post">
//                         <label htmlFor="name">Full Name</label>
//                         <input type="text" id="name" name="name" required />

//                         <label htmlFor="email">Email Address</label>
//                         <input type="email" id="email" name="email" required />

//                         <label htmlFor="subject">Subject</label>
//                         <input type="text" id="subject" name="subject" required />

//                         <label htmlFor="message">Message</label>
//                         <textarea id="message" name="message" rows="6" required></textarea>

//                         <button type="submit">Send Message</button>
//                     </form>
//                 </section>

//                 <section>
//                     <h2>Contact Information</h2>
//                     <address className="contact-info">
//                         <p><strong>Email:</strong> support@edukative.com</p>
//                         <p><strong>Phone:</strong> +1 (234) 567-8900</p>
//                         <p><strong>Address:</strong> Edukative HQ, 123 Learning Lane, EdTech City, USA</p>
//                         <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (EST)</p>
//                     </address>
//                 </section>
//             </main>
//         </div>
//     )
// }