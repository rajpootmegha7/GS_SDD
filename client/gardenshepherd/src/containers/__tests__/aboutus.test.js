import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Aboutus from '../aboutus/aboutus.js';

const MockAboutus =()=> {
    return (
        <BrowserRouter>
            <Aboutus />
        </BrowserRouter>
    )
}

// Ensures page renders properly
describe("About us component tests", ()=>{
    it("About us renders", ()=>{
        render(<MockAboutus />);
        const parallaxElement = screen.getByTestId("img1-test");
        expect(parallaxElement).toBeInTheDocument();
        const ottoTextElement = screen.getByTestId("otto-text-test");
        expect(ottoTextElement).toBeInTheDocument();
        expect(ottoTextElement).toHaveTextContent(/I am a Computer Science/i);
        const nateTextElement = screen.getByTestId("nate-text-test");
        expect(nateTextElement).toBeInTheDocument();
        expect(nateTextElement).toHaveTextContent(/Hello everyone!/i);
    })  
})