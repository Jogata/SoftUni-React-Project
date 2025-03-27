import './contact.css';

export function Contact() {
    return (
        <div id='contact'>
            <div className="contact-form">
                <h2>Contact Me </h2>
                <p>Please fill this form to book my services</p>
                <form >
                    <div>
                        <label htmlFor="firstName">Full Name</label>
                        <div className='names'>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                placeholder="First Name"
                            />
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                placeholder="Last Name"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">E-mail *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="example@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}