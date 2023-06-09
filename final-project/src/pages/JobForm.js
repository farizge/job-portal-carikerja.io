import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const JobForm = () => {
    const { states, func } = useContext(GlobalContext);
    const { input } = states;
    const { handleInput } = func;
    const {
        company_city,
        company_image_url,
        company_name,
        job_description,
        job_qualification,
        job_status,
        job_tenure,
        job_type,
        salary_max,
        salary_min,
        title,
    } = input;
    return (
        <form className="form-control w-full flex flex-col gap-3 pt-5 lg:pt-10">
            <h1 className="text-center font-bold text-xl">Post New Job</h1>
            <label className="label">
                <span className="label-text">Job Title</span>
            </label>
            <input
                type="text"
                placeholder="Ex: Frontend Developer"
                required
                name="title"
                value={title}
                onChange={handleInput}
                className="input input-secondary input-bordered w-full"
            />
            <label className="label">
                <span className="label-text">Job Description</span>
            </label>
            <textarea
                type="text"
                placeholder="Job Description"
                required
                name="job_description"
                value={job_description}
                onChange={handleInput}
                className="textarea textarea-secondary textarea-bordered w-full"
            />
            <label className="label">
                <span className="label-text">Job Qualification</span>
            </label>
            <textarea
                type="text"
                placeholder="Job Qualification"
                required
                name="job_qualification"
                value={job_qualification}
                onChange={handleInput}
                className="textarea textarea-secondary textarea-bordered w-full"
            />
            <label className="label">
                <span className="label-text">Job Type</span>
            </label>
            <select
                className="select select-secondary w-full font-normal"
                required
                name="job_type"
                value={job_type}
                onChange={handleInput}
            >
                <option disabled>Select Job Type</option>
                <option>On-Site</option>
                <option>Hybrid</option>
                <option>Remote</option>
            </select>
            <label className="label">
                <span className="label-text">Job Tenure</span>
            </label>
            <select
                className="select select-secondary w-full font-normal"
                required
                name="job_tenure"
                value={job_tenure}
                onChange={handleInput}
            >
                <option disabled>Select Job Tenure</option>
                <option>Fulltime</option>
                <option>Parttime</option>
                <option>Kontrak</option>
            </select>
            <label className="label">
                <span className="label-text">Company Name</span>
            </label>
            <input
                type="text"
                placeholder="Company Name"
                required
                name="company_name"
                value={company_name}
                onChange={handleInput}
                className="input input-secondary input-bordered w-full"
            />
            <label className="label">
                <span className="label-text">Company Image URL</span>
            </label>
            <input
                type="url"
                required
                name="company_image_url"
                value={company_image_url}
                onChange={handleInput}
                placeholder="Use URL ex: https://company.image.jpg"
                className="input input-secondary input-bordered w-full"
            />
            <label className="label">
                <span className="label-text">Company City</span>
            </label>
            <input
                type="text"
                required
                name="company_city"
                value={company_city}
                onChange={handleInput}
                placeholder="Ex: Surabaya"
                className="input input-secondary input-bordered w-full"
            />
            <label className="label">
                <span className="label-text">Salary Minimum</span>
            </label>
            <input
                type="number"
                placeholder="Ex: 2000000"
                name="salary_min"
                value={salary_min}
                onChange={handleInput}
                className="input input-secondary input-bordered w-full"
            />
            <label className="label">
                <span className="label-text">Salary Maximum</span>
            </label>
            <input
                type="number"
                placeholder="Ex: 4000000"
                name="salary_max"
                value={salary_max}
                onChange={handleInput}
                className="input input-secondary input-bordered w-full"
            />
            <label className="cursor-pointer label">
                <span className="label-text">Job Status Open?</span>
            </label>
            <input
                type="checkbox"
                className="checkbox checkbox-secondary"
                name="job_status"
                checked={job_status === 1}
                onChange={handleInput}
            />
            <button className="btn btn-secondary mt-5" type="submit">
                Submit
            </button>
        </form>
    );
};

export default JobForm;
