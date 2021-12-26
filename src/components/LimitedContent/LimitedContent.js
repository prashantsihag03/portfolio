import React from "react";
import propTypes from 'prop-types';
import styled from 'styled-components';
import ContentDescription from "../ContentDescription/ContentDescription";

const ImageDiv = styled.div`
    width: 20%;
    opacity: 0.7;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

const Img = styled.img`
    width: 90%;
    object-fit: cover;
    border-radius: 1em;

    @media (max-width: 600px) {
        width: 100%;
    }

`;

const Li = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 1em;
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

const LimitedContent = (props) => {

    return (
        <a href={props.link} target="_blank" rel="noreferrer noopener nofollow" title="Click to read more">
            <Li>
                <ImageDiv>
                    <Img src={props.img} alt=""/>
                </ImageDiv>
                <ContentDescription 
                    heading={props.heading} 
                    desc={props.desc} 
                    OverviewMaxWords={50} 
                />
            </Li>
        </a>
    );
}

LimitedContent.propTypes = {
    link: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    heading: propTypes.string.isRequired,
    desc: propTypes.string.isRequired,
}

export default LimitedContent;