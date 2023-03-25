import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Menu from './Menu';
import ButtonIsLogged from './ButtonIsLogged';

const nameApp = 'Easy Recipe'
const log = 1;

export default function Header() {
    let ButtonLogin = <Button color="inherit">Login</Button>;
    if (log) {
        ButtonLogin = <ButtonIsLogged />;
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Menu />
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        {nameApp}
                    </Typography>
                    {ButtonLogin}
                </Toolbar>
            </AppBar>
        </Box>
    );
}
