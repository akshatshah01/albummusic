import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Highlight from './ul/Highlight';

const Highlights = () => {


    return(
        <section id ="highlights">
            <div className="container">
                <div className="row">
                    <h2 className="section__title">
                Why choose <span className="purple">Library?</span>
                    </h2>
                    <div className="highlight__wrapper">

                    <Highlight 
                    icon = {<FontAwesomeIcon icon ="bolt"/>} 
                    title = "Easy and Quick"
                    para = "Get access to the music album you purchased online instantly."/>
                       <Highlight 
                    icon = {<FontAwesomeIcon icon ="tags"/>} 
                    title = "Affordable"
                    para = "Get your hands on popular albums for as little as $10!"/>
                       <Highlight 
                    icon = {<FontAwesomeIcon icon ="book-open"/>} 
                    title = "10,000+ Albums"
                    para = "Library has albums in all your favorite categories!"/>
                       
                       
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Highlights;