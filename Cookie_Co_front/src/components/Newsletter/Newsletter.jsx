import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

const Newsletter = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            width: '100%',
            height: 300,
            px: 15, py: 5,
          },
        }}
      >
        <Box sx={{ backgroundColor: '#D4A574', display: 'flex', flexDirection: 'column', p: 3 }} >
          <Typography variant='h3' component='div' >
            Newsletter
          </Typography>
          <Typography variant='subtitle2' component='div' gutterBottom>
            Inscríbete a nuestro newsletter
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }} >
            <Box component="form"
              sx={{ '& > :not(style)': { mt: 5 }, display: 'flex' }}
              noValidate
              autoComplete="off">
              <TextField id="email-newsletter" label="Correo electrónico" variant="outlined" color='#5C4033' sx={{ '& > :not(style)': { width: '55ch' } }} />
              <Button variant='contained' sx={{ p: 2, backgroundColor: '#A84A2E' }}>Registrarme</Button>
            </Box>
          </Box>
          <Typography variant='body2' component='div' sx={{ mt: 3, alignSelf: 'center' }} gutterBottom>
            Entérate de nuestras novedades, eventos, descuentos y mucho más!
          </Typography>
          <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center', }} >
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Newsletter