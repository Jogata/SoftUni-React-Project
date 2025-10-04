import { useState } from "react"

export function Navigation() {
    return (
        <div>
            <div className="navigation">
                <div className="logo">
                    <h2>Nika Shoes</h2>
                </div>
                <div className="link">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="nav-icons">
                    <div className="nav-cart">
                        <i className="fa fa-shopping-cart nav-icon"></i>
                        <span className="nav-cart-amount">0</span>
                    </div>
                    <i className="fa fa-user-onav-icon"></i>
                </div>
            </div>
        </div>
    )
}

export function Page() {
    return (
        <Modal>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
        </Modal>
    )
}

function Modal({ children }) {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            {children}
            {isVisible ? <Test setIsVisible={setIsVisible} /> : null}
            <button onClick={() => setIsVisible(true)}>open</button>
        </>
    )
}

function Test({ setIsVisible }) {
    return (
        <div className="modal">
            <button onClick={() => setIsVisible(false)}>close</button>
        </div>
    )
}

function Section1() {
    console.log("section1");
    return (
        <section>
            <h1>section 1</h1>
        </section>
    )
}

function Section2() {
    console.log("section2");
    return (
        <section>
            <h1>section 2</h1>
        </section>
    )
}

function Section3() {
    console.log("section3");
    return (
        <section>
            <h1>section 3</h1>
        </section>
    )
}

function Section4() {
    console.log("section4");
    return ( 
        <section>
            <h1>section 4</h1>
        </section>
    ) 
} 

// export function Footer() {
//     return (
//         <footer>
//             <h1>footer component</h1>
//         </footer>
//     )
// }