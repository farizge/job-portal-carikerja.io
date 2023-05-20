import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Button, TextInput, Label, Card } from "flowbite-react";
import { TableHead } from "flowbite-react/lib/esm/components/Table/TableHead";
import { TableHeadCell } from "flowbite-react/lib/esm/components/Table/TableHeadCell";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";
import { TableCell } from "flowbite-react/lib/esm/components/Table/TableCell";

const Tugas6 = () => {
    const [data, setData] = useState(null);
    const [input, setInput] = useState({
        name: "",
        course: "",
        score: "",
    });
    const [fetchStatus, setFetchStatus] = useState(true);
    const [currentID, setCurrentID] = useState(-1);

    useEffect(() => {
        if (fetchStatus === true) {
            axios
                .get(
                    "https://backendexample.sanbercloud.com/api/student-scores"
                )
                .then((res) => {
                    setData([...res.data]);
                })
                .catch((err) => {
                    console.log(err);
                });
            setFetchStatus(false);
        }
    }, [fetchStatus, setFetchStatus]);

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
                .then((res) => setFetchStatus(true))
                .catch((err) => console.log(err));
        }
        setCurrentID(-1);
        setInput({ name: "", course: "", score: "" });
    };

    const handleDelete = (e) => {
        const idData = parseInt(e.target.value);
        axios
            .delete(
                `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
            )
            .then(() => setFetchStatus(true))
            .catch((err) => console.log(err));
    };

    const handleEdit = (e) => {
        const idData = parseInt(e.target.value);
        axios
            .get(
                `https://backendexample.sanbercloud.com/api/student-scores/${idData}`
            )
            .then((res) => {
                let result = res.data;
                setInput({
                    name: result.name,
                    course: result.course,
                    score: result.score,
                });
                setCurrentID(idData);
            })
            .catch((err) => console.log(err));
    };

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

    const tableHead = [
        "No",
        "Nama",
        "Mata Kuliah",
        "Nilai",
        "Index Nilai",
        "Action",
    ];

    return (
        <div className="p-12">
            <Table className="text-center mb-10">
                <TableHead>
                    {tableHead.map((table, index) => {
                        return (
                            <TableHeadCell
                                key={index}
                                className="bg-purple-700 text-white"
                            >
                                {table}
                            </TableHeadCell>
                        );
                    })}
                </TableHead>
                <TableBody className="divide-y">
                    {data !== null &&
                        data.map((el, index) => {
                            return (
                                <TableRow key={el.id} className="text-black">
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{el.name}</TableCell>
                                    <TableCell>{el.course}</TableCell>
                                    <TableCell>{el.score}</TableCell>
                                    <TableCell>
                                        {indexScore(el.score)}
                                    </TableCell>
                                    <TableCell>
                                        <button
                                            value={el.id}
                                            onClick={handleEdit}
                                            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            value={el.id}
                                            onClick={handleDelete}
                                            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                        >
                                            Delete
                                        </button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
            <Card className="mx-auto max-w-xl">
                <h1 className="font-bold text-center text-2xl">Input Form</h1>
                <form
                    className="flex flex-col gap-4 justify-center"
                    onSubmit={handleSubmit}
                >
                    <Label htmlFor="name" value="Nama" />
                    <TextInput
                        type="text"
                        value={input.name}
                        name="name"
                        onChange={handleInput}
                    />
                    <Label htmlFor="course" value="Kelas" />
                    <TextInput
                        type="text"
                        value={input.course}
                        name="course"
                        onChange={handleInput}
                    />
                    <Label htmlFor="score" value="Nilai" />
                    <TextInput
                        type="number"
                        placeholder="0-100"
                        value={input.score}
                        name="score"
                        onChange={handleInput}
                    />
                    <Button
                        type="submit"
                        color={currentID === -1 ? "purple" : "warning"}
                    >
                        {currentID === -1 ? "Submit" : "Update"}
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Tugas6;
