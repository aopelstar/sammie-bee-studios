import React, { Component } from 'react';
import './bio.css';
import Header from '../Header/Header';
import SubHeader from '../Subheader/Subheader';

export default class Bio extends Component {
    render(){
        return(
            <div>
            <Header/>
            <SubHeader/>
            </div>
        )
    }
}