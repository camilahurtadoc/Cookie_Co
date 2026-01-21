import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import fotoTienda from '../../assets/images/tienda/2150694732.jpg';

const MenuHeroSection = () => {
  return (
     <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            my: 2,
            mx: 10,
            width: '100%',
            height: 300,
          },
        }}
      >
        <Box sx={{ display: 'flex', p:3}} >
          <Box  sx={{width:'50%', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }} >
            <Typography variant='h3' component='div' >
              Pide Aquí
            </Typography>
            <Typography variant='body1' component='div' sx={{mt:4}} gutterBottom>
              Pide aquí las galletas que pide tu corazón. Hechas con amor y dedicación, listas para llegar y disfrutar en la comodidad de tu casa.
            </Typography>
          </Box>
          <Box sx={{width:'50%', display:'flex', justifyContent:'center', }}>
            <img src={fotoTienda} alt='tienda' height='100%'/>
          </Box>
        </Box>
        {/* <Paper elevation={3} /> */}
      </Box>
    </>
  )
}

export default MenuHeroSection