import PropTypes from 'prop-types';
import React from 'react';

import * as S from '../styles/categoryButtons';

export default function CategoryButtons({ handleFilterChange, categories, filter }) {
  return (// Componentização dos botões de categorias
    <S.Container>
      <S.CategoryButton
        type="button"
        id="All"
        onClick={ ({ target }) => handleFilterChange(target.id) }
        filter={ filter === 'All' }
      >
        All
      </S.CategoryButton>
      { categories.map(({ strCategory }, index) => ( // Mapeando os botões de categoria
        <S.CategoryButton
          key={ `${strCategory}${index}` }
          type="button"
          id={ strCategory }
          onClick={ ({ target }) => handleFilterChange(target.id) }
          filter={ filter === strCategory }
        >
          { strCategory }
        </S.CategoryButton>
      )) }
    </S.Container>
  );
}

CategoryButtons.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    map: PropTypes.func,
  })).isRequired,
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
