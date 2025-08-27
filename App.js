import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        <Route path="/services" render={() => <h1>Services</h1>} />
        <Route path="/contact" render={() => <h1>Contact</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
