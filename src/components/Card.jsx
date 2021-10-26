import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Card extends Component {
  render() {
    const { product } = this.props;
    const { id,
      title,
      price,
      thumbnail } = product;
    return (
      <Link to={ `details/${id}` } data-testid="product-detail-link">
        <div className={ id } data-testid="product">
          <p>{title}</p>
          <p>{price}</p>
          <img src={ thumbnail } alt={ title } />
        </div>
      </Link>
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
};

Card.defaultProps = {
  product: {
    id: '',
    title: '',
    thumbnail: '',
    price: '',
  },
};
