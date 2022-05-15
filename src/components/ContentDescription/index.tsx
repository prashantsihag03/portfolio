import * as React from "react";
import StyledComponents from "styled-components";
import ContentOverview from "../ContentOverview";

const DescriptionDiv = StyledComponents.div`
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

const HeadingDiv = StyledComponents.div`
  color: var(--highlightColor);
  letter-spacing: 0.2em;
  text-align: left;
  word-wrap: normal;
`;

interface ContentDescriptionProps {
  heading: string,
  desc: string,
  overviewMaxWords?: number
}

const ContentDescription: React.FC<ContentDescriptionProps> = (props) => {
  return (
    <DescriptionDiv>
      <HeadingDiv>
        <h3>{props.heading}</h3>
      </HeadingDiv>
      <ContentOverview content={props.desc} maxWords={props.overviewMaxWords} />
    </DescriptionDiv>
  );
};

ContentDescription.defaultProps = {
  overviewMaxWords: 50,
};

export default ContentDescription;
