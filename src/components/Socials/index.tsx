import { Fade } from "@mui/material";
import * as React from "react";
import StyledComponents from 'styled-components';
import Icon from "../Icon";
import IconProp from "../Icon/type";

const ContainerDiv = StyledComponents.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: auto;
`;

interface SocialsProps {
  items: IconProp[]
}

const Socials: React.FC<SocialsProps> = (props) => {
  return (    
    <ContainerDiv>
      {props.items.map((item, id) => {
        return (
          <Fade key={id} in={true} style={{transitionDelay: "300ms"}}>
            <div>
              <Icon key={id} href={item.href} title={item.title} src={item.src} alt={item.alt} />
            </div>
          </Fade>
        )
      })}        
    </ContainerDiv>
  );
}

export default Socials;