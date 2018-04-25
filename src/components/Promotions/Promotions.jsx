import React, { Component } from 'react';
import './promotions.css';
import Header from '../Header/Header';
import SubHeader from '../Subheader/Subheader';
import Contact from '../Contact/Contact';

export default function Promotions() {
    return(
        <div className="promotions-main">
            <Header/>
            <SubHeader/>

            <Contact />
        </div>
    )
}