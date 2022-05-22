import * as React from "react";
import StyledComponents from 'styled-components';
import SectionHeading from "../SectionHeading";
import LimitedContent from "../LimitedContent";
import MoreButton from "../MoreButton";
import blogImg from '../../assets/images/blog.svg';
import webRTCImg from '../../assets/images/webRTC.png';
import dynamoDbImg from '../../assets/images/dynamoDBBlog.jpg';
import facebookImg from '../../assets/images/facebookBlog.png';
import scientificMethodImg from '../../assets/images/scientifcMethodForDataAnalysis.png';
import { debounce } from "lodash";

const BlogSection = StyledComponents.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    width: 90%;
    margin: auto;
    margin-top: 8vh;
    margin-bottom: 10vh;
    font-family: "Roboto Slab", serif;  
`;

const Ul = StyledComponents.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 0.5em;
`;

interface BlogsProps {
    passedRef: any
}

const Blogs: React.FC<BlogsProps> = (props) => {
  const [currentSiteWidth, setCurrentSiteWidth] = React.useState(window.innerWidth);
  const mediaMaxWidth = 850;

  const debouncedHandleResize = React.useCallback(
    // debouncing as not needed to call at every resize which is a lot of calls which also impacts performance.
    debounce(() => {
      console.log("Width changing! to " + window.innerWidth);
      setCurrentSiteWidth(window.innerWidth);  
    }, 500), 
    []
  )    
    
  React.useEffect(()=>{
    console.log("Adding event listener");
    window.addEventListener('resize', debouncedHandleResize);
    // executes on component unMount
    // deregistering event listener to avoid memory leak on multiple renders
    return () => {
      console.log("Removing listerner");
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [])
  
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
          heading: "Scientific Method for Data Analysis that can also be applied to other aspects of life.",
          desc: "In this blog, I have described in detail how scientific method for data analysis works and is utilised in data analysis which can also  be applied to other aspects of life for smoother planning and analysis.",
      },
  ];

  return (
    <BlogSection ref={props.passedRef}>
      <SectionHeading heading={'Blogs'} icon={blogImg} />
      <Ul>
        {data.map((blog, id) => 
          <LimitedContent 
            key={id}
            mobileVersion={currentSiteWidth < mediaMaxWidth} 
            {...blog} 
          /> 
        )}
      </Ul>
      <MoreButton link="https://medium.com/@prashant-sihag" content="more on Medium" />
    </BlogSection>
  )
}

export default Blogs;