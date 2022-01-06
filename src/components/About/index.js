import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import blogIcon from "../../../resources/images/blog.svg";
import SectionHeading from "../SectionHeading";

const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  background-color: var(--background);
  margin-bottom: 10vh;
  transition: all 0.5s ease-in-out;
`;

const Content = styled.p`
  color: var(--themeColor);
  width: 100%;
  padding: 0.5em;
  text-align: justify;
  font-size: 1em;
  letter-spacing: 1pt;
  font-family: "Roboto Slab", serif;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const About = ({ passedRef, heading, children }) => {
  return (
    <AboutSection ref={passedRef}>
      <SectionHeading heading={heading} icon={blogIcon} />
      <Content> {children} </Content>
    </AboutSection>
  );
};

About.propTypes = {
  heading: propTypes.string.isRequired,
  children: propTypes.any.isRequired,
  passedRef: propTypes.object.isRequired,
};

export default About;
