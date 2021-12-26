import React from "react";
import propTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    background-color: var(--background);
    border-radius: 0.5em;
    border: none;
    padding: 0.5em;
    bottom: 1%;
    right: 1%;
    cursor: pointer;
    border: 1px solid var(--themeColor);

    &:hover {
        background-color: #262626;
    }
`;

const Img = styled.img`
    width: 80%;
    max-width: 5em;
`;

const P = styled.p`
    font-size: 2em;
    color: var(--themeColor);
`;

const ScrollToButton = (props) => {
    return (
        <Button onClick={props.onClick}>
            {props.img ? (
                <Img src={props.img}/>
            ) : <P> {props.text} </P>}
        </Button>
    )
}

ScrollToButton.propTypes = {
    img: propTypes.string,
    text: propTypes.string,
    onClick: propTypes.func.isRequired
}

ScrollToButton.defaultProps = {
    text: "Top",
}

export default ScrollToButton;