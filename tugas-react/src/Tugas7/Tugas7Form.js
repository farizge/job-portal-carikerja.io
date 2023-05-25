import React, { useContext, useEffect } from "react";
import { Button, TextInput, Label, Card } from "flowbite-react";
import { GlobalContext } from "../context/GlobalContext";
import axios from "axios";
import { useParams } from "react-router-dom";

const Tugas7Form = () => {
    const { idData } = useParams();
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
        if (idData !== undefined) {
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
        }
    }, []);

    return (
        <div className="p-12">
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

export default Tugas7Form;
