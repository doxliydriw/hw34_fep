import Entry from "./entry";
import {useMemo} from 'react';

function EntryList(props) {
    const sortedList = useMemo(() => {
        return props.dbResult.sort(function (a, b) {
            let nameA = a.name.toLowerCase();
            let nameB = b.name.toLowerCase();
            return (nameA < nameB) ? -1 : (nameA > nameB) ? 1 : 0;
        });
    }, [props.dbResult]);

    return (
            <>
                {!props.dbResult.length && <p>No entries</p>}
                {props.dbResult.length > 0 &&
                    <>
                        <h1>List of entries</h1>
                        <div className="list">
                    {sortedList.map((entry) => (<Entry entry={entry} key={sortedList.indexOf(entry)+1} deleteEntry={props.deleteEntry} listId={sortedList.indexOf(entry)+1} />))}
                        </div>
                    </>
                }
            </>
        )
}

export default EntryList