import React from 'react';
import PropTypes from 'prop-types';
// import { getCategories } from '../services/api';

class Category extends React.Component {
  componentDidMount() {
    const { setCategories } = this.props;
    setCategories();
  }

  render() {
    const { categories } = this.props;
    return (
      <div>
        { categories.map((category) => (
          <label
            htmlFor={ category.id }
            key={ category.id }
          >
            <input
              data-testid="category"
              name="category"
              type="radio"
              value={ category.name }
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
};

export default Category;
