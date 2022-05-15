import * as React from "react";
import { useState } from "react";
import "./ContactForm.css";

const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const clearForm = (): void => {
    setFullName("");
    setEmail("");
    setMessage("");
    setPhone("");
    setSubject("");
    setWebsite("");
  };

  const handleSubmit = (e: any) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        fullname: fullName,
        email: email,
        website: website,
        phone: phone,
        subject: subject,
        message: message,
      }),
    })
      .then(() => {
        alert("Success!");
        clearForm();
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  const handleFullName = (e: any) => setFullName(e.target.value);
  const handleEmail = (e: any) => setEmail(e.target.value);
  const handleWebsite = (e: any) => setWebsite(e.target.value);
  const handlePhone = (e: any) => setPhone(e.target.value);
  const handleSubject = (e: any) => setSubject(e.target.value);
  const handleMessage = (e: any) => setMessage(e.target.value);

  return (
    <form
      action=""
      className="contactForm"
      name="contact"
      onSubmit={handleSubmit}
      onReset={clearForm}
    >
      <h1>
        Have something on your mind that you would like to discuss?
        <br />
        Get in touch by filling out the following form and I will get back to
        you soon.
      </h1>
      <input
        type="text"
        name="fullname"
        value={fullName}
        onChange={handleFullName}
        id="contact-fullname"
        placeholder="Full name"
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={handleEmail}
        id="contact-email"
        placeholder="Email address"
        required
      />
      <input
        type="text"
        name="website"
        value={website}
        onChange={handleWebsite}
        id="contact-website"
        placeholder="Website (Organization's or yours) (Optional)"
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        onChange={handlePhone}
        id="contact-phone"
        placeholder="Phone number"
      />
      <input
        type="text"
        name="subject"
        value={subject}
        onChange={handleSubject}
        id="contact-subject"
        placeholder="subject"
      />
      <textarea
        maxLength={2000}
        name="message"
        value={message}
        onChange={handleMessage}
        placeholder="Type your message here"
        form="contactForm"
      ></textarea>
      <input
        type="submit"
        name="submit"
        value="Submit"
        className="submitform"
      />
      <input type="reset" name="reset" value="Clear" className="clearform" />
    </form>
  );
};

export default ContactForm;
