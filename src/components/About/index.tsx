import * as React from "react";
import SectionHeading from "../SectionHeading";
import { PersonOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Fade,
  Link,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { AboutData, SummarisedAboutData } from "../../Data/About";

const About = () => {
  const [data, setData] = React.useState<string[]>(SummarisedAboutData);
  const [showSummarised, setShowSummarised] = React.useState<boolean>(true);
  const isLightMode = useMediaQuery("(prefers-color-scheme: light)");

  return (
    <Fade in={true} appear timeout={300}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        margin="auto"
        sx={{ transition: "all 0.5s ease-in-out" }}
        component="div"
        id="about"
      >
        <SectionHeading
          heading="A bit about me"
          iconComponent={PersonOutlined}
        />
        {data.map((paragraph, index) => (
          <Typography key={index} variant="body1" component="p">
            {paragraph}
            <br />
            <br />
          </Typography>
        ))}
        <Box width="100%">
          <Button
            variant="text"
            sx={{
              textTransform: "none",
              textDecoration: "underline",
              color: "text.secondary",
            }}
            onClick={() => {
              if (showSummarised) {
                setShowSummarised(false);
                setData(AboutData);
                return;
              }
              setShowSummarised(true);
              setData(SummarisedAboutData);
            }}
          >
            {showSummarised ? "read more" : "read less"}
          </Button>
        </Box>
        <Typography variant="body1" component="p">
          <br />
          If you are a fellow software developer, a recruiter, or anyone who is
          curious about technology please feel free to reach out to me on{" "}
          <Link
            href="https://www.linkedin.com/in/prashantsihag"
            sx={{
              textDecoration: "none",
              color: isLightMode ? "white" : "secondary.main",
              backgroundColor: isLightMode ? "secondary.main" : "none",
            }}
          >
            LinkedIn
          </Link>
          .
        </Typography>
      </Stack>
    </Fade>
  );
};

export default About;
