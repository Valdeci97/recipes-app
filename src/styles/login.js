import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  background: gainsboro;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 1rem;
  text-align: center;
`;

export const Input = styled.input`
  border: solid 1px #000;
  border-radius: 0.25rem;
  height: 2.5rem;
  margin-top: 0.5rem;
  text-align: center;
  width: 15rem;
`;

export const LoginButton = styled.button`
  align-self: center;
  background: #FF580A;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1.25rem;
  height: 2rem;
  width: 10rem;

  &:disabled {
    background: #FC8936;
  }

  &:hover {
    cursor: pointer;
    height: 2.5rem;
    transition: all ease-in 0.5s;
    width: 12rem;
  }
`;
