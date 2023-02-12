import React from "react";
import TestAccount from "./oneAccountParts/TestAccount";
import Header from "./oneAccountParts/Header";
import Header2 from "./oneAccountParts/Header2";
import Header3 from "./oneAccountParts/Header3";
import Notes from "./oneAccountParts/Notes";
import OtherLinksHeader from "./oneAccountParts/OtherLinksHeader";
import { useParams } from "react-router-dom";

function Account({ objectId }) {
  let { id } = useParams();

  return (
    <div>
      <OtherLinksHeader data={objectId} />
      <Header data={objectId} />
      <Header2 data={objectId} />
      <Header3 data={objectId} />
      <TestAccount data={objectId} />
      <Notes data={objectId} />
    </div>
  );
}

export default Account;
