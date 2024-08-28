import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Home from "./Home";

it('should render car images', () => {
        const { getAllByAltText } = render(<Home />);
        const carImages = screen.getAllByAltText('');
        expect(carImages.length).toBe(3);
    });
