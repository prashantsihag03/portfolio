import React from "react";
import propTypes from 'prop-types';
import styled from 'styled-components';
import MenuButton from "../MenuButton";

const DefaultStyledNav = styled.nav`
    display: flex;
    width: 80%;
    margin: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    @media only screen and (max-width: 800px) {
        display: flex;
        width: 80%;
        margin: auto;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`;

/*
This includes only the navigation buttons.
*/
const NavigationMenu = (props) => {
    const ITEMS = [ 
        {value: 'About', ref: props.aboutRef},
        {value: 'Blogs', ref: props.blogsRef},
        {value: 'Get in touch', ref: props.contactRef},
    ];

    // apply custom stylings if any
    const Nav = props.style ? styled(DefaultStyledNav)`${props.style}`: DefaultStyledNav;

    return (
        <Nav>
            {ITEMS.map((item, id) => {
                return (
                    <MenuButton 
                        key={id} value={item.value} 
                        onClickScrollTo={item.ref}
                    />
                );
            })}
        </Nav>
    );  
}

NavigationMenu.propTypes = {
    aboutRef: propTypes.object.isRequired,
    blogsRef: propTypes.object.isRequired,
    contactRef: propTypes.object.isRequired,
    style: propTypes.any
}

export default NavigationMenu;