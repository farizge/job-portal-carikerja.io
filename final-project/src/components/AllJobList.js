import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AllJobList = () => {
    const { states, func } = useContext(GlobalContext);
    const { data } = states;
    const { fetchData, seeDetail } = func;

    useEffect(() => {
        fetchData();
    }, []);

    //tampilkan data
    const allJobListElement = data.map((job) => {
        return (
            <div className="card bg-base-100 shadow-xl" key={job.id}>
                <div className="card-body">
                    <div className="flex justify-between">
                        <img
                            src={job.company_image_url}
                            className="h-10 w-14"
                            alt="logo-company"
                        />
                        <div className="badge badge-accent justify-end font-medium">
                            {job.job_tenure}
                        </div>
                    </div>
                    <h2 className="card-title text-lg text-primary font-bold">
                        {job.title}
                    </h2>

                    <p className="text-xs text-secondary">
                        {`${job.company_name} | ${job.company_city} (${job.job_type})`}
                    </p>
                    <p className="text-xs">
                        {job.job_description === null
                            ? "-"
                            : job.job_description.length > 60
                            ? job.job_description.substr(0, 60) + "..."
                            : job.job_description}
                    </p>
                    <p className=" text-xs mb-7">{`Rp.${job.salary_min} - Rp${job.salary_max}`}</p>
                    <div className="card-actions justify-end">
                        <button
                            value={job.id}
                            className="btn btn-primary btn-sm"
                            onClick={seeDetail}
                        >
                            Details
                        </button>
                    </div>
                </div>
            </div>
        );
    });

    return <>{allJobListElement}</>;
};

export default AllJobList;
