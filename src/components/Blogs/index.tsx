import * as React from "react";
import StyledComponents from 'styled-components';
import SectionHeading from "../SectionHeading";
import webRTCImg from '../../assets/images/webRTC.png';
import dynamoDbImg from '../../assets/images/dynamoDBBlog.jpg';
import facebookImg from '../../assets/images/facebookBlog.png';
import scientificMethodImg from '../../assets/images/scientifcMethodForDataAnalysis.png';
import { debounce } from "lodash";
import { ArticleOutlined } from "@mui/icons-material";
import MenuButton from "../MenuButton";
import useIntersectionObserver from "../App/useIntersectionObserver";
import Blog from "./Blog";

const BlogSection = StyledComponents.section`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;
  color: white;
  width: 100%;
  margin: auto;
  font-family: "Roboto Slab", serif;  
`;

const Ul = StyledComponents.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: stretch;
  padding: 1em;
`;

const mediaMaxWidth = 850;

interface Blogs {
  observer: IntersectionObserver
}

const Blogs: React.FC<Blogs> = ({observer}: Blogs) => {
  const {element, setElement} = useIntersectionObserver(observer);
  const [currentSiteWidth, setCurrentSiteWidth] = React.useState(window.innerWidth);
  const [visible, setVisible] = React.useState<boolean>(false);
  const [intersectionObserver] = React.useState<IntersectionObserver>(new IntersectionObserver((entries) => {
    const blogContainerElement = entries.find(entry => entry.target.id === "blogs");
    if (blogContainerElement && blogContainerElement.isIntersecting && !visible) {
      setVisible(true);
    }
  }, {root: null, rootMargin: '0px', threshold: 1}))

  const debouncedHandleResize = React.useCallback(
    // debouncing as not needed to call at every resize which is a lot of calls which also impacts performance.
    debounce(() => {
      setCurrentSiteWidth(window.innerWidth);  
    }, 500), 
    []
  )    
    
  React.useEffect(()=>{
    window.addEventListener('resize', debouncedHandleResize);
    // executes on component unMount
    // deregistering event listener to avoid memory leak on multiple renders
    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])

  React.useEffect(() => {
    if (element) {
      intersectionObserver.observe(element);
    }
    () => {
      intersectionObserver.disconnect();
    }
  }, [element])
  
  const data = [
      {
          link: "https://prashant-sihag.medium.com/brief-explanation-of-webrtc-and-how-its-components-work-together-to-provide-real-time-communication-83cf4d2315da",
          img: webRTCImg, 
          heading: "Simplifying WebRTC: A web technology for Real Time Communication.",
          desc: "In this blog, I have explained WebRTC, its components such as NAT, ICE, STUN, TURN, Signalling, etc, and their working in a simple and easy to understand manner using examples.",
      },
      {
          link: "https://medium.com/analytics-vidhya/awss-dynamodb-and-how-does-it-work-357fde5995cb",
          img: dynamoDbImg,
          heading: "AWS DynamoDB and How does it work?",
          desc: "In this blog, I have explored DynamoDB as a service, how does it work, and some important concepts to know before getting started with it.",
      },
      {
          link: "https://prashant-sihag.medium.com/getting-started-with-facebooks-graph-api-in-python-8189c37f7f3d",
          img: facebookImg,
          heading: "Getting started with Facebook's Graph API in Python",
          desc: "In this blog, I have explained how to get started with Facebook’s Graph API,which is a primary way of interacting with Facebook for developers, in a very simple and concise manner.",
      },
      {
          link: "https://medium.com/analytics-vidhya/scientific-method-for-data-analysis-41798626371a",
          img: scientificMethodImg,
          heading: "Scientific Method for Data Analysis",
          desc: "In this blog, I have described in detail how scientific method for data analysis works and is utilised in data analysis while explaining what each stage of this process is concerned with.",
      },
  ];

  return (
    <BlogSection id="blogs" ref={(node) => {setElement(node)}}>
      <SectionHeading heading={'Blogs'} iconComponent={ArticleOutlined} />
      {visible  
        ? (<Ul>
          {data.map((blog, index) => 
            <Blog key={index} alt="blog" title={blog.heading} content={blog.desc} media={blog.img} link={blog.link} delay={index*100}/>
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