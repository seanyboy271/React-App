import React, { Component } from "react";
import Table from '../Table/table.js'
import Util from '../../Util.js'
import './Home.css'
import { Link } from 'react-router-dom'



class Home extends Component {

    constructor(props) {
        super(props);
    }

    
    scrollToContact() {
        let contactComponent = document.getElementById("contactComponent");
        console.log(contactComponent)
        if (contactComponent !== null) {
            contactComponent.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
        }
    }


    render() {

        return (
            <div className='homePage'>
                <div className='section section1'>
                    <div className='main-text'>
                        <div className='fade-in-main'>
                            Developer
                            <br />
                        </div>
                        <button className='contactButton fade-in-button' onClick = {() => this.scrollToContact()}>
                                <div className='contactButtonText'>
                                    Contact me
                                </div>
                        </button>
                    </div>
                </div>


                <div className='bottom-section' id="AboutSection">
                    <div className='section2'>
                        <div className='main-text-section2'>
                            Who I am
                        </div>

                        <div className='sub-text'>
                            {Util.Bio.createBio()}
                        </div>

                    </div>
                </div>
            </div>
        );
    }

}

export default Home