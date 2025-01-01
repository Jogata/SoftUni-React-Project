export function Hero({children, heroClass, bcg}) {
    return (
        // <header className={heroClass} style={{backgroundImage: `url(${bcg})`}}>
        //     {children}
        // </header>
        <div className="project full-screen">
            <header>
                <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/01.%20Static%20pages/11.%20Random%20housekeeping/react-logo.png" alt="" />
                <span>React</span>
            </header>
            <h1>Fun facts about React!</h1>
            <ul className="list">
                <li className="bulled">
                    Was first release in 2013
                </li>
                <li className="bulled">
                    Was originally created by Jordan Walke
                </li>
                <li className="bulled">
                    Has well over 200k stars on GitHub
                </li>
                <li className="bulled">
                    Is maintained by Meta
                </li>
                <li className="bulled">
                    Powers thousanads of enterprise apps, including mobile apps
                </li>
            </ul>
        </div>
    )
}