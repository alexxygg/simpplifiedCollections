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
      <div className="title">TLO</div>
      <div className="section">
        <div className="subTitle">Address</div>
        {object.TLO_ADDRESS_LIST &&
          object.TLO_ADDRESS_LIST.map((address, index) => (
            <div className="divBigger" key={index}>
              <div className="beforeInput smallBig">Address {index + 1}:</div>
              <input
                readOnly
                type="text"
                className="bigger"
                onClick={handleClick}
                defaultValue={address}
              />
            </div>
          ))}
        <div className="subTitle goldColor">Employer</div>
        <div className="divMedium">
          <div className="beforeInput medium">Employer:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.EMPLOYER}
          />
        </div>
        <div className="divMedium">
          <div className="beforeInput medium">TLO POE:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.TLO_POE}
          />
        </div>
        <div className="divMedium">
          <div className="beforeInput medium">TLO POE #:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.TLO_POE_NUMBER}
          />
        </div>
        <div className="subTitle">Rent</div>
        <div className="div">
          <div className="beforeInput small">Rent Amount:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.RENT_AMOUNT}
          />
        </div>
        <div className="div">
          <div className="beforeInput small2">Landlord Phone #:</div>
          <input
            readOnly
            type="text"
            className="small2"
            onClick={handleClick}
            defaultValue={object.LANDLORD_PHONE_NUMBER}
          />
        </div>
        <div className="subTitle">Contact</div>
        <div className="divBigger">
          <div className="beforeInput smaller">
            <img src="/newNumber.png" />
            <input
              readOnly
              type="text"
              onClick={handleClick}
              defaultValue={object.TLO_PHONE}
            />
          </div>
          <div className="beforeInput smaller">
            <img src="/newNumber.png" />
            <input
              readOnly
              type="text"
              onClick={handleClick}
              defaultValue={object.TLO_PHONE_2}
            />
          </div>
          <div className="beforeInput smaller">
            <img src="/newNumber.png" />
            <input
              readOnly
              type="text"
              onClick={handleClick}
              defaultValue={object.TLO_PHONE_3}
            />
          </div>
          <div className="beforeInput smaller">
            <img src="/newNumber.png" />
            <input
              readOnly
              type="text"
              onClick={handleClick}
              defaultValue={object.TLO_PHONE_4}
            />
          </div>
          <div className="beforeInput smaller">
            <img src="/newNumber.png" />
            <input
              readOnly
              type="text"
              onClick={handleClick}
              defaultValue={object.TLO_PHONE_5}
            />
          </div>
        </div>
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
        </div>
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
        </div>
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
        </div>
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
        </div>
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
