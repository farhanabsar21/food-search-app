import React from 'react';
import './Home.scss';

import useFetch from "../../Hooks/useFetch"
import RecipeList from '../../Components/RecipeList/RecipeList';

const Home = () => {
    let url = "http://localhost:3000/recipes"
    const { data, isPending, error } = useFetch(url)

    return (
        <div className='home-container'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipeList recipes={data}/>}
        </div>
    );
};

export default Home;