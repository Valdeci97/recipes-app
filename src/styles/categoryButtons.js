import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const CategoryButton = styled.button`
  background: ${({ filter }) => filter ? '#FF580A' : '#FC8936' };
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1.75rem;
  height: 2.25rem;
  margin: 1.5rem 0;
  width: 10rem;

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
    width: 4rem;
  }

  @media(min-width: 681px) and (max-width: 760px) {
    font-size: 0.9rem;
    height: 1.4rem;
    width: 4.25rem;
  }

  @media(min-width: 761px) and (max-width: 920px) {
    font-size: 1rem;
    height: 1.5rem;
    width: 4.5rem;
  }

  @media(min-width: 921px) and (max-width: 1200px) {
    font-size: 1.25rem;
    height: 1.75rem;
    width: 5.5rem;
  }
`;
