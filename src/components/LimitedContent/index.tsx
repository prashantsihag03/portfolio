import * as React from "react";
import StyledComponents from "styled-components";
import ContentDescription from "../ContentDescription";

const ImageDiv = StyledComponents.div`
  width: 20%;
  opacity: 0.7;
`;

const Img = StyledComponents.img`
  width: 90%;
  object-fit: cover;
  border-radius: 1em;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Li = StyledComponents.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 2em;
  border-radius: 1em;
  padding: 0.5em;
  transition: all 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: rgb(36, 34, 34);
  }

  &:hover (ImageDiv) {
    opacity: 0.9;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 2em;
    padding: 1em;
  }
`;

interface LimitedContentProps {
  link: string,
  img: string,
  heading: string,
  desc: string,
  mobileVersion: boolean,
}

const LimitedContent: React.FC<LimitedContentProps> = (props) => {

  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer noopener nofollow"
      title="Click to read more"
    >
      <Li>
        { props.mobileVersion ? null : (
          <ImageDiv>
            <Img src={props.img} alt="" />
          </ImageDiv>        
        )}
        <ContentDescription
          heading={props.heading}
          overlayHeadingOnImg={props.mobileVersion}
          overlayedImg={props.img}
          desc={props.desc}
          overviewMaxWords={50}
        />
      </Li>
    </a>
  );
};

export default LimitedContent;
