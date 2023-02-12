import React from "react";

function TestAccount({ object }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  };

  return (
    <div className="account">
      <div className="section">
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
            defaultValue={object.PRINCIPAL}
          />
          <div>Payments:</div>
          <input
            type="text"
            name="PAYMENTS"
            onClick={handleClick}
            defaultValue={object.PAYMENTS}
          />
          <div>Balance:</div>
          <input
            type="text"
            name="BALANCE"
            onClick={handleClick}
            defaultValue={object.BALANCE}
          />
          <div>Linked Balance:</div>
          <input
            type="text"
            name="LINKED_BALANCE"
            onClick={handleClick}
            defaultValue={object.LINKED_BALANCE}
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
            defaultValue={object.CLIENT}
          />
          <div>Account Type:</div>
          <input
            type="text"
            name="ACCOUNT_TYPE"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_TYPE}
          />
          <div>Status:</div>
          <input
            type="text"
            name="STATUS"
            onClick={handleClick}
            defaultValue={object.STATUS}
          />
          <div>Creditor:</div>
          <input
            type="text"
            name="CREDITOR"
            onClick={handleClick}
            defaultValue={object.CREDITOR}
          />
        </div>
        <div className="four">
          <div>Account #:</div>
          <input
            type="text"
            name="ACCOUNT_NUMBER"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_NUMBER}
          />
          <div>Originated:</div>
          <input
            type="text"
            name="ORIGINATED"
            onClick={handleClick}
            defaultValue={object.ORIGINATED}
          />
          <div>Account Received:</div>
          <input
            type="text"
            name="ACCOUNT_RECEIVED"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_RECEIVED}
          />
          <div>Imported on:</div>
          <input
            type="text"
            name="IMPORTED_ON"
            onClick={handleClick}
            defaultValue={object.IMPORTED_ON}
          />
        </div>
        <div className="four">
          <div>Collector:</div>
          <input
            type="text"
            name="COLLECTOR"
            onClick={handleClick}
            defaultValue={object.COLLECTOR}
          />
          <div>Client Claim #:</div>
          <input
            type="text"
            name="CLIENT_CLAIM_NUMBER"
            onClick={handleClick}
            defaultValue={object.CLIENT_CLAIM_NUMBER}
          />
          <div>Charged Off:</div>
          <input
            type="text"
            name="CHARGED_OFF"
            onClick={handleClick}
            defaultValue={object.CHARGED_OFF}
          />
          <div>Purchased:</div>
          <input
            type="text"
            name="PURCHASED"
            onClick={handleClick}
            defaultValue={object.PURCHASED}
          />
        </div>
        <div className="four">
          <div>Queue:</div>
          <input
            type="text"
            name="QUEUE"
            onClick={handleClick}
            defaultValue={object.QUEUE}
          />
          <div>Last Payment:</div>
          <input
            type="text"
            name="LAST_PAYMENT"
            onClick={handleClick}
            defaultValue={object.LAST_PAYMENT}
          />
          <div>Next Work:</div>
          <input
            type="text"
            name="NEXT_WORK"
            onClick={handleClick}
            defaultValue={object.NEXT_WORK}
          />
          <div>Debtor Payment ID:</div>
          <input
            type="text"
            name="DEBTOR_PMT_ID"
            onClick={handleClick}
            defaultValue={object.DEBTOR_PMT_ID}
          />
        </div>
        <div className="four">
          <div>Referring:</div>
          <input
            type="text"
            name="REFERRING"
            onClick={handleClick}
            defaultValue={object.REFERRING}
          />
          <div>Age:</div>
          <input
            type="text"
            name="AGE"
            onClick={handleClick}
            defaultValue={object.AGE}
          />
          <div>Delinq #1:</div>
          <input
            type="text"
            name="DELINQ_1"
            onClick={handleClick}
            defaultValue={object.DELINQ_1}
          />
          <div>Payment Portal:</div>
          <input
            type="text"
            name="PAYMENT_PORTAL"
            onClick={handleClick}
            defaultValue={object.PAYMENT_PORTAL}
          />
        </div>
        <div>
          <div>Sales Rep:</div>
          <input
            type="text"
            name="SALES_REP"
            onClick={handleClick}
            defaultValue={object.SALES_REP}
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
            defaultValue={object.ORIGINAL_CHECK_NUMBER}
          />
          <div>Item A:</div>
          <input
            type="text"
            name="ITEM_A"
            onClick={handleClick}
            defaultValue={object.ITEM_A}
          />
          <div>Item B:</div>
          <input
            type="text"
            name="ITEM_B"
            onClick={handleClick}
            defaultValue={object.ITEM_B}
          />
          <div>Item C:</div>
          <input
            type="text"
            name="ITEM_C"
            onClick={handleClick}
            defaultValue={object.LANDLORD_PHONE_NUMBER}
          />
        </div>
        <div className="four">
          <div>Landlord Phone #:</div>
          <input
            type="text"
            name="LANDLORD_PHONE_NUMBER"
            onClick={handleClick}
            defaultValue={object.LANDLORD_PHONE_NUMBER}
          />
          <div className="RENT_AMOUNT">Rent Amount:</div>
          <input
            type="text"
            name="RENT_AMOUNT"
            onClick={handleClick}
            defaultValue={object.RENT_AMOUNT}
          />
          <div className="PRODUCT">Product:</div>
          <input
            type="text"
            name="PRODUCT"
            onClick={handleClick}
            defaultValue={object.PRODUCT}
          />
          <div className="PROP_OWNER_ADDRESS">Prop Owner Address:</div>
          <input
            type="text"
            name="PROP_OWNER_ADDRESS"
            onClick={handleClick}
            defaultValue={object.PROP_OWNER_ADDRESS}
          />
        </div>
        <div className="four">
          <div className="PROP">Prop:</div>
          <input
            type="text"
            name="PROP"
            onClick={handleClick}
            defaultValue={object.PROP}
          />
          <div className="PROP_LOAN_AMOUNT">Prop Loan Amount:</div>
          <input
            type="text"
            name="PROP_LOAN_AMOUNT"
            onClick={handleClick}
            defaultValue={object.PROP_LOAN_AMOUNT}
          />
          <div className="PROP_OWNER_LENDER">Prop Owner Lender:</div>
          <input
            type="text"
            name="PROP_OWNER_LENDER"
            onClick={handleClick}
            defaultValue={object.PROP_OWNER_LENDER}
          />
          <div>TLO POE:</div>
          <input
            type="text"
            name="TLO_POE"
            onClick={handleClick}
            defaultValue={object.TLO_POE}
          />
        </div>
        <div className="four">
          <div>Co-Signer First:</div>
          <input
            type="text"
            name="CO_SIGNER_FIRST"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_FIRST}
          />
          <div>Co-Signer Last:</div>
          <input
            type="text"
            name="CO_SIGNER_LAST"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_LAST}
          />
          <div>Co-Signer SSN:</div>
          <input
            type="text"
            name="CO_SIGN_SSN"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_SSN}
          />
          <div>TLO POE #:</div>
          <input
            type="text"
            name="TLO_POE_NUMBER"
            onClick={handleClick}
            defaultValue={object.TLO_POE_NUMBER}
          />
        </div>
        <div className="four">
          <div>TLO Address:</div>
          <input
            type="text"
            name="TLO_ADDRESS"
            onClick={handleClick}
            defaultValue={object.TLO_ADDRESS}
          />
          <div>TLO City:</div>
          <input
            type="text"
            name="TLO_CITY"
            onClick={handleClick}
            defaultValue={object.TLO_CITY}
          />
          <div>TLO State:</div>
          <input
            type="text"
            name="TLO_STATE"
            onClick={handleClick}
            defaultValue={object.TLO_STATE}
          />
          <div>TLO Address 2:</div>
          <input
            type="text"
            name="TLO_ADDRESS_2"
            onClick={handleClick}
            defaultValue={object.TLO_ADDRESS_2}
          />
        </div>
        <div className="four">
          <div>Relative 1:</div>
          <input
            type="text"
            name="RELATIVE_1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1}
          />
          <div>R-1 Address:</div>
          <input
            type="text"
            name="RELATIVE_1_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_ADDY}
          />
          <div>R-1 State:</div>
          <input
            type="text"
            name="RELATIVE_1_STATE"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_STATE}
          />
          <div>R-1 City:</div>
          <input
            type="text"
            name="RELATIVE_1_CITY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_CITY}
          />
        </div>
        <div className="five">
          <div>TLO City 2:</div>
          <input
            type="text"
            name="TLO_CITY_2"
            onClick={handleClick}
            defaultValue={object.TLO_CITY_2}
          />
          <div>TLO State 2:</div>
          <input
            type="text"
            name="TLO_STATE_2"
            onClick={handleClick}
            defaultValue={object.TLO_STATE_2}
          />
          <div>R-1 Phone 1:</div>
          <input
            type="text"
            name="RELATIVE_1_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_PH1}
          />
          <div>R-1 Phone 2:</div>
          <input
            type="text"
            name="RELATIVE_1_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_PH2}
          />
          <div>R-1 Phone 3:</div>
          <input
            type="text"
            name="RELATIVE_1_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_PH3}
          />
        </div>{" "}
        <div className="five">
          <div>TLO Phone 1</div>
          <input
            type="text"
            name="TLO_PHONE"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE}
          />
          <div>TLO Phone 2</div>
          <input
            type="text"
            name="TLO_PHONE_2"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_2}
          />
          <div>TLO Phone 3</div>
          <input
            type="text"
            name="TLO_PHONE_3"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_3}
          />
          <div>TLO Phone 4</div>
          <input
            type="text"
            name="TLO_PHONE_4"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_4}
          />
          <div>TLO Phone 5</div>
          <input
            type="text"
            name="TLO_PHONE_5"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_5}
          />
        </div>
        <div className="five">
          <div>Relative 2:</div>
          <input
            type="text"
            name="RELATIVE_2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2}
          />
          <div>R-2 Address:</div>
          <input
            type="text"
            name="RELATIVE_2_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_ADDY}
          />
          <div>R-2 Phone 1:</div>
          <input
            type="text"
            name="RELATIVE_2_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH1}
          />
          <div>R-2 Phone 2:</div>
          <input
            type="text"
            name="RELATIVE_2_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH2}
          />
          <div>R-2 Phone 3:</div>
          <input
            type="text"
            name="RELATIVE_2_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH3}
          />
        </div>
        <div className="five">
          <div>Relative 3:</div>
          <input
            type="text"
            name="RELATIVE_3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3}
          />
          <div>R-3 Address:</div>
          <input
            type="text"
            name="RELATIVE_3_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_ADDY}
          />
          <div>R-3 Phone 1:</div>
          <input
            type="text"
            name="RELATIVE_3_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH1}
          />
          <div>R-3 Phone 2:</div>
          <input
            type="text"
            name="RELATIVE_3_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH2}
          />
          <div>R-3 Phone 3:</div>
          <input
            type="text"
            name="RELATIVE_3_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH3}
          />
        </div>
        <div className="five">
          <div>Relative 4:</div>
          <input
            type="text"
            name="RELATIVE_4"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4}
          />
          <div>R-4 Address:</div>
          <input
            type="text"
            name="RELATIVE_4_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_ADDY}
          />
          <div>R-4 Phone 1:</div>
          <input
            type="text"
            name="RELATIVE_4_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH1}
          />
          <div>R-4 Phone 2:</div>
          <input
            type="text"
            name="RELATIVE_4_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH2}
          />
          <div>R-4 Phone 3:</div>
          <input
            type="text"
            name="RELATIVE_4_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH3}
          />
        </div>
        <div className="five">
          <div>Relative 5:</div>
          <input
            type="text"
            name="RELATIVE_5"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5}
          />
          <div>R-5 Address:</div>
          <input
            type="text"
            name="RELATIVE_5_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_ADDY}
          />
          <div>R-5 Phone 1:</div>
          <input
            type="text"
            name="RELATIVE_5_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH1}
          />
          <div>R-5 Phone 2:</div>
          <input
            type="text"
            name="RELATIVE_5_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH2}
          />
          <div>R-5 Phone 3:</div>
          <input
            type="text"
            name="RELATIVE_5_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH3}
          />
        </div>
        <div className="four">
          <div>Bank Account Name:</div>
          <input
            type="text"
            name="BANK_ACCT_NAME"
            onClick={handleClick}
            defaultValue={object.BANK_ACCT_NAME}
          />
          <div>Bank Routing:</div>
          <input
            type="text"
            name="BANK_ROUTING"
            onClick={handleClick}
            defaultValue={object.BANK_ROUTING}
          />
          <div>Bank Account #:</div>
          <input
            type="text"
            name="BANK_ACCT_NUMBER"
            onClick={handleClick}
            defaultValue={object.BANK_ACCT_NUMBER}
          />
          <div>Last Payment:</div>
          <input
            type="text"
            name="LAST_PAYMENT"
            onClick={handleClick}
            defaultValue={object.LAST_PAYMENT}
          />
        </div>
        <div className="four">
          <div>Date Last Payment:</div>
          <input
            type="text"
            name="DATE_LAST_PAYMENT"
            onClick={handleClick}
            defaultValue={object.DATE_LAST_PAYMENT}
          />
          <div>Date of Last Charge:</div>
          <input
            type="text"
            name="DATE_OF_LAST_CHARGE"
            onClick={handleClick}
            defaultValue={object.DATE_OF_LAST_CHARGE}
          />
          <div>Bankruptcy:</div>
          <input
            type="text"
            name="BANKRUPTCY"
            onClick={handleClick}
            defaultValue={object.BANKRUPTCY}
          />
          <div>Discharged:</div>
          <input
            type="text"
            name="DISCHARGED"
            onClick={handleClick}
            defaultValue={object.DISCHARGED}
          />
        </div>
        <div className="four">
          <div>PDF:</div>
          <input
            type="text"
            name="PDF"
            onClick={handleClick}
            defaultValue={object.PDF}
          />
          <div>Generate Debtor Document Notifications:</div>
          <input
            type="text"
            name="GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS"
            onClick={handleClick}
            defaultValue={object.GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS}
          />
          <div>SSN:</div>
          <input
            type="text"
            name="SSN"
            onClick={handleClick}
            defaultValue={object.SSN}
          />
          <div>DOB:</div>
          <input
            type="text"
            name="DOB"
            onClick={handleClick}
            defaultValue={object.DOB}
          />
        </div>
        <div className="four">
          <div>Attorney:</div>
          <input
            type="text"
            name="ATTORNEY"
            onClick={handleClick}
            defaultValue={object.ATTORNEY}
          />
          <div>Employer:</div>
          <input
            type="text"
            name="EMPLOYER"
            onClick={handleClick}
            defaultValue={object.EMPLOYER}
          />
          <div>Action Codes:</div>
          <input
            type="text"
            name="ACTION_CODES"
            onClick={handleClick}
            defaultValue={object.ACTION_CODES}
          />
          <div>Letter Flows:</div>
          <input
            type="text"
            name="LETTER_FLOWS"
            onClick={handleClick}
            defaultValue={object.LETTER_FLOWS}
          />
        </div>
        <div className="two">
          <div>Call Dispositions:</div>
          <input
            type="text"
            name="CALL_DISPOSITIONS"
            onClick={handleClick}
            defaultValue={object.CALL_DISPOSITIONS}
          />
        </div>
      </div>
    </div>
  );
}

export default TestAccount;
