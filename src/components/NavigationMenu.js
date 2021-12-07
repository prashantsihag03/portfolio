import React from "react";
import MenuButton from "./MenuButton";
import '../css/NavigationMenu.css';

/*
    This includes only the navigation buttons.
*/
const NavigationMenu = () => {

    const ITEMS = [ 
        {value: 'About', toComponent: "#about"},
        {value: 'Blogs', toComponent: "#blogs"},
        {value: 'Get in touch', toComponent: "#contact"},
    ];
    
    return (
        <div className="quick-bio-button">
            {ITEMS.map((item, id) => {
                return <MenuButton key={id} value={item.value} redirectComponentId={item.toComponent} /> 
            })}
        </div>
    );  
}

export default NavigationMenu;