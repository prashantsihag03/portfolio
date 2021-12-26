import React from "react";
import propTypes from "prop-types";
import styled from 'styled-components';
import About from "../About";
import Footer from "../Footer";

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    padding: 2em;
    padding-bottom: 0.5em;
    background-color:  var(--background);
    margin-top: 5vh;
`;

const ClosingBlock = (props) => {
    return (
        <ContainerDiv className="closingBlock">
            <About 
                heading="Something more about me"
                passedRef={props.passedRef}
                content="I have been fascinated by what one can do with computers ever since I got first introduced to 
                programming in the year 10 of my school. Apart from programming, I enjoy reading books, writing blog, cycling,
                and playing video games."
            />
            <Footer content="© 2021 Prashant Sihag"/>
        </ContainerDiv>
    );
}

ClosingBlock.propTypes = {
    passedRef: propTypes.object.isRequired,
}

export default ClosingBlock;