import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";

describe('Card Component', () => {
    
    const mockItem = {
        title: "Test Product",
        price: 99.99,
        image: "https://via.placeholder.com/150"
    };

    const mockOnAddToCart = jest.fn();

    it('should render item details correctly', () => {
        render(<Card item={mockItem} onAddToCart={mockOnAddToCart} />);
        
        // Check if the title, price, and image are rendered correctly
        expect(screen.getByText(mockItem.title)).toBeInTheDocument();
        expect(screen.getByText(`$${mockItem.price}`)).toBeInTheDocument();
        expect(screen.getByAltText(mockItem.title)).toHaveAttribute('src', mockItem.image);
    });

    it('should call onAddToCart when "Add to Cart" button is clicked', () => {
        render(<Card item={mockItem} onAddToCart={mockOnAddToCart} />);
        
        // Simulate clicking the "Add to Cart" button
        fireEvent.click(screen.getByText(/Add to Cart/i));
        
        // Check if the onAddToCart function was called with the correct item
        expect(mockOnAddToCart).toHaveBeenCalledTimes(1);
        expect(mockOnAddToCart).toHaveBeenCalledWith(mockItem);
    });

    it('should render the quantity input with default value 1', () => {
        render(<Card item={mockItem} onAddToCart={mockOnAddToCart} />);
        
        // Check if the quantity input has the default value of 1
        const quantityInput = screen.getByLabelText(/Quantity:/i);
        expect(quantityInput).toHaveValue(1);
    });

    it('should allow the user to change the quantity', () => {
        render(<Card item={mockItem} onAddToCart={mockOnAddToCart} />);
        
        // Simulate changing the value of the quantity input
        const quantityInput = screen.getByLabelText(/Quantity:/i);
        fireEvent.change(quantityInput, { target: { value: 3 } });
        
        // Check if the input value was updated correctly
        expect(quantityInput).toHaveValue(3);
    });
});