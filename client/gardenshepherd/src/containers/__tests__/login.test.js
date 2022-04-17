import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Login from '../login/login.js';

// Ensures page renders properly
describe("Login component tests", ()=>{
    it("login renders", ()=>{
        render(<Login />);
        const signinElement = screen.getByTestId("sign-in-test");
        expect(signinElement).toBeInTheDocument();
        expect(signinElement).toHaveTextContent("Sign in");
        const usernameElement = screen.getByPlaceholderText(/Username/i)
        const passwordElement = screen.getByPlaceholderText(/password/i)
        const buttonElement = screen.getByRole("button", { name: /Submit/i})
        fireEvent.change(usernameElement, { target: { value: "Megha" }})
        expect(usernameElement).toHaveValue("Megha");
    })
    
    
})

