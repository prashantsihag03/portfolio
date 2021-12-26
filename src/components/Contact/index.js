import React from "react";
import propTypes from 'prop-types';
import styled from 'styled-components';
import ContactForm from "../ContactForm";
import SectionHeading from "../SectionHeading";
import blogIcon from "../../../resources/images/blog.svg";

const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    margin: auto;
    background-color: var(--background);
    margin-bottom: 10vh;
`;

const Contact = (props) => {
    return (
        <ContactSection ref={props.passedRef}>
            <SectionHeading heading="Get in touch..." icon={blogIcon}/>
            <ContactForm />
        </ContactSection>
    );
}

Contact.propTypes = {
    passedRef: propTypes.object.isRequired,
}

export default Contact;