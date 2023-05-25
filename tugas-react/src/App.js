import React from "react";
import { GlobalProvider } from "./context/GlobalContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tugas7List from "./Tugas7/Tugas7List";
import Tugas7Form from "./Tugas7/Tugas7Form";

function App() {
    return (
        <>
            <BrowserRouter>
                <GlobalProvider>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route path="/tugas7" element={<Tugas7List />} />
                        <Route path="/create" element={<Tugas7Form />} />
                        <Route path="/edit/:idData" element={<Tugas7Form />} />
                    </Routes>
                </GlobalProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
