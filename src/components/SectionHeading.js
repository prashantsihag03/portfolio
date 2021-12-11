import React from "react";
import propTypes from "prop-types";

const SectionHeading = ({heading='', icon=''}) => {
    return (
        <div className="section-heading">
            <h2>{heading}</h2>
            <img src={icon} alt="" />
        </div>
    );
}

SectionHeading.propTypes = {
    heading: propTypes.string,
    icon: propTypes.string
}

export default SectionHeading;