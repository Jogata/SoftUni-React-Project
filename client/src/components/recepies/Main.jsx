function Die(props) {
    return <button>{props.value}</button>
}

export function Main() {
    return (
        <main id="tenzies">
            <Die value={1} />
            <Die value={2} />
            <Die value={3} />
            <Die value={4} />
            <Die value={5} />
            <Die value={6} />
            <Die value={1} />
            <Die value={2} />
            <Die value={3} />
            <Die value={4} />
        </main>
    )
}