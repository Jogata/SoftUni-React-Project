import "./contact.css";

export function Contact() {
    return (
        <div className="contact-section">
            <div className="container">
                <div className="contact-form-container">
                    <form>
                        <h1><span>Contact</span> Us</h1>
                        <div>
                            <label>Name</label>
                            <input type="text" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea rows="10" placeholder="Enter your name" />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}