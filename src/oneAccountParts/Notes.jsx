import React, { Fragment, useState } from "react";
import NewNote from "./NewNote";
function Notes({ data }) {
  const test = data;

  const [object, setObject] = useState(test);

  return (
    <div>
      <h1 className="notesTitle">Notes:</h1>
      <div className="notes">
        <p className="id otherBg">ID:</p>
        <p className="time otherBg">Last Modified:</p>
        <div className="note otherBg">Note:</div>
        {data.NOTES.map((note) => (
          <Fragment key={note.id}>
            <p className="id">{note.id}</p>
            <p className="time">{note.timestamp}</p>
            <div className="note">{note.note}</div>
          </Fragment>
        ))}
      </div>
      <NewNote object={object} setObject={setObject} />
    </div>
  );
}

export default Notes;
