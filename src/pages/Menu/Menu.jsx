import React, { useContext, useEffect } from 'react'
import MenuHeroSection from '../../components/MenuHeroSection/MenuHeroSection'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import MenuCards from '../../components/MenuCards/MenuCards'
// import fotoTienda from '../../../public/images/tienda/2150694732.jpg'
// import cookie_avena_pasas from '../../../public/images/productos/cookies/avena_pasas_md.avif'
// import cookie_blanco_negro from '../../../public/images/productos/cookies/blanco_negro_md.avif'
// import cookie_cafe_toffee from '../../../public/images/productos/cookies/cafe_toffee_md.avif'
// import cookie_caramelo_coco from '../../../public/images/productos/cookies/caramelo_coco_md.avif'
// import cookie_chocolate_amargo_chip from '../../../public/images/productos/cookies/chocolate_amargo_chip_1_md.avif'
// import cookie_chocolate_amargo_chip_mantequila_mani from '../../../public/images/productos/cookies/chocolate_amargo_chip_mantequila_mani_md.avif'
// import cookie_doble_chip_chocolate from '../../../public/images/productos/cookies/doble_chip_chocolate_md.avif'
// import cookie_vegana_chip_chocolate_nueces from '../../../public/images/productos/cookies/vegana_chip_chocolate_nueces_md.avif'
import { AxiosCookiesContext } from '../../context/AxiosCookiesContext'

const Menu = () => {

  const fotoTienda = '/images/tienda/2150694732.jpg'
  const cookie_avena_pasas = '/images/productos/cookies/avena_pasas_md.avif'
  const cookie_blanco_negro = '/images/productos/cookies/blanco_negro_md.avif'
  const cookie_cafe_toffee = '/images/productos/cookies/cafe_toffee_md.avif'
  const cookie_caramelo_coco = '/images/productos/cookies/caramelo_coco_md.avif'
  const cookie_chocolate_amargo_chip = '/images/productos/cookies/chocolate_amargo_chip_1_md.avif'
  const cookie_chocolate_amargo_chip_mantequila_mani = '/images/productos/cookies/chocolate_amargo_chip_mantequila_mani_md.avif'
  const cookie_doble_chip_chocolate = '/images/productos/cookies/doble_chip_chocolate_md.avif'
  const cookie_vegana_chip_chocolate_nueces = '/images/productos/cookies/vegana_chip_chocolate_nueces_md.avif'


  const { listaCookies, getCookiesList } = useContext(AxiosCookiesContext)

  useEffect(() => {
    getCookiesList()
  }, [])

  return (
    <>
      <MenuHeroSection
        title={'Pide Aquí'}
        desc={'Pide aquí las galletas que pide tu corazón. Hechas con amor y dedicación, listas para llevar y disfrutar en la comodidad de tu casa.'}
        img={fotoTienda}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, p: 3 }}>
        <Grid container spacing={2} sx={{ px: { xs: 2, md: 15 } }} >
          <Grid size={12}>
            <Typography variant='h4' sx={{ m: 2, color: 'primary' }}>Nuestros productos</Typography>
          </Grid>
          {
            listaCookies.map(item => (
              <Grid key={item.id} size={{ xs: 12, md: 6, lg: 4 }}>
                <MenuCards img={item.imagen_url} alt={'cookie'} title={item.name} price={item.precio} id={item.id} />
              </Grid>
            ))
          }
        </Grid>
      </Box>
    </>
  )
}

export default Menu