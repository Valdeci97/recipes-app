import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`;

export const Image = styled.img`
  border-radius: 0.25rem;
  height: 10rem;
  width: 10rem;
`;

export const RecipeDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecipeButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
`;

export const RecipeButton = styled.button`
  background: transparent;
  border: none;
`;

export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
  }
`;

export const FinishRecipeButton = styled.button`
  background: #FF580A;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1.25rem;

  &:disabled {
    background: #FC8936;
  }

  &:hover {
    cursor: pointer;
  }
`;
