import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Admin from './pages/Admin';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        {/* Other routes can be defined here */}
      </Switch>
    </Router>
  );
};

export default App;