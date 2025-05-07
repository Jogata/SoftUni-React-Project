import "./hero.css";
import accusoft from "../images/accusoft-brands-solid.svg";

export function Hero() {
    return (
        <div className="hero">
            <div className="container">
                <div className="content">
                    <div className="col-1">
                        <h1>Data to enrich your <span className="primary-color">online business</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet, consec tetur adipisicing elit.
                            Architecto iure fuga deleniti sit! Cum doloribus, nesciunt
                            laboriosam eos praesentium veritatis!
                        </p>
                        <div className="used-by">
                            <p>USED BY</p>
                            <div className="icons">
                                <span>
                                <i className="fa fa-database"></i>
                                Staxx
                                </span>
                                {/* <i className="fa fa-database"></i> */}
                                <span>
                                <i className="fa fa-asterisk"></i>
                                Star AI
                                </span>
                                {/* <i className="fa fa-asterisk">Star AI</i> */}
                                <span>
                                <i className="accusoft-icon"><img src={accusoft} /></i>
                                Accusoft
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-layout">
                            <div className="form-container">
                                <p className="sign-in-txt">Sign in with</p>
                                <div className="social-login">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                    <i className="fa fa-github"></i>
                                </div>
                                <div className="divider">
                                    <p><span>Or</span></p>
                                </div>
                                <form onSubmit={(e) => e.preventDefault()}>
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email" />
                                    <input type="password" placeholder="Password" />
                                    <button>Create your account</button>
                                </form>
                            </div>
                            <div className="form-footer">
                                <p>By signing up, you agree to our
                                    <span className="primary-color"> Terms, Data Policy</span> and
                                    <span className="primary-color"> Cookies Policy</span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}