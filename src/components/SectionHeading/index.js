import React from "react";
import styled from "styled-components";
import blogIcon from "../../../resources/images/blog.svg";
import propTypes from "prop-types";

const SectionHeadingDiv = styled.div`
  display: flex;
  width: 100%;
  color: var(--highlightColor);
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid white;
  margin-bottom: 1vh;
  margin-top: 5vh;
`;

const H2 = styled.h2`
  text-align: left;
  font-size: 2em;
  font-family: "Philosopher", sans-serif;
  letter-spacing: 1pt;
  width: 100%;
`;

const SectionHeading = ({ heading, icon, iconAlt }) => {
  return (
    <SectionHeadingDiv>
      <H2>{heading}</H2>
      <img src={icon} alt={iconAlt} style={{ width: "1em" }} />
    </SectionHeadingDiv>
  );
};

SectionHeading.propTypes = {
  heading: propTypes.string.isRequired,
  icon: propTypes.string,
  iconAlt: propTypes.string,
};

SectionHeading.defaultProps = {
  icon: blogIcon,
  iconAlt: "Icon for this heading",
};

export default SectionHeading;
