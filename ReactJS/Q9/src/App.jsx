import React from "react";
import ThemeProvider from "./ThemeContext";
import Button from "./components/Button";

const App = () => {
    return (
        <ThemeProvider>
            <div className="App">
                <h1>Dashboard</h1>
                <Button />
            </div>
        </ThemeProvider>
    );
};

export default App;
