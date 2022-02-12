import { useContext } from 'react';
import { ColorContext } from '../context/ColorContext';

const useTheme = () => {

    const context = useContext(ColorContext)
    if (context === undefined) {
        throw new Error("useTheme must be used in the root")
    }
    return context 
};

export default useTheme;