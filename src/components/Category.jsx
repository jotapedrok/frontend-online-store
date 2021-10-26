import React from 'react';
import PropTypes from 'prop-types';
// import { getCategories } from '../services/api';

class Category extends React.Component {
  componentDidMount() {
    const { setCategories } = this.props;
    setCategories();
  }

  render() {
    const { categories, setProductsFromCategory } = this.props;
    return (
      <div>
        { categories.map((category) => (
          <label
            htmlFor={ category.id }
            key={ category.id }
          >
            <input
              data-testid="category"
              name="selectedCategory"
              type="radio"
              value={ category.id }
              onClick={ setProductsFromCategory }
            />
            {category.name}
          </label>
        ))}
      </div>
    );
  }
}

Category.propTypes = {
  setCategories: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  setProductsFromCategory: PropTypes.func.isRequired,
};

export default Category;
