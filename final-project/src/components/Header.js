import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBlackTie } from "react-icons/fa";
import { GlobalContext } from "../context/GlobalContext";

const Header = () => {
    const { states } = useContext(GlobalContext);
    const { isLoggedIn } = states;

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
                    className="font-semibold hidden hover:text-primary lg:block mr-5"
                >
                    Explore Jobs
                </NavLink>
                {!isLoggedIn ? (
                    <NavLink to="login" className="btn btn-secondary">
                        Login
                    </NavLink>
                ) : (
                    <NavLink
                        to="dashboard"
                        className="btn btn-secondary btn-outline"
                    >
                        Dashboard
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Header;
