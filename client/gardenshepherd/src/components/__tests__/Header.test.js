import { render, screen, cleanup } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from '../Header/Header.js';

const MockHeader =()=> {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
}

// Ensures component renders properly
test("Rendering Header", ()=>{
    render(<MockHeader />);
    const headerElement = screen.getByAltText("GS Logo");
    expect(headerElement).toBeInTheDocument();
    expect(headerElement).toHave
})
