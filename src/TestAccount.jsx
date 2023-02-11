import React from "react";
import templateObject from "./templateObject";
function TestAccount() {
  const test = templateObject;

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
          <div>Principal: {test.PRINCIPAL}</div>
          <div>Payments: {test.PAYMENTS}</div>
          <div>Balance:</div>
          <input
            readOnly
            className="BALANCE"
            onClick={handleClick}
            value={test.BALANCE}
          />
          <div>Linked Balance:</div>
          <input
            readOnly
            className="LINKED_BALANCE"
            onClick={handleClick}
            value={test.LINKED_BALANCE}
          />
        </div>
      </div>
      <div className="section">
        <div className="four">
          <div>Client:</div>
          <input
            readOnly
            className="CLIENT"
            onClick={handleClick}
            value={test.CLIENT}
          />
          <div>Account Type:</div>
          <input
            readOnly
            className="ACCOUNT_TYPE"
            onClick={handleClick}
            value={test.ACCOUNT_TYPE}
          />
          <div>Status:</div>
          <input
            readOnly
            className="STATUS"
            onClick={handleClick}
            value={test.STATUS}
          />
          <div>Creditor:</div>
          <input
            readOnly
            className="CREDITOR"
            onClick={handleClick}
            value={test.CREDITOR}
          />
        </div>
        <div className="four">
          <div>Account #:</div>
          <input
            readOnly
            className="ACCOUNT_NUMBER"
            onClick={handleClick}
            value={test.ACCOUNT_NUMBER}
          />
          <div>Originated:</div>
          <input
            readOnly
            className="ORIGINATED"
            onClick={handleClick}
            value={test.ORIGINATED}
          />
          <div>Account Received:</div>
          <input
            readOnly
            className="ACCOUNT_RECEIVED"
            onClick={handleClick}
            value={test.ACCOUNT_RECEIVED}
          />
          <div>Imported on:</div>
          <input
            readOnly
            className="IMPORTED_ON"
            onClick={handleClick}
            value={test.IMPORTED_ON}
          />
        </div>
        <div className="four">
          <div>Collector:</div>
          <input
            readOnly
            className="COLLECTOR"
            onClick={handleClick}
            value={test.COLLECTOR}
          />
          <div>Client Claim #:</div>
          <input
            readOnly
            className="CLIENT_CLAIM_NUMBER"
            onClick={handleClick}
            value={test.CLIENT_CLAIM_NUMBER}
          />
          <div>Charged Off:</div>
          <input
            readOnly
            className="CHARGED_OFF"
            onClick={handleClick}
            value={test.CHARGED_OFF}
          />
          <div>Purchased:</div>
          <input
            readOnly
            className="PURCHASED"
            onClick={handleClick}
            value={test.PURCHASED}
          />
        </div>
        <div className="four">
          <div>Queue:</div>
          <input
            readOnly
            className="QUEUE"
            onClick={handleClick}
            value={test.QUEUE}
          />
          <div>Last Payment:</div>
          <input
            readOnly
            className="LAST_PAYMENT"
            onClick={handleClick}
            value={test.LAST_PAYMENT}
          />
          <div>Next Work:</div>
          <input
            readOnly
            className="NEXT_WORK"
            onClick={handleClick}
            value={test.NEXT_WORK}
          />
          <div>Debtor Payment ID:</div>
          <input
            readOnly
            className="DEBTOR_PMT_ID"
            onClick={handleClick}
            value={test.DEBTOR_PMT_ID}
          />
        </div>
        <div className="four">
          <div>Referring:</div>
          <input
            readOnly
            className="REFERRING"
            onClick={handleClick}
            value={test.REFERRING}
          />
          <div>Age:</div>
          <input
            readOnly
            className="AGE"
            onClick={handleClick}
            value={test.AGE}
          />
          <div>Delinq #1:</div>
          <input
            readOnly
            className="DELINQ_1"
            onClick={handleClick}
            value={test.DELINQ_1}
          />
          <div>Payment Portal:</div>
          <input
            readOnly
            className="PAYMENT_PORTAL"
            onClick={handleClick}
            value={test.PAYMENT_PORTAL}
          />
        </div>
        <div>
          <div>Sales Rep:</div>
          <input
            readOnly
            className="SALES_REP"
            onClick={handleClick}
            value={test.SALES_REP}
          />
        </div>
      </div>
      <div className="section">
        <div className="four">
          <div>Original Check #:</div>
          <input
            readOnly
            className="ORIGINAL_CHECK_NUMBER"
            onClick={handleClick}
            value={test.ORIGINAL_CHECK_NUMBER}
          />
          <div>Item A:</div>
          <input
            readOnly
            className="ITEM_A"
            onClick={handleClick}
            value={test.ITEM_A}
          />
          <div>Item B:</div>
          <input
            readOnly
            className="ITEM_B"
            onClick={handleClick}
            value={test.ITEM_B}
          />
          <div>Item C:</div>
          <input
            readOnly
            className="ITEM_C"
            onClick={handleClick}
            value={test.LANDLORD_PHONE_NUMBER}
          />
        </div>
        <div className="four">
          <div>Landlord Phone #:</div>
          <input
            readOnly
            className="LANDLORD_PHONE_NUMBER"
            onClick={handleClick}
            value={test.LANDLORD_PHONE_NUMBER}
          />
          <div className="RENT_AMOUNT">Rent Amount:</div>
          <input readOnly onClick={handleClick} value={test.RENT_AMOUNT} />
          <div className="PRODUCT">Product:</div>
          <input readOnly onClick={handleClick} value={test.PRODUCT} />
          <div className="PROP_OWNER_ADDRESS">Prop Owner Address:</div>
          <input
            readOnly
            onClick={handleClick}
            value={test.PROP_OWNER_ADDRESS}
          />
        </div>
        <div className="four">
          <div className="PROP">Prop:</div>
          <input readOnly onClick={handleClick} value={test.PROP} />
          <div className="PROP_LOAN_AMOUNT">Prop Loan Amount:</div>
          <input readOnly onClick={handleClick} value={test.PROP_LOAN_AMOUNT} />
          <div className="PROP_OWNER_LENDER">Prop Owner Lender:</div>
          <input
            readOnly
            onClick={handleClick}
            value={test.PROP_OWNER_LENDER}
          />
          <div>TLO POE:</div>
          <input
            readOnly
            className="TLO_POE"
            onClick={handleClick}
            value={test.TLO_POE}
          />
        </div>
        <div className="four">
          <div>Co-Signer First:</div>
          <input
            readOnly
            className="CO_SIGNER_FIRST"
            onClick={handleClick}
            value={test.CO_SIGNER_FIRST}
          />
          <div>Co-Signer Last:</div>
          <input
            readOnly
            className="CO_SIGNER_LAST"
            onClick={handleClick}
            value={test.CO_SIGNER_LAST}
          />
          <div>Co-Signer SSN:</div>
          <input
            readOnly
            className="CO_SIGN_SSN"
            onClick={handleClick}
            value={test.CO_SIGNER_SSN}
          />
          <div>TLO POE #:</div>
          <input
            readOnly
            className="TLO_POE_NUMBER"
            onClick={handleClick}
            value={test.TLO_POE_NUMBER}
          />
        </div>
        <div className="four">
          <div>TLO Address:</div>
          <input
            readOnly
            className="TLO_ADDRESS"
            onClick={handleClick}
            value={test.TLO_ADDRESS}
          />
          <div>TLO City:</div>
          <input
            readOnly
            className="TLO_CITY"
            onClick={handleClick}
            value={test.TLO_CITY}
          />
          <div>TLO State:</div>
          <input
            readOnly
            className="TLO_STATE"
            onClick={handleClick}
            value={test.TLO_STATE}
          />
          <div>TLO Address 2:</div>
          <input
            readOnly
            className="TLO_ADDRESS_2"
            onClick={handleClick}
            value={test.TLO_ADDRESS_2}
          />
        </div>
        <div className="four">
          <div>Relative 1:</div>
          <input
            readOnly
            className="RELATIVE_1"
            onClick={handleClick}
            value={test.RELATIVE_1}
          />
          <div>R-1 Address:</div>
          <input
            readOnly
            className="RELATIVE_1_ADDY"
            onClick={handleClick}
            value={test.RELATIVE_1_ADDY}
          />
          <div>R-1 State:</div>
          <input
            readOnly
            className="RELATIVE_1_STATE"
            onClick={handleClick}
            value={test.RELATIVE_1_STATE}
          />
          <div>R-1 City:</div>
          <input
            readOnly
            className="RELATIVE_1_CITY"
            onClick={handleClick}
            value={test.RELATIVE_1_CITY}
          />
        </div>
        <div className="five">
          <div>TLO City 2:</div>
          <input
            readOnly
            className="TLO_CITY_2"
            onClick={handleClick}
            value={test.TLO_CITY_2}
          />
          <div>TLO State 2:</div>
          <input
            readOnly
            className="TLO_STATE_2"
            onClick={handleClick}
            value={test.TLO_STATE_2}
          />
          <div>R-1 Phone 1:</div>
          <input
            readOnly
            className="RELATIVE_1_PH1"
            onClick={handleClick}
            value={test.RELATIVE_1_PH1}
          />
          <div>R-1 Phone 2:</div>
          <input
            readOnly
            className="RELATIVE_1_PH2"
            onClick={handleClick}
            value={test.RELATIVE_1_PH2}
          />
          <div>R-1 Phone 3:</div>
          <input
            readOnly
            className="RELATIVE_1_PH3"
            onClick={handleClick}
            value={test.RELATIVE_1_PH3}
          />
        </div>{" "}
        <div className="five">
          <div>TLO Phone 1</div>
          <input
            readOnly
            className="TLO_PHONE"
            onClick={handleClick}
            value={test.TLO_PHONE}
          />
          <div>TLO Phone 2</div>
          <input
            readOnly
            className="TLO_PHONE_2"
            onClick={handleClick}
            value={test.TLO_PHONE_2}
          />
          <div>TLO Phone 3</div>
          <input
            readOnly
            className="TLO_PHONE_3"
            onClick={handleClick}
            value={test.TLO_PHONE_3}
          />
          <div>TLO Phone 4</div>
          <input
            readOnly
            className="TLO_PHONE_4"
            onClick={handleClick}
            value={test.TLO_PHONE_4}
          />
          <div>TLO Phone 5</div>
          <input
            readOnly
            className="TLO_PHONE_5"
            onClick={handleClick}
            value={test.TLO_PHONE_5}
          />
        </div>
        <div className="five">
          <div>Relative 2:</div>
          <input
            readOnly
            className="RELATIVE_2"
            onClick={handleClick}
            value={test.RELATIVE_2}
          />
          <div>R-2 Address:</div>
          <input
            readOnly
            className="RELATIVE_2_ADDY"
            onClick={handleClick}
            value={test.RELATIVE_2_ADDY}
          />
          <div>R-2 Phone 1:</div>
          <input
            readOnly
            className="RELATIVE_2_PH1"
            onClick={handleClick}
            value={test.RELATIVE_2_PH1}
          />
          <div>R-2 Phone 2:</div>
          <input
            readOnly
            className="RELATIVE_2_PH2"
            onClick={handleClick}
            value={test.RELATIVE_2_PH2}
          />
          <div>R-2 Phone 3:</div>
          <input
            readOnly
            className="RELATIVE_2_PH3"
            onClick={handleClick}
            value={test.RELATIVE_2_PH3}
          />
        </div>
        <div className="five">
          <div>Relative 3:</div>
          <input
            readOnly
            className="RELATIVE_3"
            onClick={handleClick}
            value={test.RELATIVE_3}
          />
          <div>R-3 Address:</div>
          <input
            readOnly
            className="RELATIVE_3_ADDY"
            onClick={handleClick}
            value={test.RELATIVE_3_ADDY}
          />
          <div>R-3 Phone 1:</div>
          <input
            readOnly
            className="RELATIVE_3_PH1"
            onClick={handleClick}
            value={test.RELATIVE_3_PH1}
          />
          <div>R-3 Phone 2:</div>
          <input
            readOnly
            className="RELATIVE_3_PH2"
            onClick={handleClick}
            value={test.RELATIVE_3_PH2}
          />
          <div>R-3 Phone 3:</div>
          <input
            readOnly
            className="RELATIVE_3_PH3"
            onClick={handleClick}
            value={test.RELATIVE_3_PH3}
          />
        </div>
        <div className="five">
          <div>Relative 4:</div>
          <input
            readOnly
            className="RELATIVE_4"
            onClick={handleClick}
            value={test.RELATIVE_4}
          />
          <div>R-4 Address:</div>
          <input
            readOnly
            className="RELATIVE_4_ADDY"
            onClick={handleClick}
            value={test.RELATIVE_4_ADDY}
          />
          <div>R-4 Phone 1:</div>
          <input
            readOnly
            className="RELATIVE_4_PH1"
            onClick={handleClick}
            value={test.RELATIVE_4_PH1}
          />
          <div>R-4 Phone 2:</div>
          <input
            readOnly
            className="RELATIVE_4_PH2"
            onClick={handleClick}
            value={test.RELATIVE_4_PH2}
          />
          <div>R-4 Phone 3:</div>
          <input
            readOnly
            className="RELATIVE_4_PH3"
            onClick={handleClick}
            value={test.RELATIVE_4_PH3}
          />
        </div>
        <div className="five">
          <div>Relative 5:</div>
          <input
            readOnly
            className="RELATIVE_5"
            onClick={handleClick}
            value={test.RELATIVE_5}
          />
          <div>R-5 Address:</div>
          <input
            readOnly
            className="RELATIVE_5_ADDY"
            onClick={handleClick}
            value={test.RELATIVE_5_ADDY}
          />
          <div>R-5 Phone 1:</div>
          <input
            readOnly
            className="RELATIVE_5_PH1"
            onClick={handleClick}
            value={test.RELATIVE_5_PH1}
          />
          <div>R-5 Phone 2:</div>
          <input
            readOnly
            className="RELATIVE_5_PH2"
            onClick={handleClick}
            value={test.RELATIVE_5_PH2}
          />
          <div>R-5 Phone 3:</div>
          <input
            readOnly
            className="RELATIVE_5_PH3"
            onClick={handleClick}
            value={test.RELATIVE_5_PH3}
          />
        </div>
        <div className="four">
          <div>Bank Account Name:</div>
          <input
            readOnly
            className="BANK_ACCT_NAME"
            onClick={handleClick}
            value={test.BANK_ACCT_NAME}
          />
          <div>Bank Routing:</div>
          <input
            readOnly
            className="BANK_ROUTING"
            onClick={handleClick}
            value={test.BANK_ROUTING}
          />
          <div>Bank Account #:</div>
          <input
            readOnly
            className="BANK_ACCT_NUMBER"
            onClick={handleClick}
            value={test.BANK_ACCT_NUMBER}
          />
          <div>Last Payment:</div>
          <input
            readOnly
            className="LAST_PAYMENT"
            onClick={handleClick}
            value={test.LAST_PAYMENT}
          />
        </div>
        <div className="four">
          <div>Date Last Payment:</div>
          <input
            readOnly
            className="DATE_LAST_PAYMENT"
            onClick={handleClick}
            value={test.DATE_LAST_PAYMENT}
          />
          <div>Date of Last Charge:</div>
          <input
            readOnly
            className="DATE_OF_LAST_CHARGE"
            onClick={handleClick}
            value={test.DATE_OF_LAST_CHARGE}
          />
          <div>Bankruptcy:</div>
          <input
            readOnly
            className="BANKRUPTCY"
            onClick={handleClick}
            value={test.BANKRUPTCY}
          />
          <div>Discharged:</div>
          <input
            readOnly
            className="DISCHARGED"
            onClick={handleClick}
            value={test.DISCHARGED}
          />
        </div>
        <div className="four">
          <div>PDF:</div>
          <input
            readOnly
            className="PDF"
            onClick={handleClick}
            value={test.PDF}
          />
          <div>Generate Debtor Document Notifications:</div>
          <input
            readOnly
            className="GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS"
            onClick={handleClick}
            value={test.GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS}
          />
          <div>SSN:</div>
          <input
            readOnly
            className="SSN"
            onClick={handleClick}
            value={test.SSN}
          />
          <div>DOB:</div>
          <input
            readOnly
            className="DOB"
            onClick={handleClick}
            value={test.DOB}
          />
        </div>
        <div className="four">
          <div>Attorney:</div>
          <input
            readOnly
            className="ATTORNEY"
            onClick={handleClick}
            value={test.ATTORNEY}
          />
          <div>Employer:</div>
          <input
            readOnly
            className="EMPLOYER"
            onClick={handleClick}
            value={test.EMPLOYER}
          />
          <div>Action Codes:</div>
          <input
            readOnly
            className="ACTION_CODES"
            onClick={handleClick}
            value={test.ACTION_CODES}
          />
          <div>Letter Flows:</div>
          <input
            readOnly
            className="LETTER_FLOWS"
            onClick={handleClick}
            value={test.LETTER_FLOWS}
          />
        </div>
        <div className="two">
          <div>Notes:</div>
          <input
            readOnly
            className="NOTES"
            onClick={handleClick}
            value={test.NOTES}
          />
          <div>Call Dispositions:</div>
          <input
            readOnly
            className="CALL_DISPOSITIONS"
            onClick={handleClick}
            value={test.CALL_DISPOSITIONS}
          />
        </div>
      </div>
    </div>
  );
}

export default TestAccount;
