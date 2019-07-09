import React from 'react';
import { Link } from "react-router-dom";
import {fireSuccess} from "../../util/AlertFiring"


const Navigator = ({showMenu, handleToggleMenu, closeMenu ,token,logOut}) => {
 
    return (
        <div className="navigator">
        <button className={`icon ${showMenu ? "active" : ""}`} onClick={handleToggleMenu} >
            <i className={`fas fa-bars ${!showMenu ? "active" : ""}`}></i>
            <i className={`fas fa-times ${showMenu ? "active" : ""}`}></i>
        </button>
        <div className={`content ${showMenu ? "active" : ""}`}>
            <Link className="item" to="/" onClick={handleToggleMenu}>
                HOME
            </Link>
            <Link className="item" to="/menu" onClick={handleToggleMenu}>
                MENU
            </Link>
            <Link to="/promotion" className="item" onClick={handleToggleMenu}>
                PROMOTION
            </Link>

            {!token ? <>
                <Link to="/login" className="item" onClick={handleToggleMenu}>
                    LOGIN
                </Link>
                <Link to="/register" className="item" onClick={handleToggleMenu}>
                    REGISTER
                </Link>
            </> :
                <Link to="/" className="item"
                    onClick={() => {
                        handleToggleMenu();
                        logOut();
                        fireSuccess("Signed Out Successfully")
                    }}>
                    SIGN OUT
                </Link>

            }

        </div>
    </div>

    );
};


  

export default Navigator;