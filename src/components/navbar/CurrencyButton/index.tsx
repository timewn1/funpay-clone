import React, { useState } from "react";

import { FaCaretDown } from "react-icons/fa";

import './style.scss';

const CurrencyButton = () => {
    const [ showMenu, setShowMenu ] = useState(false);
    const [ currencyMode, setCurrencyMode ] = useState('USD');
        
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }
    const handleCurrencyMode = () => {
        setCurrencyMode((currencyMode === "USD" ? "EUR" : "USD"));
        setShowMenu(!showMenu);
    }

    return (
        <div className="currency-button">
            <div className="main-button" onClick={handleShowMenu}>
                <p className="v-center">
                    {currencyMode}
                </p>
                <div className="v-center">
                    <FaCaretDown />
                </div>
            </div>
            {
                showMenu && 
                <div className="collapse-menu">
                    {
                        currencyMode === "USD" && 
                        <div className="currency" onClick = {handleCurrencyMode}>EUR</div>
                    }
                    {
                        currencyMode === "EUR" &&
                        <div className="currency" onClick = {handleCurrencyMode}>USD</div>
                    }
                </div>
            }
        </div>
    );
}

export default CurrencyButton;