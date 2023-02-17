import React, { useState } from "react";

function NewNote({ object, updateNotes }) {
  const [allNotes, setAllNotes] = useState(object.NOTES || []);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newNotes = [
      ...allNotes,
      {
        id: allNotes.length + 1,
        note: input,
        timestamp: new Date().toLocaleString(),
      },
    ];
    setAllNotes(newNotes);
    updateNotes(newNotes);
    setInput("");
  };

  return (
    <form className="newNoteDiv" onSubmit={handleSubmit}>
      <textarea
        className="newNoteField"
        wrap="hard"
        rows="8"
        maxLength="500"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="newNoteBtn" type="submit">
        Add +
      </button>
    </form>
  );
}

export default NewNote;
