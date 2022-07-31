import React, { useEffect, useState } from 'react';
import GenericHeader from '../components/GenericHeader';
import FavoriteRecipeCard from '../components/FavoriteRecipeCard';
import { CategoriesContainer, CategoryButton } from '../styles/favoriteRecipes';

export default function FavoriteRecipes() {
  const [favoriteRecipes, setRecipes] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => { // Ao montar o componente, recupera as receitas no localstorage e as salva no estado
    const recipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    setRecipes(recipes);
  }, []);

  const value = 'Receitas Favoritas';
  const categorias = ['all', 'food', 'drink']; // Array para economizar código repetitivo

  async function removeFavorite(index) {
    const filteredArray = [...favoriteRecipes].filter((_rec, i) => i !== index);
    setRecipes(filteredArray);
    localStorage.setItem('favoriteRecipes', JSON.stringify(filteredArray));
  }

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
              key={ i }
            >
              { cat }
            </CategoryButton>
          );
        }) }
      </CategoriesContainer>
      { Array.isArray(favoriteRecipes) && favoriteRecipes // Sem checar se recipes done é um array a pagina não carrega em alguns testes
        .filter((rec) => filter === 'all' || rec.type === filter)
        .map((rec, i) => (
          <FavoriteRecipeCard
            key={ i }
            recipe={ rec }
            index={ i }
            removeFavorite={ (id) => removeFavorite(id) }
          />
        )) }
    </div>
  );
}
