import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (email !== "" && password !== "") {
                const response = await axios.post(
                    "https://reqres.in/api/login",
                    {
                        email,
                        password,
                    }
                );
                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data.token)
                );
                setEmail("");
                setPassword("");
                navigate("/");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="flex flex-col  items-center justify-center ">
            <div className="container mx-auto px-4 my-4   ">
                <div className="grid md:grid-cols-12 gap-4 mx-auto ">
                    <div className="md:col-span-3  middle  ">
                        <p>
                            {" "}
                            email: "eve.holt@reqres.in", password: "cityslicka",
                        </p>
                    </div>
                    <div className="md:col-span-6  middle ">
                        <div className="card w-full bg-base-300 shadow-xl h-full">
                            <div className="card-body">
                                <h3 className="text-2xl">👉 Login Now</h3>
                                <>
                                    <form action="" onSubmit={handleSubmit}>
                                        <div className="form-control mx-auto  ">
                                            <label className="label">
                                                <span className="label-text">
                                                    Email{" "}
                                                </span>
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="example@email.com"
                                                className="input input-bordered mx-auto w-full"
                                                name="email"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                id="email"
                                            />
                                        </div>
                                        <div className="form-control mx-auto  ">
                                            <label className="label">
                                                <span className="label-text">
                                                    Password
                                                </span>
                                            </label>
                                            <input
                                                type="password"
                                                placeholder="Your Secure Password"
                                                className="input input-bordered mx-auto w-full"
                                                name="password"
                                                value={password}
                                                onChange={(e) =>
                                                    setPassword(e.target.value)
                                                }
                                                id="password"
                                            />
                                            <button
                                                className="btn  mt-4 w-full"
                                                type="submit"
                                            >
                                                Login Now
                                            </button>
                                        </div>
                                    </form>
                                </>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-3  middle "></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
