import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import "./Header.scss";
import { connect } from "react-redux";
import { logOut } from "../../store/actions/UserAction";
import Navigator from './Navigator';

const Header = ({ orderList, token, logOut }) => {
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
            {token ? <>
                <Link onClick={closeMenu} to="/shopping-cart" className="header-icon shopping-cart-icon" style={{ marginLeft: "auto", marginRight: "15px" }}>
                    <i className="fas fa-shopping-cart"></i>
                    {orderList.length > 0 ? <div>{orderList.length}</div> : null}

                </Link>

                <Link className="header-icon user-icon" to="/profile">
                    <i className="fas fa-user"></i>
                </Link>
            </> : null}
                
                <Navigator handleToggleMenu={handleToggleMenu} 
                showMenu={showMenu} 
                token={token}
                logOut={logOut}
                closeMenu={closeMenu}
                />

              </header>
    );
};

const mapStateToProps = state => ({
    orderList: state.order.orderList,
    token: state.user.token
})

const mapDispatchToProps = dispatch => ({
    logOut: () => {
        dispatch(logOut())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);