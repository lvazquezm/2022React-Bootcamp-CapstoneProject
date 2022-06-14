import React from "react";
import {render, screen} from "@testing-library/react"
import Logo from "./Header"

describe('Logo', () => {
    test('Logo must have src = "/../Images/Header/furnitures.png" and alt = "Logo"', () => {
        render(<Logo />);
        expect(screen.getByTestId("imageLogo")).toHaveAttribute('alt', 'Logo');
        expect(screen.getByTestId("imageLogo")).toHaveAttribute('src', 'furnitures.png');
    })
});