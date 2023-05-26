import React, { useContext, useEffect } from "react";
import { Table } from "flowbite-react";
import { TableHead } from "flowbite-react/lib/esm/components/Table/TableHead";
import { TableHeadCell } from "flowbite-react/lib/esm/components/Table/TableHeadCell";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";
import { TableCell } from "flowbite-react/lib/esm/components/Table/TableCell";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

const Tugas7List = () => {
    const { states, handler } = useContext(GlobalContext);
    const {
        data,
        setData,
        input,
        setInput,
        fetchStatus,
        setFetchStatus,
        currentID,
        setCurrentID,
    } = states;
    const {
        fetchData,
        handleInput,
        handleSubmit,
        handleDelete,
        handleEdit,
        indexScore,
    } = handler;

    useEffect(() => {
        if (fetchStatus === true) {
            fetchData();
        }
    }, [fetchStatus, setFetchStatus]);

    const tableHead = [
        "No",
        "Nama",
        "Mata Kuliah",
        "Nilai",
        "Index Nilai",
        "Action",
    ];

    return (
        <div>
            <Link to="./create">
                <button className="focus:outline-none text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 my-5">
                    Create
                </button>
            </Link>
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
        </div>
    );
};

export default Tugas7List;
