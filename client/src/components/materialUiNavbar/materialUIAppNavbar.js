import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        YOZU
                    </Typography>
                    <NavLink to={'/'}><Button color="inherit">Home</Button></NavLink>
                    <NavLink to={'/login'}><Button color="inherit">Login</Button></NavLink>
                    <NavLink to={'/signup'}><Button color="inherit">Sign Up</Button></NavLink>
                </Toolbar>
            </AppBar>
        </Box>
    );
}