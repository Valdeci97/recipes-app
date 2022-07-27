import PropTypes from 'prop-types';
import React from 'react';

import * as S from '../styles/recipeCard';

export default function RecipeCard({ recipe, index, place }) {
  const recipeType = recipe.idDrink ? 'Drink' : 'Meal'; // Detecta se está recebendo drinks ou comidas
  const linkReference = recipe.idDrink ? 'bebidas' : 'comidas'; // Detecta se está recebendo drinks ou comidas
  const name = recipe[`str${recipeType}`]; // Acessa a propriedade de acordo com o tipo de receita recebido
  const image = recipe[`str${recipeType}Thumb`];
  const id = recipe[`id${recipeType}`];
  return (
    <S.Link
      href={ `/${linkReference}/${id}` }
      data-testid={ `${index}-recipe-card` }
    >
      <S.RecipeImage
        src={ image }
        alt={ `${recipe.strArea} meal` }
        data-testid={ `${index}-card-img` }
      />
      <S.Description
        data-testid={
          place === 'main' ? `${index}-card-name` : `${index}-recomendation-title`
        }
      >
        {name}
      </S.Description>
    </S.Link>
  );
}

RecipeCard.propTypes = {
  place: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    idDrink: PropTypes.string,
    strArea: PropTypes.string,
  }).isRequired,
};
