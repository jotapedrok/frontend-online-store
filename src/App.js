import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import './App.css';
import Cart from './pages/Cart';
import Category from './components/Category';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      products: [],
      query: '',
      category: '',
    };
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({ [name]: value });
  }

  setCategories = async () => {
    const data = await getCategories();
    this.setState({ categories: data });
  }

  onClickSearchBtn = async () => {
    const { query, category } = this.state;
    const data = await getProductsFromCategoryAndQuery(category, query);
    const result = await data.results;
    this.setState({ products: result });
  }

  setProductsFromCategory = async (event) => {
    this.handleChange(event);
    const { target } = event;
    const category = target.value;
    const { query } = this.state;
    const data = await getProductsFromCategoryAndQuery(category, query);
    const result = await data.results;
    this.setState({ products: result });
  }

  render() {
    const { categories, products, category, query } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Category
            setCategories={ this.setCategories }
            categories={ categories }
            setProductsFromCategory={ this.setProductsFromCategory }
            handleChange={ this.handleChange }
          />
          <Switch>
            <Route
              exact
              path="/"
              render={ () => (<HomePage
                products={ products }
                handleChange={ this.handleChange }
                onClickSearchBtn={ this.onClickSearchBtn }
              />) }
            />
            <Route
              exact
              path="/cart"
              component={ Cart }
            />
            <Route
              exact
              path="/details/:id"
              render={ (props) => (<Details
                products={ products }
                category={ category }
                query={ query }
                { ...props }
              />) }
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
