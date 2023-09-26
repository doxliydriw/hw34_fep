function Entry(props) {
    return (
        <>
            <ul className="card">
                <li className="id">{props.entry.id}</li>
                <li>{props.entry.name}</li>
                <li>{props.entry.email}</li>
                <li>{props.entry.phone}</li>
            </ul>
            <button className="delete" onClick={() => props.deleteEntry(props.entry.id)}>Delete</button>
        </>
    )
}

export default Entry