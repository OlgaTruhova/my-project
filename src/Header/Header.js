import React from 'react';
import {NavLink} from 'react-router-dom';
import headerHome from '../header_home.png';
// import buttergly from '../butterfly.jpg';

import './Header.css';

const Header = () => {

    const styleSpan = {
        fontFamily: "'Homemade Apple'",
        fontSize: '20px', 
        margin:' 0 5px'
    }

    return (
        <div className='header'>
            <div className='header__menu'>
                <NavLink to='/' exact activeClassName='active' className='header__menu_menu-home'>
                    <div className='header__menu_home-img'>
                        <img src={headerHome} alt='img'/>
                    </div>
                </NavLink>
        
                <NavLink to='/forclient' exact activeClassName='active' className='header__menu_menu'>
                    <span style={styleSpan}>for</span> <span>КЛИЕНТ</span>
                </NavLink>

                <NavLink to='/formaster' exact activeClassName='active' className='header__menu_menu'>
                    <span style={styleSpan}>for</span> <span>МАСТЕР</span>
                </NavLink>
            </div>
        </div>
    )
}

export {Header};