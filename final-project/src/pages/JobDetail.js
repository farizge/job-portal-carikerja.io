import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const JobDetail = () => {
    const { idJob } = useParams();
    const { states } = useContext(GlobalContext);
    const { jobDetail, setJobDetail } = states;
    useEffect(() => {
        axios
            .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${idJob}`)
            .then((res) => {
                setJobDetail(res.data);
            });
    }, []);

    const {
        title,
        company_city,
        company_image_url,
        company_name,
        job_description,
        job_qualification,
        job_tenure,
        job_type,
        salary_max,
        salary_min,
    } = jobDetail;

    return (
        <div className="card flex mx-32 my-10 shadow-xl p-20 justify-around lg:flex-row">
            <div className="flex flex-col items-center mr-14">
                <img src={company_image_url} className="max-w-[200px] mb-3" />
                <p className="font-bold text-xl">{company_name}</p>
                <p>{company_city}</p>
                <p>({job_type})</p>
            </div>
            <div className=" flex flex-col gap-3 items-start">
                <h1 className="font-bold text-primary text-3xl">{title}</h1>
                <div className="badge badge-accent font-medium">
                    {job_tenure}
                </div>
                <p className="font-medium">Job Description</p>
                <p>{job_description}</p>
                <p className="font-medium">Qualification</p>
                <p>{job_qualification}</p>
                <p className="font-medium">Salary</p>
                <p className="">{`Rp.${salary_min} - Rp${salary_max}`}</p>
            </div>
        </div>
    );
};

export default JobDetail;
