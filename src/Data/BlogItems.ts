import webRTCImg from '../assets/images/webRTC.png'
import dynamoDbImg from '../assets/images/dynamoDBBlog.jpg'
import facebookImg from '../assets/images/facebookBlog.png'
import reduxSocketMdw from '../assets/images/reduxSocketMdw.png'
import scientificMethodImg from '../assets/images/scientifcMethodForDataAnalysis.png'

interface BlogItem {
  link: string
  img: unknown
  heading: string
  desc: string
}

const BlogItems: BlogItem[] = [
  {
    link: 'https://prashant-sihag.medium.com/implementing-real-time-interactivity-into-your-react-app-websocket-06debc669ef1',
    img: reduxSocketMdw,
    heading:
      'Implementing Real-time interactivity into your React App — WebSocket',
    desc: "In this blog, we'll explore how to effectively integrate a WebSocket connection within a Redux store, allowing you to manage real-time communication seamlessly in your React app.",
  },
  {
    link: 'https://prashant-sihag.medium.com/brief-explanation-of-webrtc-and-how-its-components-work-together-to-provide-real-time-communication-83cf4d2315da',
    img: webRTCImg,
    heading:
      'Simplifying WebRTC: A web technology for Real Time Communication.',
    desc: 'In this blog, I have explained WebRTC, its components such as NAT, ICE, STUN, TURN, Signalling, etc, and their working in a simple and easy to understand manner using examples.',
  },
  {
    link: 'https://medium.com/analytics-vidhya/awss-dynamodb-and-how-does-it-work-357fde5995cb',
    img: dynamoDbImg,
    heading: 'AWS DynamoDB and How does it work?',
    desc: 'In this blog, I have explored DynamoDB as a service, how does it work, and some important concepts to know before getting started with it.',
  },
  {
    link: 'https://prashant-sihag.medium.com/getting-started-with-facebooks-graph-api-in-python-8189c37f7f3d',
    img: facebookImg,
    heading: "Getting started with Facebook's Graph API in Python",
    desc: 'In this blog, I have explained how to get started with Facebook’s Graph API,which is a primary way of interacting with Facebook for developers, in a very simple and concise manner.',
  },
  {
    link: 'https://medium.com/analytics-vidhya/scientific-method-for-data-analysis-41798626371a',
    img: scientificMethodImg,
    heading: 'Scientific Method for Data Analysis',
    desc: 'In this blog, I have described in detail how scientific method for data analysis works and is utilised in data analysis while explaining what each stage of this process is concerned with.',
  },
]

export default BlogItems
