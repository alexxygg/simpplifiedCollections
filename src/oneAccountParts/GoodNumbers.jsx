import React, { useState } from "react";

const GoodNumbers = ({ object }) => {
  const [newNumber, setNewNumber] = useState("");
  const [newNumbersList, setNewNumbersList] = useState(object.GOOD_NUMBERS);

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewNumbersList([...newNumbersList, newNumber]);
    object.GOOD_NUMBERS = [...newNumbersList, newNumber];
    setNewNumber("");
  };

  return (
    <div className="goodNumbers">
      <h3>Add New Phone Number</h3>

      <form onSubmit={handleSubmit}>
        <label htmlFor="newNumber">Phone number:</label>
        <input
          type="text"
          id="newNumber"
          name="newNumber"
          value={newNumber}
          onChange={(event) => setNewNumber(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <h3>Good numbers:</h3>
        <div className="allGoodNumbers">
          {newNumbersList.map((number, index) => (
            <div>
              <input key={index} defaultValue={number.number} />
              <div>{number.type}</div>
              <div>{number.area}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoodNumbers;
