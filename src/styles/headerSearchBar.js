import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 1rem 0;
`;

export const SearchInput = styled.input`
  height: 2rem;
  justify-self: center;
  text-align: center;
`;

export const Form = styled.form`
  label {
    margin: 0 0.5rem;
  }
`;

export const SearchButton = styled.button`
  background: #FF580A;
  border: none;
  border-radius: 0.25rem;
  color: #fff;
  font-size: 1.25rem;
  height: 2rem;
  width: 8rem;
`;
