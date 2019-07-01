import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Header.scss";


const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header className="header" >

            <Link className="logo" to="/">
                <img src={logo} alt="" />
                <span>Dev's Pizza</span>
            </Link>

            <div className="shopping-cart-icon" style={{ marginLeft: "auto", marginRight: "15px" }}>
                <i className="fas fa-shopping-cart"></i>
            </div>

            <div className="navigator">
                <div className={`icon ${showMenu ? "active" : ""}`} onClick={handleToggleMenu}>
                    <i className={`fas fa-bars ${!showMenu ? "active" : ""}`}></i>
                    <i className={`fas fa-times ${showMenu ? "active" : ""}`}></i>
                </div>
                <div className={`content ${showMenu ? "active" : ""}`}>
                    <Link className="item" to="/">
                        HOME
                    </Link>
                    <Link className="item" to="/menu">
                        MENU
                    </Link>
                    <Link to="/" className="item">
                        PROMOTION
                    </Link>

                    <Link to="/login" className="item">
                        LOGIN
                    </Link>
                    <Link to="/register" className="item">
                        REGISTER
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;