import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import SubHeader from '../Subheader/Subheader';
import './gallery.css';
import Contact from '../Contact/Contact';
import Modal from 'react-modal';

const customStyles = {
    content: {

    }
}


export default class Gallery extends Component{
    constructor(){
        super();
        this.state ={
            data: []
        }

        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    async componentDidMount(){
        await axios.get('http://localhost:5432/api/cloudinary').then( ( {data} ) => {
            this.setState({
                data: data.resources
            })
        })
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        })
    }

    closeModal() {
        this.setState({
            modalIsOpen: false
        })
    }

    render(){
        let homeGallery = this.state.data.map( (pics, i) => {
            return(
                <div key = {i} className="gallery-photo-container" onClick={ () => window.open( {pics.url}, "_blank")}>
                    <img src={pics.url} className="gallery-photo" alt="some photo"/>
                    {/* <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} style={customStyles}>
                    <div>
                        <img src={pics.url} className="modal-photo" alt="somephoto" />
                    </div>
                    </Modal> */}
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