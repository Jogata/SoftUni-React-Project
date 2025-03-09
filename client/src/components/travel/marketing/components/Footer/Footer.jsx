import "./footer.css"
import facebook from '../../images/facebook_icon.png'
import twitter from '../../images/twitter_icon.png'
import linkedin from '../../images/linkedin_icon.png'

export function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="content-left">
                    <h2>INFIGIO</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                        Perspiciatis quam natus dolor consequuntur, cupiditate 
                        labore velit eos accusamus quibusdam, minima dolorem ipsa. 
                        Cupiditate doloremque repellat nam, voluptas ipsum odit nihil!
                    </p>
                    <div className="footer-social-icons">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={linkedin} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+23499686548</li>
                        <li>contact@email.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">
                Copyright 2024 @Company. All right Reserved
            </p>
        </div>
    )
}