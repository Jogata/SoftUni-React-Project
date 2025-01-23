export function Header(props) {
    console.log("count rendered");

    return (
        <header className="header">
            <h2 className="count">{props.count}</h2>
            <div className="logo" style={{display: "none"}}>
                <h4>Logo</h4>
                {/* <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/03.%20React%20State/02.%20Chef%20Claude%20-%20Header/images/chef-claude-icon.png" alt="" /> */}
            </div>
            {/* <span>Chef Claude</span> */}
        </header>
    )
}