import React from "react";
import { Link } from "react-router-dom";
function Header2({ data }) {
  return (
    <div className="header2">
      <form action="#">
        <input type="text" placeholder="xxx-xxx-xxxx" />
        <label htmlFor="searchBy">Search by:</label>
        <select id="searchBy" name="searchBy">
          <option value="option1">Acct Number</option>
          <option value="option2">Phone Number</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
        </select>
        <button type="submit" value="Submit">
          Search
        </button>
      </form>
      <Link className="a" to="/home">
        <img src="/homeIcon.png" alt="" />
      </Link>
      <div>Help</div>
      <div>1310 / 4091 worked</div>
      <a className="a" href={`/${data - 1}`}>
        <img src="/previous.png" alt="" />
      </a>
      <a className="a" href={`/${data + 1}`}>
        <img src="/next.png" alt="" />
      </a>
      <a className="a" href="">
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
