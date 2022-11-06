import * as React from "react";
import StyledComponents from 'styled-components';
import Icon from "../Icon";
import IconProp from "../Icon/type";

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

interface QuickBioIconsProps {
  items: IconProp[]
}

const QuickBioIcons: React.FC<QuickBioIconsProps> = (props) => {
  return (    
    <ContainerDiv>
      {props.items.map((item, id) => {
        return <Icon key={id} href={item.href} title={item.title} src={item.src} alt={item.alt} />
      })}        
    </ContainerDiv>
  );
}

export default QuickBioIcons;