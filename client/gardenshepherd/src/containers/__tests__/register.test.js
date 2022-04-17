import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from '../register/register.js';

const MockRegister =()=> {
    return (
        <BrowserRouter>
            <Register />
        </BrowserRouter>
    )
}

// Ensures page renders properly
describe("Register component tests", ()=>{
    it("Register renders", ()=>{
        render(<MockRegister />);
        const signupElement = screen.getByTestId("signup-test");
        expect(signupElement).toBeInTheDocument();
        expect(signupElement).toHaveTextContent(/Sign up/i);
        const usernameElement = screen.getByPlaceholderText(/Enter your username/i);
        expect(usernameElement).toBeInTheDocument();
        const buttonElement = screen.getByTestId("button-test");
        expect(buttonElement).toBeInTheDocument();
    })  
})