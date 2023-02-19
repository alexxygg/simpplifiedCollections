import React from "react";
import allAccounts from "../allAccounts";
function Header2({ object }) {
  return (
    <div className="header2">
      <a className="a" href="/">
        <img src="/homeIcon.png" alt="" />
      </a>
      <a className="a" href={`/accounts/${object.id - 1}`}>
        <img src="/previous.png" title="Previous Account" />
      </a>{" "}
      <div>
        Account {object.id} of {allAccounts.length} &nbsp;
      </div>
      <a className="a" href={`/accounts/${object.id + 1}`}>
        <img src="/next.png" title="Next Account" />
      </a>
      {/* <a className="a" href={`/accounts/${object.id + 1}`}>
        <img src="/skip.png" title="Skip to Next Account" />
      </a> */}
      <a className="a" href={`/accountsList`}>
        <img src="/worklistAllAccounts.png" title="Current worklist" />{" "}
      </a>
      <a className="a" href={`/accountsList`}>
        <img src="/changeWorklist.png" title="Change Worklist" />{" "}
      </a>
      {/* <a className="a" href={`/accountsList`}>
        <img src="/worklistAllAccounts.png" title="Pause Current Worklist" />{" "}
      </a>
      <a className="a" href={`/accountsList`}>
        <img src="/worklistAllAccounts.png" title="Delete Current Worklist" />{" "}
      </a>{" "} */}
      <div className="help-container">
        Help
        <div className="help-dropdown">
          <a target="_blank" href="https://example.com/videos">
            Videos
          </a>
          <a target="_blank" href="https://example.com/manuals">
            Manuals
          </a>
          <a target="_blank" href="https://example.com/manuals">
            Manuals
          </a>
          <a target="_blank" href="https://example.com/videos">
            Videos
          </a>
          <a target="_blank" href="https://example.com/manuals">
            Manuals
          </a>
          <a target="_blank" href="https://example.com/videos">
            Videos
          </a>
        </div>
      </div>{" "}
    </div>
  );
}

export default Header2;
