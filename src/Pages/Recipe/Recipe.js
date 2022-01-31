import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import './Recipe.scss';

const Recipe = () => {
    const { id } = useParams()
    const url = `http://localhost:3000/recipes/${id}`
    const { data: recipe, isPending, error } = useFetch(url)

    return (
        <div className='recipe-details-container'>
           {error && <p className='error'>{error}</p>}
           {isPending && <p className='loading'>Loading..</p>}
           {recipe && 
                <div className='recipe-details'>
                    <h1>{recipe.title}</h1> 
                    <h6>{recipe.cookingTime} <span className='small-title'>to make</span></h6>   
                    <p>{recipe.method}</p>     
                    <img src={!recipe.photo? `/assets/common.jpg`: `/assets/${recipe.photo}.jpg`} alt={recipe.title}/>
                </div>
           }
        </div>
    );
};

export default Recipe;