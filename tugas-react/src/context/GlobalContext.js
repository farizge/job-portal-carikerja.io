import axios from "axios";
import React, { createContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const navigate = useNavigate();

    //states
    const [data, setData] = useState(null);
    const [input, setInput] = useState({
        name: "",
        course: "",
        score: "",
    });
    const [fetchStatus, setFetchStatus] = useState(true);
    const [currentID, setCurrentID] = useState(-1);

    //fetching data from API
    const fetchData = () => {
        axios
            .get("https://backendexample.sanbercloud.com/api/student-scores")
            .then((res) => {
                setData([...res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
        setFetchStatus(false);
    };

    //handle form input
    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        if (name === "name") {
            setInput({ ...input, name: value });
        } else if (name === "course") {
            setInput({ ...input, course: value });
        } else if (name === "score") {
            setInput({ ...input, score: value });
        }
    };

    //handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        let { name, course, score } = input;
        if (currentID === -1) {
            axios
                .post(
                    "https://backendexample.sanbercloud.com/api/student-scores",
                    {
                        name,
                        course,
                        score,
                    }
                )
                .then((res) => {
                    setFetchStatus(true);
                    navigate("/tugas7");
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            axios
                .put(
                    `https://backendexample.sanbercloud.com/api/student-scores/${currentID}`,
                    {
                        name,
                        course,
                        score,
                    }
                )
                .then((res) => {
                    setFetchStatus(true);
                    navigate("/tugas7");
                })
                .catch((err) => console.log(err));
        }
        setCurrentID(-1);
        setInput({ name: "", course: "", score: "" });
    };

    //handle delete data
    const handleDelete = (e) => {
        const idData = parseInt(e.target.value);
        axios
            .delete(
                `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
            )
            .then(() => setFetchStatus(true))
            .catch((err) => console.log(err));
    };

    //handle edit data
    const handleEdit = (e) => {
        const idData = parseInt(e.target.value);
        navigate(`/edit/${idData}`);
    };

    //index score condition
    const indexScore = (score) => {
        if (score >= 80) {
            return "A";
        } else if (score >= 70) {
            return "B";
        } else if (score >= 60) {
            return "C";
        } else if (score >= 50) {
            return "D";
        } else if (score < 50) {
            return "E";
        }
    };

    const states = {
        data,
        setData,
        input,
        setInput,
        fetchStatus,
        setFetchStatus,
        currentID,
        setCurrentID,
    };

    const handler = {
        fetchData,
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit,
        indexScore,
    };

    return (
        <GlobalContext.Provider
            value={{
                states,
                handler,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};
