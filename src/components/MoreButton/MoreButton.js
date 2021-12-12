import React from "react";
import propTypes from 'prop-types';
import './MoreButton.css';

const MoreButton = (props) => {
    return(
        <div id="morebutton">
            <h4>
                <a href={props.link} target="_blank" rel="noopener noreferrer nofollow">
                    {props.content}
                </a>
            </h4>
        </div>
    );
}

MoreButton.propTypes = {
    link: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
}

export default MoreButton;