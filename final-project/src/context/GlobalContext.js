import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    //navigate
    const navigate = useNavigate();
    //states
    const [data, setData] = useState([]);
    const [jobDetail, setJobDetail] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [filtered, setFiltered] = useState(data);
    const [input, setInput] = useState({
        company_city: "",
        company_image_url: "",
        company_name: "",
        job_description: "",
        job_qualification: "",
        job_status: 1,
        job_tenure: "Fulltime",
        job_type: "On-Site",
        salary_max: "",
        salary_min: "",
        title: "",
    });
    const [currentID, setCurrentID] = useState(-1);

    //fetching data
    const fetchData = () => {
        axios
            .get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => setData(res.data.data))
            .catch((err) => console.log(err));
    };

    // handle see details button
    const seeDetail = (e) => {
        let idJob = parseInt(e.target.value);
        navigate(`job-detail/${idJob}`);
    };
    const seeDetailDashboardMode = (e) => {
        let idJob = parseInt(e.target.value);
        navigate(`dashboard/job-detail/${idJob}`);
    };

    const handleSearch = () => {
        setFiltered(
            data.filter((job) => {
                if (
                    job.title.toLowerCase().match(keyword.toLocaleLowerCase())
                ) {
                    return job;
                }
            })
        );
    };

    const handleInput = (e) => {
        const { name, value, checked } = e.target;
        const newValue = name === "job_status" ? (checked ? 1 : 0) : value;
        setInput((prev) => ({
            ...prev,
            [name]: newValue,
        }));
    };
    const states = {
        data,
        setData,
        jobDetail,
        setJobDetail,
        keyword,
        setKeyword,
        filtered,
        setFiltered,

        input,
        setInput,
    };
    const func = {
        fetchData,
        seeDetail,
        seeDetailDashboardMode,
        handleSearch,
        handleInput,
    };

    return (
        <GlobalContext.Provider value={{ states, func }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
