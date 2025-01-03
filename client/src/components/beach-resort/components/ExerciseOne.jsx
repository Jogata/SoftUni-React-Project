export function ExerciseOne() {
    return (
        <div className="e-one full-screen">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header>
            <img src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/01.%20Static%20pages/11.%20Random%20housekeeping/react-logo.png" alt="" />
            <span>React</span>
        </header>
    )
}

function Main() {
    return (
        <main>
            <h1>Why i want to learn React?</h1>
            <ol>
                <li className="numbred">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed accusantium maiores vitae adipisci placeat saepe, neque quis ad at perspiciatis tempora sapiente eius doloremque ea, tenetur quia unde mollitia commodi aliquam laboriosam doloribus. Maiores similique fugit itaque assumenda quia laboriosam magni nemo nesciunt, commodi doloremque quidem veniam aliquam nulla laudantium exercitationem, minus sapiente provident quasi?</p>
                </li>
                <li className="numbred">
                    By learning React, you enhance your chances of landing a job or 
                    advancing your career in the web development field.
                </li>
                <li className="numbred">
                    React can be used to create any type of web application.
                </li>
                <li className="numbred">
                    Strong job prospects for React developers, with 
                    attractive salaries and career growth opportunities.
                </li>
                <li className="numbred">
                    React is ideal for web and UI developers to develop 
                    highly responsive, beautiful components.
                </li>
                <li className="numbred">
                    React is a very declarative, fast, and flexible JavaScript library.
                </li>
            </ol>
        </main>
    )
}

function Footer() {
    return (
        <footer>
            <p>&copy; 2024. All right reserved.</p>
        </footer>
    )
}