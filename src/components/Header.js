import React from 'react';
import Nav from './Nav';

const Header = ({ search, setSearch, show, showNav }) => {
    return (
        <header className='header'>
            <Nav
                search={search}
                setSearch={setSearch}
                show={show}
                showNav={showNav}
            />
        </header>
    )
}

export default Header
