import {
  Stack,
  SvgIcon,
  SvgIconTypeMap,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import * as React from "react";

const headingStyles: SxProps<Theme> = {
  textAlign: "left",
  width: "100%",
};

interface SectionHeadingProps {
  heading: string;
  iconComponent?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  iconColor?: string;
  iconSize?: "small" | "medium" | "large";
  size?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  iconComponent,
  iconColor,
  iconSize,
  size,
}: SectionHeadingProps) => {
  return (
    <Stack
      direction={"row"}
      width={"100%"}
      marginBottom={"10px"}
      color={"primary"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      border={"none"}
    >
      {iconComponent ? (
        <SvgIcon
          sx={{
            color: iconColor ? iconColor : "text.primary",
            marginRight: "3px",
          }}
          component={iconComponent}
          fontSize={iconSize ? iconSize : "medium"}
          inheritViewBox
        />
      ) : undefined}
      <Typography
        variant="h2"
        component="h2"
        sx={{ ...headingStyles, fontSize: size ? size : undefined }}
      >
        {heading}
      </Typography>
    </Stack>
  );
};

export default SectionHeading;
