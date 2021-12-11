import React from "react";
import propTypes from 'prop-types';
import MenuButton from "./MenuButton";
import '../css/NavigationMenu.css';

/*
    This includes only the navigation buttons.
*/
const NavigationMenu = (props) => {

    const ITEMS = [ 
        {value: 'About', ref: props.aboutRef},
        {value: 'Blogs', ref: props.blogsRef},
        {value: 'Get in touch', ref: props.contactRef},
    ];

    return (
        <div className="quick-bio-button">
            {ITEMS.map((item, id) => {
                return (
                    <MenuButton 
                        key={id} value={item.value} 
                        onClickScrollTo={item.ref}
                    />
                );
            })}
        </div>
    );  
}

NavigationMenu.propTypes = {
    aboutRef: propTypes.object.isRequired,
    blogsRef: propTypes.object.isRequired,
    contactRef: propTypes.object.isRequired,
}

export default NavigationMenu;