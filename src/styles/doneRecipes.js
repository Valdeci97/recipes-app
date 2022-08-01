import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
  display: flex;
  justify-content: space-around;
`;

export const Link = styled.a`
  color: #000;
  margin: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
`;

export const doneRecipeInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShareContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
`;

export const ShareButton = styled.button`
  background: transparent;
  border: none;
`;

export const Image = styled.img`
  border-radius: 0.25rem;
  height: 8rem;
  width: 8rem;
`;
