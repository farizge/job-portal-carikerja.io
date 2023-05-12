import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "flowbite-react";
import { TableHead } from "flowbite-react/lib/esm/components/Table/TableHead";
import { TableHeadCell } from "flowbite-react/lib/esm/components/Table/TableHeadCell";
import { TableBody } from "flowbite-react/lib/esm/components/Table/TableBody";
import { TableRow } from "flowbite-react/lib/esm/components/Table/TableRow";
import { TableCell } from "flowbite-react/lib/esm/components/Table/TableCell";

const Tugas5 = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        axios
            .get("https://backendexample.sanbercloud.com/api/student-scores")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

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

    const tableHead = ["No", "Nama", "Mata Kuliah", "Nilai", "Index Nilai"];

    return (
        <div className="p-20">
            <Table>
                <TableHead>
                    {tableHead.map((table, index) => {
                        return (
                            <TableHeadCell
                                key={index}
                                className="bg-purple-600 text-white"
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
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </div>
    );
};

export default Tugas5;
