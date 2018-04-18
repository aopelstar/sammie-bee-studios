import React, { Component } from 'react';
import './contact.css';
import email from '../../images/email.png';



export default class Contact extends Component {
    constructor() {
        super()
        this.state = {
            contactTrue: true,
            name: "",
            email: "",
            message: ""
        }
    }

    clickChange() {
        this.setState({
            contactTrue: !this.state.contactTrue
        })
    }

    handleChange(key, val){
        this.setState({
            [key]: val
        })
    }




    render() {

        return (
            <div className="contact-main">

                <div className={this.state.contactTrue? "contact-button": "contact-button contact-window-hidden"}>
                    <img src={email} alt="whatevs" className="contact-icon" onClick={() => this.clickChange()} />
                </div>
                <div className={this.state.contactTrue? "contact-window contact-window-hidden":"contact-window"}>

                    <div className="contact-window-title">
                        How Can We Help You?
                        </div>
                    <div className="contact-info">
                        <div className="contact-name">
                            <div className="contact-name-title">
                                Name:
                        </div>
                            <div className="contact-name-input">
                                <input onChange={(e) => this.handleChange("name", e.target.value)}/>
                            </div>
                        </div>
                        <div className="contact-email">
                            <div className="contact-email-title">
                                Email:
                        </div>
                            <div className="contact-email-input">
                                <input type="email" onChange={(e) => this.handleChange("email", e.target.value)}/>
                            </div>
                        </div>
                        <div className="contact-message">
                            <div className="contact-message-title">
                                Message:
                        </div>
                            <div className="contact-message-input">
                                <textarea onChange={(e) => this.handleChange("message", e.target.value)}/>
                            </div>
                        </div>
                        <div className="contact-buttons">
                            <button className="contact-submit">
                               Submit
                        </button>
                            <button className="contact-nevermind" onClick={() => this.clickChange()}>
                                Nevermind!
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}