import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import shareIcon from '../images/shareIcon.svg';
import fetchDrinkAPI from '../helpers/FetchDrinkAPI';
import ContextAPI from '../context/ContextAPI';
import favorite from '../images/whiteHeartIcon.svg';
import favoriteChecked from '../images/blackHeartIcon.svg';
import IngredientsCheckList from '../components/IngredientsCheckList';

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
    <div>
      { drinkSelected ? (
        <div>
          <img
            src={ drinkSelected[0].strDrinkThumb }
            alt={ drinkSelected[0].strDrink }
            data-testid="recipe-photo"
            className="recipe-photo"
          />
          <div>
            <h1 data-testid="recipe-title">{drinkSelected[0].strDrink}</h1>
            <button
              type="button"
              data-testid="share-btn"
              onClick={ shareRecipe }
            >
              <img
                src={ shareIcon }
                alt="Share Icon"
              />
            </button>
            <button
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
            </button>
          </div>
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
          <button
            type="button"
            data-testid="finish-recipe-btn"
            disabled={ isDisabled }
            onClick={ () => handleFinish(drinkSelected[0]) }
          >
            Finalizar Receita
          </button>
          {showToast}
        </div>
      ) : (
        <ReactLoading
          type="spinningBubbles"
          color="cyan"
          height={ 30 }
          width={ 30 }
        />
      )}
    </div>
  );
}

DrinksInProgress.propTypes = {
  match: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};
