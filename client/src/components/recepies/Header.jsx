export function Header() {
    return (
        <>
            <header className="header">
                <div className="logo">
                    <h4>Logo</h4>
                    {/* <img src={chefClaudeLogo} /> */}
                    <h1>Chef Claude</h1>
                </div>
            </header>
        <header className="header" style={{display: "none"}}>
            <div className="logo">
                <h4>Logo</h4>
                {/* <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/04.%20Side%20Effects/02.%20Meme%20Generator%20Starting%20Point/images/troll-face.png" alt="" /> */}
                <h1>Meme Generator</h1>
            </div>
        </header>
        </>
    )
}