import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import fetchDrinkAPI from '../helpers/FetchDrinkAPI';
import './DrinksIngredients.css';
import GenericHeader from '../components/GenericHeader';
import Footer from '../components/Footer';

export default function DrinksIngredients() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const value = 'Explorar Ingredientes';
  const CARDS_LIMIT = 12;

  useEffect(() => {
    fetchDrinkAPI('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((response) => setIngredientsList(response.drinks
        .filter((_item, index) => index < CARDS_LIMIT)));
  }, []);

  return (
    <div>
      <GenericHeader value={ value } />
      <div className="ingredients-list">
        {ingredientsList
          ? ingredientsList.map((ingredient, index) => (
            <div
              className="ingredient"
              key={ index }
              data-testid={ `${index}-ingredient-card` }
            >
              <img
                className="ingredient-img"
                src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                alt={ ingredient.strIngredient1 }
                data-testid={ `${index}-card-img` }
              />
              <p
                data-testid={ `${index}-card-name` }
                className="ingredient-name"
              >
                {ingredient.strIngredient1}
              </p>
            </div>
          ))
          : (
            <ReactLoading
              type="spinningBubbles"
              color="cyan"
              height={ 30 }
              width={ 30 }
            />)}
      </div>
      <Footer />
    </div>
  );
}
