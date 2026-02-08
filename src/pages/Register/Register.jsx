import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { Link } from 'react-router-dom';
import FormHelperText from '@mui/material/FormHelperText';
import Grid from '@mui/material/Grid';


const Register = () => {
  const { email, setEmail,
    password, setPassword,
    eye,
    type,
    seePassword,
    nombre, setNombre,
    confirmPassword, setConfirmPassword,
    handleSubmitRegister } = useContext(UserContext)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, p: 3 }} >
      <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
        <Grid size={12}>
          <Typography variant='h4'>Regístrate</Typography>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Box
          component={'form'}
          onSubmit={handleSubmitRegister}
          sx={{ display: 'flex', flexDirection: 'column' }}
        // noValidate
        // autoComplete="off"
        >
          <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel htmlFor="register-name" color='#5C4033'>Nombre y Apellido</InputLabel>
            <OutlinedInput
              required
              type='text'
              id="register-name"
              label='Nombre y Apellido'
              onChange={event => setNombre(event.target.value)}
              value={nombre}
              color='#5C4033'
              aria-describedby="ingresa-tu-correo-electrónico"
              inputProps={{
                'aria-label': 'correo-electrónico',
              }}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: '35ch' }}>
            <InputLabel htmlFor="register-email" color='#5C4033'>Correo electrónico</InputLabel>
            <OutlinedInput
              required
              type='text'
              id="register-email"
              label='Correo electrónico'
              onChange={event => setEmail(event.target.value)}
              value={email}
              color='#5C4033'
              aria-describedby="ingresa-tu-correo-electrónico"
              inputProps={{
                'aria-label': 'correo-electrónico',
              }}
            />
            <FormHelperText id="register-email-helper-text">No te preocupes, no compartiremos tu email.</FormHelperText>
          </FormControl>
          <FormControl variant='outlined' sx={{ m: 1, width: '35ch' }}>
            <InputLabel htmlFor="register-password" color='#5C4033'>Contraseña</InputLabel>
            <OutlinedInput
              required
              id="register-password"
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
          <FormControl variant='outlined' sx={{ m: 1, width: '35ch' }}>
            <InputLabel htmlFor="register-password-confirmation" color='#5C4033'>Confirmar contraseña</InputLabel>
            <OutlinedInput
              required
              id="register-password-confirmation"
              type={type}
              label='Confirmar contraseña'
              onChange={event => setConfirmPassword(event.target.value)}
              value={confirmPassword}
              color='#5C4033'
            />
          </FormControl>
          <Box sx={{ m: 1, width: '35ch', display: 'flex', flexDirection: 'column', alignItems: 'end' }} >
            <Button variant="contained" type="submit" sx={{ backgroundColor: '#D4A574' }}>
              Crear cuenta
            </Button>
            <Box sx={{ my: 2, display: 'flex' }}>
              <Typography variant='caption' sx={{ color: '#5C4033', mr: 0.5 }}>¿Ya tienes cuenta? </Typography>
              <Typography component={Link} to='/login' variant='caption' sx={{ color: '#5C4033' }}> Login</Typography>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Box>
  )
}

export default Register