import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../context/ContextAPI';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderSearchBar from './HeaderSearchBar';
import * as S from '../styles/header';

export default function Header({ text }) {
  const { showComponent, setShowComponent, goesTo } = useContext(AppContext);
  return (
    <>
      <S.Container>
        <S.Button
          type="button"
          onClick={ () => goesTo('perfil') }
        >
          <S.Profile
            src={ profileIcon }
            alt="profile-icon"
            data-testid="profile-top-btn"
          />
        </S.Button>
        <h1 data-testid="page-title">
          { text }
        </h1>
        <S.Button
          type="button"
          onClick={ () => setShowComponent(!showComponent) }
        >
          <S.Search src={ searchIcon } alt="search-icon" data-testid="search-top-btn" />
        </S.Button>
      </S.Container>
      {
        showComponent ? (<HeaderSearchBar />) : null
      }
    </>
  );
}

Header.propTypes = {
  text: PropTypes.node.isRequired,
};
