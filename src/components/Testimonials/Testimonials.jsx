import React from 'react'
import TestimonialsCard from '../TestimonialsCard/TestimonialsCard'
import imgMan from '../../../public/images/ratings/man.jpg'
import imgMan2 from '../../../public/images/ratings/man2.jpg'
import imgWoman from '../../../public/images/ratings/woman.jpg'
import imgWoman2 from '../../../public/images/ratings/woman2.jpg'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';


const Testimonials = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1, px: 15, py:5, backgroundColor: '#EDE4D9' }}>
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