import React from 'react';
import { useHistory } from 'react-router-dom';
import GenericHeader from '../components/GenericHeader';
import Footer from '../components/Footer';
import * as S from '../styles/explore';

export default function Explore() {
  const value = 'Explorar';
  const history = useHistory();
  const handleClick = (page) => {
    history.push(`/${page}`);
  };
  return (
    <>
      <GenericHeader value={ value } />
      <S.Container>
        <S.Button
          type="button"
          data-testid="explore-food"
          onClick={ () => handleClick('explorar/comidas') }
        >
          Explorar Comidas
        </S.Button>

        <S.Button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => handleClick('explorar/bebidas') }
        >
          Explorar Bebidas
        </S.Button>
      </S.Container>
      <Footer />
    </>
  );
}
