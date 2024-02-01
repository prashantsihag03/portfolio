import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import SectionHeading from "../SectionHeading";
import ConstructionIcon from "@mui/icons-material/Construction";
import FeatureList from "./FeatureList";

const Projects: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1100px)");

  return (
    <>
      <SectionHeading heading={"Projects"} iconComponent={ConstructionIcon} />
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        minHeight={isMobile ? "100vh" : "40vh"}
        position={"relative"}
        borderRadius={1}
        sx={{
          backgroundColor: "#0093E9",
          backgroundImage: "linear-gradient(320deg, #0093E9 0%, #80D0C7 100%)",
        }}
      >
        {isMobile ? (
          <Stack width={"100%"}>
            <Box
              component="img"
              src="./images/dialogue_chat_light.png"
              sx={{
                width: "100%",
                objectFit: "contain",
                borderRadius: "0.25rem",
              }}
            />
          </Stack>
        ) : null}
        <Stack
          direction={"column"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={isMobile ? "100%" : "50%"}
          padding={"2rem"}
          height={"100%"}
          sx={{ backgroundColor: "#ffffff1c" }}
        >
          <Box
            minHeight={"30%"}
            width={"100%"}
            padding={"1rem"}
            marginBottom={"5rem"}
          >
            <Box
              component="img"
              src="./images/allThemedDialogueLogo.svg"
              sx={{
                width: "7rem",
                objectFit: "contain",
              }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                color: "primary.light",
                fontFamily:
                  '"Roboto Slab Regular", "Helvetica", -apple-system, system-ui, serif',
              }}
            >
              Highly sophisticated web app connecting users with each other over
              multiple channels such as text, voice, and video and provide media
              sharing platform while giving them full control of their data.
            </Typography>
          </Box>
          <Box maxHeight={"70%"} width={"100%"} padding={"1rem"}>
            <FeatureList />
          </Box>
        </Stack>
        {!isMobile ? (
          <Stack width={"50%"}>
            <Box
              component="img"
              src="./images/dialogue_chat_light.png"
              sx={{
                width: "100%",
                objectFit: "contain",
                borderRadius: "0.25rem",
              }}
            />
          </Stack>
        ) : null}
      </Stack>
    </>
  );
};

export default Projects;
