import * as React from "react";
import StyledComponents from 'styled-components';
import ContactForm from "../ContactForm";
import SectionHeading from "../SectionHeading";
import { ContactMailOutlined } from "@mui/icons-material";

const ContactSection = StyledComponents.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;
    background: "transparent";
    margin-bottom: 10vh;
`;

interface ContactProps {
    passedRef: any
}

const Contact: React.FC<ContactProps> = (props) => {
    return (
        <ContactSection ref={props.passedRef}>
            <SectionHeading heading="Get in touch..." iconComponent={ContactMailOutlined}/>
            <ContactForm />
        </ContactSection>
    );
}

export default Contact;