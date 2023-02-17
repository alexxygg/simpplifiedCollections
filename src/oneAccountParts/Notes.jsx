import React, { Fragment, useState } from "react";
import NewNote from "./NewNote";
function Notes({ object }) {
  const [allNotes, setAllNotes] = useState(object.NOTES || []);

  const updateNotes = (newNotes) => {
    setAllNotes(newNotes);
  };
  return (
    <div className="notesDiv">
      <div className="title">Notes:</div>
      <div className="notes">
        <p className="id otherBg">ID:</p>
        <p className="time otherBg">Last Modified:</p>
        <div className="note otherBg noteTitle">Note:</div>
        {allNotes.map((note) => (
          <Fragment key={note.id}>
            <p className="id">{note.id}</p>
            <p className="time">{note.timestamp}</p>
            <div className="note">{note.note}</div>
          </Fragment>
        ))}
      </div>
      <NewNote object={object} updateNotes={updateNotes} />
    </div>
  );
}

export default Notes;
