import { Box, Chip, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import SectionHeading from "../SectionHeading";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VideoPlayer from "../VideoPlayer";
import MenuButton from "../MenuButton";

const HighlightsV2: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const isLightMode = useMediaQuery("(prefers-color-scheme: light)");

  return (
    <>
      <SectionHeading heading={"Highlights"} iconComponent={StarBorderIcon} />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        width="100%"
        minHeight="40vh"
        sx={{ backgroundColor: "#202020" }}
        padding={"3rem"}
        borderRadius={1}
      >
        <Stack
          direction={"column"}
          width="50%"
          justifyContent={"center"}
          alignItems={"center"}
          paddingLeft="1rem"
          paddingRight="2rem"
        >
          <SectionHeading heading={"Dialogue Web App"} size="30px" />
          <Stack
            direction={"row"}
            justifyContent={"flex-start"}
            alignItems={"center"}
            width="100%"
            marginTop={"0.5rem"}
            marginBottom={"0.5rem"}
          >
            <Chip
              color="primary"
              label="Personal Project"
              variant="filled"
              size="small"
              sx={{ marginRight: "1rem" }}
            />
            <Chip
              color="primary"
              label="Demo Video"
              variant="filled"
              size="small"
            />
          </Stack>
          <>
            <Typography
              variant="subtitle1"
              sx={{
                color: "primary.main",
                marginBottom: "1rem",
              }}
            >
              <Typography
                component={"span"}
                variant="subtitle1"
                sx={{
                  color: isLightMode ? "white" : "secondary.main",
                  backgroundColor: isLightMode ? "secondary.main" : "none",
                }}
              >
                Immersive demonstration
              </Typography>{" "}
              of an{" "}
              <Typography
                component={"span"}
                variant="subtitle1"
                sx={{
                  color: isLightMode ? "white" : "secondary.main",
                  backgroundColor: isLightMode ? "secondary.main" : "none",
                }}
              >
                interactive guided tour
              </Typography>{" "}
              showcasing the seamless functionalities of Dialogue web app.
            </Typography>
            <Box width={"100%"}>
              <MenuButton
                value="Github"
                link="https://github.com/prashantsihag03/dialogueV2"
              />
            </Box>
          </>
        </Stack>
        <Stack
          direction={"column"}
          width="40%"
          height={"100%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Stack
            width={"450px"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <VideoPlayer
              buttonSize={isMobile ? "3em" : "5em"}
              thumbnailUrl={
                isLightMode
                  ? "./images/dialogue_thumbnail_light.jpg"
                  : "./images/dialogue_thumbnail_dark.jpg"
              }
              videoUrl="./images/Demo-GuidedTour-LightMode.mp4"
            />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default HighlightsV2;
