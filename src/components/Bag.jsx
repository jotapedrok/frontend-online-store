import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Carrinho from '../Carrinho.svg';

export default class Bag extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/cart">
          <img src={ Carrinho } alt="carrinho" />
        </Link>
        <p
          data-testid="shopping-cart-size"
        >
          {cart.reduce((acc, curr) => (acc + curr.quantity), 0)}
        </p>
      </div>
    );
  }
}

Bag.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object).isRequired,
};
