import React from "react";

function Header({ data }) {
  return (
    <div className="header">
      <div className="logo">
        <img src="/simplicityCollect.jpg" alt="" />
      </div>
      <div>
        <div>{data.TLO_ADDRESS}</div>
        <div>{data.id}</div>
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
