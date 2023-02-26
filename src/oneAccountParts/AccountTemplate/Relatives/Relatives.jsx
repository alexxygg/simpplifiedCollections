import { useState, React } from "react";
import DispoCopyNote from "./DispoCopyNote";
import DispoSummary from "./DispoSummary";

import allDipositions from "../../../allDipositions";

function Relatives({ object, handleCopyClick }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.target.value);
    handleCopyClick();
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
        <div className="div">
          <div className="beforeInput small">Relative 1 (R1):</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">R1 Address:</div>
          <input
            readOnly
            type="text"
            className="mediumBig"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_ADDY}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Relative 2 (R2):</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">R2 Address:</div>
          <input
            readOnly
            type="text"
            className="mediumBig"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_ADDY}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Relative 3 (R3):</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">R3 Address:</div>
          <input
            readOnly
            type="text"
            className="mediumBig"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_ADDY}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Relative 4 (R4):</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">R4 Address:</div>
          <input
            readOnly
            type="text"
            className="mediumBig"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_ADDY}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Relative 5 (R5):</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">R5 Address:</div>
          <input
            readOnly
            type="text"
            className="mediumBig"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_ADDY}
          />
        </div>
        <div className="subTitle">Contact</div>
        <div className="divMedium2">
          <div className="beforeInput medium">
            R1 #1: &nbsp;
            <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_PH1}
          />
        </div>
        <div className="divMedium2">
          <div className="beforeInput medium">
            R1 #2: &nbsp; <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_PH2}
          />
        </div>
        <div className="divMedium2">
          <div className="beforeInput medium">
            R1 #3: &nbsp; <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_PH3}
          />
        </div>
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
        <div className="divMedium2">
          <div className="beforeInput medium">
            R2 #1: &nbsp; <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH1}
          />
        </div>
        <div className="divMedium2">
          <div className="beforeInput medium">
            R2 #2: &nbsp; <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH2}
          />
        </div>
        <div className="divMedium2">
          <div className="beforeInput medium">
            R2 #3: &nbsp; <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH3}
          />
        </div>
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
        <div className="divMedium2">
          <div className="beforeInput medium">
            R3 #1: &nbsp; <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH1}
          />
        </div>
        <div className="divMedium2">
          <div className="beforeInput medium">
            R3 #2: &nbsp; <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH2}
          />
        </div>
        <div className="divMedium2">
          <div className="beforeInput medium">
            R3 #3: &nbsp;
            <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH3}
          />
        </div>
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
        <div className="divMedium2">
          <div className="beforeInput medium">
            R4 #1: &nbsp; <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH1}
          />
        </div>
        <div className="divMedium2">
          <div className="beforeInput medium">
            R4 #2: &nbsp;
            <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH2}
          />
        </div>
        <div className="divMedium2">
          <div className="beforeInput medium">
            R4 #3: &nbsp;
            <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH3}
          />
        </div>
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
        <div className="divMedium2">
          <div className="beforeInput medium">
            R5 #1: &nbsp;
            <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH1}
          />
        </div>
        <div className="divMedium2">
          <div className="beforeInput medium">
            R5 #2: &nbsp;
            <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH2}
          />
        </div>
        <div className="divMedium2">
          <div className="beforeInput medium">
            R5 #3: &nbsp;
            <img src="/newNumber.png" />
          </div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH3}
          />
        </div>
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
