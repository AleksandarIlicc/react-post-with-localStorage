import React from 'react';
import { Link } from 'react-router-dom';

const ButtonCreatePage = () => {
    return (
        <Link to='/post'>
            <button className='button button__home'>
                Create
            </button>
        </Link>
    )
}

export default ButtonCreatePage;
