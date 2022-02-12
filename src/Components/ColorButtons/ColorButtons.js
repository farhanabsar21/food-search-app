import React from 'react';
import useTheme from '../../Hooks/useTheme';
import './ColorButtons.scss';

const ColorButtons = () => {
    const { changeColor } = useTheme()
    const colorCart = ["#f2f2f2", "#ffefcc", "#ffcccc"] 

    return (
        <div className='btn-container'>
            {colorCart.map(eachColor => 
                <div
                    className='btn-main' 
                    key={eachColor} 
                    onClick={()=> changeColor(eachColor)} 
                    style={{background: eachColor}} />
            )}
        </div>
    );
};

export default ColorButtons;