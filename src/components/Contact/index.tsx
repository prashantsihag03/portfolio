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
    width: 100%;
    margin: auto;
    background: "transparent";
    margin-bottom: 10vh;
`;

const Contact: React.FC = (props) => {
    return (
        <ContactSection id="contact">
            <SectionHeading heading="Get in touch..." iconComponent={ContactMailOutlined}/>
            <ContactForm />
        </ContactSection>
    );
}

export default Contact;