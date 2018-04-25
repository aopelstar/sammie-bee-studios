import React, { Component } from 'react';
import './shop.css';
import Header from '../Header/Header';
import SubHeader from '../Subheader/Subheader';
import Contact from '../Contact/Contact';

export default class Shop extends Component{
    constructor(){
        super();
        this.state = {
            data: []
        }
    }

    render(){
        return(
            <div className="shop-main">
                <Header />
                <SubHeader />
                <Contact />
            </div>
        )
    }
}