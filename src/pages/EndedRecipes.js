import React, { useEffect, useState } from 'react';
import GenericHeader from '../components/GenericHeader';
import DoneRecipeCard from '../components/DoneRecipeCard';
import { CategoriesContainer, CategoryButton } from '../styles/favoriteRecipes';

export default function EndedRecipes() {
  const [doneRecipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => { // Ao montar o componente, recupera as receitas no localstorage e as salva no estado
    const recipes = JSON.parse(localStorage.getItem('doneRecipes'));
    setRecipes(recipes);
  }, []);

  const value = 'Receitas Feitas';
  const categorias = ['all', 'food', 'drink']; // Array para economizar código repetitivo

  return (
    <div>
      <GenericHeader value={ value } />
      <CategoriesContainer>
        { categorias.map((cat, i) => {
          let filterName = cat === 'food' ? 'comida' : 'bebida'; // o filtro está sendo salvo no localStorage com os nomes em portugues
          if (cat === 'all') filterName = cat; // para poder filtrar corretamente criei essa lógica para simplificar o estado do filtro
          return (
            <CategoryButton
              type="button"
              id={ cat }
              onClick={ () => setFilter(filterName) }
              disabled={ filter === filterName }
            >
              { cat }
            </CategoryButton>
          );
        }) }
      </CategoriesContainer>
      { Array.isArray(doneRecipes) && doneRecipes // Sem checar se recipes done é um array a pagina falhava em alguns testes
        .filter((rec) => filter === 'all' || rec.type === filter)
        .map((rec, i) => (
          <DoneRecipeCard key={ i } recipe={ rec } index={ i } />
        )) }
    </div>
  );
}
