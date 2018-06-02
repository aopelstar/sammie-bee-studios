import React, { Component } from 'react';
import axios from 'axios';
import './shop.css';
import heart from '../../images/heart.png';
import Header from '../Header/Header';
import SubHeader from '../Subheader/Subheader';
import Contact from '../Contact/Contact';

export default class Shop extends Component{
    constructor(){
        super();
        this.state = {
            data: [],
            cart: [],
            favorites: []
        }
    }

    async componentDidMount(){
        await axios.get('http://localhost:5432/api/shop').then( ( {data} ) => {
            this.setState({
                data: data.resources
            })
        })
    }

    addToCart(thing){
        let newArray = this.state.cart;
        newArray.push(thing)
        

        this.setState({
            cart: newArray
        })
    }

    addToFavorites(thing){
        let newArray = this.state.favorites;
        newArray.push(thing);

        this.setState({
            favorites: newArray
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
                        <div>{pics.tags}</div>
                        <div className="cart-button" onClick={ () => this.addToCart(pics.url) }>
                            <button>
                                Add To Cart 
                            </button>
                            <div className="heart-button">
                                <img src={heart} alt="heart icon" className="heart-icon" onClick={ () => this.addToFavorites(pics.url) } />
                            </div>
                        </div>
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