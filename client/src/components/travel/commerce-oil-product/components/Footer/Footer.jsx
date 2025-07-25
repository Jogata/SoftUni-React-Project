import "./footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-body">
                <div className="right">
                    <div className="footer-talk">
                        <h2>Subscribe for more Updates</h2>
                        <p>
                            There are updates made on new and existing prosucts.
                            Subscribe now to be the first to get this exiting updates
                            about our products.
                        </p>
                    </div>
                </div>
                <div className="subscribe-form">
                    <input type="text" placeholder="Email address" />
                    <button>Subscribe</button>
                </div>
            </div>
        </footer>
    )
}