import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Checkbox from '@mui/material/Checkbox';

import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


import SEO from '../SEO';
import BackPage from '../components/BackPage';

import imgRegister from '../assets/img/register-pana.svg';

function Register() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  SEO({ title: 'Register' });
  return (

    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ maxWidth: 500 }}>
        <BackPage />
        <Paper sx={{ padding: 2 }}>
          <h1 style={{ textAlign:"center" }}>Resgiter-se</h1>
          <Grid container justifyContent="center" alignItems="center" xs={12} sm={12} md={12}>

            <img style={{ maxWidth: 200 }} loading="lazy" src={imgRegister} alt="Register" />
          </Grid>
          <Grid container spacing={2}>
            <Grid xs={12} sm={12} md={12}>
              <TextField
                fullWidth
                id="name"
                label="Name"
                multiline
                error={false}
                helperText=""

              />
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                multiline
              />
            </Grid>


            <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Grid xs={12} sm={12} md={12}>
              <Checkbox /> I accept the terms of use.
            </Grid>
            <Grid xs={12} sm={12} md={12}>
              <Stack direction="row" spacing={2}>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Send
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Box>

  );

}

export default Register;
