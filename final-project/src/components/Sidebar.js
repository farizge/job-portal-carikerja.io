import React from "react";
import { NavLink } from "react-router-dom";
import { BsViewList } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { MdLogout } from "react-icons/md";
import { RxHome } from "react-icons/rx";

const Sidebar = () => {
    return (
        <div className="menu pl-10 pt-10 min-h-full flex flex-col gap-10 font-semibold">
            <NavLink
                to="post-job"
                className="btn animate-text bg-gradient-to-r from-primary to-secondary border-none rounded-lg text-center w-[80%]"
            >
                Add Job Vacancy
            </NavLink>

            <NavLink
                to="/dashboard"
                className="hover:text-secondary flex items-center gap-2"
            >
                <i className="text-xl">
                    <BsViewList />
                </i>
                <span>Job Vacancies</span>
            </NavLink>
            <NavLink
                to="profile"
                className="hover:text-secondary flex items-center gap-2"
            >
                <i className="text-xl">
                    <FiUser />
                </i>
                <span>Profile</span>
            </NavLink>
            <NavLink
                to="profile"
                className="hover:text-secondary flex items-center gap-2 mt-10"
            >
                <i className="text-xl">
                    <MdLogout />
                </i>
                <span>Logout</span>
            </NavLink>
            <NavLink
                to="/"
                className="hover:text-secondary flex items-center gap-2 mt-10"
            >
                <i className="text-xl">
                    <RxHome />
                </i>
                <span>Homepage</span>
            </NavLink>
        </div>
    );
};

export default Sidebar;
