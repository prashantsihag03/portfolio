import * as React from "react";
import StyledComponents from 'styled-components';
import ContactForm from "../ContactForm";
import SectionHeading from "../SectionHeading";
import blogImg from "../../assets/images/blog.svg";

const ContactSection = StyledComponents.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;
    background-color: var(--background);
    margin-bottom: 10vh;
`;

interface ContactProps {
    passedRef: any
}

const Contact: React.FC<ContactProps> = (props) => {
    return (
        <ContactSection ref={props.passedRef}>
            <SectionHeading heading="Get in touch..." icon={blogImg}/>
            <ContactForm />
        </ContactSection>
    );
}

export default Contact;