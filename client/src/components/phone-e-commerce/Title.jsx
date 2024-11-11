export function Title({name, title}) {
    return (
        <>
        <div className="page-title">
            <h1>{name} <span className="blue-text">{title}</span></h1>
        </div>
        </>
    )
}