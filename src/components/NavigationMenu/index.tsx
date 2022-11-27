import * as React from "react";
import StyledComponents from 'styled-components';

const Position = StyledComponents.div`
  position: fixed;
  top: 5vh;
  right: 20px;
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Container = StyledComponents.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const VerticalLine = StyledComponents.div`
  position: absolute;
  top: 0;
  left: 50%;
  height: 100%;
  width: 2px;
  background-color: white;
`;

const ItemContainer = StyledComponents.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-container: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Nav = StyledComponents.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 2;
`;

const NavItem = StyledComponents.a`
  background-color: black;
  margin-top: 2em;
  margin-bottom: 2em;
  padding: 0.5em;
  letter-spacing: 1pt;
  font-size: 1em;
`;

const Highlight = StyledComponents.span`
  color: var(--primary);
  font-weight: bold;
  white-space: nowrap;
`;

const capitaliseFirstLetter = (value: string) => {
  if (value.length < 0) return value;
  return value.charAt(0).toUpperCase() + value.substring(1, value.length);
}

interface NavigationMenuProps {
  style?: string,
  active?: string
  items: string[]
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({active, items}: NavigationMenuProps) => {
  return (
    <Position>
      <Container>
        <VerticalLine />
        <ItemContainer>
          <Nav>
          {items.map((value, index) => (
            <NavItem href={`#${value}`}>
              {active===value ? <Highlight>{capitaliseFirstLetter(value)}</Highlight> : capitaliseFirstLetter(value)}
            </NavItem>
          ))}
          </Nav>
        </ItemContainer>
      </Container>
    </Position>
  )
}

export default NavigationMenu;