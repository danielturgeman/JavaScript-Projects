import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
import { async } from 'q';

const App = () => {
 
  const API_KEY = "bc3cd2396e325c6d1cb2b5a4f7bbb7c8";
  const APP_ID = "3cdf4701";
  
  //example get request
  //curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('fish');

  const EXAMPLE_GET_REQ = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`


  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(EXAMPLE_GET_REQ);
    const data = await response.json();
    setRecipes(data.hits);
  }

  //callback which takes an event
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  }

  return(
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe, index) => (
            <Recipe 
              key={index}
              title={recipe.recipe.label} 
              calories={recipe.recipe.calories} 
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
              />
          )) }
      </div>

    </div>
  );
}

export default App;
