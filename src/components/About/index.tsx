import * as React from "react";
import SectionHeading from "../SectionHeading";
import { PersonOutlined } from "@mui/icons-material";
import { Box, SxProps, Typography } from "@mui/material";
import { Theme } from "@mui/system";

const containerStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  margin: "auto",
  transition: "all 0.5s ease-in-out",
};

const contentStyles: SxProps<Theme> = {
  width: "100%",
  padding: "0em 0.5em",
};

const About = () => {
  return (
    <Box component="div" sx={containerStyles} id="about">
      <SectionHeading heading="A bit about me" iconComponent={PersonOutlined} />
      <Typography variant="subtitle2" sx={contentStyles}>
        Ever since I got first introduced to programming in the year 10 of my
        school, I have been fascinated by what one can do with computers. These
        days, I work as a{" "}
        <Typography variant="subtitle2" component="span">
          Software developer at Alex Solutions
        </Typography>{" "}
        where I have had the opportunity to work on full spectrum of web
        application development as well as CI/CD pipeline development.
        <br /> <br />
        If you are a fellow software developer or anyone who is just as curious
        about technology if not more and wants to collaborate on anything, or a
        recruiter looking for suitable candidate, or just wants to network,
        please feel free to reach out to me.
      </Typography>
    </Box>
  );
};

export default About;
