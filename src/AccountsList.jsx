import React from "react";
import allAccounts from "./allAccounts";

import { Link } from "react-router-dom";
import { globalUser } from "./Login";
function AccountsList() {
  const ifUser = (globalUser) => {
    return globalUser ? <div>{globalUser.USERNAME}</div> : null;
  };

  return (
    <div id="accountsPage">
      <div className="accountsPage">
        <div>{ifUser(globalUser)}</div>
        <div className="accountFromResults otherBg goldColor">
          <div>id</div>
          <div>Account #</div>
          <div>Name</div>
          <div>Phone #</div>
          <div>SSN</div>
          <div>DOB</div>
        </div>
        {allAccounts.map((result) => (
          <Link
            key={result.id}
            className="accountFromResults"
            to={`/accounts/${result.id}`}
          >
            <div>{result.id}</div>
            <div>{result.ACCOUNT_NUMBER}</div>
            <div>{result.NAME}</div>
            <div>{result.TLO_PHONE}</div>
            <div>{result.SSN}</div>
            <div>{result.DOB}</div>
          </Link>
        ))}
        <div className="goldColor">
          Displaying accounts 1 - {allAccounts.length}
        </div>
        <div className="goldColor"> (all accounts)</div>
      </div>
    </div>
  );
}

export default AccountsList;
