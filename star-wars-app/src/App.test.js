import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import axios from "axios";

jest.mock("axios", () => {
    return {
      get: jest.fn(() =>
        Promise.resolve({
          data: {
            results: [{ name: "Tauan," }, { name: "Longaretti" }]
          }
        })
      )
    };
  });
  
  test('renders "success" logo', async () => {
    const wrapper = rtl.render(<App />);
    const logo = wrapper.getByAltText(/logo/i);
    expect(logo).toBeVisible();
  });
  
  test('made an api call', async() => {
      const wrapper = rtl.render(<App />);
      await wrapper.getAllByText(/next/i);
      expect(axios.get).toHaveBeenCalled();
  })