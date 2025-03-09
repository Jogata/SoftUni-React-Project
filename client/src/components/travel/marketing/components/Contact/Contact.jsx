import './contact.css';

export function Contact() {
    return (
        <div className="contact" id='contact'>
            <div className="contact-header">
                <h2>Get In Touch</h2>
            </div>
            <div className="contact-info">
                <div className="contact-left">
                    <h2>Lets Talk Business</h2>
                    <p>Type something very very catchy that will make 
                        your potential clients send a message and make 
                        further enquiry about your business
                    </p>
                    <div className="contact-details">
                        <div className="detail">
                            <p>email@gmail.com</p>
                        </div>
                        <div className="detail">
                            <p>+1234678900</p>
                        </div>
                        <div className="detail">
                            <p>City, Country</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <div className="contact-input">
                        <div className="text">
                            <input type="text" placeholder='Email' />
                        </div>
                        <div className="text">
                            <input type="text" placeholder='Subject' />
                        </div>
                        <div className="message">
                            <textarea name="Message" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                        <div className="btn">
                            <button>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}