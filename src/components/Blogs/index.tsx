import * as React from "react";
import SectionHeading from "../SectionHeading";
import { ArticleOutlined } from "@mui/icons-material";
import MenuButton from "../MenuButton";
import BlogItems from "../../Data/BlogItems";
import { BlogSection, listStyles } from "./Styled";
import { Box } from "@mui/material";
import BlogItem from "../BlogItem";

const Blogs: React.FC = () => {
  return (
    <BlogSection id="blogs">
      <SectionHeading heading={"Blogs"} iconComponent={ArticleOutlined} />
      <Box component="ul" sx={listStyles}>
        {BlogItems.map((blog, index) => (
          <BlogItem
            key={index}
            alt="blog"
            title={blog.heading}
            content={blog.desc}
            media={blog.img}
            link={blog.link}
          />
        ))}
      </Box>
      <MenuButton
        value="more on Medium"
        link="https://medium.com/@prashant-sihag"
      />
    </BlogSection>
  );
};

export default Blogs;
