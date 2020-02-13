import React from "react";
import StarWarsCharacters from "./StarWarsCharacters";
import { render, fireEvent, act } from "@testing-library/react";

test('renders "success" next button', () => {
    const { getByText, findByText } = render(<StarWarsCharacters />);
    console.log(getByText);

    act(() => {
        fireEvent.click(getByText("Next"));
    });

    findByText(/next/i);
});