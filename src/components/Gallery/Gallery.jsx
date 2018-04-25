import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import SubHeader from '../Subheader/Subheader';
import './gallery.css';
import Contact from '../Contact/Contact';


export default class Gallery extends Component{
    constructor(){
        super();
        this.state ={
            data: []
        }
    }

    componentDidMount(){
        let promise = axios.get('/api/cloudinary')
        promise.then((response) => {
            this.setState({
                data: response
            })
        })
    }

    render(){
        return(
            <div className="gallery-main">
                <Header/>
                <SubHeader/>

                <Contact />
            </div>
        )
    }
}