import "./App.css";

import Accounts from "./Accounts";
import AccountsList from "./AccountsList";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

import allAccounts from "./allAccounts";
//react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/home" element={<HomePage />} />
          {allAccounts.map((object) => (
            <Route
              key={object.id}
              path={`/accounts/${object.id}`}
              element={<Accounts key={object.id} object={object} />}
            />
          ))}{" "}
          <Route path="/accountsList" element={<AccountsList />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
