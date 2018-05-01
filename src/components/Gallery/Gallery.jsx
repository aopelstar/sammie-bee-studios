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

    async componentDidMount(){
        await axios.get('http://localhost:5432/api/cloudinary').then( ( {data} ) => {
            this.setState({
                data: data.resources
            })
        })
    }

    render(){
        let homeGallery = this.state.data.map( (pics, i) => {
            return(
                <div key = {i} className="gallery-photo-container">
                    <img src={pics.url} className="gallery-photo" alt="some photo"/>
                </div>
            )
        })
        return(
            <div className="gallery-main">
                <Header/>
                <SubHeader/>
                    <div className="gallery-container">  
                        {homeGallery}
                    </div>
                <Contact />
            </div>
        )
    }
}