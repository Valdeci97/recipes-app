import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import shareIcon from '../images/shareIcon.svg';
import fetchFoodAPI from '../helpers/FetchFoodApi';
import ContextAPI from '../context/ContextAPI';
import favorite from '../images/whiteHeartIcon.svg';
import favoriteChecked from '../images/blackHeartIcon.svg';

import * as S from '../styles/recipes';

export default function FoodsRecipes({ match, location }) {
  const {
    ingredientsAndMeasures, handleStartRecipe, ingredientsToNumbersArray,
    buttonTextHandler, shareRecipe, showToast, handleFavorite,
  } = useContext(ContextAPI);
  const [isNotDone, setIsNotDone] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [foodSelected, setFoodSelected] = useState();
  const urlID = match.params.id;
  const pathName = location.pathname;
  const type = pathName.split('/')[1] === 'comidas' ? 'meals' : 'cocktails';
  const buttonVisible = { opacity: isNotDone ? 1 : 0 };

  function isRecipeFavorite(path) { // verifica se e favorita
    if (localStorage.getItem('favoriteRecipes') !== null) {
      const isItFavorite = localStorage
        .getItem('favoriteRecipes').includes(path.split('/')[2]);
      if (isItFavorite) {
        return setIsFavorite(favoriteChecked);
      }
    }
    return setIsFavorite(favorite);
  }

  function isRecipeNotDone(path) { // verifica se receita foi finalizada
    if (localStorage.getItem('doneRecipes') !== null) {
      const isItDone = localStorage.getItem('doneRecipes').includes(path.split('/')[2]);
      if (isItDone) {
        return false;
      }
    }
    return true;
  }

  useEffect(() => {
    fetchFoodAPI(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${urlID}`)
      .then((response) => setFoodSelected(response.meals));
    setIsNotDone(isRecipeNotDone(pathName));
    isRecipeFavorite(pathName);
  }, [urlID, pathName]);

  return (
    <>
      { foodSelected ? (
        <S.Container>
          <S.RecipeImage
            src={ foodSelected[0].strMealThumb }
            alt={ foodSelected[0].strMeal }
            data-testid="recipe-photo"
          />
          <S.RecipeContainer>
            <S.ShareButton
              type="button"
              data-testid="share-btn"
              onClick={ shareRecipe }
            >
              <img
                src={ shareIcon }
                alt="Share Icon"
              />
            </S.ShareButton>
            <S.RecipeTitle data-testid="recipe-title">{foodSelected[0].strMeal}</S.RecipeTitle>
            <S.SaveButton
              onClick={ () => handleFavorite(
                isFavorite, [favorite, favoriteChecked], setIsFavorite, foodSelected[0],
              ) }
              type="button"
            >
              <img
                data-testid="favorite-btn"
                src={ isFavorite }
                alt="Favorite Icon"
              />
            </S.SaveButton>
          </S.RecipeContainer>
          <S.H3>Ingredients</S.H3>
          { ingredientsAndMeasures(foodSelected[0], type, 'detail') }
          <S.H3>Instructions</S.H3>
          <S.Instructions>
            {foodSelected[0].strInstructions}
          </S.Instructions>
          <S.H3>Video</S.H3>
          {foodSelected[0].strYoutube === '' ? (
            <p>No video avaiable</p>
          ) : (
            <S.Iframe
              data-testid="video"
              title="Recipe Video"
              src={ foodSelected[0].strYoutube.replace('watch?v=', 'embed/') }
            >
              <p>Your browser does not support this content</p>
            </S.Iframe>)}
          <S.RecipeButton
            type="button"
            data-testid="start-recipe-btn"
            style={ buttonVisible }
            onClick={ () => handleStartRecipe(
              pathName,
              type,
              urlID,
              ingredientsToNumbersArray(foodSelected[0], type, urlID),
            ) }
          >
            { buttonTextHandler(type, urlID) }
          </S.RecipeButton>
          {showToast}
        </S.Container>
      ) : (
        <ReactLoading
          type="spinningBubbles"
          color="cyan"
          height={ 30 }
          width={ 30 }
        />
      )}
    </>
  );
}

FoodsRecipes.propTypes = {
  match: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};
