import React from "react";
import '../css/Footer.css';

const Footer = () => {
    return (
        <div className="closingBlock">
            <section className="about" id="about">
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
export default Footer;