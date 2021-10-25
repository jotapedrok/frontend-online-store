import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';
import Cart from './pages/Cart';
import Category from './components/Category';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      searchInput: '',
      products: {
        results: [],
      },
      selectedCategory: '',
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  getProducts = async (category = undefined, query = undefined) => {
    const data = await getProductsFromCategoryAndQuery(category, query);
    this.setState({ products: data });
  }

  setCategories = async () => {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  render() {
    const { categories,
      searchInput,
      products,
      selectedCategory } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Category
            setCategories={ this.setCategories }
            categories={ categories }
            handleChange={ this.handleChange }
          />
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (<HomePage
                handleChange={ this.handleChange }
                searchInput={ searchInput }
                products={ products }
                getProducts={ this.getProducts }
                selectedCategory={ selectedCategory }
              />) }
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
