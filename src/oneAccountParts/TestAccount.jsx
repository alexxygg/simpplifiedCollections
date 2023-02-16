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
          <div className="beforeInput PRINCIPAL">Principal:</div>
          <input
            readOnly
            type="text"
            className="PRINCIPAL"
            onClick={handleClick}
            defaultValue={object.PRINCIPAL}
          />
          <div className="beforeInput PAYMENTS">Payments:</div>
          <input
            readOnly
            type="text"
            className="PAYMENTS"
            onClick={handleClick}
            defaultValue={object.PAYMENTS}
          />
          <div className="beforeInput BALANCE">Balance:</div>
          <input
            readOnly
            type="text"
            className="BALANCE"
            onClick={handleClick}
            defaultValue={object.BALANCE}
          />
          <div className="beforeInput LINKED_BALANCE">Linked Balance:</div>
          <input
            readOnly
            type="text"
            className="LINKED_BALANCE"
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
        </div>
        <div className="four">
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
        </div>
        <div className="four">
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
        </div>
        <div className="four">
          <div className="beforeInput QUEUE">Queue:</div>
          <input
            readOnly
            type="text"
            className="QUEUE"
            onClick={handleClick}
            defaultValue={object.QUEUE}
          />
          <div className="beforeInput LAST_PAYMENT">Last Payment:</div>
          <input
            readOnly
            type="text"
            className="LAST_PAYMENT"
            onClick={handleClick}
            defaultValue={object.LAST_PAYMENT}
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
        </div>
        <div className="four">
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
          <div className="beforeInput PAYMENT_PORTAL">Payment Portal:</div>
          <input
            readOnly
            type="text"
            className="PAYMENT_PORTAL"
            onClick={handleClick}
            defaultValue={object.PAYMENT_PORTAL}
          />
        </div>
        <div>
          <div className="beforeInput SALES_REP">Sales Rep:</div>
          <input
            readOnly
            type="text"
            className="SALES_REP"
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
          <div className="beforeInput ORIGINAL_CHECK_NUMBER">
            Original Check #:
          </div>
          <input
            readOnly
            type="text"
            className="ORIGINAL_CHECK_NUMBER"
            onClick={handleClick}
            defaultValue={object.ORIGINAL_CHECK_NUMBER}
          />
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
            defaultValue={object.LANDLORD_PHONE_NUMBER}
          />
        </div>
        <div className="four">
          <div className="beforeInput LANDLORD_PHONE_NUMBER">
            Landlord Phone #:
          </div>
          <input
            readOnly
            type="text"
            className="LANDLORD_PHONE_NUMBER"
            onClick={handleClick}
            defaultValue={object.LANDLORD_PHONE_NUMBER}
          />
          <div className="beforeInput RENT_AMOUNT">Rent Amount:</div>
          <input
            readOnly
            type="text"
            className="RENT_AMOUNT"
            onClick={handleClick}
            defaultValue={object.RENT_AMOUNT}
          />
          <div className="beforeInput PRODUCT">Product:</div>
          <input
            readOnly
            type="text"
            className="PRODUCT"
            onClick={handleClick}
            defaultValue={object.PRODUCT}
          />
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
        </div>
        <div className="four">
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
          <div className="beforeInput PROP_OWNER_LENDER">
            Prop Owner Lender:
          </div>
          <input
            readOnly
            type="text"
            className="PROP_OWNER_LENDER"
            onClick={handleClick}
            defaultValue={object.PROP_OWNER_LENDER}
          />
          <div className="beforeInput TLO_POE">TLO POE:</div>
          <input
            readOnly
            type="text"
            className="TLO_POE"
            onClick={handleClick}
            defaultValue={object.TLO_POE}
          />
        </div>
        <div className="four">
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
          <div className="beforeInput TLO_POE_NUMBER">TLO POE #:</div>
          <input
            readOnly
            type="text"
            className="TLO_POE_NUMBER"
            onClick={handleClick}
            defaultValue={object.TLO_POE_NUMBER}
          />
        </div>
        <div className="four">
          <div className="beforeInput TLO_ADDRESS">TLO Address:</div>
          <input
            readOnly
            type="text"
            className="TLO_ADDRESS"
            onClick={handleClick}
            defaultValue={object.TLO_ADDRESS}
          />
          <div className="beforeInput TLO_CITY">TLO City:</div>
          <input
            readOnly
            type="text"
            className="TLO_CITY"
            onClick={handleClick}
            defaultValue={object.TLO_CITY}
          />
          <div className="beforeInput TLO_STATE">TLO State:</div>
          <input
            readOnly
            type="text"
            className="TLO_STATE"
            onClick={handleClick}
            defaultValue={object.TLO_STATE}
          />
          <div className="beforeInput TLO_ADDRESS_2">TLO Address 2:</div>
          <input
            readOnly
            type="text"
            className="TLO_ADDRESS_2"
            onClick={handleClick}
            defaultValue={object.TLO_ADDRESS_2}
          />
        </div>
        <div className="four">
          <div className="beforeInput RELATIVE_1">Relative 1:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1}
          />
          <div className="beforeInput RELATIVE_1_ADDY">R-1 Address:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_1_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_ADDY}
          />
          <div className="beforeInput RELATIVE_1_STATE">R-1 State:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_1_STATE"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_STATE}
          />
          <div className="beforeInput RELATIVE_1_CITY">R-1 City:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_1_CITY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_CITY}
          />
        </div>
        <div className="five">
          <div className="beforeInput TLO_CITY_2">TLO City 2:</div>
          <input
            readOnly
            type="text"
            className="TLO_CITY_2"
            onClick={handleClick}
            defaultValue={object.TLO_CITY_2}
          />
          <div className="beforeInput TLO_STATE_2">TLO State 2:</div>
          <input
            readOnly
            type="text"
            className="TLO_STATE_2"
            onClick={handleClick}
            defaultValue={object.TLO_STATE_2}
          />
          <div className="beforeInput RELATIVE_1_PH1">R-1 Phone 1:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_1_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_PH1}
          />
          <div className="beforeInput RELATIVE_1_PH2">R-1 Phone 2:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_1_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_1_PH2}
          />
          <div className="beforeInput RELATIVE_1_PH3">R-1 Phone 3:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_1_PH3"
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
          <div className="beforeInput TLO_PHONE">TLO Phone 1</div>
          <input
            readOnly
            type="text"
            className="TLO_PHONE"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE}
          />
          <div className="beforeInput TLO_PHONE_2">TLO Phone 2</div>
          <input
            readOnly
            type="text"
            className="TLO_PHONE_2"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_2}
          />
          <div className="beforeInput TLO_PHONE_3">TLO Phone 3</div>
          <input
            readOnly
            type="text"
            className="TLO_PHONE_3"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_3}
          />
          <div className="beforeInput TLO_PHONE_4">TLO Phone 4</div>
          <input
            readOnly
            type="text"
            className="TLO_PHONE_4"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_4}
          />
          <div className="beforeInput TLO_PHONE_5">TLO Phone 5</div>
          <input
            readOnly
            type="text"
            className="TLO_PHONE_5"
            onClick={handleClick}
            defaultValue={object.TLO_PHONE_5}
          />
        </div>
        <div className="five">
          <div className="beforeInput RELATIVE_2">Relative 2:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2}
          />
          <div className="beforeInput RELATIVE_2_ADDY">R-2 Address:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_2_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_ADDY}
          />
          <div className="beforeInput RELATIVE_2_PH1">R-2 Phone 1:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_2_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH1}
          />
          <div className="beforeInput RELATIVE_2_PH2">R-2 Phone 2:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_2_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH2}
          />
          <div className="beforeInput RELATIVE_2_PH3">R-2 Phone 3:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_2_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_2_PH3}
          />
        </div>
        <div className="five">
          <div className="beforeInput RELATIVE_3">Relative 3:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3}
          />
          <div className="beforeInput RELATIVE_3_ADDY">R-3 Address:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_3_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_ADDY}
          />
          <div className="beforeInput RELATIVE_3_PH1">R-3 Phone 1:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_3_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH1}
          />
          <div className="beforeInput RELATIVE_3_PH2">R-3 Phone 2:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_3_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH2}
          />
          <div className="beforeInput RELATIVE_3_PH3">R-3 Phone 3:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_3_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_3_PH3}
          />
        </div>
        <div className="five">
          <div className="beforeInput RELATIVE_4">Relative 4:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_4"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4}
          />
          <div className="beforeInput RELATIVE_4_ADDY">R-4 Address:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_4_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_ADDY}
          />
          <div className="beforeInput RELATIVE_4_PH1">R-4 Phone 1:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_4_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH1}
          />
          <div className="beforeInput RELATIVE_4_PH2">R-4 Phone 2:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_4_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH2}
          />
          <div className="beforeInput RELATIVE_4_PH3">R-4 Phone 3:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_4_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_4_PH3}
          />
        </div>
        <div className="five">
          <div className="beforeInput RELATIVE_5">Relative 5:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_5"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5}
          />
          <div className="beforeInput RELATIVE_5_ADDY">R-5 Address:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_5_ADDY"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_ADDY}
          />
          <div className="beforeInput RELATIVE_5_PH1">R-5 Phone 1:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_5_PH1"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH1}
          />
          <div className="beforeInput RELATIVE_5_PH2">R-5 Phone 2:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_5_PH2"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH2}
          />
          <div className="beforeInput RELATIVE_5_PH3">R-5 Phone 3:</div>
          <input
            readOnly
            type="text"
            className="RELATIVE_5_PH3"
            onClick={handleClick}
            defaultValue={object.RELATIVE_5_PH3}
          />
        </div>
        <div className="four">
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
        </div>
        <div className="four">
          <div className="beforeInput DATE_LAST_PAYMENT">
            Date Last Payment:
          </div>
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
        <div className="four">
          <div className="beforeInput PDF">PDF:</div>
          <input
            readOnly
            type="text"
            className="PDF"
            onClick={handleClick}
            defaultValue={object.PDF}
          />
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
          <div className="beforeInput SSN">SSN:</div>
          <input
            readOnly
            type="text"
            className="SSN"
            onClick={handleClick}
            defaultValue={object.SSN}
          />
          <div className="beforeInput DOB">DOB:</div>
          <input
            readOnly
            type="text"
            className="DOB"
            onClick={handleClick}
            defaultValue={object.DOB}
          />
        </div>
        <div className="four">
          <div className="beforeInput ATTORNEY">Attorney:</div>
          <input
            readOnly
            type="text"
            className="ATTORNEY"
            onClick={handleClick}
            defaultValue={object.ATTORNEY}
          />
          <div className="beforeInput EMPLOYER">Employer:</div>
          <input
            readOnly
            type="text"
            className="EMPLOYER"
            onClick={handleClick}
            defaultValue={object.EMPLOYER}
          />
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
        </div>
        <div className="two">
          <div className="beforeInput CALL_DISPOSITIONS">
            Call Dispositions:
          </div>
          <input
            readOnly
            type="text"
            className="CALL_DISPOSITIONS"
            onClick={handleClick}
            defaultValue={object.CALL_DISPOSITIONS}
          />
        </div>
      </div>
    </div>
  );
}

export default TestAccount;
