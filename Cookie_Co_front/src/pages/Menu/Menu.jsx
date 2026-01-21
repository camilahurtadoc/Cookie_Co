import React from 'react'
import MenuHeroSection from '../../components/MenuHeroSection/MenuHeroSection'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import MenuCards from '../../components/MenuCards/MenuCards'
import cookie_avena_pasas from '../../assets/images/productos/cookies/avena_pasas_md.avif'
import cookie_blanco_negro from '../../assets/images/productos/cookies/blanco_negro_md.avif'
import cookie_cafe_toffee from '../../assets/images/productos/cookies/cafe_toffee_md.avif'
import cookie_caramelo_coco from '../../assets/images/productos/cookies/caramelo_coco_md.avif'
import cookie_chocolate_amargo_chip from '../../assets/images/productos/cookies/chocolate_amargo_chip_1_md.avif'
import cookie_chocolate_amargo_chip_mantequila_mani from '../../assets/images/productos/cookies/chocolate_amargo_chip_mantequila_mani_md.avif'
import cookie_doble_chip_chocolate from '../../assets/images/productos/cookies/doble_chip_chocolate_md.avif'
import cookie_vegana_chip_chocolate_nueces from '../../assets/images/productos/cookies/vegana_chip_chocolate_nueces_md.avif'

const Menu = () => {
  return (
    <>
      <MenuHeroSection />
      <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, mx: 10, p: 3 }}>
        <Typography variant='h4' sx={{ m: 2, color: 'primary' }}>Nuestros productos</Typography>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_avena_pasas} alt={'galleta avena y pasas'} title={'Cookie Avena y Pasas'} price={1000} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_blanco_negro} alt={'galleta chocolate blanco y negro'} title={'Cookie Cholocale Blanco y Negro'} price={2000} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_cafe_toffee} alt={'galleta café y toffee'} title={'Cookie Café y Toffee'} price={3000} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_caramelo_coco} alt={'galleta caramelo y coco'} title={'Cookie Caramelo y Coco'} price={4000} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_chocolate_amargo_chip} alt={'galleta chocolate amargo y chips'} title={'Cookie Chocolate Amargo y Chips'} price={5000} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_chocolate_amargo_chip_mantequila_mani} alt={'galleta chocolate amargo y mantequilla maní'} title={'Cookie Chocolate y Chips de Mantequilla Maní'} price={6000} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_doble_chip_chocolate} alt={'galleta doble chip chocolate'} title={'Cookie Doble Chip Chocolate'} price={7000} />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <MenuCards img={cookie_vegana_chip_chocolate_nueces} alt={'galleta vegana chip chocolates y nueves'} title={'Cookie Vegana Chip Chocolate y Nueces'} price={8000} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Menu