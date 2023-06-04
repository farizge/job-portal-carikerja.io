import React from "react";
import SearchBar from "../components/SearchBar";
import AllJobList from "../components/AllJobList";

const ExplereJobs = () => {
    return (
        <div>
            <div className="hero min-h-[20vh] bg-base-100 pt-10 mb-10">
                <div className="flex flex-col items-center gap-10">
                    <div>
                        <h1 className="text-4xl font-bold">
                            Temukan Pekerjaan Impianmu
                        </h1>
                    </div>
                    <SearchBar />
                </div>
            </div>
            <AllJobList />
        </div>
    );
};

export default ExplereJobs;
