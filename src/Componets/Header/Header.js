import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            {/* <li><a href="/home">Home</a></li>
            <li><a href="/about">About</a></li> */}
            
        </div>
    );
};

export default Header;