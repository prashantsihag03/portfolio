import React from "react";

const SectionHeading = ({heading='', icon=''}) => {
    return (
        <div className="section-heading">
            <h2>{heading}</h2>
            <img src={icon} alt="" />
        </div>
    );
}

export default SectionHeading;