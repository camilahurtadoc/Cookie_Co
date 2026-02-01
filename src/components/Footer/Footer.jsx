import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import logoVertical from '../../../public/images/logos/logo_vertical_2.png'
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';

import MailIcon from '@mui/icons-material/Mail';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';

const Footer = () => {

  const logoVertical = '/images/logos/logo_vertical_2.PNG'
  const theme = createTheme({
    palette: {
      primary: {
        main: '#D4A574',
      },
      secondary: {
        main: '#EDE4D9',
      },
      customLinkColor: {
      main: '#EDE4D9', // Example custom link color
    },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Box sx={{ backgroundColor: '#5C4033', color: 'secondary', py: 2, px: 10, mt:'auto' }}>
        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid size={{ xs: 12, md: 3 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box
              component='img'
              sx={{ maxWidth: 230, maxHeight: 'auto' }}
              alt='logo'
              src={logoVertical}
            />
          </Grid>
          <Grid container size={{ xs: 12, md: 9 }}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography color='primary' variant='h6'>
                Navegación
              </Typography>
              <List aria-label="navegación página web" >
                <ListItem component={Link} to='/' disablePadding>
                  <ListItemText primary='Inicio' sx={{ color: '#EDE4D9' }} />
                  {/* <ListItemText>Inicio</ListItemText> */}
                  {/* <ListItemText primary='Inicio'/> */}
                </ListItem>
                <ListItem component={Link} to='/menu' disablePadding >
                  <ListItemText primary='Pide Aquí' sx={{ color: '#EDE4D9' }} />
                </ListItem>
                <ListItem component={Link} to='/locales' disablePadding >
                  <ListItemText primary='Dónde Encontrarnos' sx={{ color: '#EDE4D9' }} />
                </ListItem>
                <ListItem component={Link} to='/blog' disablePadding >
                  <ListItemText primary='Blog' sx={{ color: '#EDE4D9' }} />
                </ListItem>
                <ListItem component={Link} to='/login' disablePadding >
                  <ListItemText primary='Mi Cuenta' sx={{ color: '#EDE4D9' }} />
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography color='primary' variant='h6'>
                Servicio al Cliente
              </Typography>
              <List aria-label="navegación servicio al cliente" >
                <ListItem component={Link} to='/' disablePadding >
                  <ListItemText primary='Contacto' sx={{ color: '#EDE4D9' }} />
                </ListItem>
                <ListItem component={Link} to='/' disablePadding >
                  <ListItemText primary='Despachos' sx={{ color: '#EDE4D9' }} />
                </ListItem>
                <ListItem component={Link} to='/' disablePadding >
                  <ListItemText primary='Seguimiento Pedido' sx={{ color: '#EDE4D9' }} />
                </ListItem>
                <ListItem component={Link} to='/' disablePadding >
                  <ListItemText primary='Retiro' sx={{ color: '#EDE4D9' }} />
                </ListItem>
                <ListItem component={Link} to='/' disablePadding >
                  <ListItemText primary='Preguntas Frecuentes' sx={{ color: '#EDE4D9' }} />
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography color='primary' variant='h6'>
                Nosotros            </Typography>
              <List aria-label="navegación sobre nosotros" >
                <ListItem component={Link} to='/' disablePadding >
                  <ListItemText primary='Quiénes Somos' sx={{ color: '#EDE4D9' }} />
                </ListItem>
                <ListItem component={Link} to='/' disablePadding >
                  <ListItemText primary='Apoyo a Fundaciones' sx={{ color: '#EDE4D9' }} />
                </ListItem>
                <ListItem component={Link} to='/' disablePadding >
                  <ListItemText primary='Eventos' sx={{ color: '#EDE4D9' }} />
                </ListItem>
                <ListItem component={Link} to='/' disablePadding >
                  <ListItemText primary='Retiro' sx={{ color: '#EDE4D9' }} />
                </ListItem>
                <ListItem component={Link} to='/' disablePadding >
                  <ListItemText primary='Regalos Corporativos' sx={{ color: '#EDE4D9' }} />
                </ListItem>
              </List>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Typography color='primary' variant='h6'>
                Redes Sociales
              </Typography>
              <List aria-label="navegación sobre nosotros" sx={{ display: 'flex' }}>
                <ListItem disablePadding >
                  <IconButton href='https://workspace.google.com/intl/es/gmail/' target='_blank' rel='noopener noreferrer' aria-label='envíanos un email'>
                    <MailIcon sx={{ color: '#EDE4D9' }} />
                  </IconButton>
                </ListItem>
                <ListItem disablePadding >
                  <IconButton href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer' aria-label='visita nuestro instagram'>
                    <InstagramIcon sx={{ color: '#EDE4D9' }} />
                  </IconButton>
                </ListItem>
                <ListItem disablePadding >
                  <IconButton href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer' aria-label='visita nuestro facebook'>
                    <FacebookIcon sx={{ color: '#EDE4D9' }} />
                  </IconButton>
                </ListItem>
                <ListItem disablePadding >
                  <IconButton href='https://x.com/' target='_blank' rel='noopener noreferrer' aria-label='visitra nuestro twitter'>
                    <XIcon sx={{ color: '#EDE4D9' }} />
                  </IconButton>
                </ListItem>
                <ListItem disablePadding >
                  <IconButton href='https://www.whatsapp.com/' target='_blank' rel='noopener noreferrer' aria-label='envíanos un mensaje por whatsapp'>
                    <WhatsAppIcon sx={{ color: '#EDE4D9' }} />
                  </IconButton>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  )
}

export default Footer