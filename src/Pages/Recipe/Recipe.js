import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import leftArrow from "../../icons/left-arrow.svg"
import leftArrowLight from "../../icons/left-arrow-light.svg"
import useTheme from '../../Hooks/useTheme';
import { projectFirestore } from '../../firebase/config';
import './Recipe.scss';

const Recipe = () => {
    const [recipe, setRecipe] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState('')

    const { id } = useParams()
    const { mode } = useTheme()

    useEffect(() => {
        setIsPending(true)
        const unSubscribe = projectFirestore.collection('recipes').doc(id).onSnapshot((doc) => {
            if(doc.exists){
                setIsPending(false)
                setRecipe(doc.data())
            }
            else{
                setIsPending(false)
                setError("could not find any recipe")
            }
        }, (err) => {
            setError(err.message)
        })

        return () => unSubscribe()
        
    }, [id])

    const handleUpdate = () => {
        projectFirestore.collection('recipes').doc(id).update({
            title: 'Hey this is new title'
        })
    }
    return (
        <div className='recipe-details-container'>
           {error && <p className='error'>{error}</p>}
           {isPending && <p className='loading'>Loading..</p>}
            <div className={`recipe-details ${mode}`}>
                {mode === 'dark' ? <Link to="/"><img src={leftArrowLight} alt="left-arrow-light" /></Link> : <Link to="/"><img src={leftArrow} alt="left-arrow" /></Link>}
                <h1>{recipe.title}</h1>
                <h6>{recipe.cookingTime} <span className='small-title'>to make</span></h6>
                <div className="ingredients">
                    <ul>
                        {recipe.ingredients && recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
                    </ul>
                </div>
                <p>{recipe.method}</p>
                <div className="update" onClick={handleUpdate}>
                    <button>update</button>
                </div>
            </div>
        </div>
    );
};

export default Recipe;