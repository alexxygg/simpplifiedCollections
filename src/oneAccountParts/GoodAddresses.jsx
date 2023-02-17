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
      <div className="title less">TLO Address List</div>
      <div className="newAddressList">
        <div className="allGoodAddresses">
          {newAddressList.map((address, index) => (
            <div>
              {" "}
              <img src="/address.png" />
              <input
                readOnly
                onClick={handleClick}
                key={index}
                defaultValue={address}
              />
            </div>
          ))}
        </div>
      </div>{" "}
      <form onSubmit={handleAddAddress}>
        <div>
          + &nbsp; <img src="/address.png" />
          &nbsp;
          <input
            placeholder="123 Evergreen St, Somewhere, USA"
            type="text"
            id="newAddressInput"
            value={newAddress}
            onChange={(e) => setNewAddress(e.target.value)}
          />
        </div>
        <button className="searchBtn less" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default GoodAddresses;
