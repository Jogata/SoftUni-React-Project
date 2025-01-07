import { Entry, Joke } from "./Entry";

export function Main() {
    return (
        <main>
            <h1>main component</h1>
            {/* <Entry /> */}

            <Joke
                setup="I got my daughter a fridge for her birthday."
                punchline="I can't wait to see her face light up when she opens it."
            />
            <Joke
                setup="How did the hacker escape the police?"
                punchline="He just ransomware!"
            />
            <Joke
                setup="Why don't pirates travel on mountain roads?"
                punchline="Scurvy."
            />
            <Joke
                setup="Why do bees stay in the hive in the winter?"
                punchline="Swarm."
            />
            <Joke
                setup="What's the best thing about Switzerland?"
                punchline="I don't know, but the flag is a big plus!"
            />

            <div className="contacts" style={{display: "none"}}>
                <Entry 
                    img="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/mr-whiskerson.png" 
                    name="Mr. Whiskerson" 
                    phone="(212) 555-1234" 
                    email="mr.whiskaz@catnap.meow"
                />
                <Entry 
                    img="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/fluffykins.png" 
                    name="Fluffykins" 
                    phone="(212) 555-2345" 
                    email="fluff@me.com"
                />
                <Entry 
                    img="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/felix.png" 
                    name="Felix" 
                    phone="(212) 555-4567" 
                    email="thecat@hotmail.com"
                />
                <Entry 
                    img="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/pumpkin.png" 
                    name="Pumpkin" 
                    phone="(0800) CAT KING" 
                    email="pumpkin@scrimba.com"
                />

                {/* <article className="contact-card">
                    <img
                        src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/mr-whiskerson.png"
                        alt="Photo of Mr. Whiskerson"
                    />
                    <h3>Mr. Whiskerson</h3>
                    <div className="info-group">
                        <img
                            src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/phone-icon.png"
                            alt="phone icon"
                        />
                        <p>(212) 555-1234</p>
                    </div>
                    <div className="info-group">
                        <img
                            src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/mail-icon.png"
                            alt="mail icon"
                        />
                        <p>mr.whiskaz@catnap.meow</p>
                    </div>
                </article>

                <article className="contact-card">
                    <img
                        src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/fluffykins.png"
                        alt="Photo of Fluffykins"
                    />
                    <h3>Fluffykins</h3>
                    <div className="info-group">
                        <img
                            src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/phone-icon.png"
                            alt="phone icon"
                        />
                        <p>(212) 555-2345</p>
                    </div>
                    <div className="info-group">
                        <img
                            src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/mail-icon.png"
                            alt="mail icon"
                        />
                        <p>fluff@me.com</p>
                    </div>
                </article>

                <article className="contact-card">
                    <img
                        src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/felix.png"
                        alt="Photo of Felix"
                    />
                    <h3>Felix</h3>
                    <div className="info-group">
                        <img
                            src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/phone-icon.png"
                            alt="phone icon"
                        />
                        <p>(212) 555-4567</p>
                    </div>
                    <div className="info-group">
                        <img
                            src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/mail-icon.png"
                            alt="mail icon"
                        />
                        <p>thecat@hotmail.com</p>
                    </div>
                </article>

                <article className="contact-card">
                    <img
                        src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/pumpkin.png"
                        alt="Photo of Pumpkin"
                    />
                    <h3>Pumpkin</h3>
                    <div className="info-group">
                        <img
                            src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/phone-icon.png"
                            alt="phone icon"
                        />
                        <p>(0800) CAT KING</p>
                    </div>
                    <div className="info-group">
                        <img
                            src="https://raw.githubusercontent.com/scrimba/learn-react/refs/heads/main/02.%20Data-Driven%20React/08.%20Props%20Part%203%20-%20Create%20a%20contact%20component/images/mail-icon.png"
                            alt="mail icon"
                        />
                        <p>pumpkin@scrimba.com</p>
                    </div>
                </article> */}

            </div>

        </main>
    )
}