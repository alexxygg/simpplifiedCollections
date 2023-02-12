import React from "react";
import { Link } from "react-router-dom";

function OtherLinksHeader() {
  return (
    <div className="otherSites">
      <Link to="/home">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/">Account</Link>
      <Link to="/accounts">Accounts</Link>
    </div>
  );
}

export default OtherLinksHeader;