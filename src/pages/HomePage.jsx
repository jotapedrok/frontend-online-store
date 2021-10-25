import React from 'react';

class HomePages extends React.Component {
  render() {
    return (
      <section
        className="homePage-main"
      >
        <label
          htmlFor="homePageInput"
        >
          <input
            type="text"
            id="homePageInput"
            placeholder="Pesquisar..."
          />
        </label>
        <button
          type="button"
        >
          Pesquisar
        </button>
        <h2
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </section>
    );
  }
}

export default HomePages;
