import * as React from "react";
import StyledComponents from 'styled-components';

const ContainerDiv = StyledComponents.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 40%;

  @media only screen and (max-width: 800px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    margin: auto;
    margin-top: 5vh;
  }
`;

const Li = StyledComponents.li`
  list-style: none;
  width: 4em;
`;

const Img = StyledComponents.img`
  width: 80%;
  border: 4px solid transparent;
  border-radius: 50%;
  transition: all 0.5s linear;
`;

const A = StyledComponents.a`
  &:hover ${Img} {
    border-color: var(--themeColor);
  }
`;

interface QuickBioItem {
  title: string, 
  href: string,
  iconSvg: string,
  imgAlt: string
}

interface QuickBioIconsProps {
  items: QuickBioItem[]
}

const QuickBioIcons: React.FC<QuickBioIconsProps> = (props) => {
  return (    
    <ContainerDiv>
      {props.items.map((item, id) => {
        return (        
          <A key={id} href={item.href} target="_blank" title={item.title} rel="noopener noreferrer nofollow">
            <Li key={id}>
              <Img src={item.iconSvg} alt={item.imgAlt} />
            </Li>
          </A>
        )
      })}        
    </ContainerDiv>
  );
}

export default QuickBioIcons;