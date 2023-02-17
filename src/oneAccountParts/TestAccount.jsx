import React from "react";
import Others from "./AccountTemplate/Others";
import Relatives from "./AccountTemplate/Relatives";
import TLO from "./AccountTemplate/TLO";

function TestAccount({ object }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  };

  return (
    <div className="account accountFields">
      <div className="title">Debt</div>
      <div className="section">
        <div className="beforeInput PRINCIPAL">Principal:</div>
        <input
          readOnly
          type="text"
          className="PRINCIPAL"
          onClick={handleClick}
          defaultValue={object.PRINCIPAL}
        />
        <div className="beforeInput LINKED_BALANCE">Linked Balance:</div>
        <input
          readOnly
          type="text"
          className="LINKED_BALANCE"
          onClick={handleClick}
          defaultValue={object.LINKED_BALANCE}
        />
        <div className="beforeInput BALANCE">Balance:</div>
        <input
          readOnly
          type="text"
          className="BALANCE"
          onClick={handleClick}
          defaultValue={object.BALANCE}
        />{" "}
        <div className="beforeInput PAYMENT_PORTAL">Payment Portal:</div>
        <input
          readOnly
          type="text"
          className="PAYMENT_PORTAL"
          onClick={handleClick}
          defaultValue={object.PAYMENT_PORTAL}
        />{" "}
        <div className="beforeInput PAYMENTS">Payments:</div>
        <input
          readOnly
          type="text"
          className="PAYMENTS"
          onClick={handleClick}
          defaultValue={object.PAYMENTS}
        />
        <div className="beforeInput LAST_PAYMENT">Last Payment:</div>
        <input
          readOnly
          type="text"
          className="LAST_PAYMENT"
          onClick={handleClick}
          defaultValue={object.LAST_PAYMENT}
        />
        <div className="beforeInput DATE_LAST_PAYMENT">Date Last Payment:</div>
        <input
          readOnly
          type="text"
          className="DATE_LAST_PAYMENT"
          onClick={handleClick}
          defaultValue={object.DATE_LAST_PAYMENT}
        />
        <div className="beforeInput DATE_OF_LAST_CHARGE">
          Date of Last Charge:
        </div>
        <input
          readOnly
          type="text"
          className="DATE_OF_LAST_CHARGE"
          onClick={handleClick}
          defaultValue={object.DATE_OF_LAST_CHARGE}
        />
      </div>
      <div className="title">Client</div>
      <div className="section">
        <div className="beforeInput CLIENT">Client:</div>
        <input
          readOnly
          type="text"
          className="CLIENT"
          onClick={handleClick}
          defaultValue={object.CLIENT}
        />
        <div className="beforeInput ACCOUNT_TYPE">Account Type:</div>
        <input
          readOnly
          type="text"
          className="ACCOUNT_TYPE"
          onClick={handleClick}
          defaultValue={object.ACCOUNT_TYPE}
        />
        <div className="beforeInput STATUS">Status:</div>
        <input
          readOnly
          type="text"
          className="STATUS"
          onClick={handleClick}
          defaultValue={object.STATUS}
        />
        <div className="beforeInput CREDITOR">Creditor:</div>
        <input
          readOnly
          type="text"
          className="CREDITOR"
          onClick={handleClick}
          defaultValue={object.CREDITOR}
        />
        <div className="beforeInput ACCOUNT_NUMBER">Account #:</div>
        <input
          readOnly
          type="text"
          className="ACCOUNT_NUMBER"
          onClick={handleClick}
          defaultValue={object.ACCOUNT_NUMBER}
        />
        <div className="beforeInput ORIGINATED">Originated:</div>
        <input
          readOnly
          type="text"
          className="ORIGINATED"
          onClick={handleClick}
          defaultValue={object.ORIGINATED}
        />
        <div className="beforeInput ACCOUNT_RECEIVED">Account Received:</div>
        <input
          readOnly
          type="text"
          className="ACCOUNT_RECEIVED"
          onClick={handleClick}
          defaultValue={object.ACCOUNT_RECEIVED}
        />
        <div className="beforeInput IMPORTED_ON">Imported on:</div>
        <input
          readOnly
          type="text"
          className="IMPORTED_ON"
          onClick={handleClick}
          defaultValue={object.IMPORTED_ON}
        />
        <div className="beforeInput COLLECTOR">Collector:</div>
        <input
          readOnly
          type="text"
          className="COLLECTOR"
          onClick={handleClick}
          defaultValue={object.COLLECTOR}
        />
        <div className="beforeInput CLIENT_CLAIM_NUMBER">Client Claim #:</div>
        <input
          readOnly
          type="text"
          className="CLIENT_CLAIM_NUMBER"
          onClick={handleClick}
          defaultValue={object.CLIENT_CLAIM_NUMBER}
        />
        <div className="beforeInput CHARGED_OFF">Charged Off:</div>
        <input
          readOnly
          type="text"
          className="CHARGED_OFF"
          onClick={handleClick}
          defaultValue={object.CHARGED_OFF}
        />
        <div className="beforeInput PURCHASED">Purchased:</div>
        <input
          readOnly
          type="text"
          className="PURCHASED"
          onClick={handleClick}
          defaultValue={object.PURCHASED}
        />
        <div className="beforeInput QUEUE">Queue:</div>
        <input
          readOnly
          type="text"
          className="QUEUE"
          onClick={handleClick}
          defaultValue={object.QUEUE}
        />
        <div className="beforeInput NEXT_WORK">Next Work:</div>
        <input
          readOnly
          type="text"
          className="NEXT_WORK"
          onClick={handleClick}
          defaultValue={object.NEXT_WORK}
        />
        <div className="beforeInput DEBTOR_PMT_ID">Debtor Payment ID:</div>
        <input
          readOnly
          type="text"
          className="DEBTOR_PMT_ID"
          onClick={handleClick}
          defaultValue={object.DEBTOR_PMT_ID}
        />
        <div className="beforeInput REFERRING">Referring:</div>
        <input
          readOnly
          type="text"
          className="REFERRING"
          onClick={handleClick}
          defaultValue={object.REFERRING}
        />
        <div className="beforeInput AGE">Age:</div>
        <input
          readOnly
          type="text"
          className="AGE"
          onClick={handleClick}
          defaultValue={object.AGE}
        />
        <div className="beforeInput DELINQ_1">Delinq #1:</div>
        <input
          readOnly
          type="text"
          className="DELINQ_1"
          onClick={handleClick}
          defaultValue={object.DELINQ_1}
        />

        <div className="beforeInput SALES_REP">Sales Rep:</div>
        <input
          readOnly
          type="text"
          className="SALES_REP"
          onClick={handleClick}
          defaultValue={object.SALES_REP}
        />
      </div>
      <div className="title">Debt Information</div>
      <div className="section">
        <div className="subTitle goldColor">Banking Information</div>
        <div className="beforeInput BANK_ACCT_NAME">Bank Account Name:</div>
        <input
          readOnly
          type="text"
          className="BANK_ACCT_NAME"
          onClick={handleClick}
          defaultValue={object.BANK_ACCT_NAME}
        />
        <div className="beforeInput BANK_ROUTING">Bank Routing:</div>
        <input
          readOnly
          type="text"
          className="BANK_ROUTING"
          onClick={handleClick}
          defaultValue={object.BANK_ROUTING}
        />
        <div className="beforeInput BANK_ACCT_NUMBER">Bank Account #:</div>
        <input
          readOnly
          type="text"
          className="BANK_ACCT_NUMBER"
          onClick={handleClick}
          defaultValue={object.BANK_ACCT_NUMBER}
        />
        <div className="beforeInput LAST_PAYMENT">Last Payment:</div>
        <input
          readOnly
          type="text"
          className="LAST_PAYMENT"
          onClick={handleClick}
          defaultValue={object.LAST_PAYMENT}
        />
        <div className="beforeInput ORIGINAL_CHECK_NUMBER">
          Original Check #:
        </div>
        <input
          readOnly
          type="text"
          className="ORIGINAL_CHECK_NUMBER"
          onClick={handleClick}
          defaultValue={object.ORIGINAL_CHECK_NUMBER}
        />{" "}
        <div className="beforeInput PRODUCT">Product:</div>
        <input
          readOnly
          type="text"
          className="PRODUCT"
          onClick={handleClick}
          defaultValue={object.PRODUCT}
        />
        <div className="subTitle goldColor">Documents</div>
        <div className="beforeInput GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS">
          Generate Debtor Document Notifications:
        </div>
        <input
          readOnly
          type="text"
          className="GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS"
          onClick={handleClick}
          defaultValue={object.GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS}
        />
        <div className="beforeInput PDF">PDF:</div>
        <input
          readOnly
          type="text"
          className="PDF"
          onClick={handleClick}
          defaultValue={object.PDF}
        />
        <div className="subTitle goldColor">DOB and SSN</div>
        <div className="beforeInput DOB">DOB:</div>
        <input
          readOnly
          type="text"
          className="DOB"
          onClick={handleClick}
          defaultValue={object.DOB}
        />
        <div className="beforeInput SSN">SSN:</div>
        <input
          readOnly
          type="text"
          className="SSN"
          onClick={handleClick}
          defaultValue={object.SSN}
        />{" "}
        <div className="beforeInput ACTION_CODES">Action Codes:</div>
        <input
          readOnly
          type="text"
          className="ACTION_CODES"
          onClick={handleClick}
          defaultValue={object.ACTION_CODES}
        />
        <div className="beforeInput LETTER_FLOWS">Letter Flows:</div>
        <input
          readOnly
          type="text"
          className="LETTER_FLOWS"
          onClick={handleClick}
          defaultValue={object.LETTER_FLOWS}
        />
        <div className="beforeInput CALL_DISPOSITIONS">Call Dispositions:</div>
        <input
          readOnly
          type="text"
          className="CALL_DISPOSITIONS"
          onClick={handleClick}
          defaultValue={object.CALL_DISPOSITIONS}
        />
      </div>
      <Others object={object} />
      <TLO object={object} />
      <Relatives object={object} />
    </div>
  );
}

export default TestAccount;
