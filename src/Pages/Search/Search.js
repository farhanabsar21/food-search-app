import React from 'react';
import { useLocation } from 'react-router-dom';
import RecipeList from '../../Components/RecipeList/RecipeList';
import useFetch from '../../Hooks/useFetch';
import './Search.scss';

const Search = () => {
    const queryStr = useLocation().search
    const queryParams = new URLSearchParams(queryStr)
    const query = queryParams.get("q")
    const url = `http://localhost:3000/recipes?q=${query}`
    const { error, isPending, data} = useFetch(url)

    console.log(queryStr, queryParams, query)
    return (
        <div className='search-result-container'>
           <h2>Recipes for "{query}"</h2> 
           {error && <p className='error'>{error}</p>}
           {isPending && <p className='loading'>Loading..</p>}
           {data && <RecipeList recipes={data}/>}
        </div>
    );
};

export default Search;