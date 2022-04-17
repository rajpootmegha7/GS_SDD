import { render, screen, cleanup } from "@testing-library/react";
import Footer from '../Footer/Footer.js';


// Ensures component renders properly
test("Rendering Footer", ()=>{
    render(<Footer />);
    const footerElement = screen.getByTestId("footer-test");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent("Garden Shepherd");
})
