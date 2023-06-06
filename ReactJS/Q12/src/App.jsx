import React, { useState } from "react";
import "./App.css";

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div className="container">
            <h1 className="title">Counter App</h1>
            <div className="counter-container">
                <button className="button" onClick={decrement}>
                    -
                </button>
                <span className="count">{count}</span>
                <button className="button" onClick={increment}>
                    +
                </button>
            </div>
        </div>
    );
};

export default App;
