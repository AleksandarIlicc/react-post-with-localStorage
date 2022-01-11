import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ButtonGoBack = () => {
    return (
        <Link to='/'>
            <button className='button button__home'>
                <FaArrowLeft />Go back
            </button>
        </Link>
    )
}

export default ButtonGoBack;