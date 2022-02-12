import { createContext, useReducer } from "react";

export const ColorContext = createContext(); 

// reducer function
const colorReducer = (state, action) => {
    switch(action.type){
        case "CHANGE_COLOR":
            return {...state, color: action.payload}
        default: 
            return state
    }
}

export const ColorContextProvider = ({ children }) => {
    
    // initial reducer state
    const [state, dispatch] = useReducer(colorReducer, { color: "#f2f2f2" }) 
    
    // dispatch function
    const changeColor = (color) => {
        dispatch({type: "CHANGE_COLOR", payload: color})
    }
    
    return (
        <ColorContext.Provider value={{...state, changeColor}}>
            {children}
        </ColorContext.Provider>
    )
}