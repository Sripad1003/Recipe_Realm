import React from 'react';
import './SearchRecipe.css';
import SearchBar_func from '../SearchBar';
import { useState } from 'react';
import Timebox from './timebox';
const SearchRecipe = () => {
  const [json_obj, setsjson_obj] = useState({});
  const [result_selected, setresult_selected] = useState(false);

  return (
    <div className={`SearchRecipe-div ${result_selected ? 'expanded' : ''}`}>
        <h1>Search Recipes</h1>
      <SearchBar_func json_obj={setsjson_obj} setresult_selected={setresult_selected}/>
      <div className='search-result'>
        <div className='container' id='c'>
          <h1>{json_obj.title}</h1>
          <Timebox result_selected={result_selected} json_obj={json_obj}/>
        <p>{json_obj.description}</p>
        <br/>
        <p>{json_obj.ingredients}</p>
        {/* <p>{json_obj.instructions}</p> */}
        </div>
        
      </div>

    </div>
  );
};

export default SearchRecipe;
