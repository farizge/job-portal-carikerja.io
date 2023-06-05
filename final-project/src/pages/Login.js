import React from "react";
import { FaBlackTie } from "react-icons/fa";

const Login = () => {
    return (
        <div data-theme="light" className="grid place-content-center h-screen">
            <div className="hero-content flex-col">
                <div
                    to="/"
                    className="normal-case text-xl font-bold flex items-center"
                >
                    <i>
                        <FaBlackTie className="text-primary mr-1" />
                    </i>
                    CariKerja.io
                </div>
                <div className="card lg:w-[420px] shadow-2xl">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="text"
                                placeholder="password"
                                className="input input-bordered"
                            />
                            <label className="label">
                                <a
                                    href=""
                                    className="label-text-alt link link-hover"
                                >
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
