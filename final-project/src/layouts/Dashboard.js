import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
    return (
        <div data-theme="light">
            <h1>Dashboard</h1>
            <Sidebar />
            <Outlet />
        </div>
    );
};

export default Dashboard;
