import React from "react";
import { NavLink } from "react-router-dom";
import { FaBlackTie } from "react-icons/fa";

const Header = () => {
    return (
        <div className="navbar bg-base-100 px-20 pt-5">
            <div className="flex-1">
                <NavLink
                    to="/"
                    className="btn btn-ghost normal-case text-xl font-bold"
                >
                    <i className="text-primary mr-1">
                        <FaBlackTie />
                    </i>
                    CariKerja.io
                </NavLink>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li className="mr-5 font-semibold">
                        <NavLink to="explore-jobs">Explore Jobs</NavLink>
                    </li>
                    <li className="btn btn-secondary rounded-lg">
                        <NavLink to="login">Login</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
