import React from 'react';
import './Header.css';

const Header: React.FC = () => (
    <header className='header'>
        <h1>Movie App</h1>
        <img src='/logo.png' alt='logo' className='logo' />
    </header>
);

export default Header;