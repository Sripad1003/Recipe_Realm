import React, { useState } from 'react';
import './SearchRecipe.css';
import SearchBar_func from '../SearchBar';
import Timebox from './timebox';

const SearchRecipe = () => {
  const [jsonObj, setJsonObj] = useState({});
  const [resultSelected, setResultSelected] = useState(false);

  return (
    <div className={`SearchRecipe-div ${resultSelected ? 'expanded' : ''}`} role="main" aria-label="Search Recipes page content">
      <h1>Search Recipes</h1>
      <SearchBar_func json_obj={setJsonObj} setresult_selected={setResultSelected} />
      <div className='search-result'>
        <div className='container' id='c'>
          {jsonObj.title && <h1>{jsonObj.title}</h1>}
          {resultSelected && <Timebox result_selected={resultSelected} json_obj={jsonObj} />}
          {jsonObj.description && <p>{jsonObj.description}</p>}
          <br />
          {jsonObj.ingredients && <p>{jsonObj.ingredients}</p>}
          {/* <p>{jsonObj.instructions}</p> */}
        </div>
      </div>
    </div>
  );
};

export default SearchRecipe;
