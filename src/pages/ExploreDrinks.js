import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import GenericHeader from '../components/GenericHeader';
import Footer from '../components/Footer';
import * as S from '../styles/explore';

export default function ExploreDrinks() {
  const [idDrinksRandom, setIdDrinksRandom] = useState('');
  const value = 'Explorar Bebidas';

  const history = useHistory();
  const handleClick = (page) => {
    history.push(`/${page}`);
  };

  const getRandomDrinkId = async () => {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then((data) => data.json());
    const [drink] = res.drinks;
    setIdDrinksRandom(drink.idDrink);
  };

  useEffect(() => {
    getRandomDrinkId();
  });

  return (
    <>
      <GenericHeader value={ value } />
      <S.Container>
        <S.Button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => handleClick('explorar/bebidas/ingredientes') }
        >
          Por Ingredientes
        </S.Button>
        <S.Button
          type="button"
          data-testid="explore-surprise"
          onClick={ () => handleClick(`bebidas/${idDrinksRandom}`) }
        >
          Me Surpreenda!
        </S.Button>
      </S.Container>
      <Footer />
    </>
  );
}
