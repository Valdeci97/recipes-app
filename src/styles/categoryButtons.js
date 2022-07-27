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
`;
