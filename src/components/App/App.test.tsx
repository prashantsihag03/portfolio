import React from "react";
import { render } from '@testing-library/react';
import App from "./App";

test('does NOT show scrollTo button when page first loads', () => {
    const { findByTestId } = render(<App />);
    expect(findByTestId("scrollToButton")).not.toBeInTheDocument();
});

test('does NOT show scrollTo button when page has been scrolled down to less than 300 px', () => {
    const { container, findByTestId } = render(<App />);
    container.scrollTo({
        top: 299,
        behavior: "smooth", // for smoothly scrolling
    });

    expect(findByTestId("scrollToButton")).not.toBeInTheDocument();
});

test('shows scrollTo button when page has been scroll down 300 px', () => {
    const { container, findByTestId } = render(<App />);
    container.scrollTo({
        top: 301,
        behavior: "smooth", // for smoothly scrolling
    });
    expect(findByTestId("scrollToButton")).toBeInTheDocument();
});