import React from 'react';
import useTheme from '../../Hooks/useTheme';
import './ColorButtons.scss';
import darkBtn from '../../icons/dark-btn.svg'

const ColorButtons = () => {
    const { changeColor, changeMode, mode } = useTheme()
    const colorCart = ["#f2f2f2", "#ffefcc", "#ffcccc"] 

    // mode change handler
    const handleChangeMode = () => {
        changeMode(mode === 'dark' ? 'light' : 'dark')
    }
    
    return (
        <div>
            <div className="mode-btn-container">
                <img 
                    src={darkBtn} 
                    alt="dark"
                    onClick={handleChangeMode} 
                    style={{filter: mode === 'dark'? 'invert(100%)' : 'invert(20%)'}}
                />
            </div>
            <div className='btn-container'>
                {colorCart.map(eachColor =>
                    <div
                        className='btn-main'
                        key={eachColor}
                        onClick={() => changeColor(eachColor)}
                        style={{ background: eachColor }} />
                )}
            </div>
        </div>
    );
};

export default ColorButtons;