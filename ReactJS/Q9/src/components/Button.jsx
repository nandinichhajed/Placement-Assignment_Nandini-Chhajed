// Button.js
import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const Button = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className={`button ${theme === "dark" ? "dark" : "light"}`}
            onClick={toggleTheme}
        >
            Toggle Theme
        </button>
    );
};

export default Button;
