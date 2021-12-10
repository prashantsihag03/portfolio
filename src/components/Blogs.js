import React from "react";
import blogIcon from "../../resources/images/blog.svg";
import webRtcImage from "../../resources/images/webRTC.png";
import dynamoDBBlogImage from "../../resources/images/dynamoDBBlog.jpg";
import facebookBlogImage from "../../resources/images/facebookBlog.png";
import scientifcMethodForDataAnalysisImage from "../../resources/images/scientifcMethodForDataAnalysis.png";
import '../css/Blogs.css';
import SectionHeading from "./SectionHeading";

const Blogs = () => {
    const data = [
        {
            link: "https://prashant-sihag.medium.com/brief-explanation-of-webrtc-and-how-its-components-work-together-to-provide-real-time-communication-83cf4d2315da",
            img: webRtcImage, 
            heading: "Simplifying WebRTC: A web technology for Real Time Communication.",
            desc: "In this blog, I have explained WebRTC, its components such as NAT, ICE, STUN, TURN, Signalling, etc, and their working in a simple and easy to understand manner using examples.",
        },
        {
            link: "https://medium.com/analytics-vidhya/awss-dynamodb-and-how-does-it-work-357fde5995cb",
            img: dynamoDBBlogImage,
            heading: "AWS DynamoDB and How does it work?",
            desc: "In this blog, I have explored DynamoDB as a service, how does it work, and some important concepts to know before getting started with it.",
        },
        {
            link: "https://prashant-sihag.medium.com/getting-started-with-facebooks-graph-api-in-python-8189c37f7f3d",
            img: facebookBlogImage,
            heading: "Getting started with Facebook's Graph API in Python",
            desc: "In this blog, I have explained how to get started with Facebook’s Graph API,which is a primary way of interacting with Facebook for developers, in a very simple and concise manner.",
        },
        {
            link: "https://medium.com/analytics-vidhya/scientific-method-for-data-analysis-41798626371a",
            img: scientifcMethodForDataAnalysisImage,
            heading: "Scientific Method for Data Analysis that can also be applied to other aspects of life.",
            desc: "In this blog, I have described in detail how scientific method for data analysis works and is utilised in data analysis which can also  be applied to other aspects of life for smoother planning and analysis.",
        },
    ];

    return (
        <section id="blogs">
            <SectionHeading heading={'Blogs'} icon={blogIcon} />
            <ul>
                {data.map((blog, id) => {
                    return (
                        <a key={id} href={blog.link} target="_blank" rel="noreferrer noopener nofollow" title="Click to read more">
                            <li id="blog">
                                <div className="blog-image"><img src={blog.img} alt=""/></div>
                                <div className="blog-desc">
                                    <div className="blog-heading"><h3>{blog.heading}</h3></div>
                                    <div className="blog-overview"><p>{blog.desc}</p></div>
                                </div>
                            </li>
                        </a>
                    )
                })}
            </ul>
            <div id="moreblogs">
                <h4><a href="https://medium.com/@prashant-sihag" target="_blank" rel="noopener noreferrer nofollow">more on Medium</a></h4>
            </div>
        </section>

    )
}

export default Blogs;