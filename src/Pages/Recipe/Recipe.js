import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import './Recipe.scss';
import leftArrow from "../../icons/left-arrow.svg"

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
                    <Link to="/"><img src={leftArrow} alt="left-arrow" /></Link>
                    <h1>{recipe.title}</h1> 
                    <h6>{recipe.cookingTime} <span className='small-title'>to make</span></h6> 
                    <div className="ingredients">
                        <ul>
                            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                        </ul>
                    </div>
                    <p>{recipe.method}</p>     
                    <img src={!recipe.photo? `/assets/common.jpg`: `/assets/${recipe.photo}.jpg`} alt={recipe.title}/>
                </div>
           }
        </div>
    );
};

export default Recipe;