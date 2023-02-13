import React from "react";
import TestAccount from "./oneAccountParts/TestAccount";
import Header from "./oneAccountParts/Header";
import Header2 from "./oneAccountParts/Header2";
import Header3 from "./oneAccountParts/Header3";
import Notes from "./oneAccountParts/Notes";
import SearchBar from "./SearchBar";

function Accounts({ object }) {
  return (
    <div>
      <SearchBar />
      <Header2 object={object} />
      <Header3 object={object} />
      <Header object={object} />
      <TestAccount object={object} />
      <Notes object={object} />
    </div>
  );
}
export default Accounts;
