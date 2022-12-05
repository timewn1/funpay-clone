import React, { useState } from "react";

import { FaCaretDown } from "react-icons/fa";

import './style.scss';

const SupportButton = () => {
    const [ showMenu, setShowMenu ] = useState(false);
        
    const handleShowMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <div className="support-button">
            <div className="main-button" onClick={handleShowMenu}>
                <p className="v-center">
                    Support
                </p>
                <div className="v-center">
                    <FaCaretDown />
                </div>
            </div>
            {
                showMenu && 
                <div className="collapse-menu">
                    <ul>
                        <li>
                            <a href="/rule">Rules</a>
                        </li>
                        <li>
                            <a href="/support-center">Support Center</a>
                        </li>
                        <li>
                            <a href="/submit-request">Submit a Request</a>
                        </li>
                    </ul>
                </div>
            }
        </div>
    );
}

export default SupportButton;