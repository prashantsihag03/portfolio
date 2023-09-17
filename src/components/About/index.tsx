import * as React from "react";
import SectionHeading from "../SectionHeading";
import { PersonOutlined } from "@mui/icons-material";
import { Box, Chip, Fade, Stack, SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/system";
import { AboutData, SummarisedAboutData } from "../../Data/About";

const containerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "auto",
  transition: "all 0.5s ease-in-out",
};

const About = () => {
  const [data, setData] = React.useState<string[]>(SummarisedAboutData);
  const [showSummarised, setShowSummarised] = React.useState<boolean>(true);

  return (
    <Fade in={true} appear timeout={300}>
      <Box component="div" sx={containerStyles} id="about">
        <SectionHeading
          heading="A bit about me"
          iconComponent={PersonOutlined}
        />
        <Stack
          direction="row"
          width="100%"
          spacing={1}
          sx={{ marginBottom: "10px", padding: "0 0.5em" }}
        >
          <Chip
            variant={showSummarised ? "filled" : "outlined"}
            label="Summarised"
            size="small"
            color="primary"
            onClick={() => {
              setShowSummarised(true);
              setData(SummarisedAboutData);
            }}
          />
          <Chip
            variant={showSummarised ? "outlined" : "filled"}
            label="Elaborated"
            size="small"
            color="primary"
            onClick={() => {
              setShowSummarised(false);
              setData(AboutData);
            }}
          />
        </Stack>
        {data.map((paragraph, index) => (
          <Typography key={index} variant="body1" component="p">
            {paragraph}
            <br />
            <br />
          </Typography>
        ))}
      </Box>
    </Fade>
  );
};

export default About;
