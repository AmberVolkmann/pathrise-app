import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Routes,
  Redirect,
  Switch,
} from 'react-router-dom';
import {connect} from 'react-redux';
import './App.css';
import AllCompanies from '../AllCompanies/AllCompanies';
import CompanyCard from '../CompanyCard/CompanyCard';

class App extends Component {

  render() {
    return (
      <Routes>
      <Router>
        <div>
          {/* <Switch> */}
            <Route
              exact
              path="/about"
              component={AllCompanies}
            />
          {/* </Switch> */}
        </div>
      </Router>
      </Routes>
  )}
}

export default connect()(App);
