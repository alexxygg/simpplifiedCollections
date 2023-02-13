import "./App.css";

import Accounts from "./Accounts";
import AccountsList from "./AccountsList";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";

import allAccounts from "./allAccounts";
//react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./NotFound";
import Footer from "./Footer";
import HeaderOtherLinks from "./HeaderOtherLinks";

function App() {
  return (
    <>
      <HeaderOtherLinks />
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
            ))}
            <Route path="/accountsList" element={<AccountsList />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
