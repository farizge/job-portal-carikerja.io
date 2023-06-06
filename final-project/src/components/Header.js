import React from "react";
import { NavLink } from "react-router-dom";
import { FaBlackTie } from "react-icons/fa";

const Header = () => {
    return (
        <div className="navbar px-4 lg:px-28">
            <div className="navbar-start">
                <NavLink
                    to="/"
                    className="normal-case text-xl font-bold flex items-center"
                >
                    <i>
                        <FaBlackTie className="text-primary mr-1" />
                    </i>
                    CariKerja.io
                </NavLink>
            </div>

            <div className="navbar-end">
                <NavLink
                    to="explore-jobs"
                    className="font-semibold hidden lg:block mr-5"
                >
                    Explore Jobs
                </NavLink>
                <NavLink to="login" className="btn btn-secondary">
                    Login
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
