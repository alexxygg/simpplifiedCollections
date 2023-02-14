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

  return (
    <div className="addAddressDiv">
      <h3>Add New Address</h3>
      <form onSubmit={handleAddAddress}>
        <label htmlFor="newAddressInput">New Address:</label>
        <input
          type="text"
          id="newAddressInput"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className="newAddressList">
        <h3>New Addresses</h3>
        <div className="allGoodAddresses">
          {newAddressList.map((address, index) => (
            <input key={index} defaultValue={address} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GoodAddresses;
