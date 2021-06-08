import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import OldNews from './Components/OldNews/OldNews';
import Other from './Components/Other/Other';
import TopNews from './Components/TopNews/TopNews';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topNews">
            <TopNews></TopNews>
          </Route>
          <Route path="/oldNews">
            <OldNews></OldNews>
          </Route>
          <Route path="/other">
            <Other></Other>
          </Route>

        </Switch>
      </Router>


    </div>
  );
}

export default App;
