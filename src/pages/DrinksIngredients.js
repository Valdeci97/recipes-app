import React, { useContext, useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useLocation } from 'react-router-dom';
import fetchDrinkAPI from '../helpers/FetchDrinkAPI';
import GenericHeader from '../components/GenericHeader';
import Footer from '../components/Footer';
import contextAPI from '../context/ContextAPI';
import * as S from '../styles/ingredients';

export default function DrinksIngredients() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const { setExploreDrinks, setHistoryString } = useContext(contextAPI);
  const location = useLocation();
  const CARDS_LIMIT = 12;
  const value = 'Explorar Ingredientes';

  function setByIngredient(ingredientName) {
    setHistoryString(location.pathname);
    fetchDrinkAPI(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredientName}`).then((r) => {
      setExploreDrinks(r.drinks.filter((_m, i) => i < CARDS_LIMIT));
    });
  }

  useEffect(() => {
    fetchDrinkAPI('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
      .then((response) => setIngredientsList(response.drinks
        .filter((_item, index) => index < CARDS_LIMIT)));
  }, []);

  return (
    <>
      <GenericHeader value={ value } />
      <S.Container>
        {
          ingredientsList
            ? ingredientsList.map((ingredient, index) => (
              <S.Link
                href="/bebidas"
                key={ index }
                data-testid={ `${index}-ingredient-card` }
                onClick={ () => setByIngredient(ingredient.strIngredient1) }
              >
                <S.Image
                  src={ `https://www.thecocktaildb.com/images/ingredients/${ingredient.strIngredient1}-Small.png` }
                  alt={ ingredient.strIngredient1 }
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>
                  {ingredient.strIngredient1}
                </p>
              </S.Link>
            ))
            : (
              <ReactLoading
                type="spinningBubbles"
                color="cyan"
                height={ 30 }
                width={ 30 }
              />)
        }
      </S.Container>
      <Footer />
    </>
  );
}
