import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'
import CartCard from '../../components/CartCard/CartCard'
import cookie_chocolate_amargo_chip_mantequila_mani from '../../assets/images/productos/cookies/chocolate_amargo_chip_mantequila_mani_md.avif'
import cookie_doble_chip_chocolate from '../../assets/images/productos/cookies/doble_chip_chocolate_md.avif'
import cookie_vegana_chip_chocolate_nueces from '../../assets/images/productos/cookies/vegana_chip_chocolate_nueces_md.avif'
import Button from '@mui/material/Button'


const Cart = () => {
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', my: 2, mx: 10, p: 3 }} >

        <Typography variant='h5'>Cantidad de items:</Typography>
        <Box>
          <Box my={1}>
            <CartCard img={cookie_chocolate_amargo_chip_mantequila_mani} alt={'galleta chocolate amargo y mantequilla maní'} title={'Cookie Chocolate y Chips de Mantequilla Maní'} price={6000} />
          </Box>
          <Box my={1}>
            <CartCard img={cookie_doble_chip_chocolate} alt={'galleta doble chip chocolate'} title={'Cookie Doble Chip Chocolate'} price={7000} />
          </Box>
          <Box my={1}>
            <CartCard img={cookie_vegana_chip_chocolate_nueces} alt={'galleta vegana chip chocolates y nueves'} title={'Cookie Vegana Chip Chocolate y Nueces'} price={8000} />
          </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column', alignItems:'center', mt:3}}>

        <Typography variant='h5'>Total: $ 21000</Typography>
        <Button variant='contained' sx={{px:4, backgroundColor:'#A84A2E'}}>Pagar</Button>
        </Box>
      </Box>
    </>
  )
}

export default Cart