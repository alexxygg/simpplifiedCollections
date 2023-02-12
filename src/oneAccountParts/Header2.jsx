import React from "react";
import { Link } from "react-router-dom";
function Header2({ object }) {
  return (
    <div className="header2">
      <Link className="a" to="/home">
        <img src="/homeIcon.png" alt="" />
      </Link>
      <div>Help</div>
      <div>1310 / 4091 worked</div>
      <a className="a" href={`/accounts/${object.id - 1}`}>
        <img src="/previous.png" alt="" />
      </a>
      <a className="a" href={`/accounts/${object.id + 1}`}>
        <img src="/next.png" alt="" />
      </a>
      <a className="a" href={`/accounts/${object.id + 2}`}>
        <img src="/skip.png" alt="" />
      </a>
      <div>Account Worklist </div>
      <div>Details</div>
      <div>Pause Current Worklist</div>
      <div>Delete Current Worklist</div>
      <div>f</div>
    </div>
  );
}

export default Header2;
