import React from 'react';
import './splash.css';
import '../../App.css'
import logo from '../../images/logo.png';
import {Link} from 'react-router-dom';


export default function Splash() {
    return(
        <div className = "splash-main">

            <div className ="splash-container">
        <div className="splash-head">
            <img src = {logo} alt="logo" className="splash-image"/>
            <div className="splash-title">Sammie Bee Studios</div>
        </div>
        <div className="splash-video">
            <iframe width="560" height="315" src="https://res.cloudinary.com/drapplestar/video/upload/v1522368687/Gallery/final.mp4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="true" loop="true" controls="false">
            </iframe>
        </div>
        
                <Link to = '/home'><button className ="splash-button">Welcome!</button></Link>
            </div>
            

        </div>
    )
}