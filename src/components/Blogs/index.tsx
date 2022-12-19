import * as React from "react";
import SectionHeading from "../SectionHeading";
import { ArticleOutlined } from "@mui/icons-material";
import MenuButton from "../MenuButton";
import Blog from "./Blog";
import BlogItems from "../../Data/BlogItems";
import { BlogSection, Ul } from "./Styled";

const Blogs: React.FC = () => {
  const [element, setElement] = React.useState<HTMLElement | null>(null);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [intersectionObserver] = React.useState<IntersectionObserver>(new IntersectionObserver((entries) => {
    const blogContainerElement = entries.find(entry => entry.target.id === "blogs");
    if (blogContainerElement && blogContainerElement.isIntersecting && !visible) {
      setVisible(true);
    }
  }, {root: null, rootMargin: '0px', threshold: 1}))

  React.useEffect(() => {
    if (element) {
      intersectionObserver.observe(element);
    }
    () => {
      intersectionObserver.disconnect();
    }
  }, [element])
  

  return (
    <BlogSection id="blogs" ref={(node) => {setElement(node)}}>
      <SectionHeading heading={'Blogs'} iconComponent={ArticleOutlined} />
      {visible  
        ? (<Ul>
          {BlogItems.map((blog, index) => 
            <Blog key={index} alt="blog" title={blog.heading} content={blog.desc} media={blog.img} link={blog.link} delay={index*50}/>
          )}
        </Ul>)
        : null}
      <a href='https://medium.com/@prashant-sihag' target="_blank">
          <MenuButton value='more on Medium' />
      </a>
    </BlogSection>
  )
}

export default Blogs;