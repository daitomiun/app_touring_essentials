import React from "react";
import "./App.css";
import Home from "./components/home/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CountryDetails from "./components/countryDetails/CountryDetails.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          component={Home}
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/details"
          component={CountryDetails}
          element={
            <>
              <CountryDetails />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
