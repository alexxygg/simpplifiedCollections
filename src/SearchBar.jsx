import React, { useState } from "react";

import allAccounts from "./allAccounts";
import { Link } from "react-router-dom";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchBy, setSearchBy] = useState("id");
  const [searchResults, setSearchResults] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Filter the list of objects based on the selected search option and search term
    let results = allAccounts.filter((object) => {
      switch (searchBy) {
        case "id":
          return object.id.toString().includes(searchTerm);
        case "ACCOUNT_NUMBER":
          return object.ACCOUNT_NUMBER.toString().includes(searchTerm);
        case "CLIENT_CLAIM_NUMBER":
          return object.CLIENT_CLAIM_NUMBER.toString().includes(searchTerm);
        case "TLO_PHONE":
          return object.TLO_PHONE.toString().includes(searchTerm);
        case "SSN":
          return object.SSN.toString().includes(searchTerm);
        case "DOB":
          return object.DOB.toString().includes(searchTerm);
        default:
          return [];
      }
    });

    setSearchResults(results);
  };

  return (
    <form className="searchBarDiv" action="#" onSubmit={handleSubmit}>
      <div className="searchBy">
        <label htmlFor="searchBy">Search by:</label>
        <select
          id="searchBy"
          name="searchBy"
          value={searchBy}
          onChange={(event) => setSearchBy(event.target.value)}
        >
          <option value="id">id</option>
          <option value="ACCOUNT_NUMBER">Account #</option>
          <option value="CLIENT_CLAIM_NUMBER">Client Claim #</option>
          <option value="TLO_PHONE">TLO Phone #</option>
          <option value="SSN">SSN</option>
          <option value="DOB">DOB</option>
        </select>
      </div>{" "}
      <input
        className="searchBar"
        type="text"
        placeholder=" id, Account #, Phone #, SSN, DOB..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <button className="searchBtn" type="submit" value="Submit">
        Search
      </button>
      {searchResults ? (
        searchResults.length > 0 ? (
          <div className="results">
            <div className="accountFromList otherBg">
              <div>id</div>
              <div>Account #</div>
              <div>Client Claim #</div>
              <div>TLO Phone #</div>
              <div>SSN</div>
              <div>DOB</div>
            </div>
            {searchResults.map((result) => (
              <Link
                key={result.id}
                className="accountFromList"
                to={`/accounts/${result.id}`}
              >
                <div>{result.id}</div>
                <div>{result.ACCOUNT_NUMBER}</div>
                <div>{result.CLIENT_CLAIM_NUMBER}</div>
                <div>{result.TLO_PHONE}</div>
                <div>{result.SSN}</div>
                <div>{result.DOB}</div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="results">No matches found.</div>
        )
      ) : (
        <div className="results">*Search to retrieve all matches.*</div>
      )}
    </form>
  );
};

export default SearchBar;
