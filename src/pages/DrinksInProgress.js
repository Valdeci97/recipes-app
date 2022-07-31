import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import shareIcon from '../images/shareIcon.svg';
import fetchDrinkAPI from '../helpers/FetchDrinkAPI';
import ContextAPI from '../context/ContextAPI';
import favorite from '../images/whiteHeartIcon.svg';
import favoriteChecked from '../images/blackHeartIcon.svg';
import IngredientsCheckList from '../components/IngredientsCheckList';
import * as S from '../styles/inProgress';

export default function DrinksInProgress({ match, location }) {
  const {
    shareRecipe, showToast, handleFavorite, handleFinish,
  } = useContext(ContextAPI);
  const [isFavorite, setIsFavorite] = useState(favorite);
  const [drinkSelected, setDrinkSelected] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const urlID = match.params.id;
  const pathName = location.pathname;
  const type = pathName.split('/')[1] === 'comidas' ? 'meals' : 'cocktails';

  function isRecipeFavorite(path) { // verifica se e favorita
    if (localStorage.getItem('favoriteRecipes') !== null) {
      const isItFavorite = localStorage
        .getItem('favoriteRecipes').includes(path.split('/')[2]);
      if (isItFavorite) { return setIsFavorite(favoriteChecked); }
    }
    return setIsFavorite(favorite);
  }

  function checkDisabled() { // verifica se deve estar desabilitado
    const arrayOfIngredientsChecked = Array
      .from(document.getElementsByClassName('ingredient-step--checked'));
    const arrayOfIngredients = Array
      .from(document.getElementsByClassName('ingredient-step'));
    if (arrayOfIngredients.length === arrayOfIngredientsChecked.length
      && arrayOfIngredientsChecked.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }

  useEffect(() => {
    const DELAY = 300;
    fetchDrinkAPI(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${urlID}`)
      .then((response) => setDrinkSelected(response.drinks));
    isRecipeFavorite(pathName);
    setTimeout(() => checkDisabled(), DELAY);
  }, [urlID, pathName]);

  return (
    <>
      { drinkSelected ? (
        <S.Container>
          <S.Image
            src={ drinkSelected[0].strDrinkThumb }
            alt={ drinkSelected[0].strDrink }
            data-testid="recipe-photo"
            className="recipe-photo"
          />
          <S.RecipeDetails>
            <h1 data-testid="recipe-title">{drinkSelected[0].strDrink}</h1>
            <S.RecipeButtonContainer>
              <S.RecipeButton
                type="button"
                data-testid="share-btn"
                onClick={ shareRecipe }
              >
                <img
                  src={ shareIcon }
                  alt="Share Icon"
                />
              </S.RecipeButton>
              <S.RecipeButton
                type="button"
                onClick={ () => handleFavorite(
                  isFavorite, [favorite, favoriteChecked], setIsFavorite, drinkSelected[0],
                ) }
              >
                <img
                  src={ isFavorite }
                  data-testid="favorite-btn"
                  alt="Favorite Icon"
                />
              </S.RecipeButton>
            </S.RecipeButtonContainer>
          </S.RecipeDetails>
          <p data-testid="recipe-category">{drinkSelected[0].strCategory}</p>
          <IngredientsCheckList
            recipeData={ drinkSelected[0] }
            type={ type }
            urlID={ urlID }
            onChange={ () => checkDisabled() }
          />
          <h3>Instructions</h3>
          <p data-testid="instructions">
            {drinkSelected[0].strInstructions}
          </p>
          <S.FinishRecipeButton
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ isDisabled }
            onClick={ () => handleFinish(drinkSelected[0]) }
          >
            Finalizar Receita
          </S.FinishRecipeButton>
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

DrinksInProgress.propTypes = {
  match: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};
