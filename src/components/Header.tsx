import React from 'react';
import './Header.css';

const Header: React.FC = () => (
    <header className='header'>
        <img src='/logo.png' alt='logo' className='logo' />
        <h1 className='title'>Movie App</h1>
    </header>
);

export default Header;