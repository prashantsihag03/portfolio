import React from "react";
import { Stack } from "@mui/material";
import SectionHeading from "../SectionHeading";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import HighlightItem from "./HighlightItem";

const Highlights: React.FC = () => {
  return (
    <>
      <SectionHeading heading={"Highlights"} iconComponent={StarBorderIcon} />
      <Stack
        direction={"column"}
        justifyContent={"space-around"}
        alignItems={"center"}
        width={"100%"}
        margin={"auto"}
        marginTop={"2rem"}
      >
        <HighlightItem gutterSize="1rem" title="Dialogue Web App" />
      </Stack>
    </>
  );
};

export default Highlights;
