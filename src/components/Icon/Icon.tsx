import { Box, Link, SxProps } from "@mui/material";
import { Theme } from "@mui/system";
import * as React from "react";
import IconProp from "./type";

const listStyle: SxProps<Theme> = {
  listStyle: "none",
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
  alignItems: "center",
  width: "3em",
  height: "3em",
};

const imgStyle: SxProps<Theme> = {
  width: "80%",
  border: "4px solid transparent",
  borderRadius: "50%",
  transition: "all 0.5s linear",
};

const Icon: React.FC<IconProp> = ({ href, title, src, alt}: IconProp) => {
  return (
    <Link href={href} target="_blank" title={title} rel="noopener noreferrer nofollow">
      <Box component={"li"} sx={listStyle}>
        <Box component={"img"} sx={imgStyle} src={src} alt={alt} />
      </Box>
    </Link>
  )
}

export default Icon;