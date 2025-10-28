export function Navigation() {
  return (
    <div>
        <nav className="navigation">
            <div className="nav-top">
                <h2>Luma</h2>
                <div className="search-bar">
                    <input type="text" className='search-input' placeholder='Search for products....' />
                    <button className="search-btn">Search</button>
                </div>
                <div className="icons">
                    <div className="profile-group">
                        <i className="fa fa-user-o icon"></i>
                    </div>
                    <div className="cart-icon">
                        <i className="fa fa-shopping-cart icon"></i>
                        <span className="cart-count">0</span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

// https://github.com/Zhully18/Powerful-filtering-react-js

// export function Header() {
//     return (
//         <header>
//             <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/01.%20Section%202%20Intro/images/globe.png" alt="" />
//             <h1>my travel journal.</h1>
//         </header>
//     )
// }