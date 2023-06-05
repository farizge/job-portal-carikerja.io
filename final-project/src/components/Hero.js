import React from "react";
import ilustrasi from "../assets/ilustrasi.png";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero h-[60vh] lg:h-[75vh]">
            <div className="hero-content flex-col justify-start lg:flex-row">
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
