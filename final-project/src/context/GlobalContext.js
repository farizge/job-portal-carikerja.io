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

    const states = { data, setData, jobDetail, setJobDetail };
    const func = { fetchData, seeDetail };

    return (
        <GlobalContext.Provider value={{ states, func }}>
            {props.children}
        </GlobalContext.Provider>
    );
};
