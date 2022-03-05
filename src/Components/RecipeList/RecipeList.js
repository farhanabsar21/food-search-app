import React from 'react';
import { Link } from 'react-router-dom';
import "./RecipeList.scss";
import useTheme from "../../Hooks/useTheme"
import trashCan from '../../icons/trash_can.svg'
import { projectFirestore } from '../../firebase/config';

const RecipeList = ({recipes}) => {

    const { mode } = useTheme()

    if(recipes.length === 0){
        return <div className='error-card'>
            <p className="error">No recipes found</p>
            <a href="/">Go to homepage</a>
        </div>
    }

    const HandleDelete = id => {
        projectFirestore.collection('recipes').doc(id).delete()
    }
    return (
        <div className='recipe-container'>
            {recipes.map(recipe => 
                <div className={`recipe-card ${mode}`} key={recipe.id}>
                    <img src={!recipe.photo? `/assets/common.jpg`: `/assets/${recipe.photo}.jpg`} alt={recipe.title} />
                    <h3>{recipe.title}</h3>
                    <h6>{recipe.cookingTime} <span className='small-title'>to make</span></h6>
                    <p>{recipe.method.substring(0, 100)}..</p>
                    <Link to={`/recipes/${recipe.id}`}>see details</Link>
                    <div className="delete" onClick={()=> HandleDelete(recipe.id)}>
                        <img src={trashCan} alt="delete"/>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecipeList;