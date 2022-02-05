import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../Searchbar/SearchBar';
import "./Navbar.scss"

const Navbar = () => {
    return (
        <div className='navbar-section'>
            <nav>
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