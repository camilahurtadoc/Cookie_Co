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
        desc={'Pide aquí las galletas que pide tu corazón. Hechas con amor y dedicación, listas para llegar y disfrutar en la comodidad de tu casa.'}
        img={fotoTienda}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, mx: 10, p: 3 }}>
        <Typography variant='h4' sx={{ m: 2, color: 'primary' }}>Nuestros productos</Typography>
        <Grid container spacing={2} >
          {
            listaCookies.map(item => (
              <Grid key={item.id} size={{ xs: 12, md: 6, lg:4 }}>
                <MenuCards img={item.imagen_url} alt={'cookie'} title={item.name} price={item.precio} id={item.id} />
              </Grid>
            ))
          }
          {/* <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_blanco_negro} alt={'galleta chocolate blanco y negro'} title={'Cookie Cholocale Blanco y Negro'} price={2000} id={2} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_cafe_toffee} alt={'galleta café y toffee'} title={'Cookie Café y Toffee'} price={3000} id={3} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_caramelo_coco} alt={'galleta caramelo y coco'} title={'Cookie Caramelo y Coco'} price={4000} id={4} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_chocolate_amargo_chip} alt={'galleta chocolate amargo y chips'} title={'Cookie Chocolate Amargo y Chips'} price={5000} id={5} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_chocolate_amargo_chip_mantequila_mani} alt={'galleta chocolate amargo y mantequilla maní'} title={'Cookie Chocolate y Chips de Mantequilla Maní'} price={6000} id={6} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_doble_chip_chocolate} alt={'galleta doble chip chocolate'} title={'Cookie Doble Chip Chocolate'} price={7000} id={7} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_vegana_chip_chocolate_nueces} alt={'galleta vegana chip chocolates y nueves'} title={'Cookie Vegana Chip Chocolate y Nueces'} price={8000} id={8} />
          </Grid> */}
        </Grid>
      </Box>
    </>
  )
}

export default Menu