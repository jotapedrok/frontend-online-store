import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        title: '',
        price: '',
        thumbnail: '',
        id: '',
      },
    };
  }

  componentDidMount() {
    this.getItensFromSearch();
  }

  getItensFromSearch = async () => {
    const { category, query, match } = this.props;
    const { id } = match.params;
    const data = await getProductsFromCategoryAndQuery(category, query);
    const result = await data.results;
    const prod = result.find((iten) => iten.id === id);
    this.setState({ product: prod });
  }

  render() {
    const { product } = this.state;
    const { id, thumbnail, title, price } = product;
    return (
      <div id={ id }>
        <h1 data-testid="product-detail-name">{title}</h1>
        <h3>{price}</h3>
        <img src={ thumbnail } alt={ title } />
        <p>DETALHES</p>
      </div>
    );
  }
}

Details.propTypes = {
  category: PropTypes.string.isRequired,
  match: PropTypes.shape(
    {
      params: {
        id: PropTypes.string,
      },
    },
  ).isRequired,
  query: PropTypes.string.isRequired,
};
