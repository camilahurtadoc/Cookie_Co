import React from 'react'
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import fotoTienda from '../../../public/images/tienda/2150694732.jpg';


const HeroSection = () => {

  const fotoTienda = '/images/tienda/2150694732.jpg'

  return (
    <>
      <Box sx={{ backgroundColor: '#EDE4D9', display: 'flex', py: 5, width: '100%', maxWidth: '100vw' }} >
        <Grid container spacing={2} alignItems={'center'} sx={{ px: { xs: 2, md: 15 } }}>
          {/* <Grid size={{ xs: 0, md: 1 }} /> */}
          <Grid size={{ xs: 12, md: 6 }} >
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >
              <Typography variant='h3' component='div' >
                Cookie Co
              </Typography>
              <Typography variant='h6' component='div' gutterBottom>
                Endulzando la vida
              </Typography>
              <Typography variant='body1' component='div' sx={{ mt: 4 }} gutterBottom>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi deleniti aspernatur sint minus accusamus ad ratione similique inventore illo modi nobis officiis.
              </Typography>
              <Typography variant='body1' component='div' sx={{ mt: 4 }} gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolor necessitatibus sunt deleniti! Dolor, nihil earum. Tempore in, fugit recusandae natus perferendis dolor explicabo amet numquam reiciendis, voluptas sed nobis.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
              <Box sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                <img src={fotoTienda} alt='tienda' height='100%' width='100%' />
              </Box>
            </Box>
          </Grid>
          {/* <Grid size={{ xs: 0, md: 1 }} /> */}
        </Grid>
      </Box>

    </>
  )
}

export default HeroSection