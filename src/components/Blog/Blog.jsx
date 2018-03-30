import React, { Component } from 'react';
import './blog.css';
import Header from '../Header/Header';
import SubHeader from '../Subheader/Subheader';

export default class Blog extends Component{
    render(){
        return(
            <div className="blog-main">   
            <Header />
            <SubHeader />
                
            </div>
        )
    }
}