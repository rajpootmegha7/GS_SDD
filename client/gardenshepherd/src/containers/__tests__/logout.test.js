import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Logout from '../logout/Logout.js';

const MockLogout =()=> {
    return (
        <BrowserRouter>
            <Logout />
        </BrowserRouter>
    )
}

// Ensures page renders properly
describe("Logout component tests", ()=>{
    it("Logout renders", ()=>{
        render(<MockLogout />);
        const signoutElement = screen.getByTestId("signout-test");
        expect(signoutElement).toBeInTheDocument();
        expect(signoutElement).toHaveTextContent(/Successfully Logged Out/i);
        const logoutElement = screen.getByTestId("button-test");
        expect(logoutElement).toBeInTheDocument();
        expect(logoutElement).toHaveTextContent(/Login/i);
    })  
})