import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
    return (
        <div className='not-found-container'>
            <div>
                <h1>sorry! page not found</h1>
                <Link to="/">Go back to home page</Link>
            </div>
        </div>
    );
};

export default NotFound;