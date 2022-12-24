import React from "react";
import { Box, Card, CardContent, CardMedia, Link, SxProps, Theme, Typography, Zoom } from "@mui/material";

interface Blog {
  media: any;
  alt: string;
  title: string;
  content: string;
  link: string;
  delay: number;
  visible: boolean;
}

const BoxStyles: SxProps<Theme> = {
  margin: "1em",
  boxSizing: "border-box",

  ["@media only screen and (max-width: 600px)"]: {
    margin: "0%",
    marginBottom: "1em",
    marginTop: "1em",
    width: "100%",
  }
}

const cardStyles: SxProps<Theme> = {
  position: "relative", 
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  maxWidth: 500, 
  height: '100%', 
  backgroundColor: "background.default", 
  padding: "2em 1em", 
  ["@media only screen and (max-width: 1350px)"]: {
    maxWidth: '100%',
  }
}

const cardMediaStyles: SxProps<Theme> = {
  opacity: 0.1, 
  position: "absolute", 
  top: "0", 
  left: "0", 
  objectFit: "cover", 
}

const Blog: React.FC<Blog> = ({media, alt, title, content, link, delay, visible}: Blog) => {

  return (
    <Zoom in={visible} appear timeout={delay} easing={"ease-in-out"}>
      <Box sx={BoxStyles}>
        <Link href={link} target="_blank" rel="noreferrer noopener nofollow" title="Click to read more">
          <Card sx={cardStyles}>
            <CardMedia
              sx={cardMediaStyles}
              component="img"
              height="100%"
              width="100%"
              image={media}
              alt={alt}
            />
            <CardContent style={{background: "transparent", zIndex: 2}}>
              <Typography gutterBottom variant="h5" component="h5" sx={{"&:hover": {color: "secondary.main"}}}>
                {title}
              </Typography>
              <Typography variant="body1" style={{color: "text.secondary"}}>
                {content}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      </Box>
    </Zoom>
  );
}

export default Blog;