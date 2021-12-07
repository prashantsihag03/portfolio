import React from "react";

const MenuButton = (props) => {
    return (
        <a href={props.redirectComponentId}>
            <button> 
                {props.value}
            </button>
        </a>
    );
}

export default MenuButton;