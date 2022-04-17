import { render, screen, cleanup } from "@testing-library/react";
import Button from '../Button.jsx';

// Ensures component renders properly
test("Rendering Button", ()=>{
    render(<Button />);
    const buttonElement = screen.getByTestId("button-test");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("");
})
