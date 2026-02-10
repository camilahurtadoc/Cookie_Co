import React from 'react'
import { useContext } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { UserContext } from '../../context/UserContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';


const Login = () => {

  const { email, setEmail,
    password, setPassword,
    eye,
    type,
    seePassword,
    handleSubmit } = useContext(UserContext);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, p: 3 }} >
      <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
        <Grid size={12}>
          <Typography variant='h4'>Ingresa a tu cuenta</Typography>
        </Grid>
        <Grid size={12}>

          <Box
            component={'form'}
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column' }}
          >
            <FormControl sx={{ m: 1, width: {xs:'auto', md:'35ch'} }}>
              <InputLabel htmlFor="login-email" color='#5C4033'>Correo electrónico</InputLabel>
              <OutlinedInput
                required
                type='text'
                id="login-email"
                label='Correo electrónico'
                onChange={event => setEmail(event.target.value)}
                value={email}
                color='#5C4033'
                aria-describedby="ingresa-tu-correo-electrónico"
                inputProps={{
                  'aria-label': 'correo-electrónico',
                }}
              />
            </FormControl>
            <FormControl variant='outlined' sx={{ m: 1, width: {xs:'auto', md:'35ch'} }}>
              <InputLabel htmlFor="login-password" color='#5C4033'>Contraseña</InputLabel>
              <OutlinedInput
                required
                id="login-password"
                type={type}
                label='Contraseña'
                onChange={event => setPassword(event.target.value)}
                value={password}
                endAdornment={
                  <InputAdornment position="end" onClick={seePassword}>
                    {eye}
                  </InputAdornment>
                }
                color='#5C4033'
              />
            </FormControl>
            <Box sx={{ m: 1, width: {xs:'auto', md:'35ch'}, display: 'flex', flexDirection: 'column', alignItems: 'end' }} >
              <Button variant="contained" type="submit" sx={{ backgroundColor: '#D4A574' }}>
                Ingresar
              </Button>
              <Box sx={{ my: 2, display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
                {/* <Typography component={Link} to='/' variant='caption' sx={{ color: '#5C4033' }}>¿Olvidó su contraseña?</Typography> */}
                <Typography component={Link} to='/register' variant='caption' sx={{ color: '#5C4033' }}>¿Cliente nuevo?</Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid >
    </Box >
  )
}

export default Login
