import styled from 'styled-components';

export const Link = styled.a`
  text-align: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

export const RecipeImage = styled.img`
  border-radius: 0.25rem;
  height: 15rem;
  width: 15rem;
`;

export const Description = styled.h5`
  font-size: 2.5rem;
`;
