import React from 'react';
import Airpods from '../assets/airpods.PNG'
const Landing = () => {
return (
    <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                <h1>America's most awarded online music library platform</h1>
                <h2>Find your dream album with <span className="purple ">Music Library</span></h2>
                <a href="#features">
                    <button className="btn">Browse Books</button>
                </a>
                </div>
                <figure className="header__img--wrapper">
                <img src={Airpods} alt="" />
                </figure>
            </div>
        </header>
    </section>
);

}


export default Landing;