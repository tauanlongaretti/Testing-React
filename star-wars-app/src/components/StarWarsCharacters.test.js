import React from "react";
import StarWarsCharacters from "./StarWarsCharacters";
import { render, fireEvent, act } from "@testing-library/react";

test('renders "success" next button', async() => {
  const { getByText, findByText } = render(<StarWarsCharacters />);
  console.log(getByText);

  act(() => {
    fireEvent.click(getByText("Next"));
  });

  findByText(/next/i);
});

test('renders "success" previous button', async() => {
  const { getByText, findByText } = render(<StarWarsCharacters />);
  console.log(getByText);

  act(() => {
    fireEvent.click(getByText("Previous"));
  });

  findByText(/previous/i);
});
