import React from "react";
import TestAccount from "./oneAccountParts/TestAccount";
import Header from "./oneAccountParts/Header";
import Header2 from "./oneAccountParts/Header2";
import Notes from "./oneAccountParts/Notes";
import SearchBar from "./SearchBar";
import Tabs from "./oneAccountParts/Tabs";
import AddThingsSection from "./oneAccountParts/AddThingsSection";

function Accounts({ object }) {
  return (
    <div>
      <SearchBar />
      <Tabs object={object} />
      <Header object={object} />
      <Header2 object={object} />
      <TestAccount object={object} />
      <AddThingsSection object={object} />
      <Notes object={object} />
    </div>
  );
}
export default Accounts;
