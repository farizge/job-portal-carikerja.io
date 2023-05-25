import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2 className="font-bold text-xl">Kelas Reactjs</h2>
            <div className="flex gap-4">
                <Link
                    className="hover:text-purple-500 hover:font-semibold"
                    to="/"
                >
                    Home
                </Link>
                <Link
                    className="hover:text-purple-500 hover:font-semibold"
                    to="/tugas7"
                >
                    Tugas7
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
