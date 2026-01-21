import React from 'react'
import Box from '@mui/material/Box';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import fotoTienda1 from '../../assets/images/tienda/2150273178.jpg';
import fotoTienda2 from '../../assets/images/tienda/18517.jpg';

const AboutUs = () => {
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
        <Box sx={{ color:'#EDE4D9', backgroundColor: '#5C4033', display: 'flex', p: 3 }} >
          <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', }} >
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
          <Box sx={{ width: '50%', display:'flex', gap:1, justifyContent:'center', alignItems:'center' }}>
            <Box sx={{height: 200, width:'auto', borderRadius:'16px', overflow:'hidden'}} >
              <img src={fotoTienda1} alt='tienda' height='100%' />
            </Box>
            <Box sx={{height: 200, width:'auto', borderRadius:'16px', overflow:'hidden' }} >
              <img src={fotoTienda2} alt='tienda' height='100%' width='auto'/>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default AboutUs