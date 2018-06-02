import React, { Component } from 'react';
import './header.css';
import logo from '../../images/logo.png';
import cart from '../../images/cart.png';
import { Link } from 'react-router-dom';


export default function Header() {
    

    

        return (
            <div className="header-main">
                <div className="header-top-menu">
                    <div className="header-search">search?</div>
                    <div className="header-top-admin">
                        <Link to='/favorites'><div>favorites</div> </Link>
                        <Link to='/admin'><div>login</div></Link>
                        <Link to='/checkout'><div className="cart-icon-container"><img src={cart} className="cart-logo" alt="cart icon" /></div></Link>
                    </div>
                </div>
                <div className="header-container">
                    <Link to='/home'> <img src={logo} alt="logo" className="header-logo" /></Link>
                    <div className="header-title">
                        Sammie Bee Studios
                    </div>
                </div>

            </div>
        )
    
}