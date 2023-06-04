import React from "react";
import SearchBar from "./SearchBar";
import ilustrasi from "../assets/ilustrasi.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero min-h-[75vh] bg-base-100">
            <div className="hero-content flex-col items-center justify-center lg:flex-row">
                <div>
                    <h1 className="text-5xl font-bold">
                        Temukan Pekerjaan Impianmu
                    </h1>
                    <p className="py-6">
                        Platform terbaik untuk mencari pekerjaan yang kamu
                        impikan
                    </p>
                    <Link
                        to="explore-jobs"
                        className="btn btn-primary rounded mr-2"
                    >
                        Explore Jobs
                    </Link>
                    <Link
                        to="login"
                        className="btn btn-outline btn-secondary rounded"
                    >
                        Login
                    </Link>
                </div>
                <img
                    src={ilustrasi}
                    alt="ilustrasi"
                    className="w-2/4 overflow-auto hidden lg:block"
                />
            </div>
        </div>
    );
};

export default Hero;
