import React from 'react';
import { NavLink } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import './appNavbar.css';

const AppNavbar = () => {
    return (
        <div className="navBar">
            <CssBaseline />
            <h1>YOZU</h1>
            <nav>
                <ul>
                    <NavLink to={'/'}><li>Home</li></NavLink>
                    <NavLink to={'/login'}><li>Login</li></NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default AppNavbar
