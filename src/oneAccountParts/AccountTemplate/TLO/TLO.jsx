import React, { useState, Fragment } from "react";

import DispoCopyNote from "./DispoCopyNote";
import DispoSummary from "./DispoSummary";
import allDipositions from "../../../allDipositions";

function TLO({ object, handleCopyClick }) {
  const [selectedDispositions, setSelectedDispositions] = useState({
    TLO_1_DISPOSITION: allDipositions[0],
    TLO_2_DISPOSITION: allDipositions[0],
    TLO_3_DISPOSITION: allDipositions[0],
    TLO_4_DISPOSITION: allDipositions[0],
    TLO_5_DISPOSITION: allDipositions[0],
  });

  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
    handleCopyClick();
  };

  const handleDispositionChange = (event) => {
    const { name, value } = event.target;
    setSelectedDispositions({
      ...selectedDispositions,
      [name]: value,
    });
  };

  return (
    <>
      {" "}
      <div className="title">TLO</div>
      <div className="section">
        <div className="subTitle">Address</div>{" "}
        {object.TLO_ADDRESS_LIST &&
          object.TLO_ADDRESS_LIST.map((address, index) => (
            <Fragment key={index}>
              <div className="beforeInput TLO_ADDRESS_LIST">
                Address {index + 1}:
              </div>
              <input
                readOnly
                type="text"
                className="TLO_ADDRESS_LIST"
                onClick={handleClick}
                defaultValue={address}
              />
            </Fragment>
          ))}
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
        <div className="dispositionSmall">
          <select
            className="select"
            name="TLO_1_DISPOSITION"
            value={selectedDispositions.TLO_1_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>{" "}
        <div className="dispositionSmall">
          <select
            className="select"
            name="TLO_2_DISPOSITION"
            value={selectedDispositions.TLO_2_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>{" "}
        <div className="dispositionSmall">
          <select
            className="select"
            name="TLO_3_DISPOSITION"
            value={selectedDispositions.TLO_3_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>{" "}
        <div className="dispositionSmall">
          <select
            className="select"
            name="TLO_4_DISPOSITION"
            value={selectedDispositions.TLO_4_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>{" "}
        <div className="dispositionSmall">
          <select
            className="select"
            name="TLO_5_DISPOSITION"
            value={selectedDispositions.TLO_5_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <DispoCopyNote
          selectedDispositions={selectedDispositions}
          object={object}
        />
        <DispoSummary
          selectedDispositions={selectedDispositions}
          object={object}
        />
      </div>
    </>
  );
}

export default TLO;
