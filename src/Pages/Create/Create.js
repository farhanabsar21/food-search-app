import React, { useEffect, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { projectFirestore } from '../../firebase/config';
import './Create.scss';

const Create = () => {
    const [title, setTitle] = useState("")
    const [method, setMethod] = useState("")
    const [cookingTime, setCookingTime] = useState("")
    const [newIngredient, setNewIngredient] = useState("")
    const [ingredients, setIngredients] = useState([])

    const ingredientsInput = useRef(null)

    let history = useHistory()
    
    // submitting data
    const handleSubmit = async e => {
        e.preventDefault()
        const doc = {
            title: title,
            ingredients: ingredients,
            method: method,
            cookingTime: cookingTime + " minutes",
        }
        try{
            await projectFirestore.collection('recipes').add(doc)
            history.push("/")
        }catch (err){
            console.log(err)
        }
        setTitle("")
        setMethod("")
        setCookingTime("")
    }

    // add ingredients
    const handleAddIngredient = e => {
        e.preventDefault()
        const ing = newIngredient.trim()
        if(ing && !ingredients.includes(ing)){
            setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewIngredient("")
        ingredientsInput.current.focus()
    }
    return (
        <div className='create-section'>
            <div className="create-header">
                <h2>Add your recipe</h2>
            </div>
            <div className="create-body">
                <form onSubmit={handleSubmit}>
                    <label>
                        <span className='input-title'>Recipe title:</span>
                        <input 
                            type="text" 
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                            required
                        />
                    </label>
                    <label>
                        <span className='input-title'>Recipe method:</span>
                        <input 
                            type="text" 
                            onChange={(e) => setMethod(e.target.value)}
                            value={method}
                            required
                        />
                    </label>
                    <label>
                        <span className='input-title'>Recipe ingredients:</span>
                        <div className="ingredients">
                            <input 
                                type="text"
                                onChange={(e) => setNewIngredient(e.target.value)} 
                                value={newIngredient}
                                ref={ingredientsInput}
                            />
                            <button onClick={handleAddIngredient} className='add-btn'>Add</button>
                        </div>
                    </label>
                    <p className='current-ing'>Current ingredients: {ingredients.map(el => <em key={el}>{el}, </em>)}</p>
                    <label>
                        <span className='input-title'>Cooking time:</span>
                        <input 
                            type="number" 
                            onChange={(e) => setCookingTime(e.target.value)}
                            value={cookingTime}
                            required
                        />
                    </label>
                    <div className="btn-container-submit">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Create;