import React from 'react';
import './splash.css';
import '../../App.css'
import logo from '../../images/logo.png';


export default function Splash() {
    return(
        <div className = "splash-main">

            <div className ="splash-container">
        <div className="splash-head">
            <img src = {logo} alt="logo" className="splash-image"/>
            <div className="splash-title">Sammie Bee Studios</div>
        </div>
        <div className="splash-video"><iframe width="560" height="315" src="https://www.youtube.com/embed/mbD5ke7xqww?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>

                <button className ="splash-button">Welcome!</button>
            </div>

        </div>
    )
}