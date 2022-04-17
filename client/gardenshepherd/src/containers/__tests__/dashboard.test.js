import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Dashboard from '../dashboard/dashboard.js';

const MockDashboard =()=> {
    return (
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    )
}

// Ensures page renders properly
describe("Dashboard component tests", ()=>{
    it("Dashboard renders", ()=>{
        render(<MockDashboard />);
        const parallaxElement = screen.getByTestId("parallax-test");
        expect(parallaxElement).toBeInTheDocument();
        const dropdownElement = screen.getByTestId("dropdown-test");
        expect(dropdownElement).toBeInTheDocument();
        const buttonElement = screen.getByTestId("button-test");
        expect(buttonElement).toBeInTheDocument();
    })  

})