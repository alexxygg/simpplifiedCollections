function DispoCopyNote({ object, selectedDispositions }) {
  const noteToCopy = `${object.TLO_PHONE} - ${selectedDispositions.TLO_1_DISPOSITION} , ${object.TLO_PHONE_2} - ${selectedDispositions.TLO_2_DISPOSITION} , ${object.TLO_PHONE_3} - ${selectedDispositions.TLO_3_DISPOSITION} , ${object.TLO_PHONE_4} - ${selectedDispositions.TLO_4_DISPOSITION} , ${object.TLO_PHONE_5} - ${selectedDispositions.TLO_5_DISPOSITION}`;

  const copyDispositionsNote = () => {
    navigator.clipboard.writeText(noteToCopy);
  };
  return (
    <>
      <div className="title">Disposition Codes Summary</div>
      <button
        onClick={copyDispositionsNote}
        className="searchBtn"
        style={{
          borderRadius: "2rem",
          width: "max-content",
          borderLeft: "solid black",
        }}
      >
        Copy all numbers + codes to notes.
      </button>
    </>
  );
}

export default DispoCopyNote;
