import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "./Home";

describe('Home Component', () => {
  
    it('should render the main title', () => {
      render(<Home />);
      
      // Check if the main title is rendered
      expect(screen.getByText(/General Store/i)).toBeInTheDocument();
    });
  
    it('should render the subtitle', () => {
      render(<Home />);
      
      // Check if the subtitle is rendered
      expect(screen.getByText(/Clothing Items & Electronic Devices/i)).toBeInTheDocument();
    });
  
    it('should render the footer with correct text', () => {
      render(<Home />);
      
      // Check if the footer text is rendered correctly
      expect(screen.getByText(/Images by: FOX1004, No Revisions, Keagan Henman & Lum3n on Pexels./i)).toBeInTheDocument();
    });
  
  });
