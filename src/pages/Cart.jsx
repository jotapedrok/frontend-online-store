import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

  addButton = ({ target }) => {
    const id = target.className;
    const { cart } = this.state;
    const prod = cart.find((product) => id === product.id);
    prod.quantity += 1;
    this.setState({ cart });
    localStorage.setItem('Cart', JSON.stringify(cart));
  }

  decreaseButton = ({ target }) => {
    const id = target.className;
    const { cart } = this.state;
    const prod = cart.find((product) => id === product.id);
    if (prod.quantity > 1) {
      prod.quantity -= 1;
      this.setState({ cart });
      localStorage.setItem('Cart', JSON.stringify(cart));
    } else {
      const newCart = cart.filter((element) => element !== prod);
      this.setState({ cart: newCart });
      localStorage.setItem('Cart', JSON.stringify(newCart));
    }
  }

  removeItem = ({ target }) => {
    const id = target.className;
    const { cart } = this.state;
    const prod = cart.find((product) => id === product.id);
    const newCart = cart.filter((element) => element !== prod);
    this.setState({ cart: newCart });
    localStorage.setItem('Cart', JSON.stringify(newCart));
  }

  renderCart = () => {
    console.log('entrou');
    const { cart } = this.state;
    if (cart.length > 0) {
      return (
        <div>
          {
            cart.map((prod) => {
              const { id, thumbnail, price, title, quantity } = prod;
              return (
                <div key={ id }>
                  <h3
                    data-testid="shopping-cart-product-name"
                  >
                    { title }

                  </h3>
                  <img src={ thumbnail } alt={ title } />
                  <h5>{ price }</h5>
                  <button
                    type="button"
                    className={ id }
                    onClick={ this.decreaseButton }
                    data-testid="product-decrease-quantity"
                  >
                    -

                  </button>
                  <label htmlFor={ id }>
                    <p
                      id={ id }
                      data-testid="shopping-cart-product-quantity"
                    >
                      { quantity }

                    </p>
                  </label>
                  <button
                    type="button"
                    className={ id }
                    onClick={ this.addButton }
                    data-testid="product-increase-quantity"
                  >
                    +

                  </button>
                  <br />
                  <br />
                  <button
                    type="button"
                    className={ id }
                    onClick={ this.removeItem }
                  >
                    X
                  </button>
                </div>
              );
            })
          }
          <Link to="/checkout">
            <button
              type="button"
              data-testid="checkout-products"
            >
              Finalizar Compra
            </button>
          </Link>

        </div>
      );
    }
    return (
      <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
    );
  }

  render() {
    const { cart } = this.state;
    return (
      <div>
        <h3>ITENS NO CARRINHO:</h3>
        <h3>
          {cart.length}

        </h3>
        { this.renderCart() }
      </div>
    );
  }
}
