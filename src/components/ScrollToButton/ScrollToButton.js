import React from "react";
import propTypes from 'prop-types';
import './ScrollToButton.css';

const ScrollToButton = (props) => {
    return (
        <button id="ScrollToButton" onClick={props.onClick}>
            {props.img ? (
                <img src={props.img}/>
            ) : <p> {props.text ? props.text : null}</p>}
        </button>
    )
}

ScrollToButton.propTypes = {
    img: propTypes.string,
    text: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired
}

export default ScrollToButton;