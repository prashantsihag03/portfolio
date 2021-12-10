import React from "react";
import PropTypes from "prop-types";

const SectionHeading = ({heading='', icon=''}) => {
    return (
        <div className="section-heading">
            <h2>{heading}</h2>
            <img src={icon} alt="" />
        </div>
    );
}

SectionHeading.PropTypes = {
    heading: PropTypes.string,
    icon: PropTypes.string
}

export default SectionHeading;