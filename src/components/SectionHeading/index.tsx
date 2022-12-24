import { Box, SvgIcon, SvgIconTypeMap, SxProps, Theme, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import * as React from "react";

const containerStyles: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  color: 'primary.main',
  justifyContent: "space-between",
  alignItems: "center",
  border: 'none',
  marginBottom: "1vh",
  marginTop: "5vh",
};

const headingStyles: SxProps<Theme> = {
  textAlign: 'left',
  width: "100%",
}

interface SectionHeadingProps {
  heading: string,
  iconComponent: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {muiName: string;},
}

const SectionHeading: React.FC<SectionHeadingProps> = ({heading, iconComponent}: SectionHeadingProps) => {
  return (
    <Box sx={containerStyles}>
      <Typography variant="h2" component="h2" sx={headingStyles}>
        {heading}
      </Typography>
      <SvgIcon 
        sx={{color: 'text.primary'}} 
        component={iconComponent} 
        fontSize="large" 
        inheritViewBox 
      />
    </Box>
  );
};

export default SectionHeading;
