import React, { useState } from 'react';

import logo from "../../assets/img/logo.png";


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header className="header" >
            
            <div className="logo">
                <img src={logo} alt="" />
                <span>Dev's Pizza</span>
            </div>
            <div className="navigator">
                <div className={`icon ${showMenu ? "active" : ""}`} onClick={handleToggleMenu}>
                    <i class={`fas fa-bars ${!showMenu ? "active" : ""}`}></i>
                    <i class={`fas fa-times ${showMenu ? "active" : ""}`}></i>
                </div>
                <div className={`content ${showMenu ? "active" : ""}`}>
                    <div className="item">
                        HOME
                    </div>
                    <div className="item">
                        MENU
                    </div>
                    <div className="item">
                        PROMOTION
                    </div>
                    <div className="item">
                        LOG IN
                    </div>
             
                </div>
            </div>
        </header>
    );
};

export default Header;