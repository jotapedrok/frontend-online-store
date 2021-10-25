import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { getCategories } from './services/api';
import './App.css';
import Cart from './pages/Cart';
import Category from './components/Category';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  setCategories = async () => {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { categories } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Category
            setCategories={ this.setCategories }
            categories={ categories }
          />
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
}

export default App;
