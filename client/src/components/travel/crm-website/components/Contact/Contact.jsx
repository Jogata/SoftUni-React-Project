import "./contact.css";

export function Contact() {
  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <p>Please fill this form in a decent manner</p>
      <form >
        <div>
          <label htmlFor="firstName">Full Name *</label>
          <div className='names'>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
            />
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              required
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
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

// export function Contact() {
//     return (
//         <>
//             <header className="contact">
//                 <h1>Contact Us</h1>
//                 <p>We're here to help. Let's connect.</p>
//             </header>
//             <main className="contact">
//                 <address>
//                     <section className="contact-section contact-info">
//                         <h2>Get in Touch</h2>
//                         <p><strong>Phone:</strong> +1 (XXX) XXX-XXXX <span>(Mon-Fri, 9 AM - 6 PM EST)</span></p>
//                         <p><strong>Email:</strong> <a href="mailto:info@cantar.com">info@cantar.com</a></p>
//                         <p><strong>Support:</strong> <a href="mailto:support@crn.cantar.com">support@crn.cantar.com</a></p>
//                     </section>

//                     <section className="contact-section contact-address">
//                         <h2>Visit Us</h2>
//                         <p>
//                             <span>Cantar Headquarters</span>
//                             <span>123 Innovation Drive</span>
//                             <span>Suite 400</span>
//                             <span>New York, NY 10001</span>
//                             <span>USA</span>
//                         </p>
//                     </section>
//                 </address>

//                 <section className="contact-section contact-form">
//                     <h2>Send Us a Message</h2>
//                     <form onSubmit={e => e.preventDefault()}>
//                         <div className="form-group">
//                             <label htmlFor="name">Name*</label>
//                             <input type="text" id="name" name="name" required />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="email">Email*</label>
//                             <input type="email" id="email" name="email" required />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="company">Company (Optional)</label>
//                             <input type="text" id="company" name="company" />
//                         </div>

//                         <div className="form-group">
//                             <label htmlFor="message">Message*</label>
//                             <textarea id="message" name="message" required></textarea>
//                         </div>

//                         <button type="submit">Send Message</button>
//                     </form>
//                 </section>

//                 <section className="contact-section social-links">
//                     <h2>Connect With Us</h2>
//                     <a href="#" target="_blank">LinkedIn</a>
//                     <a href="#" target="_blank">Twitter/X</a>
//                     <a href="#" target="_blank">Facebook</a>
//                     <a href="#" target="_blank">YouTube</a>
//                 </section>

//             </main>
//         </>
//     )
// }