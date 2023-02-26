import React from "react";
import Others from "./AccountTemplate/Others";
import Relatives from "./AccountTemplate/Relatives/Relatives";
import TLO from "./AccountTemplate/TLO/TLO";
import StatusComp from "./StatusComp";

function TestAccount({ object, handleCopyClick }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
    handleCopyClick();
  };

  const importedOnDate = new Date(object.IMPORTED_ON);
  const daysSince = Math.floor(
    (new Date() - importedOnDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className="account accountFields">
      <div className="title">...</div>
      <div className="section">
        <div className="div">
          <div className="beforeInput small">Imported on:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.IMPORTED_ON}
          />{" "}
        </div>
        <div className="div">
          <div className="beforeInput small">Age:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={`${daysSince} days since.`}
          />
        </div>
      </div>
      <div className="title">Debt</div>
      <div className="section">
        <div className="div">
          <div className="beforeInput small">Principal:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.PRINCIPAL}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Linked Balance:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.LINKED_BALANCE}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Balance:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.BALANCE}
          />{" "}
        </div>
        <div className="div">
          <div className="beforeInput small">Payment Portal:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.PAYMENT_PORTAL}
          />{" "}
        </div>
        <div className="div">
          <div className="beforeInput small">Payments:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.PAYMENTS}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Last Payment:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.LAST_PAYMENT}
          />
        </div>
        <div className="div">
          <div className="beforeInput small2 ">Date Last Payment:</div>
          <input
            readOnly
            type="text"
            className="small2"
            onClick={handleClick}
            defaultValue={object.DATE_LAST_PAYMENT}
          />
        </div>
        <div className="div">
          <div className="beforeInput small2 ">Date of Last Charge:</div>
          <input
            readOnly
            type="text"
            className="small2"
            onClick={handleClick}
            defaultValue={object.DATE_OF_LAST_CHARGE}
          />
        </div>
      </div>
      <div className="title">Client</div>
      <div className="section">
        <StatusComp object={object} />

        <div className="div">
          <div className="beforeInput small">Client:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.CLIENT}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Account Type:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_TYPE}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Creditor:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.CREDITOR}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Account #:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_NUMBER}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Originated:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.ORIGINATED}
          />
        </div>
        <div className="div">
          <div className="beforeInput small2">Account Received:</div>
          <input
            readOnly
            type="text"
            className="small2"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_RECEIVED}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Imported on:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.IMPORTED_ON}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Collector:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.COLLECTOR}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Client Claim #:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.CLIENT_CLAIM_NUMBER}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Charged Off:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.CHARGED_OFF}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Purchased:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.PURCHASED}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Queue:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.QUEUE}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Next Work:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.NEXT_WORK}
          />
        </div>
        <div className="div">
          <div className="beforeInput small2 ">Debtor Payment ID:</div>
          <input
            readOnly
            type="text"
            className="small2"
            onClick={handleClick}
            defaultValue={object.DEBTOR_PMT_ID}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Referring:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.REFERRING}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Age:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.AGE}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Delinq #1:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.DELINQ_1}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Sales Rep:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.SALES_REP}
          />
        </div>
      </div>
      <div className="title">Debt Information</div>
      <div className="section">
        <div className="subTitle goldColor">Banking Information</div>
        <div className="div">
          <div className="beforeInput small2 ">Bank Account Name:</div>
          <input
            readOnly
            type="text"
            className="small2"
            onClick={handleClick}
            defaultValue={object.BANK_ACCT_NAME}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Bank Routing:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.BANK_ROUTING}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Bank Account #:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.BANK_ACCT_NUMBER}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Last Payment:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.LAST_PAYMENT}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Original Check #:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.ORIGINAL_CHECK_NUMBER}
          />{" "}
        </div>
        <div className="div">
          <div className="beforeInput small">Product:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.PRODUCT}
          />
        </div>
        <div className="subTitle goldColor">Documents</div>
        <div className="div">
          <div className="beforeInput other">Debtor Doc. Notifications:</div>
          <input
            readOnly
            type="text"
            className="other2"
            onClick={handleClick}
            defaultValue={object.GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">PDF:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.PDF}
          />
        </div>
        <div className="subTitle goldColor">DOB and SSN</div>
        <div className="div">
          <div className="beforeInput small">DOB:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.DOB}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">SSN:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.SSN}
          />{" "}
        </div>
        <div className="div">
          <div className="beforeInput small">Action Codes:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.ACTION_CODES}
          />
        </div>
        <div className="div">
          <div className="beforeInput small">Letter Flows:</div>
          <input
            readOnly
            type="text"
            className="small"
            onClick={handleClick}
            defaultValue={object.LETTER_FLOWS}
          />
        </div>
      </div>
      <Others object={object} handleCopyClick={handleCopyClick} />
      <TLO object={object} handleCopyClick={handleCopyClick} />
      <Relatives object={object} handleCopyClick={handleCopyClick} />
    </div>
  );
}

export default TestAccount;
