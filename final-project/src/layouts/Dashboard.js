import React, { useState } from "react";
import HeaderDashboard from "../components/HeaderDashboard";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Dashboard = () => {
    return (
        <div data-theme="light">
            <HeaderDashboard />
            <div className="flex min-h-screen">
                <div className="w-1/5 shadow-xl rounded-xl hidden lg:block">
                    <Sidebar />
                </div>
                <section id="content" className=" flex-1 px-4 lg:px-20">
                    <Outlet />
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
