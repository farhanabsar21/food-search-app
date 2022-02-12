import React from 'react';
import { Link } from 'react-router-dom';
import useTheme from '../../Hooks/useTheme';
import SearchBar from '../Searchbar/SearchBar';
import "./Navbar.scss"

const Navbar = () => {
    const { color } = useTheme()
    return (
        <div className='navbar-section'>
            <nav style={{background: color}}>
                <Link to="/" className='brand'>
                    <h1>The Recipe</h1>
                </Link>
                <SearchBar/>
                <Link to="/create">create recipe</Link>
            </nav>
        </div>
    );
};

export default Navbar;