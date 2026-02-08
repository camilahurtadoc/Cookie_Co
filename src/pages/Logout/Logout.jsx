import React from 'react'
import { useContext } from 'react';
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

const Logout = () => {

  const { logout } = useContext(UserContext)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, p: 3 }}>
      <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
        <Grid size={12}>
          <Typography variant='h4' sx={{ m: 2, color: 'primary' }}>Cerrar Sesión</Typography>
        </Grid>
        <Grid size={12} sx={{ m: 1 }}>
          <Typography>¿Estás seguro que quieres cerrar tu sesión?</Typography>
        </Grid>
        <Grid size={12}>
          <Box sx={{ m: 1, width: '35ch', display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
            <Button component={Link} to='/' variant="contained" onClick={logout} sx={{ backgroundColor: '#D4A574' }}>
              Cerrar sesión
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Logout