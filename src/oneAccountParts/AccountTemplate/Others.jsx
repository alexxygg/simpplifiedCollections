import React from "react";

function Others({ object }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  };
  return (
    <>
      {" "}
      <div className="title">Other</div>{" "}
      <div className="section">
        {" "}
        <div className="subTitle goldColor">Items</div>
        <div className="beforeInput ITEM_A">Item A:</div>
        <input
          readOnly
          type="text"
          className="ITEM_A"
          onClick={handleClick}
          defaultValue={object.ITEM_A}
        />
        <div className="beforeInput ITEM_B">Item B:</div>
        <input
          readOnly
          type="text"
          className="ITEM_B"
          onClick={handleClick}
          defaultValue={object.ITEM_B}
        />
        <div className="beforeInput ITEM_C">Item C:</div>
        <input
          readOnly
          type="text"
          className="ITEM_C"
          onClick={handleClick}
          defaultValue={object.ITEM_C}
        />
        <div className="subTitle goldColor">Props</div>
        <div className="beforeInput PROP_OWNER_ADDRESS">
          Prop Owner Address:
        </div>
        <input
          readOnly
          type="text"
          className="PROP_OWNER_ADDRESS"
          onClick={handleClick}
          defaultValue={object.PROP_OWNER_ADDRESS}
        />
        <div className="beforeInput PROP">Prop:</div>
        <input
          readOnly
          type="text"
          className="PROP"
          onClick={handleClick}
          defaultValue={object.PROP}
        />
        <div className="beforeInput PROP_LOAN_AMOUNT">Prop Loan Amount:</div>
        <input
          readOnly
          type="text"
          className="PROP_LOAN_AMOUNT"
          onClick={handleClick}
          defaultValue={object.PROP_LOAN_AMOUNT}
        />
        <div className="beforeInput PROP_OWNER_LENDER">Prop Owner Lender:</div>
        <input
          readOnly
          type="text"
          className="PROP_OWNER_LENDER"
          onClick={handleClick}
          defaultValue={object.PROP_OWNER_LENDER}
        />
        <div className="subTitle">Co-Signer</div>{" "}
        <div className="beforeInput CO_SIGNER_FIRST">Co-Signer First:</div>
        <input
          readOnly
          type="text"
          className="CO_SIGNER_FIRST"
          onClick={handleClick}
          defaultValue={object.CO_SIGNER_FIRST}
        />
        <div className="beforeInput CO_SIGNER_LAST">Co-Signer Last:</div>
        <input
          readOnly
          type="text"
          className="CO_SIGNER_LAST"
          onClick={handleClick}
          defaultValue={object.CO_SIGNER_LAST}
        />
        <div className="beforeInput CO_SIGN_SSN">Co-Signer SSN:</div>
        <input
          readOnly
          type="text"
          className="CO_SIGN_SSN"
          onClick={handleClick}
          defaultValue={object.CO_SIGNER_SSN}
        />
        <div className="subTitle">Legal</div>
        <div className="beforeInput ATTORNEY">Attorney:</div>
        <input
          readOnly
          type="text"
          className="ATTORNEY"
          onClick={handleClick}
          defaultValue={object.ATTORNEY}
        />
        <div className="beforeInput BANKRUPTCY">Bankruptcy:</div>
        <input
          readOnly
          type="text"
          className="BANKRUPTCY"
          onClick={handleClick}
          defaultValue={object.BANKRUPTCY}
        />
        <div className="beforeInput DISCHARGED">Discharged:</div>
        <input
          readOnly
          type="text"
          className="DISCHARGED"
          onClick={handleClick}
          defaultValue={object.DISCHARGED}
        />
      </div>
    </>
  );
}

export default Others;
