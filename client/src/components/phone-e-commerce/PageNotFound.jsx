export function PageNotFound() {
    return (
        <div className="flex-container full-screen">
            <div className="page-content">
                <h1>404</h1>
                <h2 className="stroke-text">error</h2>
                <h2>page not found</h2>
                <h3>
                    <span>the requested url </span>
                    <span className="red">
                        {window.location.pathname}
                    </span>
                    <span> was not found</span>
                </h3>
            </div>
        </div>
    )
}