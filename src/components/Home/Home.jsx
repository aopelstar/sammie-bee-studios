import React, { Component } from 'react';
import './home.css';
import Header from '../Header/Header'
import Sub from '../Subheader/Subheader'


export default class Home extends Component{
    constructor(){
        super();
        this.state = {

        }
    }

    render(){
        return(
            <div className="home-main">
                <Header/>
                <Sub/>


            </div>
        )
    }
}