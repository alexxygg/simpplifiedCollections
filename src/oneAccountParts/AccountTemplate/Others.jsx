import React from "react";

function Others({ object, handleCopyClick }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
    handleCopyClick();
  };
  return (
    <>
      {" "}
      <div className="title">Other</div>{" "}
      <div className="section">
        {" "}
        <div className="subTitle goldColor">Items</div>
        <div className="divMedium">
          <div className="beforeInput medium">Item A:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.ITEM_A}
          />
        </div>
        <div className="divMedium">
          <div className="beforeInput medium">Item B:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.ITEM_B}
          />
        </div>
        <div className="divMedium">
          <div className="beforeInput medium">Item C:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.ITEM_C}
          />
        </div>
        <div className="subTitle goldColor">Props</div>
        <div className="div">
          <div className="beforeInput small2 ">Prop Owner Address:</div>
          <input
            readOnly
            type="text"
            className="small2"
            onClick={handleClick}
            defaultValue={object.PROP_OWNER_ADDRESS}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Prop:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.PROP}
          />
        </div>
        <div className="div">
          <div className="beforeInput small2 ">Prop Loan Amount:</div>
          <input
            readOnly
            type="text"
            className="small2"
            onClick={handleClick}
            defaultValue={object.PROP_LOAN_AMOUNT}
          />
        </div>
        <div className="div">
          <div className="beforeInput small2 ">Prop Owner Lender:</div>
          <input
            readOnly
            type="text"
            className="small2"
            onClick={handleClick}
            defaultValue={object.PROP_OWNER_LENDER}
          />
        </div>
        <div className="subTitle">Co-Signer</div>{" "}
        <div className="divMedium">
          <div className="beforeInput medium">Co-Signer First:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_FIRST}
          />
        </div>
        <div className="divMedium">
          <div className="beforeInput medium">Co-Signer Last:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_LAST}
          />
        </div>
        <div className="divMedium">
          <div className="beforeInput medium">Co-Signer SSN:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_SSN}
          />
        </div>
        <div className="subTitle">Legal</div>
        <div className="divMedium">
          <div className="beforeInput medium">Attorney:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.ATTORNEY}
          />
        </div>
        <div className="divMedium">
          <div className="beforeInput medium">Bankruptcy:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.BANKRUPTCY}
          />
        </div>
        <div className="divMedium">
          <div className="beforeInput medium">Discharged:</div>
          <input
            readOnly
            type="text"
            className="medium"
            onClick={handleClick}
            defaultValue={object.DISCHARGED}
          />
        </div>
      </div>
    </>
  );
}

export default Others;
