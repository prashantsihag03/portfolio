import React from "react";
import App from "./App";
import { render } from '@testing-library/react';

describe("<App />", () => {
    it('does not show scrollTo button when page first loads', () => {
        const { queryByTestId } = render(<App />);
        const scrollButton = queryByTestId("scrollToButton");
        expect(scrollButton).not.toBeInTheDocument();
    });
})