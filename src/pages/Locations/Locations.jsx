import React, { useContext, useEffect } from 'react'
import MenuHeroSection from '../../components/MenuHeroSection/MenuHeroSection'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
// import exterior2 from '../../../public/images/tienda/exterior2.jpg'
// import exterior3 from '../../../public/images/tienda/exterior3.jpg'
// import map from '../../../public/images/tienda/map.jpg'
import LocationsCard from '../../components/LocationsCard/LocationsCard'

const Locations = () => {

  const exterior2 = '/images/tienda/exterior2.jpg'
  const exterior3 = '/images/tienda/exterior3.jpg'
  const mapImage = '/images/tienda/map.JPG'

  const locationsList = [
    {
      img: '/images/tienda/map.JPG',
      alt: 'mapa',
      shopName: 'Local Manuel Montt',
      address: 'Manuel Montt 3245, local 12, Providencia',
      phoneNumber: '+56 9 1234 5678',
      email: 'manuelmontt@cookieco.cl',
      horarioLV: '9:00 a 20:00',
      horarioS: '9:00 a 14:00',
      horarioD: 'Cerrado'
    },
    {
      img: '/images/tienda/map.JPG',
      alt: 'mapa',
      shopName: 'Local Manuel Montt',
      address: 'Manuel Montt 3245, local 12, Providencia',
      phoneNumber: '+56 9 1234 5678',
      email: 'manuelmontt@cookieco.cl',
      horarioLV: '9:00 a 20:00',
      horarioS: '9:00 a 14:00',
      horarioD: 'Cerrado'
    },
    {
      img: '/images/tienda/map.JPG',
      alt: 'mapa',
      shopName: 'Local Manuel Montt',
      address: 'Manuel Montt 3245, local 12, Providencia',
      phoneNumber: '+56 9 1234 5678',
      email: 'manuelmontt@cookieco.cl',
      horarioLV: '9:00 a 20:00',
      horarioS: '9:00 a 14:00',
      horarioD: 'Cerrado'
    },
    {
      img: '/images/tienda/map.JPG',
      alt: 'mapa',
      shopName: 'Local Manuel Montt',
      address: 'Manuel Montt 3245, local 12, Providencia',
      phoneNumber: '+56 9 1234 5678',
      email: 'manuelmontt@cookieco.cl',
      horarioLV: '9:00 a 20:00',
      horarioS: '9:00 a 14:00',
      horarioD: 'Cerrado'
    },
  ]

  return (
    <>
      <MenuHeroSection
        title={'Dónde Encontrarnos'}
        desc={'Encuentra tu local más cercano y visítanos! Podrás comprar directamente, aprovechar descuentos exclusivos en tienda y disfrutar tus galletas favoritas en un ambiente tranquilo y agradable.'}
        img={exterior2}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, p: 3 }}>
        <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
          <Grid size={12}>
            <Typography variant='h4' sx={{ m: 2, color: 'primary' }}>Tiendas</Typography>
          </Grid>
          {
            locationsList.map((local, index) => (
              <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center' }} key={index}>
                <LocationsCard
                  img={local.img}
                  alt={local.alt}
                  shopName={local.shopName}
                  address={local.address}
                  phoneNumber={local.phoneNumber}
                  email={local.email}
                  horarioLV={local.horarioLV}
                  horarioS={local.horarioS}
                  horarioD={local.horarioD}
                />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  )
}

export default Locations