import "./App.css";

import Account from "./Account";
import AccountsList from "./AccountsList";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
//react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/accounts" element={<AccountsList />} />
          <Route path="/account/:id" element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
