import React from "react";

function TestAccount({ object }) {
  //copy to clipboard
  const handleClick = (e) => {
    navigator.clipboard.writeText(e.currentTarget.value);
  };

  return (
    <div className="account accountFields">
      <h1 className="title">
        <div>Debt:</div>
      </h1>
      <div className="section">
        <div className="two">
          <button>Save</button>
          <button>Delete</button>
        </div>
        <div className="four">
          <div className="objectKeyName">Principal:</div>
          <input
            readOnly
            type="text"
            name="PRINCIPAL"
            onClick={handleClick}
            defaultValue={object.PRINCIPAL}
          />
          <div className="objectKeyName">Payments:</div>
          <input
            readOnly
            type="text"
            name="PAYMENTS"
            onClick={handleClick}
            defaultValue={object.PAYMENTS}
          />
          <div className="objectKeyName">Balance:</div>
          <input
            readOnly
            type="text"
            name="BALANCE"
            onClick={handleClick}
            defaultValue={object.BALANCE}
          />
          <div className="objectKeyName">Linked Balance:</div>
          <input
            readOnly
            type="text"
            name="LINKED_BALANCE"
            onClick={handleClick}
            defaultValue={object.LINKED_BALANCE}
          />
        </div>
      </div>
      <h1 className="title">
        <div>Client:</div>
      </h1>
      <div className="section">
        <div className="four">
          <div className="objectKeyName">Client:</div>
          <input
            readOnly
            type="text"
            name="CLIENT"
            onClick={handleClick}
            defaultValue={object.CLIENT}
          />
          <div className="objectKeyName">Account Type:</div>
          <input
            readOnly
            type="text"
            name="ACCOUNT_TYPE"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_TYPE}
          />
          <div className="objectKeyName">Status:</div>
          <input
            readOnly
            type="text"
            name="STATUS"
            onClick={handleClick}
            defaultValue={object.STATUS}
          />
          <div className="objectKeyName">Creditor:</div>
          <input
            readOnly
            type="text"
            name="CREDITOR"
            onClick={handleClick}
            defaultValue={object.CREDITOR}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">Account #:</div>
          <input
            readOnly
            type="text"
            name="ACCOUNT_NUMBER"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_NUMBER}
          />
          <div className="objectKeyName">Originated:</div>
          <input
            readOnly
            type="text"
            name="ORIGINATED"
            onClick={handleClick}
            defaultValue={object.ORIGINATED}
          />
          <div className="objectKeyName">Account Received:</div>
          <input
            readOnly
            type="text"
            name="ACCOUNT_RECEIVED"
            onClick={handleClick}
            defaultValue={object.ACCOUNT_RECEIVED}
          />
          <div className="objectKeyName">Imported on:</div>
          <input
            readOnly
            type="text"
            name="IMPORTED_ON"
            onClick={handleClick}
            defaultValue={object.IMPORTED_ON}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">Collector:</div>
          <input
            readOnly
            type="text"
            name="COLLECTOR"
            onClick={handleClick}
            defaultValue={object.COLLECTOR}
          />
          <div className="objectKeyName">Client Claim #:</div>
          <input
            readOnly
            type="text"
            name="CLIENT_CLAIM_NUMBER"
            onClick={handleClick}
            defaultValue={object.CLIENT_CLAIM_NUMBER}
          />
          <div className="objectKeyName">Charged Off:</div>
          <input
            readOnly
            type="text"
            name="CHARGED_OFF"
            onClick={handleClick}
            defaultValue={object.CHARGED_OFF}
          />
          <div className="objectKeyName">Purchased:</div>
          <input
            readOnly
            type="text"
            name="PURCHASED"
            onClick={handleClick}
            defaultValue={object.PURCHASED}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">Queue:</div>
          <input
            readOnly
            type="text"
            name="QUEUE"
            onClick={handleClick}
            defaultValue={object.QUEUE}
          />
          <div className="objectKeyName">Last Payment:</div>
          <input
            readOnly
            type="text"
            name="LAST_PAYMENT"
            onClick={handleClick}
            defaultValue={object.LAST_PAYMENT}
          />
          <div className="objectKeyName">Next Work:</div>
          <input
            readOnly
            type="text"
            name="NEXT_WORK"
            onClick={handleClick}
            defaultValue={object.NEXT_WORK}
          />
          <div className="objectKeyName">Debtor Payment ID:</div>
          <input
            readOnly
            type="text"
            name="DEBTOR_PMT_ID"
            onClick={handleClick}
            defaultValue={object.DEBTOR_PMT_ID}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">Referring:</div>
          <input
            readOnly
            type="text"
            name="REFERRING"
            onClick={handleClick}
            defaultValue={object.REFERRING}
          />
          <div className="objectKeyName">Age:</div>
          <input
            readOnly
            type="text"
            name="AGE"
            onClick={handleClick}
            defaultValue={object.AGE}
          />
          <div className="objectKeyName">Delinq #1:</div>
          <input
            readOnly
            type="text"
            name="DELINQ_1"
            onClick={handleClick}
            defaultValue={object.DELINQ_1}
          />
          <div className="objectKeyName">Payment Portal:</div>
          <input
            readOnly
            type="text"
            name="PAYMENT_PORTAL"
            onClick={handleClick}
            defaultValue={object.PAYMENT_PORTAL}
          />
        </div>
        <div>
          <div className="objectKeyName">Sales Rep:</div>
          <input
            readOnly
            type="text"
            name="SALES_REP"
            onClick={handleClick}
            defaultValue={object.SALES_REP}
          />
        </div>
      </div>
      <h1 className="title">
        <div>Debt Information:</div>
      </h1>
      <div className="section">
        <div className="four">
          <div className="objectKeyName">Original Check #:</div>
          <input
            readOnly
            type="text"
            name="ORIGINAL_CHECK_NUMBER"
            onClick={handleClick}
            defaultValue={object.ORIGINAL_CHECK_NUMBER}
          />
          <div className="objectKeyName">Item A:</div>
          <input
            readOnly
            type="text"
            name="ITEM_A"
            onClick={handleClick}
            defaultValue={object.ITEM_A}
          />
          <div className="objectKeyName">Item B:</div>
          <input
            readOnly
            type="text"
            name="ITEM_B"
            onClick={handleClick}
            defaultValue={object.ITEM_B}
          />
          <div className="objectKeyName">Item C:</div>
          <input
            readOnly
            type="text"
            name="ITEM_C"
            onClick={handleClick}
            defaultValue={object.LANDLORD_PHONE_NUMBER}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">Landlord Phone #:</div>
          <input
            readOnly
            type="text"
            name="LANDLORD_PHONE_NUMBER"
            onClick={handleClick}
            defaultValue={object.LANDLORD_PHONE_NUMBER}
          />
          <div className="objectKeyName">Rent Amount:</div>
          <input
            readOnly
            type="text"
            name="RENT_AMOUNT"
            onClick={handleClick}
            defaultValue={object.RENT_AMOUNT}
          />
          <div className="objectKeyName">Product:</div>
          <input
            readOnly
            type="text"
            name="PRODUCT"
            onClick={handleClick}
            defaultValue={object.PRODUCT}
          />
          <div className="objectKeyName">Prop Owner Address:</div>
          <input
            readOnly
            type="text"
            name="PROP_OWNER_ADDRESS"
            onClick={handleClick}
            defaultValue={object.PROP_OWNER_ADDRESS}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">Prop:</div>
          <input
            readOnly
            type="text"
            name="PROP"
            onClick={handleClick}
            defaultValue={object.PROP}
          />
          <div className="objectKeyName">Prop Loan Amount:</div>
          <input
            readOnly
            type="text"
            name="PROP_LOAN_AMOUNT"
            onClick={handleClick}
            defaultValue={object.PROP_LOAN_AMOUNT}
          />
          <div className="objectKeyName">Prop Owner Lender:</div>
          <input
            readOnly
            type="text"
            name="PROP_OWNER_LENDER"
            onClick={handleClick}
            defaultValue={object.PROP_OWNER_LENDER}
          />
          <div className="objectKeyName">TLO POE:</div>
          <input
            readOnly
            type="text"
            name="TLO_POE"
            onClick={handleClick}
            defaultValue={object.TLO_POE}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">Co-Signer First:</div>
          <input
            readOnly
            type="text"
            name="CO_SIGNER_FIRST"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_FIRST}
          />
          <div className="objectKeyName">Co-Signer Last:</div>
          <input
            readOnly
            type="text"
            name="CO_SIGNER_LAST"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_LAST}
          />
          <div className="objectKeyName">Co-Signer SSN:</div>
          <input
            readOnly
            type="text"
            name="CO_SIGN_SSN"
            onClick={handleClick}
            defaultValue={object.CO_SIGNER_SSN}
          />
          <div className="objectKeyName">TLO POE #:</div>
          <input
            readOnly
            type="text"
            name="TLO_POE_NUMBER"
            onClick={handleClick}
            defaultValue={object.TLO_POE_NUMBER}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">TLO Address:</div>
          <input
            readOnly
            type="text"
            name="TLO_ADDRESS"
            onClick={handleClick}
            defaultValue={object.TLO_ADDRESS}
          />
          <div className="objectKeyName">TLO City:</div>
          <input
            readOnly
            type="text"
            name="TLO_CITY"
            onClick={handleClick}
            defaultValue={object.TLO_CITY}
          />
          <div className="objectKeyName">TLO State:</div>
          <input
            readOnly
            type="text"
            name="TLO_STATE"
            onClick={handleClick}
            defaultValue={object.TLO_STATE}
          />
          <div className="objectKeyName">TLO Address 2:</div>
          <input
            readOnly
            type="text"
            name="TLO_ADDRESS_2"
            onClick={handleClick}
            defaultValue={object.TLO_ADDRESS_2}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">Relative 1:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1}
          />
          <div className="objectKeyName">R-1 Address:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_1_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_ADDY}
          />
          <div className="objectKeyName">R-1 State:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_1_STATE"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_STATE}
          />
          <div className="objectKeyName">R-1 City:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_1_CITY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_CITY}
          />
        </div>
        <div className="five">
          <div className="objectKeyName">TLO City 2:</div>
          <input
            readOnly
            type="text"
            name="TLO_CITY_2"
            onClick={handleClick}
            defaultValue={object.TLO_CITY_2}
          />
          <div className="objectKeyName">TLO State 2:</div>
          <input
            readOnly
            type="text"
            name="TLO_STATE_2"
            onClick={handleClick}
            defaultValue={object.TLO_STATE_2}
          />
          <div className="objectKeyName">R-1 Phone 1:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_1_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_PH1}
          />
          <div className="objectKeyName">R-1 Phone 2:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_1_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_PH2}
          />
          <div className="objectKeyName">R-1 Phone 3:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_1_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_PH3}
          />
        </div>{" "}
      </div>
      <h1 className="title">
        <div>Contact:</div>
      </h1>
      <div className="section">
        <div className="five">
          <div className="objectKeyName">TLO Phone 1</div>
          <input
            readOnly
            type="text"
            name="TLO_PHONE"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE}
          />
          <div className="objectKeyName">TLO Phone 2</div>
          <input
            readOnly
            type="text"
            name="TLO_PHONE_2"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_2}
          />
          <div className="objectKeyName">TLO Phone 3</div>
          <input
            readOnly
            type="text"
            name="TLO_PHONE_3"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_3}
          />
          <div className="objectKeyName">TLO Phone 4</div>
          <input
            readOnly
            type="text"
            name="TLO_PHONE_4"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_4}
          />
          <div className="objectKeyName">TLO Phone 5</div>
          <input
            readOnly
            type="text"
            name="TLO_PHONE_5"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_5}
          />
        </div>
        <div className="five">
          <div className="objectKeyName">Relative 2:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2}
          />
          <div className="objectKeyName">R-2 Address:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_2_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_ADDY}
          />
          <div className="objectKeyName">R-2 Phone 1:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_2_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH1}
          />
          <div className="objectKeyName">R-2 Phone 2:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_2_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH2}
          />
          <div className="objectKeyName">R-2 Phone 3:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_2_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH3}
          />
        </div>
        <div className="five">
          <div className="objectKeyName">Relative 3:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3}
          />
          <div className="objectKeyName">R-3 Address:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_3_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_ADDY}
          />
          <div className="objectKeyName">R-3 Phone 1:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_3_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH1}
          />
          <div className="objectKeyName">R-3 Phone 2:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_3_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH2}
          />
          <div className="objectKeyName">R-3 Phone 3:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_3_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH3}
          />
        </div>
        <div className="five">
          <div className="objectKeyName">Relative 4:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_4"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4}
          />
          <div className="objectKeyName">R-4 Address:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_4_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_ADDY}
          />
          <div className="objectKeyName">R-4 Phone 1:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_4_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH1}
          />
          <div className="objectKeyName">R-4 Phone 2:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_4_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH2}
          />
          <div className="objectKeyName">R-4 Phone 3:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_4_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH3}
          />
        </div>
        <div className="five">
          <div className="objectKeyName">Relative 5:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_5"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5}
          />
          <div className="objectKeyName">R-5 Address:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_5_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_ADDY}
          />
          <div className="objectKeyName">R-5 Phone 1:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_5_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH1}
          />
          <div className="objectKeyName">R-5 Phone 2:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_5_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH2}
          />
          <div className="objectKeyName">R-5 Phone 3:</div>
          <input
            readOnly
            type="text"
            name="RELATIVE_5_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH3}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">Bank Account Name:</div>
          <input
            readOnly
            type="text"
            name="BANK_ACCT_NAME"
            onClick={handleClick}
            defaultValue={object.BANK_ACCT_NAME}
          />
          <div className="objectKeyName">Bank Routing:</div>
          <input
            readOnly
            type="text"
            name="BANK_ROUTING"
            onClick={handleClick}
            defaultValue={object.BANK_ROUTING}
          />
          <div className="objectKeyName">Bank Account #:</div>
          <input
            readOnly
            type="text"
            name="BANK_ACCT_NUMBER"
            onClick={handleClick}
            defaultValue={object.BANK_ACCT_NUMBER}
          />
          <div className="objectKeyName">Last Payment:</div>
          <input
            readOnly
            type="text"
            name="LAST_PAYMENT"
            onClick={handleClick}
            defaultValue={object.LAST_PAYMENT}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">Date Last Payment:</div>
          <input
            readOnly
            type="text"
            name="DATE_LAST_PAYMENT"
            onClick={handleClick}
            defaultValue={object.DATE_LAST_PAYMENT}
          />
          <div className="objectKeyName">Date of Last Charge:</div>
          <input
            readOnly
            type="text"
            name="DATE_OF_LAST_CHARGE"
            onClick={handleClick}
            defaultValue={object.DATE_OF_LAST_CHARGE}
          />
          <div className="objectKeyName">Bankruptcy:</div>
          <input
            readOnly
            type="text"
            name="BANKRUPTCY"
            onClick={handleClick}
            defaultValue={object.BANKRUPTCY}
          />
          <div className="objectKeyName">Discharged:</div>
          <input
            readOnly
            type="text"
            name="DISCHARGED"
            onClick={handleClick}
            defaultValue={object.DISCHARGED}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">PDF:</div>
          <input
            readOnly
            type="text"
            name="PDF"
            onClick={handleClick}
            defaultValue={object.PDF}
          />
          <div className="objectKeyName">
            Generate Debtor Document Notifications:
          </div>
          <input
            readOnly
            type="text"
            name="GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS"
            onClick={handleClick}
            defaultValue={object.GENERATE_DEBTOR_DOCUMENT_NOTIFICATIONS}
          />
          <div className="objectKeyName">SSN:</div>
          <input
            readOnly
            type="text"
            name="SSN"
            onClick={handleClick}
            defaultValue={object.SSN}
          />
          <div className="objectKeyName">DOB:</div>
          <input
            readOnly
            type="text"
            name="DOB"
            onClick={handleClick}
            defaultValue={object.DOB}
          />
        </div>
        <div className="four">
          <div className="objectKeyName">Attorney:</div>
          <input
            readOnly
            type="text"
            name="ATTORNEY"
            onClick={handleClick}
            defaultValue={object.ATTORNEY}
          />
          <div className="objectKeyName">Employer:</div>
          <input
            readOnly
            type="text"
            name="EMPLOYER"
            onClick={handleClick}
            defaultValue={object.EMPLOYER}
          />
          <div className="objectKeyName">Action Codes:</div>
          <input
            readOnly
            type="text"
            name="ACTION_CODES"
            onClick={handleClick}
            defaultValue={object.ACTION_CODES}
          />
          <div className="objectKeyName">Letter Flows:</div>
          <input
            readOnly
            type="text"
            name="LETTER_FLOWS"
            onClick={handleClick}
            defaultValue={object.LETTER_FLOWS}
          />
        </div>
        <div className="two">
          <div className="objectKeyName">Call Dispositions:</div>
          <input
            readOnly
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
