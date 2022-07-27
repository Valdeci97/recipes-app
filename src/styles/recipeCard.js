import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media(max-width: 680px) {
    flex-direction: column;
  }
`;

export const Link = styled.a`
  text-align: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const RecipeImage = styled.img`
  border-radius: 0.25rem;
  height: 26rem;
  width: 26rem;

  @media(max-width: 440px) {
    height: 12rem;
    width: 12rem;
  }

  @media(min-width: 441px) and (max-width: 540px) {
    height: 14rem;
    width: 14rem;
  }

  @media(min-width: 541px) and (max-width: 680px) {
    height: 17rem;
    width: 17rem;
  }

  @media(min-width: 681px) and (max-width: 760px) {
    height: 18rem;
    width: 18rem;
  }

  @media(min-width: 761px) and (max-width: 920px) {
    height: 20rem;
    width: 20rem;
  }

  @media(min-width: 921px) and (max-width: 1200px) {
    height: 22rem;
    width: 22rem;
  }
`;

export const Description = styled.h5`
  font-size: 2.5rem;

  @media(min-width: 761px) and (max-width: 920px) {
    font-size: 1.8rem;
  }
`;
