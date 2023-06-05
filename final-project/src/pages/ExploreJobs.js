import React from "react";
import SearchBar from "../components/SearchBar";
import AllJobList from "../components/AllJobList";

const ExplereJobs = () => {
    return (
        <div>
            <div className="hero min-h-[25vh] bg-primary py-10 mb-5">
                <div className="flex flex-col items-center gap-10">
                    <div>
                        <h1 className="text-3xl font-bold text-center text-neutral-content">
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
