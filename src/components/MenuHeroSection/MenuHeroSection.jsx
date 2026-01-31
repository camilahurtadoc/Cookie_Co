import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const MenuHeroSection = ({ title, desc, img }) => {
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
        <Box sx={{ display: 'flex', p: 3 }} >
          <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
            <Typography variant='h3' component='div' >
              {title}
            </Typography>
            <Typography variant='h6' component='div' sx={{ mt: 4, textAlign:'center' }} gutterBottom>
              {desc}
            </Typography>
          </Box>
          <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center', }}>
            <Box sx={{borderRadius:'16px', overflow:'hidden'}}>
              <img src={img} alt='tienda' height='100%' />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default MenuHeroSection