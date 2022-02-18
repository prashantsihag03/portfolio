import React from "react";
import propTypes from "prop-types";
import styled from 'styled-components';

const StyledFooter = styled.footer`
    display: block;
    width: 100%;
    margin: auto;
    text-align: center;
    padding: 0.1em;
    color: white;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 0.2em;
    // background-color: var(--themeColor);
    padding-bottom: 1.5em;
    margin-top: 5vh;
    border-top: 1px solid #383838;
`;

const Footer = (props) => {
    return (
        <StyledFooter> {props.content} </StyledFooter>
    );
}

Footer.propTypes = {
    content: propTypes.string.isRequired,
}

export default Footer;
