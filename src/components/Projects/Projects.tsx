import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import SectionHeading from "../SectionHeading";
import ConstructionIcon from "@mui/icons-material/Construction";
import FeatureList from "./FeatureList";
import PROJECT_DIALOGUE from "../../Data/Projects";
import LaunchIcon from "@mui/icons-material/Launch";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Projects: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const isLightMode = useMediaQuery("(prefers-color-scheme: light)");
  const [activeFeature, setActiveFeature] = useState<string>("overview");
  const [featureImgLink, setFeatureImgLink] = useState<string>(
    isLightMode
      ? PROJECT_DIALOGUE.imgMap["overview"].light
      : PROJECT_DIALOGUE.imgMap["overview"].dark
  );

  const getImgIndicator = () => {
    const keys = Object.keys(PROJECT_DIALOGUE.imgMap);
    const currentImgIndex = keys.findIndex((key) => key === activeFeature);
    if (!currentImgIndex) return `1/${keys.length}`;
    return `${currentImgIndex + 1}/${keys.length}`;
  };

  const showImg = (prev?: boolean) => {
    const keys = Object.keys(PROJECT_DIALOGUE.imgMap);
    const currentImgIndex = keys.findIndex((key) => key === activeFeature);
    if (currentImgIndex === -1) {
      setActiveFeature("overview");
      setFeatureImgLink(
        isLightMode
          ? PROJECT_DIALOGUE.imgMap["overview"].light
          : PROJECT_DIALOGUE.imgMap["overview"].dark
      );
      return;
    }

    let newIndex = currentImgIndex + 1;
    if (currentImgIndex === 0 && prev === true) {
      newIndex = keys.length - 1;
    } else if (currentImgIndex === keys.length - 1 && prev === false) {
      newIndex = 0;
    } else if (prev === true) {
      newIndex = currentImgIndex - 1;
    }

    setActiveFeature(keys[newIndex]);
    setFeatureImgLink(
      isLightMode
        ? PROJECT_DIALOGUE.imgMap[keys[newIndex]].light
        : PROJECT_DIALOGUE.imgMap[keys[newIndex]].dark
    );
  };

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
              src={featureImgLink}
              sx={{
                width: "100%",
                objectFit: "contain",
                borderRadius: "0.25rem",
              }}
            />
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              bottom={"0"}
              right={"0"}
              marginTop={"3rem"}
            >
              <ArrowBackIosIcon
                onClick={() => {
                  showImg(true);
                }}
                sx={{
                  color: "primary.main",
                  margin: "1rem",
                  "&:hover": {
                    backgroundColor: "active.hover",
                  },
                }}
              />
              <Typography
                variant="subtitle1"
                component="span"
                margin="1rem"
                color={"primary"}
              >
                {getImgIndicator()}
              </Typography>
              <ArrowForwardIosIcon
                onClick={() => {
                  showImg(false);
                }}
                sx={{
                  color: "primary.main",
                  margin: "1rem",
                  "&:hover": {
                    backgroundColor: "active.hover",
                  },
                }}
              />
            </Stack>
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
              src={PROJECT_DIALOGUE.logoUrl}
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
              onFeatureClick={(featureName: string) => {
                console.log("Showing img for feature:", featureName);
                if (
                  Object.keys(PROJECT_DIALOGUE.imgMap).includes(featureName)
                ) {
                  setFeatureImgLink(
                    isLightMode
                      ? PROJECT_DIALOGUE.imgMap[featureName].light
                      : PROJECT_DIALOGUE.imgMap[featureName].dark
                  );
                  setActiveFeature(featureName);
                } else {
                  console.log("Img not found for feature:", featureName);
                }
              }}
            />
          </Box>
        </Stack>
        {!isMobile ? (
          <Box width={"50%"}>
            <Box
              component="img"
              src={featureImgLink}
              sx={{
                width: "100%",
                objectFit: "contain",
                borderRadius: "0.25rem",
              }}
            />
            <Stack
              direction={"row"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"100%"}
              bottom={"0"}
              right={"0"}
              marginTop={"3rem"}
            >
              <ArrowBackIosIcon
                onClick={() => {
                  showImg(true);
                }}
                sx={{
                  color: "primary.main",
                  margin: "1rem",
                  "&:hover": {
                    backgroundColor: "active.hover",
                  },
                }}
              />
              <Typography
                variant="subtitle1"
                component="span"
                margin="1rem"
                color={"primary"}
              >
                {getImgIndicator()}
              </Typography>
              <ArrowForwardIosIcon
                onClick={() => {
                  showImg(false);
                }}
                sx={{
                  color: "primary.main",
                  margin: "1rem",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "active.hover",
                  },
                }}
              />
            </Stack>
          </Box>
        ) : null}
      </Stack>
    </>
  );
};

export default Projects;
