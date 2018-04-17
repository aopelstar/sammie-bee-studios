import React from 'react';
import './splash.css';
import '../../App.css'
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';
import Video from '../Video/Video'


export default function Splash() {
    return (
        <div className="splash-main">
            <Video />

            <div className="splash-container">
                <div className="splash-head">
                    <img src={logo} alt="logo" className="splash-image" />
                    <div className="splash-title">Sammie Bee Studios</div>
                </div>
                <div className="splash-button-container">
                    <Link to='/home'><button className="splash-button">Welcome!</button></Link>
                </div>
            </div>


        </div>
    )
}