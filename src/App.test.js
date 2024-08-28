import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

import '@testing-library/jest-dom';

describe('App Component', () => {

  it('should render the Navbar', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const navbarElement = screen.getByRole('navigation');
    expect(navbarElement).toBeInTheDocument();
  });

  it('should render Home component on default route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    const homeHeadline = screen.getByText('GET YOUR FIRST CAR HERE!');
    expect(homeHeadline).toBeInTheDocument();
  });

  it('should render Shop component on /Shop route', () => {
    render(
      <MemoryRouter initialEntries={['/Shop']}>
        <App />
      </MemoryRouter>
    );
    const shopComponentText = screen.getByText('Shop Page'); // Assuming there's some text in your Shop component
    expect(shopComponentText).toBeInTheDocument();
  });

});