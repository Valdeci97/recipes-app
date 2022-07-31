import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import * as S from '../styles/favoriteRecipes';

const copy = require('clipboard-copy');

export default function FavoriteRecipeCard({ recipe, index, removeFavorite }) {
  function copyLink(link) {
    copy(link);
    window.alert('Link copiado com sucesso!');
  }

  const {
    type,
    id,
    area,
    image,
    name,
  } = recipe;
  const link = window.location.href.split('/');
  link[3] = `${type}s`;
  link[4] = id; // Tratamento do link para o botão de compartilhamento
  return (
    <S.Container // Container do card
      data-testid={ `${index}-recipe-card` }
    >
      <Link to={ `/${type}s/${id}` }>
        <S.Image
          src={ image }
          alt={ `${area} meal` }
          data-testid={ `${index}-horizontal-image` }
        />
      </Link>
      <div>
        <div>
          <S.Link href={ `/${type}s/${id}` }>
            <h6 data-testid={ `${index}-horizontal-name` }>
              {name}
            </h6>
          </S.Link>
        </div>
        <S.ButtonContainer>
          <S.ShareButton
            type="button"
            onClick={ () => copyLink(link.join('/')) }
          >
            <img
              data-testid={ `${index}-horizontal-share-btn` }
              src={ shareIcon }
              alt="Share Icon"
            />
          </S.ShareButton>
          <S.SaveButton
            type="button"
            onClick={ () => removeFavorite(index) }
          >
            <img
              data-testid={ `${index}-horizontal-favorite-btn` }
              src={ blackHeartIcon }
              alt="Favorite Icon"
            />
          </S.SaveButton>
        </S.ButtonContainer>
      </div>
    </S.Container>
  );
}

FavoriteRecipeCard.propTypes = {
  index: PropTypes.number.isRequired,
  recipe: PropTypes.shape({
    alcoholicOrNot: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  removeFavorite: PropTypes.func.isRequired,
};
