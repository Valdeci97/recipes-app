import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 1rem;

  @media(max-width: 720px) {
    flex-direction: column;
  }
`;

export const Link = styled.a` 
  font-size: 1.5rem;
  text-align: center;
  text-decoration: none;
`;

export const Image = styled.img`
  height: 10rem;
  width: 12rem;
`;
