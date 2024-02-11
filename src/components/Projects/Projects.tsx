import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import SectionHeading from "../SectionHeading";
import ConstructionIcon from "@mui/icons-material/Construction";
import FeatureList from "./FeatureList";
import PROJECT_DIALOGUE from "../../Data/Projects";
import LaunchIcon from "@mui/icons-material/Launch";

const Projects: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const isLightMode = useMediaQuery("(prefers-color-scheme: light)");

  return (
    <>
      <SectionHeading heading={"Projects"} iconComponent={ConstructionIcon} />
      <Stack
        direction={isMobile ? "column" : "row"}
        justifyContent={isMobile ? "space-between" : "center"}
        alignItems={"center"}
        width={"100%"}
        minHeight={isMobile ? "100vh" : "40vh"}
        position={"relative"}
        borderRadius={1}
        sx={{
          backgroundColor: isLightMode
            ? PROJECT_DIALOGUE.themeColor
            : PROJECT_DIALOGUE.themeColorDark,
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
          padding={isMobile ? "0.5rem" : "2rem"}
          height={"100%"}
          sx={{
            backgroundColor: isLightMode
              ? PROJECT_DIALOGUE.bgColor
              : PROJECT_DIALOGUE.bgColorDark,
          }}
        >
          <Box
            minHeight={"30%"}
            width={"100%"}
            padding={"1rem"}
            marginBottom={isMobile ? "2rem" : "5rem"}
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
                color: "primary.main",
                fontFamily:
                  '"Roboto Slab Regular", "Helvetica", -apple-system, system-ui, serif',
              }}
            >
              {PROJECT_DIALOGUE.description}
            </Typography>
            <Stack
              direction={"row"}
              width={"100%"}
              paddingTop={"1rem"}
              justifyContent={"left"}
              alignItems={"center"}
            >
              <Button
                variant="text"
                href={PROJECT_DIALOGUE.github}
                sx={{
                  marginRight: "1rem",
                  color: PROJECT_DIALOGUE.themeColor,
                  fontWeight: "bold",
                  letterSpacing: "1.2pt",
                  padding: "0.25rem 0.5rem",
                }}
              >
                <LaunchIcon fontSize="small" />
                Github
              </Button>
              <Button
                variant="text"
                href={PROJECT_DIALOGUE.href}
                sx={{
                  color: PROJECT_DIALOGUE.themeColor,
                  fontWeight: "bold",
                  letterSpacing: "1.2pt",
                  padding: "0.25rem 0.5rem",
                }}
              >
                <LaunchIcon fontSize="small" />
                Website
              </Button>
            </Stack>
          </Box>
          <Box maxHeight={"70%"} width={"100%"} padding={"1rem"}>
            <FeatureList
              features={PROJECT_DIALOGUE.features}
              color={PROJECT_DIALOGUE.themeColor}
            />
          </Box>
        </Stack>
        {!isMobile ? (
          <Box width={"50%"}>
            <Box
              component="img"
              src="./images/dialogue_chat_light.png"
              sx={{
                width: "100%",
                objectFit: "contain",
                borderRadius: "0.25rem",
              }}
            />
          </Box>
        ) : null}
      </Stack>
    </>
  );
};

export default Projects;
