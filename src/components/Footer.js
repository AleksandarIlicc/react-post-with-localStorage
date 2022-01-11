import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='footer'>
            <p>&copy; Copyrights by Aleksandar Ilic {year}</p>
        </footer>
    )
}

export default Footer
