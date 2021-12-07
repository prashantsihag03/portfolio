import React from "react";
import ContactForm from "./ContactForm";
import SectionHeading from "./SectionHeading";
import blogIcon from "../../resources/images/blog.svg";
import '../css/Contact.css';

const Contact = () => {
    return (
        <section id="contact">
            <SectionHeading heading="Get in touch..." icon={blogIcon}/>
            <ContactForm />
        </section>
    );
}

export default Contact;