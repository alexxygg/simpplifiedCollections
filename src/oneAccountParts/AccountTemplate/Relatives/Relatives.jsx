import { useState, React } from "react";
import DispoCopyNote from "./DispoCopyNote";
import DispoSummary from "./DispoSummary";

import allDipositions from "../../../allDipositions";

function Relatives({ object }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.target.value);
  };

  const [selectedDispositions, setSelectedDispositions] = useState({
    RELATIVE_1_DISPOSITION: allDipositions[0],
    RELATIVE_2_DISPOSITION: allDipositions[0],
    RELATIVE_3_DISPOSITION: allDipositions[0],
    RELATIVE_4_DISPOSITION: allDipositions[0],
    RELATIVE_5_DISPOSITION: allDipositions[0],
    RELATIVE_6_DISPOSITION: allDipositions[0],
    RELATIVE_7_DISPOSITION: allDipositions[0],
    RELATIVE_8_DISPOSITION: allDipositions[0],
    RELATIVE_9_DISPOSITION: allDipositions[0],
    RELATIVE_10_DISPOSITION: allDipositions[0],
    RELATIVE_11_DISPOSITION: allDipositions[0],
    RELATIVE_12_DISPOSITION: allDipositions[0],
    RELATIVE_13_DISPOSITION: allDipositions[0],
    RELATIVE_14_DISPOSITION: allDipositions[0],
    RELATIVE_15_DISPOSITION: allDipositions[0],
  });

  const handleDispositionChange = (event) => {
    const { name, value } = event.target;
    setSelectedDispositions({
      ...selectedDispositions,
      [name]: value,
    });
  };

  return (
    <>
      <div className="title">Relatives</div>
      <div className="section">
        <div className="subTitle">Name and Address</div>
        <div className="beforeInput RELATIVE_1">Relative 1 (R1):</div>
        <input
          readOnly
          type="text"
          className="RELATIVE_1"
          onClick={handleClick}
          defaultValue={object.RELATIVE_1}
        />
        <div className="beforeInput RELATIVE_1_ADDY">R1 Address:</div>
        <input
          readOnly
          type="text"
          className="RELATIVE_1_ADDY"
          onClick={handleClick}
          defaultValue={object.RELATIVE_1_ADDY}
        />
        <div className="beforeInput RELATIVE_2">Relative 2 (R2):</div>
        <input
          readOnly
          type="text"
          className="RELATIVE_2"
          onClick={handleClick}
          defaultValue={object.RELATIVE_2}
        />
        <div className="beforeInput RELATIVE_2_ADDY">R2 Address:</div>
        <input
          readOnly
          type="text"
          className="RELATIVE_2_ADDY"
          onClick={handleClick}
          defaultValue={object.RELATIVE_2_ADDY}
        />
        <div className="beforeInput RELATIVE_3">Relative 3 (R3):</div>
        <input
          readOnly
          type="text"
          className="RELATIVE_3"
          onClick={handleClick}
          defaultValue={object.RELATIVE_3}
        />
        <div className="beforeInput RELATIVE_3_ADDY">R3 Address:</div>
        <input
          readOnly
          type="text"
          className="RELATIVE_3_ADDY"
          onClick={handleClick}
          defaultValue={object.RELATIVE_3_ADDY}
        />
        <div className="beforeInput RELATIVE_4">Relative 4 (R4):</div>
        <input
          readOnly
          type="text"
          className="RELATIVE_4"
          onClick={handleClick}
          defaultValue={object.RELATIVE_4}
        />
        <div className="beforeInput RELATIVE_4_ADDY">R4 Address:</div>
        <input
          readOnly
          type="text"
          className="RELATIVE_4_ADDY"
          onClick={handleClick}
          defaultValue={object.RELATIVE_4_ADDY}
        />
        <div className="beforeInput RELATIVE_5">Relative 5 (R5):</div>
        <input
          readOnly
          type="text"
          className="RELATIVE_5"
          onClick={handleClick}
          defaultValue={object.RELATIVE_5}
        />
        <div className="beforeInput RELATIVE_5_ADDY">R5 Address:</div>
        <input
          readOnly
          type="text"
          className="RELATIVE_5_ADDY"
          onClick={handleClick}
          defaultValue={object.RELATIVE_5_ADDY}
        />
        <div className="subTitle">Contact</div>
        <div className="beforeInput RELATIVE_1_PH1">
          R1 #1: &nbsp;
          <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_1_PH1"
          onClick={handleClick}
          defaultValue={object.RELATIVE_1_PH1}
        />
        <div className="beforeInput RELATIVE_1_PH2">
          R1 #2: &nbsp; <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_1_PH2"
          onClick={handleClick}
          defaultValue={object.RELATIVE_1_PH2}
        />
        <div className="beforeInput RELATIVE_1_PH3">
          R1 #3: &nbsp; <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_1_PH3"
          onClick={handleClick}
          defaultValue={object.RELATIVE_1_PH3}
        />
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_1_DISPOSITION"
            value={selectedDispositions.RELATIVE_1_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_2_DISPOSITION"
            value={selectedDispositions.RELATIVE_2_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_3_DISPOSITION"
            value={selectedDispositions.RELATIVE_3_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="beforeInput RELATIVE_2_PH1">
          R2 #1: &nbsp; <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_2_PH1"
          onClick={handleClick}
          defaultValue={object.RELATIVE_2_PH1}
        />
        <div className="beforeInput RELATIVE_2_PH2">
          R2 #2: &nbsp; <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_2_PH2"
          onClick={handleClick}
          defaultValue={object.RELATIVE_2_PH2}
        />
        <div className="beforeInput RELATIVE_2_PH3">
          R2 #3: &nbsp; <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_2_PH3"
          onClick={handleClick}
          defaultValue={object.RELATIVE_2_PH3}
        />
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_4_DISPOSITION"
            value={selectedDispositions.RELATIVE_4_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_5_DISPOSITION"
            value={selectedDispositions.RELATIVE_5_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_6_DISPOSITION"
            value={selectedDispositions.RELATIVE_6_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="beforeInput RELATIVE_3_PH1">
          R3 #1: &nbsp; <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_3_PH1"
          onClick={handleClick}
          defaultValue={object.RELATIVE_3_PH1}
        />
        <div className="beforeInput RELATIVE_3_PH2">
          R3 #2: &nbsp; <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_3_PH2"
          onClick={handleClick}
          defaultValue={object.RELATIVE_3_PH2}
        />
        <div className="beforeInput RELATIVE_3_PH3">
          R3 #3: &nbsp;
          <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_3_PH3"
          onClick={handleClick}
          defaultValue={object.RELATIVE_3_PH3}
        />
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_7_DISPOSITION"
            value={selectedDispositions.RELATIVE_7_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_8_DISPOSITION"
            value={selectedDispositions.RELATIVE_8_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_9_DISPOSITION"
            value={selectedDispositions.RELATIVE_9_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="beforeInput RELATIVE_4_PH1">
          R4 #1: &nbsp; <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_4_PH1"
          onClick={handleClick}
          defaultValue={object.RELATIVE_4_PH1}
        />
        <div className="beforeInput RELATIVE_4_PH2">
          R4 #2: &nbsp;
          <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_4_PH2"
          onClick={handleClick}
          defaultValue={object.RELATIVE_4_PH2}
        />
        <div className="beforeInput RELATIVE_4_PH3">
          R4 #3: &nbsp;
          <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_4_PH3"
          onClick={handleClick}
          defaultValue={object.RELATIVE_4_PH3}
        />
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_10_DISPOSITION"
            value={selectedDispositions.RELATIVE_10_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_11_DISPOSITION"
            value={selectedDispositions.RELATIVE_11_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_12_DISPOSITION"
            value={selectedDispositions.RELATIVE_12_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="beforeInput RELATIVE_5_PH1">
          R5 #1: &nbsp;
          <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_5_PH1"
          onClick={handleClick}
          defaultValue={object.RELATIVE_5_PH1}
        />
        <div className="beforeInput RELATIVE_5_PH2">
          R5 #2: &nbsp;
          <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_5_PH2"
          onClick={handleClick}
          defaultValue={object.RELATIVE_5_PH2}
        />
        <div className="beforeInput RELATIVE_5_PH3">
          R5 #3: &nbsp;
          <img src="/newNumber.png" />
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_5_PH3"
          onClick={handleClick}
          defaultValue={object.RELATIVE_5_PH3}
        />
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_13_DISPOSITION"
            value={selectedDispositions.RELATIVE_13_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_14_DISPOSITION"
            value={selectedDispositions.RELATIVE_14_DISPOSITION}
            onChange={handleDispositionChange}
          >
            {allDipositions.map((disposition, index) => (
              <option key={index} value={disposition}>
                {disposition}
              </option>
            ))}
          </select>
        </div>
        <div className="disposition">
          <select
            className="select"
            name="RELATIVE_15_DISPOSITION"
            value={selectedDispositions.RELATIVE_15_DISPOSITION}
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

export default Relatives;
