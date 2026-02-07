import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';

const Newsletter = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            width: '100%',
            px: { xs: 2, md: 15 }, py: 5,
          },
        }}
      >
        <Box sx={{ backgroundColor: '#EDE4D9', display: 'flex', flexDirection: 'column', p: 3 }} >
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            <SendIcon sx={{ fontSize: '50px' }} />
            <Typography variant='h4' component='div' >
              Inscríbete a nuestro Newsletter
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }} >
            <Box component="form"
              sx={{ '& > :not(style)': { mt: 1 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}
              noValidate
              autoComplete="off">
              <TextField id="email-newsletter" label="Correo electrónico" variant="outlined" color='#5C4033' sx={{ '& > :not(style)': { width: { xs: '30ch', md: '55ch' } } }} />
              <Button variant='contained' sx={{ p: 2, backgroundColor: '#A84A2E' }}>Registrarme</Button>
            </Box>
          </Box>
          <Typography variant='body2' component='div' sx={{ mt: 3, alignSelf: 'center' }} gutterBottom>
            Entérate de nuestras novedades, eventos, descuentos y mucho más!
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default Newsletter