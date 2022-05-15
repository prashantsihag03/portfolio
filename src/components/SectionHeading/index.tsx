import * as React from "react";
import StyledComponents from "styled-components";
import blogImg from '../../assets/images/blog.svg';

const SectionHeadingDiv = StyledComponents.div`
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

const H2 = StyledComponents.h2`
  text-align: left;
  font-size: 2em;
  font-family: "Philosopher", sans-serif;
  letter-spacing: 1pt;
  width: 100%;
`;

interface SectionHeadingProps {
  heading: string,
  icon: string,
  iconAlt?: string,
}

const SectionHeading: React.FC<SectionHeadingProps> = (props) => {
  return (
    <SectionHeadingDiv>
      <H2>{props.heading}</H2>
      <img src={props.icon} alt={props.iconAlt} style={{ width: "1em" }} />
    </SectionHeadingDiv>
  );
};

SectionHeading.defaultProps = {
  icon: blogImg,
  iconAlt: "Icon for this heading",
};

export default SectionHeading;
