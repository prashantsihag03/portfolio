import React, { useState } from "react";
import { Card, CardActions, CardContent, CardMedia, Typography, Zoom } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

interface Blog {
  media: any;
  alt: string;
  title: string;
  content: string;
  link: string;
  delay: number;
}

const Blog: React.FC<Blog> = ({media, alt, title, content, link, delay}: Blog) => {
  const [headingColor, setHeadingColor] = useState<string>();

  return (
    <div style={{margin: "1em", boxSizing: "border-box"}}>
      <Zoom in style={{transitionDelay: `${delay}ms`}}>
        <Card sx={{ 
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
            // backgroundColor: "var(--heading)",
            color: "var(--primary)",
          }
        }}>
          <CardMedia
            sx={{
              opacity: 0.1, 
              position: "absolute", 
              top: "0", 
              left: "0", 
              objectFit: "cover", 
            }}
            component="img"
            height="100%"
            width="100%"
            image={media}
            alt={alt}
          />
          <CardContent style={{background: "transparent", zIndex: 2}}>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" fontSize={15} style={{color: "grey", letterSpacing: "0.5pt"}}>
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
    </div>
  );
}

export default Blog;