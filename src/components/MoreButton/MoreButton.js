import React from "react";
import propTypes from 'prop-types';
import styled from 'styled-components';

const MoreButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Myh4 = styled.h4`text-align: center;`;

const A = styled.a`
    padding: 0.2em;
    border: 1px solid var(--background);
    border-bottom-color: white;
    border-radius: 0.2em;
    border-bottom: 1px solid white;
    transition: all 0.5s linear;
    letter-spacing: 0.2em;

    &:hover {
        border: 1px solid var(--themeColor);
    }
`;

const MoreButton = (props) => {
    return(
        <MoreButtonDiv>
            <Myh4>
                <A href={props.link} target="_blank" rel="noopener noreferrer nofollow">
                    {props.content}
                </A>
            </Myh4>
        </MoreButtonDiv>
    );
}

MoreButton.propTypes = {
    link: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
}

export default MoreButton;