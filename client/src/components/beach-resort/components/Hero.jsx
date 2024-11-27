export function Hero({children, heroClass, bcg}) {
    return (
        <header className={heroClass} style={{backgroundImage: `url(${bcg})`}}>
            {children}
        </header>
    )
}