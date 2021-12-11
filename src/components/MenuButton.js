import React from "react";
import propTypes from "prop-types";

const MenuButton = (props) => {

    const scrollTo = () => {
        window.scrollTo({
            top: props.onClickScrollTo.current.offsetTop,
            behavior: "smooth",
        });
    }

    return (
        <button onClick={props.onClickScrollTo ? scrollTo : null}> 
            {props.value}
        </button>
    );
}

MenuButton.propTypes = {
    value: propTypes.string.isRequired,
    onClickScrollTo: propTypes.object.isRequired,
};

export default MenuButton;