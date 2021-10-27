import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { product, setProductToCart } = this.props;
    const { id,
      title,
      price,
      thumbnail } = product;
    return (
      <div className={ id } data-testid="product">
        <Link to={ `details/${id}` } data-testid="product-detail-link">
          <p>{title}</p>
          <img src={ thumbnail } alt={ title } />
        </Link>
        <p>{price}</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => {
            setProductToCart(id, title, thumbnail, price);
          } }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
  }),
  setProductToCart: PropTypes.func.isRequired,
};

Card.defaultProps = {
  product: {
    id: '',
    title: '',
    thumbnail: '',
    price: '',
  },
};
