import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: flex;
    width: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: left;

    @media only screen and (max-width: 800px) {
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        color: white;
    }
`;

const Heading = styled.h1`
    @media only screen and (max-width: 800px) {
        text-align: center;
    }
`;

const Span = styled.span`
    color: var(--themeColor);
    word-wrap: normal;
`;

const QuickBioInfo = () => {

    return (
        <ContainerDiv className="quick-bio-info">
            <Heading>Hi, I&apos;m <br/>
                <Span>Prashant Sihag</Span>,<br/>
                Software Developer.
            </Heading>
        </ContainerDiv>
    );
}

export default QuickBioInfo;