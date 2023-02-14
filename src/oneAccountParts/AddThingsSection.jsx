import React from "react";
import GoodAddresses from "./GoodAddresses";
import GoodNumbers from "./GoodNumbers";

function AddThingsSection({ object }) {
  return (
    <div className="allThingsSection">
      <GoodAddresses object={object} />
      <GoodNumbers object={object} />
    </div>
  );
}

export default AddThingsSection;
