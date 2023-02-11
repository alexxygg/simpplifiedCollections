import React, { useState } from "react";
import templateObject from "./templateObject";
function TestAccount() {
  const test = templateObject;

  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  };

  return (
    <div className="account">
      <div className="section2">
        <div className="two">
          <button>Save</button>
          <button>Delete</button>
        </div>
        <div className="four">
          <div>Principal:</div>
          <input
            type="text"
            name="PRINCIPAL"
            onClick={handleClick}
            value={test.PRINCIPAL}
          />
          <div>Payments:</div>
          <input
            type="text"
            name="PAYMENTS"
            onClick={handleClick}
            value={test.PAYMENTS}
          />
          <div>Balance:</div>
          <input
            type="text"
            name="BALANCE"
            onClick={handleClick}
            value={test.BALANCE}
          />
          <div>Linked Balance:</div>
          <input
            type="text"
            name="LINKED_BALANCE"
            onClick={handleClick}
            value={test.LINKED_BALANCE}
          />
        </div>
      </div>
      <div className="section">
        <div className="four">
          <div>Client:</div>
          <input
            type="text"
            name="CLIENT"
            onClick={handleClick}
            value={test.CLIENT}
          />
          <div>Account Type:</div>
          <input
            type="text"
            name="ACCOUNT_TYPE"
            onClick={handleClick}
            value={test.ACCOUNT_TYPE}
          />
          <div>Status:</div>
          <input
            type="text"
            name="STATUS"
            onClick={handleClick}
            value={test.STATUS}
          />
          <div>Creditor:</div>
          <input
            type="text"
            name="CREDITOR"
            onClick={handleClick}
            value={test.CREDITOR}
          />
        </div>
        <div className="four">
          <div>Account #:</div>
          <input
            type="text"
            name="ACCOUNT_NUMBER"
            onClick={handleClick}
            value={test.ACCOUNT_NUMBER}
          />
          <div>Originated:</div>
          <input
            type="text"
            name="ORIGINATED"
            onClick={handleClick}
            value={test.ORIGINATED}
          />
          <div>Account Received:</div>
          <input
            type="text"
            name="ACCOUNT_RECEIVED"
            onClick={handleClick}
            value={test.ACCOUNT_RECEIVED}
          />
          <div>Imported on:</div>
          <input
            type="text"
            name="IMPORTED_ON"
            onClick={handleClick}
            value={test.IMPORTED_ON}
          />
        </div>
        <div className="four">
          <div>Collector:</div>
          <input
            type="text"
            name="COLLECTOR"
            onClick={handleClick}
            value={test.COLLECTOR}
          />
          <div>Client Claim #:</div>
          <input
            type="text"
            name="CLIENT_CLAIM_NUMBER"
            onClick={handleClick}
            value={test.CLIENT_CLAIM_NUMBER}
          />
          <div>Charged Off:</div>
          <input
            type="text"
            name="CHARGED_OFF"
            onClick={handleClick}
            value={test.CHARGED_OFF}
          />
          <div>Purchased:</div>
          <input
            type="text"
            name="PURCHASED"
            onClick={handleClick}
            value={test.PURCHASED}
          />
        </div>
        <div className="four">
          <div>Queue:</div>
          <input
            type="text"
            name="QUEUE"
            onClick={handleClick}
            value={test.QUEUE}
          />
          <div>Last Payment:</div>
          <input
            type="text"
            name="LAST_PAYMENT"
            onClick={handleClick}
            value={test.LAST_PAYMENT}
          />
          <div>Next Work:</div>
          <input
            type="text"
            name="NEXT_WORK"
            onClick={handleClick}
            value={test.NEXT_WORK}
          />
          <div>Debtor Payment ID:</div>
          <input
            type="text"
            name="DEBTOR_PMT_ID"
            onClick={handleClick}
            value={test.DEBTOR_PMT_ID}
          />
        </div>
        <div className="four">
          <div>Referring:</div>
          <input
            type="text"
            name="REFERRING"
            onClick={handleClick}
            value={test.REFERRING}
          />
          <div>Age:</div>
          <input
            type="text"
            name="AGE"
            onClick={handleClick}
            value={test.AGE}
          />
          <div>Delinq #1:</div>
          <input
            type="text"
            name="DELINQ_1"
            onClick={handleClick}
            value={test.DELINQ_1}
          />
          <div>Payment Portal:</div>
          <input
            type="text"
            name="PAYMENT_PORTAL"
            onClick={handleClick}
            value={test.PAYMENT_PORTAL}
          />
        </div>
        <div>
          <div>Sales Rep:</div>
          <input
            type="text"
            name="SALES_REP"
            onClick={handleClick}
            value={test.SALES_REP}
          />
        </div>
      </div>
      <div className="section">
        <div className="four">
          <div>Original Check #:</div>
          <input
            type="text"
            name="ORIGINAL_CHECK_NUMBER"
            onClick={handleClick}
            value={test.ORIGINAL_CHECK_NUMBER}
          />
          <div>Item A:</div>
          <input
            type="text"
            name="ITEM_A"
            onClick={handleClick}
            value={test.ITEM_A}
          />
          <div>Item B:</div>
          <input
            type="text"
            name="ITEM_B"
            onClick={handleClick}
            value={test.ITEM_B}
          />
          <div>Item C:</div>
          <input
            type="text"
            name="ITEM_C"
            onClick={handleClick}
            value={test.LANDLORD_PHONE_NUMBER}
          />
        </div>
        <div className="four">
          <div>Landlord Phone #:</div>
          <input
            type="text"
            name="LANDLORD_PHONE_NUMBER"
            onClick={handleClick}
            value={test.LANDLORD_PHONE_NUMBER}
          />
          <div className="RENT_AMOUNT">Rent Amount:</div>
          <input
            type="text"
            name="RENT_AMOUNT"
            onClick={handleClick}
            value={test.RENT_AMOUNT}
          />
          <div className="PRODUCT">Produ type="text" ct:</div>
          <input
            type="text"
            name="PRODUCT"
            onClick={handleClick}
            value={test.PRODUCT}
          />
          <div className="PROP_OWNER_ADDRESS">Prop Owner Address:</div>
          <input
            type="text"
            name="PROP_OWNER_ADDRESS"
            onClick={handleClick}
            value={test.PROP_OWNER_ADDRESS}
          />
        </div>
        <div className="four">
          <div className="PROP">Prop:</div>
          <input
            type="text"
            name="PROP"
            onClick={handleClick}
            value={test.PROP}
          />
          <div className="PROP_LOAN_AMOUNT">Prop Loan Amount:</div>
          <input
            type="text"
            name="PROP_LOAN_AMOUNT"
            onClick={handleClick}
            value={test.PROP_LOAN_AMOUNT}
          />
          <div className="PROP_OWNER_LENDER">Prop Owner Lender:</div>
          <input
            type="text"
            name="PROP_OWNER_LENDER"
            onClick={handleClick}
            value={test.PROP_OWNER_LENDER}
          />
          <div>TLO POE:</div>
          <input
            type="text"
            name="TLO_POE"
            onClick={handleClick}
            value={test.TLO_POE}
          />
        </div>
        <div className="four">
          <div>Co-Signer First:</div>
          <input
            type="text"
            name="CO_SIGNER_FIRST"
            onClick={handleClick}
            value={test.CO_SIGNER_FIRST}
          />
          <div>Co-Signer Last:</div>
          <input
            type="text"
            name="CO_SIGNER_LAST"
            onClick={handleClick}
            value={test.CO_SIGNER_LAST}
          />
          <div>Co-Signer SSN:</div>
          <input
            type="text"
            name="CO_SIGN_SSN"
            onClick={handleClick}
            value={test.CO_SIGNER_SSN}
          />
          <div>TLO POE #:</div>
          <input
            type="text"
            name="TLO_POE_NUMBER"
            onClick={handleClick}
            value={test.TLO_POE_NUMBER}
          />
        </div>
        <div className="four">
          <div>TLO Address:</div>
          <input
            type="text"
            name="TLO_ADDRESS"
            onClick={handleClick}
            value={test.TLO_ADDRESS}
          />
          <div>TLO City:</div>
          <input
            type="text"
            name="TLO_CITY"
            onClick={handleClick}
            value={test.TLO_CITY}
          />
          <div>TLO State:</div>
          <input
            type="text"
            name="TLO_STATE"
            onClick={handleClick}
            value={test.TLO_STATE}
          />
          <div>TLO Address 2:</div>
          <input
            type="text"
            name="TLO_ADDRESS_2"
            onClick={handleClick}
            value={test.TLO_ADDRESS_2}
          />
        </div>
        <div className="four">
          <div>Relative 1:</div>
          <input
            type="text"
            name="RELATIVE_1"
            onClick={handleClick}
            value={test.RELATIVE_1}
          />
          <div>R-1 Address:</div>
          <input
            type="text"
            name="RELATIVE_1_ADDY"
            onClick={handleClick}
            value={test.RELATIVE_1_ADDY}
          />
          <div>R-1 State:</div>
          <input
            type="text"
            name="RELATIVE_1_STATE"
            onClick={handleClick}
            value={test.RELATIVE_1_STATE}
          />
          <div>R-1 City:</div>
          <input
            type="text"
            name="RELATIVE_1_CITY"
            onClick={handleClick}
            value={test.RELATIVE_1_CITY}
          />
        </div>
        <div className="five">
          <div>TLO City 2:</div>
          <input
            type="text"
            name="TLO_CITY_2"
            onClick={handleClick}
            value={test.TLO_CITY_2}
          />
          <div>TLO State 2:</div>
          <input
            type="text"
            name="TLO_STATE_2"
            onClick={handleClick}
            value={test.TLO_STATE_2}
          />
          <div>R-1 Phone 1:</div>
          <input
            type="text"
            name="RELATIVE_1_PH1"
            onClick={handleClick}
            value={test.RELATIVE_1_PH1}
          />
          <div>R-1 Phone 2:</div>
          <input
            type="text"
            name="RELATIVE_1_PH2"
            onClick={handleClick}
            value={test.RELATIVE_1_PH2}
          />
          <div>R-1 Phone 3:</div>
          <input
            type="text"
            name="RELATIVE_1_PH3"
            onClick={handleClick}
            value={test.RELATIVE_1_PH3}
          />
        </div>{" "}
        <div className="five">
          <div>TLO Phone 1</div>
          <input
            type="text"
            name="TLO_PHONE"
            onClick={handleClick}
            value={test.TLO_PHONE}
          />
          <div>TLO Phone 2</div>
          <input
            type="text"
            name="TLO_PHONE_2"
            onClick={handleClick}
            value={test.TLO_PHONE_2}
          />
          <div>TLO Phone 3</div>
          <input
            type="text"
            name="TLO_PHONE_3"
            onClick={handleClick}
            value={test.TLO_PHONE_3}
          />
          <div>TLO Phone 4</div>
          <input
            type="text"
            name="TLO_PHONE_4"
            onClick={handleClick}
            value={test.TLO_PHONE_4}
          />
          <div>TLO Phone 5</div>
          <input
            type="text"
            name="TLO_PHONE_5"
            onClick={handleClick}
            value={test.TLO_PHONE_5}
          />
        </div>
        <div className="five">
          <div>Relative 2:</div>
          <input
            type="text"
            name="RELATIVE_2"
            onClick={handleClick}
            value={test.RELATIVE_2}
          />
          <div>R-2 Address:</div>
          <input
            type="text"
            name="RELATIVE_2_ADDY"
            onClick={handleClick}
            value={test.RELATIVE_2_ADDY}
          />
          <div>R-2 Phone 1:</div>
          <input
            type="text"
            name="RELATIVE_2_PH1"
            onClick={handleClick}
            value={test.RELATIVE_2_PH1}
          />
          <div>R-2 Phone 2:</div>
          <input
            type="text"
            name="RELATIVE_2_PH2"
            onClick={handleClick}
            value={test.RELATIVE_2_PH2}
          />
          <div>R-2 Phone 3:</div>
          <input
            type="text"
            name="RELATIVE_2_PH3"
            onClick={handleClick}
            value={test.RELATIVE_2_PH3}
          />
        </div>
        <div className="five">
          <div>Relative 3:</div>
          <input
            type="text"
            name="RELATIVE_3"
            onClick={handleClick}
            value={test.RELATIVE_3}
          />
          <div>R-3 Address:</div>
          <input
            type="text"
            name="RELATIVE_3_ADDY"
            onClick={handleClick}
            value={test.RELATIVE_3_ADDY}
          />
          <div>R-3 Phone 1:</div>
          <input
            type="text"
            name="RELATIVE_3_PH1"
            onClick={handleClick}
            value={test.RELATIVE_3_PH1}
          />
          <div>R-3 Phone 2:</div>
          <input
            type="text"
            name="RELATIVE_3_PH2"
            onClick={handleClick}
            value={test.RELATIVE_3_PH2}
          />
          <div>R-3 Phone 3:</div>
          <input
            type="text"
            name="RELATIVE_3_PH3"
            onClick={handleClick}
            value={test.RELATIVE_3_PH3}
          />
        </div>
        <div className="five">
          <div>Relative 4:</div>
          <input
            type="text"
            name="RELATIVE_4"
            onClick={handleClick}
            value={test.RELATIVE_4}
          />
          <div>R-4 Address:</div>
          <input
            type="text"
            name="RELATIVE_4_ADDY"
            onClick={handleClick}
            value={test.RELATIVE_4_ADDY}
          />
          <div>R-4 Phone 1:</div>
          <input
            type="text"
            name="RELATIVE_4_PH1"
            onClick={handleClick}
            value={test.RELATIVE_4_PH1}
          />
          <div>R-4 Phone 2:</div>
          <input
            type="text"
            name="RELATIVE_4_PH2"
            onClick={handleClick}
            value={test.RELATIVE_4_PH2}
          />
          <div>R-4 Phone 3:</div>
          <input
            type="text"
            name="RELATIVE_4_PH3"
            onClick={handleClick}
            value={test.RELATIVE_4_PH3}
          />
        </div>
        <div className="five">
          <div>Relative 5:</div>
          <input
            type="text"
            name="RELATIVE_5"
            onClick={handleClick}
            value={test.RELATIVE_5}
          />
          <div>R-5 Address:</div>
          <input
            type="text"
            name="RELATIVE_5_ADDY"
            onClick={handleClick}
            value={test.RELATIVE_5_ADDY}
          />
          <div>R-5 Phone 1:</div>
          <input
            type="text"
            name="RELATIVE_5_PH1"
            onClick={handleClick}
            value={test.RELATIVE_5_PH1}
          />
          <div>R-5 Phone 2:</div>
          <input
            type="text"
            name="RELATIVE_5_PH2"
            onClick={handleClick}
            value={test.RELATIVE_5_PH2}
          />
          <div>R-5 Phone 3:</div>
          <input
            type="text"
            name="RELATIVE_5_PH3"
            onClick={handleClick}
            value={test.RELATIVE_5_PH3}
          />
        </div>
        <div className="four">
          <div>Bank Account Name:</div>
          <input
            type="text"
            name="BANK_ACCT_NAME"
            onClick={handleClick}
            value={test.BANK_ACCT_NAME}
          />
          <div>Bank Routing:</div>
          <input
            type="text"
            name="BANK_ROUTING"
            onClick={handleClick}
            value={test.BANK_ROUTING}
          />
          <div>Bank Account #:</div>
          <input
            type="text"
            name="BANK_ACCT_NUMBER"
            onClick={handleClick}
            value={test.BANK_ACCT_NUMBER}
          />
          <div>Last Payment:</div>
          <input
            type="text"
            name="LAST_PAYMENT"
            onClick={handleClick}
            value={test.LAST_PAYMENT}
          />
        </div>
        <div className="four">
          <div>Date Last Payment:</div>
          <input
            type="text"
            name="DATE_LAST_PAYMENT"
            onClick={handleClick}
            value={test.DATE_LAST_PAYMENT}
          />
          <div>Date of Last Charge:</div>
          <input
            type="text"
            name="DATE_OF_LAST_CHARGE"
            onClick={handleClick}
            value={test.DATE_OF_LAST_CHARGE}
          />
          <div>Bankruptcy:</div>
          <input
            type="text"
            name="BANKRUPTCY"
            onClick={handleClick}
            value={test.BANKRUPTCY}
          />
          <div>Discharged:</div>
          <input
            type="text"
            name="DISCHARGED"
            onClick={handleClick}
            value={test.DISCHARGED}
          />
        </div>
        <div className="four">
          <div>PDF:</div>
          <input
            type="text"
            name="PDF"
            onClick={handleClick}
            value={test.PDF}
          />
          <div>Generate Debtor Document Notifications:</div>
          <input
            type="text"
            name="GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS"
            onClick={handleClick}
            value={test.GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS}
          />
          <div>SSN:</div>
          <input
            type="text"
            name="SSN"
            onClick={handleClick}
            value={test.SSN}
          />
          <div>DOB:</div>
          <input
            type="text"
            name="DOB"
            onClick={handleClick}
            value={test.DOB}
          />
        </div>
        <div className="four">
          <div>Attorney:</div>
          <input
            type="text"
            name="ATTORNEY"
            onClick={handleClick}
            value={test.ATTORNEY}
          />
          <div>Employer:</div>
          <input
            type="text"
            name="EMPLOYER"
            onClick={handleClick}
            value={test.EMPLOYER}
          />
          <div>Action Codes:</div>
          <input
            type="text"
            name="ACTION_CODES"
            onClick={handleClick}
            value={test.ACTION_CODES}
          />
          <div>Letter Flows:</div>
          <input
            type="text"
            name="LETTER_FLOWS"
            onClick={handleClick}
            value={test.LETTER_FLOWS}
          />
        </div>
        <div className="two">
          <div>Call Dispositions:</div>
          <input
            type="text"
            name="CALL_DISPOSITIONS"
            onClick={handleClick}
            value={test.CALL_DISPOSITIONS}
          />
        </div>
      </div>
    </div>
  );
}

export default TestAccount;
