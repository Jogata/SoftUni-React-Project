import { Navigation } from "../components/navigation/Navigation";
import { Recovery } from "../components/recovery/Recovery";
import { Footer } from "../components/footer/Footer";

export function RecoveryPage() {
    return (
        <>
            <div className="header full-screen recovery-page">
                    <Navigation />
                    <Recovery />
            </div>
            <Footer />
        </>
    )
}