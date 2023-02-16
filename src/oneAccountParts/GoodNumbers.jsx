import React, { useState } from "react";

function GoodNumbers({ object }) {
  const { GOOD_NUMBERS } = object;
  const [newNumber, setNewNumber] = useState({
    number: "",
    type: "",
    area: "",
  });

  const handleAddNumber = () => {
    GOOD_NUMBERS.push(newNumber);
    setNewNumber({ number: "", type: "", area: "" });
  };

  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  };

  return (
    <div className="addNumberDiv">
      <h3>Good Numbers:</h3>
      <div className="allGoodNumbers">
        {GOOD_NUMBERS.map((number, index) => (
          <div key={index}>
            <img src="/newNumber.png" />
            <input
              readOnly
              onClick={handleClick}
              defaultValue={number.number}
            />
            <img src="/location.png" />
            <div>{number.type}</div>
            <img src="/timeZone.png" />
            <div>{number.area}</div>{" "}
          </div>
        ))}
      </div>{" "}
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleAddNumber();
        }}
      >
        <div>
          <img src="/newNumber.png" />
          <input
            placeholder="xxx-xxx-xxxx"
            type="text"
            value={newNumber.number}
            onChange={(event) =>
              setNewNumber({ ...newNumber, number: event.target.value })
            }
          />
        </div>
        <div>
          <img src="/location.png" />
          <input
            placeholder="home,cell"
            type="text"
            value={newNumber.type}
            onChange={(event) =>
              setNewNumber({ ...newNumber, type: event.target.value })
            }
          />
        </div>
        <div>
          <img src="/timeZone.png" />
          <input
            placeholder="pacific,atlantic"
            type="text"
            value={newNumber.area}
            onChange={(event) =>
              setNewNumber({ ...newNumber, area: event.target.value })
            }
          />
        </div>
        <button className="searchBtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
export default GoodNumbers;
