import React, { useEffect, useState, useContext } from 'react';
import ReactLoading from 'react-loading';
import { useLocation } from 'react-router-dom';
import fetchFoodAPI from '../helpers/FetchFoodApi';
import contextAPI from '../context/ContextAPI';
import GenericHeader from '../components/GenericHeader';
import Footer from '../components/Footer';
import * as S from '../styles/ingredients';

export default function FoodsIngredients() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const { setExploreFoods, setHistoryString } = useContext(contextAPI);
  const location = useLocation();
  const CARDS_LIMIT = 12;
  const value = 'Explorar Ingredientes';

  function setByIngredient(ingredientName) {
    setHistoryString(location.pathname);
    fetchFoodAPI(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientName}`).then((r) => {
      setExploreFoods(r.meals.filter((_m, i) => i < CARDS_LIMIT));
    });
  }
  useEffect(() => {
    fetchFoodAPI('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      .then((response) => setIngredientsList(response.meals
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
                href="/comidas"
                key={ index }
                data-testid={ `${index}-ingredient-card` }
                onClick={ () => setByIngredient(ingredient.strIngredient) }
              >
                <S.Image
                  src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                  alt={ ingredient.strIngredient }
                  data-testid={ `${index}-card-img` }
                />
                <p data-testid={ `${index}-card-name` }>
                  {ingredient.strIngredient}
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
