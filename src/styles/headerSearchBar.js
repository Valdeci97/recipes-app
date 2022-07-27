import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
`;

export const SearchInput = styled.input`
  font-size: 2rem;
  height: 2rem;
  justify-self: center;
  text-align: center;

  @media(max-width: 440px) {
    height: 0.8rem;
    font-size: 0.6rem;
    width: 5rem;
  }

  @media(min-width: 441px) and (max-width: 540px) {
    height: 1rem;
    font-size: 0.8rem;
    width: 6rem;
  }

  @media(min-width: 541px) and (max-width: 680px) {
    height: 1.1rem;
    font-size: 0.85rem;
    width: 6rem;
  }

  @media(min-width: 681px) and (max-width: 760px) {
    height: 1.2rem;
    font-size: 1rem;
    width: 6.5rem;
  }

  @media(min-width: 761px) and (max-width: 920px) {
    height: 1.25rem;
    font-size: 1rem;
    width: 6.75rem;
  }

  @media(min-width: 921px) and (max-width: 1200px) {
    height: 1.3rem;
    font-size: 1.1rem;
    width: 7rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin: 0 0.5rem;
  }
`;

export const Label = styled.label`
  font-size: 2rem;

  @media(max-width: 440px) {
    font-size: 0.6rem;
  }

  @media(min-width: 441px) and (max-width: 540px) {
    font-size: 0.75rem;
  }

  @media(min-width: 541px) and (max-width: 680px) {
    font-size: 0.8rem;
  }

  @media(min-width: 681px) and (max-width: 760px) {
    font-size: 0.9rem;
  }

  @media(min-width: 761px) and (max-width: 920px) {
    font-size: 1rem;
  }

  @media(min-width: 921px) and (max-width: 1200px) {
    font-size: 1.2rem;
  }
`;

export const SearchButton = styled.button`
  background: #FF580A;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1.25rem;
  height: 2rem;
  width: 8rem;

  @media(max-width: 440px) {
    font-size: 0.6rem;
    height: 1rem;
    width: 3rem;
  }

  @media(min-width: 441px) and (max-width: 540px) {
    font-size: 0.75rem;
    height: 1.2rem;
    width: 3.5rem;
  }

  @media(min-width: 541px) and (max-width: 680px) {
    font-size: 0.8rem;
    height: 1.25rem;
    width: 3.75rem;
  }

  @media(min-width: 681px) and (max-width: 760px) {
    font-size: 0.9rem;
    height: 1.4rem;
    width: 4rem;
  }

  @media(min-width: 761px) and (max-width: 920px) {
    font-size: 1rem;
    height: 1.5rem;
    width: 4.5rem;
  }

  @media(min-width: 921px) and (max-width: 1200px) {
    font-size: 1.1rem;
    height: 1.65rem;
    width: 5rem;
  }
`;
