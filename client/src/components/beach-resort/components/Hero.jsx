export function Hero({children, hero}) {
    return (
        <header className={hero}>
            {children}
        </header>
    )
}