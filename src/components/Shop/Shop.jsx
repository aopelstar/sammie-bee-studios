import React, { Component } from 'react';
import axios from 'axios';
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

    async componentDidMount(){
        await axios.get('http://localhost:5432/api/shop').then( ( {data} ) => {
            this.setState({
                data: data.resources
            })
        })
    }

    render(){
        let shop = this.state.data.map( (pics, i) => {
            return(
                <div key ={i} className="shop-container">
                    <div className="shop-photo-container">
                       <img src={pics.url} className="shop-photo" alt="some photo"/>
                    </div>
                    <div className="shop-desc-container">
                        {pics.tags}
                    </div>
                </div>
            )
        })
        return(
            <div className="shop-main">
                <Header />
                <SubHeader />
                <div className="shop-component">
                {shop}
                </div>
                <Contact />
            </div>
        )
    }
}