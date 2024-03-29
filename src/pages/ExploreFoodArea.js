import React, { useEffect, useState, useContext } from 'react';
import ReactLoading from 'react-loading';
import Footer from '../components/Footer';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import ContextAPI from '../context/ContextAPI';
import FetchFoodApi from '../helpers/FetchFoodApi';
import Select from '../styles/ingredientsByArea';

export default function ExploreFoodArea() {
  const value = 'Explorar Origem';
  const [areaOfFoods, setAreaOfFoods] = useState([]);
  const [selectedArea, setSelectedArea] = useState('All');
  const { setFoods, foods } = useContext(ContextAPI);
  const MAX_CARDS = 12;

  useEffect(() => { // Setando os estados do context ao montar o componente
    if (selectedArea === 'All') {
      FetchFoodApi().then((r) => {
        setFoods(r.meals.filter((_m, i) => i < MAX_CARDS));
      });
    } else {
      const urlFoodsArea = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedArea}`;
      FetchFoodApi(urlFoodsArea).then((r) => {
        setFoods(r.meals.filter((_m, i) => i < MAX_CARDS));
      });
    }
  }, [selectedArea, setFoods]);

  const getFoodsArea = async () => {
    await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      .then((data) => data.json())
      .then((response) => setAreaOfFoods(response.meals));
  };

  useEffect(() => {
    getFoodsArea();
  });

  return (
    <>
      <Header text={ value } />
      <div>
        <div>
          <Select
            className="form-control"
            id="selectArea"
            value={ selectedArea }
            onChange={ ({ target }) => setSelectedArea(target.value) }
          >
            <option
              value="All"
              data-testid="All-option"
            >
              All
            </option>
            { areaOfFoods
              ? areaOfFoods.map((areas) => (
                <option
                  key={ areas.strArea }
                  data-testid={ `${areas.strArea}-option` }
                  value={ areas.strArea }
                >
                  {areas.strArea}
                </option>
              ))
              : <option> - </option>}
          </Select>

        </div>
        <div
          style={ {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          } }
        >
          {
            foods.length > 0
              ? foods.map((food, index) => (
                <RecipeCard
                  recipe={ food }
                  key={ food.idMeal }
                  index={ index }
                  place="main"
                />))
              : (
                <ReactLoading
                  type="spinningBubbles"
                  color="cyan"
                  height={ 30 }
                  width={ 30 }
                />)
          }
        </div>
      </div>
      <Footer />
    </>
  );
}
