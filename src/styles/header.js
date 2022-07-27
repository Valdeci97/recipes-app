import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  font-size: 2.2rem;
  justify-content: space-between;

  h1 {
    align-self: center;
  }

  @media(max-width: 440px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media(min-width: 441px) and (max-width: 540px) {
    h1 {
      font-size: 1.6rem;
    }
  }

  @media(min-width: 541px) and (max-width: 680px) {
    h1 {
      font-size: 1.75rem;
    }
  }

  @media(min-width: 681px) and (max-width: 760px) {
    h1 {
      font-size: 1.9rem;
    }
  }

  @media(min-width: 761px) and (max-width: 920px) {
    h1 {
      font-size: 2rem;
    }
  }

  @media(min-width: 921px) and (max-width: 1200px) {
    h1 {
      font-size: 2.1rem;
    }
  }
`;

export const Button = styled.button`
  background: transparent;
  border: none;
`;

export const Profile = styled.img`
  border: solid 1px #000;
  border-radius: 50%;
  margin-left: 0.5rem;
  width: 3rem;

  @media(max-width: 440px) {
    width: 1.5rem;
  }

  @media(min-width: 441px) and (max-width: 540px) {
    width: 1.6rem;
  }

  @media(min-width: 541px) and (max-width: 680px) {
    width: 1.75rem;
  }

  @media(min-width: 681px) and (max-width: 760px) {
    width: 1.9rem;
  }

  @media(min-width: 761px) and (max-width: 920px) {
    width: 2rem;
  }

  @media(min-width: 921px) and (max-width: 1200px) {
    width: 2.1rem;
  }
`;

export const Search = styled.img`
  margin-right: 0.5rem;
  width: 2.5rem;

  @media(max-width: 440px) {
    width: 1.5rem;
  }

  @media(min-width: 441px) and (max-width: 540px) {
    width: 1.6rem;
  }

  @media(min-width: 541px) and (max-width: 680px) {
    width: 1.75rem;
  }

  @media(min-width: 681px) and (max-width: 760px) {
    width: 1.9rem;
  }

  @media(min-width: 761px) and (max-width: 920px) {
    width: 2rem;
  }

  @media(min-width: 921px) and (max-width: 1200px) {
    width: 2.1rem;
  }
`;
