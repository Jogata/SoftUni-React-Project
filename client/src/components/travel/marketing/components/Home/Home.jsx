import './home.css';
import m2 from '../../images/m2.jpg';
import amazon from '../../images/amazon logo.png';
import facebook from '../../images/fb logo.png';
import spotify from '../../images/spotify logo.png';
import uber from '../../images/uber.png';
import yahoo from '../../images/yahoo.png';
import stripe from '../../images/stripe.png';
import airbnb from '../../images/airbnb.png';

export function Home() {
    return (
        <>
            <div className="hero" id='home'>
                <div className="left">
                    <p className="gold">
                        Unlock growth using creativity & data to boost your business
                    </p>
                    <h1>We Build Rapid Solution For Your Business</h1>
                    <p className="white">
                        Let's start something big together, lets increase your 
                        revenue using our expert knowledge for your business
                    </p>
                    <div className="btns">
                        <button>Schedule A Call</button>
                        <button>
                            Watch demo
                            <i className='ri-play-circle-line play-icon'></i>
                        </button>
                    </div>
                </div>
                <div className="right">
                    <img src={m2} alt="" />
                </div>
            </div>
            <div className="clients">
                <div className="clients-detail">
                    <div className="imgs">
                        <img src={stripe} alt="" />
                        <img src={uber} alt="" />
                        <img src={amazon} alt="" />
                        <img src={spotify} alt="" />
                        <img src={facebook} alt="" />
                        <img src={spotify} alt="" />
                        <img src={airbnb} alt="" />
                        <img src={yahoo} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}