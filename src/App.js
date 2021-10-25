import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';
import Cart from './pages/Cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={ HomePage }
          />
          <Route
            exact
            path="/cart"
            component={ Cart }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
