import React from 'react';
import {Link} from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
    return (
            <div>
                <nav className='navbar'>
                    <div className='nav-wrap'>
                        <h1 className='logo'><Link to=""><img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt='logo'/></Link></h1>
                        <ul className='navbar-nav'>
                            <li><Link to="">인기작 추천</Link></li>
                            <li><Link to="movies">나의 영화리스트</Link></li>
                            <li><Link to="users">올해의 배우</Link></li>
                        </ul>
                    </div >
                </nav>
            </div>
    );
};

export default Navbar;