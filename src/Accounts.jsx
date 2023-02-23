import React, { useState } from "react";
import TestAccount from "./oneAccountParts/TestAccount";
import Header from "./oneAccountParts/Header";
import Header2 from "./oneAccountParts/Header2";
import Notes from "./oneAccountParts/Notes";
import SearchBar from "./SearchBar";
import Tabs from "./oneAccountParts/Tabs";
import AddThingsSection from "./oneAccountParts/AddThingsSection";

function Accounts({ object }) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleCopyClick = () => {
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 2000);
  };
  return (
    <div>
      <SearchBar />
      <Tabs object={object} />
      <Header object={object} />
      <Header2 object={object} />
      <TestAccount object={object} handleCopyClick={handleCopyClick} />
      <AddThingsSection object={object} handleCopyClick={handleCopyClick} />
      <Notes object={object} />
      <div id="popUp" className={showConfirmation ? "show" : ""}>
        Copied!
      </div>
    </div>
  );
}
export default Accounts;
