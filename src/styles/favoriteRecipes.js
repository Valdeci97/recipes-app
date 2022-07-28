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
`;

export const SaveButton = styled.button`
  border: none;
  margin-left: 100%;
`;
