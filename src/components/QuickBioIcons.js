import React from "react";
import '../css/QuickBioIcons.css';
import linkedIcon from "../../resources/images/linkedinIcon.svg";
import GitHubIcon from "../../resources/images/githubIcon.svg";
import MediumIcon from "../../resources/images/mediumIcon.svg";


const QuickBioIcons = () => {
    const SocialMediaItems = [
        {
            title: "My linkedIn Profile",
            href: "https://www.linkedin.com/in/prashantsihag",
            iconSvg: linkedIcon,
            imgAlt: "LinkedIn Icon",
        },
        {
            title: "My GitHub Profile",
            href: "https://github.com/prashantsihag03",
            iconSvg: GitHubIcon,
            imgAlt: "GitHub Icon",
        },
        {
            title: "My Medium Profile",
            href: "https://medium.com/@prashant-sihag",
            iconSvg: MediumIcon,
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