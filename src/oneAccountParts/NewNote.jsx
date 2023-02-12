import React, { useState } from "react";

function NewNote({ object, setObject, data }) {
  const test = data;
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setObject({
      ...object,
      NOTES: [
        ...object.NOTES,
        {
          id: object.NOTES.length + 1,
          note: input,
          timestamp: new Date().toLocaleString(),
        },
      ],
    });
    setInput("");
  };

  return (
    <form className="newNoteDiv" onSubmit={handleSubmit}>
      <textarea
        className="newNoteField"
        wrap="hard"
        rows="5"
        maxLength="500"
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button className="newNoteBtn" type="submit">
        New +
      </button>
    </form>
  );
}

export default NewNote;
