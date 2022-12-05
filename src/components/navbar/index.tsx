import React from "react";

import Logo from "../logo";
import SearchInput from "./SearchInput";
import SupportButton from "./SupportButton";
import CurrencyButton from "./CurrencyButton";

import './style.scss';

const Header = () => {
    return (
        <div className="header inline space-between">
            <div className="inline">
                {/* <Logo /> */}
                <SearchInput />
                <SupportButton />
            </div>
            <div className="inline">
                <div>
                    <a href="/signin">Log In</a>
                    <a href="/signup">Sign In</a>
                </div>
                <div>
                    <CurrencyButton />
                </div>
            </div>
        </div>
    );
}

export default Header;