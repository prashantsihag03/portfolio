import { Box, Link, SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import * as React from "react";
import IconProp from "./type";

const listStyle: SxProps<Theme> = {
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "1.2em",
  height: "1.2em",
  marginRight: "1.5em",
  transition: "all 0.15s linear",
  ["@media only screen and (max-width: 900px)"]: {
    width: "1.2em",
    height: "1.2em",
  },
};

const imgStyle: SxProps<Theme> = {
  width: "80%",
  border: "4px solid transparent",
  borderRadius: "50%",
  transition: "all 0.5s linear",
};

const Icon: React.FC<IconProp> = ({
  href,
  title,
  src,
  alt,
  children,
  color,
  hoverColor,
}: IconProp) => {
  return (
    <Link
      href={href}
      target="_blank"
      title={title}
      rel="noopener noreferrer nofollow"
    >
      <Box
        component={"li"}
        sx={{
          ...listStyle,
          color: color ? color : "primary.main",
          ["&:hover"]: {
            color: hoverColor ? hoverColor : "secondary.main",
          },
        }}
      >
        {src ? (
          <Box component={"img"} sx={imgStyle} src={src} alt={alt} />
        ) : null}
        {children}
      </Box>
    </Link>
  );
};

export default Icon;
