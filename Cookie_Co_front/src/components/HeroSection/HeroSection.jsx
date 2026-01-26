import React from 'react'
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import fotoTienda from '../../assets/images/tienda/2150694732.jpg';


const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            width: '100%',
            height: 300,
            px: 15, py:5
          },
        }}
      >
        <Box sx={{ backgroundColor: '#F5E8C7', display: 'flex'}} >
          <Box  sx={{width:'50%', display:'flex', flexDirection:'column', justifyContent:'center', }} >
            <Typography variant='h3' component='div' >
              Cookie Co
            </Typography>
            <Typography variant='h6' component='div' gutterBottom>
              Endulzando la vida
            </Typography>
            <Typography variant='body1' component='div' sx={{mt:4}} gutterBottom>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi deleniti aspernatur sint minus accusamus ad ratione similique inventore illo modi nobis officiis.
            </Typography>
          </Box>
          <Box sx={{width:'50%', display:'flex', justifyContent:'end', }}>
            <img src={fotoTienda} alt='tienda' height='100%'/>
          </Box>
        </Box>
        {/* <Paper elevation={3} /> */}
      </Box>
    </>
  )
}

export default HeroSection