import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeImage = styled.img`
  align-self: center;
  border-radius: 0.5rem;
  height: 15rem;
  margin: 0.5rem 0;
  width: 15rem;
`;

export const RecipeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ShareButton = styled.button`
  background: transparent;
  border: none;
`;

export const SaveButton = styled.button`
  background: transparent;
  border: none;
`;

export const RecipeTitle = styled.h1`
  align-self: center;
  font-size: 2.25rem;
`;

export const H3 = styled.h3`
  text-align: center;
`;

export const List = styled.li`
  box-sizing: border-box;
  display: flex;
  font-size: 1.25 rem;
  font-weight: bold;
  justify-content: center;
  list-style: none;
`;

export const Instructions = styled.span`
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0.5rem 0;
`;

export const Iframe = styled.iframe`
  border-radius: 0.25rem;
  justify-content: center;
  margin: 0 25%;
  height: 15rem;
  width: 50%;

  @media(max-width: 440px) {
    height: 10rem;
  }
`;

export const RecipeButton = styled.button`
  background: #FF580A;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1rem;
  height: 2rem;
  margin: 0 45% 1rem 45%;
  width: 10%;

  @media(max-width: 440px) {
    font-size: 0.6rem;
  }

  @media(min-width: 441px) and (max-width: 540px) {
    font-size: 0.65rem;
  }

  @media(min-width: 541px) and (max-width: 680px) {
    font-size: 0.7rem;
  }

  @media(min-width: 681px) and (max-width: 840px) {
    font-size: 0.75rem;
  }

  @media(min-width: 841px) and (max-width: 1060px) {
    font-size: 0.8rem;
  }
`;
