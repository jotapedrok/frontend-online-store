import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  componentDidMount() {
    this.getCartFromLocalStorage();
  }

  getCartFromLocalStorage() {
    const cart = JSON.parse(localStorage.getItem('Cart'));
    if (cart) {
      this.setState({ cart });
    }
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <h3
          data-testid="shopping-cart-product-quantity"
        >
          {`ITENS NO CARRINHO: ${cart.length}`}

        </h3>
        { cart.length > 0 ? (
          cart.map((prod) => {
            const { id, thumbnail, price, title } = prod;
            return (
              <div key={ id }>
                <h3
                  data-testid="shopping-cart-product-name"
                >
                  { title }

                </h3>
                <img src={ thumbnail } alt={ title } />
                <h5>{ price }</h5>
              </div>
            );
          })
        )
          : <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>}
      </div>
    );
  }
}
