import React from "react";
import propTypes from 'prop-types';
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";
import blogIcon from "../../resources/images/blog.svg";
import '../css/Contact.css';

const Contact = (props) => {
    return (
        <section id="contact" ref={props.passedRef}>
            <SectionHeading heading="Get in touch..." icon={blogIcon}/>
            <ContactForm />
        </section>
    );
}

Contact.propTypes = {
    passedRef: propTypes.object.isRequired,
}

export default Contact;