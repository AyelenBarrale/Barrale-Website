import React from "react";
import "../src/App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Views/Home/Home";
import WorkDetail from "./Views/WorkDetail/WorkDetail";
import NoFound from "./Views/NoFound/NoFound";

const App = () => {
  return (
    <Router>
      <div className='main-container'>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/work/:id'>
            <WorkDetail />
          </Route>
          <Route path='*'>
            <NoFound />
          </Route>
        </Switch>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
