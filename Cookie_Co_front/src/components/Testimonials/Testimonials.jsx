import React from 'react'
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'
import imgMan from '../../assets/images/ratings/man.jpg'
import imgMan2 from '../../assets/images/ratings/man2.jpg'
import imgWoman from '../../assets/images/ratings/woman.jpg'
import imgWoman2 from '../../assets/images/ratings/woman2.jpg'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';


const Testimonials = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, my: 2, mx: 10, p: 3, backgroundColor: '#F5E8C7' }}>
        <Typography variant='h4' sx={{ m: 2 }}>Testimonios</Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 3 }}>
            <TestimonialsCard rating={5} name={'Oscar'} img={imgMan} review={'Mis galletas favoritas, son lo mejor.'} />
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <TestimonialsCard rating={5} name={'Marlenne'} img={imgWoman} review={'Siempre me suben el ánimo.'} />
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <TestimonialsCard rating={5} name={'Flavia'} img={imgWoman2} review={'Perfectas para la once.'} />
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <TestimonialsCard rating={5} name={'Carlos'} img={imgMan2} review={'No puedo parar de comerlas jajaja'} />
          </Grid>
        </Grid>
      </Box>
    </>

  )
}

export default Testimonials