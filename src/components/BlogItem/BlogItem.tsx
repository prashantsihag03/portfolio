import React from "react";
import { Box, Card, CardContent, CardMedia, Link, Typography, Zoom } from "@mui/material";
import { BoxStyles, cardMediaStyles, cardStyles } from "./styles";
import { BlogProps } from "./types";

const BlogItem: React.FC<BlogProps> = ({media, alt, title, content, link, delay, visible}: BlogProps) => {

  return (
    <Zoom in={visible} appear timeout={delay} easing={"ease-in-out"}>
      <Box sx={BoxStyles}>
        <Link href={link} target="_blank" rel="noreferrer noopener nofollow" sx={{height: '100%', width: '100%'}}>
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
              <Typography gutterBottom variant="h5" component="h5">
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

export default BlogItem;