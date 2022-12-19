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
  width: "90%",
  margin: "auto",
  marginBottom: "8vh",
  transition: "all 0.5s ease-in-out",
}

const contentStyles: SxProps<Theme> = {
  color: "var(--light)",
  width: "100%",
  padding: "0.5em",
  fontSize: "1rem",
  letterSpacing: "0.5pt",
  lineHeight: "1.5em",
  fontFamily: "'Roboto Slab', serif",

  ["@media only screen and (max-width: 600px)"]: {
    width: "100%",
    fontSize: "0.9em",
  }
}

const About = () => {
  return (
    <Box component="div" sx={containerStyles} id="about">
      <SectionHeading heading="A bit about me" iconComponent={PersonOutlined} />
      <Typography sx={contentStyles}>
        I have been fascinated by what one can do with computers ever since I
        got first introduced to programming in the year 10 of my school.
        <br /> <br />
        Currently, I work as a Software developer at Alex Solutions where I help
        in designing, architecting, developing, documenting, and maintaining
        efficient and performant software by effectively communicating and
        utilising tools and technologies such as Java, SpringBoot, Play
        Framework, React, Redux, ElasticSearch, Gitlab, Jenkins, RabbitMQ, AWS,
        and many more.
        <br /> <br />
        If you are a fellow software developer or anyone who is just as curious 
        about technology if not more and wants to collaborate on anything, 
        or a recruiter looking for suitable candidate, or just wants to network, please feel free to reach out to me.
        <br /> <br />
        Thank you for visiting. Have a great day !
      </Typography>
    </Box>
  );
};

export default About;
