import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = ({ search, setSearch, show, showNav }) => {
    return (
        <nav className='nav'>
            <p className='header__logo'>blog</p>
            <form className='nav__form' onSubmit={(e) => e.preventDefault()}>
                <input
                    type='text'
                    className='nav__input'
                    placeholder='Search for post'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul className={show ? 'nav__list nav__list--active' : 'nav__list'} >
                <li><Link to="/">Home</Link></li>
                <li><Link to="/post">New Post</Link></li>
                <li><Link to="/about">About</Link></li>
                <li className='icon icon__times' onClick={showNav}>
                    <FaTimes />
                </li>
            </ul>
            <div className='icon icon__bars' onClick={showNav}>
                <FaBars />
            </div>
        </nav >
    )
}

export default Nav
