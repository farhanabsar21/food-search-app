import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import "./SearchBar.scss";

const SearchBar = () => {
    const [term, setTerm] = useState("")
    let history = useHistory()
    
    const handleSearch = e => {
        e.preventDefault()
        history.push(`/search?q=${term}`)
        setTerm("")
    }

    return (
        <div className='searchbar-section'>
            <form onSubmit={handleSearch}>
                <label htmlFor="search">Search:</label>
                <input 
                    type="text"
                    id='search'
                    onChange={e => setTerm(e.target.value)}
                    required
                 />
            </form>
        </div>
    );
};

export default SearchBar;