import React from 'react';
import { useHistory } from 'react-router-dom';
import GenericHeader from '../components/GenericHeader';
import Footer from '../components/Footer';

export default function Explore() {
  const value = 'Explorar';
  const history = useHistory();
  const handleClick = (page) => {
    history.push(`/${page}`);
  };
  return (
    <div>
      <GenericHeader value={ value } />
      <div>
        <button
          type="button"
          data-testid="explore-food"
          onClick={ () => handleClick('explorar/comidas') }
        >
          Explorar Comidas
        </button>

        <button
          type="button"
          data-testid="explore-drinks"
          onClick={ () => handleClick('explorar/bebidas') }
        >
          Explorar Bebidas
        </button>
      </div>
      <Footer />
    </div>
  );
}
