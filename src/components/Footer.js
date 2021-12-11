import React from "react";
import propTypes from "prop-types";
import '../css/Footer.css';

const Footer = (props) => {
    return (
        <div className="closingBlock">
            <section className="about" id="about" ref={props.passedRef}>
                <h1> Something more about me </h1>
                <p className="about-info">
                    I have been fascinated by what one can do with computers ever since I got first introduced to 
                    programming in the year 10 of my school. Apart from programming, I enjoy reading books, writing blog, cycling,
                    and playing video games. 
                </p>
            </section>
            <footer> © 2021 Prashant Sihag</footer>
        </div>
    );
}

Footer.propTypes = {
    passedRef: propTypes.object.isRequired,
}

export default Footer;