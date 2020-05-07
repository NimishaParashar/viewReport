import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AllProfile from "./AllProfile";
import ViewProfile from "./ViewProfile";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>All Profiles</h2>
      </div>

      <Link to="/all_profile">Profiles</Link>
      {/* <Link to="/view_profile/:id">View-Profile</Link> */}

      <Route path="/all_profile" component={AllProfile} />
      <Route path="/profile/:id" component={ViewProfile} />
    </BrowserRouter>
  );
}

export default App;
