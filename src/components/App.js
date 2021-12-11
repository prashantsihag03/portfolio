import React, { useRef } from "react";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";

export default function App() {

    const blogsRef = useRef("BlogsSection");
    const aboutRef = useRef("AboutSection");
    const contactRef = useRef("ContsctSection");

    return (
        <React.Fragment>
            <Header />
            <NavigationMenu blogsRef= {blogsRef} aboutRef= {aboutRef} contactRef={contactRef} />
            <Blogs passedRef={blogsRef} />
            <Contact passedRef={contactRef} />
            <Footer passedRef={aboutRef} />
        </React.Fragment>
    );
}