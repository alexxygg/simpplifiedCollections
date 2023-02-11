import React, { useState } from "react";
import templateObject from "./templateObject";
import NewNote from "./NewNote";
function Notes() {
  const test = templateObject;

  const [object, setObject] = useState(test);

  return (
    <div>
      <h1 className="notesTitle">Notes:</h1>
      <div className="notes">
        <p className="id otherBg">ID:</p>
        <p className="time otherBg">Last Modified:</p>
        <div className="note otherBg">Note:</div>
        {object.NOTES.map((note) => (
          <>
            <p className="id">{note.id}</p>
            <p className="time">{note.timestamp}</p>
            <div className="note">{note.note}</div>
          </>
        ))}
      </div>
      <NewNote object={object} setObject={setObject} />
    </div>
  );
}

export default Notes;
