import { Link } from "react-router-dom";
import "./error.css";

export function Error() {
    return (
        <div className="error-page max-width">
            <h3>Page Not Found</h3>
            <Link to="/">back to home page</Link>
        </div>
    );
};