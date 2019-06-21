import React from 'react';
import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="company">
                hochiminhcity@pycogroup.com
            </div>
            <div className="contact">

                <div className="icon">
                    <i className="fab fa-facebook-f"></i>
                </div>
                <div className="icon">
                    <i className="fab fa-twitter"></i>
                </div>
                <div className="icon">
                    <i className="fab fa-linkedin-in"></i>
                </div>
                <div className="icon">
                    <i className="fab fa-github"></i>

                </div>
            </div>
        </footer>
    );
};

export default Footer;