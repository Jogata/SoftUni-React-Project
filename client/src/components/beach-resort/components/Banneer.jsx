export function Banner({children, title, subtitle}) {
    return (
        <div className="resort-banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}