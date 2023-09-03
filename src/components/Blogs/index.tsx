import * as React from "react";
import SectionHeading from "../SectionHeading";
import { ArticleOutlined } from "@mui/icons-material";
import MenuButton from "../MenuButton";
import BlogItems from "../../Data/BlogItems";
import { BlogSection, listStyles } from "./Styled";
import { Box } from "@mui/material";
import BlogItem from "../BlogItem";

const Blogs: React.FC = () => {
  const [element, setElement] = React.useState<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [intersectionObserver] = React.useState<IntersectionObserver>(
    new IntersectionObserver(
      (entries) => {
        const blogContainerElement = entries.find(
          (entry) => entry.target.id === "blogs"
        );
        if (
          blogContainerElement &&
          blogContainerElement.isIntersecting &&
          !visible
        ) {
          setVisible(true);
        }
      },
      { root: null, rootMargin: "0px", threshold: 0.3 }
    )
  );

  React.useEffect(() => {
    if (element) {
      intersectionObserver.observe(element);
    }
    () => {
      intersectionObserver.disconnect();
    };
  }, [element]);

  return (
    <BlogSection
      id="blogs"
      ref={(node) => {
        setElement(node);
      }}
    >
      <SectionHeading heading={"Blogs"} iconComponent={ArticleOutlined} />
      <Box component="ul" sx={listStyles}>
        {BlogItems.map((blog, index) => (
          <BlogItem
            key={index}
            visible={visible}
            alt="blog"
            title={blog.heading}
            content={blog.desc}
            media={blog.img}
            link={blog.link}
            delay={index * 50}
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
