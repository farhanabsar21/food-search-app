import React from 'react';
import { Link } from 'react-router-dom';
import "./RecipeList.scss";

const RecipeList = ({recipes}) => {
    console.log(recipes)
    return (
        <div className='recipe-container'>
            {recipes.map(recipe => 
                <div className='recipe-card' key={recipe.id}>
                    <img src={!recipe.photo? `/assets/common.jpg`: `/assets/${recipe.photo}.jpg`} alt={recipe.title} />
                    <h3>{recipe.title}</h3>
                    <h6>{recipe.cookingTime} <span className='small-title'>to make</span></h6>
                    <p>{recipe.method.substring(0, 100)}..</p>
                    <Link to={`/recipes/${recipe.id}`}>see details</Link>
                </div>
            )}
        </div>
    );
};

export default RecipeList;