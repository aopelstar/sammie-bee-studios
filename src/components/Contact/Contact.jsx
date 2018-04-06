import React, { Component } from 'react';
import './contact.css';
import Header from '../Header/Header';
import SubHeader from '../Subheader/Subheader';
import email from '../../images/email.png';

export default function Contact() {
    return(
        <div className="contact-main">
            <img src={email} alt="whatevs" className="contact-icon"/>

        </div>
        
    )
}