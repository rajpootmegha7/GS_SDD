import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import ForgotPass from '../forgotpass/forgotpass.js';

// Ensures page renders properly
describe("Forgot Password component tests", ()=>{
    it("forgotpass renders", ()=>{
        render(<ForgotPass />);
        const forgotElement = screen.getByTestId("forgot-test");
        expect(forgotElement).toBeInTheDocument();
        expect(forgotElement).toHaveTextContent("Forgot Password?");
        const usernameElement = screen.getByPlaceholderText(/Enter username/i);
        const usernameButtonElement = screen.getByText(/Submit/i);
        expect(usernameButtonElement).toBeInTheDocument();
        fireEvent.change(usernameElement, { target: { value: "Megha" }});
        expect(usernameElement).toHaveValue("Megha");
        fireEvent.click(usernameButtonElement);

        // test will return that button worked by logging username to the console
    })
    
    
})