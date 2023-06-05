import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    //navigate
    const navigate = useNavigate();
    //states
    const [data, setData] = useState([]);
    const [jobDetail, setJobDetail] = useState([]);
    const [keyword, setKeyword] = useState("");
    const [filtered, setFiltered] = useState(data);

    //fetching data
    const fetchData = () => {
        axios
            .get("https://dev-example.sanbercloud.com/api/job-vacancy")
            .then((res) => setData(res.data.data));
    };

    // handle see details button
    const seeDetail = (e) => {
        let idJob = parseInt(e.target.value);
        navigate(`job-detail/${idJob}`);
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

    const states = {
        data,
        setData,
        jobDetail,
        setJobDetail,
        keyword,
        setKeyword,
        filtered,
        setFiltered,
    };
    const func = { fetchData, seeDetail, handleSearch };

    return (
        <GlobalContext.Provider value={{ states, func }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
