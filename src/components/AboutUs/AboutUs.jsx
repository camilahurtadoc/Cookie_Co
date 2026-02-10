import React from 'react'
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import fotoTienda1 from '../../../public/images/tienda/2150273178.jpg';
// import fotoTienda2 from '../../../public/images/tienda/18517.jpg';

const AboutUs = () => {

  const fotoTienda1 = '/images/tienda/2150273178.jpg'
  const fotoTienda2 = '/images/tienda/exterior2.jpg'
  const fotoTienda3 = '/images/tienda/18517.jpg'
  const fotoTienda4 = '/images/tienda/exterior3.jpg'
  return (
    <>

      <Box sx={{ color: '#EDE4D9', backgroundColor: '#6B4E3D ', display: 'flex', py: 5, }} >
        <Grid container spacing={2} alignItems={'center'} sx={{ px: { xs: 2, md: 15 } }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', }} >
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi deleniti aspernatur sint minus accusamus ad ratione similique inventore illo modi nobis officiis.
              </Typography>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Grid container spacing={2}>
              <Grid size={6}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
                  <Box sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                    <img src={fotoTienda1} alt='tienda' height='100%' width='100%' />
                  </Box>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
                  <Box sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                    <img src={fotoTienda2} alt='tienda' height='100%' width='100%' />
                  </Box>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
                  <Box sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                    <img src={fotoTienda3} alt='tienda' height='100%' width='100%' />
                  </Box>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', }}>
                  <Box sx={{ borderRadius: '16px', overflow: 'hidden' }}>
                    <img src={fotoTienda4} alt='tienda' height='100%' width='100%' />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AboutUs