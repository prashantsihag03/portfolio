import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Link,
  Typography,
  Zoom,
} from "@mui/material";
import { BoxStyles, cardMediaStyles, cardStyles } from "./styles";
import { BlogProps } from "./types";

const BlogItem: React.FC<BlogProps> = ({
  media,
  alt,
  title,
  content,
  link,
  visible,
}: BlogProps) => {
  return (
    <Zoom in={visible} appear easing={"ease-in-out"}>
      <Box sx={BoxStyles}>
        <Link
          href={link}
          target="_blank"
          rel="noreferrer noopener nofollow"
          sx={{ height: "100%", width: "100%" }}
        >
          <Card sx={cardStyles}>
            <CardMedia
              sx={cardMediaStyles}
              component="img"
              height="100%"
              width="100%"
              image={media}
              alt={alt}
            />
            <CardContent style={{ background: "transparent", zIndex: 2 }}>
              <Typography gutterBottom variant="h3" component="h3">
                {title}
              </Typography>
              <Typography variant="subtitle2">{content}</Typography>
            </CardContent>
          </Card>
        </Link>
      </Box>
    </Zoom>
  );
};

export default BlogItem;
