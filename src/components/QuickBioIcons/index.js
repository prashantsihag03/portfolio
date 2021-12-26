import React from "react";
import propTypes from 'prop-types';
import styled from 'styled-components';

const ContainerDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 40%;

    @media only screen and (max-width: 800px) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        margin: auto;
        margin-top: 5vh;
    }
`;

const Li = styled.li`
    list-style: none;
    width: 4em;
`;

const Img = styled.img`
    width: 80%;
    border: 4px solid transparent;
    border-radius: 50%;
    transition: all 0.5s linear;
`;

const A = styled.a`
    &:hover ${Img} {
        border-color: var(--themeColor);
    }
`;

const QuickBioIcons = (props) => {
    return (    
        <ContainerDiv>
            {props.items.map((item, id) => {
                return (        
                    <A key={id} href={item.href} target="_blank" title={item.title} rel="noopener noreferrer nofollow">
                        <Li key={id}>
                            <Img src={item.iconSvg} alt={item.imgAlt} />
                        </Li>
                    </A>
                )
            })}        
        </ContainerDiv>
    );
}

QuickBioIcons.propTypes = {
    items: propTypes.arrayOf({
        title: propTypes.string.isRequired, 
        href: propTypes.string.isRequired,
        iconSvg: propTypes.string.isRequired,
        imgAlt: propTypes.string.isRequired
    }),
}


export default QuickBioIcons;