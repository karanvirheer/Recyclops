import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import HomePage from './components/pages/HomePage'
import Demo from './components/pages/Demo'
import AboutPage from './components/pages/AboutPage'

// COLOURS: 

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/demo" component={Demo} exact />
          <Route path="/about" component={AboutPage} exact />
        </Switch>
      </div>
    </Router>

  );
}

export default App;
