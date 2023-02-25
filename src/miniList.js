import React from "react";

function miniList(searchResults, showNoMatches) {
  return (
    <div>
      {" "}
      {searchResults ? (
        searchResults.length > 0 ? (
          <div className="results">
            <div className="accountFromResults otherBg goldColor">
              <div>id</div>
              <div>Account #</div>
              <div>Name</div>
              <div>Phone #</div>
              <div>SSN</div>
              <div>DOB</div>
            </div>
            {searchResults.map((result) => (
              <Link
                key={result.id}
                className="accountFromResults"
                to={`/accounts/${result.id}`}
              >
                <div>{result.id}</div>
                <div>{result.ACCOUNT_NUMBER}</div>
                <div>{result.NAME}</div>
                <div>{result.TLO_PHONE}</div>
                <div>{result.SSN}</div>
                <div>{result.DOB}</div>
              </Link>
            ))}
            <button onClick={clearSearch} className="clearSearch">
              Clear Search
            </button>
          </div>
        ) : showNoMatches ? (
          <div>No matches found.</div>
        ) : null
      ) : null}
    </div>
  );
}

export default miniList;
