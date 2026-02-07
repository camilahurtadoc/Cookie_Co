import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const MenuHeroSection = ({ title, desc, img }) => {
  return (
    <>
      <Box sx={{ backgroundColor: '#EDE4D9', display: 'flex', py: 5, width: '100%', maxWidth: '100vw' }}>
        <Grid container spacing={2} alignItems={'center'} sx={{ px: { xs: 2, md: 15 } }} >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
              <Typography variant='h3' component='div' >
                {title}
              </Typography>
              <Typography variant='h6' component='div' sx={{ mt: 4, textAlign: 'center' }} gutterBottom>
                {desc}
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
              <Box sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                <img src={img} alt='tienda' height='100%' width='100%' />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default MenuHeroSection