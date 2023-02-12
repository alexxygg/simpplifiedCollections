import React from "react";
import Account from "./Account";
import allAccounts from "./allAccounts";

import OtherLinksHeader from "./oneAccountParts/OtherLinksHeader";

function Accounts() {
  return (
    <ul>
      <OtherLinksHeader />
      {allAccounts.map((account) => (
        <li key={account.id}>
          <Account objectId={account} />
        </li>
      ))}
    </ul>
  );
}
export default Accounts;
