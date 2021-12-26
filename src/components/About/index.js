import React from "react";
import propTypes from "prop-types";
import styled from 'styled-components';

const AboutSection = styled.section`
    width: 100%;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s ease-in-out;
`;

const Heading = styled.h1`
    color: white;
    font-size: 1.5em;
    letter-spacing: 2pt;
    font-family: "Roboto Slab", serif;
    font-weight: bold;
    width: 60%;
    text-align: left;
    margin-bottom: 2vh;
    border-bottom: 1px solid rgb(160, 160, 160);

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const Content = styled.p`
    color: var(--themeColor);
    width: 50%;
    text-align: right;
    font-size: 1em;
    letter-spacing: 1pt;
    font-family: "Roboto Slab", serif;

    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`;

const About = (props) => {
    return (
        <AboutSection ref={props.passedRef}>
            <Heading> {props.heading} </Heading>
            <Content> {props.content} </Content>
        </AboutSection>
    );
}

About.propTypes = {
    heading: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    passedRef: propTypes.object.isRequired,
}

export default About;