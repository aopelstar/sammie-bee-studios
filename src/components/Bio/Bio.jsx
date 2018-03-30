import React, { Component } from 'react';
import './bio.css';
import Header from '../Header/Header';
import SubHeader from '../Subheader/Subheader';
import image from '../../images/Samantha.jpg'

export default class Bio extends Component {
    render() {
        return (
            <div className="bio-main">
                <Header />
                <SubHeader />
                <div className="bio-container">
                    <div className="bio-image-container">
                        <img src={image} alt="Samantha" className="bio-image" />
                    </div>
                    <div className="bio-desc">
                        My name is Samantha and I have a crush on every boy.
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Sit nulla veniam saepe eveniet 
                        vitae iure nisi ipsa magnam. Quae 
                        in numquam at expedita sint ducimus. 
                        Tenetur placeat maiores dolorem nesciunt!
                        <br/>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Sit nulla veniam saepe eveniet 
                        vitae iure nisi ipsa magnam. Quae 
                        in numquam at expedita sint ducimus. 
                        Tenetur placeat maiores dolorem nesciunt!
                        <br/>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Sit nulla veniam saepe eveniet 
                        vitae iure nisi ipsa magnam. Quae 
                        in numquam at expedita sint ducimus. 
                        Tenetur placeat maiores dolorem nesciunt!
                        <br/>
                        Lorem ipsum dolor sit amet, 
                        consectetur adipisicing elit. 
                        Sit nulla veniam saepe eveniet 
                        vitae iure nisi ipsa magnam. Quae 
                        in numquam at expedita sint ducimus. 
                        Tenetur placeat maiores dolorem nesciunt!
                    </div>
                </div>
            </div>
        )
    }
}