import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const SearchBar = () => {
    const { states, func } = useContext(GlobalContext);
    const { keyword, setKeyword } = states;
    const { handleSearch } = func;
    return (
        <input
            className="input input-secondary input-bordered lg:w-full"
            type="text"
            placeholder="Cari Pekerjaan"
            value={keyword}
            onChange={(e) => {
                setKeyword(e.target.value);
                handleSearch();
            }}
        />
    );
};

export default SearchBar;
