import React from "react";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Footer from "./footer";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";

export default function App() {

    return (
        <React.Fragment>
            <Header />
            <NavigationMenu />
            <Blogs />
            <Contact />
            <Footer />
        </React.Fragment>
    );
}