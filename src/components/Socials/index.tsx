import { Box, SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import * as React from "react";
import Icon from "../Icon";
import IconProp from "../Icon/type";

const boxStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "auto",
};

interface SocialsProps {
  items: IconProp[]
}

const Socials: React.FC<SocialsProps> = (props) => {
  return (    
    <Box sx={boxStyles}>
      {props.items.map((item, id) => {
        return (
          <Box key={id}>
            <Icon key={id} href={item.href} title={item.title} src={item.src} alt={item.alt} />
          </Box>
        )
      })}        
    </Box>
  );
}

export default Socials;