import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

import { lightTheme } from './Theme';

import Header from "./components/Header";

import Routes from './routes';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Header />
      <Container sx={{ paddingTop: 10 }} >
        <Routes />
      </Container>
    </ThemeProvider>
  );
}

export default App;
