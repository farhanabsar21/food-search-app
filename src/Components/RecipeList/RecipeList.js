import React from 'react';
import "./RecipeList.scss";

const RecipeList = ({recipes}) => {
    
    return (
        <div className='recipe-container'>
            {recipes.map(recipe => 
                <div className='recipe-card' key={recipe.id}>
                    <h3>{recipe.title}</h3>
                    <h6>{recipe.cookingTime} to make</h6>
                    <p>{recipe.method.substring(0, 100)}..</p>
                </div>
            )}
        </div>
    );
};

export default RecipeList;