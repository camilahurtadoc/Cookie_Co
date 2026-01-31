import React, { useContext, useEffect } from 'react'
import MenuHeroSection from '../../components/MenuHeroSection/MenuHeroSection'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import exterior2 from '../../../public/images/tienda/exterior2.jpg'
import exterior3 from '../../../public/images/tienda/exterior3.jpg'
import LocationsCard from '../../components/LocationsCard/LocationsCard'
import map from '../../../public/images/tienda/map.jpg'

const Locations = () => {
  return (
    <>
      <MenuHeroSection
        title={'Dónde Encontrarnos'}
        desc={'Encuentra tu local más cercano y visítanos! Podrás comprar directamente, aprovechar descuentos exclusivos en tienda y disfrutar tus galletas favoritas en un ambiente tranquilo y agradable.'}
        img={exterior2}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, mx: 10, p: 3 }}>
        <Typography variant='h4' sx={{ m: 2, color: 'primary' }}>Tiendas</Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <LocationsCard
              img={map}
              alt={'mapa'}
              shopName={'Local Manuel Montt'}
              address={'Manuel Montt 3245, local 12, Providencia'}
              phoneNumber={'+56 9 1234 5678'}
              email={'manuelmontt@cookieco.cl'}
              horarioLV={'9:00 a 20:00'}
              horarioS={'9:00 a 14:00'}
              horarioD={'Cerrado'}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <LocationsCard
              img={map}
              alt={'mapa'}
              shopName={'Local Manuel Montt'}
              address={'Manuel Montt 3245, local 12, Providencia'}
              phoneNumber={'+56 9 1234 5678'}
              email={'manuelmontt@cookieco.cl'}
              horarioLV={'9:00 a 20:00'}
              horarioS={'9:00 a 14:00'}
              horarioD={'Cerrado'}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <LocationsCard
              img={map}
              alt={'mapa'}
              shopName={'Local Manuel Montt'}
              address={'Manuel Montt 3245, local 12, Providencia'}
              phoneNumber={'+56 9 1234 5678'}
              email={'manuelmontt@cookieco.cl'}
              horarioLV={'9:00 a 20:00'}
              horarioS={'9:00 a 14:00'}
              horarioD={'Cerrado'}
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <LocationsCard
              img={map}
              alt={'mapa'}
              shopName={'Local Manuel Montt'}
              address={'Manuel Montt 3245, local 12, Providencia'}
              phoneNumber={'+56 9 1234 5678'}
              email={'manuelmontt@cookieco.cl'}
              horarioLV={'9:00 a 20:00'}
              horarioS={'9:00 a 14:00'}
              horarioD={'Cerrado'}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Locations