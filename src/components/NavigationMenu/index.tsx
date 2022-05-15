import * as React from "react";
import StyledComponents from 'styled-components';
import MenuButton from "../MenuButton";

const DefaultStyledNav = StyledComponents.nav`
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

interface NavigationMenuProps {
  aboutRef: any,
  blogsRef: any,
  contactRef: any,
  style?: string,
}

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  const ITEMS = [ 
    {value: 'About', ref: props.aboutRef},
    {value: 'Blogs', ref: props.blogsRef},
    {value: 'Get in touch', ref: props.contactRef},
  ];

  // apply custom stylings if any
  const Nav = props.style ? StyledComponents(DefaultStyledNav)`${props.style}`: DefaultStyledNav;

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

export default NavigationMenu;