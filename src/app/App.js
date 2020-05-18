import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePageContainer from "./routes/home/HomePageContainer";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePageContainer} />
    </Router>
  );
}

export default App;
