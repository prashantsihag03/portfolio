import {
  Box,
  SvgIcon,
  SvgIconTypeMap,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import * as React from "react";

const containerStyles: SxProps<Theme> = {
  display: "flex",
  width: "100%",
  flexDirection: "row",
  color: "primary.main",
  justifyContent: "flex-start",
  alignItems: "center",
  border: "none",
  marginBottom: "10px",
};

const headingStyles: SxProps<Theme> = {
  textAlign: "left",
  width: "100%",
};

interface SectionHeadingProps {
  heading: string;
  iconComponent: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  iconColor?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  iconComponent,
  iconColor,
}: SectionHeadingProps) => {
  return (
    <Box sx={containerStyles}>
      <SvgIcon
        sx={{
          color: iconColor ? iconColor : "text.primary",
          marginRight: "3px",
        }}
        component={iconComponent}
        fontSize="medium"
        inheritViewBox
      />
      <Typography variant="h2" component="h2" sx={headingStyles}>
        {heading}
      </Typography>
    </Box>
  );
};

export default SectionHeading;
