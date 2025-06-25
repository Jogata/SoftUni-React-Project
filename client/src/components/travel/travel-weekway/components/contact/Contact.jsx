import "./contact.css";

export function Contact() {
  return (
    <div id="contact" className="contact max-w-[1140px] m-auto w-full p-4 py-16">
      <h2 className="text-center text-gray-700">Send us a message</h2>
      <p className="subtitle">We're standing by!</p>
      <div className="form-section">
        <img
          src="https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
          className="image"
        />
        <form>
          <div className="grid">
            <input type="text" placeholder="First" />
            <input type="text" placeholder="Last" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <input className="address" type="text" placeholder="Address" />
            <textarea cols="30" rows="10" placeholder="Type here..."></textarea>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};