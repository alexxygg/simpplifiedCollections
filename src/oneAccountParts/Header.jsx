import React from "react";
import { globalUser } from "../Login";

function Header({ object }) {
  const ifUser = (globalUser) => {
    return globalUser ? <div>{globalUser.USERNAME}</div> : null;
  };
  return (
    <div className="header">
      <div className="logo">DebtDynamic</div>
      <div>
        <div>{object.TLO_ADDRESS}</div>
        <div>
          ID: {object.id} ACCT #: {object.ACCOUNT_NUMBER}
        </div>
        <div className="goldColor">{object.NAME}</div>
        <div>Status: General New Import Last Updated: 2/7/2023</div>
      </div>
      <div>
        <div>USER:</div>
        {ifUser(globalUser)}
      </div>
    </div>
  );
}

export default Header;
