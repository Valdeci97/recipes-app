import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SaveLocalStorage } from '../helpers/SaveLocalStorage';
import * as S from '../styles/login'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisable, setIsButtonDisable] = useState(true);
  const history = useHistory();

  const isDisabled = () => {
    const passwordSize = 5;
    const passwordLength = password.length > passwordSize;
    const re = /^([\w._-]+)@([\w-]+)\.([\w]{2,8})(\.[\w]{2,8})?$/i;
    // Regex from StackoverFlow - Email validation
    if (passwordLength && re.test(email)) {
      setIsButtonDisable(false);
    } else {
      setIsButtonDisable(true)
    }
  };

  const handleChangeEmail = (value) => {
    setEmail(value);
    isDisabled();
  };

  const handleChangePassword = (value) => {
    setPassword(value);
    isDisabled();
  };

  const handleClick = () => {
    SaveLocalStorage(email);
    history.push('/comidas');
  };

  return (
    <S.Container>
      <S.Form>
        <S.Label htmlFor="email">
          Email
          <S.Input
            className="form-control"
            type="email"
            id="email"
            name="email"
            data-testid="email-input"
            placeholder="user@recipesapp.com"
            value={ email }
            onChange={ ({ target }) => handleChangeEmail(target.value) }
          />
        </S.Label>
        <S.Label htmlFor="password">
          Password &nbsp;
          <S.Input
            className="form-control"
            type="password"
            id="password"
            name="password"
            data-testid="password-input"
            placeholder="********"
            value={ password }
            onChange={ ({ target }) => handleChangePassword(target.value) }
          />
        </S.Label>
        &nbsp;
        <S.LoginButton
          type="button"
          data-testid="login-submit-btn"
          disabled={ isButtonDisable }
          onClick={ () => handleClick() }
        >
          Login
        </S.LoginButton>
      </S.Form>
    </S.Container>
  );
}

export default Login;
