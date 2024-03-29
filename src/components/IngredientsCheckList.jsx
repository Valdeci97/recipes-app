import PropTypes from 'prop-types';
import React, { useEffect, useContext } from 'react';
import AppContext from '../context/ContextAPI';
import { Ingredients } from '../styles/inProgress';

export default function IngredientsCheckList({ recipeData, type, urlID, onChange }) {
  const { ingredientsAndMeasures } = useContext(AppContext);
  useEffect(() => {
    function isItChecked() { // verifica quais itens ja foram marcados e os marca novamente ao acessar a pagina
      const objInLocal = localStorage.getItem('inProgressRecipes');
      const objInLocalConverted = objInLocal !== null ? JSON.parse(objInLocal) : {};
      const ingredients = Array.from(document.getElementsByClassName('ingredient-step'));
      for (let index = 0; index < ingredients.length; index += 1) {
        if (objInLocalConverted[type] !== undefined
          && objInLocalConverted[type][urlID] !== undefined
          && objInLocalConverted[type][urlID].includes(index)) {
          ingredients[index].checked = false;
        } else { ingredients[index].checked = true; }
        if (ingredients[index].checked) {
          ingredients[index].parentElement.classList.add('ingredient-step--checked');
        } else {
          ingredients[index].parentElement.classList.remove('ingredient-step--checked');
        }
      }
    }
    isItChecked();
  }, [type, urlID]);
  return (
    <Ingredients onChange={ () => onChange() }>
      <h3>Ingredients</h3>
      { ingredientsAndMeasures(recipeData, type, '', [type, urlID]) }
    </Ingredients>
  );
}

IngredientsCheckList.propTypes = {
  recipeData: PropTypes.objectOf(PropTypes.string).isRequired,
  type: PropTypes.string.isRequired,
  urlID: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
