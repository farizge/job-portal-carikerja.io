import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Login from "./pages/Login";
import JobDetail from "./pages/JobDetail";
import { GlobalProvider } from "./context/GlobalContext";
import ExplereJobs from "./pages/ExploreJobs";
import ErrorPage from "./pages/ErrorPage";
import Dashboard from "./layouts/Dashboard";
import DashboardIndex from "./pages/DashboardIndex";
import DashboardProfile from "./pages/DashboardProfile";
import JobForm from "./pages/JobForm";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <GlobalProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route
                                path="explore-jobs"
                                element={<ExplereJobs />}
                            />
                            <Route
                                path="job-detail/:idJob"
                                element={<JobDetail />}
                            />
                        </Route>
                        <Route path="*" element={<ErrorPage />} />
                        <Route path="login" element={<Login />} />
                        <Route path="/dashboard" element={<Dashboard />}>
                            <Route index element={<DashboardIndex />} />
                            <Route
                                path="profile"
                                element={<DashboardProfile />}
                            />
                            <Route path="post-job" element={<JobForm />} />
                            <Route
                                path="edit-job/:idJob"
                                element={<JobForm />}
                            />
                            <Route
                                path="job-detail/:idJob"
                                element={<JobDetail />}
                            />
                        </Route>
                    </Routes>
                </GlobalProvider>
            </BrowserRouter>
        </>
    );
};

export default App;
