import React, { useState } from "react";

const GoodAddresses = ({ object }) => {
  const [newAddress, setNewAddress] = useState("");
  const [newAddressList, setNewAddressList] = useState(object.TLO_ADDRESS_LIST);

  const handleAddAddress = (e) => {
    e.preventDefault();
    setNewAddressList([...newAddressList, newAddress]);
    object.TLO_ADDRESS_LIST = [...newAddressList, newAddress];
    setNewAddress("");
  };

  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  };

  return (
    <div className="addAddressDiv">
      <h3>TLO Address List</h3>
      <div className="newAddressList">
        <div className="allGoodAddresses">
          {newAddressList.map((address, index) => (
            <input
              readOnly
              onClick={handleClick}
              key={index}
              defaultValue={address}
            />
          ))}
        </div>
      </div>{" "}
      <form onSubmit={handleAddAddress}>
        <input
          placeholder="123 Evergreen St, Somewhere, USA"
          type="text"
          id="newAddressInput"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <button className="searchBtn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default GoodAddresses;
