import React from "react";
import propTypes from 'prop-types';
import './LimitedContent.css';

const LimitedContent = (props) => {

    const descMaxWords = 50;

    const truncateText = (text="") => {
        let words = text.split(" ");
        if(words.length > descMaxWords) {
            let lastWordIndex = text.indexOf(words[descMaxWords]);
            return (text.substring(0, lastWordIndex) + "..... ");
        }
        return text;
    }

    return (
        <a href={props.link} target="_blank" rel="noreferrer noopener nofollow" title="Click to read more">
            <li id="limitedContent">
                <div className="limitedContent-image"><img src={props.img} alt=""/></div>
                <div className="limitedContent-desc">
                    <div className="limitedContent-heading"><h3>{props.heading}</h3></div>
                    <div className="limitedContent-overview">
                        <p>{props.desc ? truncateText(props.desc) : ""}</p>
                    </div>
                </div>
            </li>
        </a>
    );
}

LimitedContent.propTypes = {
    link: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    heading: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
}

export default LimitedContent;