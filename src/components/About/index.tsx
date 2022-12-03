import * as React from "react";
import styledComponents from "styled-components";
import SectionHeading from "../SectionHeading";
import { PersonOutlined } from "@mui/icons-material";

const AboutSection = styledComponents.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: auto;
  margin-bottom: 8vh;
  transition: all 0.5s ease-in-out;
`;

const Content = styledComponents.p`
  color: var(--light);
  width: 100%;
  padding: 0.5em;
  font-size: 1.2em;
  letter-spacing: 0.5pt;
  line-height: 1.5em;
  font-family: "Roboto Slab", serif;

  @media only screen and (max-width: 600px) {
    width: 100%;
    font-size: 0.9em;
  }
`;

interface AboutProps {
  heading: string,
  children: any,
}

const About = ({ heading, children }: AboutProps) => {
  return (
    <AboutSection id="about">
      <SectionHeading heading={heading} iconComponent={PersonOutlined} />
      <Content> {children} </Content>
    </AboutSection>
  );
};

export default About;
