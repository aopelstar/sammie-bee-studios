import React, { Component } from 'react';
import './home.css';
import Header from '../Header/Header';
import Sub from '../Subheader/Subheader';
import Contact from '../Contact/Contact';
import image1 from '../../images/img1.JPG';
import image3 from '../../images/img3.JPG';
import image4 from '../../images/img4.JPG';
import image5 from '../../images/img5.JPG';
import image6 from '../../images/img6.JPG';
import image7 from '../../images/img7.jpg';


export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            slideIndex: 1
        }
    }



    increment(key) {
        this.setState({
            slideIndex: this.state.slideIndex += key
        })
        if (this.state.slideIndex === 0) {
            this.setState({
                slideIndex: 6
            })
        } else if (this.state.slideIndex === 7) {
            this.setState({
                slideIndex: 1
            })
        }
    }

    render() {
        return (
            <div className="home-main">
                <Header />
                <Sub />
                <div className="home-container">
                    <div className="home-welcome">
                        Welcome! Feel free to take a look around! blah blah blah, content
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, incidunt aliquid inventore in quibusdam non iste excepturi quasi quidem impedit a. Quidem aspernatur rem voluptatum delectus autem minima maiores libero.
                    </div>
                    <div className="home-carousel">
                        <div className={this.state.slideIndex === 1 ? "fade" : "home-carousel-slides"}>
                            <img src="https://res.cloudinary.com/drapplestar/image/upload/v1521739422/Gallery/IMG_0087.jpg" alt="image1" className="home-carousel-image" />
                            <div className="home-carousel-text"></div>
                        </div>
                        <div className={this.state.slideIndex === 2 ? "fade" : "home-carousel-slides"}>
                            <img src={image3} alt="image1" className="home-carousel-image" />
                            <div className="home-carousel-text"></div>
                        </div>
                        <div className={this.state.slideIndex === 3 ? "fade" : "home-carousel-slides"}>
                            <img src={image4} alt="image1" className="home-carousel-image" />
                            <div className="home-carousel-text"></div>
                        </div>
                        <div className={this.state.slideIndex === 4 ? "fade" : "home-carousel-slides"}>
                            <img src={image5} alt="image1" className="home-carousel-image" />
                            <div className="home-carousel-text"></div>
                        </div>
                        <div className={this.state.slideIndex === 5 ? "fade" : "home-carousel-slides"}>
                            <img src={image6} alt="image1" className="home-carousel-image" />
                            <div className="home-carousel-text"></div>
                        </div>
                        <div className={this.state.slideIndex === 6 ? "fade" : "home-carousel-slides"}>
                            <img src={image7} alt="image1" className="home-carousel-image" />
                            <div className="home-carousel-text"></div>
                        </div>
                        <div className="home-increment-buttons">
                            <a class="home-prev" onClick={() => this.increment(-1)}>&#10094;</a>
                            <a class="home-next" onClick={() => this.increment(1)}>&#10095;</a>
                        </div>
                    </div>
                </div>
                

            <Contact />
            </div>
        )
    }
}