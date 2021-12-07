import React from "react";
import QuickBioIcons from "./QuickBioIcons";
import QuickBioInfo from "./QuickBioInfo";
import '../css/Header.css';

const Header = () => {    
    return (
        <header className="quick-bio-flexcontainer" >
            <QuickBioInfo />
            <QuickBioIcons />
        </header>
    );
}

export default Header;