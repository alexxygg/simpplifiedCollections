import React from "react";

function Header({ object }) {
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
        <div>GUAS</div>
        <div>OTAY34</div>
      </div>
    </div>
  );
}

export default Header;
