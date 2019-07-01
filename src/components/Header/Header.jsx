import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Header.scss";
import { connect } from "react-redux";

const Header = ({ orderList }) => {
    const [showMenu, setShowMenu] = useState(false);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    }
    const closeMenu = () => {
        setShowMenu(false);
    }

    return (
        <header className="header" >

            <Link className="logo" to="/">
                <img src={logo} alt="" />
                <span>Dev's Pizza</span>
            </Link>

             <Link onClick={closeMenu} to="/shopping-cart" className="shopping-cart-icon" style={{ marginLeft: "auto", marginRight: "15px" }}>
                <i className="fas fa-shopping-cart"></i>
                {orderList.length> 0 ? <div>{orderList.length}</div>: null}

            </Link> 

            <div className="navigator">
                <div className={`icon ${showMenu ? "active" : ""}`} onClick={handleToggleMenu}>
                    <i className={`fas fa-bars ${!showMenu ? "active" : ""}`}></i>
                    <i className={`fas fa-times ${showMenu ? "active" : ""}`}></i>
                </div>
                <div className={`content ${showMenu ? "active" : ""}`}>
                    <Link className="item" to="/" onClick={handleToggleMenu}>
                        HOME
                    </Link>
                    <Link className="item" to="/menu" onClick={handleToggleMenu}>
                        MENU
                    </Link>
                    <Link to="/" className="item" onClick={handleToggleMenu}>
                        PROMOTION
                    </Link>

                    <Link to="/login" className="item" onClick={handleToggleMenu}>
                        LOGIN
                    </Link>
                    <Link to="/register" className="item" onClick={handleToggleMenu}>
                        REGISTER
                    </Link>
                </div>
            </div>
        </header>
    );
};

const mapStateToProps = state => ({
    orderList: state.order.orderList
})
export default connect(mapStateToProps)(Header);