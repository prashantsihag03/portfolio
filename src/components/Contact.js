import React from "react";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";
import '../css/Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <SectionHeading heading="Get in touch..." icon="../resources/images/blog.svg"/>
            <ContactForm />
        </section>
    );
}

export default Contact;