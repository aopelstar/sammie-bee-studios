import React from 'react';
import './header.css';
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <div className="header-main">
            <div className="header-top-menu">
                <div className="header-search">search?</div>
                <div className="header-top-admin">
                    <div>favorites</div>
                    <div>login</div>
                </div>
            </div>
            <div className="header-container">
               <Link to ='/home'> <img src={logo} alt="logo" className="header-logo"/></Link>
                <div className="header-title">
                Sammie Bee Studios
                </div>
            </div>
            
        </div>
    )
}