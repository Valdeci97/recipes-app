import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Image = styled.img`
  border-radius: 0.5rem;
  height: 10rem;
  margin-bottom: 1rem;
  width: 10rem;
`;

export const Link = styled.a`
  color: #000;
  text-align: center;
  text-decoration: none;
  margin: 1rem 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ShareButton = styled.button`
  border: none;
  margin-left: -50%;
  margin-bottom: 1rem;
`;

export const SaveButton = styled.button`
  border: none;
  margin-left: 100%;
  margin-bottom: 1rem;
`;

export const CategoriesContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
`;

export const CategoryButton = styled.button`
  background: ${({ disabled }) => disabled ? '#FF580A' : '#FC8936'};
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1.2rem;
  width: 6rem;
`;
