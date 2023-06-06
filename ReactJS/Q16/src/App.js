import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import axios from "axios";
import PrivateRoute from "./components/PrivateRotue";
function App() {
    const user = localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null;

    console.log("Current User", user);
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="" element={<PrivateRoute />}>
                        <Route path="/" element={<Home />} />
                    </Route>
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
