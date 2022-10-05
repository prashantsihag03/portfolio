import * as React from "react";
import StyledComponents from "styled-components";
import ContentOverview from "../ContentOverview";

const DescriptionDiv = StyledComponents.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: "Roboto Slab", serif;
  width: 80%;
  letter-spacing: 1pt;
  font-size: 1em;

  @media (max-width: 600px) {
    justify-content: center;
    align-items: center;
    width: 100%;
    font-size: 0.8em;
  }
`;

const H3 = StyledComponents.h3`
  color: var(--secondary);
  text-align: left;
  word-wrap: normal;
`;

const H3OverlayedOnImg = StyledComponents.h3`
  position: absolute;
  bottom: 1%;
  color: var(--secondary);
  text-decoration: underline;
  text-align: left;
  word-wrap: normal;
  padding: 0.5em;
  width: 100%;
  font-weight: normal;
  background-color: rgba(8, 8, 8, 0.73);
`;

const Img = StyledComponents.img`
  width: 100%;
  opacity: 0.7;
  border-radius: 0.5em;
`;

const HeadingDiv = StyledComponents.div`
  position: relative;
`;

interface ContentDescriptionProps {
  heading: string,
  desc: string,
  overviewMaxWords?: number,
  overlayHeadingOnImg: boolean,
  overlayedImg: string,
}

const ContentDescription: React.FC<ContentDescriptionProps> = (props) => {
  return (
    <DescriptionDiv>
      { props.overlayHeadingOnImg ? 
        <HeadingDiv>
          <Img src={props.overlayedImg} />
          <H3OverlayedOnImg>{props.heading}</H3OverlayedOnImg>
        </HeadingDiv>
        :
        <HeadingDiv>
          <H3>{props.heading}</H3>
        </HeadingDiv>
        }
      <ContentOverview content={props.desc} maxWords={props.overviewMaxWords} />
    </DescriptionDiv>
  );
};

ContentDescription.defaultProps = {
  overviewMaxWords: 50,
};

export default ContentDescription;
