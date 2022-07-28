import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GenericHeader from '../components/GenericHeader';
import * as S from '../styles/profile';

export default function Profile() {
  const value = 'Perfil';
  const localStorageReturn = localStorage.getItem('user');
  const { email } = localStorageReturn === null ? '' : JSON.parse(localStorageReturn);

  return (
    <>
      <GenericHeader value={ value } />
      <S.H2 data-testid="profile-email">
        { email }
      </S.H2>
      <S.Container>
        <Link to="/receitas-feitas">
          <S.Button
            type="button"
          >
            Receitas Feitas
          </S.Button>
        </Link>
        <Link to="/receitas-favoritas">
          <S.Button
            data-testid="profile-favorite-btn"
            type="button"
          >
            Receitas Favoritas
          </S.Button>
        </Link>
        <Link to="/">
          <S.Button
            data-testid="profile-logout-btn"
            type="button"
            onClick={ () => localStorage.clear() }
          >
            Sair
          </S.Button>
        </Link>
      </S.Container>
      <Footer />
    </>
  );
}
