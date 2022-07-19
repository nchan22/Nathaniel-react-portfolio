import React from "react";

function Navbar() {
    return (
        <div className='topnav'>
            <div className='topnav-left'>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/about"
                >
                    ABOUT
                </NavLink>
            </div>
            <div className='topnav-right'>
                <NavLink
                    activeClassName="navbar__link--active"
                    className="navbar__link"
                    to="/portfolio"
                >
                    PORTFOLIO
                </NavLink>