import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 79vh;
  justify-content: space-evenly;
`;

export const Button = styled.button`
  border: none;
  border-radius: 0.5rem;
  background: #FF580A;
  color: #fff;
  font-size: 1.5rem;
  height: 2.5rem;
  width: 15rem;

  @media(max-width: 440px) {
    font-size: 0.6rem;
    height: 1.5rem;
    width: 7rem;
  }

  @media(min-width: 441px) and (max-width: 540px) {
    font-size: 0.75rem;
    height: 1.75rem;
    width: 7.5rem;
  }

  @media(min-width: 541px) and (max-width: 680px) {
    font-size: 0.8rem;
    height: 1.75rem;
    width: 8rem;
  }

  @media(min-width: 681px) and (max-width: 900px) {
    font-size: 0.85rem;
    height: 1.85rem;
    width: 8rem;
  }
`;
