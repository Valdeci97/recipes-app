import React, { useContext } from 'react';
import AppContext from '../context/ContextAPI';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

import * as S from '../styles/footer';

export default function Footer() {
  const { goesTo } = useContext(AppContext);

  return (
    <S.Container data-testid="footer">
      <S.Button type="button" onClick={ () => goesTo('bebidas') }>
        <S.Image
          src={ drinkIcon }
          alt="Taça de vidro com limão na borda"
          data-testid="drinks-bottom-btn"
        />
      </S.Button>
      <S.Button type="button" onClick={ () => goesTo('explorar') }>
        <S.Image src={ exploreIcon } alt="Bússola" data-testid="explore-bottom-btn" />
      </S.Button>
      <S.Button type="button" onClick={ () => goesTo('comidas') }>
        <S.Image src={ mealIcon } alt="Garfo e faca" data-testid="food-bottom-btn" />
      </S.Button>
    </S.Container>
  );
}
