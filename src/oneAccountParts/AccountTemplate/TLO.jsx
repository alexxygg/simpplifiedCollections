import React from "react";

function TLO({ object }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  };
  return (
    <>
      {" "}
      <div className="title">TLO</div>
      <div className="section">
        <div className="subTitle">Address</div>
        <div className="beforeInput TLO_ADDRESS">Address:</div>
        <input
          readOnly
          type="text"
          className="TLO_ADDRESS"
          onClick={handleClick}
          defaultValue={object.TLO_ADDRESS}
        />
        <div className="beforeInput TLO_CITY">City:</div>
        <input
          readOnly
          type="text"
          className="TLO_CITY"
          onClick={handleClick}
          defaultValue={object.TLO_CITY}
        />
        <div className="beforeInput TLO_STATE">State:</div>
        <input
          readOnly
          type="text"
          className="TLO_STATE"
          onClick={handleClick}
          defaultValue={object.TLO_STATE}
        />
        <div className="beforeInput TLO_ADDRESS_2">Address 2:</div>
        <input
          readOnly
          type="text"
          className="TLO_ADDRESS_2"
          onClick={handleClick}
          defaultValue={object.TLO_ADDRESS_2}
        />
        <div className="beforeInput TLO_CITY_2">City 2:</div>
        <input
          readOnly
          type="text"
          className="TLO_CITY_2"
          onClick={handleClick}
          defaultValue={object.TLO_CITY_2}
        />
        <div className="beforeInput TLO_STATE_2">State 2:</div>
        <input
          readOnly
          type="text"
          className="TLO_STATE_2"
          onClick={handleClick}
          defaultValue={object.TLO_STATE_2}
        />
        <div className="subTitle goldColor">Employer</div>
        <div className="beforeInput EMPLOYER">Employer:</div>
        <input
          readOnly
          type="text"
          className="EMPLOYER"
          onClick={handleClick}
          defaultValue={object.EMPLOYER}
        />{" "}
        <div className="beforeInput TLO_POE">TLO POE:</div>
        <input
          readOnly
          type="text"
          className="TLO_POE"
          onClick={handleClick}
          defaultValue={object.TLO_POE}
        />{" "}
        <div className="beforeInput TLO_POE_NUMBER">TLO POE #:</div>
        <input
          readOnly
          type="text"
          className="TLO_POE_NUMBER"
          onClick={handleClick}
          defaultValue={object.TLO_POE_NUMBER}
        />{" "}
        <div className="subTitle">Rent</div>
        <div className="beforeInput RENT_AMOUNT">Rent Amount:</div>
        <input
          readOnly
          type="text"
          className="RENT_AMOUNT"
          onClick={handleClick}
          defaultValue={object.RENT_AMOUNT}
        />
        <div className="beforeInput LANDLORD_PHONE_NUMBER">
          Landlord Phone #:
        </div>
        <input
          readOnly
          type="text"
          className="LANDLORD_PHONE_NUMBER"
          onClick={handleClick}
          defaultValue={object.LANDLORD_PHONE_NUMBER}
        />
        <div className="subTitle">Contact</div>
        <div className="beforeInput TLO_PHONE">
          <img src="/newNumber.png" /> 1
        </div>
        <input
          readOnly
          type="text"
          className="TLO_PHONE"
          onClick={handleClick}
          defaultValue={object.TLO_PHONE}
        />
        <div className="beforeInput TLO_PHONE_2">
          <img src="/newNumber.png" /> 2
        </div>
        <input
          readOnly
          type="text"
          className="TLO_PHONE_2"
          onClick={handleClick}
          defaultValue={object.TLO_PHONE_2}
        />
        <div className="beforeInput TLO_PHONE_3">
          <img src="/newNumber.png" /> 3
        </div>
        <input
          readOnly
          type="text"
          className="TLO_PHONE_3"
          onClick={handleClick}
          defaultValue={object.TLO_PHONE_3}
        />
        <div className="beforeInput TLO_PHONE_4">
          <img src="/newNumber.png" /> 4
        </div>
        <input
          readOnly
          type="text"
          className="TLO_PHONE_4"
          onClick={handleClick}
          defaultValue={object.TLO_PHONE_4}
        />
        <div className="beforeInput TLO_PHONE_5">
          <img src="/newNumber.png" /> 5
        </div>
        <input
          readOnly
          type="text"
          className="TLO_PHONE_5"
          onClick={handleClick}
          defaultValue={object.TLO_PHONE_5}
        />
      </div>
    </>
  );
}

export default TLO;
