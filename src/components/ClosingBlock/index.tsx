import * as React from "react";
import StyledComponents from "styled-components";
import About from "../About";
import Footer from "../Footer";

const ContainerDiv = StyledComponents.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 0.5em;
  background-color: var(--background);
  margin-top: 5vh;
`;

interface ClosingBlockProps {
  passedRef: any,
}

const ClosingBlock: React.FC<ClosingBlockProps> = (props) => {
  return (
    <ContainerDiv className="closingBlock">
      <About heading="Something more about me" passedRef={props.passedRef}>
        {`I have been fascinated by what one can do with computers ever since I
        got first introduced to programming in the year 10 of my school.`}
        <br /> <br />
        {`Currently, I work as a Software developer at Alex Solutions where I help
        in designing, architecting, developing, documenting, and maintaining
        efficient and performant software by effectively communicating and
        utilising tools and technologies such as Java, SpringBoot, Play
        Framework, React, Redux, ElasticSearch, Gitlab, Jenkins, RabbitMQ, AWS,
        and many more.`}
        <br /> <br />
        {`Being a Computer Vision, and NLP fanatic, I find myself
        engaged into these as well from time to time along with other new technologies. Apart from programming, I
        enjoy reading books, writing blog, cycling, and playing video games.`}
        <br /> <br />
        {`If you are a fellow software developer or anyone who is just as curious 
        about technology if not more and wants to collaborate on anything, 
        or a recruiter looking for suitable candidate, or just wants to network, please feel free to reach out to me.`}
        <br /> <br />
        {`Thank you for visiting. Have a great day !`}
      </About>
      <Footer content="© 2022 Prashant Sihag. All rights reserved." />
    </ContainerDiv>
  );
};

export default ClosingBlock;
