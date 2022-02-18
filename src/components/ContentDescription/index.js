import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import ContentOverview from "../ContentOverview";

const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: "Roboto Slab", serif;
  width: 80%;

  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

const HeadingDiv = styled.div`
  color: var(--highlightColor);
  letter-spacing: 0.2em;
  text-align: left;
  word-wrap: normal;
`;

const ContentDescription = (props) => {
  return (
    <DescriptionDiv>
      <HeadingDiv>
        <h3>{props.heading}</h3>
      </HeadingDiv>
      <ContentOverview content={props.desc} maxWords={props.OverviewMaxWords} />
    </DescriptionDiv>
  );
};

ContentDescription.propTypes = {
  heading: propTypes.string.isRequired,
  desc: propTypes.string,
  OverviewMaxWords: propTypes.number,
};

ContentDescription.defaultProps = {
  desc: "N/A",
  OverviewMaxWords: 50,
};

export default ContentDescription;
