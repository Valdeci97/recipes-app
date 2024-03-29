import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import AppContext from '../context/ContextAPI';
import * as S from '../styles/genericHeader';

export default function GenericHeader({ value }) {
  const { goesTo } = useContext(AppContext);

  return (
    <>
      <S.Container>
        <S.ProfileButton
          type="button"
          onClick={ () => goesTo('perfil') }
          className="profile-btn"
        >
          <S.Image
            src={ profileIcon }
            alt="profile-icon"
            data-testid="profile-top-btn"
            className="profile-button"
          />
        </S.ProfileButton>
        <S.Title data-testid="page-title">
          { value }
        </S.Title>
      </S.Container>
    </>
  );
}

GenericHeader.propTypes = {
  value: PropTypes.node.isRequired,
};
