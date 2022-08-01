import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import * as S from '../styles/doneRecipes';

const copy = require('clipboard-copy');

export default function DoneRecipeCard({ recipe, index }) {
  function showIndividualToast(link) {
    copy(link);
  }

  const {
    type,
    id,
    category,
    alcoholicOrNot,
    area,
    doneDate,
    image,
    name,
    tags,
  } = recipe;
  const link = window.location.href.split('/');
  link[3] = `${type}s`;
  link[4] = id; // Tratamento do link para o botão de compartilhamento
  return (
    <S.Container data-testid={ `${index}-recipe-card` }>
      <S.Link href={ `/${type}s/${id}` }>
        <S.Image
          src={ image }
          alt={ `${area} meal` }
          data-testid={ `${index}-horizontal-image` }
        />
      </S.Link>
      <S.doneRecipeInfo>
        <S.ShareContainer>
          <span className="recipe-type" data-testid={ `${index}-horizontal-top-text` }>
            { `${alcoholicOrNot.length > 0 ? alcoholicOrNot : area} - ${category}` }
          </span>
          <S.ShareButton
            type="button"
            onClick={ () => showIndividualToast(link.join('/')) }
            style={ { justifySelf: 'flex-end' } }
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="Share Icon"
            />
          </S.ShareButton>
        </S.ShareContainer>
        <S.Link href={ `/${type}s/${id}` }>
          <h6
            data-testid={ `${index}-horizontal-name` }
          >
            {name}
          </h6>
        </S.Link>
        <span
          data-testid={ `${index}-horizontal-done-date` }
          style={ { textAlign: 'center' } }
        >
          { `Feita em: ${doneDate}` }
        </span>
        <div>
          Tags:&nbsp;
          { tags.map((tag) => (
            <span
              key={ tag }
              data-testid={ `0-${tag}-horizontal-tag` }
            >
              &nbsp;{ tag }
            </span>
          )) }
        </div>
      </S.doneRecipeInfo>
    </S.Container>
  );
}

DoneRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    alcoholicOrNot: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    doneDate: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
