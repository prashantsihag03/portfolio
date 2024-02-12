import { Box, Divider, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import MenuButton from "../MenuButton";
import VideoPlayer from "../VideoPlayer";
import PROJECT_DIALOGUE from "../../Data/Projects";

interface HighlightItemProps {
  title: string;
  gutterSize: string;
  mediaSize?: string;
}

const HighlightItem: React.FC<HighlightItemProps> = ({
  gutterSize,
  title,
}: HighlightItemProps) => {
  const isMobile = useMediaQuery("(max-width: 1100px)");
  const isLightMode = useMediaQuery("(prefers-color-scheme: light)");

  return (
    <Stack direction={"row"} width={"100%"} justifyContent={"center"}>
      <Stack width={isMobile ? "10%" : "30%"} direction={"column"}>
        <Typography
          variant="body1"
          sx={{ width: "100%", padding: "1rem", color: "secondary.main" }}
        >
          {isMobile ? "" : title}
        </Typography>
        <Box
          width="100%"
          height={"100%"}
          sx={{
            border: "1px solid whitesmoke",
            borderColor: "primary.main",
            borderRadius: "0.25rem",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
            borderRight: "none",
            padding: gutterSize,
            paddingRight: "0",
          }}
        >
          <Stack
            direction={"column"}
            width="100%"
            height={"100%"}
            justifyContent={"center"}
            alignItems={"left"}
            sx={{
              backgroundColor: "background.paper",
            }}
          >
            {!isMobile ? (
              <>
                <Typography
                  variant="subtitle1"
                  sx={{
                    paddingLeft: "1rem",
                    paddingRight: "2rem",
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
                <Box
                  sx={{
                    width: "30%",
                    paddingLeft: "1rem",
                  }}
                >
                  <MenuButton value="Github" link={PROJECT_DIALOGUE.github} />
                </Box>
              </>
            ) : null}
          </Stack>
        </Box>
      </Stack>
      <Stack
        width={isMobile ? "90%" : "70%"}
        height={"100%"}
        direction={"column"}
      >
        <Stack width={"100%"}>
          <VideoPlayer
            buttonSize={isMobile ? "5em" : "8em"}
            thumbnailUrl={
              isLightMode
                ? PROJECT_DIALOGUE.demo.thumbnail!.light
                : PROJECT_DIALOGUE.demo.thumbnail!.dark
            }
            videoUrl={PROJECT_DIALOGUE.demo.url}
          />
        </Stack>
        <Stack width={"100%"} direction={"row"}>
          <Box
            width={isMobile ? "90%" : "60%"}
            sx={{
              paddingBottom: gutterSize,
              paddingRight: gutterSize,
              border: "1px solid whitesmoke",
              borderColor: "primary.main",
              borderRadius: "0.25rem",
              borderLeft: "none",
              borderTop: "none",
              borderTopRightRadius: "0",
              borderBottomLeftRadius: "0",
            }}
          >
            {isMobile ? (
              <Stack
                direction={"column"}
                width="100%"
                height={"100%"}
                justifyContent={"center"}
                alignItems={"left"}
                sx={{
                  backgroundColor: "background.paper",
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    paddingTop: "1rem",
                    paddingBottom: "0.25rem",
                    textAlign: "left",
                    color: "primary.main",
                  }}
                >
                  {title}
                </Typography>
                <Divider light variant="fullWidth" />
                <Typography
                  variant="subtitle1"
                  sx={{
                    padding: "1rem",
                    paddingLeft: "0",
                    paddingTop: "0.25rem",
                    paddingBottom: "0",
                    color: "primary.main",
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
                <Box
                  sx={{
                    width: "30%",
                    marginTop: "0.75rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <MenuButton value="Github" link={PROJECT_DIALOGUE.github} />
                </Box>
              </Stack>
            ) : (
              <Typography
                variant="body1"
                width={"100%"}
                height={"100%"}
                sx={{
                  backgroundColor: "background.paper",
                  padding: "1rem",
                  paddingBottom: "0",
                }}
              ></Typography>
            )}
          </Box>
          <Typography
            variant="body1"
            width={isMobile ? "10%" : "40%"}
            sx={{ padding: "1rem", textAlign: "right" }}
          ></Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HighlightItem;
