import React from "react";
import allAccounts from "./allAccounts";

import { Link } from "react-router-dom";

function AccountsList() {
  return (
    <div className="accountsPage">
      <div className="accountFromList otherBg">
        <div>id</div>
        <div>TLO_ADDRESS</div>
        <div>TLO_CITY</div>
        <div>TLO_STATE</div>
        <div>TLO_PHONE</div>
        <div>ACCOUNT_NUMBER</div>
      </div>
      {allAccounts.map((account) => (
        <div key={account.id}>
          <Link className="accountFromList" to={`/accounts/${account.id}`}>
            <div>{account.id}</div>
            <div>{account.TLO_ADDRESS}</div>
            <div>{account.TLO_CITY}</div>
            <div>{account.TLO_STATE}</div>
            <div>{account.TLO_PHONE}</div>
            <div>{account.ACCOUNT_NUMBER}</div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default AccountsList;
