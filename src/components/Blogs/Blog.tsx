import React from "react";
import { Box, Card, CardActions, CardContent, CardMedia, SxProps, Theme, Typography, Zoom } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface Blog {
  media: any;
  alt: string;
  title: string;
  content: string;
  link: string;
  delay: number;
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
  justifyContent: "space-between",
  maxWidth: 445, 
  height: '100%', 
  backgroundColor: "black", 
  color: "white", 
  padding: "2em 1em", 
  "&:hover": {
    color: "var(--primary)",
  },
  ["@media only screen and (max-width: 1100px)"]: {
    maxWidth: 600,
  }
}

const cardMediaStyles: SxProps<Theme> = {
  opacity: 0.1, 
  position: "absolute", 
  top: "0", 
  left: "0", 
  objectFit: "cover", 
}

const Blog: React.FC<Blog> = ({media, alt, title, content, link, delay}: Blog) => {

  return (
    <Box sx={BoxStyles}>
      <Zoom in style={{transitionDelay: `${delay}ms`}}>
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
            <Typography gutterBottom variant="h5" component="div" style={{fontSize: "clamp(1.2rem, 2vw, 1.8rem)"}}>
              {title}
            </Typography>
            <Typography variant="body2" fontSize={15} style={{color: "var(--light)", letterSpacing: "0.5pt"}}>
              {content}
            </Typography>
          </CardContent>
          <CardActions style={{zIndex: 2}}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer noopener nofollow"
              title="Click to read more"
            >
              <OpenInNewIcon htmlColor="white" sx={{
                color: "white",
                "&:hover": {
                  cursor: "pointer",
                  color: "var(--primary)",
                }
              }}/>
            </a>
          </CardActions>
        </Card>
      </Zoom>
    </Box>
  );
}

export default Blog;