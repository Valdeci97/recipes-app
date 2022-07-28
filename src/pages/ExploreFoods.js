import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GenericHeader from '../components/GenericHeader';
import Footer from '../components/Footer';
import * as S from '../styles/exploreFood';

export default function ExploreFoods() {
  const [idFoodRandom, setIdFoodRandom] = useState();

  const history = useHistory();
  const value = 'Explorar Comidas';

  const handleClick = (page) => {
    history.push(`/${page}`);
  };

  const getRandomFoodId = async () => {
    await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      .then((data) => data.json())
      .then((response) => setIdFoodRandom(response.meals[0].idMeal));
  };

  useEffect(() => {
    getRandomFoodId();
  });

  return (
    <>
      <GenericHeader value={ value } />
      <S.Container>
        <S.Button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => handleClick('explorar/comidas/ingredientes') }
        >
          Por Ingredientes
        </S.Button>

        <S.Button
          type="button"
          data-testid="explore-by-area"
          onClick={ () => handleClick('explorar/comidas/area') }
        >
          Por Local de Origem
        </S.Button>
        <S.Button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => handleClick(`comidas/${idFoodRandom}`) }
        >
          Me Surpreenda!
        </S.Button>
      </S.Container>
      <Footer />
    </>
  );
}
