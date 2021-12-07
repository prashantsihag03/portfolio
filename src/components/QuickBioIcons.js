import React from "react";
import '../css/QuickBioIcons.css';


const QuickBioIcons = () => {
    const SocialMediaItems = [
        {
            title: "My linkedIn Profile",
            href: "https://www.linkedin.com/in/prashantsihag",
            iconSvg: "../resources/images/linkedinIcon.svg",
            imgAlt: "LinkedIn Icon",
        },
        {
            title: "My GitHub Profile",
            href: "https://github.com/prashantsihag03",
            iconSvg: "../resources/images/githubIcon.svg",
            imgAlt: "GitHub Icon",
        },
        {
            title: "My Medium Profile",
            href: "https://medium.com/@prashant-sihag",
            iconSvg: "../resources/images/mediumIcon.svg",
            imgAlt: "Medium Icon",
        }
    ]

    return (
        <div className="main-quick-icons" >
            {SocialMediaItems.map((item, id) => {
                return (        
                    <a key={id} href={item.href} target="_blank" title={item.title} rel="noopener noreferrer nofollow">
                        <li key={id}>
                            <img src={item.iconSvg} alt={item.imgAlt} />
                        </li>
                    </a>
                )
            })}        
        </div>
    );
}

export default QuickBioIcons;