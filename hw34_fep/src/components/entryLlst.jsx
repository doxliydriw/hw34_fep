import Entry from "./entry";

function EntryList(props) {
    return (
            <>
                {!props.dbResult.length && <p>No entries</p>}
                {props.dbResult.length > 0 &&
                    <>
                        <h1>List of entries</h1>
                        <div className="list">
                    {props.dbResult.map((entry) => (<Entry entry={entry} key={entry.id} deleteEntry={props.deleteEntry} />))}
                        </div>
                    </>
                }
            </>
        )
}

export default EntryList