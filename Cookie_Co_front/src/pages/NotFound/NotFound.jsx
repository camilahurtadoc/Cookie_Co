import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import img from '../../assets/images/notFound/cookie_monster_sad.png'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const NotFound = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems:'center', my: 2, mx: 10, p: 3 }} >
      <Typography variant='h4'>¿Galletas?</Typography>
      <Typography variant='h4'>¿Dónde se fueron las galletas?</Typography>
      <Box sx={{ display: 'flex', my:1, minWIdth:400 }}>
        <Box sx={{ display: 'flex', overflow: 'hidden', borderRadius: '16px', height: 400, minWIdth:400 }}>
          <img src={img} />
        </Box>
      </Box>
      <Typography variant='h6'>La página que estás buscando no está acá.</Typography>
      <Box sx={{}}>
        <Button component={Link} to='/menu' variant="contained" sx={{ backgroundColor: '#D4A574' }}>
          Sigue comprando aquí
        </Button>
      </Box>
    </Box>
  )
}

export default NotFound