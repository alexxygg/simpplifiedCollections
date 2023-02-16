import React from "react";

function Relatives({ object }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  };
  return (
    <>
      {" "}
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
        />{" "}
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
        />{" "}
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
        />{" "}
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
          R1 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#1:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_1_PH1"
          onClick={handleClick}
          defaultValue={object.RELATIVE_1_PH1}
        />
        <div className="beforeInput RELATIVE_1_PH2">
          R1 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#2:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_1_PH2"
          onClick={handleClick}
          defaultValue={object.RELATIVE_1_PH2}
        />
        <div className="beforeInput RELATIVE_1_PH3">
          R1 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#3:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_1_PH3"
          onClick={handleClick}
          defaultValue={object.RELATIVE_1_PH3}
        />{" "}
        <div className="beforeInput RELATIVE_2_PH1">
          R2 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#1:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_2_PH1"
          onClick={handleClick}
          defaultValue={object.RELATIVE_2_PH1}
        />
        <div className="beforeInput RELATIVE_2_PH2">
          R2 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#2:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_2_PH2"
          onClick={handleClick}
          defaultValue={object.RELATIVE_2_PH2}
        />
        <div className="beforeInput RELATIVE_2_PH3">
          R2 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#3:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_2_PH3"
          onClick={handleClick}
          defaultValue={object.RELATIVE_2_PH3}
        />
        <div className="beforeInput RELATIVE_3_PH1">
          R3 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#1:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_3_PH1"
          onClick={handleClick}
          defaultValue={object.RELATIVE_3_PH1}
        />
        <div className="beforeInput RELATIVE_3_PH2">
          R3 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#2:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_3_PH2"
          onClick={handleClick}
          defaultValue={object.RELATIVE_3_PH2}
        />
        <div className="beforeInput RELATIVE_3_PH3">
          R3 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#3:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_3_PH3"
          onClick={handleClick}
          defaultValue={object.RELATIVE_3_PH3}
        />
        <div className="beforeInput RELATIVE_4_PH1">
          R4 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#1:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_4_PH1"
          onClick={handleClick}
          defaultValue={object.RELATIVE_4_PH1}
        />
        <div className="beforeInput RELATIVE_4_PH2">
          R4 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#2:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_4_PH2"
          onClick={handleClick}
          defaultValue={object.RELATIVE_4_PH2}
        />
        <div className="beforeInput RELATIVE_4_PH3">
          R4 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#3:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_4_PH3"
          onClick={handleClick}
          defaultValue={object.RELATIVE_4_PH3}
        />
        <div className="beforeInput RELATIVE_5_PH1">
          R5 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#1:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_5_PH1"
          onClick={handleClick}
          defaultValue={object.RELATIVE_5_PH1}
        />
        <div className="beforeInput RELATIVE_5_PH2">
          R5 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#2:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_5_PH2"
          onClick={handleClick}
          defaultValue={object.RELATIVE_5_PH2}
        />
        <div className="beforeInput RELATIVE_5_PH3">
          R5 &nbsp;
          <img src="/newNumber.png" />
          &nbsp;#3:
        </div>
        <input
          readOnly
          type="text"
          className="RELATIVE_5_PH3"
          onClick={handleClick}
          defaultValue={object.RELATIVE_5_PH3}
        />
      </div>
    </>
  );
}

export default Relatives;
