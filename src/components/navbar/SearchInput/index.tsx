import React from "react";

import { FaSistrix } from "react-icons/fa";

import './style.scss';

const SearchInput = () => {
    return (
        <div className="search-input">
            <input placeholder="Search by 273 games" />
            <FaSistrix />
        </div>
    );
}

export default SearchInput;